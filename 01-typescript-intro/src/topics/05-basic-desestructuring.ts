// interface AudioPlayer
interface AudioPlayer {
    audioVolumne: number;
    songDuration: number;
    song: string;
    details: Details
}
// interface Details
interface Details {
    author: string;
    year: number
}

// objeto Audio
const audioPlayer : AudioPlayer = {
    audioVolumne: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
// Desestructuracion objeto 
const {song, songDuration, details} = audioPlayer
const {author} = details

// Desestructuracion de arreglo
const [p1,p2,p3]:string [] = ['Goku', 'Vegeta', 'Trunks'];
// console.log('Song', song, 'Duration', songDuration, 'Author', author )
console.log('Personaje 3', p3)
export {}