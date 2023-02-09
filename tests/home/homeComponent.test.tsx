import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import HomeComponent from "../../components/home/homeComponent";

describe("HomeComponent", () => {
  beforeEach(() => {
    render(<HomeComponent />)
  })
  it("Renders", () => {
    const homeComponent = screen.getByTestId("home-component")
    expect(homeComponent).toBeInTheDocument()
  })
  it("Matches snapshot", () => {
    const homeComponent = screen.getByTestId("home-component")
    expect(homeComponent).toMatchSnapshot()
  })
  it("Home blurb is in the document", () => {
    const homeBlurb = screen.getByTestId("home-blurb")
    expect(homeBlurb).toBeInTheDocument()
  })
  it("Piano component is in the document", () => {
    const piano = screen.getByTestId("piano-div")
    expect(piano).toBeInTheDocument()
  })
  it("About link is in the document", () => {
    const aboutLink = screen.getByTestId("about-link")
    expect(aboutLink).toBeInTheDocument()
  })
  it("Exercises link is in the document", () => {
    const exercisesLink = screen.getByTestId("exercises-link")
    expect(exercisesLink).toBeInTheDocument()
  })

})