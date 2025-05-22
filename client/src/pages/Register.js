import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "", surname: "", username: "", password: "", mail: "", year: "", phone: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users/register", form);
      navigate("/login");
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["name", "surname", "username", "mail", "year", "phone"].map((key) => (
        <input key={key} placeholder={key} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
      ))}
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button>Register</button>
    </form>
  );
}
