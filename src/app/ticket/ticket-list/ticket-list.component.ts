import {Component, OnInit} from '@angular/core';

import {TicketService} from '../../shared/ticket.service';
import {TicketModel} from '../../shared/ticket-model';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  public tickets: TicketModel[];


  constructor(private _ticketService: TicketService,
              private _userService: UserService) {

  }


  ngOnInit() {

    this.tickets = this._ticketService.getAllTickets();
    console.log(this.tickets);
  }

}
