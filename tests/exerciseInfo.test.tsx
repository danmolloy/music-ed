import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ExerciseInfo from "../components/exerciseInfo";

const mockProps = {
  ascDesc: Math.random() > .5 ? "Ascending" : "Descending",
  showResults: Math.random() > .5 ? true : false,
  examObjs: [{
    startingNote: "C4",
    correctAnswer: "C4",
    userAnswer: "B4",
  },
  {
    startingNote: "C4",
    correctAnswer: "C4",
    userAnswer: "B4",
  }],
  section: "Mock Section",
  currentQ: Math.random() > .5 ? "1" : null,
  inExam: Math.random() > .5 ? true : false,
  name: "Mock name",
  time: 20
}

describe("ExerciseInfo component", () => {
  beforeEach(() => {
    render(<ExerciseInfo {...mockProps}/>)
  })
  it("Renders", () => {
    const exInfoDiv = screen.getByTestId("ex-info-div")
    expect(exInfoDiv).toBeInTheDocument()
  })
  it("Shows results if showResults === true, else shows inExamInfo", () => {
    if(mockProps.showResults === true) {
      const showResults = screen.getByTestId("results-div")
      expect(showResults).toBeInTheDocument()
    } else {
      const inExamInfo = screen.getByTestId("in-exam-info")
      expect(inExamInfo).toBeInTheDocument()
    }
  })
  it("Question number shown if currentQ !== null", () => {
    if (mockProps.currentQ !== null) {
      const inExamInfo = screen.getByTestId("in-exam-info")
      expect(inExamInfo.textContent).toMatch(`Question ${mockProps.currentQ}`)
    }
  })
  it("Melodic info shown if  section is Melodic Info", () => {
    if (mockProps.section === "Melodic Intervals" 
      && mockProps.inExam === true) {
        const melodicInfo = screen.getByTestId("melodic-info")
        expect(melodicInfo).toBeInTheDocument()
        expect(melodicInfo.textContent).toMatch(mockProps.ascDesc)
      }
  }) 
  it("Chord Info if inExam && name === chords", () => {
    if (mockProps.inExam === true 
      && mockProps.name === "chords") {
        const chordsInfo = screen.getByTestId("chords-info")
        expect(chordsInfo).toBeInTheDocument()
      }
  })
  // Harmonic info?
})