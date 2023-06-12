export interface IUserType {
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

export interface ITransection {
  _id: string;
  amount: number;
  trxId: string;
  description: string;
  senderUserType: string;
  receiverUserType: string;
  transectionType: string;
  senderUser: IUserType;
  receiverUser: IUserType;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
interface IFullUser {
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
  idNo: string;
  birthdate: string;
  phone: string;
  password: string;
  verified: boolean;
  tokens: {
    device: string;
    token: string;
    _id: string;
  }[];
  registeredBy: string;
  balance: number;
  userType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface ITransectionListResponse {
  transections: ITransection[];
  user: IFullUser;
}

export type IUserListResponse = IUserType[];

export interface ITotalTransectionsResponse {
  totalCashIn: number;
  totalCashOut: number;
}
