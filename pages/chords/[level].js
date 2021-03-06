import { useRouter } from "next/router";
import ExerciseComponent from "../../components/exercise";
import Layout from "../../components/layout";
import { challengesArr } from "../../data/challengesData";



export default function ChordsExercise() {
  const router = useRouter()
  const { level } = router.query

  const challenge = challengesArr.filter(i => i.section === "Chords").find(i => i.exLink.toLowerCase() === level)

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

export async function getStaticProps({ params }) {
  const intervalsArr = challengesArr.filter(i => i.section === "Chords")

  return {
    props: {
      intervalsArr,
    },
  } 

}