// import React from "react";

// export default function CardDetails({ StdName, StdRollNo, StdGroup}) {
//     return (
//         <section>
//             {/* <input type="text" onChange={(e) =>{setName(e.target.value)}}></input> */}
//             <input 
//                 type="text" 
//                 // value={name} // Binding input to state
//                 onChange={(e) => stdName(e.target.value)}  // Update state on change
//             />
//             {/* <span>{StdName}</span>
//             <span>{StdRollNo}</span>

//             <span>{StdGroup}</span> */}
//         </section>
//     )
// }

// import React from "react";

// export default function CardDetails({ StdName, setStdName, StdRollNo, StdGroup }) {
//   return (
//     <section className="card-details">
//       <input 
//         type="text" 
//         value={StdName} // Bind the input to the StdName prop (which comes from state)
//         onChange={(e) => setStdName(e.target.value)}  // Use setStdName to update the name state
//       />
//       <div>
//         <span>Name: {StdName}</span>
//       </div>
//       <div>
//         <span>Roll No: {StdRollNo}</span>
//       </div>
//       <div>
//         <span>Group: {StdGroup}</span>
//       </div>
//     </section>
//   );
// }


