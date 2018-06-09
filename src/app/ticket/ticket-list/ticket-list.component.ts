import {Component, OnInit} from '@angular/core';
import {TicketlistModel} from './ticketlist-model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

//   ticketlistData: TicketlistModel[];
// oneticket:TicketlistModel;
  constructor() {
    //
    // this.ticketlistData = [
    //   {
    //     eventid: 1,
    //     eventName: 'első esemény',
    //     eventTime: '2012.01.01',
    //     author: 'első előadó',
    //     quantity: 10,
    //   },
    //   {
    //     eventid: 2,
    //     eventName: 'második esemény',
    //     eventTime: '2024.24.24',
    //     author: 'második előadó',
    //     quantity: 20,
    //   },
    // ];
  }



  ngOnInit() {
  }

}
