import * as React from "react";
import { fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { ArrowBackButton as ImportedArrowBackButton } from "..";
import { withThemeProvider } from "../../../lib";

const ArrowBackButton = withThemeProvider(ImportedArrowBackButton);

const mockedGoBack = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedGoBack,
    }),
  };
});

describe("Title", () => {
  let component: RenderAPI;

  beforeEach(() => {
    component = render(<ArrowBackButton />);
  });

  it("renders ArrowBackButton without error", async () => {
    const { queryByTestId } = component;
    expect(queryByTestId("arrow-back-button")).toBeTruthy();
  });

  it("should navigate back upon press", () => {
    const { queryByTestId } = component;
    fireEvent.press(queryByTestId("arrow-back-button"));
    expect(mockedGoBack).toHaveBeenCalledTimes(1);
  });
});
