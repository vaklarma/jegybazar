export class EventModel {
  id?: number;
  name: string;
  date: string; 
  pictureURL: string;
  description: string;


  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  static get emptyEvent() {
    console.log('belépett az üres eventbe');
    return {
      name: '',
      date: '',
      pictureURL: '',
      description: '',
    };
  }

}
