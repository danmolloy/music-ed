import Link from 'next/link'
import Layout from '../components/layout/layout'
import React from 'react'


const homeTiles = [
  /* {
    name: "Introduction",
    link: "/introduction/0",
    info: "What is an interval?",
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

export default function Home() {

  return (
    <Layout>
      <div className=' w-screen flex flex-col items-center'>
        <h1 className='m-4'>Exercises</h1>
        <div className=' w-full'>
        {homeTiles.map(i => (
          <Link key={i.key} href={i.link}>
          <div className='home-tile'>
            <h2 className='font-semibold'>{i.name}</h2>
            <p className='font-thin'>{i.info}</p>
          </div>
        </Link>
        ))}
        </div>
      </div>
    </Layout>
  )
}
