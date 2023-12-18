export interface PeopleMessageItem {
  authorID: { S: string };
  message: { S: string };
  createdAt: { S: string };
}

export interface PeopleMessage {
  Count: number;
  Items: PeopleMessageItem[];
}

export interface PeopleDialogCreateById {
  conversationID: string;
}
