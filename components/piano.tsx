import React from "react";
import { useEffect, useState } from "react";
import * as Tone from "tone";


export default function Piano({
  lowestNote = "C4",
  highestNote = "C6", 
  submitAnswer = (e: any) => {return;}, 
  playTones = true, 
  startingNote = null, 
  correctAnswer = null,
}) {
  const [keyText, setKeyText] = useState<null|string>(null) 
  const [selectedNote, setSelectedNote] = useState<null|string>(null)

  useEffect(() => {
    const logKey = (e) => {
      
      let note = pianoKeys.find(i => i.keyboard === e.key.toUpperCase()) 
      
      note !== undefined
      && handleClick(note.name)
      
    }
    window.addEventListener("keydown", logKey)
    return () => {
      window.removeEventListener("keydown",logKey)
    }
  }, [])
  

  const handleClick = (name: string): void => {
    if (playTones === true) {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease(name, "8n")
    }
    submitAnswer(name);
  }

  const handleToggle = (): void => {
    if (keyText === "pitch") {
      //setKeyText("key")
      setKeyText(null)
    } else if (keyText === null){
      setKeyText("pitch")
    } /* else if (keyText === "key") {
      setKeyText(null)
    }  */
  }


  return (
    <div className="piano" data-testid="piano-div">
      <button className="piano-btn" onClick={() => handleToggle()} data-testid="note-name-toggle">ABC</button>
      
      <div className="piano-keyboard">
        {pianoKeys.slice(pianoKeys.findIndex(i => i.name === String(lowestNote)), pianoKeys.findIndex(i => i.name === String(highestNote)) + 1).map(i => (
          <button 
          className={
            i.name.includes("#") && i.name === startingNote
            ? "black-key text-sm font-thin bg-green-400 hover:bg-green-400"
            : i.name.includes("#") && i.name === correctAnswer
            ? "black-key text-sm font-thin active:bg-green-400"
            : i.name.includes("#") 
            ? "black-key text-sm font-thin active:bg-red-400"
            : i.name === startingNote
            ? "text-sm font-thin white-key bg-green-400 hover:bg-green-400"
            : i.name === correctAnswer
            ? "text-sm font-thin white-key active:bg-green-400"
            : "text-sm font-thin white-key active:bg-red-400"} 
            key={i.name} onClick={() => handleClick(i.name)}>
            {keyText == "pitch" ? i.name : keyText == "key" ? i.keyboard : null}
          </button>
        ))}
      </div>
    </div>
  )
}

export const pianoKeys = [
  {
    name: "C4",
    keyboard: "Q"
  },
  {
    name: "C#4",
    keyboard: "2"
  },
  {
    name: "D4",
    keyboard: "W"
  },
  {
    name: "D#4",
    keyboard: "3"
  },
  {
    name: "E4",
    keyboard: "E"
  },
  {
    name: "F4",
    keyboard: "R"
  },
  {
    name: "F#4",
    keyboard: "5"
  },
  {
    name: "G4",
    keyboard: "T"
  },
  {
    name: "G#4",
    keyboard: "6"
  },
  {
    name: "A4",
    keyboard: "Y"
  },
  {
    name: "A#4",
    keyboard: "7"
  },
  {
    name: "B4",
    keyboard: "U"
  },
  {
    name: "C5",
    keyboard: "Z"
  },
  {
    name: "C#5",
    keyboard: "S"
  },
  {
    name: "D5",
    keyboard: "X"
  },
  {
    name: "D#5",
    keyboard: "D"
  },
  {
    name: "E5",
    keyboard: "C"
  },
  {
    name: "F5",
    keyboard: "V"
  },
  {
    name: "F#5",
    keyboard: "G"
  },
  {
    name: "G5",
    keyboard: "B"
  },
  {
    name: "G#5",
    keyboard: "H"
  },
  {
    name: "A5",
    keyboard: "N"
  },
  {
    name: "A#5",
    keyboard: "J"
  },
  {
    name: "B5",
    keyboard: "M"
  },
  {
    name: "C6",
    keyboard: ","
  },
]