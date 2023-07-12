import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedDate! : string;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    //dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    // events: [
    //   { title: 'event 1', date: '2019-04-01' },
    //   { title: 'event 2', date: '2019-04-02' }
    // ]
    selectable: true,
    select: this.handleDateClick.bind(this),
    plugins: [interactionPlugin, dayGridPlugin]
  };

  handleDateClick(arg : any) {
    this.selectedDate = arg.startStr;
    // alert(arg.startStr)
    // console.log("event: ", arg.startStr);
  }
}