import React from 'react'
import { Link, StaticQuery } from 'gatsby';
import { FaGithubAlt, FaInstagram, FaXing, FaUser, FaLaptopCode, FaFileAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import GatsbyContentfulFluid from "gatsby-image";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick = e => {
    const currentState = this.state.menuOpen;
    this.setState({ menuOpen: !currentState });
  }

  render() {
    return (
      <StaticQuery
        query={
          graphql`
            query {
              contentfulDeveloper {
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
          `
        }
        render={data => (
          <>
            <aside className="menu">
              <button className="menu-btn" type="button" onClick={this.handleMenuClick}>
                <span className="hamburger"></span>
              </button>
              <Link to="/" className="nav-home">
                {data.contentfulDeveloper.firstName} {data.contentfulDeveloper.lastName}
              </Link>

            </aside>
            <div className={this.state.menuOpen ? 'menu-content menu-open': 'menu-content'}>
              <GatsbyContentfulFluid className="nav-profile-image" fluid={data.contentfulDeveloper.avatar.fluid} />
              <div className="nav-bio">
                {data.contentfulDeveloper.shortPersonDescription.shortPersonDescription}
              </div>
              <div className="nav-social">
                <a href={data.contentfulDeveloper.githubUrl} target="_blank" rel="noopener noreferrer" alt="GitHub"><FaGithubAlt /></a>
                <a href={data.contentfulDeveloper.instagramUrl} target="_blank" rel="noopener noreferrer" alt="Instagram"><FaInstagram /></a>
                <a href={data.contentfulDeveloper.xingUrl} target="_blank" rel="noopener noreferrer" alt="Xing"><FaXing /></a>
              </div>
              <hr />
              <ul className="nav-menuitems">
                <li className="nav-item"><Link to="/"><FaUser /><span className="link-text">About Me</span></Link></li>
                <li className="nav-item"><Link to="/portfolio"><FaLaptopCode /><span className="link-text">Portfolio</span></Link></li>
                <li className="nav-item"><Link to="/resume"><FaFileAlt /><span className="link-text">Resume</span></Link></li>
                <li className="nav-item"><Link to="/contact"><FaEnvelopeOpenText /><span className="link-text">Contact</span></Link></li>
              </ul>
            </div>
          </>
        )}
      />
    )
  }
}

export default Menu;