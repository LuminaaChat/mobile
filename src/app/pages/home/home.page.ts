import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  standalone: true,
})
export class HomePage implements OnInit {
  readonly auth = inject(AuthService);
  readonly chatService = inject(ChatService);

  groups = this.chatService.groups;
  user = this.auth.user;

  ngOnInit(): void {
    console.warn('redirection related to user role');
    this.chatService.getMyGroupList();
    // if (!isAuthorizedEmplopyee(this.auth.user())) {
    // } else {
    // }
  }
}
