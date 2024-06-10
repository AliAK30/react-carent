
//import './SponsorSection.css';

function SponserSection() {
  return (
    <section className="py-5">
  <div className="container text-center py-5">
    <p className="mb-4" style={{ fontSize: "1.6rem" }}>
      Used by{" "}
      <span className="text-success">
        <strong>2400+</strong>
      </span>
      &nbsp;of the best companies in the world.
    </p>
    <a href="#">
      <img className="m-3" src="brands/google.png" />
    </a>
    <a href="#">
      <img className="m-3" src="brands/microsoft.png" />
    </a>
    <a href="#">
      <img className="m-3" src="brands/apple.png" />
    </a>
    <a href="#">
      <img className="m-3" src="brands/facebook.png" />
    </a>
    <a href="#">
      <img className="m-3" src="brands/twitter.png" />
    </a>
  </div>
</section>

  );
}

export default SponserSection;
