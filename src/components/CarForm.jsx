export default function CarForm() {
  return (
    <>
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div
          className="container py-5"
          style={{
            width: 1096,
            borderRadius: 84,
            background:
              "linear-gradient(rgb(0,0,0), rgba(0,0,0,0.6)), rgba(205,205,205,0)",
            color: "rgba(255,255,255,0)",
          }}
        >
          <div className="row mb-5" style={{ marginBottom: 30 }}>
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2
                className="fw-bold"
                style={{ marginBottom: 6, color: "rgb(255,255,255)" }}
              >
                Add your Car
              </h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-12">
              <div>
                <form
                  className="d-xl-flex justify-content-xl-center p-3 p-xl-4"
                  method="post"
                  style={{ marginTop: "-54px" }}
                >
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
                        boxShadow: "0px 0px var(--bs-red)",
                      }}
                    >
                      Year
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ boxShadow: "0px 0px var(--bs-red)" }}
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
                        First Item
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
                        Second Item
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
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
                        boxShadow: "0px 0px var(--bs-red)",
                      }}
                    >
                      Category
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ boxShadow: "0px 0px var(--bs-red)" }}
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
                        First Item
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
                        Second Item
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
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
                        boxShadow: "0px 0px var(--bs-red)",
                      }}
                    >
                      City
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ boxShadow: "0px 0px var(--bs-red)" }}
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
                        First Item
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
                        Second Item
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ boxShadow: "0px 0px var(--bs-red)" }}
                      >
                        Third Item
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4" style={{ marginRight: 30 }}>
              <div>
                <form name="color" placeholder="Color">
                  <div className="mb-3">
                    <input
                      id="email-3"
                      className="form-control"
                      type="text"
                      name="make"
                      placeholder="Make"
                    />
                  </div>
                  <div className="mb-3" />
                  <div className="mb-3">
                    <input
                      id="email-1"
                      className="form-control"
                      type="number"
                      name="mileage"
                      placeholder="Mileage"
                      style={{ color: "var(--bs-black)" }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="email-5"
                      className="form-control"
                      type="text"
                      name="color"
                      placeholder="Color"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      id="message-1"
                      className="form-control"
                      name="desc"
                      rows={3}
                      placeholder="Description"
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-xl-4" style={{ marginLeft: 30 }}>
              <div>
                <form name="color" placeholder="Color">
                  <div className="mb-3">
                    <input
                      id="email-6"
                      className="form-control"
                      type="text"
                      name="model"
                      placeholder="Model"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="email-2"
                      className="form-control"
                      type="number"
                      name="price"
                      placeholder="Price / Day"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="email-4"
                      className="form-control"
                      type="file"
                      name="file"
                      placeholder="Price / Day"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      id="message-3"
                      className="form-control"
                      name="add"
                      rows={3}
                      placeholder="Address"
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div>
                <form className="p-3 p-xl-4" method="post">
                  <div>
                    <button
                      className="btn btn-primary shadow d-block w-100"
                      type="submit"
                      style={{ fontSize: 21 }}
                    >
                      Add Car
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
