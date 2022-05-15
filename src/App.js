import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RoutesPath } from "./Routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {RoutesPath.map((route) => {
          return (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
