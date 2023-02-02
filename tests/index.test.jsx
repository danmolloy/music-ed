import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import HomeComponent from '../components/home/homeComponent';

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


describe("Layout Component when not signed in", () => {
  beforeEach(() => {
    render(<Home />)
  })
  it("Header element exists", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("Footer element exists", () => {
    const footer = screen.getByTestId("footer-div")
    expect(footer).toBeInTheDocument()
  })
  it("Main element exists", () => {
    const main = screen.getByTestId("main-div")
    expect(main).toBeInTheDocument()
  })
  it("Header title exists", () => {
    const headerTitle = screen.getByTestId("header-title")
    expect(headerTitle).toBeInTheDocument()
  })
  it("Footer has Contact link", () => {
    const contactLink = screen.getByTestId("contact-link")
    expect(contactLink).toBeInTheDocument()
  })
  it("Footer has Sign In link", () => {
    const signInLink = screen.getByTestId("sign-in-link")
    expect(signInLink).toBeInTheDocument()
  })
})

/* describe("Layout when signed in", () => {
  it("Sign out link exists", () => {})
  it("Sign out link calls signout function", () => {})
   it("Menu icon exists", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
  })
  //it("Menu icon opens and closes menu", () => {})
  //it("Menu has links to About, Contact and Syllabus", () => {})
}) */

describe("Home Component", () => {
  beforeEach(() => {
    render(<HomeComponent />)
  })
  it("Matches snapshot", () => {
    const homeComponent = render(<Home />)
    expect(homeComponent).toMatchSnapshot()
  })
  it("Has a welcome blurb", () => {
    const homeBlurb = screen.getByTestId("home-blurb")
    expect(homeBlurb).toBeInTheDocument()
  })
  it("Interactive piano keyboard in the component", () => {
    const pianoComponent = screen.getByTestId("piano-div")
    expect(pianoComponent).toBeInTheDocument()
  })
  it("About link in the component", () => {
    const aboutLink = screen.getByTestId("about-link")
    expect(aboutLink).toBeInTheDocument()
  })
  it("Exercises link in the component", () => {
    const exercisesLink = screen.getByTestId("exercises-link")
    expect(exercisesLink).toBeInTheDocument()
  })
})

/*
describe("About Component", () => {})
describe("Contact Component", () => {})
describe("Profile Component", () => {})
describe("Piano keyboard component", () => {
  it("Playing a note calls the corresponding tone", () => {})
  it("Toggling the alphabet button shows corresponding note names", () => {})
})
describe("Exercise component", () => {
  it("Exercise category in header element", () => {})
  it("Exercise name in header element", () => {})
  it("Intervals in header element", () => {})
  it("Piano keyboard on screen if needed for test", () => {})
  it("Ascending/Descending buttons in control panel if required", () => {})
})
describe("Test Start", () => {
  it("Ascending/Descending starts test", () => {})
  it("Test is timed", () => {})
  it("Highlights first note in green", () => {})
  it("Plays an interval", () => {})
  it("Repeat button exists in control panel", () => {})
  it("Repeat button repeats the interval", () => {})
  it("Stop button exists in control panel", () => {})
  it("Stop button stops the timer and removes it from the page", () => {})
  it("Question number is shown", () => {})
  it("Ascending/Descending is shown", () => {})
  it("Test directions are visible", () => {})
})
describe("Exercises Categories List", () => {
  it("Has a title element", () => {})
  it("Renders all categories of exercises", () => {})
  it("Category tiles have title and blurb", () => {})
})
describe("Exercise List", () => {
  it("Has a title element", () => {})
  it("Renders all categories of exercises", () => {})
  it("Category tiles have title and blurb", () => {})
})

 */