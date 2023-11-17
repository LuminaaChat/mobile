import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [ReactiveFormsModule, NgFor],
  standalone: true,
})
export class LoginPage implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected loginFormGroup!: FormGroup;

  protected messages = new Array<string>();

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(): void {
    // this.authService.login(new UserEntity());
    this.router.navigateByUrl('home', { replaceUrl: true });
  }
}
