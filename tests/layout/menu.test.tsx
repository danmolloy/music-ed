import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Menu from "../../components/layout/menu";

const mockProps = {
  session:{user: {
    name: "Mock User",
    email: "Mock Email",
    image: "Mock Image",
    expires: "Mock Expires",
    userData: {
      id: "Mock ID",
      name: "Mock userData Name",
      email: "Mock userData email",
      emailVerified: Math.random() < .3 ? null : Math.random() < .6 ? true : false,
      image: "Mock userData image",
      completedExercises: []
    }
  }}
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