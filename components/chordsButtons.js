export default function ChordsButtons(props) {
  const {answers, examObjs, submitAnswer, currentQ} = props
  return (
    <div className="chord-btns-div">
      {answers.map(i => (
        <button className={examObjs[currentQ].correctAnswer !== JSON.stringify(i.intervals) ? "answer-btns active:bg-red-500" : "answer-btns active:bg-green-400"} key={i.name} onClick={() => submitAnswer(JSON.stringify(i.intervals))}>
          {i.name}
        </button>
      ))}
    </div>
  )
}