import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { AddDoctorComponent } from './doctor/create/add-doctor/add-doctor.component';
import { AddPatientComponent } from './secretery/add-patient/add-patient.component';
import { PatientListComponent } from './secretery/patient/patient-list/patient-list.component';
import { AddAppointmentComponent } from './secretery/appointment/add-appointment/add-appointment.component';
import { ListAppointmentComponent } from './secretery/list-appointments/list-appointment/list-appointment.component';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
@NgModule({
    imports: [ 
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        DateTimePickerModule
    ],
    declarations: [AppComponent, AddDoctorComponent, AddPatientComponent, PatientListComponent, AddAppointmentComponent, ListAppointmentComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
