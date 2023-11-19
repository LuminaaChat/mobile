import { ButtonComponent } from 'src/app/components/base-components/button/button.component';
import { InputFieldComponent } from 'src/app/components/base-components/input-field/input-field.component';
import { ChatMessageListComponent } from 'src/app/components/chat-message-list/chat-message-list.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat/chat.service';

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageListComponent,
    ButtonComponent,
    InputFieldComponent,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPage {
  private readonly chatService = inject(ChatService);
  private readonly authService = inject(AuthService);

  @Input() chatId!: string;

  message: WritableSignal<string> = signal('');

  chat = computed(() =>
    this.chatService.chats().find((chat) => chat.id === this.chatId)
  );

  send($event: Event, chatId: string) {
    $event.preventDefault();
    try {
      this.chatService.sendMessageByChatId({
        chatId,
        message: this.message(),
        authorId: this.authService.user()?.displayName,
      });
    } catch (error) {}
    this.message.set('');
  }
}
