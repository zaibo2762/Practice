import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {}
