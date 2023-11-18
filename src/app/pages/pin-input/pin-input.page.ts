import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pin-input.page.html',
  styleUrl: './pin-input.page.scss',
})
export class PinInputComponent {
  private readonly router: Router = inject(Router);

  confirmPin() {
    console.log('verify user pin');
    this.router.navigate(['/home']);
  }
}
