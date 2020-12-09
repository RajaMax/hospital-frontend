import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ApiServiceService} from 'src/service/api-service.service'



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  slots :any =[]
  constructor(
    private service:ApiServiceService
  ) { }
  profileForm = new FormGroup({
    patientName: new FormControl(''),
    contactNumber: new FormControl(''),
    slotId:new FormControl('')
  });
  ngOnInit(): void {
    let today = new Date();
    let date = (today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear();
    this.service.getSlots(date,"all").subscribe((data: any) => {
      this.slots = data.data;
    });
  }
  onSubmit(){
    let value=this.profileForm.value
    let today = new Date();
    let date = (today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear();
    value.date = date;
    console.log(value)
    return this.service.createAppointments(value)
  }
  
}
