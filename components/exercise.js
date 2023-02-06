import { useEffect, useState } from "react"
import ExerciseHeader from "./exerciseHeader"
import ExerciseInfo from './exerciseInfo'
import ExerciseControls from './exerciseControls'
import Piano, { pianoKeys } from "./piano"
import * as Tone from "tone";
import ChordsButtons from "./chordsButtons"
import { useTimer } from "react-use-precision-timer";
import { useSession } from "next-auth/react"



export default function ExerciseComponent(props) {
  const { data: session } = useSession()

  const [ascDesc, setAscDesc] = useState(null)
  const [inExam, setInExam] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [examObjs, setExamObjs] = useState([])
  const [currentQ, setCurrentQ] = useState(null)
  const timer = useTimer({ delay: 1000 });

  const highestRegex = /[A-Z]#?[0-9]$/g;
  const lowestRegex = /^[A-Z]#?[0-9]/g; 
  const { challenge, harmonic } = props;


  useEffect(() => {
    if (currentQ !== null) {
      playTones()
    }
  }, [currentQ])

  if (challenge === undefined) return <p>Loading..</p>

  const handleIntervalsStart = (direction) => {
    setAscDesc(direction)
    setShowResults(false)
    let arr = intervalsArr(direction)
    setExamObjs(arr)
    setCurrentQ(0)
    setInExam(!inExam)
    timer.start()
  } 

  const bothDirectionsIntervalsArr = () => {
    let arr = new Array(challenge.numberQs).fill().map(i => ({
      startingNote: undefined,
      correctAnswer: undefined
    }))
    let randIndex;
    let randInterval;
    let fiftyFifty;
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


  const intervalsArr = (direction) => {
    let lowestNote;
    let highestNote;
    let getStartingNote;
    let startingNoteIndex;
    let randInterval; 
    let plusOrMinus;
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
    
    let examArr = new Array(challenge.numberQs).fill().map(i => ({
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

  const getChordsArr = () => {
    let highestNote;
    let intervalsArr = []
    let randIndex;
    let getStartingNote = () => Math.floor(Math.random() * highestNote)
    let startingNoteIndex;
    let upperNotesArr = []

    for (let i = 0; i < challenge.answers.length; i ++) {
      intervalsArr = [...intervalsArr, ...challenge.answers[i].intervals]
    }
    highestNote = pianoKeys.findIndex(i => i.name === String(challenge.range.match(highestRegex))) - Math.max(...intervalsArr)

    let examArr = new Array(challenge.numberQs).fill().map(i => ({
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
    console.log(examArr)
    return examArr
  }

  const handleStop = () => {
    setCurrentQ(null)
    setInExam(false)
    //timer.stop()
    timer.pause()
  }

  const playTones = () => {
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

  const submitAnswer = async (e) => {
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
    console.log(examObjs)
  }

  return (
    <div className="exercise-div" data-testid="exercise-div">
      <ExerciseHeader section={challenge.section} sectionLink={`${challenge.sectionLink}`} name={challenge.name} info={challenge.info}/>
      <div className="exercise-info-and-controls">
        <ExerciseInfo showResults={showResults} examObjs={examObjs} section={challenge.section} currentQ={currentQ} inExam={inExam} name={challenge.name}  ascDesc={ascDesc} time={timer.getElapsedRunningTime()}/>
        {inExam && <p className=" h-8">{String(timer.getElapsedRunningTime()).slice(0, -3)}</p>}
        
        <ExerciseControls inExam={inExam} handleStart={e => handleStart(e)} handleStop={() => handleStop()} playTones={() => playTones()} handleNewStart={e => handleIntervalsStart(e)} direction={challenge.direction}/>
      </div>

      <div className="exercise-piano">
        {new RegExp('Intervals', 'g').test(challenge.section) === true &&
        <Piano 
          submitAnswer={e => submitAnswer(e)} 
          playTones={false}
          lowestNote={challenge.range.match(lowestRegex)}
          highestNote={challenge.range.match(highestRegex)}
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