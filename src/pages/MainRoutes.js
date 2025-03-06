import Landing from "./Landing";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";
import StudentContact from "./StudentContact";
import ErrorPage from "./ErrorPage";


// const MainRoutes = [
//     {
//         path: "/",
//         element: <Landing />,
//         errorElement: <h2>Page Not Found</h2>,  // Add error handling here
//         children: [
//             { path: "about", element: <About /> },
//             { path: "profile", element: <Profile /> },
//             { path: "contacts", element: <Contact /> },
//             { path: "contacts/:id", element: <StudentContact /> },
//             { path: "*", element: <h2>404 - Page Not Found</h2> }  // Catch all invalid routes
//         ],
//     },
// ];

// export default MainRoutes;
// import ErrorPage from "./ErrorPage"; // Import the error component

const MainRoutes = [
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />, // Add custom error page
        children: [
            { path: "about", element: <About /> },
            { path: "profile", element: <Profile /> },
            { path: "contacts", element: <Contact /> },
            { path: "contacts/:id", element: <StudentContact /> },
            { path: "*", element: <ErrorPage /> },  // Catch-all for 404 errors
        ],
    },
];
 export default MainRoutes;
