import { motion } from "framer-motion";
import React from "react";
import "../../index.css";
import './portfolio.css'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};
function Portfolio() {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
      {/* project 1: SpaceX App */}
      <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://spacex-corp.netlify.app/"
          >
            <div className="projects-images" id="spaceX"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>SpaceX App</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/SpaceX-App"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://spacex-corp.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* project 2: Nike Shoes Store */}
        <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://nike-shoe-store-web.netlify.app/"
          >
            <div className="projects-images" id="cartoonAnimation"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Nike Shoes Store</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Nike-Shoes"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://nike-shoe-store-web.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
           {/* project 2: Covid-19 Web */}
           <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://covid-19-webite.netlify.app/"
          >
            <div className="projects-images" id="timer"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Covid-19 Web Design (no-responsive) </h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Covid-19-website-design"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://covid-19-webite.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* project 4: Corona Tracker */}
        <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://corona_virus_tracker.surge.sh/"
          >
            <div className="projects-images" id="coronaTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Corona Virus Tracker App</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Corona-Virus-Tracker"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://corona_virus_tracker.surge.sh/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* project 2: Expense Tracker */}
        <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://yourexpense-tracker.netlify.app/"
          >
            <div className="projects-images" id="expenseTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Expense Tracker App</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Expense-Tracker"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://your-expense-tracker.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* project 3: Food Web Design */}
        <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90/Food-web-store"
          >
            <div className="projects-images" id="foodApp"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Food Web Design (Fully Responsive)</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Food-web-store"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://food-web-design.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>

      

        {/* Project 3 - React Dashboard */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90/React_Dashboard"
          >
            <div className="projects-images" id="dashboard"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>React Dashboard Design (not-responsive)</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/React_Dashboard"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://react-dashboard-1.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project - 4 Calculator App */}
        {/* <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90/Calculator-App"
          >
            <div className="projects-images" id="calculator"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Calculator App</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Calculator-App"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://umairshah90.github.io/Calculator-App/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div> */}

        {/* Project -5 Saylani Home Page */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90/SaylaniHomePage/tree/gh-pages"
          >
            <div className="projects-images" id="saylani"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Saylani Home Page</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/SaylaniHomePage/tree/gh-pages"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://umairshah90.github.io/SaylaniHomePage/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/UmairShah90"
        className="button-links"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
}

export default Portfolio;
