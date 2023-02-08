import React from "react"

interface chordsButtonsProps {
  answers: {
    name: string
    intervals: number[]
  }[]
  examObjs: {
    notes: string[]
    correctAnswer: string[]
    userAnswer?: string[]
  }[]
  submitAnswer: (e: any) => void
  currentQ: number
}

export default function ChordsButtons(props: chordsButtonsProps) {
  const {answers, examObjs, submitAnswer, currentQ} = props
  return (
    <div className="chord-btns-div" data-testid="chords-btns-div">
      {answers.map(i => (
        <button data-testid={`${i.name}-button`} className={examObjs[currentQ].correctAnswer !== i.intervals.map(j => String(j)) ? "answer-btns active:bg-red-500" : "answer-btns active:bg-green-400"} key={i.name} onClick={() => submitAnswer(JSON.stringify(i.intervals))}>
          {i.name}
        </button>
      ))}
    </div>
  )
}