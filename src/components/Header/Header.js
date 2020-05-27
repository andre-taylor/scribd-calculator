import React from "react"
import PropTypes from "prop-types"

import styles from "./Header.module.css"

const Header = ({ children }) => {
  return <h2 className={styles.tradeMark}>{children}</h2>
}

export default Header

Header.propTypes = {
  children: PropTypes.node.isRequired
}
