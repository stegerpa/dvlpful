import React from "react"
import { Link, StaticQuery } from "gatsby"
import GatsbyContentfulFluid from "gatsby-image";
import { FaQuoteLeft } from 'react-icons/fa';

import Layout from "../components/layout"

const IndexPage = () => (
  <StaticQuery
    query={
      graphql`
        query {
          contentfulHomepageTexts {
            firstName
            lastName
            jobTitle
            jobDescription {jobDescription}
            profileImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            skillDescription {skillDescription}
          }
          allContentfulSkills {
            nodes{
              id
              title
              icon
              highlightColor
            }
          }
          allContentfulTestimonial {
            nodes {
              id
              content {content}
              author
              jobTitle
            }
          }
          allContentfulProject {
            nodes {
              id
              title
              shortDescription {
                shortDescription
              }
              clientName
              previewImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      `
    }
    render={data => (
      <Layout>
        <section className="section-profile">
          <aside className="profile-bio">
            <h1 className="profile-bio-name">
              {data.contentfulHomepageTexts.firstName} {data.contentfulHomepageTexts.lastName}
            </h1>
            <h3 className="profile-bio-job">{data.contentfulHomepageTexts.jobTitle}</h3>
            <p className="profile-bio-description">{data.contentfulHomepageTexts.jobDescription.jobDescription}</p>
            <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
            <Link to="/resume" className="btn btn-secondary">View Resume</Link>
          </aside>
          <GatsbyContentfulFluid className="profile-image" fluid={data.contentfulHomepageTexts.profileImage.fluid} />
        </section>
        <section className="section-whatido">
          <h2 className="main-h2">What I do</h2>
          <p className="whatido-description">{data.contentfulHomepageTexts.skillDescription.skillDescription}</p>
          <ul className="skills">
            {data.allContentfulSkills.nodes.map((skill) => 
              <li className="skill" key={skill.id}>
                <span className={'skill-icon devicons '+skill.icon} style={{'--color': ' #'+skill.highlightColor}}></span>
                <p className="skill-text">{skill.title}</p>
              </li>
            )}
          </ul>
        </section>
        <hr />
        <section className="section-testimonials">
          <h2 className="main-h2">Testimonials</h2>
          <div className="testimonials">
          {data.allContentfulTestimonial.nodes.map((t) => 
            <div className="testimonial" key="{t.id}">
              <FaQuoteLeft className="quote" />
              <blockquote className="testimonial-quote">{t.content.content}</blockquote>
              <p className="testimonial-author">{t.author}</p>
              <p className="testimonial-job">{t.jobTitle}</p>
            </div>
          )}
          </div>
        </section>
        <section className="section-projects">
          <h2 className="main-h2">Featured Projects</h2>
          <div className="projects">
          {data.allContentfulProject.nodes.map((project) => 
            <Link to={'/project/'+project.id} className="project" key={project.id}>
              <GatsbyContentfulFluid className="project-image" fluid={project.previewImage.fluid} />
              <div className="project-meta">
                <h3 className="project-meta-title">{project.title}</h3>
                <p className="project-meta-description">{project.shortDescription.shortDescription}</p>
                <p className="project-meta-client">Client: {project.clientName}</p>
              </div>
            </Link>  
          )}
          </div>
        </section>
      </Layout>
    )}
  />
)

export default IndexPage
