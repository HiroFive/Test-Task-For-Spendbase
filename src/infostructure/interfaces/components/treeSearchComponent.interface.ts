import { ITreeDataElementDTO } from "../treeDataDTO.interface";
import { Dispatch, SetStateAction } from "react";

export interface ITreeSearchComponentProps {
  data: ITreeDataElementDTO[];
  setTreeData: Dispatch<SetStateAction<any>>;
}
