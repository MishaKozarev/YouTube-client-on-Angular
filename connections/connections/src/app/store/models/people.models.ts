import { ErrorFailed } from 'src/app/core/models/core.models';

export interface PeopleState {
  people: PeopleItem[];
  loading: boolean;
  error: ErrorFailed | null;
}

export interface People {
  Count: number;
  Items: PeopleItem[];
}

export interface PeopleItem {
  name: { S: string };
  uid: { S: string };
}
