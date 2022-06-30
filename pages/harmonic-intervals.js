import ChallengeTile from "../components/challengeTile";
import ExerciseComponent from "../components/exercise";
import Layout from "../components/layout";
import { courseArr } from "./intervals";

export default function HarmonicIntervals() {

  return (
    <Layout>
      <h1 className=" text-3xl p-2">Harmonic Intervals</h1>
      <div className="challenges-arr-div">
        {courseArr.map(i => (
          <ChallengeTile key={i.id} challenge={i} path={"harmonic-intervals"}/>
        ))}
      </div>
    </Layout>
  )
}
