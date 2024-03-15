// Album: Create objects for music albums.
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
// Magicians: Display magician names from an array.
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var greatMagicians = make_great(magicians);
// Great Magicians: Add "the Great" to magician names.
function show_great_magicians(greatMagicians) {
    for (var _i = 0, greatMagicians_1 = greatMagicians; _i < greatMagicians_1.length; _i++) {
        var magician = greatMagicians_1[_i];
        console.log(magician);
    }
}
show_great_magicians(greatMagicians);
