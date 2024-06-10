import React, {useState} from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegForm from "./components/RegForm";

export const OptionsContext = React.createContext({
  component: {},
  setComponent: () => {},
});

export function App() {
  const [component, setComponent] = useState({
    login: false,
    home: true,
    regForm: false,
  });
  
  console.log(component)

  return (
    <OptionsContext.Provider value ={{component, setComponent}}>
      <Navbar />
      {component.home && <Home />}
      {component.login && <Login />}
      {component.regForm && <RegForm />}
      <Footer />
    </OptionsContext.Provider>
  );
}
