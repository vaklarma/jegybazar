export class TicketlistModel {
  eventid: number;
  eventName: string;
  eventTime: string;
  author: string;
  quantity: number;

  constructor(id, evname, evtime, auth, quant) {
    this.eventid = id;
    this.eventName = evname;
    this.eventTime = evtime;
    this.author = auth;
    this.quantity = quant;

  }
}
