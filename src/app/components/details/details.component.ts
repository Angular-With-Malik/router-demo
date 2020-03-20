import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  currentEmployee: Employee = {
    firstName: '',
    lastName: '',
    id: null,
    address: '',
    gender: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params['id'];
        console.log(this.id);
        this.getCurrentEmployeeById(this.id);
      });
  }

  getCurrentEmployeeById(id: number) {
    this.employeeService.getCurrentEmployeeById(id).subscribe(
      (emp: Employee) => {
        this.currentEmployee = emp;
      });
  }
}










