

import { Component, Input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
  standalone: true,
})
export class GroupPage {
  private readonly chatService = inject(ChatService)
  private readonly router = inject(Router);

  @Input() groupId!: string;

  group = computed(() => this.chatService.groups().find(group => group.groupId === this.groupId));

  goToChatWithId(chatId: string) {
    this.router.navigate(['/chat', chatId]);
  }

}
