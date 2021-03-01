import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecreteryService } from '../../../Services/Secretery/secretery.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients:any;
  constructor(private secreteryservice: SecreteryService,private _router: Router) { }

  ngOnInit(): void {
    this.readAll();
  }
  readAll(): void {
    this.secreteryservice.readAllPatients()
      .subscribe(
        patients => {
          this.patients = patients;
          console.log(patients);
        },
        error => {
          console.log(error);
        });
  }
  addNew() {
    this._router.navigateByUrl('/addPatient');
  };
}
