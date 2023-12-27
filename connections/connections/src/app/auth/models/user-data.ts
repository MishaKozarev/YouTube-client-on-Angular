export interface UserDataSignup {
  email: string;
  name: string;
  password: string;
}

export interface UserDataSignin {
  email: string;
  password: string;
}

export interface UserResponseSignin {
  token: string;
  uid: string;
}
