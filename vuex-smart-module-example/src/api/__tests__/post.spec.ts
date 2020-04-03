import { PostAPI } from "../post"

describe("fetchPosts", () => {
  test("returns posts", async () => {
    const client = new PostAPI()
    const posts = await client.fetchPosts()
    expect(posts[4]).toEqual({
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body:
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    })
    expect(posts.length).toBe(100)
  })
})

describe("fetchPost", () => {
  test("returns a post", async () => {
    const client = new PostAPI()
    const post = await client.fetchPost(5)
    expect(post).toEqual({
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body:
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    })
  })
})
