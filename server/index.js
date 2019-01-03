require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const formidable = require('formidable');
const fs = require('fs');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const db = require('./models/db');
const uuidv4 = require('uuid/v4');

const Image = require('./models/Image');
const Album = require('./models/Album');
const User = require('./models/User');
// const bcrypt = require('bcrypt');
const page = require('./views/page');
const userList = require('./views/userList');
const albumList = require('./views/albumList');
const userForm = require('./views/userForm');
const registrationForm = require('./views/registrationForm');
const loginForm = require('./views/loginForm');
const submitForm = require('./views/submitForm');

// Free Subscription - LOGO
const widget2 = require('./views/widget2');

app.use(session({
    store: new pgSession({
        pgPromise: db
    }),
    // UNIQUE PER APPLICATION/USER LOGIN
    secret: 'abc123kasfsdbukbfrkqwuehnfioaebgfskdfhgcniw3y4fto7scdghlusdhbv',
    saveUninitialized: false,
    cookie: { 
        maxAge: 30 * 24 * 60 * 60 * 1000 
    } 
}));

app.use(express.static('public'));

// ================================================================================================
//                  Configure body-parser to read data sent to HTML form tags
// ================================================================================================
app.use(bodyParser.urlencoded({extended: false}));

// ================================================================================================
//                          Configure body-parser to read JSON bodies 
// ================================================================================================
app.use(bodyParser.json());

