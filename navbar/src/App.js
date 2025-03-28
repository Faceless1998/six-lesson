import React, { useState } from "react";
import "./post.css"

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

  const handleImageChanger = (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = () =>{
        setImage(reader.result);
      }
      reader.readAsDataURL(file);
    }

  }

  const handleNewImageChanger = (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = () =>{
        setEditImage(reader.result);
      }
      reader.readAsDataURL(file);
    }

  }

  return (
    <>
      <div className="container">
        <h1 className="main-heading">My Blog</h1>

          {/* Creating Post Form */}
          <div className="form-section">
            <h1>Create New Post</h1>

            <form className="form" onSubmit={handleCreatePost}>

                <input
                  type="text"
                  placeholder="Title"
                  className="input-field"
                  value={title}
                  onChange={ (e) => setTitle(e.target.value) }
                />

                <textarea
                placeholder="Content"
                className="input-field"
                value={content}
                onChange={ (e) => setContent(e.target.value) }
                />

                <input
                  type="file"
                  className="input-field"
                  onChange={handleImageChanger}
                />

                { image && <img src={image} alt="Preview" className="image-preview"/> }


                <button className="submit-btn" type="submit">Create</button>
            </form>
          </div>


        {/* Blog Post List */}

        <div className="post-list">
          <h2>Blog Posts</h2>

          {

            posts.length === 0 
            ?
            ( <>
              <p className="no-post-message">No Posts Available.</p>
            </> )
            :
            ( <>
              {
                posts.map( (post) => (
                  <>
                    <div key={post.id} className="post-item">

                      <h3>{post.title}</h3>

                      <p>{post.content}</p>

                      { post.image && ( <img src={post.image} alt={post.title} /> ) }

                    </div>
                  </>
                ))
              }
            </> )
          }
        </div>
      </div>
    </>
  );
}

export default App;
