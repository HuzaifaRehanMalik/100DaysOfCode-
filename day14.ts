// Album: Create objects for music albums.
let magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);

// Magicians: Display magician names from an array.
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

const greatMagicians: string[] = make_great(magicians);

// Great Magicians: Add "the Great" to magician names.
function show_great_magicians(greatMagicians: string[]): void {
    for (let magician of greatMagicians) {
        console.log(magician);
    }
}

show_great_magicians(greatMagicians);
