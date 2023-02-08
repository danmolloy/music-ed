import React from "react"

interface ControlsProps {
  inExam: boolean
  handleStop: () => void
  playTones: () => void
  handleNewStart: (arg: string) => void
  direction: "Either"|"Both"|string
}

export default function ExerciseControls(props: ControlsProps) {
  const {inExam, handleStop, playTones, handleNewStart, direction} = props
  return (
    <div className="control-panel" data-testid="ex-controls-div">
      {inExam 
        ? <div data-testid="in-exam-controls">
            <button className="panel-btn text-yellow-500 hover:bg-yellow-100 active:bg-yellow-200" onClick={() => playTones()} data-testid="repeat-btn">Repeat</button>
            <button className="panel-btn text-rose-500 hover:bg-rose-100 active:bg-rose-200" onClick={() => handleStop()} data-testid="stop-btn">Stop</button>
          </div>
        : direction === "Either" 
        ? <div data-testid="either-controls">
            <button data-testid="asc-btn" className="panel-btn text-blue-500 hover:bg-blue-100 active:bg-blue-200" onClick={() => handleNewStart("Ascending")}>Ascending</button>
            <button data-testid="desc-btn" className="panel-btn text-blue-500 hover:bg-blue-100 active:bg-blue-200" onClick={() => handleNewStart("Descending")}>Descending</button>
          </div>
        : direction === "Both"  
        ? <button className="panel-btn text-blue-500 hover:bg-blue-100 active:bg-blue-200" onClick={() => handleNewStart("Both")} data-testid="both-controls">Start</button>
        : <button className="panel-btn text-blue-500 hover:bg-blue-100 active:bg-blue-200" onClick={() => handleNewStart("Ascending")}>Start</button>
      }
    </div>
  )
}