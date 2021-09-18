import { ListTicket, Ticket } from './../ticket';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookTicket';
  tickets=ListTicket;
  seatSelected: Ticket;



//----------------------------------------------------------------
  

  onChangeStatus(ticket, status):void {
    this.seatSelected=ticket;
    console.log(this.seatSelected);
    this.tickets[ticket.soghe-1].trangthai=status;
  }

  listTicketBooked(){
    let list=this.tickets.filter(i=>i.trangthai==1);
    console.log('11111');
    console.log(this.tickets);
    return list;
  }

  checkChangeStatus(ticket, status) {
    if(ticket.trangthai==status) return true;
    return false;
  }
}
