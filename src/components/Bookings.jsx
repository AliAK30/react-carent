export default function Bookings() {
  return (
    <div className="py-5 p-lg-5" style={{ paddingTop: 50, marginTop: "-4px"}}>
      <h1
        className="fw-bolder"
        style={{
          color: "rgb(255,255,255)",
          textAlign: "center",
          paddingBottom: 16,
        }}
      >
        Bookings
      </h1>
      <div
        className="row row-cols-1 row-cols-md-2 mx-auto"
        style={{ maxWidth: 1085 }}
      >
        <div className="col-xl-12 mb-4" style={{ width: "100%" }}>
          <div
            className="card shadow-sm"
            style={{
              marginRight: 22,
              marginLeft: "-9px",
              borderRadius: 30,
              background: "rgba(255,255,255,0.98)",
              width: "100%",
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
                style={{ height: 84, margin: "-14px", marginTop: "-26px" }}
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
                <div
                  className="d-xl-flex flex-column justify-content-xl-center align-items-xl-center"
                  style={{ height: "72.578px", width: "439.672px" }}
                >
                  <h1
                    className="fw-semibold shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center"
                    style={{
                      textAlign: "center",
                      fontSize: 27,
                      textShadow: "0px 0px 6px var(--bs-gray-500)",
                      paddingLeft: 0,
                      color: "var(--bs-black)",
                      height: 48,
                      width: "406.672px",
                    }}
                  >
                    TOYOTA Rivo
                  </h1>
                  <h1
                    className="fw-semibold shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center"
                    style={{
                      textAlign: "center",
                      fontSize: 27,
                      textShadow: "0px 0px 6px var(--bs-gray-500)",
                      paddingLeft: 0,
                      color: "var(--bs-black)",
                      height: 48,
                      width: "382.672px",
                    }}
                  >
                    <span style={{ fontWeight: "normal !important" }}>
                      PKR 20000
                    </span>
                  </h1>
                </div>
                <div
                  className="d-xl-flex flex-column justify-content-xl-center align-items-xl-center"
                  style={{ height: "72.578px", width: "210.672px" }}
                >
                  <h1
                    className="fw-semibold shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center"
                    style={{
                      textAlign: "center",
                      fontSize: 17,
                      textShadow: "0px 0px 6px var(--bs-gray-500)",
                      paddingLeft: 0,
                      color: "var(--bs-black)",
                      height: 48,
                      width: "213.672px",
                      fontWeight: "bold",
                      marginBottom: 0,
                    }}
                  >
                    <br />
                    <strong>Pick-up:</strong>
                    <span style={{ fontWeight: "normal !important" }}>
                      &nbsp;11/06/2024
                    </span>
                    <br />
                    <br />
                  </h1>
                  <h1
                    className="fw-semibold shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center"
                    style={{
                      textAlign: "center",
                      fontSize: 17,
                      textShadow: "0px 0px 6px var(--bs-gray-500)",
                      paddingLeft: 0,
                      color: "var(--bs-black)",
                      height: 48,
                      width: "213.672px",
                      fontWeight: "bold",
                    }}
                  >
                    <br />
                    <strong>Drop-off:</strong>
                    <span style={{ fontWeight: "normal !important" }}>
                      &nbsp;11/06/2024
                    </span>
                    <br />
                    <br />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
