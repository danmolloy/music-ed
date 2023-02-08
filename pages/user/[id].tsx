import Layout from "../../components/layout/layout"
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CompletedExercise {
  id: string
  ascDesc: "Ascending"|"Descending"
  exCategory: string
  exName: string
  elapsedTime: number
  date: string
  score: number
  pointsAwarded: null|number
  userEmail: string
}

interface UserProfileProps {
  data: {
    id: string
    name: string
    email: string
    emailVerified: null|boolean
    image: string
    completedExercises: CompletedExercise[]
  }
}

export default function UserProfile(props: UserProfileProps) {
  const router = useRouter()
  const { user } = router.query

  return (
    <Layout>
      <div className="shadow m-1 p-4 flex flex-col items-center">
        {props.data.image 
        && <Image className="rounded-full" src={props.data.image} height={200} width={200} alt="Profile picture" />}
        <h1 className="m-2">{props.data.name}</h1>
      </div>
      {props.data.completedExercises.length > 0 ? 
      <div className="w-full lg:w-1/2 m-4 p-4 flex flex-col ">
        <h2>Recent Activity</h2>
        {props.data.completedExercises.sort((a: CompletedExercise, b: CompletedExercise) => Number(b.date) - Number(a.date)).map(i => (
          <div key={i.id} className="border my-1 p-2">
            <div className="flex flex-row items-baseline">
              <h3>{i.exName}</h3>
              <p className="ml-2 text-gray-500">{`${i.exCategory} ${i.ascDesc}`}</p>
            </div>
            <div className="flex flex-row">
              <p>{i.score * 100}%</p>
              <p className="ml-2 text-gray-500">{String(i.elapsedTime / 1000).slice(0, -2)} seconds</p>
            </div>
          </div>
        ))}
      </div>
      :
      <div>
        <h2 className="font-extrabold text-2xl">No recent activity</h2>
        <p className="text-gray-500">Head over to our <Link href="/exercises" className="text-blue-500 hover:underline">exercises</Link> to get started.</p>
      </div>}
    </Layout>
  )
}

 export const getServerSideProps = async (context) => {

  const res = await fetch(`http://localhost:3000/api/user/${context.params.id}`)
  const data = await res.json()

  return { props: { ...data } }
} 