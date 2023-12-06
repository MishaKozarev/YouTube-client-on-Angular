import { ProfileData } from '../core/models/profile-data';

export interface ProfileState {
  data: ProfileData | null;
}

export const initialProfileState: ProfileState = {
  data: {
    email: { S: 'string' },
    name: { S: 'string' },
    uid: { S: 'string' },
    createdAt: { S: 'string' }
  }
};
