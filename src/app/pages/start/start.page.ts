import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './start.page.html',
  styleUrl: './start.page.scss',
  standalone: true,
  imports: [CommonModule],
})
export class StartPage {
  constructor(private readonly router: Router) {}

  login() {
    console.log('Start login Process');
    this.router.navigate(['login']);
  }
}
