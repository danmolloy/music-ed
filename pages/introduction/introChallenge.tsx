import { useState } from 'react';
import Piano from '../../components/piano'
import React from 'react'

interface IntroChallengeProps {
  challenge: {
    title: string
    keyboard: string
    blurb: string
    range: string

  }
}

export default function IntroChallenge(props: IntroChallengeProps) {
  const { challenge } = props
  const [startEx, setStartEx] = useState(false)

  const highestRegex = /[A-Z]#?[0-9]$/g;
  const lowestRegex = /^[A-Z]#?[0-9]/g; 

  const submitAnswer = (e: any) => {
    return;
  }

  const setEx = () => {
    return setStartEx(!startEx)
  }

  if (challenge === undefined) return <p>Loading..</p>

  return (
    <div className="mt-8 flex flex-col items-center">
        <h2>{challenge.title}</h2>
        <p>{challenge.blurb}</p>
        <button onClick={() => setEx()}>{startEx ? "Stop": "Start"}</button>
        {challenge.keyboard === "true" 
        && <Piano 
          lowestNote={String(challenge.range.match(lowestRegex))}
          highestNote={String(challenge.range.match(highestRegex))} 
          submitAnswer={e => submitAnswer(e)} 
          playTones={startEx ? true : false} 
          startingNote={null} 
          correctAnswer={null}/>}
    </div>
  )
}