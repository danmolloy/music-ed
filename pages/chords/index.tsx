import ChallengeTile from "../../components/challengeTile"
import Layout from "../../components/layout/layout"
import { challengesArr } from "../../data/challengesData" 
import React from "react"

export default function Chords() {
  return (
    <Layout>
      <h1 className=" text-3xl p-2">Chords</h1>
      <div className="w-full">
        {challengesArr.filter(i => i.section === "Chords").map(i => (
          <ChallengeTile key={i.key} challenge={i} path={"chords"}/>
        ))}
      </div>
    </Layout>
  )
}