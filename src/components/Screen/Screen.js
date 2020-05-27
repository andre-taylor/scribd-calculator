import React from "react"
import PropTypes from "prop-types"

import styles from "./Screen.module.css"

const Screen = ({ screenValue }) => {
  return <output className={styles.screen}>{screenValue}</output>
}

export default Screen

Screen.propTypes = {
  screenValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}
