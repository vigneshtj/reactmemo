import { useState, memo, useMemo } from "react";

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

const MemoisedBox = memo(Box);
// eslint-disable-next-line no-lone-blocks
{
  /*
const MemoisedBox = memo(
  Box,
  (prevProps, nextProps) => prevProps.params.color === nextProps.params.color
);
*/
}
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  console.log("Re-rendered App");
  const params = useMemo(() => ({ color }), [color]);

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
      <MemoisedBox params={params} />
      <button
        onClick={() => setColor((prev) => (prev === "red" ? "green" : "red"))}
      >
        Toggle Colour
      </button>
    </>
  );
}

export default App;
