import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseURLPatient = 'https://dmstaskapi.azurewebsites.net/api/Patients';
const baseURLSecrtery = 'https://dmstaskapi.azurewebsites.net/api/Secretaries';
@Injectable({
  providedIn: 'root'
})
export class SecreteryService {

  constructor(private httpClient: HttpClient) { }
  readAllPatients(): Observable<any> {
    return this.httpClient.get(baseURLPatient);
  }
  readPatient(id): Observable<any> {
    return this.httpClient.get(`${baseURLPatient}?id=${id}`);
  }
  createPatient(data): Observable<any> {
    return this.httpClient.post(baseURLPatient, data);
  }

  readAllAppointments(): Observable<any> {
    return this.httpClient.get(baseURLSecrtery);
  }
  createAppointment(data): Observable<any> {
    return this.httpClient.post(baseURLSecrtery, data);
  }
}
