import {Component, Input, OnChanges,SimpleChanges,Output,EventEmitter, OnInit} from '@angular/core';
import { Employee } from 'src/Models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'displayEmployeeList',    
    templateUrl:'./displayEmployeeList.component.html',
    styleUrls:['./displayEmployeeList.component.css']
})
export class DisplayEmployeeListComponent implements OnInit
{
    
    @Input() employee; 
    private selectedEmployeeId: number;
    constructor(private _activatedRoute:ActivatedRoute)
    {

    }
    ngOnInit(){
        this.selectedEmployeeId = +this._activatedRoute.snapshot.paramMap.get('id');
    }
}