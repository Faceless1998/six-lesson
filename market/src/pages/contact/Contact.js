import React, {useState} from "react";
import Counter from "./Counter";
import Todo from "./Todo";
{/*
State - მდგომარეობა - უშუალოდ ფაილში - Hook
Props (properties) - გადააწვდის ელემენტებს სხვა ფაილს - ორივე ფაილში გარკვეული წესით
*/}

 export const Contact = () =>{
    const [newCount, setNewCount] = useState(10)

     return (
     <>
         
        <Counter initialCount={newCount}   />
        <Todo />
     </>
     )
 }