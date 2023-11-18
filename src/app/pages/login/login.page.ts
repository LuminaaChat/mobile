import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
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
    const username = (document.getElementById('loginName') as HTMLInputElement).value || Math.floor(Math.random() * 10000).toString()
    const password = (document.getElementById('loginPassword') as HTMLInputElement).value || ''

    this.authService.login(username, password);
    this.router.navigate(['/set-pin']);
  }
}
