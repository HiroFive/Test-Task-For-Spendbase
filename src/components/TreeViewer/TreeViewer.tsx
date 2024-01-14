import React, { useState } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import "./TreeViewer.css";
import TreeViewSearchComponent from "../TreeViewerSearch/TreeViewerSearch";
import TreeNodeComponent from "./TreeNode/TreeNode";
import SnackbarComponent from "../Snackbar/Snackbar";
import { IconButton, ToggleButton } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { removeFlattenTreeItemById } from "../../utils/treeData.utils";
import jsonObj from "../../tests/mockedTreeData.mock.json";
import {
  ITreeDataDTO,
  ITreeViewComponentProps,
} from "../../infostructure/interfaces";

export function TreeViewComponent(props: ITreeViewComponentProps) {
  const { data } = props;
  const [treeData, setTreeData] = useState(data);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [selectedNode, setSelectedNode] = useState({} as ITreeDataDTO);

  const openSnackBar = (): void => {
    setIsOpenSnackbar(true);
  };

  const removeItemWithId = (): void => {
    const { element } = selectedNode;
    const targetId = element?.id;
    const isAdminOnly = element?.metadata?.isAdminOnly;

    if (!isAdminMode && isAdminOnly) {
      openSnackBar();
      return;
    }

    setTreeData((prevTreeData: ITreeDataDTO[]) =>
      removeFlattenTreeItemById(prevTreeData, targetId)
    );
  };

  return (
    <div className="tree-viewer">
      <section className="tree-viewer__menu-section">
        <ToggleButton
          value="check"
          selected={isAdminMode}
          onChange={() => setIsAdminMode(!isAdminMode)}
        >
          Admin mode
        </ToggleButton>

        <TreeViewSearchComponent
          data={data}
          setTreeData={setTreeData}
        ></TreeViewSearchComponent>

        <IconButton aria-label="delete" size="small" onClick={removeItemWithId}>
          <FaTrash color="ffffff" className="icon" />
        </IconButton>
      </section>

      {treeData.length === 1 ? (
        <div className="no-result-text">No nodes match filter</div>
      ) : (
        <TreeView
          data={treeData}
          multiSelect
          propagateSelect
          propagateSelectUpwards
          togglableSelect
          onNodeSelect={(props) => setSelectedNode(props as ITreeDataDTO)}
          nodeRenderer={(nodeRendererProps) => (
            <TreeNodeComponent
              isAdmin={isAdminMode}
              openSnackBar={openSnackBar}
              {...nodeRendererProps}
            />
          )}
        />
      )}

      <SnackbarComponent
        isOpen={isOpenSnackbar}
        setIsOpen={setIsOpenSnackbar}
      />
    </div>
  );
}
export default function TreeViewComponentWithDataMock() {
  return <TreeViewComponent data={flattenTree(jsonObj)} />;
}
