import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import PrimaryButton from "../../components/layout/primaryButton";

const mockProps = {
  text: "Mock Text",
  dataTestId: "Mock ID"
}

describe("PrimaryButton component", () => {
  beforeEach(() => {
    render(<PrimaryButton {...mockProps}/>)
  })
  it("Renders", () => {
    const primaryBtn = screen.getByTestId(mockProps.dataTestId)
    expect(primaryBtn).toBeInTheDocument()
  })
  it("Matches snapshot", () => {
    const primaryBtn = screen.getByTestId(mockProps.dataTestId)
    expect(primaryBtn).toMatchSnapshot()
  })
  it("Text prop is stated", () => {
    const primaryBtn = screen.getByTestId(mockProps.dataTestId)
    expect(primaryBtn.textContent).toMatch(mockProps.text)
  })
})