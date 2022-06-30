export default function ExerciseInfo(props) {
  const {ascDesc, showResults, examObjs, section, currentQ, inExam, name} = props
  return (
    <div className="exercise-info">
      {showResults 
        ? <p> You scored {[...examObjs].filter(i => i.correctAnswer == i.userAnswer).length}/{examObjs.length}</p>
        :<div>
          {currentQ !== null && <h1>Question {currentQ + 1}</h1>}
          {section === "Melodic Intervals" && inExam && <p className="text-gray-400">{ascDesc}</p>}
          {inExam && name === 'chords' && <p>Is this chord major or minor?</p>}
      </div>}
    </div>
  )
}