import Link from 'next/link'
import useSWR from 'swr'
import Layout from '../components/layout'

const homeTiles = [
  /* {
    name: "Preliminary Exercises",
    link: "/preliminary",
    info: "Intervals times tables, keyboard geography, scales & intervals technique.",
    key: 0,
  }, */
  {
    name: "Melodic Intervals",
    link: "/intervals",
    info: "Hear the distance between two consecutive notes.",
    key: 1,
  },
  {
    name: "Harmonic Intervals",
    link: "/harmonic-intervals",
    info: "Hear the distance between two simultaneous notes.",
    key: 2,
  },
  {
    name: "Triads",
    link: "/triads",
    info: "Recognise three-note chords.",
    key: 3
  },
  {
    name: "Four-Note Chords",
    link: "/chords",
    info: "Recognise four-note chords.",
    key: 4
  },
]

const fetcher = (url) => fetch(url).then((res) => res.json())


export default function Home() {
  const { data, error } = useSWR('/api/challenges', fetcher)

  return (
    <Layout>
{/*       {data && JSON.stringify(data)}
 */}      {homeTiles.map(i => (
        <Link key={i.key} href={i.link}>
        <div className='home-tile'>
          <h2 className='font-semibold'>{i.name}</h2>
          <p className='font-thin'>{i.info}</p>
        </div>
      </Link>
      ))}
    </Layout>
  )
}
