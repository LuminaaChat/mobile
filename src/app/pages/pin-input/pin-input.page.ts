import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './pin-input.page.html',
  styleUrl: './pin-input.page.scss',
})
export class PinInputComponent {
  private readonly router: Router = inject(Router);
  private readonly location: Location = inject(Location);

  confirmPin() {
    console.log('verify user pin');
    this.router.navigate(['/home'], { replaceUrl: true });
  }

  back() {
    this.location.back();
  }
}
