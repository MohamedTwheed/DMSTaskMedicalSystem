import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from '../doctor/create/add-doctor/add-doctor.component';
import { DoctorDetailsComponent } from '../doctor/details/doctor-details/doctor-details.component';
import { DoctorComponent } from '../doctor/list/doctor.component';
import { AddPatientComponent } from '../secretery/add-patient/add-patient.component';
import { AddAppointmentComponent } from '../secretery/appointment/add-appointment/add-appointment.component';
import { ListAppointmentComponent } from '../secretery/list-appointments/list-appointment/list-appointment.component';
import { PatientListComponent } from '../secretery/patient/patient-list/patient-list.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            { path: 'doctor',  component: DoctorComponent  },
            { path: 'doctor/:id',  component: DoctorDetailsComponent  },
            { path: 'adddoctor',  component: AddDoctorComponent  },
            { path: 'patient',  component: PatientListComponent  },
            { path: 'addPatient',  component: AddPatientComponent  },
            { path: 'patient/:id',  component: AddAppointmentComponent  },
            { path: 'appointments',  component: ListAppointmentComponent  },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
            {
                path: 'bs-element',
                loadChildren: () => import('./bs-element/bs-element.module').then((m) => m.BsElementModule)
            },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            {
                path: 'blank-page',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
