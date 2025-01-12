export interface Board {
  id: number;
  groupId: number;
  boardFamily: string;
  name: string;
  width: number;
  height: number;
  thickness: number;
  grainDirection: boolean;
  quantity: number;
}

export const Boards: Board[] = [
  {
    id: 1,
    groupId: 1,
    name: "OSB 18mm",
    boardFamily: "OSB",
    width: 2500,
    height: 1250,
    thickness: 1.8,
    grainDirection: false,
    quantity: 1,
  },
  {
    id: 2,
    groupId: 2,
    name: "OSB 16mm",
    boardFamily: "OSB",
    width: 2500,
    height: 1250,
    thickness: 1.6,
    grainDirection: false,
    quantity: 2,
  },
];
