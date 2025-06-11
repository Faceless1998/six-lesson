import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import useTriangleArea from "../useTriangleArea";
import { useRef } from "react";

export const Home = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.classList.add("popup")
  };

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  const hundCount = useRef(0);
  useEffect(() => {
    if (count.current === 100) {
      count.current = 0;
      hundCount.current = hundCount.current + 1;
    } else {
      count.current = count.current + 1;
    }
  }, [inputValue]);

  const [base, setBase] = useState(10);
  const [height, setHeight] = useState(5);
  const [sides, setSides] = useState([3, 4, 5]);

  const areaByBase = useTriangleArea({ base, height });
  const [data] = useFetch("http://api.jmtowerbatumi.ge/apartments");

  return (
    <>
      <input
        type="text" ref={inputElement}
      />
      <button type="submit" onClick={focusInput}> OK</button>

      <h1>
        {count.current} {hundCount.current}
      </h1>
    </>
  );
};
