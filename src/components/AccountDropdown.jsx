import getCookie from "../utils/getCookie";
import { defaultComponent } from "../App";
import { useContext } from "react";
import { OptionsContext } from "../App";



export default function AccountDropdown()  {

    const { setComponent } = useContext(OptionsContext);
    return (
    <div
      className="dropdown d-inline-flex"
      style={{ width: 175, height: "72.7812px" }}
    >
      <button
        className="btn btn-warning dropdown-toggle border rounded-pill shadow"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        type="button"
        style={{
          margin: 13,
          opacity: 1,
          width: 149,
          background: "#3763f4",
          color: "rgb(255,255,255)",
          boxShadow: "0px 0px var(--bs-red)",
        }}
      >
        {getCookie("carent-session-token").fullname}
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" role="button" onClick={()=>setComponent({...defaultComponent, dashboard:true})}>
          View Dashboard
        </a>
        <a className="dropdown-item" role="button" onCick>
          Log Out
        </a>
      </div>
    </div>
  );
}