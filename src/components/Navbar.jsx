import React from 'react';
import logo1 from '../assets/image.png'
import { useContext } from 'react';
import { OptionsContext } from '../App';
import './Navbar.css';

const Navbar = () => {

  const {component, setComponent} = useContext(OptionsContext)
  return (
    <nav
  id="mainNav"
  className="navbar navbar-dark navbar-expand-md sticky-top py-3"
>
  <div className="container">
    <a className="navbar-brand d-flex align-items-center" href="/">
      <img src={logo1} width={186} height={44} />
    </a>
    <button
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navcol-1"
    >
      <span className="visually-hidden">Toggle navigation</span>
      <span className="navbar-toggler-icon" />
    </button>
    <div id="navcol-1" className="collapse navbar-collapse">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" href="index.html">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="services.html">
            Add Car
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="projects.html">
            Rent Car
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pricing.html">
            FAQ
          </a>
        </li>
        <li className="nav-item" />
        <li className="nav-item">
          <a className="nav-link" href="contacts.html">
            Contacts
          </a>
        </li>
      </ul>
      <input
        type="search"
        style={{
          width: 216,
          height: "36.5938px",
          borderRadius: 40,
          paddingLeft: 19,
          paddingRight: 10
        }}
        placeholder="Search Car"
      />
      
      <a
        className="btn btn-primary shadow"
        role="button"
        style={{ backgroundColor:'0353C3',height: "36.7812px", margin: 6, padding: "4.6px 32px" }}
        onClick={()=>setComponent({
          login: true,
          home: false,
          regForm: false,
        })}
      >
        Log in
      </a>
    </div>
  </div>
</nav>
);
}

export default Navbar;
