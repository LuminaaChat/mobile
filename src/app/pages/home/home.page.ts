import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Group } from '../../../../chatapi';
import { AuthService } from '../../services/auth/auth.service';
import { ChatService } from '../../services/chat/chat.service';
import { GroupListComponent } from './group-list/group-list.component';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [ReactiveFormsModule, CommonModule, GroupListComponent],
  standalone: true,
})
export class HomePage implements OnInit {
  private readonly router = inject(Router);

  private readonly auth = inject(AuthService);
  private readonly chatService = inject(ChatService);

  groups = this.chatService.groups;
  user = this.auth.user;

  ngOnInit(): void {
    console.warn('redirection related to user role');
    this.chatService.getMyGroupList();
    // if (!isAuthorizedEmplopyee(this.auth.user())) {
    // } else {
    // }
  }

  goToGroup(group: Group) {
    this.router.navigate(['/group', group.groupId]);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
