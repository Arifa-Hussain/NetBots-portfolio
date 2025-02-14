// src/routes/routes.tsx
import { 
  Home, 
  AdmissionForm, 
  Services, 
  Pricing, 
  Blogs, 
  BlogDetail, 
  ServicesDetail, 
  DetailPage,
  Portfolio,
  Skill,
  Career,
  PricingDetail
} from "../components/LazyComponents";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/admission-form", element: <AdmissionForm /> },
  { path: "/services", element: <Services /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blog-detail", element: <BlogDetail /> },
  { path: "/services/:id", element: <ServicesDetail /> },
  { path: "/portifolio", element: <Portfolio /> },
  { path: "/skill", element: <Skill /> },
  { path: "/hire", element: <Career /> },
  { path: "/detail-page", element: <DetailPage /> },
  { path: "/pricing/:id", element: <PricingDetail /> }
];

export default routes;
