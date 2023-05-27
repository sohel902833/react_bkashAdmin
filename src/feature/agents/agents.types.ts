export interface IAgent {
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

export interface IAgentListResponse {
  agents: IAgent[];
}
