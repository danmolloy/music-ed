import Layout from "../../components/layout"
import { useRouter } from "next/router";
import Image from "next/image";

export default function UserProfile(props) {
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
      <div className="w-full m-4 p-4 flex flex-col ">
        <h2>Recent Activity</h2>
        {props.data.completedExercises.map(i => (
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
      <h2>No recent activity</h2>}
    </Layout>
  )
}

 export const getServerSideProps = async (context) => {

  const res = await fetch(`http://learnaural.org/api/user/${context.params.id}`)
  const data = await res.json()

  return { props: { ...data } }
} 