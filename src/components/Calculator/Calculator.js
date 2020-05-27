import React from "react"
import { Header } from ".."
import { Screen } from ".."
import { Button } from ".."

import styles from "./Calculator.module.css"

export default class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      operator: null,
      previousValue: null,
      screenValue: 0,
      currentValue: 0
    }

    this.calculatorButtons = "+-*/789456123C=0".split("")
    this.doMath = {
      "+": (x, y) => parseInt(x, 10) + parseInt(y, 10),
      "-": (x, y) => parseInt(x, 10) - parseInt(y, 10),
      "*": (x, y) => parseInt(x, 10) * parseInt(y, 10),
      "/": (x, y) => parseInt(x, 10) / parseInt(y, 10)
    }
  }

  inputDigit = buttonValue => {
    const { screenValue, previousValue, currentValue, operator } = this.state
    let newState

    if (!operator && previousValue) {
      newState = {
        screenValue: buttonValue,
        currentValue: 0,
        previousValue: null
      }
    } else if (!operator) {
      newState = { screenValue: screenValue === 0 ? buttonValue : screenValue + buttonValue }
    } else {
      newState = {
        screenValue: previousValue !== currentValue ? buttonValue : screenValue + buttonValue,
        previousValue: currentValue
      }
    }

    this.setState(newState)
  }

  inputOperator = operator => {
    if (!operator) return
    const { screenValue, currentValue } = this.state
    const shouldDoMath = currentValue === 0 || screenValue === currentValue

    this.setState({
      operator,
      currentValue: shouldDoMath ? screenValue : this.doMath[operator](currentValue, screenValue)
    })
  }

  calculate = () => {
    const { operator, screenValue, currentValue } = this.state
    if (!operator) return

    const result = this.doMath[operator](currentValue, screenValue)

    this.setState({
      operator: null,
      screenValue: result,
      currentValue: result
    })
  }

  clearScreen = () => {
    this.setState({
      operator: null,
      previousValue: null,
      screenValue: 0,
      currentValue: 0
    })
  }

  buttonClickHandler = e => {
    if (e.target.nodeName === "BUTTON") {
      const buttonPressed = e.target.value

      switch (buttonPressed) {
        case "+":
          this.inputOperator("+")
          break
        case "-":
          this.inputOperator("-")
          break
        case "*":
          this.inputOperator("*")
          break
        case "/":
          this.inputOperator("/")
          break
        case "=":
          this.calculate()
          break
        case "C":
          this.clearScreen()
          break
        default:
          this.inputDigit(buttonPressed)
          break
      }
    }
  }

  render() {
    return (
      <div className={styles.calculatorMain}>
        <Header>
          basic calculator<sup>&trade;</sup>
        </Header>
        <Screen screenValue={this.state.screenValue} />
        <div className={styles.buttonsContainer} onClick={e => this.buttonClickHandler(e)}>
          {this.calculatorButtons.map((buttonValue, index) => {
            return <Button buttonValue={buttonValue} key={index} />
          })}
        </div>
      </div>
    )
  }
}
