import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/name.png" alt="Jaskirat's Logo" />
        </div>

        {/* Navigation Links */}
        <div className="footer--items">
          <ul>
            <li>
              <Link to="heroSection" smooth={true} offset={-70} duration={500} className="text-md">
                Home
              </Link>
            </li>
            <li>
              <Link to="AboutMe" smooth={true} offset={-70} duration={500} className="text-md">
                About Me
              </Link>
            </li>
            <li>
              <Link to="workExperience" smooth={true} offset={-70} duration={500} className="text-md">
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="MyPortfolio" smooth={true} offset={-70} duration={500} className="text-md">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="certifications" smooth={true} offset={-70} duration={500} className="text-md">
                Certifications
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true} offset={-70} duration={500} className="text-md">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer--social--icon">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/jaskirat-sachdeva/" target="_blank" rel="noreferrer">
                <FaLinkedin size={50} />
              </a>
            </li>
            <li>
              <a href="https://github.com/jaskirat-sachdeva" target="_blank" rel="noreferrer">
                <FaGithub size={50} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer--content--container">
        <p className="footer--content">Made By Jaskirat Sachdeva</p>
        <p className="footer--content">
          Credits to{" "}
          <a href="https://www.youtube.com/@howtobecomeadeveloper" target="_blank" rel="noreferrer">
            Ademir Alijagic
          </a>{" "}
          for inspiration
        </p>
      </div>
    </footer>
  );
}

export default Footer;
