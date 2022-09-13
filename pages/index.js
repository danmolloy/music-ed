import Link from 'next/link'
import HomeTile from '../components/homeTile'
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout>
      <div className='home-blurb'>
        <h1 className='p-2'>
          Welcome to the Aural Gymnasium.
        </h1>
        <p>
          This is a completely free resource for musicians to develop their relative pitch and chord recognition.
        </p>
        <p>
          You can use the exercises as much as you like. To track your progress, create an account.
        </p>
        {/* <p>Students and teachers can also link accounts, so their progress can be followed.</p> */}
      </div>
      <HomeTile tileLink="/exercises" title="Get Started"/>
    </Layout>
  )
}
