import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const [editPostId, setEditPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editImage, setEditImage] = useState(null);

  const addPost = (title, content, image) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      image,
    };
    setPosts([...posts, newPost]);
  };

  const editPost = (id, newTitle, newContent, newImage) => {
    const updatedPost = posts.map((post) =>
      post.id === id
        ? { ...post, title: newTitle, content: newContent, image: newImage }
        : post
    );

    setPosts(updatedPost);
  };

  const deletePost = (id) => {
    const filteredPost = posts.filter((post) => post.id !== id);

    setPosts(filteredPost);
  };

  const handleCreatePost = (e) => {
    e.preventDefault();

    if (title && content) {
      addPost(title, content, image);
      setTitle("");
      setContent("");
      setImage(null);
    }
  };

  const handleEditPost = (e) => {
    e.preventDefault();
    if (editTitle && editContent) {
      editPost(editTitle, editContent, editImage);
      setEditTitle("");
      setEditContent("");
      setEditImage(null);
    }
  };

  return (
    <>
      <form onSubmit={handleCreatePost}>
        <input
          type="text"
          placeholder="type..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="file" />

        <input type="submit" value="submit" />
      </form>

      <div>
        {posts.map((post) => (
          <>
            <div key={post.id}> {post.title} </div>
            <div> {post.content} </div>
            <div>{post.id}</div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
