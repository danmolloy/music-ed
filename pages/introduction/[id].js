import Link from "next/link";
import Layout from "../../components/layout"
import { introData } from "../../data/introData"

export default function IntroPage({data}) {

  if (data === undefined) return <p>Loading..</p>

  return (
    <Layout>
      <h1>{data.title}</h1>
      {data.text.map(i => (
        i.text.includes("<") ? <div key={i.key} dangerouslySetInnerHTML={{__html: i.text}} />:<p key={i.key}>{i.text}</p>
      ))}
      {data.challenge 
      && <div>
        <h2>{data.challenge.title}</h2>
        <p>{data.challenge.blurb}</p>
      </div>}
      <Link href={`${data.nextLink.link}`}>{data.nextLink.title}</Link>
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