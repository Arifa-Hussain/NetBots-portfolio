import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/Nav/page";
import Footer from "./components/Footer/page";
import "./App.css";
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
