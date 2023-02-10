import { useEffect, useState } from "react"
import ExerciseHeader from "./exerciseHeader"
import ExerciseInfo from './exerciseInfo'
import ExerciseControls from './exerciseControls'
import Piano, { pianoKeys } from "./piano"
import * as Tone from "tone";
import ChordsButtons from "./chordsButtons"
import { useTimer } from "react-use-precision-timer";
import { useSession } from "next-auth/react"
import React from "react"

interface QuestionObj{
  startingNote: undefined|string
  correctAnswer: undefined|string
}

interface ChordQuestionObj { 
  notes: string[]
  correctAnswer: string; 
}

interface ExerciseComponentProps {
  challenge: {
    section: string
    sectionLink: string
    name: string
    info: string
    key: string
    numberQs: string
    range: string
    intervals: number[]
    direction: string
    answers?: any
  }
  multidirection: boolean
  harmonic: boolean
}


export default function ExerciseComponent(props: ExerciseComponentProps) {
  const { data: session } = useSession()

  const [ascDesc, setAscDesc] = useState(null)
  const [inExam, setInExam] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [examObjs, setExamObjs] = useState([])
  const [currentQ, setCurrentQ] = useState(null)
  const timer = useTimer({ delay: 1000 });

  const highestRegex = /[A-Z]#?[0-9]$/g;
  const lowestRegex = /^[A-Z]#?[0-9]/g; 
  const { challenge, harmonic, multidirection } = props;


  useEffect(() => {
    if (currentQ !== null) {
      playTones()
    }
  }, [currentQ])

  if (challenge === undefined) return <p>Loading..</p>

  const handleIntervalsStart = (direction: string):void => {
    setAscDesc(direction)
    setShowResults(false)
    let arr = intervalsArr(direction)
    setExamObjs(arr)
    setCurrentQ(0)
    setInExam(!inExam)
    timer.start()
  } 

  const bothDirectionsIntervalsArr = (): QuestionObj[] => {
    let arr: QuestionObj[] = new Array(challenge.numberQs).fill(null).map(i => ({
      startingNote: undefined,
      correctAnswer: undefined
    }))
    let randIndex: number;
    let randInterval: number;
    let fiftyFifty: number;
    let highestNote = pianoKeys.findIndex(i => i.name === String(challenge.range.match(highestRegex)))
    let lowestNote = pianoKeys.findIndex(i => i.name === String(challenge.range.match(lowestRegex)))

    for (let i = 0; i < arr.length; i ++) {
      randIndex = Math.floor(Math.random() * highestNote)
      randInterval = Math.floor(Math.random() * challenge.intervals.length)
      fiftyFifty = Math.floor(Math.random() * 2)
      
      arr[i].startingNote = pianoKeys[randIndex].name;
      if (fiftyFifty === 0 && randIndex - challenge.intervals[randInterval] < lowestNote) {
        arr[i].correctAnswer =  pianoKeys[randIndex + challenge.intervals[randInterval]].name
        } else if (fiftyFifty === 0) {
          arr[i].correctAnswer =  pianoKeys[randIndex - challenge.intervals[randInterval]].name
        } else if (fiftyFifty === 1 && randIndex + challenge.intervals[randInterval] > highestNote) {
          arr[i].correctAnswer =  pianoKeys[randIndex - challenge.intervals[randInterval]].name
        } else {
          arr[i].correctAnswer =  pianoKeys[randIndex + challenge.intervals[randInterval]].name
        }
    }
    return arr.sort(() => Math.random() - 0.5);
  }


  const intervalsArr = (direction: string): QuestionObj[]|ChordQuestionObj[] => {
    let lowestNote: number;
    let highestNote: number;
    let getStartingNote: undefined|(() => number);
    let startingNoteIndex: number;
    let randInterval: number; 
    let plusOrMinus: undefined|((n: number, i: number) => number);
    if (direction === "Both") {
      return bothDirectionsIntervalsArr()
    }
    else if (challenge.section === "Triads" || challenge.section === "Chords") {
      return getChordsArr()
    }
    else if (direction === "Descending") {
      lowestNote = pianoKeys.findIndex(i => i.name === String(challenge.range.match(lowestRegex))) + Math.max(...challenge.intervals)
      getStartingNote = () => Math.floor(Math.random() * (pianoKeys.length - lowestNote) + lowestNote)
      plusOrMinus = (n, i) => n - i
    }
    else {
      highestNote = pianoKeys.findIndex(i => i.name === String(challenge.range.match(highestRegex))) - Math.max(...challenge.intervals)
      getStartingNote = () => Math.floor(Math.random() * highestNote)
      plusOrMinus = (n, i) => n + i
    }
    
    let examArr = new Array(challenge.numberQs).fill(null).map(i => ({
      startingNote: pianoKeys[getStartingNote()].name,
      correctAnswer: undefined
    }))
    
    for (let i = 0; i < examArr.length; i++) {
      randInterval = challenge.intervals[Math.floor(Math.random() * challenge.intervals.length)]
      startingNoteIndex = pianoKeys.findIndex(e => e.name === examArr[i].startingNote)
      examArr[i].correctAnswer = pianoKeys[plusOrMinus(startingNoteIndex, randInterval)].name
    }
    return examArr
  }

  const getChordsArr = (): ChordQuestionObj[] => {
    let highestNote: number;
    let intervalsArr = []
    let randIndex: number;
    let getStartingNote: () => number = () => Math.floor(Math.random() * highestNote)
    let startingNoteIndex: number;
    let upperNotesArr = []

    for (let i = 0; i < challenge.answers.length; i ++) {
      intervalsArr = [...intervalsArr, ...challenge.answers[i].intervals]
    }
    highestNote = pianoKeys.findIndex(i => i.name === String(challenge.range.match(highestRegex))) - Math.max(...intervalsArr)

    let examArr = new Array(challenge.numberQs).fill(null).map(i => ({
      notes: [],
      correctAnswer: undefined
    }))
    
    for (let i = 0; i < examArr.length; i++) {
      startingNoteIndex = getStartingNote()

      randIndex = Math.floor(Math.random() * challenge.answers.length)
      examArr[i].correctAnswer = JSON.stringify(challenge.answers[randIndex].intervals)
      upperNotesArr = [...challenge.answers[randIndex].intervals].map(i => i = pianoKeys[startingNoteIndex + i].name)
      examArr[i].notes = [pianoKeys[startingNoteIndex].name, ...upperNotesArr]
    }
    return examArr
  }

  const handleStop = (): void => {
    setCurrentQ(null)
    setInExam(false)
    //timer.stop()
    timer.pause()
  }

  const playTones = (): void => {
    const now = Tone.now()

    if (examObjs[currentQ].notes) {
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        synth.triggerAttack([...examObjs[currentQ].notes], now)
        synth.triggerRelease([...examObjs[currentQ].notes], now + 1.5)
    }

    else if (harmonic) {
      const synth = new Tone.PolySynth().toDestination();
      synth.triggerAttack(examObjs[currentQ].startingNote, now)
      synth.triggerAttack(examObjs[currentQ].correctAnswer, now)
      synth.triggerRelease([examObjs[currentQ].startingNote, examObjs[currentQ].correctAnswer], now + 1.5)
    } else {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease(examObjs[currentQ].startingNote, "8n")
      synth.triggerAttackRelease(examObjs[currentQ].correctAnswer, "8n", now + 1)
    }
  }

  const submitAnswer = async (e: string) => {
    if (inExam === false) {
      return;
    }
    let arr = [...examObjs]
    arr[currentQ].userAnswer = e
    setExamObjs(arr)
    if (examObjs.length - 1 === currentQ) {
      timer.pause()
      let values = {
        exName: `${challenge.name}`,
        exCategory: `${challenge.section}`,
        ascDesc: `${ascDesc}`,
        elapsedTime: timer.getElapsedRunningTime(),
        score: [...examObjs].filter(i => i.correctAnswer == i.userAnswer).length/examObjs.length
      }
      if (session) {
        try {
          await fetch(`/api/challenge`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          }) 
          
        } catch (error) {
          console.error(error)
        } 
      }
       
      
      setShowResults(true)
      handleStop()

    } else {
      setTimeout(() => setCurrentQ(currentQ + 1), 200)
    }
  }

  return (
    <div className="exercise-div" data-testid="exercise-div">
      <ExerciseHeader section={challenge.section} sectionLink={`${challenge.sectionLink}`} name={challenge.name} info={challenge.info}/>
      <div className="exercise-info-and-controls">
        <ExerciseInfo showResults={showResults} examObjs={examObjs} section={challenge.section} currentQ={currentQ} inExam={inExam} name={challenge.name}  ascDesc={ascDesc} time={timer.getElapsedRunningTime()}/>
        {inExam && <p className=" h-8" data-testid="ex-timer">{String(timer.getElapsedRunningTime()).slice(0, -3)}</p>}
        
        <ExerciseControls inExam={inExam} handleStop={() => handleStop()} playTones={() => playTones()} handleNewStart={e => handleIntervalsStart(e)} direction={challenge.direction}/>
      </div>

      <div className="exercise-piano">
        {new RegExp('Intervals', 'g').test(challenge.section) === true &&
        <Piano 
          submitAnswer={e => submitAnswer(e)} 
          playTones={false}
          lowestNote={String(challenge.range.match(lowestRegex))}
          highestNote={String(challenge.range.match(highestRegex))}
          startingNote={inExam === true && examObjs[currentQ].startingNote}
          correctAnswer={inExam === true && examObjs[currentQ].correctAnswer}
        />}
        {new RegExp('Intervals', 'g').test(challenge.section) === false && inExam &&
          <ChordsButtons answers={challenge.answers} examObjs={examObjs} submitAnswer={e => submitAnswer(e)} currentQ={currentQ}/>
        }
      </div> 
    </div>
  )
}