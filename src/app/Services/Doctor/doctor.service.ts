import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseURL = 'https://dmstaskapi.azurewebsites.net/api/doctors';
// const baseURL = 'https://localhost:44311/api/doctors';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }
  read(id): Observable<any> {
    return this.httpClient.get(`${baseURL}?id=${id}`);
  }
  getDoctorAppointment(id,from,to): Observable<any> {
    return this.httpClient.get(`https://dmstaskapi.azurewebsites.net/DoctorsAppointment/?id=${id}&from=${from}&to=${to}`);
  }
  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
  getPatientCountPerDoctor():Observable<any>{
    return this.httpClient.get(`https://dmstaskapi.azurewebsites.net/PatientCount`)
  }
}
