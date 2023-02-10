import { screen, render, act } from "@testing-library/react";
import "@testing-library/jest-dom"
import ExerciseComponent from "../components/exercise";

jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    "user":{
      "name":"danmolloy","email":"danielmolloy_6@icloud.com","image":"https://avatars.githubusercontent.com/u/64697812?v=4"
    },
    "expires":"2022-11-13T20:04:30.199Z"
  }
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {data: mockSession, status: 'authenticated'}  // return type is [] in v3 but changed to {} in v4
    }),
  };
});

const mockProps = {
  challenge: {
    section: "Melodic Intervals",
    sectionLink: "Mock Link",
    name: "Mock Name",
    info: "Mock Info",
    key: "Mock Key",
    numberQs: "10",
    range: "Mock range",
    intervals: [1, 2, 3],
    direction: "Ascending",
    //answers?: any
  },
  multidirection: true,
  harmonic: false
}

describe("Exercise component", () => {
  beforeEach(() => {
    render(<ExerciseComponent {...mockProps} />)
  })
  it("Renders", () => {
    const exerciseDiv = screen.getByTestId("exercise-div")
    expect(exerciseDiv).toBeInTheDocument()
  })
  it("ExerciseHeader component in the document, with expect section, name and info", () => {
    const exHeader = screen.getByTestId("ex-header-div")
    expect(exHeader).toBeInTheDocument()
    // Not yet testing for expected props
  })
  it("ExerciseInfo component in the document", () => {
    const exInfo = screen.getByTestId("ex-info-div")
    expect(exInfo).toBeInTheDocument()
  })
  it("Timer in the document if inExam", () => {
    if (false) {
      const timer = screen.getByTestId("ex-timer")
      expect(timer).toBeInTheDocument()
    }
  })
  it("Piano component in the document if required", () => {
    if(new RegExp('Intervals', 'g').test(mockProps.challenge.section) === true) {
      const piano = screen.getByTestId("piano-div")
      expect(piano).toBeInTheDocument()
    }
  })
  it("ChordButtons component in the document if required", () => {
    if(new RegExp('Intervals', 'g').test(mockProps.challenge.section) !== true) {
      const chordBtns = screen.getByTestId("chords-btns-div")
      expect(chordBtns).toBeInTheDocument()
    }
  })

  //Component methods need to be tested
  //UserEvents not being tested
})
