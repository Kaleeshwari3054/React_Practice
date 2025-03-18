import React, { createContext, useState } from "react";
import cities from "../Helpers/Cities.json";

// !! Step -1
// create a context
// initializing the context
export const CityContext = createContext(undefined);

// !! Include Children as Props
function CityProvider({ children }) {
  // declaring the initial state
  // global
  const [cityList, setCityList] = useState(cities);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("john");

  // !! Step-2
  return (
    <CityContext.Provider
      value={{
        cityList,
        setCityList,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export default CityProvider;