export class EventModel {
  id: number;
  name: string;
  date: string; // elvileg meg lehet oldalni, hogy dátum formátum legyen
  pictureURL: string;
  descripton: string;


  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

}
