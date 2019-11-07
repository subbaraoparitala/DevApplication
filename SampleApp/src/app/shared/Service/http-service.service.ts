import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../Model/data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  getEmployee(): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>('http://dummy.restapiexample.com/api/v1/employees');
  }
  getSingleEmployee(id:number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>('http://dummy.restapiexample.com/api/v1/employee/' + id );
  }
  createEmployee(): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>('http://dummy.restapiexample.com/api/v1/create', {});
  }
}
