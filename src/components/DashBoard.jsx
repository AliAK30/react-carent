import getCookie from "../utils/getCookie";
import axios from "axios";

export default function Dashboard() {
  return (
    <>
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div
          className="container py-5"
          style={{
            width: 1190,
            borderRadius: 84,
            maxWidth: 1146,
            background:
              "linear-gradient(rgba(0,33,72,0.82) 0%, rgba(255,255,255,0.81)), rgba(255,255,255,0.05)",
          }}
        >
          <div className="row">
            <div className="col-md-8 col-xl-12 col-xxl-9 text-center mx-auto">
              <h1
                className="fw-bold"
                style={{ color: "rgb(255,255,255)", marginBottom: 20 }}
              >
                <span style={{ fontWeight: "normal !important" }}>Welcome</span>{" "}
                Ali Ahmed
              </h1>
              <div className="d-inline-flex">
                <div
                  className="d-xl-flex justify-content-xl-center align-items-xl-center"
                  style={{ width: 175, height: "72.7812px" }}
                >
                  <button
                    className="btn btn-primary shadow"
                    type="button"
                    style={{ width: 149 }}
                  >
                    Your Cars
                  </button>
                </div>
                <div
                  className="d-xl-flex justify-content-xl-center align-items-xl-center"
                  style={{ width: 175, height: "72.7812px" }}
                />
                <div
                  className="d-xl-flex justify-content-xl-center align-items-xl-center"
                  style={{ height: "72.7812px", width: 175 }}
                >
                  <button
                    className="btn btn-primary shadow"
                    type="button"
                    style={{ width: 149 }}
                  >
                    Bookings
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="py-5 p-lg-5"
            style={{ paddingTop: 50, marginTop: "-4px" }}
          >
            <h1
              className="fw-bolder"
              style={{
                color: "rgb(255,255,255)",
                textAlign: "center",
                paddingBottom: 16,
              }}
            >
              Your Cars
            </h1>
            <div
              className="row row-cols-1 row-cols-md-2 mx-auto"
              style={{ maxWidth: 1085 }}
            >
              <div className="col-xl-12 mb-4">
                <div
                  className="card shadow-sm"
                  style={{
                    marginRight: 22,
                    marginLeft: "-9px",
                    borderRadius: 30,
                    background: "rgba(255,255,255,0.98)",
                    width: 1020,
                  }}
                >
                  <div
                    className="card-body px-4 py-5 px-md-5"
                    style={{
                      borderRadius: 30,
                      borderWidth: 3,
                      borderStyle: "solid",
                      height: 127,
                    }}
                  >
                    <div
                      className="d-flex flex-row justify-content-evenly align-items-xl-center"
                      style={{
                        height: 84,
                        margin: "-14px",
                        marginTop: "-26px",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "relative",
                          marginLeft: 3,
                          width: 221,
                          height: 118,
                          paddingBottom: 32,
                        }}
                      >
                        <img
                          src="car-Revo.png"
                          style={{ maxWidth: 270, width: 230 }}
                        />
                      </div>
                      <h1
                        className="fw-semibold shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center"
                        style={{
                          textAlign: "center",
                          fontSize: 27,
                          textShadow: "0px 0px 6px var(--bs-gray-500)",
                          paddingLeft: 0,
                          color: "var(--bs-black)",
                          height: 48,
                          width: "475.672px",
                        }}
                      >
                        TOYOTA Rivo
                      </h1>
                      <div className="flex-row" style={{ height: "72.578px" }}>
                        <button
                          className="btn btn-primary shadow"
                          type="button"
                          style={{ width: 207, background: "#e31b2f" }}
                        >
                          Delete
                        </button>
                        <p
                          className="fw-normal mb-4"
                          style={{
                            fontSize: 18,
                            margin: 19,
                            color: "var(--bs-black)",
                            marginLeft: 10,
                            marginTop: 3,
                          }}
                        >
                          <strong>Added on:</strong>&nbsp;11/06/2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row row-cols-1 row-cols-md-2 mx-auto"
              style={{ maxWidth: 1085 }}
            >
              <div className="col-xl-12 mb-4">
                <div
                  className="card shadow-sm"
                  style={{
                    marginRight: 22,
                    marginLeft: "-9px",
                    borderRadius: 30,
                    background: "rgba(255,255,255,0.98)",
                    width: 1020,
                  }}
                >
                  <div
                    className="card-body px-4 py-5 px-md-5"
                    style={{
                      borderRadius: 30,
                      borderWidth: 3,
                      borderStyle: "solid",
                      height: 127,
                    }}
                  >
                    <div
                      className="d-flex flex-row justify-content-evenly align-items-xl-center"
                      style={{
                        height: 84,
                        margin: "-14px",
                        marginTop: "-26px",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "relative",
                          marginLeft: 3,
                          width: 221,
                          height: 118,
                          paddingBottom: 0,
                          paddingTop: 0,
                          marginTop: "-20px",
                        }}
                      >
                        <img
                          src="car-Corolla-gli.png"
                          style={{ maxWidth: 270, width: 230 }}
                        />
                      </div>
                      <h1
                        className="fw-semibold shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center"
                        style={{
                          textAlign: "center",
                          fontSize: 27,
                          textShadow: "0px 0px 6px var(--bs-gray-500)",
                          paddingLeft: 0,
                          color: "var(--bs-black)",
                          height: 48,
                          width: "475.672px",
                        }}
                      >
                        TOYOTA Corolla Gli
                      </h1>
                      <div className="flex-row" style={{ height: "72.578px" }}>
                        <button
                          className="btn btn-primary shadow"
                          type="button"
                          style={{ width: 207, background: "#e31b2f" }}
                        >
                          Delete
                        </button>
                        <p
                          className="fw-normal mb-4"
                          style={{
                            fontSize: 18,
                            margin: 19,
                            color: "var(--bs-black)",
                            marginLeft: 10,
                            marginTop: 3,
                          }}
                        >
                          <strong>Added on:</strong>&nbsp;11/06/2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
