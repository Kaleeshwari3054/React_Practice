// import React, { useState } from "react";

// const initialCities = [
//   { id: 1, name: "Chennai", state: "Tamilnadu" },
//   { id: 2, name: "Mumbai", state: "Maharashtra" },
//   { id: 3, name: "Hyderabad", state: "Telangana" },
//   { id: 4, name: "Delhi", state: "Delhi" },
//   { id: 5, name: "Bengaluru", state: "Karnataka" },
// ];

// function CityCRUD() {
//   const [cities, setCities] = useState(initialCities);
//   const [form, setForm] = useState({ id: "", name: "", state: "" });
//   const [editMode, setEditMode] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editMode) {
//       setCities(cities.map((city) => (city.id === form.id ? form : city)));
//       setEditMode(false);
//     } else {
//       setCities([...cities, { ...form, id: cities.length + 1 }]);
//     }
//     setForm({ id: "", name: "", state: "" });
//   };

//   const handleEdit = (city) => {
//     setForm(city);
//     setEditMode(true);
//   };

//   const handleDelete = (id) => {
//     setCities(cities.filter((city) => city.id !== id));
//   };

//   return (
//     <div>
//       <h2>City CRUD App</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="City Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="state"
//           placeholder="State"
//           value={form.state}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">{editMode ? "Update City" : "Add City"}</button>
//       </form>

//       <ul>
//         {cities.map((city) => (
//           <li key={city.id}>
//             {city.name}, {city.state}
//             <button onClick={() => handleEdit(city)}>Edit</button>
//             <button onClick={() => handleDelete(city.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CityCRUD;
