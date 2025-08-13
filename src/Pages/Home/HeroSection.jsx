import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello there, I'm Jaskirat Sachdeva</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I am a Software Engineer at Leonardo. I graduated from Royal Holloway University of London with First Class Honours (79%) in Computer Science. 
            I have a passion for building innovative software solutions and am always eager to learn new technologies.
          </p>
        </div>

        {/* Centered Button */}
        <div className="hero--button-container">
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-primary"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
