import React from "react"
import renderer from "react-test-renderer"

import Screen from "../Screen"

describe("<Screen />", () => {
  it("renders correctly with required props as a string", () => {
    const component = renderer.create(<Screen screenValue={"1234"} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with required props as a number", () => {
    const component = renderer.create(<Screen screenValue={1234} />)
    expect(component).toMatchSnapshot()
  })
})
