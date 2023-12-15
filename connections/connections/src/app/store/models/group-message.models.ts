export interface GroupMessageItem {
  authorID: { S: string };
  message: { S: string };
  createdAt: { S: string };
}

export interface GroupMessage {
  Count: number;
  Items: GroupMessageItem[];
}

export interface GroupId {
  groupId: string;
}
