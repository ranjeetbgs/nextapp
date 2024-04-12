import Link from "next/link"

const Posts = ({ data }: any) => {

    // console.log(data)

    return (
        <ul>

            {
                data.map((post: any) => { return (<li key={post.id}><Link href={"/posts/" + post.id}>{post.title}</Link></li>) })
            }
        </ul>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await response.json()
    console.log(data)
    return { props: { data: data.slice(0, 3) } };
}

export default Posts