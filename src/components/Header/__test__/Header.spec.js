import React from "react"
import renderer from "react-test-renderer"

import Header from "../Header"

describe("<Header />", () => {
  it("renders correctly with required props", () => {
    const component = renderer.create(
      <Header>
        basic calculator<sup>&trade;</sup>
      </Header>
    )
    expect(component).toMatchSnapshot()
  })
})
