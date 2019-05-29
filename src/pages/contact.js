import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <section class="page-title">
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a href="mailto:ps@psteger.com">ps@psteger.com</a></p>
      <p>Want to get connected? Follow me on the social media channels below.</p>
    </section>
    <h2>Get In Touch</h2>
    <form>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" rows="10" placeholder="Enter your message" />
      <button type="submit" class="btn btn-submit">Send Now</button>
    </form>
  </Layout>
)

export default ContactPage
