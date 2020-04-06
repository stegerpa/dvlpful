import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationMsg: '',
      notificationClass: ''
    }
  }

  render() {
    return (
      <Layout>
        <section className="section section-contact-intro">
          <SEO title="Contact" />
          <h1>Contact</h1>
          <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a href="mailto:ps@psteger.com">ps@psteger.com</a></p>
          <p>Want to get connected? Follow me on the social media channels below.</p>
        </section>

        <section className="section section-contact">
          <h2>Get In Touch</h2>
          <div className={this.state.notificationClass}>{this.state.notificationMsg}</div>
          <Formik
            initialValues={{ name:'', email: '', message: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.message) {
                errors.message = 'Required';
              } else if (values.message.length < 20) {
                errors.message = 'Your message seems a little too short'
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              axios.post('https://getform.io/f/3361c62a-1e22-4abd-ba8e-189a63490d8c', values)
                .then(data => {
                  this.setState({notificationMsg: 'Thanks for contacting me! I will be in touch with you shortly.'});
                  this.setState({notificationClass: 'notifications notification-success'});
                })
                .catch(error => {
                  this.setState({notificationMsg: 'There was an error sending this message. You can try to contact me by email at ps@psteger.com. Thank you!'});
                  this.setState({notificationClass: 'notifications notification-error'});
                })
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <label>
                Your Name
                </label>
                <Field
                  name="name"
                  className={errors.name && touched.name ? "formfield error" : "formfield"}
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="div" className="input-feedback" />

                <label>
                Email-Adress
                </label>
                <Field
                  type="email"
                  name="email"
                  className={errors.email && touched.email ? "formfield error" : "formfield"}
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="input-feedback" />

                <label>
                Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  className={errors.message && touched.message ? "formfield error" : "formfield"}
                  rows="10"
                  placeholder="Your Message"
                />
                <ErrorMessage name="message" component="div" className="input-feedback" />

                <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                  Send Now
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </Layout>
    );
  }
}

export default ContactPage
