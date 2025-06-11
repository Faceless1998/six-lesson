import React, { useState, useMemo, useCallback } from "react";
import "./App.css";
import one from "./assets/1.jpg";
import two from "./assets/2.jpg";
import three from "./assets/3.jpg";
import four from "./assets/4.jpg";
import five from "./assets/5.jpg";
const List = React.memo(({ items, onItemClick }) => {
  console.log("List დაგენერირდა");
  return (
    <>
      <div className="out">
        {items.map((item, index) => (
          <button
            key={index}
            className="point"
            onClick={() => onItemClick(item)}
          >
          </button>
        ))}
      </div>
    </>
  );
});

const Together = () => {
  const [query, setQuery] = useState("");
  const [clickedItem, setClickedItem] = useState("");

  const data = [one, two, three, four, five];

  const filteredElement = useMemo(() => {
    console.log("გაფილტრვა");
    return data.filter((item) => {
      item.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);

  const handleItemClick = useCallback((item) => {
    setClickedItem(item);
    console.log(clickedItem);
  });
  return (
    <>
      <div>Together</div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ძიება..."
      />

      <div className="my">
        <List items={data} onItemClick={handleItemClick} className="pp" />
        <img src={clickedItem} />
      </div>
    </>
  );
};

export default Together;
