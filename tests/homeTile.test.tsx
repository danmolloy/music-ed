import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import HomeTile from "../components/homeTile";

const mockProps = {
  tileLink: "Mock Link", 
  title: "Mock Title"
}

describe("HomeTile component", () => {
  beforeEach(() => {
    render(<HomeTile {...mockProps} />)
  })
  it("Renders", () => {
    const homeTile = screen.getByTestId("home-tile-btn")
    expect(homeTile).toBeInTheDocument()
  })
  it("Title is stated", () => {
    const homeTile = screen.getByTestId("home-tile-btn")
    expect(homeTile.textContent).toMatch(mockProps.title)
  })
})