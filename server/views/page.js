
// ========================================================
//          HELPER FUNCTIONS FROM HELPER.JS
// ========================================================
const {
    header, 
    footer, 
    logoutButton, 
    loginOrRegister
} = require('./helper');




// ========================================================
// ARGUMENTS OF CONTENT AND SETTING START LOGIN STATUS AS FALSE 
// ========================================================
function page(content, isLoggedIn=false) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
        <link rel="stylesheet" href="/stylesheets/index.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
            ${isLoggedIn ? logoutButton() : header()}
            ${content}
            ${footer()}

    </body>
    </html>  
    `;
}


module.exports = page;


// ${
//     isLoggedIn ? logoutButton() : loginOrRegister()
// }


// ${isLoggedIn ? logoutButton() : header()}