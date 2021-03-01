import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecreteryService } from '../../../Services/Secretery/secretery.service';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {
  appointments:any;
  constructor(private secreteryservice: SecreteryService,private _router: Router) { }

  ngOnInit(): void {
    this.readAll();
  }
  readAll(): void {
    this.secreteryservice.readAllAppointments()
      .subscribe(
        appointments => {
          this.appointments = appointments;
          console.log(appointments);
        },
        error => {
          console.log(error);
        });
  }
  addNew() {
    this._router.navigateByUrl('/patient');
  };
}
