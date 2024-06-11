import React, {useState} from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegForm from "./components/RegForm";
import Contact from "./components/Contact";
import CarsList from "./components/CarsList";


export const OptionsContext = React.createContext({
  component: {},
  setComponent: () => {},
});

export function App() {
  const [component, setComponent] = useState({
    login: false,
    home: true,
    regForm: false,
    contacts: false,
    cars: false,
  });
  

  return (
    <OptionsContext.Provider value ={{component, setComponent}}>
      <Navbar />
      {component.home && <Home />}
      {component.login && <Login />}
      {component.regForm && <RegForm />}
      {component.contacts && <Contact/>}
      {component.cars && <CarsList/>}
      <Footer />
    </OptionsContext.Provider>
  );
}
