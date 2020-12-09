import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlotComponent } from './doctor/slot/slot.component';
import { AppointmentComponent } from './doctor/appointment/appointment.component';
import { BookingComponent } from './patient/booking/booking.component';

const routes: Routes = [
  { path: 'slots', component: SlotComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'appointments', component: AppointmentComponent},
  { path: '',   redirectTo: '/appointments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
