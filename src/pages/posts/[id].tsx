import { useRouter } from "next/router"

const Post = ({ data }: any) => {
  console.log(data)
  const router = useRouter()
  if (router.isFallback) return (<div>Loading ..... ...</div>)
  return (
    <>
      <h1>Title: {data.title}</h1>
      <p>{data.body}</p>
    </>
  )


}


export const getStaticPaths = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  const posts = await response.json()

  const paths = posts.slice(0, 3).map((post: any) => {

    return {
      params: { id: '' + post.id }
    }

  })


  return {
    paths,
    fallback: true
  };
}

export const getStaticProps = async (context: any) => {

  const { params } = context
  console.log(params)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)

  const data = await response.json()
  console.log(data)
  return { props: { data } };
}


export default Post