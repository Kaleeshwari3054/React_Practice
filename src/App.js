// import React from "react";
// // import Form from "./Form/Form.js";
// // import NavBar from "./Routing/NavBar";
// import { RouterProvider } from "react-router-dom";
// import MainRouter from "./Routing/Router.js";
// // import Number from "./Number.js"
// // import { Website } from "./E-Commerce/Website.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CityCRUD from "./CityCRUD"


// function App() {
//   return (
//     // <div>
//     //   <h1> React practice </h1>
//     //   <h2>Routing (Problem 4)</h2>
//     //   <React.StrictMode>
//         <RouterProvider router={MainRouter}>
//          {/* // <NavBar /> */}
//          <CityCRUD/>
//         </RouterProvider>
//     //   </React.StrictMode>

//     //   <h2>Data handling (Problem 5)</h2>
//     //   <Form />
//     //   <h2>Append the number (Problem 6)</h2>
//     //   <Number />
//     // </div>
//     // <Website/>

//   );
// }

// export default App;

import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CityList from "./Crud_demo/Components/CityList";
// import CreateCity from "./Crud_demo/Components/CreateCity";
// import ViewCity from "./Crud_demo/Components/ViewCity";
// import CityProvider from "./Crud_demo/Context/CityProvider";
import HabitTracker from "./Components/TodoList/HabitTracker";
import "./App.css";

function App() {
  return (
    // <CityProvider>
    //   <Router>
    //     <div className="app-container">
    //       <h1>City Management</h1>
    //       <Routes>
    //         <Route path="/" element={<CityList />} />
    //         <Route path="/create" element={<CreateCity />} />
    //         <Route path="/cities/view/:id" element={<ViewCity />} />
    //         {/* <Route path="/cities/update/:id" element={<UpdateCity />} /> */}
    //       </Routes>
    //     </div>
    //   </Router>
    // </CityProvider>


    <div className="min-h-screen flex items-center justify-center bg-gray-200">
    <HabitTracker />
  </div>
  );
}

export default App;
