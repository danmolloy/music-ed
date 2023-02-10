import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Layout from "../../components/layout/layout";
import HomeComponent from "../../components/home/homeComponent";

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

describe("Layout component", () => {
  beforeEach(() => {
    render(
    <Layout>
      <HomeComponent />
    </Layout>)
  })
  it("Renders", () => {
    const layoutDiv = screen.getByTestId("layout-div")
    expect(layoutDiv).toBeInTheDocument()
  })
  it("Matches snapshot", () => {
    const layoutDiv = screen.getByTestId("layout-div")
    expect(layoutDiv).toMatchSnapshot()
  })
  it("Menu icon if session", () => {
    const menu = screen.getByTestId("menu-icon")
    expect(menu).toBeInTheDocument()
  })
  it("Header component in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("Main div in the document", () => {
    const mainDiv = screen.getByTestId("main-div")
    expect(mainDiv).toBeInTheDocument()
  })
  it("Footer component in the document", () => {
    const footerDiv = screen.getByTestId("footer-div")
    expect(footerDiv).toBeInTheDocument()
  })
  //it("Menu component doesn't render if no session", () => {})
})