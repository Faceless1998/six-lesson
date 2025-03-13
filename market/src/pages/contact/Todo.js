import React, {useState} from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [myEl, setMyEl] = useState([3,4,5])
    const [count, setCount] = useState(0);

    const addTask = () => {
        if(inputValue.trim() === ""){
            return;
        }else{
            setTasks([ ...tasks, inputValue]);
            setInputValue("");
        }
    }

    const removeTask = (index) => {
        setTasks( tasks.filter( (_, i) => (
            i !== index
        )))
    }

    const dajameba = () => {
        for(let i = 0;i<myEl.length;i++){
            setCount(count + myEl.reduce((a, b) => a + b, 0));
        }
    }
    
    

    return(
        <>
            <div>
                {count}
                <button onClick={dajameba}>OK</button>
            </div>
        </>
    )
}

export default Todo;