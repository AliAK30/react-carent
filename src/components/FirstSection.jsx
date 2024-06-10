import "./Header.css";
//import './FirstSection.css';

function FirstSection() {
    return (
      <section className="py-5">
    <div className="container text-center py-5">
      <h1 className="mb-4" style={{ fontSize: "1.6rem" }}>
      Renting a Car
      <br />
      Never been this {" "}
        <span className="text-success">
          <strong>Easy.</strong>
        </span>
      </h1>
      <a
          className="btn btn-primary btn-lg d-flex d-xxl-flex justify-content-center align-items-center flex-wrap justify-content-xxl-center mx-auto"
          role="button"
          href="#"
          style={{
            position: "relative",
            width: 223,
            background: "#b02626",
            height: "45.5938px",
            paddingTop: 6
          }}
        >
          Search Now
        </a>
    </div>
  </section>
  
    );
  }
  
  export default FirstSection;
  