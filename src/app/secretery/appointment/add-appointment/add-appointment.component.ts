import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../Services/Doctor/doctor.service';
import { SecreteryService } from '../../../Services/Secretery/secretery.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public todayNum: number = new Date().getDate();
  public minDate: Date = new Date(this.fullYear, this.month,this.todayNum);
  public maxDate: Date = new Date(this.fullYear, 12,31);
  public placeholder: String = 'Select date and time';
  appointDate:Date=null;
 

  onRenderCell(args) {
    let days:number[]=[];
    this.selectedDayValue.forEach(element => {
      days.push(element.value-1);
    });
    if (!days.includes(args.date.getDay())) {
      args.isDisabled = true;
    }
  }

  selectedFromValue:number[] = [1,1.30,2,2.3,3,3.3,4,4.3,5,5.3,6,6.3,7,7.3,8,8.3,9,9.3,10,10.3,11,11.3,12,12.3,13,13.3,14,14.3,15,15.3,16,16.3,17,17.3,18,18.3,19,19.3,20,20.3,21,21.3,22,22.3,23,23.3,24];
  selectedToValue:number[] = [1,1.30,2,2.3,3,3.3,4,4.3,5,5.3,6,6.3,7,7.3,8,8.3,9,9.3,10,10.3,11,11.3,12,12.3,13,13.3,14,14.3,15,15.3,16,16.3,17,17.3,18,18.3,19,19.3,20,20.3,21,21.3,22,22.3,23,23.3,24];
  currentpatient:any={};
  doctors: { DoctorId: number, FirstName: string,LastName:string }[]=null;
  selectedDayValue: { value: number, name:string }[]=[];
  doc:any=null;
  appointments:any;
  mkAppt:any;
  today:Date;
  fromHour:number;
  toHour:number;
  allDate:any;
  freeSlots:any[];
  days:any[]=[];
  alert:string;
  appointmentObj:any={};
  Price:number=0;
  constructor(private sercreteryservice: SecreteryService,private doctorservice:DoctorService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatient(this.route.snapshot.paramMap.get('id'));
    this.readAll();
  }
  getPatient(id): void {
    this.sercreteryservice.readPatient(id)
      .subscribe(
        patient => {
          this.currentpatient = patient;
          console.log(patient);
        },
        error => {
          console.log(error);
        });
  }
  readAll(): void {
    this.doctorservice.readAll()
      .subscribe(
        doctors => {
          this.doctors = doctors;
          this.doctorservice.read(this.doctors[0].DoctorId)
          .subscribe(
            doctor => {
              this.doc = doctor;
                this.fromHour = doctor.DoctorSchedules[0].FromHour;
                this.toHour = doctor.DoctorSchedules[0].ToHour;
                console.log(this.fromHour);
                this.minDate = new Date(this.fullYear, this.month,this.todayNum,this.fromHour);
                doctor.DoctorSchedules.forEach(element => {
                this.days.push(element.Day);
                var d = '';
                if(element.Day == 1){
                  d="Sunday";
                }else if(element.Day == 2){
                  d="Monday";
                }
                else if(element.Day == 3){
                  d="Tuesday";
                }
                else if(element.Day == 4){
                  d="Wedensday";
                }
                else if(element.Day == 5){
                  d="Thursday";
                }
                else if(element.Day == 6){
                  d="Friday";
                }
                else if(element.Day == 7){
                  d="Saturday";
                }
                this.selectedDayValue.push(
                  {
                    name:d,
                    value:element.Day}
                  )
              });
              console.log(this.selectedDayValue);
              console.log(this.fromHour);
              console.log(this.toHour);
              console.log(doctor);
            },
            error => {
              console.log(error);
            });
            this.doctorservice.getDoctorAppointment(this.doctors[0].DoctorId,this.today,null)
      .subscribe(
        appointments => {
          this.appointments = appointments;
          console.log(appointments);
        },
        error => {
          console.log(error);
        });
          console.log(doctors);
        },
        error => {
          console.log(error);
        });
  }
  selectdoctorChangeHandler (event: any) {
    this.selectedDayValue = [];
    this.doctorservice.read(event.target.value)
      .subscribe(
        doctor => {
          this.doc = doctor;
            this.fromHour = doctor.DoctorSchedules[0].FromHour;
            this.toHour = doctor.DoctorSchedules[0].ToHour;
            doctor.DoctorSchedules.forEach(element => {
            this.days.push(element.Day);
            var d = '';
            if(element.Day == 1){
              d="Sunday";
            }else if(element.Day == 2){
              d="Monday";
            }
            else if(element.Day == 3){
              d="Tuesday";
            }
            else if(element.Day == 4){
              d="Wedensday";
            }
            else if(element.Day == 5){
              d="Thursday";
            }
            else if(element.Day == 6){
              d="Friday";
            }
            else if(element.Day == 7){
              d="Saturday";
            }
            this.selectedDayValue.push(
              {
                name:d,
                value:element.Day}
              )
          });
          console.log(this.selectedDayValue);
          console.log(this.fromHour);
          console.log(this.toHour);
          console.log(doctor);
        },
        error => {
          console.log(error);
        });
    this.doctorservice.getDoctorAppointment(event.target.value,this.today,null)
      .subscribe(
        appointments => {
          this.appointments = appointments;
          console.log(appointments);
        },
        error => {
          console.log(error);
        });
    console.log(event.target.value);
  }
  makeAppointment(): void {
    if(this.appointDate){
    console.log(this.appointDate);
    var alreadyReserved:Date[]=[];
    this.appointments.forEach(element => {
      let dd = new Date(element.Date)
      alreadyReserved.push(dd);
    });
    console.log(alreadyReserved);
    var isFree = true;
    for (let index = 0; index < alreadyReserved.length; index++) {
      if(alreadyReserved[index].getTime() == this.appointDate.getTime())
      {
        isFree = false;
        break;
      }
    }
    if(!isFree){
      this.alert="There is already an appointment on this time please select another time"
    }
    else{
      this.alert=null;
      this.appointDate.setHours(this.appointDate.getHours()+2);
      this.appointmentObj.Date = this.appointDate.toISOString();
      this.appointmentObj.Price = this.Price;
      this.appointmentObj.DocId = this.doc.DoctorId;
      this.appointmentObj.PatientId = this.route.snapshot.paramMap.get('id');
      //action to post appointment
      this.sercreteryservice.createAppointment(this.appointmentObj)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigateByUrl('appointments');
        },
        error => {
          console.log(error);
        });
    }
  }
  else{
    this.alert="Please set appointment time";
  }
  }
}
