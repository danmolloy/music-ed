export default function ExerciseControls(props) {
  const {inExam, handleStop, playTones, handleNewStart, direction} = props
  return (
    <div className="control-panel">
      {inExam 
        ? <div>
            <button className="panel-btn text-yellow-500 hover:bg-yellow-100 active:bg-yellow-200" onClick={() => playTones()}>Repeat</button>
            <button className="panel-btn text-rose-500 hover:bg-rose-100 active:bg-rose-200" onClick={() => handleStop()}>Stop</button>
          </div>
        : direction === "Either" 
        ? <div >
            <button className="panel-btn text-blue-500 hover:bg-blue-100 active:bg-blue-200" onClick={() => handleNewStart("Ascending")}>Ascending</button>
            <button className="panel-btn text-blue-500 hover:bg-blue-100 active:bg-blue-200" onClick={() => handleNewStart("Descending")}>Descending</button>
          </div>
        : direction === "Both"  
        ? <button className="panel-btn text-blue-500 hover:bg-blue-100 active:bg-blue-200" onClick={() => handleNewStart("Both")}>Start</button>
        : <button className="panel-btn text-blue-500 hover:bg-blue-100 active:bg-blue-200" onClick={() => handleNewStart("Ascending")}>Start</button>
      }
    </div>
  )
}