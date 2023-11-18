import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../components/button/button.component';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent],
  standalone: true,
})
export class HomePage {}
