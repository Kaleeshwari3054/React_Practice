// import React, { useState } from "react";
// import "../App.css";
// function Form() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     food: "",
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", data);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name" className="Formclass">Name</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         required
//         autoComplete="off"
//         onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
//       />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         required
//         autoComplete="off"
//         onChange={(e) =>
//           setData((prev) => ({ ...prev, email: e.target.value }))
//         }
//       />
//       <label htmlFor="phone">Phone:</label>
//       <input
//         type="number"
//         id="phone"
//         name="phone"
//         required
//         autoComplete="off"
//         onChange={(e) =>
//           setData((prev) => ({ ...prev, phone: e.target.value }))
//         }
//       />
//       <label htmlFor="city">City:</label>
//       <input
//         type="text"
//         id="city"
//         name="city"
//         required
//         autoComplete="off"
//         onChange={(e) => setData((prev) => ({ ...prev, city: e.target.value }))}
//       />
//       <br />
//       <label>Food Preferences:</label>
//       <div className="checkbox-group">
//         <label>
//           <input type="checkbox" value="Breakfast" />
//           Breakfast
//         </label>
//         <label>
//           <input type="checkbox" value="Lunch" />
//           Lunch
//         </label>
//         <label>
//           <input type="checkbox" value="Dinner" />
//           Dinner
//         </label>
//       </div>
//       <button onClick={handleSubmit} type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }
// export default Form;

import React, { useState } from "react";
import "../App.css";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    food: [], // Store selected food items in an array
  });

  const handleFoodChange = (e) => {
    const { value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      food: checked
        ? [...prev.food, value] // Add if checked
        : prev.food.filter((item) => item !== value), // Remove if unchecked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="Formclass">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="off"
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="off"
        onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="number"
        id="phone"
        name="phone"
        autoComplete="off"
        onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        autoComplete="off"
        onChange={(e) => setData((prev) => ({ ...prev, city: e.target.value }))}
      />

      <br />
      <label>Food Preferences:</label>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" value="Breakfast" onChange={handleFoodChange} />
          Breakfast
        </label>
        <label>
          <input type="checkbox" value="Lunch" onChange={handleFoodChange} />
          Lunch
        </label>
        <label>
          <input type="checkbox" value="Dinner" onChange={handleFoodChange} />
          Dinner
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
