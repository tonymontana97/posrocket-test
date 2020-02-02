import { EGender, IFriend } from '@app/types';

export interface IUser {
  _id: string;
  index: number;
  guid: string;
  balance: string;
  isActive: boolean;
  picture: string;
  age: number;
  eyeColor: string;
  gender: EGender;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: Date;
  latitude: number;
  longitude: number;
  tags: string[];
  friends: IFriend[];
  greeting: string;
  favoriteFruit: string;
}
