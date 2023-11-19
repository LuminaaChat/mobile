import { ChatService } from 'src/app/services/chat/chat.service';

import { Component, computed, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

import { GroupChatListComponent } from '../../components/group-chat-list/group-chat-list.component';

@Component({
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
  standalone: true,
  imports: [GroupChatListComponent],
})
export class GroupPage {
  private readonly chatService = inject(ChatService);
  private readonly router = inject(Router);

  @Input() groupId!: string;

  group = computed(() =>
    this.chatService.groups().find((group) => group.groupId === this.groupId)
  );

  goToChatWithId(chatId: string) {
    debugger;
    this.router.navigate(['/chat', chatId]);
  }
}