// ================================================================================================
//                  
// ================================================================================================
function protectRoute(req, res, next) {
    let isLoggedIn = req.session.user;
    if (isLoggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
}

// ================================================================================================
//                  
// ================================================================================================
app.use((req, res, next) => {
    let isLoggedIn = req.session.user ? true : false;
    console.log(req.session.user);
    console.log(`On ${req.path}, is a user logged in? ${isLoggedIn}`);
    next();
});

// ================================================================================================
//                                          ALL USERS
// ================================================================================================

// Retrieve all users
app.get('/users', (req, res) => {
    User.getAll()
        .then(allUsers => {
            res.send(page(userList(allUsers)));
    });
});

// Listen for POST requests 
// Create a new user
app.post('/users', (req, res) => {
    console.log(req);
    const newUsername = req.body.name;
    console.log(newUsername);
    User.add(newUsername)
        .then(theUser => {
            res.send(theUser);
        })
});

// ================================================================================================
//                                      USER REGISTRATION
// ================================================================================================
app.get('/register', (req, res) => {
    // Send them the signup form
    const theForm = registrationForm();
    const thePage = page(theForm);
    res.send(thePage);
    // res.send(page(registrationForm()));
});

app.post('/register', (req, res) => {
    // Process the signup form
    // 1. Grab the values out of req.body
    const newName = req.body.name;
    const newUsername = req.body.username;
    const newPassword = req.body.password;
    
    // 2. Call User.add
    User.add(newName, newUsername, newPassword)
        .catch((err) => {
            console.log(err);
            console.log('that was the error');
            res.redirect('/login');
        })
        .then(newUser => {
            // 3. If that works, redirect to the welcome page
            req.session.user = newUser;
            res.redirect('/welcome');
        });
});

// ================================================================================================
//                                              USER LOGIN
// ================================================================================================
app.get('/login', (req, res) => {
    // Send them the login form 
    const theForm = loginForm();
    const thePage = page(theForm);
    res.send(thePage);
});

app.post('/login', (req, res) => {
    // Process the login form 
    // 1. Grab values from form 
    const theUsername = req.body.username;
    const thePassword = req.body.password;
    // 2. Find a user whose name
    // matches `theUsername`
    User.getByUsername(theUsername)
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
        .then(theUser => {
            // const didMatch = bcrypt.compareSync(thePassword, theUser.pwhash);
            if (theUser.passwordDoesMatch(thePassword)) {
                req.session.user = theUser;
                req.session.save( () =>{
                    res.redirect('/welcome');
                })
            } else {
                res.redirect('/login');
            }
        })
});

// ================================================================================================
//                   REDIRECT FROM LOGIN OR REGISTER PAGE TO MAIN WELCOME PAGE         
// ================================================================================================
app.get('/welcome', (req, res) => {
    res.send(widget2());
})

// ================================================================================================
//                                              USER LOGOUT
// ================================================================================================
app.post('/logout', (req, res) => {
    // End session and redirect them to the home page
    req.session.destroy(() => {
        req.session = null;
        res.redirect('/login');
    });

});

// ================================================================================================
//                                      RETRIEVE ONE USER'S INFO                     
// ================================================================================================
app.get('/users/:id([0-9]+)', (req, res) => {
    User.getById(req.params.id)
        .catch(err => {
            res.send({
                message: `no soup for you`
            });
        })
        .then(theUser => {
            res.send(theUser);
        })
});

// ================================================================================================
//                                  RETRIEVE ALL ALBUMS FOR A USER 
// ================================================================================================
app.get(`/users/:id(\\d+)/album`, (req, res) => {
    User.getById(req.params.id)
        .then(theUser => {
            console.log(theUser);
            theUser.getAlbums()
                .then(allAlbums => {
                    const albumsUL = albumList(allAlbums);
                    const thePage = page(albumsUL);
                    res.send(thePage);
                })
        })
});

// ================================================================================================
//                          GET THE FORM FOR EDITING ONE USER'S INFO             
// ================================================================================================
app.get('/users/:id([0-9]+)/edit', (req, res) => {
    User.getById(req.params.id)
        .catch(err => {
            res.send({
                message: `no soup for you`
            });
        })
        .then(theUser => {
            res.send(page(userForm(theUser)));
        })
});

// ================================================================================================
//                          PROCESS THE FORM FOR EDITING ONE USER'S INFO       
// ================================================================================================
app.post('/users/:id([0-9]+)/edit', (req, res) => {
    const id = req.params.id;
    const newName = req.body.name;
    // Get the user by their id
    User.getById(id)
        .then(theUser => {
            // call that user's updateName method
            theUser.updateName(newName)
                .then(didUpdate => {
                    if (didUpdate) {
                        // res.send('yeah you did');
                        // res.redirect(`/users/${id}/edit`);
                        res.redirect(`/users/`);
                    } else {
                        res.send('💩');
                    }
                });            
        });
});

// ================================================================================================
//                          POST USERS UPLOADED PHOTOS  
// ================================================================================================
app.get('/submit-form', (req, res) => {
    res.send(submitForm());
})

app.post('/submit-form', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error', err)
        throw err
      }
    //   console.log('Fields', fields)
    //   console.log('Files', files)
      const promiseArray = Object.values(files).filter(file => file.size >0)
        .map(file => {
        // console.log(file);
        // console.log(file.size);
        // if (file.size > 0) {
            return (
                new Promise((resolve, reject)=> {
                    const newname = `/images/${uuidv4()}.png`
            fs.rename(file.path, __dirname + '/public' + newname, function (err) { 
                if(err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                else {
                    resolve(Image.add(newname));
                } 
            })
                })

            );
            
    

      }); //This is the end of the map 
      Promise.all(promiseArray)
        .then(()=>{
            res.redirect('/photos');
              

        })


    })

})


// /PHOTOS ROUTE- CHANGE FROM PHOTOS TO HTML SO THAT YOUR IMAGE INTERPOLATED INTO BEOFRE AND AFTER SLIDERS 
    
// ================================================================================================
//                          VIEWING PHOTOS 
// ================================================================================================
app.get('/photos', (req, res) => {
    Image.getImages()
        .then(allImages => {
            console.log(allImages);
            // console.log(allImages);
            res.send(page(albumList(allImages)));
    })
        .catch(err => {
            console.log(err);
        })
    
    
});



// ================================================================================================
//                          ALLOWS VIEWING ON LOCAL HOST 3005
// ================================================================================================
app.listen(3005, () => {
    console.log('You express app is ready!');
});