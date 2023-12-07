import { UserProfile, UserProfileError } from '../core/models/profile-data';

export interface ProfileState {
  dataUserprofile: UserProfile | null;
  loading: boolean;
  error: UserProfileError | null;
}

export const initialStateProfile: ProfileState = {
  dataUserprofile: {
    email: { S: '' },
    name: { S: '' },
    uid: { S: '' },
    createdAt: { S: '' }
  },
  loading: false,
  error: null
};
