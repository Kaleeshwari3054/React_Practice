import React from "react";
import { Outlet } from "react-router-dom";


//  1. / - Landing page 

//  div ->  border -red 
//  div inside -> {page will be rendered}

//  e.g. 
 
//  /about -> About 
//  /profile -> Profile
//  /contact -> Contact 

 

function Landing() {
    return (
        <div style={{ margin: "10px" }}>
            {/* Introduction */}
            <div>Hello User !!! </div>
            <br />
            <div style={{ border: "1px solid red", margin: "20px", height: "100px" }}>
                {/* this is the place where routes are rendered */}
                <h4>This is my outlet</h4>
                <Outlet />
            </div>
        </div>
    );
}

export default Landing;

// //landing page
