import { CommonModule } from '@angular/common';
import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  encapsulation: ViewEncapsulation.None,
  inputs: ['pData'],
  outputs: ['childevent'],
})
export class EmployeeComponent {
  pData: any;
  childevent = new EventEmitter();
  senddata(val: any) {
    // console.log(val)
    this.childevent.emit(val);
  }
}
