import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ChallengeTile from '../components/challengeTile'

const mockProps = {
  challenge: {
    name: "Challenge Name",
    info: "Challenge Info",
    key: "Challenge Key",
    numberQs: 24,
    range: "C4-C5",
    intervals: [2, 3],
    direction: "Ascending",
    exLink: "/exLink"
  },
  path: "/path"
}

jest.mock("next/link", () => {
  return ({children}) => {
      return children;
  }
}); 

// Link not tested

describe("ChallengeTile component", () => {
  beforeEach(() => {
    render(<ChallengeTile {...mockProps}/>)
  })
  it('renders', () => {
    const challengeTile = screen.getByTestId("challenge-tile-div")
    expect(challengeTile).toBeInTheDocument()
  })
  it("Matches snapshot", () => {
    const challengeTile = screen.getByTestId("challenge-tile-div")
    expect(challengeTile).toMatchSnapshot()
  })
  it("Challenge name stated", () => {
    const challengeTile = screen.getByTestId("challenge-tile-div")
    expect(challengeTile.textContent).toMatch(mockProps.challenge.name)
  })
  it("Challenge info stated", () => {
    const challengeTile = screen.getByTestId("challenge-tile-div")
    expect(challengeTile.textContent).toMatch(mockProps.challenge.info)
  })

})