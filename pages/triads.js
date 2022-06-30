import ChallengeTile from "../components/challengeTile"
import Layout from "../components/layout"
import { challengesArr } from "../data/challengesData" 


export default function Triads() {
  return (
    <Layout>
      <div className="challenges-arr-div">
        {challengesArr.filter(i => i.section === "Triads").map(i => (
          <ChallengeTile key={i.id} challenge={i} path={"triads"}/>
        ))}
      </div>
    </Layout>
  )
}