// src/routes/lazyComponents.tsx
import { lazy } from "react";

export const Home = lazy(() => import("../Home"));
export const AdmissionForm = lazy(() => import("../AdmissionForm"));
export const Services = lazy(() => import("../services"));
export const Pricing = lazy(() => import("../Pricing"));
export const Blogs = lazy(() => import("../Blogs"));
export const BlogDetail = lazy(() => import("../BlogDetail"));
export const ServicesDetail = lazy(() => import("../ServicesDetail"));
export const DetailPage = lazy(() => import("../DetailPage"));
export const Portfolio = lazy(() => import("../Portifolio"));
export const Skill = lazy(() => import("../Skill-development"));
export const Career = lazy(() => import("../Hire"));
export const PricingDetail = lazy(() => import("../pricingDetail"));
