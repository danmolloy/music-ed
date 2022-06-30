import ChallengeTile from "../components/challengeTile"
import Layout from "../components/layout"
import { challengesArr } from "../data/challengesData" 


export default function Chords() {
  return (
    <Layout>
      <div className="challenges-arr-div">
        {challengesArr.filter(i => i.section === "Chords").map(i => (
          <ChallengeTile key={i.id} challenge={i} path={"chords"}/>
        ))}
      </div>
    </Layout>
  )
}