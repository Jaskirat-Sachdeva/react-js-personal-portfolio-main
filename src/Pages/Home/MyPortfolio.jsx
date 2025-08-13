import { useState } from "react";
import data from "../../data/index.json";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function MyPortfolio() {
  // Sort by newest date first
  const sortedPortfolio = [...data.portfolio].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const [filter, setFilter] = useState("All");

  const filteredPortfolio = sortedPortfolio.filter(
    (item) => filter === "All" || item.category === filter
  );

  const [cardStates, setCardStates] = useState(
    sortedPortfolio.map(() => ({ expanded: false }))
  );

  const toggleExpanded = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index].expanded = !newCardStates[index].expanded;
    setCardStates(newCardStates);
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      {/* Header & GitHub link */}
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="portfolio--section--heading">My Projects</h1>
        </div>
        <div>
          <a
            href="https://github.com/Jaskirat-Sachdeva"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <FaGithub size={30} style={{ marginRight: "8px" }} />
            Visit My GitHub
          </a>
        </div>
      </div>

      {/* Filter Buttons */}
      <div
        className="filter-buttons"
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "10px", // space between buttons
        }}
      >
        <button
          className={`btn ${filter === "All" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`btn ${filter === "University" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setFilter("University")}
        >
          University
        </button>
        <button
          className={`btn ${filter === "Personal" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setFilter("Personal")}
        >
          Personal
        </button>
      </div>

      {/* Portfolio Cards */}
      <div className="portfolio--section--container">
        {filteredPortfolio.map((item, index) => {
          const isExpanded = cardStates[index]?.expanded;
          const descriptionPreview = isExpanded
            ? item.description
            : item.description.slice(0, 120) +
            (item.description.length > 120 ? "..." : "");

          return (
            <div key={item.id} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt={item.title} />
              </div>

              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{descriptionPreview}</p>

                {item.description.length > 150 && (
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="btn btn-readmore"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio--link"
                  >
                    {item.link.includes("github.com") ? (
                      <>
                        <FaGithub size={20} style={{ marginRight: "6px" }} />
                        Check out my code
                      </>
                    ) : (
                      <>
                        <FaYoutube size={20} color="red" style={{ marginRight: "6px" }} />
                        Check out demo
                      </>
                    )}
                  </a>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
