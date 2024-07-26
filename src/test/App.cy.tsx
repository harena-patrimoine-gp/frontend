import App from "../App";
import { mount } from "cypress/react";
describe("<App />", () => {
  it("should render Admin with a Resource", () => {
    mount(<App />);
  });
});
