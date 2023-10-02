import Link from "next/link"

export const metadata = {
    title: 'Blog | Next.js'
}

type Posts = {
    title: string
}
type Post = {
    id: string
    title: string
}

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
    
    return response.json()
}

export default async function BlogPage() {
    const posts = await getData()

    return <>
        <h1>Blog</h1>
        <ul>
            {posts.map((post: Post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </>
}