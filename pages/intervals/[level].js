import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { courseArr } from "../intervals";
import ExerciseComponent from "../../components/exercise";
import { challengesArr } from '../../data/challengesData'


export default function Exercise() {
  const router = useRouter()
  const { level } = router.query
  const challenge = challengesArr.filter(i => i.section === "Melodic Intervals").find(i => i.name.toLowerCase() === level)


  if (challenge === undefined) return <p>Loading..</p>

  return (
    <Layout>
      <ExerciseComponent challenge={challenge} multiDirection={true} harmonic={false}/>
    </Layout>
  )
}

export async function getStaticProps() {

  const intervalsArr = challengesArr.filter(i => i.section === "Melodic Intervals")

  return {
    props: {
      intervalsArr,
    },
  }
}



export async function getStaticPaths() {
  /* const paths = courseArr.map((i) => ({
    params: { level: i.name },
  }))
 */
  const paths = challengesArr.filter(i => i.section === "Melodic Intervals").map((i) => ({
    params: { level: i.name },
  }))
  return {
    paths,
    fallback: true 
  };
}