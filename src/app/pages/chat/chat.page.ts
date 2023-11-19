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
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageListComponent,
    ButtonComponent,
    InputFieldComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPage implements OnInit {
  @ViewChild('msgbox', { static: true })
  msgBoxElRef?: ElementRef<HTMLInputElement>;
  msgBox?: HTMLInputElement;

  private readonly chatService = inject(ChatService);
  private readonly authService = inject(AuthService);

  @Input() chatId!: string;

  ngOnInit(): void {
    this.msgBox = this.msgBoxElRef?.nativeElement;
  }

  chat = computed(() =>
    this.chatService.chats().find((chat) => chat.id === this.chatId)
  );

  send(chatId: string) {
    console.log(`sending message ${this.msgBox?.value}`);

    this.chatService.sendMessageByChatId({
      chatId,
      message: this.msgBox?.value,
      authorId: this.authService.user()?.displayName,
    });
  }
}
