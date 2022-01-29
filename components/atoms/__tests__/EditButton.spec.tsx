import * as React from "react";
import { fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { EditButton as ImportedEditButton } from "..";
import { withThemeProvider } from "../../../lib";

const EditButton = withThemeProvider(ImportedEditButton);

describe("EditButton", () => {
  let component: RenderAPI;
  const mockedFunction = jest.fn();

  beforeEach(() => {
    component = render(<EditButton onPress={mockedFunction} />);
  });

  it("renders EditButton without error", async () => {
    const { queryByTestId } = component;
    expect(queryByTestId("edit-button")).toBeTruthy();
  });

  it("should execute given function upon press", () => {
    const { queryByTestId } = component;
    fireEvent.press(queryByTestId("edit-button"));
    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});
