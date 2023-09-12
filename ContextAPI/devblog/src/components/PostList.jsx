import PostItem from "./PostItem"

const PostList = () => {
  const posts = [{ id: 1, title: "a title", body: "a body" }]

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default PostList