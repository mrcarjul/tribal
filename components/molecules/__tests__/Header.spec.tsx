import * as React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import { Header as ImportedHeader } from "..";
import { withThemeProvider } from "../../../lib";
import { View } from "native-base";

const Header = withThemeProvider(ImportedHeader);
const title = "I am Header title";
const headerTestID = "header-component";
const arrowBackTestID = "arrow-back-button";
const rightComponentTestID = "right-component";

const RightComponent = () => <View testID={rightComponentTestID} />;

describe("Header", () => {
  let component: RenderAPI;

  beforeEach(() => {
    component = render(<Header title={title} />);
  });

  it("renders Header without error", async () => {
    const { queryByTestId } = component;
    expect(queryByTestId(headerTestID)).toBeTruthy();
  });

  it("should render given title text", () => {
    const { getByText } = component;
    expect(getByText(title)).toBeTruthy();
  });

  it("should not render ArrowBack component if not allowBack prop given", () => {
    const { queryByTestId } = component;
    expect(queryByTestId(arrowBackTestID)).toBeNull();
  });

  it("should have 2 children if just given title prop (the Title and the Box)", () => {
    const { queryByTestId } = component;
    expect(queryByTestId(headerTestID).props.children).toHaveLength(2);
  });

  it("should have 3 children given allowBack (the Title and the Box)", () => {
    const { queryByTestId, update } = component;
    update(<Header allowBack title={title} />);
    expect(queryByTestId(headerTestID).props.children).toHaveLength(3);
  });

  it("should render ArrowBack component if allowBack prop given", () => {
    const { queryByTestId, update } = component;
    update(<Header allowBack title={title} />);
    expect(queryByTestId(arrowBackTestID)).toBeTruthy();
  });

  it("should render rightComponent if given as prop", () => {
    const { queryByTestId, update } = component;
    update(<Header title={title} rightComponent={<RightComponent />} />);
    expect(queryByTestId(rightComponentTestID)).toBeTruthy();
  });
});
