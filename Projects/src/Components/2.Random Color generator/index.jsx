import { useEffect, useState } from "react";

export default function RandomColour() {
  const [Color, setColor] = useState("#000000");
  const [typecolor, settypecolor] = useState("hex");

  function randomcolorutility(length) {
    return Math.floor(Math.random() * length);
  }

  function hexcolorhandle() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexcolor = "#";

    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomcolorutility(hex.length)];
    }

    setColor(hexcolor);
    console.log(hexcolor);
  }

  function rgbcolorhandle() {
    const r = randomcolorutility(256);
    const g = randomcolorutility(256);
    const b = randomcolorutility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typecolor === "hex") hexcolorhandle();
    else rgbcolorhandle();
  }, [typecolor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: Color,
      }}
    >
      <button onClick={() => settypecolor("hex")}>Hex Colour</button>
      <button onClick={() => settypecolor("rgb")}>rgb Colour</button>
      <button onClick={typecolor === "hex" ? hexcolorhandle : rgbcolorhandle}>
        generator
      </button>
      <div>
        <h1>{typecolor === "hex" ? "HEX Color" : "RGB Color"}</h1>
        <span>{Color}</span>
      </div>
    </div>
  );
}
