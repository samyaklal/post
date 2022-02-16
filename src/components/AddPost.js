import { useRef } from "react";

const AddPost = (props) => {
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);

  const addPost = () => {
    const title = inputRef.current.value;
    const body = textAreaRef.current.value;

    if (!(title && body)) {
      return;
    }

    props.addPost(title, body);

    inputRef.current.value = "";
    textAreaRef.current.value = "";
  };

  return (
    <section className="add-post">
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={inputRef} />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea ref={textAreaRef} id="body" />
      </div>
      <button onClick={addPost}>Add Post</button>
    </section>
  );
};

export default AddPost;
