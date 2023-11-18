import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageEntity } from '../../shared/entity/message/message.entity';

@Component({
  selector: 'app-chat-message-list-item',
  templateUrl: './chat-message-list-item.component.html',
  styleUrls: ['./chat-message-list-item.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ChatMessageListItemComponent {
  @Input()
  message!: MessageEntity;

  //   @Input()
  //   author: 'me' | 'other' = 'other';
}
