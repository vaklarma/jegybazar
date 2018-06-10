import {Component, OnInit} from '@angular/core';
import {EventService} from '../../shared/event.service';
import {EventModel} from '../../shared/event-model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
// smart és dumb componentet is lehetne itt csinálni
  //public events: EventModel[];
  public eventsGrouppedBy3: EventModel[];

  constructor(private _eventService: EventService) {

  }

  ngOnInit() {
    // [0,1,2,3,4,5,6,7,8] -----> reduce --------->[ [0,1,2], [3,4,5], [6,7,8] ]
    // this.events = this._eventService.getAllEvents();
    // console.log(this.events);
    this.eventsGrouppedBy3 = this._eventService.getAllEvents()
      .reduce((acc, curr: EventModel, ind: number) => {
        if (ind % 3 === 0) {
          acc.push([]);
        }
        acc[acc.length - 1].push(curr);
        return acc;
      }, []);
    console.log(this.eventsGrouppedBy3);
  }

}
