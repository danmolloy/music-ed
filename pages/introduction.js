import Layout from "../components/layout";

export default function Introduction() {
  return (
    <Layout>
      <div className="m-4 md:w-2/3 lg:w-1/2">
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
            <p>These notes are: C D E F G A B C</p>
            <p>Each of these notes in the C scale are either a Minor or Major Second from it&apos;s neighbour.</p>
          </div>
          <div className="my-8 mx-2">
            <h3>Exercise 3</h3>
            <p>Play an ascending C Major Scale on the keyboard below. Starting on the note furthest left, play all of the white keys in order.</p>
          </div>
          <div className="my-4">
            <p>When measuring the intervals from the root (C) to another note in the scale (going upwards), the names are as follows:</p>
            <ul>
              <li>C to D: Major 2nd</li>
              <li>C to E: Major 3rd</li>
              <li>C to F: Perfect 4th</li>
              <li>C to G: Perfect 5th</li>
              <li>C to A: Major 6th</li>
              <li>C to B: Major 7th</li>
              <li>C to C: Perfect Octave</li>
            </ul>
            <p>Most of the intervals are called <i>Major _</i>, and a few are called <i>Perfect _</i>. You will find that the <i>Perfect</i> intervals are neutral sounding.</p>
          </div> 
        </div>
        <h2>The Minor Scale</h2>
        <div className="my-4">
        <p>Another very common scale is the Natural Minor Scale. It has a couple of different notes compared to the C Major Scale.</p>
        <p>These notes are: C D Eb F G Ab Bb C</p>
        </div>
        <div className="my-8 mx-2">
            <h3>Exercise 4</h3>
            <p>Play an ascending C Natural Minor Scale on the keyboard below. Starting on the note furthest left, play all of the keys highlighted in blue.</p>
          </div>
        <div className="my-4">
            <p>When measuring the intervals from the root (C) to another note in the scale (going upwards), the names are as follows:</p>
            <ul>
              <li>C to D: Major 2nd</li>
              <li><i>C to Eb: Minor 3rd</i></li>
              <li>C to F: Perfect 4th</li>
              <li>C to G: Perfect 5th</li>
              <li><i>C to Ab: Minor 6th</i></li>
              <li><i>C to Bb: Minor 7th</i></li>
              <li>C to C: Perfect Octave</li>
            </ul>
            <p>As well as the Major and Perfect intervals, this scale also has <i>Minor</i> intervals.</p>
          </div> 
      </div>
      <h2>Aural Challenge</h2>
        <div className="my-8 mx-2">
          <h3>Exercise 5</h3>
          <p>Click the Start button to hear three notes, you can listen to it as many times as you like.</p>
          <p>Try playing it out on the keyboard below. The first note is highlight in blue</p>
        </div>
        <div className="my-4">
          <p>Well done. The notes were E D C.</p> 
          <p>The interval between E to D is a Major Second, and the interval between D and C is also a Major Second.</p>
          <p>Click Start to hear what it would sound like if E were Eb instead.</p>
        </div>
    </Layout>
  )
}