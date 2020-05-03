import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function Header(props) {
  return (
    <header className="Header">
      <h1 className="HeaderTitle">
        <Link to="/">{props.siteTitle}</Link>
      </h1>
      <h3 className="HeaderSubTitle">
        Numero effettivo di riproduzione del virus.
      </h3>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
