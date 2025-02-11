import { lazy } from "react";
import Portifolio from "../components/Portifolio";
import Skill from "../components/Skill-development";
import Career from "../components/Hire";
import PricingDetail from "../components/pricingDetail";

const Home = lazy(() => import("../components/Home"));
const AdmissionForm = lazy(() => import("../components/AdmissionForm"));
const Services = lazy(() => import("../components/services"));
const Pricing = lazy(() => import("../components/Pricing"));
const Blogs = lazy(() => import("../components/Blogs"));
const BlogDetail = lazy(() => import("../components/BlogDetail"));
const ServicesDetail = lazy(() => import("../components/ServicesDetail"));
const DetailPage = lazy(() => import("../components/DetailPage"))

const routes = [
  { path: "/", element: <Home /> },
  { path: "/admission-form", element: <AdmissionForm /> },
  { path: "/services", element: <Services /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/BlogDetail", element: <BlogDetail /> },
  { path: "/services/:id", element: <ServicesDetail /> },
  { path: "/portifolio", element: <Portifolio /> },
  { path: "/skill", element: <Skill /> },
  { path: "/hire", element: <Career /> },
  {path:"/detail-page", element: <DetailPage /> },
  {path:"/pricing/:id", element: <PricingDetail /> }
];

export default routes;
