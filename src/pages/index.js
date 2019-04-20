import React from "react"
import { Link, StaticQuery } from "gatsby"
import GatsbyContentfulFluid from "gatsby-image";

import Layout from "../components/layout"

const IndexPage = () => (
  <StaticQuery
    query={
      graphql`
        query {
          allContentfulHomepageTexts {
            nodes {
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
          }
          allContentfulTestimonial {
            nodes {
              id
              content {content}
              author
              jobTitle
            }
          }
        }
      `
    }
    render={data => (
      <Layout>
        <section className="about-me">
          <aside className="meta">
            <h1 className="name">
              {data.allContentfulHomepageTexts.nodes[0].firstName} {data.allContentfulHomepageTexts.nodes[0].lastName}
            </h1>
            <h3 className="job">{data.allContentfulHomepageTexts.nodes[0].jobTitle}</h3>
            <p className="job-description">{data.allContentfulHomepageTexts.nodes[0].jobDescription.jobDescription}</p>
            <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
            <Link to="/resume" className="btn btn-secondary">View Resume</Link>
          </aside>
          <GatsbyContentfulFluid className="profile-image" fluid={data.allContentfulHomepageTexts.nodes[0].profileImage.fluid} />
        </section>
        <section className="what-i-do">
          <h2 className="main-h2">What I do</h2>
          {data.allContentfulHomepageTexts.nodes[0].skillDescription.skillDescription}
        </section>
        <section className="testimonials">
          <h2 className="main-h2">Testimonials</h2>
          {data.allContentfulTestimonial.nodes.map((review) => 
            <div className="testimonial-item" key="{review.id}">
              <blockquote className="testimonial-quote">{review.content.content}</blockquote>
              <p className="testimonial-author">{review.author}</p>
              <p className="testimonial-job">{review.jobTitle}</p>
            </div>
          )}
        </section>
        <section className="featured-projects">
          <h2 className="main-h2">Featured Projects</h2>
        </section>
      </Layout>
    )}
  />
)

export default IndexPage
