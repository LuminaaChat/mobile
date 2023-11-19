import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatEntity } from 'src/app/shared/entity/chat/chat.entity';

import {
  Component,
  inject,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChatMessageListItemComponent } from '../chat-message-list-item/chat-message-list-item.component';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ChatMessageListItemComponent],
})
export class ChatMessageListComponent {
  private readonly authService = inject(AuthService);

  user = this.authService.user;

  @Input()
  chat?: ChatEntity;

}
