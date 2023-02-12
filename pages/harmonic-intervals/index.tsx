import ChallengeTile from "../../components/challengeTile";
import ExerciseComponent from "../../components/exercise";
import Layout from "../../components/layout/layout";
import { courseArr } from "../intervals";
import React from "react";

export default function HarmonicIntervals() {

  return (
    <Layout>
      <h1 className=" text-3xl p-2">Harmonic Intervals</h1>
      <div className="w-full">
        {courseArr.map(i => (
          <ChallengeTile key={i.key} challenge={i} path={"harmonic-intervals"}/>
        ))}
      </div>
    </Layout>
  )
}
