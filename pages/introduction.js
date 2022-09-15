import Layout from "../components/layout";

export default function Introduction() {
  return (
    <Layout>
      <div className='m-4 md:w-2/3 lg:w-1/2'>
        <h1 className="mb-2">Introduction</h1>
        <div>
          <h2>What is an interval?</h2>
          <div className="my-4">
          <p>An interval is the distance between two musical notes.</p>
          <p>All notes on a piano (both black and white keys) are evenly spaced. This space, or <i>interval</i>, is called a <i>Minor Second</i>. Another name is a <i>semitone</i>.</p>
          <p>The interval between C and the C# immediately to the right is a semitone. Similarly, the distance between F and the E immediately to the left is a semitone.</p>
          </div>
          <div className="my-8 mx-2">
            <h3>Exercise 1</h3>
            <p>Play two notes on the keyboard on screen. The first can be any of your choosing. The second note must be a Minor Second away.</p>
          </div>
          <div className="my-4">
          <p>The distance of two semitones is called a Major Second. Another name for it is a <i>tone</i> (beware: this word can also have other meanings in music).</p>
          <p>An example of a tone is B and the first C# to it&apos;s right. Another example is D and the first C to the left.</p>
          </div>
          <div className="my-8 mx-2">
            <h3>Exercise 2</h3>
            <p>Play two notes on the keyboard on screen. The first can be any of your choosing. The second note must be a Major Second away.</p>
          </div>
          <h2>The Major Scale</h2>
          <div className="my-4">
            <p>In case you aren&apos;t already familiar, now is good time to meet the Major Scale.</p>
            <p>Music is generally based on scales, which is a collection of notes.</p>
            <p>If you play from C to the next C, playing all of the white notes and no black ones, you play the C Major Scale.</p>
            <p>Each of these notes in the C scale are either a Minor or Major Second from it&apos;s neighbour.</p>
          </div>
          <div className="my-4">
            <p>The Major Scale consists of 7 notes. We call these <i>scale degrees</i>.</p>
            <ul>
              <li>C: 1</li>
              <li>D: 2</li>
              <li>E: 3</li>
            </ul>
            <p>When measuring the intervals from the root (C) to another note in the scale, the names are as follows:</p>
            <ul>
              <li>C to D: Major 2nd</li>
              <li>C to E: Major 3rd</li>
              <li>C to F: Perfect 4th</li>
            </ul>
          </div> 
        </div>
        

      </div>
    </Layout>
  )
}