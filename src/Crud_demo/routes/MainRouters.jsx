/*
/ - home page -> <CityList />
/create - Create a new City -> <CreateCity />
/:id - (useParams) -> View City by Id -> TBD 
*/

import CityList from "../Components/CityList";
import CreateCity from "../Components/CreateCity";
import Landing from "../Pages/Landing";
import ViewCity from "../Components/ViewCity";

const MainRoutes = {
  path: "",
  element: <Landing />,
  children: [
    {
      path: "/create",
      element: <CreateCity />,
    },
    {
      path: "/cities",
      element: <CityList />,
    },
    {
      path: "/cities/view/:id",
      element: <ViewCity />,
    },
  ],
};

export default MainRoutes;