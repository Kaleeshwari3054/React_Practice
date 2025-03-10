// import React, { useState } from "react";
// function Number() {
//   const [code, setCode] = useState("");
//   const [sample, setData] = useState([]);
//   const submit = (e) => {
//     e.preventDefault();
//     const num = Number(code);
//     if (num > 0 && num < 50) {
//       setData([...sample, num]);
//       setCode("");
//     } else {
//       alert("Please enter a number between 0 and 50");
//     }
//   };
//   return (
//     <>
//       <div className="Number-Parent">
//         <form onSubmit={submit}>
//           <input
//             type="number"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             placeholder="Enter number between 0 and 50"
//           />
//           <button type="submit">Add</button>
//         </form>
//       </div>
//       <div>
//         <h3>Entered Numbers:</h3>
//         <p>{sample.join(", ")}</p>
//       </div>
//     </>
//   );
// }
// export default Number;

import React, { useState } from "react";
import "./App.css";
function AppendNumber() {
  const [numbers, setNumbers] = useState("");
  const [appendNumber, setAppendNumber] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (numbers.trim() !== "") {
      setAppendNumber((prev) => [...prev, numbers]);
      setNumbers("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={numbers}
          onChange={(e) => {
            setNumbers(e.target.value);
          }}
          placeholder="enter a number"
          min={0}
          max={50}
        ></input>
        <button type="submit">append</button>
      </form>
      <p>
        <strong>Appended number: </strong>
        {appendNumber.join(", ")}
      </p>
    </>
  );
}
export default AppendNumber;
