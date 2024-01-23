import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  // encapsulation:ViewEncapsulation.None
  inputs:['pData'],
  outputs:['childevent']
})
export class EmployeeComponent {
   pData:any;
   childevent = new EventEmitter()
   senddata(val:any){
    // console.log(val)
    this.childevent.emit(val)
   }
}
