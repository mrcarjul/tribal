import * as React from "react";
import { fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { AddButton as ImportedAddButton } from "..";
import { withThemeProvider } from "../../../lib";

const AddButton = withThemeProvider(ImportedAddButton);

describe("AddButton", () => {
  let component: RenderAPI;
  const mockedFunction = jest.fn();

  beforeEach(() => {
    component = render(<AddButton onPress={mockedFunction} />);
  });

  it("renders AddButton without error", async () => {
    const { queryByTestId } = component;
    expect(queryByTestId("add-button")).toBeTruthy();
  });

  it("should execute given function upon press", () => {
    const { queryByTestId } = component;
    fireEvent.press(queryByTestId("add-button"));
    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});
