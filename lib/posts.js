import fetch from "node-fetch"
const apiUrl = "https://jsonplaceholder.typicode.com/posts"

export async function getAllPostData() {
    const res = await fetch(new URL(apiUrl))
    const posts = await res.json()
    return posts
}

// idの一覧を取得する
export async function getAllPostIds() {
    const res = await fetch(new URL(apiUrl))
    const posts = await res.json()

    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        }
    })
}

// 個々のidに対応するpostを取得する
export async function getPostData(id) {
    const res = await fetch(new URL(`${apiUrl}/${id}/`))
    const post = await res.json()

    return post
}