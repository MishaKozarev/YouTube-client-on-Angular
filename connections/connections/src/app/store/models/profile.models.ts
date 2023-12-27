export interface UserProfile {
  email: { S: string };
  name: { S: string };
  uid: { S: string };
  createdAt: { S: string };
}

export interface UserProfileError {
  type: string;
  message: string;
}

export interface UserProfileName {
  name: string;
}
export interface ProfileState {
  dataUserprofile: UserProfile;
  loading: boolean;
  error: UserProfileError | null;
}
