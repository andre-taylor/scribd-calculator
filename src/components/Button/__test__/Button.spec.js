import React from "react"
import renderer from "react-test-renderer"

import Button from "../Button"

describe("<Button />", () => {
  it("renders correctly with a '+' switch value", () => {
    const component = renderer.create(<Button buttonValue={"+"} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with a '-' switch value", () => {
    const component = renderer.create(<Button buttonValue={"-"} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with a '*' switch value", () => {
    const component = renderer.create(<Button buttonValue={"*"} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with a '/' switch value", () => {
    const component = renderer.create(<Button buttonValue={"/"} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with a '=' switch value", () => {
    const component = renderer.create(<Button buttonValue={"="} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with a 'C' switch value", () => {
    const component = renderer.create(<Button buttonValue={"C"} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with a default switch value", () => {
    const component = renderer.create(<Button buttonValue={"0"} />)
    expect(component).toMatchSnapshot()
  })
})
