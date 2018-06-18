import {Injectable} from '@angular/core';
import {EventModel} from './event-model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _events: EventModel[];

// ez a kettő ekvivalens
// private  _events: Array<EventModel>;
  constructor() {

    this._events = [
      {
        'id': 1,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'pictureURL': 'assets/sziget.png',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        'id': 2,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'pictureURL': 'assets/diotoro.jpg',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        'id': 3,
        'name': 'Macskák Musical',
        'date': '2018-02-11',
        'pictureURL': 'assets/macskak.jpg',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      },
      {
        'id': 4,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'pictureURL': 'assets/sziget.png',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      },
      {
        'id': 5,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'pictureURL': 'assets/diotoro.jpg',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        'id': 6,
        'name': 'Macskák Musical',
        'date': '2018-02-11',
        'pictureURL': 'assets/macskak.jpg',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      },
      {
        'id': 7,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'pictureURL': 'assets/sziget.png',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      },
      {
        'id': 8,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'pictureURL': 'assets/diotoro.jpg',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        'id': 9,
        'name': 'Macskák Musical',
        'date': '2018-02-11',
        'pictureURL': 'assets/macskak.jpg',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      }
    ];
  }

  getAllEvents() {
    return this._events;

  }

  getEventById(id: number) {
    const ev = this._events.filter(x => x.id === id);
    console.log(' A kért getEventbyId: ', id);
    return ev.length > 0 ? ev[0] : new EventModel(EventModel.emptyEvent);
  }

  update(param: EventModel) {
    console.log('update az eventService ben');
    this._events = this._events.map(ev => {
      if (ev.id === param.id) {
        return {...param};
      } else {
        return ev;
      }
      // return ev.id === param.id ? {...param} : ev;
    });
  }

  create(param: EventModel) {
    this._events = [
      ...this._events,
      {
        id: this._getmaxId() + 1,
        ...param
      }


    ];
    console.log(this._events);

  }

  private _getmaxId() {
    return this._events.reduce((x, y) => x.id > y.id ? x : y).id;
  }
}
