import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ExerciseHeader from "../components/exerciseHeader";

const mockProps = {
  section: "Mock Section",
  sectionLink: "Mock Link",
  name: "Mock Name",
  info: "Mock Info"
}

describe("ExerciseHeader Component", () => {
  beforeEach(() => {
    render(<ExerciseHeader {...mockProps} />)
  })
  it("Renders", () => {
    const exHeaderDiv = screen.getByTestId("ex-header-div")
    expect(exHeaderDiv).toBeInTheDocument()
  })
  it("Section is stated", () => {
    const exHeaderDiv = screen.getByTestId("ex-header-div")
    expect(exHeaderDiv.textContent).toMatch(mockProps.section)
  })
  it("Name is stated", () => {
    const exHeaderDiv = screen.getByTestId("ex-header-div")
    expect(exHeaderDiv.textContent).toMatch(mockProps.name)
  })
  it("Info is stated", () => {
    const exHeaderDiv = screen.getByTestId("ex-header-div")
    expect(exHeaderDiv.textContent).toMatch(mockProps.info)
  })
})