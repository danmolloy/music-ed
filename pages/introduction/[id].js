import Link from "next/link";
import Layout from "../../components/layout/layout"
import { introData } from "../../data/introData"
import IntroChallenge from "./introChallenge";

export default function IntroPage({data}) {

  if (data === undefined) return <p>Loading..</p>

  return (
    <Layout>
      <div className="w-full sm:w-2/3 p-2">
      {<h1>{data.title}</h1>}
      {data.text.map(i => (
        i.text.includes("<") ? <div key={i.key} dangerouslySetInnerHTML={{__html: i.text}} />:<p key={i.key}>{i.text}</p>
      ))}
      {data.challenge 
      && <IntroChallenge challenge={data.challenge} />}
      {<Link href={`${data.nextLink.link}`}>
        <button className="border border-green-500 text-green-600 py-1 w-12 rounded mt-6 hover:bg-green-100 active:bg-white">{data.nextLink.title}</button>
      </Link>}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = introData.map((i) => ({
    params: { id: i.id },
  }))
  return {
    paths,
    fallback: true 
  };
}

export async function getStaticProps(context) {
  
  const data = introData.find(i => i.id === context.params.id)

  return {
    props: {
      data,
    },
  }
}