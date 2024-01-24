import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { StudentComponent } from './student/student.component';


export const routes: Routes = [
  
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'item',
    component: ItemComponent,
  },
  {
    path: 'item_list',
    component: ItemListComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
];
