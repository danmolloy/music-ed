import { useRouter } from "next/router";
import ExerciseComponent from "../../components/exercise";
import Layout from "../../components/layout";
import { challengesArr } from "../../data/challengesData";



export default function ChordsExercise({ challenge }) {
  if (challenge === undefined) return <p>Loading..</p>
  return (
    <Layout>
      <ExerciseComponent challenge={challenge} harmonic={true}/>
    </Layout>
  )
}


export async function getStaticPaths() {
  const paths = challengesArr.filter(i => i.section === "Chords").map((i) => ({
    params: { level: i.exLink },
  }))

  return {
    paths,
    fallback: true 
  }; 
}

export async function getStaticProps(context) {
  const challenge = challengesArr.filter(i => i.section === "Chords").find(i => i.exLink.toLowerCase() === context.params.level)

  return {
    props: {
      challenge: challenge,
    },
  } 

}