import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent, CommonModule, RouterLink],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  items: any[] = new Array(6);
  showitems: boolean = false;
}
