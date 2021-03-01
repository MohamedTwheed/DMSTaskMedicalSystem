import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../Services/Doctor/doctor.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  currentdoctor :any;
  doctorAppointments :any;
  from:any;
  to:any;
  myForm:FormGroup;
  constructor(private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getDoctor(this.route.snapshot.paramMap.get('id'));
    this.getDoctorAppointment(this.route.snapshot.paramMap.get('id'));
  }
  getDoctor(id): void {
    this.doctorService.read(id)
      .subscribe(
        doctor => {
          this.currentdoctor = doctor;
          console.log(doctor);
        },
        error => {
          console.log(error);
        });
  }
  getDoctorAppointment(id):void{
    this.doctorService.getDoctorAppointment(id,this.from,this.to)
      .subscribe(
        appointments => {
          this.doctorAppointments = appointments;
          console.log(appointments);
        },
        error => {
          console.log(error);
        });
  }
}
