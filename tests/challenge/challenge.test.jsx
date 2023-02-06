import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ExerciseComponent from '../../components/exercise';

jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = null;
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {data: mockSession, status: 'authenticated'}  // return type is [] in v3 but changed to {} in v4
    }),
  };
});

const mockData = {
  challenge: {"section":"Melodic Intervals","sectionLink":"/intervals","name":"Seconds","info":"Major Second and Minor Second","key":"1","numberQs":10,"range":"C4 - C6","intervals":[1,2],"direction":"Either"},
  harmonic: false
}

describe("Exercise component", () => {
  beforeEach(() => {
    render(<ExerciseComponent challenge={mockData.challenge} harmonic={mockData.harmonic}/>)
    const exerciseComponent = screen.getByTestId("exercise-div")
    expect(exerciseComponent).toBeInTheDocument()
  })
  it("Exercise section in header element", () => {
    const sectionRegExp = new RegExp(`${mockData.challenge.section}`)
    const exerciseHeader = screen.getByTestId("exercise-div")
    expect(exerciseHeader.textContent).toMatch(sectionRegExp)
  })
  it("Exercise name in header element", () => {
    const exNameRegExp = new RegExp(`${mockData.challenge.name}`)
    const exerciseHeader = screen.getByTestId("exercise-div")
    expect(exerciseHeader.textContent).toMatch(exNameRegExp)
  })
  //it("Intervals in header element", () => {})
  it("Piano keyboard on screen if needed for test", () => {
    const pianoDiv = screen.getByTestId("piano-div")
    expect(pianoDiv).toBeInTheDocument()
  })
  //it("Ascending/Descending buttons in control panel if required", () => {})
})


describe("Challenge Start", () => {
  beforeEach(() => {
    render(<ExerciseComponent challenge={mockData.challenge} harmonic={mockData.harmonic}/>)
    const exerciseComponent = screen.getByTestId("exercise-div")
    expect(exerciseComponent).toBeInTheDocument()
  })
  it("Ascending/Descending starts test", () => {
    const ascendingBtn = screen.getByTestId('asc-btn')
    expect(ascendingBtn).toBeInTheDocument()
    fireEvent.click(ascendingBtn)
    // Not yet testing the function call
  })
  //it("Test is timed", () => {})
  //it("Highlights first note in green", () => {})
  //it("Plays an interval", () => {})
  //it("Repeat button exists in control panel", () => {})
  //it("Repeat button repeats the interval", () => {})
  //it("Stop button exists in control panel", () => {})
  //it("Stop button stops the timer and removes it from the page", () => {})
  //it("Question number is shown", () => {})
  //it("Ascending/Descending is shown", () => {})
  //it("Test directions are visible", () => {})
})