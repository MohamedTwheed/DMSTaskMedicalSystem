import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../../Services/Doctor/doctor.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors:any;
  constructor(private doctorservice: DoctorService,private _router: Router) { }

  ngOnInit(): void {
    this.readAll();
  }
  readAll(): void {
    this.doctorservice.readAll()
      .subscribe(
        doctors => {
          this.doctors = doctors;
          console.log(doctors);
        },
        error => {
          console.log(error);
        });
  }
  addNew() {
    this._router.navigateByUrl('/adddoctor');
  };
}
