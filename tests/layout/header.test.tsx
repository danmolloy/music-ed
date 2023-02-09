import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "../../components/layout/header";

const mockProps = {
  showMenu: jest.fn(),
  menuShown: Math.random() < .5 ? true : false,
  signedIn: Math.random() < .5 ? true : false,
}

describe("Header component", () => {
  beforeEach(() => {
    render(<Header {...mockProps} />)
  })
  it("Renders", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("App title stated", () => {
    const headerTitle = screen.getByTestId("header-title")
    expect(headerTitle).toBeInTheDocument()
  })
  it("shows menu if signed in", () => {
    if (mockProps.signedIn === true) {
      const menuIcon = screen.getByTestId("menu-icon")
      expect(menuIcon).toBeInTheDocument()
    }
  })
  it("menu btn calls showMenu onClick", () => {
    if (mockProps.signedIn === true) {
      const menuIcon = screen.getByTestId("menu-icon")
      act(() => {
        fireEvent.click(menuIcon)
      })
      expect(mockProps.showMenu).toBeCalled()
    }
  })
})