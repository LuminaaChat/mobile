import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './set-pin.page.html',
  styleUrl: './set-pin.page.scss',
})
export class SetPinPage {
  constructor(private readonly router: Router) {}
  confirmPin() {
    console.log('pin confirmed');
    this.router.navigate(['pin-input']);
  }
}
