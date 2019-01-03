function albumToItem(albumObject) {
    return `
    <img src = '${albumObject.url}'/>
    
    `;
}

function albumList(arrayOfAlbum) {
    const albumToItems = arrayOfAlbum.map(albumToItem).join('');
    return `

    <div>
    ${albumToItems}
    </div>
    `;
}

module.exports = albumList;