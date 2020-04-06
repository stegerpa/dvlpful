import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ImpressumPage = () => (
  <Layout>
    <section className="section">
      <SEO title="Resume" />
      <h1>Impressum</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </section>
  </Layout>
)

export default ImpressumPage
