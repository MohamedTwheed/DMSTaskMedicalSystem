import { DoctorScheduleModel } from "../DoctorScheduleModel/doctor-schedule-model.model";

export class DoctorModel {
    DoctorId:number;
    FirstName:string;
    LastName:string;
    Profession:string;
    DoctorSchedules?:DoctorScheduleModel[];
}
