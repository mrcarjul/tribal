import * as React from "react";
import { fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { ArrowBack as ImportedArrowBack } from "..";
import { withThemeProvider } from "../../../lib";

const ArrowBack = withThemeProvider(ImportedArrowBack);

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
    component = render(<ArrowBack />);
  });

  it("renders ArrowBack without error", async () => {
    const { queryByTestId } = component;
    expect(queryByTestId("arrow-back-button")).toBeTruthy();
  });

  it("should navigate back upon press", () => {
    const { queryByTestId } = component;
    fireEvent.press(queryByTestId("arrow-back-button"));
    expect(mockedGoBack).toHaveBeenCalledTimes(1);
  });
});
