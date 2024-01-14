import { filterTreeElementsByValue } from "./treeData.utils";
import { ITreeDataElementDTO } from "../infostructure/interfaces";
import {
  treeElementDataMock,
  treeElementFilteringResult,
} from "../tests/treeElementData.mock";

describe("filterTreeElementsByValue function", () => {
  it("should filter data based on the provided value", () => {
    const testData: ITreeDataElementDTO[] = treeElementDataMock;

    const result = filterTreeElementsByValue(testData, "Fruits");

    expect(result).toStrictEqual(treeElementFilteringResult);
  });

  it("should filter data based on the provided value and root element", () => {
    const testData: ITreeDataElementDTO[] = treeElementDataMock;

    const result = filterTreeElementsByValue(testData, "121212");

    expect(result).toStrictEqual([
      {
        children: [],
        id: 890,
        name: "",
        parent: null,
      },
    ]);
  });
});
