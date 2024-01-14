import React from "react";
import {
  FaCheckSquare,
  FaList,
  FaMinusSquare,
  FaRegFolder,
  FaRegFolderOpen,
  FaSquare,
} from "react-icons/fa";
import "./TreeNode.css";
import { DiCss3, DiJavascript } from "react-icons/di";
import { ITreeNodeComponentProps } from "../../../infostructure/interfaces";

export default function TreeNodeComponent(props: ITreeNodeComponentProps) {
  const {
    element,
    isAdmin,
    isBranch,
    isExpanded,
    isSelected,
    isHalfSelected,
    getNodeProps,
    level,
    handleSelect,
    handleExpand,
    openSnackBar,
  } = props;

  const FolderIcon = ({ isOpen }: any): JSX.Element =>
    isOpen ? (
      <FaRegFolderOpen color="e8a87c" className="icon" />
    ) : (
      <FaRegFolder color="e8a87c" className="icon" />
    );

  const FileIcon = ({ filename }: any): JSX.Element | null => {
    const extension = filename.slice(filename.lastIndexOf(".") + 1);

    switch (extension) {
      case "js":
        return <DiJavascript color="ffff00" className="icon" />;
      case "css":
        return <DiCss3 color="40e0d0" className="icon" />;
      case "json":
        return <FaList color="ffff00" className="icon" />;
      default:
        return null;
    }
  };

  const CheckBoxIcon = ({ variant, ...rest }: any): JSX.Element | null => {
    switch (variant) {
      case "all":
        return <FaCheckSquare {...rest} />;
      case "none":
        return <FaSquare {...rest} />;
      case "some":
        return <FaMinusSquare {...rest} />;
      default:
        return null;
    }
  };

  const expandHandler = (event: any): void => {
    const { metadata } = element;

    if (!isAdmin && metadata?.isAdminOnly) {
      openSnackBar();
      return;
    }

    handleExpand(event);
  };

  return (
    <div
      {...getNodeProps({ onClick: expandHandler })}
      style={{ marginLeft: 40 * (level - 1) }}
    >
      <CheckBoxIcon
        className="checkbox-icon"
        color="white"
        onClick={(event: any) => {
          handleSelect(event);
          event.stopPropagation();
        }}
        variant={isHalfSelected ? "some" : isSelected ? "all" : "none"}
      />
      {isBranch ? (
        <FolderIcon isOpen={isExpanded} />
      ) : (
        <FileIcon filename={element.name} />
      )}

      <span className="name">{element.name}</span>
    </div>
  );
}
