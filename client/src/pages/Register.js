import React, {useState} from "react"
import axios from "axios"

export default function Register(){
  const [form, setForm] = useState({
    name:"",
    surname:"",
    username:"",
    mail:"",
    year:0,
    phone:"",
    password:"" 
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:5000/api/users/register", form);
    }catch(err){
      console.log("OK");
    }
  }

  return(
    <>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Enter Name" required onChange={handleChange} /> <br />
          <input name="surname" type="text" placeholder="Enter Surname" required onChange={handleChange} /><br />
          <input name="username" type="text" placeholder="Enter Username" required onChange={handleChange} /><br />
          <input name="mail" type="email" placeholder="Enter Email" required onChange={handleChange} /><br />
          <input name="year" type="number" placeholder="Enter Age" required onChange={handleChange} /><br />
          <input name="phone" type="text" placeholder="Enter Phone" required onChange={handleChange} /><br />
          <input name="password" type="password" placeholder="Enter Password" required onChange={handleChange} /><br />

          <button type="submit"> Register </button>
          
          
          
        </form>
    </>
  )
}