import React from 'react'
import { Link, StaticQuery } from 'gatsby';
import { FaGithubAlt, FaInstagram, FaXing, FaUser, FaLaptopCode, FaFileAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import GatsbyContentfulFluid from "gatsby-image";

const Menu = () => (
  <StaticQuery
    query={
      graphql`
        query {
          allContentfulHomepageTexts {
            nodes {
              firstName
              lastName
              avatar {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              githubUrl
              xingUrl
              instagramUrl
              shortPersonDescription {shortPersonDescription}

            }
          }
        }
      `
    }
    render={data => (
      <aside className="menu">
        <Link to="/" className="nav-home">
          {data.allContentfulHomepageTexts.nodes[0].firstName} {data.allContentfulHomepageTexts.nodes[0].lastName}
        </Link>
        <GatsbyContentfulFluid className="nav-profile-image" fluid={data.allContentfulHomepageTexts.nodes[0].avatar.fluid} />
        <div className="nav-bio">
          {data.allContentfulHomepageTexts.nodes[0].shortPersonDescription.shortPersonDescription}
        </div>
        <div className="nav-social">
          <a href={data.allContentfulHomepageTexts.nodes[0].githubUrl} target="_blank" rel="noopener noreferrer" alt="GitHub"><FaGithubAlt /></a>
          <a href={data.allContentfulHomepageTexts.nodes[0].instagramUrl} target="_blank" rel="noopener noreferrer" alt="Instagram"><FaInstagram /></a>
          <a href={data.allContentfulHomepageTexts.nodes[0].xingUrl} target="_blank" rel="noopener noreferrer" alt="Xing"><FaXing /></a>
        </div>
        <hr />
        <ul className="nav-menu">
          <li className="nav-item"><FaUser /><Link to="/">About Me</Link></li>
          <li className="nav-item"><FaLaptopCode /><Link to="/portfolio">Portfolio</Link></li>
          <li className="nav-item"><FaFileAlt /><Link to="/resume">Resume</Link></li>
          <li className="nav-item"><FaEnvelopeOpenText /><Link to="/contact">Contact</Link></li>
        </ul>
      </aside>
    )}
  />
);

export default Menu;