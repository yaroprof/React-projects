
const PostItem = ({post:{title, id, body} }) => {
  return (
    <li>
      <h2>title</h2>
      <p>{body}</p>
      <div>
        <i className='fas fa-edit'></i>
        <i className='fas fa-trash'></i>
      </div>
    </li>
  )
}

export default PostItem