interface IUserType {
  avatar: {
    fileName: string;
    url: string;
  };
  cover: {
    fileName: string;
    url: string;
  };
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  phone: string;
  verified: boolean;
  balance: number;
  createdAt: string;
  idNo: string;
}

export type IUserListResponse = IUserType[];
