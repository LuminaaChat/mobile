import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SubHeaderComponent],
  templateUrl: './set-pin.page.html',
  styleUrl: './set-pin.page.scss',
})
export class SetPinPage {
  private readonly router: Router = inject(Router);
  private readonly location: Location = inject(Location);

  confirmPin() {
    console.log('pin confirmed');
    this.router.navigate(['pin-input']);
  }

  back() {
    this.location.back();
  }
}
