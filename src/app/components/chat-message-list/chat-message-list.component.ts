import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatEntity } from 'src/app/shared/entity/chat/chat.entity';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';

import { ChatMessageListItemComponent } from '../chat-message-list-item/chat-message-list-item.component';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChatMessageListItemComponent],
})
export class ChatMessageListComponent {
  private readonly authService = inject(AuthService);

  user = this.authService.user;

  @Input()
  chat?: ChatEntity;

  constructor() {}
}
