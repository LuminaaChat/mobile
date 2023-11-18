import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { isAuthorizedEmplopyee } from '../../guards/chat-app.guards';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class HomePage implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    if (!isAuthorizedEmplopyee(this.auth.user())) {
    } else {
    }
  }
}
