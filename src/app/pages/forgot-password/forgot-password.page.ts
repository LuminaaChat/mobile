import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  styleUrl: './forgot-password.page.scss',
  templateUrl: './forgot-password.page.html',
})
export class ForgotPasswordPage {
  private readonly location: Location = inject(Location);

  back() {
    this.location.back();
  }
}
