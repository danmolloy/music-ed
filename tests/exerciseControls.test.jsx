import { fireEvent, render, screen } from "@testing-library/react";
import ExerciseControls from "../components/exerciseControls"
import "@testing-library/jest-dom"

const mockProps = {
  inExam:Math.random() > 0.5 ? true : false,
  handleStop: jest.fn(),
  playTones: jest.fn(),
  handleNewStart: jest.fn(),
  direction: Math.random() > 0.5 ? "Either" : "Both"
}

describe("ExerciseControls component", () => {
  beforeEach(() => {
    render(<ExerciseControls {...mockProps} />)
  })
  it("Renders", () => {
    const exerciseControls = screen.getByTestId("ex-controls-div")
    expect(exerciseControls).toBeInTheDocument()
  })
  it("if inExam, Repeat and Stop buttons render", () => {
    if (mockProps.inExam === true) {
      const inExamControls = screen.getByTestId("in-exam-controls")
      expect(inExamControls).toBeInTheDocument()
    }
  })
  it("Repeat button calls playTones", () => {
    if (mockProps.inExam === true) {
      const repeatButton = screen.getByTestId("repeat-btn")
      expect(repeatButton).toBeInTheDocument()
      fireEvent.click(repeatButton)
      expect(mockProps.playTones).toBeCalled()
    }
  })
  it("Stop button calls handleStop", () => {
    if (mockProps.inExam === true) {
      const stopButton = screen.getByTestId("stop-btn")
      expect(stopButton).toBeInTheDocument()
      fireEvent.click(stopButton)
      expect(mockProps.handleStop).toBeCalled()

    }
  })

  it('renders asc/desc buttons if inExam is false and direction is either', () => {
    if (mockProps.direction === "Either" && mockProps.inExam === false) {
      const eitherControls = screen.getByTestId("either-controls")
      expect(eitherControls).toBeInTheDocument()
    }
  })
  it("Asc button calls handleNewStart with arg 'Ascending'", () => {
    if (mockProps.direction === "Either" && mockProps.inExam === false) {
      const ascButton = screen.getByTestId("asc-btn")
      expect(ascButton).toBeInTheDocument()
      fireEvent.click(ascButton)
      expect(mockProps.handleNewStart).toBeCalledWith("Ascending")    }
  })
  it("Desc button calls handleNewStart with arg 'Descending'", () => {
    if (mockProps.direction === "Either" && mockProps.inExam === false) {
      const descButton = screen.getByTestId("desc-btn")
      expect(descButton).toBeInTheDocument()
      fireEvent.click(descButton)
      expect(mockProps.handleNewStart).toBeCalledWith("Descending")    
    }
  })

  it('renders start button if inExam is false and direction is both', () => {
    if (mockProps.direction === "Both" && mockProps.inExam === false) {
      const bothControls = screen.getByTestId("both-controls")
      expect(bothControls).toBeInTheDocument()
    }
  })
  it("Start btn calls handleNewStart with arg 'Both' or 'Ascending' respectively", () => {
    if (mockProps.inExam === false && mockProps.direction === "Both") {
      const startBtn = screen.getByText("Start")
      fireEvent.click(startBtn)
      expect(mockProps.handleNewStart).toBeCalledWith("Both")
    }
  })

})