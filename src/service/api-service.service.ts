import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  SERVER_URL = environment.apiUrl;

  getAppointments(date: any, page: any, skip: any) {
    let queryUrl = "/api/appointments?date=" + date + "&page=" + page + "&skip=" + page
    return this.http.get(this.SERVER_URL + queryUrl)
  }
  getSlots(date: any, type: any) {
    let queryUrl = "/api/slots?date=" + date + "&type=" + type
    return this.http.get(this.SERVER_URL + queryUrl)
  }
  createAppointments(data: any) {
    console.log(data)
    this.http.post(this.SERVER_URL + '/api/appointment', data)
      .subscribe(result => {
        console.log(result);
        //this.router.navigate(['/appointments']);
      });

  }
  createSlot(data: any) {
    this.http.post(this.SERVER_URL + '/api/slot', data)
      .subscribe(result => {
        console.log(result);
        this.router.navigate(['/slots']);
      });

  }
}
