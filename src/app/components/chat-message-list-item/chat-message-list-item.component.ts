import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MessageEntity } from '../../shared/entity/message/message.entity';

@Component({
  selector: 'app-chat-message-list-item',
  templateUrl: './chat-message-list-item.component.html',
  styleUrls: ['./chat-message-list-item.component.scss'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageListItemComponent {
  private readonly authService = inject(AuthService);

  user = this.authService.user;

  @Input()
  message!: MessageEntity;

  //   @Input()
  //   author: 'me' | 'other' = 'other';
}
