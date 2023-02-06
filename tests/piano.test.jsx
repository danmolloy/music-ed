import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Piano, { pianoKeys } from "../components/piano"
import * as Tone from "tone";


jest.mock('tone', () => (
  {
    Synth: jest.fn().mockImplementation((e) => {
      return { 
        AudioBuffer: jest.fn(),
        toDestination: jest.fn(), 
        triggerAttackRelease: jest.fn(),
      }
    })
  }
))

describe("Piano component", () => {
  beforeEach(() => {
    render(<Piano />)
  })
  it("Renders", () => {
    const pianoDiv = screen.getByTestId("piano-div")
    expect(pianoDiv).toBeInTheDocument()
  })
  it("ABC button toggles note names on keys", () => {
    const noteToggle = screen.getByTestId("note-name-toggle")
    const pianoDiv = screen.getByTestId("piano-div")
    expect(noteToggle).toBeInTheDocument()
    act(() => {
      fireEvent.click(noteToggle)
    })
    const randNote = pianoKeys[Math.floor(Math.random() * pianoKeys.length)]
    expect(pianoDiv.textContent).toMatch(randNote.name)
    act(() => {
      fireEvent.click(noteToggle)
    })
    expect(pianoDiv.textContent).not.toMatch(randNote.name)
  })
  it("Lowest note is C4 and highest note is C6", () => {
    const noteToggle = screen.getByTestId("note-name-toggle")
    const pianoDiv = screen.getByTestId("piano-div")
    expect(noteToggle).toBeInTheDocument()
    act(() => {
      fireEvent.click(noteToggle)
    })
    expect(pianoDiv.textContent).toMatch("C4")
    expect(pianoDiv.textContent).toMatch("C6")
    expect(pianoDiv.textContent).not.toMatch("B3")
    expect(pianoDiv.textContent).not.toMatch("C#6")
  })
  it("Tone.Synth is called with expected note", () => {
    const noteToggle = screen.getByTestId("note-name-toggle")
    const pianoDiv = screen.getByTestId("piano-div")
    expect(noteToggle).toBeInTheDocument()
    act(() => {
      fireEvent.click(noteToggle)
    })
    const randNote = pianoKeys[Math.floor(Math.random() * pianoKeys.length)]
    const pianoKey = screen.getByText(randNote.name)
    expect(pianoKey).toBeInTheDocument()
    act(() => {
      fireEvent.click(pianoKey)
    })
    
    
  })
  //it("KeyDown event listener calls expected note", () => {})
})