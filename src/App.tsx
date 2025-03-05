import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/Nav/page";
// import LoadingState from "./components/LoadingState";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <main>
        <Suspense>
          <Routes>
            {routes.map((route, index) => (
              <>
                <Route key={index} path={route.path} element={route.element} />
              </>

            ))}
          </Routes>
        </Suspense>
      </main>
     
    </Router>
  );
}

export default App;
