import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorModel } from '../../../Models/DoctorModel/doctor-model.model';
import { DoctorScheduleModel } from '../../../Models/DoctorScheduleModel/doctor-schedule-model.model';
import { DoctorService } from '../../../Services/Doctor/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  selectedFromValue:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  selectedToValue:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  Sunday:boolean = false;
  Monday:boolean = false;
  Tuesday:boolean = false;
  Wednesday:boolean = false;
  Thursday:boolean = false;
  Friday:boolean = false;
  Saturday:boolean = false;
 
  doctor:DoctorModel={
    FirstName:'',
    DoctorId : 0,
    LastName : '',
    Profession:'',
  };
  schudules: DoctorScheduleModel[]=[];
  submitted = false;
  profList:string[]=["Anesthesiology","Dermatology","Diagnostic radiology","Emergency medicine",
  "Family medicine","Neurology","Ophthalmology","Pathology","Surgery","Physical medicine"]
  constructor(private doctorservice: DoctorService,private router :Router) { }

  ngOnInit(): void {
    this.doctor.Profession="Anesthesiology";
  }
  addDoctor(): void {
    this.addSchedule();
    console.log(this.schudules);
    console.log(this.schudules);
    this.doctor.DoctorSchedules = this.schudules;
    this.doctorservice.create(this.doctor)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigateByUrl('doctor');
        },
        error => {
          console.log(error);
        });
  }
  addSchedule(){
    if(this.Sunday)
      {
        let sch : DoctorScheduleModel={
          Day : 1,
          FromHour : this.selectedFrom,
          ToHour : this.selectedTo,
          ScheduleId :null,
          DocId :null
        }
        this.schudules.push(sch);
      }
    if(this.Monday)
      {
        let sch : DoctorScheduleModel={
          Day : 2,
          FromHour : this.selectedFrom,
          ToHour : this.selectedTo,
          ScheduleId :null,
          DocId :null
        }
        this.schudules.push(sch);
      }
    if(this.Tuesday)
      {
        let sch : DoctorScheduleModel={
          Day : 3,
          FromHour : this.selectedFrom,
          ToHour : this.selectedTo,
          ScheduleId :null,
          DocId :null
        }
        this.schudules.push(sch);
      }
    if(this.Wednesday)
      {
        let sch : DoctorScheduleModel={
          Day : 4,
          FromHour : this.selectedFrom,
          ToHour : this.selectedTo,
          ScheduleId :null,
          DocId :null
        }
        this.schudules.push(sch);
      }
    if(this.Thursday)
      {
        let sch : DoctorScheduleModel={
          Day : 5,
          FromHour : this.selectedFrom,
          ToHour : this.selectedTo,
          ScheduleId :null,
          DocId :null
        }
        this.schudules.push(sch);
      }
    if(this.Friday)
      {
        let sch : DoctorScheduleModel={
          Day : 6,
          FromHour : this.selectedFrom,
          ToHour : this.selectedTo,
          ScheduleId :null,
          DocId :null
        }
        this.schudules.push(sch);
      }
    if(this.Saturday)
      {
        let sch : DoctorScheduleModel={
          Day : 7,
          FromHour : this.selectedFrom,
          ToHour : this.selectedTo,
          ScheduleId :null,
          DocId :null
        }
        this.schudules.push(sch);
      }             
  }
  selectedFrom: number = 1;
  selectedTo: number = 1;
  //event handler for the select element's change event
  selectFromChangeHandler (event: any) {
    //update the ui
    this.selectedFrom = event.target.value;
  }
  selectProfessionChangeHandler(event: any) {
    //update the ui
    this.doctor.Profession = event.target.value;
  }

  //event handler for the select element's change event
  selectToChangeHandler (event: any) {
    //update the ui
    this.selectedTo = event.target.value;
  }
}

