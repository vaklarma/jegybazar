export class UserModel {
  id: number;
  name: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  address: string;

  constructor(param?: UserModel) {
    if (param) {
      Object.assign(this, param);
    }


  }

  static get exampleUser(): UserModel {

    return {
      id: 0,
      name: 'Makkmarci Béla',
      email: 'makkmarcibela@valami.hu',
      address: 'hallihó utca 25',
      dateOfBirth: '2001.01.01',
      gender: 'male',


    };


  }

  static get emptyUser(): UserModel {
    console.log('belépett az üres userbe');
    return {
      id: 0,
      name: 'EmptyUser',
      email: '',
      address: '',
      dateOfBirth: '',
      gender: ''
    };
  }
}
