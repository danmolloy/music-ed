import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Menu from "../../components/layout/menu";

const mockProps = {
  userId: "Mock User ID"
}

describe("Menu component", () => {
  beforeEach(() => {
    render(<Menu {...mockProps}/>)
  })
  it("Renders", () => {
    const menu = screen.getByTestId("menu-div")
    expect(menu).toBeInTheDocument()
  })
  it("Matches snapshot", () => {
    const menu = screen.getByTestId("menu-div")
    expect(menu).toMatchSnapshot()
  })
  it("About link exists", () => {
    const menu = screen.getByTestId("menu-div")
    expect(menu.textContent).toMatch("About")
  })
  it("Exercises link exists", () => {
    const menu = screen.getByTestId("menu-div")
    expect(menu.textContent).toMatch("Exercises")
  })
  it("My Progress link exists", () => {
    const menu = screen.getByTestId("menu-div")
    expect(menu.textContent).toMatch("My Progress")
  })
  it("Contact link exists", () => {
    const menu = screen.getByTestId("menu-div")
    expect(menu.textContent).toMatch("Contact")
  })
})