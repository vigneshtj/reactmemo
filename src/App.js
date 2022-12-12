import { useState, memo } from "react";

const Box = ({ params }) => {
  console.log("Re-rendered Box");
  return (
    <div
      style={{
        background: params.color,
        padding: "2rem",
        border: "1px solid black",
        margin: "1rem",
        width: "50px",
      }}
    >
      {" "}
    </div>
  );
};

const MemoisedBox = memo(
  Box,
  (prevProps, nextProps) => prevProps.params.color === nextProps.params.color
);
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  console.log("Re-rendered App");

  return (
    <>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Count
      </button>{" "}
      {count}
      <MemoisedBox params={{ color }} />
      <button
        onClick={() => setColor((prev) => (prev === "red" ? "green" : "red"))}
      >
        Toggle Colour
      </button>
    </>
  );
}

export default App;
