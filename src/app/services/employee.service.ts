import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  mockUrl: string = 'http://localhost:3000/Employee';

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.mockUrl, headerOptions);
  }

  getCurrentEmployeeById(id): Observable<Employee> {
    return this.http.get<Employee>(this.mockUrl + '/' + id, headerOptions);
  }
}









