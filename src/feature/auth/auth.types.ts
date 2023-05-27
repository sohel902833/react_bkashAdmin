export interface IAuth {
  user: IUser | undefined;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  avatar: {
    fileName: string;
    url: string;
  };
  cover: {
    fileName: string;
    url: string;
  };
  birthdate: string;
  verified: boolean;
  phone: string;
  _id: string;
  balance: number;
}
