// define the make_album function
function make_album(artist_name: string, album_title: string, trackes?: number){
let album: {artist: string, title: string, trackes?: number } = {
    artist: artist_name,
    title: album_title,
};
if(trackes !== undefined){
    album.trackes = trackes;
}

return album;
}

// calling three function in creat 3 veriable with different values


let album1 = make_album("azeem", "album title 1")

let album2 = make_album("areeb", "album title 2")

// calling a make_album function with 3 paraments
let album3 = make_album("ali", "album title 3",10);


// print value of our object  creat by function

console.log( album1);

console.log( album2);

console.log( album3);
