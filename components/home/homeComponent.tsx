import Link from "next/link";
import Piano from "../piano";
import PrimaryButton from "../layout/primaryButton";
import React from "react";

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
        <Piano />
        <div className='home-blurb'>
          <p>The Aural Gymnasium has over 40 exercises for musicians and students of any level to improve their aural skills. Answers are entered using the interactive keyboard.</p>
          <div className="flex flex-col items-center w-full ">
          <Link href={"/about"}>
            <PrimaryButton text="About" dataTestId="about-link" className='' />
          </Link>
          <Link href={"/exercises"}>
            <PrimaryButton text="Start" dataTestId="exercises-link" className=' bg-green-600  hover:bg-green-700 active:bg-green-600' />
          </Link>
          </div>
        </div>
      </div>
  )
}