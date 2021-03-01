import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { DoctorDetailsComponent } from '../doctor/details/doctor-details/doctor-details.component';
import { DoctorComponent } from '../doctor/list/doctor.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [CommonModule, LayoutRoutingModule, TranslateModule, NgbDropdownModule,ReactiveFormsModule,FormsModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,DoctorComponent,DoctorDetailsComponent]
})
export class LayoutModule {}
