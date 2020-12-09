import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/service/api-service.service'
import {
  NgbDateStruct,

} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  page = 1;
  limit = 10;
  totalCount = 0;
  appointments: any;
  today = new Date()
  date: any = { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() }

  constructor(
    private service: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getAppointments();
  }
  getAppointments() {
    let date = this.date.month + "/" + this.date.day + "/" + this.date.year;
    this.service.getAppointments(date, this.page, this.limit).subscribe((data: any) => {
      this.totalCount = data.data.totalCount;
      this.appointments = data.data.records
    });
  }
}
