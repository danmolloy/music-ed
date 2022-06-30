import { useState } from "react";
import Layout from "../components/layout";
import PracticeForm from "../components/practiceForm";
import Piano from '../components/piano'
import * as Tone from "tone";
import Exercise from "./course/beginner/[id]";
import Challenge from "../components/challenge";



export default function Practice() {
  const [inExam, setInExam] = useState(false)
  const [questions, setQuestions] = useState(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [simultaneous, setSimultaneous] = useState(false)

  const getQs = () => {
    let intervals = [2, 4, 5, 7];

  }

  const setChords = () => {
    let questions = new Array(10).fill().map(i => ({
      startingNote: Math.floor(Math.random() * 10), 
      correctAnswer: 0
    }))

    for (let i = 0; i< questions.length; i++) {
      questions[i].startingNote = [questions[i].startingNote, questions[i].startingNote + 1, questions[i].startingNote + 2]
    }
    console.log(questions)
  }

  const handleStart = () => {
    setInExam(!inExam)
  }

  const playTones = () => {
    const now = Tone.now()
    if (simultaneous === 'true') {
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      synth.triggerAttack(questions[currentQ].startingNote, now)
      synth.triggerAttack(questions[currentQ].correctAnswer, now + .5)
      synth.triggerRelease([questions[currentQ].startingNote, questions[currentQ].correctAnswer], now + .75);
    } else {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease(questions[currentQ].startingNote, "8n")
      synth.triggerAttackRelease(questions[currentQ].correctAnswer, "8n", now + 1)
    }
  } 
  

  return (
    <Layout>
      <button onClick={() => setChords()}>Maj Mi</button>
      <button>Test</button>
      <Challenge inExam={inExam} playTones={() => playTones()} handleStop={() => handleStart()} handleStart={() => handleStart()}/>
    </Layout>
  )
}