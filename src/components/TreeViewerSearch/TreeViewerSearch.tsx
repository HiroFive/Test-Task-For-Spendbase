import { Button, TextField } from "@mui/material";
import React from "react";
import { ITreeSearchComponentProps } from "../../infostructure/interfaces";
import "./TreeViewerSearch.css";
import { filterTreeElementsByValue } from "../../utils/treeData.utils";

export default function TreeViewSearchComponent(
  props: ITreeSearchComponentProps
) {
  const { data, setTreeData } = props;

  const search = (value: string): void => {
    setTreeData(filterTreeElementsByValue(data, value));
  };

  const filterNodesByText = () => {
    const valueToFilter = (
      document.querySelector("#txtToFilter") as any
    ).value?.trim();

    if (!!valueToFilter) {
      search(valueToFilter);
    } else {
      setTreeData(data);
    }
  };

  const onKeyDown = (event: any) => {
    if (event.key === "Enter") {
      filterNodesByText();
    }
  };

  return (
    <div className="search-section__container">
      <TextField
        id="txtToFilter"
        label="Enter"
        variant="outlined"
        size="small"
        onKeyDown={onKeyDown}
      />
      <Button variant="text" onClick={filterNodesByText}>
        Search
      </Button>
    </div>
  );
}
