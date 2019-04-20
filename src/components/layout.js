import React from "react"
import PropTypes from "prop-types"

import "../scss/layout.scss"
import Menu from "./menu";

const Layout = ({ children }) => (
  <>
    <div className="wrapper">
      <Menu />
      <main className="main">{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
