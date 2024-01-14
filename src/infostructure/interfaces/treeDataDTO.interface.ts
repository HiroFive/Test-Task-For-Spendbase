export interface ITreeDataDTO {
  element: ITreeDataElementDTO;
  isSelected: boolean;
  isBranch: boolean;
  treeState: ITreeState;
}

export interface ITreeDataElementDTO {
  id: number;
  name: string;
  children: number[];
  parent: number | null;
  metadata?: { [key: string]: any };
}

export interface ITreeState {
  selectedIds: any;
  controlledIds: any;
  tabbableId: number;
  isFocused: boolean;
  expandedIds: any;
  halfSelectedIds: any;
  lastUserSelect: number;
  lastInteractedWith: number;
  lastManuallyToggled: number;
  disabledIds: any;
  lastAction: string;
}
