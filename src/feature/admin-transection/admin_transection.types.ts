interface User {
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
}

interface Transaction {
  transection: {
    _id: string;
    amount: number;
    trxId: string;
    description: string;
    senderUserType: string;
    receiverUserType: string;
    transectionType: string;
    senderUser: User;
    receiverUser: User;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface IAdminAccountTransectionResponse {
  balance: number;
  transections: Transaction[];
}
