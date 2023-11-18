import { Component, Input, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ButtonComponent } from 'src/app/components/base-components/button/button.component';
import { InputFieldComponent } from 'src/app/components/base-components/input-field/input-field.component';
import { ChatMessageListComponent } from 'src/app/components/chat-message-list/chat-message-list.component';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [ChatMessageListComponent, ButtonComponent, InputFieldComponent]
})
export class ChatPage implements OnInit {
  private readonly chatService = inject(ChatService)

  @Input() chatId!: string

  chat = computed(() => this.chatService.chats().filter(chat => chat.id === this.chatId))

  constructor() {
    this.chatService.connectToSocket('Dennis');
  }

  ngOnInit(): void {
    console.log(this.chatId);
  }

  send(chatId: string) {
    if (document) {
      const msg = (document.getElementById('chatinput') as HTMLInputElement).value || ''
      this.chatService.sendMessageByChatId(chatId, msg, 'Dennis')
    }
  }
}
