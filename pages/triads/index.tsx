import ChallengeTile from "../../components/challengeTile"
import Layout from "../../components/layout/layout"
import { challengesArr } from "../../data/challengesData" 
import React from 'react'



export default function Triads() {
  return (
    <Layout>
      <h1 className=" text-3xl p-2">Triads</h1>
      <div className="w-full">
        {challengesArr.filter(i => i.section === "Triads").map(i => (
          <ChallengeTile key={i.id} challenge={i} path={"triads"}/>
        ))}
      </div>
    </Layout>
  )
}