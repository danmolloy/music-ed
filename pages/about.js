import HomeTile from '../components/homeTile'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className='m-4 md:w-2/3 lg:w-1/2'>
        <h1 className='mb-2'>About</h1>
        <p>One of the most useful skills for a musician is the ability to recognize intervals. As well as practical uses, a well-developed ear will be more sensitive to the contrasting notes.</p>
        <p>The Aural Gym offers exercises for musicians of all levels to work on these skills for free. You can even create an account to keep track of your progress.</p>
      </div>
      <HomeTile tileLink="/exercises" title="Get Started"/>
    </Layout>
  )
}