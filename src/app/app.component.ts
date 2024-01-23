import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';
// class abc{
//   constructor(){
//     console.log("Abc COnstructor called")
//   }
//   show(){
//     console.log("hello World")
//   }
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StudentComponent,
    ItemListComponent,
    EmployeeComponent,
  ],
  templateUrl: './app.component.html',
  // template:'<h1>Hello World</h1>',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
  // viewProviders: [abc,Book],
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  // title = 'practice';
  // isloggedin : boolean = false;
  // login(){
  //   this.isloggedin = true;
  // }
  // logout(){
  //   this.isloggedin =false
  // }
  // age:number = 70
  // name:string = "Mohan"
  // students:any[]=[
  //   {id:101,name:"Asad"},
  //   {id:102,name:"Ram"},
  //   {id:103,name:"Ahmed"},
  //   {id:104,name:"Ali"},
  //   {id:105,name:"Sufyan"},
  // ]
  // constructor(private _abc:abc,private _book:Book){
  //   console.log("main constructor called")
  //   _abc.show()
  // }
  
  // @HostListener('click', ['$event'])
  // display() {
  //   alert('How are You?');
  // }
  // show() {
  //   alert('HELLO');
  // }
  Cdata:any;
  getdata(val:any){
    this.Cdata=val
  }
}
