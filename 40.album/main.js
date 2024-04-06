// define the make_album function
function make_album(artist_name, album_title, trackes) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (trackes !== undefined) {
        album.trackes = trackes;
    }
    return album;
}
// calling three function in creat 3 veriable with different values
var album1 = make_album("azeem", "album title 1");
var album2 = make_album("areeb", "album title 2");
// calling a make_album function with 3 paraments
var album3 = make_album("ali", "album title 3", 10);
// print value of our object  creat by function
console.log(album1);
console.log(album2);
console.log(album3);
