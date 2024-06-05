import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [allowMultiple, setAllowMultiple] = useState(false);

  const toggleSelection = (id) => {
    if (allowMultiple) {
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.includes(id)
          ? prevSelectedIds.filter((selectedId) => selectedId !== id)
          : [...prevSelectedIds, id]
      );
    } else {
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.includes(id) ? [] : [id]
      );
    }
  };

  const toggleAllowMultiple = () => {
    setAllowMultiple((prevAllowMultiple) => !prevAllowMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={toggleAllowMultiple} className="button">
        {allowMultiple ? "Disable" : "Enable"} multiple selection
      </button>
      {data.map((item, index) => (
        <div className="accordian" key={index}>
          <div
            className="item"
            onClick={() => toggleSelection(item.id)}
            style={{
              backgroundColor: selectedIds.includes(item.id) ? "#f0f0f0" : "",
            }}
          >
            <div>{item.question}</div>
            <div>{selectedIds.includes(item.id) ? "-" : "+"}</div>
          </div>
          {selectedIds.includes(item.id) && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
