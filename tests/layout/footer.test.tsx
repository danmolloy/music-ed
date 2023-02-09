import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Footer from "../../components/layout/footer";

const sessionObj = {
  user: {
    name: "Mock User",
    email: "Mock Email",
    image: "Mock Image",
    expires: "Mock Expires",
    userData: {
      id: "Mock ID",
      name: "Mock userData Name",
      email: "Mock userData email",
      emailVerified: Math.random() < .3 ? null : Math.random() < .6 ? true : false,
      image: "Mock userData image",
      completedExercises: []
    }
  }
}

const mockProps = {
  session: Math.random() < .5 ? sessionObj : null,
  signOut: jest.fn(),
  signIn: jest.fn()
}

describe("Footer component", () => {
  beforeEach(() => {
    render(<Footer {...mockProps}/>)
  })
  it("Renders", () => {
    const footerDiv = screen.getByTestId("footer-div")
    expect(footerDiv).toBeInTheDocument()
  })
  it("Contact link exists", () => {
    const contactLink = screen.getByTestId("contact-link")
    expect(contactLink).toBeInTheDocument()
  })
  it("if session, user-info renders, else sign-in info", () => {
    if (mockProps.session) {
      const userInfo = screen.getByTestId("user-info")
      expect(userInfo).toBeInTheDocument()
    } else {
      const signInInfo = screen.getByTestId("sign-in-link")
      expect(signInInfo).toBeInTheDocument()
    }
  })
  it("user-info sign-out btn calls signOut", () => {
    if (mockProps.session) {
      const userInfo = screen.getByTestId("user-info")
      act(() => {
        fireEvent.click(userInfo)
      })
      expect(mockProps.signOut).toBeCalled()
    }
  })
  it("signin-info sign btn calls signIn", () => {
    if (mockProps.session === null) {
      const signInInfo = screen.getByTestId("sign-in-link")
      act(() => {
        fireEvent.click(signInInfo)
      })
      expect(mockProps.signIn).toBeCalled()
    }
  })
})