export interface Board {
  id: number;
  groupId: number;
  name: string;
  width: number;
  height: number;
  grainDirection: boolean;
}

export const Boards: Board[] = [
  {
    id: 1,
    groupId: 1,
    name: "OSB",
    width: 2500,
    height: 1250,
    grainDirection: false,
  },
  {
    id: 2,
    groupId: 1,
    name: "OSB",
    width: 2500,
    height: 1250,
    grainDirection: false,
  },
  {
    id: 3,
    groupId: 2,
    name: "OSB",
    width: 2500,
    height: 1250,
    grainDirection: false,
  },
];
