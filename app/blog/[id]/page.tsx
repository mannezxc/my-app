import { Metadata } from "next"
import Link from "next/link"

type Props = {
    params: {
        id: string
    }
}

type Post = {
    title: string
    id: string
    body: string
}


const getData = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    
    return response.json()
}

export async function generateMetadata({params : {id}}: Props): Promise<Metadata> {
    const post: Post = await getData(id)
    return {
        title: post.title
    }
}

export default async function BlogDetail({params : {id}}: Props) {
    const post: Post = await getData(id)
    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={'/blog'}>Назад</Link>
    </>
}