import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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

  protected loginFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  protected messages = new Array<string>();

  login(): void {
    const username = this.loginFormGroup.controls.username.value || '';
    const password = this.loginFormGroup.controls.password.value || '';

    this.authService.login(username, password);

    this.router.navigateByUrl('home', { replaceUrl: true });
  }
}
