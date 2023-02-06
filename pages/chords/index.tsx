import ChallengeTile from "../../components/challengeTile"
import Layout from "../../components/layout/layout"
import { challengesArr } from "../../data/challengesData" 
import React from "react"

export default function Chords() {
  return (
    <Layout>
      <div className="challenges-arr-div">
        {challengesArr.filter(i => i.section === "Chords").map(i => (
          <ChallengeTile key={i.key} challenge={i} path={"chords"}/>
        ))}
      </div>
    </Layout>
  )
}