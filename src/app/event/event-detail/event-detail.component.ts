import {Component, OnInit} from '@angular/core';
import {EventModel} from '../../shared/event-model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../shared/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: EventModel;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _eventService: EventService) {
  }

  ngOnInit() {
    const evId = +this._route.snapshot.params['id'];


    if (evId) {
      this.event = this._eventService.getEventById(evId);
      console.log('event osztályváltozó: ', this.event);
      console.log('evId snapshot: ', evId);

    } else {
      this.event = new EventModel(EventModel.emptyEvent);
      console.log('csináltunk egy eventet ', this.event);
    }


  }

  onSubmit(form) {

    if (this.event.id) {
      console.log('update ág');
      this._eventService.update(this.event);
    } else {
      this._eventService.create(this.event);
    }

  this._router.navigate(['/event/list']);
  }
}
