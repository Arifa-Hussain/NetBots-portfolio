import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/Nav/page";
import Footer from "./components/Footer/page";
import "./App.css";
// import AdmissionForm from "./components/AdmissionForm/index";
// import ServicesSection from "./components/services";
// import DatailPage from "./components/DetailPage";
// import Pricing from "./components/Pricing";
// import Blogs from "./components/Blogs";
// import Portifolio from "./components/Portifolio";
// import Skill from "./components/Skill-development";
// import BlogDetail from "./components/BlogDetail";
// import ServicesDetail from "./components/ServicesDetail";
import LoadingState from "./components/LoadingState";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <main>
        <Suspense fallback={<LoadingState />}>
          <Routes>
            {routes.map((route, index) => (
              <>
                <Route key={index} path={route.path} element={route.element} />
                {/* <Route path="/" element={<ServicesSection />} />
              <Route path="/Portifolio" element={<Portifolio />} />
              <Route path="/admission-form" element={<AdmissionForm />} />
              <Route path="/" element={<ServicesSection />} />
              <Route path="/admission-form" element={<AdmissionForm />} />
              <Route path="/detail-page" element={<DatailPage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/BlogDetail" element={<BlogDetail />} />
              <Route path="/ServicesDetail" element={<ServicesDetail />} /> */}

              </>

            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
}

export default App;
