import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../_services/employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employees: any[];
  crenditials: any;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployee().subscribe(
      data => {
        this.employees = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
