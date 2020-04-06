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
          contentfulDeveloper {
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
          allContentfulSkills (filter: {node_locale: {eq: "en-US"}}, sort: {fields: order}) {
            nodes{
              id
              title
              icon
              highlightColor
            }
          }
          allContentfulTestimonials (filter: {node_locale: {eq: "en-US"}}) {
            nodes {
              id
              content {content}
              author
              jobTitle
            }
          }
          allContentfulProjects (filter: {node_locale: {eq: "en-US"}}) {
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
        <section className="section section-profile">
          <div className="container">
            <div className="profile">
              <aside className="profile-bio">
                <h1 className="profile-bio-name">
                  {data.contentfulDeveloper.firstName} {data.contentfulDeveloper.lastName}
                </h1>
                <h3 className="profile-bio-job">{data.contentfulDeveloper.jobTitle}</h3>
                <p className="profile-bio-description">{data.contentfulDeveloper.jobDescription.jobDescription}</p>
                <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
                <Link to="/resume" className="btn btn-secondary">View Resume</Link>
              </aside>
              <GatsbyContentfulFluid className="profile-image" fluid={data.contentfulDeveloper.profileImage.fluid} />
            </div>
          </div>
        </section>

        <section className="section section-whatido">
          <div className="container">
            <h2 className="main-h2">What I do</h2>
            <p className="whatido-description">{data.contentfulDeveloper.skillDescription.skillDescription}</p>
            <ul className="skills">
              {data.allContentfulSkills.nodes.map((skill) =>
                <li className="skill" key={skill.id} style={{'--color': ' #'+skill.highlightColor}}>
                  <span className={'skill-icon devicons '+skill.icon}></span>
                  <p className="skill-text">{skill.title}</p>
                </li>
              )}
            </ul>
          </div>
        </section>
        <hr />

        <section className="section section-testimonials">
          <div className="container">
            <h2 className="main-h2">Testimonials</h2>
            <div className="testimonials">
            {data.allContentfulTestimonials.nodes.map((t) =>
              <div className="testimonial" key="{t.id}">
                <FaQuoteLeft className="quote" />
                <blockquote className="testimonial-quote">{t.content.content}</blockquote>
                <p className="testimonial-author">{t.author}</p>
                <p className="testimonial-job">{t.jobTitle}</p>
              </div>
            )}
            </div>
          </div>
        </section>

        <section className="section section-projects">
          <div className="container">
            <h2 className="main-h2">Featured Projects</h2>
            <div className="projects">
            {data.allContentfulProjects.nodes.map((project) =>
              <Link to={'#'} className="project" key={project.id}>
                <GatsbyContentfulFluid className="project-image" fluid={project.previewImage.fluid} />
                <div className="project-meta">
                  <h3 className="project-meta-title">{project.title}</h3>
                  <p className="project-meta-description">{project.shortDescription.shortDescription}</p>
                  <p className="project-meta-client">Client: {project.clientName}</p>
                </div>
              </Link>
            )}
            </div>
          </div>
        </section>

        <section className="footer">
          © 2020 by Patrick Steger <span className="seperator">|</span> <Link to="/impressum">Impressum</Link>
        </section>

      </Layout>
    )}
  />
)

export default IndexPage
