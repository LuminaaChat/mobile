import { Component } from '@angular/core';
import { ChatMessageListComponent } from 'src/app/components/chat-message-list/chat-message-list.component';

@Component({
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [ChatMessageListComponent]
})
export class ChatPage {
  constructor() { }
}
