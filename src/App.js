import logo from "./logo.svg";
import "./App.css";
import Maria from "./components/maria/Maria";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Roman from "./components/roman/Roman";
import Cristina from "./components/cristina/Cristina";
import Andriy from "./components/andriy/Andriy";

function App() {
  const url = useLocation();

  return (
    <div className="App">
      {url.pathname === "/" && (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="main-menu">
              <Link className="menu-item" to="mary">
                Maria
              </Link>
              <Link className="menu-item" to="/andriy">
                Andriy
              </Link>
              <Link className="menu-item" to="/cristina">
                Cristina
              </Link>
              <Link className="menu-item" to="/roman">
                Roman
              </Link>
            </div>
          </header>
        </>
      )}
      {url.pathname !== "/" && (
        <Link to="/">
          <div>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ height: "40px" }}
            />
          </div>
        </Link>
      )}

      <Routes>
        <Route path="/mary" element={<Maria />} />
        <Route path="/roman" element={<Roman />} />
        <Route path="/andriy" element={<Andriy />} />
        <Route path="/cristina" element={<Cristina />} />
      </Routes>
    </div>
  );
}

export default App;
