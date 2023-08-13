import Home from "./Home";
import Save from "./Save";
import Show from "./Show";
import Weather from './Weather';

import Footer from "./Footer";

import { Routes, Route, Link } from "react-router-dom";
import { is, reducer } from "./Reducer";
import React, { useReducer } from "react";
export const MyContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, is);
  const rec = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <>
      <div className="fixed">
        <div className="Nav">
          <a className="logo">
            <i className="bi bi-cloud-sun"></i> Welcome
          </a>

          <nav>
            <Link className="link" to="/">
              <i className="bi bi-house"></i> Home
            </Link>
            &nbsp;&nbsp;
            <Link className="link" to="/save">
              <i className="bi bi-download"></i> Login
            </Link>
            &nbsp;&nbsp;
            <Link className="link" to="/show">
              <i className="bi bi-people"></i> Login Details
            </Link>
            <Link className="link" to="/weather">
              <i className="bi bi-sun"></i> Weather
            </Link>  
          </nav>
        </div>
      </div>

      <MyContext.Provider value={rec}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/show" element={<Show />} />
          <Route path="/weather" element={<Weather />} />
          
        </Routes>
      </MyContext.Provider>
      <Footer />
    </>
  );
};

export default App;
