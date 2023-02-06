import Link from "next/link";
import Piano from "../piano";
import PrimaryButton from "../layout/primaryButton";

export default function HomeComponent() {
  return (
    <div data-testid="home-component" className="flex flex-col items-center w-screen "> 
      <div className='home-blurb' data-testid="home-blurb">
          <h1 className='p-2'>
            Welcome to the Aural Gymnasium.
          </h1>
          
          <p>
            This is a completely free resource for musicians to develop their relative pitch and chord recognition.
          </p>
          <p>
            You can use the exercises as much as you like. To track your progress, create an account.
          </p>
          
          {/* <p>Students and teachers can also link accounts, so their progress can be followed.</p> */}
        </div>
        <Piano 
            lowestNote={"C4"}
            highestNote={"C6"} 
            submitAnswer={e => {return;}} 
            playTones={true} 
            startingNote={null} 
            correctAnswer={null}/>
        <div className='home-blurb'>
          <p>The Aural Gymnasium has over 40 exercises for musicians and students of any level to improve their aural skills. Answers are entered using the interactive keyboard.</p>
          <div className="flex flex-col items-center w-full ">
          <Link href={"/about"}>
            <PrimaryButton text="About" dataTestId="about-link" className='text-green-500 border-green-500 hover:bg-green-50 active:bg-white' />
          </Link>
          <Link href={"/exercises"}>
            <PrimaryButton text="Get Started" dataTestId="exercises-link" className=' text-blue-500 border-blue-500 hover:bg-blue-50 active:bg-white' />
          </Link>
          </div>
        </div>
      </div>
  )
}