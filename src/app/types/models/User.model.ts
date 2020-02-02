import { EGender, IFriend, IUser } from '@app/types';

export class User implements IUser {
  public readonly _id: string;
  public readonly guid: string;
  public readonly index: number;
  public readonly isActive: boolean;
  public about: string;
  public balance: string;
  public address: string;
  public age: number;
  public company: string;
  public email: string;
  public eyeColor: string;
  public favoriteFruit: string;
  public friends: IFriend[];
  public gender: EGender;
  public greeting: string;
  public latitude: number;
  public longitude: number;
  public phone: string;
  public picture: string;
  public readonly registered: Date;
  public tags: string[];

  constructor(user: any) {
    Object.assign(this, user);
  }

  public get balanceNumber(): number {
    const balanceNoSymbol: string = this.balance.substring(1, this.balance.length).replace(',', '');
    return Number.parseFloat(balanceNoSymbol);
  }
}
