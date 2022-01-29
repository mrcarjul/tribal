import * as React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import { Title as ImportedTitle } from "..";
import { withThemeProvider } from "../../../lib";

const Title = withThemeProvider(ImportedTitle);

describe("Title", () => {
  let component: RenderAPI;

  beforeEach(() => {
    component = render(<Title text="I am title Text" />);
  });

  it("renders Title without error", async () => {
    const { queryByTestId } = component;
    expect(queryByTestId("title-component")).toBeTruthy();
  });

  it("should render given text", () => {
    const { getByText } = component;
    expect(getByText("I am title Text")).toBeTruthy();
  });
});
