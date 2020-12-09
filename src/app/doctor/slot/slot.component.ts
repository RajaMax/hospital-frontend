import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from 'src/service/api-service.service';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  constructor(
    private service : ApiServiceService
  ) { }
  openMorning = false;
  openEvening = false;
  morningSlots:any
  eveningSlots:any
  morningFromTime = {hour: 13, minute: 30};
  morningToTime = {hour: 13, minute: 30};
  eveningFromTime = {hour: 13, minute: 30};
  eveningToTime = {hour: 13, minute: 30};
  today =new Date()
  date:any={year: this.today.getFullYear(), month: this.today.getMonth()+1, day: this.today.getDate()}
  ngOnInit(): void {
    this.getSlots();
  }
  getSlots(){
    let date = this.date.month+"/"+this.date.day+"/"+this.date.year;
    this.service.getSlots(date,'morning').subscribe((data: any) => {
      this.morningSlots = data.data;
    });
    this.service.getSlots(date,'evening').subscribe((data: any) => {
      this.eveningSlots = data.data;
    });
  }
  saveSlot(type:any){
    let date = this.date.month+"/"+this.today.getDate()+"/"+this.date.year;

    if(type==='morning'){
        let data={
          date:date,
          type:'morning',
          fromTime:this.morningFromTime.hour+":"+this.morningFromTime.minute,
          toTime:this.morningToTime.hour+":"+this.morningToTime.minute,
        }
        this.openMorning=false
      return this.service.createSlot(data)

    }else if(type==='evening'){
      let data={
        date:this.date,
        type:'evenig',
        fromTime:this.eveningFromTime.hour+":"+this.eveningFromTime.minute,
        toTime:this.eveningToTime.hour+":"+this.eveningToTime.minute,
      }
      this.openEvening=false

      return this.service.createSlot(data)
    }
  }
 

}
