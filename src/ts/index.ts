import { notesToPlayInOrder } from "./music-to-play";
import { BEATS_PER_MINUTE } from "./musical-score"

function playMusic() {
    const notes = notesToPlayInOrder;

    // TODO Play these notes one after the other at the pitch and rhythm given in each note
    console.log(notes)

    function playNote(x: any, i: number) {
        // Initialising pitch, octave, accidental
        let musicalNotes = `${notes[i].pitch}${notes[i].octave}${notes[i].accidental ? notes[i].accidental:""}`
        console.log(musicalNotes)

        // play single musicalNotes
        let playEach = document.getElementById(musicalNotes) as HTMLAudioElement
        playEach.play()

        // looping through all the avaliable musicalNotes
        setTimeout(() => {
            playEach.pause();
            if (notes[i+1]) {
                playNote(notes[i+1], i+1);
            }
        }, notes[i].beats * BEATS_PER_MINUTE);
    }
    playNote(notes[0], 0);
}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
