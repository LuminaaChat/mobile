import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { GroupChat } from '../../../../chatapi';

@Component({
  selector: 'app-group-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-chat-list.component.html',
  styleUrl: './group-chat-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupChatListComponent {
  @Input() chats: GroupChat[] = [];
}
