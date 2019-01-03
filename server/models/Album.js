const db = require('./db');

class Album {
    constructor(id, name, code) {
        this.id = id;
        this.name = name;
        this.code = code;
    }


// ========================================================
//                      CREATE - ADD
// ========================================================
static add(name, code) {
    return db.one(`insert into Albums (name,code) values($1, $2) returning id`, [name,code])
        .then(data => {
            const u = new Album(name, code);
            return u;
        })
}

static from(albumObj) {
    const name = albumObj.name;
    const code = albumObj.code;
    return new Album(name, code);
}



// ========================================================
//                      RETRIEVE - GET
// ========================================================
    // Get by code 
    static getByCode(code) {
        return db.any(`select * from albums where code = $1`, [code])
            .then(albumsObj => {
                const c = new Album(albumsObj.code, albumsObj.name, albumsObj.id);
                return c;
            })
    }

    // Get by images
    static getByImages(image) {
        return db.any(`select * from images where code = $1`, [image])
            .then(albumsObj => {
                return new Album(albumsObj.url, albumsObj.album);
            })
    }


 static getAlbums() {
        return db.any(` select * from albums`)
            .then(albumsArray => {
                // transform array of objects into array of User instances ?
                const instanceArray = albumsArray.map(albumsObj => {
                    const album = new Album(albumsObj.code, albumsObj.name, albumsObj.id);
                    return album;
                });
                return instanceArray;
            })
    }
}



module.exports = Album;