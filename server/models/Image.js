const db = require('./db');

class Image {
    constructor(id, url) {
        this.id = id;
        this.url = url;
    }


// ========================================================
//                      CREATE - ADD
// ========================================================


    static add(url) {
        return db.one(`insert into images (url) values($1) returning id`, [url])
            .then(data => {
                // console.log(data);
                const u = new Image(data.id, url);
                return u;
            })
    }

    static from(imageObj) {
        const url = imageObj.url;
        return new Image(id, url);
    }


// ========================================================
//                      RETRIEVE - GET
// ========================================================


    static getImages() {
        return db.any(`select * from images`)
            .then(imagesArray => {
                // transform array of objects into array of User instances ?
                const instanceArray = imagesArray.map(imagesObj => {
                    const image = new Image(imagesObj.id, imagesObj.url);
                    return image;
                });
                return instanceArray;
            })
    }


}



module.exports = Image;