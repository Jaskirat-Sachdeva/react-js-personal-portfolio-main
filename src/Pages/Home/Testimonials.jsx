import { TbCertificate } from "react-icons/tb";
import data from "../../data/index.json";

export default function Certifications() {
  const sortedCertifications = [...data.certifications].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="testimonial--section" id="certifications">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="skills--sections--heading">
            Certifications & Courses
          </h1>
        </div>
      </div>

      <div className="portfolio--section--container">
        {sortedCertifications.map((item) => (
          <div key={item.id} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
              <img src={item.src} alt="Certification Icon" />
            </div>

            <p className="text-md">{item.description}</p>

            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">{item.title}</p>
                <p className="text-md testimonial--author--designation">
                  {item.issuer}
                </p>
              </div>
            </div>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio--link"
              >
                <TbCertificate size={18} style={{ marginRight: "6px" }} />
                Certificate link
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
