import { useState } from "react";
import axios from "../api/axios";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        form
      );
      alert("Welcome ", res.data.name);
      console.log(res);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        type="text"
        name="username"
        onChange={handleChange}
        required
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
