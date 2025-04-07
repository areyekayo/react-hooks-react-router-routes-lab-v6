import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/movie";
import Home from "./pages/Home";

const routes = [
   {
    path: "/",
    element: <Home />,
   },
   {
    path: "/directors",
    element: <Directors />,
   },
   {
    path: "/actors",
    element: <Actors />
   },
   {
    path: "/movie/:id",
    element: <Movie />
   }
  ];

export default routes;