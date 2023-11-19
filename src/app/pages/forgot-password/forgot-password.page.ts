import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';

import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  styleUrl: './forgot-password.page.scss',
  templateUrl: './forgot-password.page.html',
})
export class ForgotPasswordPage {
  private readonly location: Location = inject(Location);

  back() {
    this.location.back();
  }
}
