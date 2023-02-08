import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ChordsButtons from '../components/chordsButtons'

const mockProps = {
  answers: [{
    name: "Answer Name",
    intervals: [1, 2]
  }],
  examObjs: [{
    notes: ["C4"],
    correctAnswer: ["C4"],
    userAnswer: ["C4"]
  }, {
    notes: ["C4"],
    correctAnswer: ["C4"],
    userAnswer: ["C4"]
  }],
  submitAnswer: jest.fn(),
  currentQ: 1
}

describe("ChordsButtons component", () => {
  beforeEach(() => {
    render(<ChordsButtons {...mockProps}/>)
  })
  it("Renders", () => {
    const chordsButtons = screen.getByTestId("chords-btns-div")
    expect(chordsButtons).toBeInTheDocument()
  })
  it("Matches snapshot", () => {
    const chordsButtons = screen.getByTestId("chords-btns-div")
    expect(chordsButtons).toMatchSnapshot()
  })
  it("Each answer has a button", () => {
    let randIndex = Math.floor(Math.random() * mockProps.answers.length)
    const button = screen.getByTestId(`${mockProps.answers[randIndex].name}-button`)
    expect(button).toBeInTheDocument()
    expect(button.textContent).toMatch(mockProps.answers[randIndex].name)
  })
  it("Button calls submitAnswer", () => {
    let randIndex = Math.floor(Math.random() * mockProps.answers.length)
    const button = screen.getByTestId(`${mockProps.answers[randIndex].name}-button`)
    fireEvent.click(button)
    expect(mockProps.submitAnswer).toHaveBeenCalled()
  })
})