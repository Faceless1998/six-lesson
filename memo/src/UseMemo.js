import React, { useState, useMemo, useEffect } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
  
  const advancedCalculation = useMemo(() => {
    console.log("რთული გამოთვლა");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  },[count]);
 

  return (
    <div>
      <p> Count: {count} </p>
      <p> Other: {other} </p>
      <p>{advancedCalculation}</p>

      <button onClick={() => setCount(count + 1)}> Count + </button>
      <button onClick={() => setOther(other + 1)}> other + </button>
    </div>
  );
};

export default UseMemo;
