import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class LoginPage {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  userName = '';
  password = '';

  protected messages = new Array<string>();

  // login(): void {
  //   const username = this.loginFormGroup.controls.username.value || '';
  //   const password = this.loginFormGroup.controls.password.value || '';

  //   this.authService.login(username, password);

  //   this.router.navigateByUrl('home', { replaceUrl: true });
  // }

  forgotPassword() {
    console.log('triggered password forgotten flow');
  }

  continueLogin() {
    this.authService.login('', '');
    this.router.navigate(['/set-pin']);
  }
}
