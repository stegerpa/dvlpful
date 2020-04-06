import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <section className="section">
      <SEO title="Portfolio" />
      <h1>Portfolio</h1>
      <p>Welcome to my online portfolio. Here you will see selected projects. Please note that i can't publish every project due to data protection reasons.</p>

      <div className="category-filter"></div>
      <div className="projects">
        <div className="project-card">
          <img src="" alt="project-preview" />
          <h3 className="project-heading">Project Heading</h3>
          <p className="project-description">lorem iosjadoijasdj asijdoajsoid</p>
          <span className="project-client">Client: XYZ</span>
        </div>
      </div>
    </section>
  </Layout>
)

export default PortfolioPage
