import { Component, Input, inject } from '@angular/core';
import { ChatMessageListItemComponent } from '../chat-message-list-item/chat-message-list-item.component';
import { ChatEntity } from 'src/app/shared/entity/chat/chat.entity';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
  standalone: true,
  imports: [
    ChatMessageListItemComponent
  ]
})
export class ChatMessageListComponent {
  private readonly authService = inject(AuthService)

  user = this.authService.user;

  @Input()
  chat?: ChatEntity

  constructor() { }
}
