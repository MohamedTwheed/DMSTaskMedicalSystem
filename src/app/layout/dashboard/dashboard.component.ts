import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../Services/Doctor/doctor.service';
import { routerTransition } from '../../router.animations';
import { Color } from "ng2-charts";
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    linarchart:any=[];
    constructor(private doctorservice: DoctorService) {}
    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.doughnutChartType = 'doughnut';
        this.getPatientCountPerDoc();
    }
    getPatientCountPerDoc(): void {
        this.doctorservice.getPatientCountPerDoctor()
          .subscribe(
            result => {
              result.forEach(element => {
                  console.log(element);
                  this.barChartLabels.push(element.Name);
                  this.linarchart.push(element.Count);
                  this.doughnutChartLabels.push(element.Name);
                  this.doughnutChartData.push(element.Count);
              });
              this.barChartData = [];
              this.barChartData.push({data:this.linarchart,label:'Patients'});
              console.log(result);
            },
            error => {
              console.log(error);
            });
      }
  // bar chart
    public barChartOptions: any = {
        responsive: true,
        scales: {
         yAxes: [
          {
           display: true,
           scaleLabel: {
            display: true,
            labelString: "Patients",
           },
          },
         ],
         xAxes: [
          {
           scaleLabel: {
            display: true,
            labelString: "Doctors",
           },
           barPercentage: 0.9,
           categoryPercentage: 0.5,
          },
         ],
        },
       };
      public colors = [
        {
          backgroundColor: 'rgba(77,83,96,0.2)'
        },
        { 
          backgroundColor: 'rgba(30, 169, 224, 0.8)'
        }
      ]
    public doughnutChartColors: any[] = [
        {backgroundColor:["#84c7f2","#ef9db4","#f8e298","red","black","yellow","white","green","gray","bisque","brown","cyan","violet"]},
        {backgroundColor:["#84c7f2","#ef9db4","#f8e298","red","black","yellow","white","green","gray","bisque","brown","cyan","violet"]},
        {backgroundColor:["#84c7f2","#ef9db4","#f8e298","red","black","yellow","white","green","gray","bisque","brown","cyan","violet"]}
      ];
      public barChartColors: Color[] = [
        {backgroundColor:["#84c7f2","#ef9db4","#f8e298","red","black","yellow","white","green","gray","bisque","brown","cyan","violet"]},
        {backgroundColor:["#84c7f2","#ef9db4","#f8e298","red","black","yellow","white","green","gray","bisque","brown","cyan","violet"]},
        {backgroundColor:["#84c7f2","#ef9db4","#f8e298","red","black","yellow","white","green","gray","bisque","brown","cyan","violet"]}
      ];
    
    //Doctor Names
    public barChartLabels: string[] = [];
    public barChartType: string;
    public barChartLegend: boolean;

    //Patient count for each doctor
    public barChartData: any[] = [];

    // Doughnut
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: number[] = [];
    public doughnutChartType: string;

 

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    

}
