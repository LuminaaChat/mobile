import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class HomePage {}
