export type UserType = 'admin' | 'user' | string;

export interface User {
  id: number;
  guid: string;
  type: UserType;
  firstName: string;
  fullName: string;
  lastName: string;
  email: string;
  password: string;
  organization: string;
  active: boolean;
  created: '5/7/2020';
  lastRecordedIpv4: '162.141.21.216';
  lastAuthentication: '6/29/2020';
  failedAttempts: 1;
}
