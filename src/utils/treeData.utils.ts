import { ITreeDataDTO, ITreeDataElementDTO } from "../infostructure/interfaces";

export const removeFlattenTreeItemById = (
  treeData: any,
  id: number
): ITreeDataDTO[] => {
  const newTreeData = [...treeData];

  const indexToRemove = newTreeData.findIndex((item) => item.id === id);

  if (indexToRemove !== -1) {
    const removedItem = newTreeData.splice(indexToRemove, 1)[0];

    if (removedItem.parent !== null) {
      const parent = newTreeData.find((item) => item.id === removedItem.parent);
      if (parent) {
        parent.children = parent.children.filter(
          (childId: any) => childId !== id
        );
      }
    }
  }
  return [...treeData];
};

export const filterTreeElementsByValue = (
  data: ITreeDataElementDTO[],
  value: string
): ITreeDataElementDTO[] => {
  const filtered: ITreeDataElementDTO[] = [];
  const includeChildren = (id: number) => {
    data.forEach((item: any) => {
      if (item.parent === id) {
        if (!filtered.find((x) => x.id === item.id)) {
          filtered.push(item);
        }
        if (item.children.length) {
          includeChildren(item.id);
        }
      }
    });
  };

  data.forEach((item) => {
    const itemName = item.name.toUpperCase();

    if (itemName.includes(value.toUpperCase())) {
      if (!filtered.find((x) => x.id === item.id)) {
        filtered.push(item);
      }

      if (item.children.length) {
        includeChildren(item.id);
      }
    }
  });

  filtered.unshift(
    Object.assign({
      ...data[0],
      children: data[0].children.filter((id: number) =>
        filtered?.find((fitem) => fitem.id === id)
      ),
    })
  );

  return filtered;
};
