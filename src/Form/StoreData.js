// import React, { useState } from 'react';

// export const FormPage = () => {
//   const [data, setData] = useState({
//     name: '',
//     emailId: '',
//     phoneNo: '',
//     city: '',
//     food: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h2>Form Page</h2>

//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={data.name}
//         autoComplete="off"
//         onChange={handleChange}
//         required
//       />

//       <label htmlFor="emailId">Email</label>
//       <input
//         type="email"
//         id="emailId"
//         name="emailId"
//         value={data.emailId}
//         autoComplete="off"
//         onChange={handleChange}
//         required
//       />

//       <label htmlFor="phoneNo">Phone</label>
//       <input
//         type="number"
//         id="phoneNo"
//         name="phoneNo"
//         value={data.phoneNo}
//         autoComplete="off"
//         onChange={handleChange}
//         required
//       />

//       <label htmlFor="city">City</label>
//       <input
//         type="text"
//         id="city"
//         name="city"
//         value={data.city}
//         autoComplete="off"
//         onChange={handleChange}
//         required
//       />

//       <label htmlFor="food">Food Preference</label>
//       <select id="food" name="food" value={data.food} onChange={handleChange} required>
//         <option value="">Select</option>
//         <option value="breakfast">Breakfast</option>
//         <option value="lunch">Lunch</option>
//         <option value="dinner">Dinner</option>
//       </select>

//       <button type="submit">Submit</button>
//     </div>
//   );
// };



