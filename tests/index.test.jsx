import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = null;/* {
    "user":{
      "name":"danmolloy","email":"danielmolloy_6@icloud.com","image":"https://avatars.githubusercontent.com/u/64697812?v=4"
    },
    "userData":{"id":"cl5if30or0054ixu0y1vap3yd","name":"danmolloy","email":"danielmolloy_6@icloud.com","emailVerified":null,"image":"https://avatars.githubusercontent.com/u/64697812?v=4","instrument":"Double Bass","profileInfo":null,"isFixer":null,"events":[{"id":20,"createdAt":"2022-09-15T12:14:27.518Z","updatedAt":"2022-10-03T11:23:29.946Z","ensembleName":"London Symphony Orchestra","concertProgram":"Sibelius","dressCode":"Blacks","fee":"0","additionalInfo":"Free pizza","fixerEmail":"danielmolloy_6@icloud.com","calls":[{"id":21,"createdAt":"2022-09-15T12:14:27.518Z","updatedAt":"2022-09-15T12:14:27.520Z","startTime":"2022-10-24T13:00:00.000Z","endTime":"2022-10-24T17:00:00.000Z","venue":"Fox n Firkin","eventId":20,"fixerEmail":"danielmolloy_6@icloud.com"}]}],"calls":[{"id":21,"createdAt":"2022-09-15T12:14:27.518Z","updatedAt":"2022-09-15T12:14:27.520Z","startTime":"2022-10-24T13:00:00.000Z","endTime":"2022-10-24T17:00:00.000Z","venue":"Fox n Firkin","eventId":20,"fixerEmail":"danielmolloy_6@icloud.com","event":{"id":20,"createdAt":"2022-09-15T12:14:27.518Z","updatedAt":"2022-10-03T11:23:29.946Z","ensembleName":"London Symphony Orchestra","concertProgram":"Sibelius","dressCode":"Blacks","fee":"0","additionalInfo":"Free pizza","fixerEmail":"danielmolloy_6@icloud.com"}}]},
    "expires":"2022-11-13T20:04:30.199Z"
  } */
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

describe("Layout when signed in", () => {
  it("Sign out link exists", () => {})
  it("Sign out link calls signout function", () => {})
  /* it("Menu icon exists", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
  }) */
  //it("Menu icon opens and closes menu", () => {})
  //it("Menu has links to About, Contact and Syllabus", () => {})
})

describe("Home Component", () => {
  //it("Renders without error", () => {})
  //it("Matches snapshot", () => {})
  //it("Has a welcome blurb", () => {})
  //it("Interactive piano keyboard in the component", () => {})
  //it("About link in the component", () => {})
  //it("Syllabus link in the component")
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