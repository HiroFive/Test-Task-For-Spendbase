import { INodeRendererProps } from "react-accessible-treeview/dist/TreeView/types";

export interface ITreeNodeComponentProps extends INodeRendererProps {
  isAdmin: boolean;
  openSnackBar: () => void;
}
