import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecreteryService } from '../../Services/Secretery/secretery.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private sercreteryservice: SecreteryService,private router :Router) { }
  patient:any={};
  submitted = false;
  selectedGenderValue =[
    { value: true, name: "Male" },
    { value: false, name: "Female" }
  ];
  gender:boolean=true;
  ngOnInit(): void {
    this.patient.FirstName ='';
    this.patient.LastName ='';
  }
  addPatient(): void {
    this.patient.Gender = this.gender;
    this.sercreteryservice.createPatient(this.patient)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigateByUrl('patient');
        },
        error => {
          console.log(error);
        });
  }
  selectGenderChangeHandler (event: any) {
    //update the ui
    this.gender = event.target.value;
  }
}
