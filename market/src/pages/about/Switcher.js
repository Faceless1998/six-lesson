/*
import React from "react";
import Todo from "./Todo" -  export default
import {Todo} from "./Todo"; -  export const
import "./about.css"


const [myElement, setMyElement] = useState(true);
useState - ცვლადის მუშაობის კონტროლი
useEffect - მოქმედების მიმდინარეობის კონტროლი
useEffect(()=>{

}, [])

*/

import React, { useEffect, useState } from "react";

const Switcher = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#333",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "8px",
      backgroundColor: darkMode ? "#bbb" : "#222",
      color: darkMode ? "#222" : "#bbb",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: darkMode ? "#ddd" : "#444",
      color: darkMode ? "#444" : "#ddd",
    },
  };

  return (
    <>
      {/* {  argument ? true-answer : false-answer } */}

      <div style={styles.container}>
        <h1> {darkMode ? "Dark Mode" : "Light Mode"} </h1>

        <button
          style={
            isHovered
              ? { ...styles.button, ...styles.buttonHover }
              : styles.button
          }
          onClick={() => setDarkMode(!darkMode)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Switch Color
        </button>
      </div>
    </>
  );
};

export default Switcher;
