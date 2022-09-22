import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { courseArr } from "../intervals";
import ExerciseComponent from "../../components/exercise";
import { challengesArr } from '../../data/challengesData'


export default function Exercise({level}) {

  if (level === undefined) return <p>Loading..</p>

  return (
    <Layout>
      <ExerciseComponent challenge={level} multiDirection={true} harmonic={false}/>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const level = challengesArr.filter(i => i.section === "Melodic Intervals").find(i => i.name.toLowerCase() === context.params.level)

  return {
    props: {
      level: level,
    },
  }
}



export async function getStaticPaths() {

  const paths = challengesArr.filter(i => i.section === "Melodic Intervals").map((i) => ({
    params: { level: i.name },
  }))
  return {
    paths,
    fallback: true 
  };
}