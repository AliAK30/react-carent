import { useState, useEffect, useRef, useMemo} from "react";
import { OptionsContext } from "../App";
import convertPath from "../utils/convertPath"
import capitalize from "../utils/capitalize"

function removeDuplicates(arr) {
  return [...new Set(arr)];
  }


export default function CarsList({cars}) {
  //const { component } = useContext(OptionsContext);
  //const categoriesKey = useRef(-1)

  

  const categories = useMemo(() => {
    return removeDuplicates(cars).map((car) => {
      //categoriesKey.current++;
      return (
        <a className="dropdown-item" role="button" key={car.category}>
          {car.category}
        </a>
      );
    });
  }, [cars]);

  console.log(cars);

  return (
    <section>
      <div
        className="container py-5"
        style={{
          width: 1096,
          borderRadius: 84,
          background: "rgba(205,205,205,0.95)",
        }}
      >
        <div className="row">
          <div className="col-md-8 col-xl-12 col-xxl-9 text-center mx-auto">
            <h3 className="fw-bold" style={{ color: "var(--bs-black)" }}>
              Find your Perfect Ride:
            </h3>
            <div className="dropdown d-inline-flex">
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
                }}
              >
                Category
              </button>
              <div className="dropdown-menu">{categories}</div>
            </div>
            <div className="dropdown d-inline-flex">
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
                }}
              >
                Make
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  First Item
                </a>
                <a className="dropdown-item" href="#">
                  Second Item
                </a>
                <a className="dropdown-item" href="#">
                  Third Item
                </a>
              </div>
            </div>
            <div className="dropdown d-inline-flex">
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
                }}
              >
                Model
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  First Item
                </a>
                <a className="dropdown-item" href="#">
                  Second Item
                </a>
                <a className="dropdown-item" href="#">
                  Third Item
                </a>
              </div>
            </div>
            <div className="dropdown d-inline-flex">
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
                }}
              >
                Location
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  First Item
                </a>
                <a className="dropdown-item" href="#">
                  Second Item
                </a>
                <a className="dropdown-item" href="#">
                  Third Item
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 p-lg-5" style={{ paddingTop: 202, marginTop: 46 }}>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: 900 }}
          >
            
                {cars.map(car=> {
                  return <div className="col mb-4">
                  <div
                    className="card shadow-sm"
                    style={{
                      marginRight: 22,
                      marginLeft: "-9px",
                      borderRadius: 49,
                      background: "rgba(255,255,255,0.57)",
                      width: 415,
                    }}
                  >
                    <div
                      className="card-body px-4 py-5 px-md-5"
                      style={{
                        borderRadius: 45,
                        borderWidth: 3,
                        borderStyle: "solid",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "relative",
                          marginLeft: 58,
                          width: 221,
                          height: 129,
                          paddingBottom: 52,
                        }}
                      >
                        <img
                          src={convertPath(car.photos_url[0])}
                          style={{ maxWidth: 321 }}
                        />
                      </div>
                      <h5
                        className="fw-bold shadow-sm card-title"
                        style={{
                          textAlign: "left",
                          fontSize: 29,
                          textShadow: "0px 0px 6px var(--bs-gray-500)",
                          paddingLeft: 20,
                          color: "var(--bs-black)",
                        }}
                      >
                        {capitalize(car.make)+" " + capitalize(car.model)}
                      </h5>
                      <p
                        className="card-text mb-4"
                        style={{
                          fontSize: 18,
                          margin: 19,
                          color: "var(--bs-black)",
                        }}
                      >
                        <strong>Category:</strong> {car.category}
                        <br />
                        <strong>Location:</strong> {capitalize(car.city)}
                      </p>
                      <h5
                        className="fw-bold shadow-sm card-title"
                        style={{
                          textAlign: "center",
                          fontSize: 29,
                          textShadow: "0px 0px 6px var(--bs-gray-500)",
                          width: 99,
                          display: "inline-block",
                          position: "relative",
                          paddingLeft: 0,
                          marginLeft: 92,
                          color: "var(--bs-black)",
                        }}
                      >
                        {car.price_per_day}
                      </h5>
                      <h5
                        className="fw-bold shadow-sm card-title"
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          textShadow: "0px 0px 6px var(--bs-gray-500)",
                          width: 78,
                          display: "inline-block",
                          color: "var(--bs-black)",
                        }}
                      >
                        PKR / day
                      </h5>
                      <button
                        className="btn btn-primary shadow"
                        type="button"
                        style={{ width: 310 }}
                      >
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
                })}


          </div>
        </div>
      </div>
    </section>
  );
}
