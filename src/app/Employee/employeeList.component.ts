import { Component,OnInit } from "@angular/core";
import { Employee } from "../../Models/employee.model";
import { EmployeeListService } from "src/Services/employeeList.service";
import {Router} from '@angular/router';
@Component({
    selector:'employeeList',
    templateUrl:'employeeList.component.html',
    styleUrls:['employeeList.component.css']
})
export class EmployeeListComponent implements OnInit
{
    searchTerm:string;
    employees:Employee[];
    constructor(private _employeeListService:EmployeeListService,private _router:Router)
    {
        
    }
    ngOnInit()
    {
        this.employees=this._employeeListService.getAllEmployees();
    }
    getEmployeeWithId(id:number)
    {
        this._router.navigate(['/employees',id]);
    }
    changeEmployeeName()
    {
        // this.employees[0].name="Jordan"
        const newEmployeeArray :Employee[]=Object.assign([],this.employees);
        newEmployeeArray[0].name='Pankaj';
        this.employees=newEmployeeArray;

    }
}