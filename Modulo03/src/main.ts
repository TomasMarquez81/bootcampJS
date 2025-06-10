import "./style.css";

interface Group {
    artistName: string;
    yearFounded: number;
    isActive: boolean;
    musicGenre: string;
}

const groupA : Group = {
    artistName:  "The Beatles",
    yearFounded: 1960,
    isActive: true,
    musicGenre:"🎵Pop Rock",
};  

const groupB: Group ={
    artistName: "Queen",
    yearFounded: 1970,
    isActive: false,
    musicGenre: "🎸 Rock",
};

const groupC: Group = {
    artistName: "AC DC",
    yearFounded: 1973,
    isActive: true,
    musicGenre: "🤘 Hard Rock",
}

const groupD: Group = {
    artistName: "Ludwig van Beethoven",
    yearFounded: 1770,
    isActive: false,
    musicGenre: "🎼 Clásica",
}

const groupE: Group ={
    artistName: "The Rolling Stones",
    yearFounded: 1962,
    isActive: true,
    musicGenre: "🎸 Rock",
}

const bold = "\x1b[1m";
const reset = "\x1b[0m";
const bgGreen = "\x1b[42m";
const fgBlack = "\x1b[30m";

console.log(`Name: ${bgGreen}${fgBlack}${bold}${groupA.artistName}${reset}, Founded: ${groupA.yearFounded}, Active: ${groupA.isActive}, Genre: ${groupA.musicGenre}`);
console.log(`Name: ${bgGreen}${fgBlack}${bold}${groupB.artistName}${reset}, Founded: ${groupB.yearFounded}, Active: ${groupB.isActive}, Genre: ${groupB.musicGenre}`);
console.log(`Name: ${bgGreen}${fgBlack}${bold}${groupC.artistName}${reset}, Founded: ${groupC.yearFounded}, Active: ${groupC.isActive}, Genre: ${groupC.musicGenre}`);
console.log(`Name: ${bgGreen}${fgBlack}${bold}${groupD.artistName}${reset}, Founded: ${groupD.yearFounded}, Active: ${groupD.isActive}, Genre: ${groupD.musicGenre}`);
console.log(`Name: ${bgGreen}${fgBlack}${bold}${groupE.artistName}${reset}, Founded: ${groupE.yearFounded}, Active: ${groupE.isActive}, Genre: ${groupE.musicGenre}`);