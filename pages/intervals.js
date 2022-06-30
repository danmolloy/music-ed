import ChallengeTile from "../components/challengeTile";
import Layout from "../components/layout";


export const courseArr = [
      {
        name: "Seconds",
        info: "Major Second and Minor Second",
        key: "1",
        numberQs: 10,
        range: "C4 - C6",
        intervals: [1, 2],
        direction: "Either"
      },
      {
        name: "Thirds",
        info: "Major Third and Minor Third",
        key: "2",
        numberQs: 10,
        range: "C4 - C6",
        intervals: [3, 4],
        direction: "Either"
      },
      {
        name: "Fourths and Fifths",
        info: "Perfect Fourth and Perfect Fifth",
        key: "3",
        numberQs: 10,
        range: "C4 - C6",
        intervals: [5, 7],
        direction: "Either"
      },
      {
        name: "Altered Fifth",
        info: "Flat Fifth and Sharp Fifth",
        key: "7",
        numberQs: 10,
        range: "C4 - C6",
        intervals: [6, 8],
        direction: "Either"
      },
      {
        name: "Sixth",
        info: "Major Sixth and Minor Sixth",
        key: "4",
        numberQs: 10,
        range: "C4 - C6",
        intervals: [8, 9],
        direction: "Either"
      },

      {
        name: "Seventh",
        info: "Major Seventh and Minor Seventh",
        key: "5",
        numberQs: 10,
        range: "C4 - C6",
        intervals: [10, 11],
        direction: "Either"
      },
      {
        level: "Beginner",
        name: "Test",
        info: "All preceding material",
        key: "9",
        numberQs: 20,
        range: "C4 - C6",
        intervals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        direction: "Both"
      },
    ]


export default function Challenges() {
  return (
    <Layout>
      <h1 className=" text-3xl p-2">Melodic Intervals</h1>
      <div className="challenges-arr-div">
        {courseArr.map(i => (
          <ChallengeTile key={i.id} challenge={i} path={"intervals"}/>
        ))}
      </div>
    </Layout>
  )
}
