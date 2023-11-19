import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatEntity } from 'src/app/shared/entity/chat/chat.entity';

import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  Input,
  QueryList,
  signal,
  Signal,
  ViewChildren
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChatMessageListItemComponent } from '../chat-message-list-item/chat-message-list-item.component';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ChatMessageListItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageListComponent {
  private readonly authService = inject(AuthService);
  @ViewChildren("messageContainer") messageContainer!: QueryList<ElementRef>;

  user = this.authService.user;

  @Input()
  chat!: Signal<ChatEntity | undefined>;


  constructor() {
    effect(() => {
      const c = this.chat()
      if (c && c.messages.length) {
        console.log('neue Nachricht: ', c.messages[c.messages.length - 1]);
      }
    })
  }

  ngAfterViewInit() {
    this.messageContainer.changes.subscribe(() => {
      if (this.messageContainer && this.messageContainer.last) {
        this.messageContainer.last.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
