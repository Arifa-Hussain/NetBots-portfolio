// src/routes/routes.tsx
import Adventures from "../components/Adventure/page";
import Eat from "../components/Eat and Drink";
import Hotels from "../components/Hotels";
import Tours from "../components/Tours";

const routes = [
  // { path: "/", element: <Home /> },
  { path: "/tour", element: <Tours/> },
  { path: "/hotels", element: <Hotels/> },
  { path: "/adventures", element: <Adventures/> },
  { path: "/eat", element: <Eat/> },

];

export default routes;
