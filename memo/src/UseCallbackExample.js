import React, { useCallback, useState } from "react";

const Button = React.memo(({ onClick, label }) => {
  console.log("ღილაკი თავიდან დარენდერდა");
  return <button onClick={onClick}> {label} </button>;
});

const UseCallbackExample = ({ onClick, label }) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");


  const handleClick = useCallback(() => {
    setCount((prev) => prev + 24232145326535346)
  })

  return (
    <>

    <p>{count}</p>
    <input value={value} onChange={(e)=> setValue(e.target.value)} placeholder="ტექსტი....."/>
    <Button onClick={handleClick} label="OK"/>
    </>
  );
};

export default UseCallbackExample;
