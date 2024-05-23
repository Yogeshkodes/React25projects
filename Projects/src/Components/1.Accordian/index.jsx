import { useState } from "react";
import data from "../data";
import "./style.css";

function Accordion() {
  const [selectedSet, setSelectedSet] = useState(null);

  function handleClick(getId) {
    setSelectedSet(getId === selectedSet ? null : getId);
  }
  const datas = data;
  return (
    <div className="wrapper">
      {datas.map((data, index) => {
        return (
          <div
            onClick={() => handleClick(data.id)}
            className="accordian"
            key={index}
          >
            <div className="item">
              <div>{data.question}</div>
              <div>+</div>
            </div>
            <div>
              {selectedSet === data.id ? <div>{data.answer}</div> : null}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
