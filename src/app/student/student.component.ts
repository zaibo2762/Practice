import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {}
