import { useState } from 'react';
import Piano from '../../components/piano'

export default function IntroChallenge(props) {
  const { challenge } = props
  const [startEx, setStartEx] = useState(false)

  const highestRegex = /[A-Z]#?[0-9]$/g;
  const lowestRegex = /^[A-Z]#?[0-9]/g; 

  const submitAnswer = (e) => {
    return;
  }

  const setEx = () => {
    return setStartEx(!startEx)
  }

  return (
    <div className="mt-8 flex flex-col items-center">
        <h2>{challenge.title}</h2>
        <p>{challenge.blurb}</p>
        <button onClick={() => setEx()}>{startEx ? "Stop": "Start"}</button>
        {challenge.keyboard === "true" 
        && <Piano 
          lowestNote={challenge.range.match(lowestRegex)}
          highestNote={challenge.range.match(highestRegex)} 
          submitAnswer={e => submitAnswer(e)} 
          playTones={startEx ? true : false} 
          startingNote={null} 
          correctAnswer={null}/>}
    </div>
  )
}