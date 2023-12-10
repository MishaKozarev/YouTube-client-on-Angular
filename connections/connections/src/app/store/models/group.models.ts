export interface GroupState {
  groups: GroupItem[];
  loading: boolean;
  error: ErrorFailed | null;
}

export interface Group {
  Count: number;
  Items: GroupItem[];
}

export interface GroupItem {
  id: {
    S: string;
  };
  name: {
    S: string;
  };
  createdAt: {
    S: string;
  };
  createdBy: {
    S: string;
  };
}

export interface ErrorFailed {
  type: string;
  message: string;
}
