export interface ISettingsResponse {
  settings: {
    registrationBonous: number;
    cashoutCharge: number;
    sendMoneyCharge: number;
  };
  success: boolean;
}
