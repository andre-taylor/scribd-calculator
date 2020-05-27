import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "./Button.module.css"

const Button = ({ buttonValue }) => {
  const getClassName = buttonValue => {
    let cssName
    switch (buttonValue) {
      case "+":
        cssName = "add"
        break
      case "-":
        cssName = "subtract"
        break
      case "*":
        cssName = "multiple"
        break
      case "/":
        cssName = "divide"
        break
      case "=":
        cssName = "calculate"
        break
      case "C":
        cssName = "clearScreen"
        break
      default:
        cssName = `key${buttonValue}`
        break
    }
    return cssName
  }
  return (
    <button type="button" value={buttonValue} className={cx(styles.button, styles[getClassName(buttonValue)])}>
      {buttonValue}
    </button>
  )
}

export default Button

Button.propTypes = {
  buttonValue: PropTypes.string.isRequired
}
