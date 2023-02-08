import ExerciseComponent from "../../components/exercise";
import Layout from "../../components/layout/layout";
import { challengesArr } from "../../data/challengesData";
import React from "react";


export default function HarmonicIntervals({ challenge }) {

  if (challenge === undefined) return <p>Loading..</p>
  return (
    <Layout>
      {JSON.stringify(challengesArr.filter(i => i.section === "Harmonic Intervals").map((i) => ({
    params: { level: i.name },
  })))}
      <ExerciseComponent challenge={challenge} harmonic={true}/>
    </Layout>
  )
}


export async function getStaticPaths() {
  const paths = challengesArr.filter(i => i.section === "Harmonic Intervals").map((i) => ({
    params: { level: i.name },
  }))

  return {
    paths,
    fallback: true 
  }; 
}

export async function getStaticProps(context) {
  const challenge = challengesArr.filter(i => i.section === "Harmonic Intervals").find(i => i.name.toLowerCase() === String(context.params.level).toLowerCase())
  return {
    props: {
      challenge: challenge,
    },
  } 

}