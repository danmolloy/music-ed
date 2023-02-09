import React from "react"

interface ExerciseInfoProps {
  ascDesc: string
  showResults: boolean
  examObjs: {
    startingNote: string
    correctAnswer: string
    userAnswer?: string
  }[]
  section: string
  currentQ: string | null
  inExam: boolean
  name: string
  time: number
}

export default function ExerciseInfo(props: ExerciseInfoProps) {
  const {ascDesc, showResults, examObjs, section, currentQ, inExam, name, time} = props
  return (
    <div className="exercise-info" data-testid="ex-info-div">
      {showResults 
        ? <div data-testid="results-div">
            <p> You scored {[...examObjs].filter(i => i.correctAnswer == i.userAnswer).length}/{examObjs.length}</p>
            <p>{` Elapsed time: ${String(time).slice(0, -3)}.${String(time).slice(-3, -2)} seconds`}</p>
          </div>
        :<div data-testid="in-exam-info">
          {currentQ !== null && <h1>Question {currentQ + 1}</h1>}
          {section === "Melodic Intervals" 
          && inExam 
          && 
          <div data-testid="melodic-info">
            <p >{ascDesc}</p>
            <p className="text-gray-400">The first note is highlited in green.</p>
            <p className="text-gray-400">Select the second note on the keyboard below.</p>
          </div>}
          {inExam && name === 'chords' && <p data-testid="chords-info">Is this chord major or minor?</p>}
      </div>}
    </div>
  )
}