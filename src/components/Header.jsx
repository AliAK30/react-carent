
import './Header.css';
import sec from '../assets/section.jpg'
import header_pic from '../assets/header-pic.jpg'
import pic1 from '../assets/product1.jpg'
import pic2 from '../assets/product2.jpg'
import pic3 from '../assets/product3.jpg'

function Header() {
  return (
    <header className="bg-dark">
  <div className="container pt-4 pt-xl-5">
    <div className="row pt-5">
      <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
        <div className="text-center">
          <p className="fw-bold text-success mb-2">Voted #1 Worldwide</p>
          <h1 className="fw-bold">The best solution for our customers</h1>
        </div>
      </div>
      <div className="col-6">
        <div className="text-center" />
        <img src={header_pic} width={550} />
      </div>
      <div className="col-12 col-lg-10 mx-auto">
        <div
          className="position-relative"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end"
          }}
        >
          <div
            style={{
              position: "relative",
              flex: "0 0 45%",
              transform: "translate3d(-15%, 35%, 0)"
            }}
          >
            <img
              className="img-fluid"
              data-bss-parallax=""
              data-bss-parallax-speed="0.8"
              src={pic3}
            />
          </div>
          <div
            style={{
              position: "relative",
              flex: "0 0 45%",
              transform: "translate3d(-5%, 20%, 0)"
            }}
          >
            <img
              className="img-fluid"
              data-bss-parallax=""
              data-bss-parallax-speed="0.5"
              src={pic2}
            />
          </div>
          <div
            style={{
              position: "relative",
              flex: "0 0 60%",
              transform: "translate3d(0, 5%, 0)"
            }}
          >
            <img
              className="img-fluid"
              data-bss-parallax=""
              data-bss-parallax-speed="0.5"
              src={pic1}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  );
}

export default Header;
