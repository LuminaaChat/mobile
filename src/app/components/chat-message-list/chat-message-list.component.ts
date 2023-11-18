import { Component, Input } from '@angular/core';
import { ChatEntity } from 'src/app/shared/entity/chat/chat.entity';
import { ChatMessageListItemComponent } from '../chat-message-list-item/chat-message-list-item.component';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
  standalone: true,
  imports: [ChatMessageListItemComponent],
})
export class ChatMessageListComponent {
  username = 'Dennis';

  @Input()
  chat: ChatEntity = {
    id: 'test',
    participants: ['Dennis', 'Clemens'],
    messages: [
      { message: 'hallo', author: 'Dennis' },
      { message: 'wie gehts?', author: 'Dennis' },
      { message: 'hallo 2', author: 'Clemens' },
    ],
  };

  constructor() {}
}
