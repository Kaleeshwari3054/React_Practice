// import { useState } from "react";
// import "../App.css";

// const CardDisplay = () => {
//   const [data] = useState([
//     { id: 1, name: "Harry" },
//     { id: 2, name: "Ron" },
//     { id: 3, name: "Flitwick" },
//     { id: 4, name: "Sirius" },
//     { id: 5, name: "Ludo" },
//   ]);

//   return (
//     <div className="card-container">
//       {data.map((item ) => ( //each element in  the array;
       
//           <div key={item.id} className="card">
//            <p>{item.id}</p>
//            <h2> {item.name}</h2>
//           </div>
        
//       ))}
//     </div>
//   );
// };

// export default CardDisplay;


import { useState } from "react";
import "../App.css";

const CardDisplay = () => {
  const [data] = useState([
    { id: 1, name: "Harry" },
    { id: 2, name: "Ron" },
    { id: 3, name: "Flitwick" },
    { id: 4, name: "Sirius" },
    { id: 5, name: "Ludo" },
  ]);

  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id === selectedId ? null : id); // Toggle selection
  };

  return (
    <div className="card-container">
      {data.map((item) => (
        <div
          key={item.id}
          className={`card ${selectedId === item.id ? "selected" : ""}`}
          onClick={() => handleClick(item.id)}
        >
          <p>{item.id}</p>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
