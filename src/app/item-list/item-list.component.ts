import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
    // items:any[]=new Array(6)
    // showitems:boolean = false;
}
