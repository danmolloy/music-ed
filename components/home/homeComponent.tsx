import Link from "next/link";
import Piano from "../piano";
import PrimaryButton from "../layout/primaryButton";
import React from "react";

export default function HomeComponent() {
  return (
    <div data-testid="home-component" className="flex flex-col items-center w-screen "> 
      
      <div className=' flex flex-col py-36 px-4 items-center' data-testid="home-blurb">
          <h1 className='text-4xl p-2 self-center'>
            Learn aural skills for <span className="text-blue-600">free</span>.
          </h1>
          
          <p className="px-2 text-slate-600 ">
            Aural Gym is a completely free resource for musicians to develop their relative pitch and chord recognition.
 
            Use the exercises as much as you like. To track your progress, create an account.
          </p>
          <div className=" flex flex-row items-center justify-center w-full ">
          <Link href={"/about"}>
            <PrimaryButton text="About" dataTestId="about-link" className='text-white bg-blue-600 hover:bg-blue-400' />
          </Link>
          <Link href={"/exercises"}>
            <PrimaryButton text="Start" dataTestId="exercises-link" className='text-white bg-green-500  hover:bg-green-400 ' />
          </Link>
          </div>
          {/* <p>Students and teachers can also link accounts, so their progress can be followed.</p> */}
        </div>
        <Piano />
          
        </div>
  )
}