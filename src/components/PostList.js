const PostList = (props) => {
    const { movePost, posts, deletePost } = props;
    const lastPostIndex = posts.length - 1;
  
    const postlist = posts.map(({ title, body }, index) => {
      const moveUp = () => movePost(index, -1);
      const moveDown = () => movePost(index, 1);
      const handleDelete = () => deletePost(index);
  
      return (
        <li key={`title${index}`}>
          <h2>{title}</h2>
          <p>{body}</p>
          <div>
            {index !== 0 && <button onClick={moveUp}>Move Up</button>}
            {index !== lastPostIndex && (
              <button onClick={moveDown}>Move Down</button>
            )}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </li>
      );
    });
  
    return (
      <section>
        <ul>{postlist}</ul>
      </section>
    );
  };
  
  export default PostList;
  