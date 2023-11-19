import { ChatService } from 'src/app/services/chat/chat.service';

import { Location } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

import { GroupChatListComponent } from '../../components/group-chat-list/group-chat-list.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
  standalone: true,
  imports: [SubHeaderComponent, GroupChatListComponent],
})
export class GroupPage {
  private readonly chatService = inject(ChatService);
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  @Input() groupId!: string;

  group = computed(() =>
    this.chatService.groups().find((group) => group.groupId === this.groupId)
  );

  goToChatWithId(chatId: string) {
    this.router.navigate(['/chat', chatId]);
  }

  back() {
    this.location.back();
  }
}
