export class UserModel {
  id: number;
  name: string;
  email: string;
  dateOfBirth: string;
  gender: string;

  constructor(param?: UserModel) {
    if (param) {
      Object.assign(this, param);
    }


  }
  static get exampleUser ():UserModel{

   return {
     id: 0,
    name: 'Makkmarci Béla',
    email: 'makkmarcibela@valami.hu',
    dateOfBirth: '2001.01.01',
    gender: 'male',


  };

  }
}
