import { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title) return alert("Fill all Fields");

    const formData = new FormData();

    formData.append("title", title);
    formData.append("image", image);

      try {
                console.log("res")

        const res = await axios.post(
          "http://localhost:5000/api/images",
          formData
      );
      setResponse(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    }
  };
  return (
    <>
      <div>
        <h2>Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && <img src={preview} alt="preview" />}
          <button type="submit">Upload</button>
        </form>

        {response && (
          <div>
            <p>Uploaded</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUpload;
