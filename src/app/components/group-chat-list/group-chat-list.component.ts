import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { GroupChat } from '../../../../chatapi';
import { GroupChatListItemComponent } from '../group-chat-list-item/group-chat-list-item.component';

@Component({
  selector: 'app-group-chat-list',
  standalone: true,
  imports: [CommonModule, GroupChatListItemComponent],
  templateUrl: './group-chat-list.component.html',
  styleUrl: './group-chat-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupChatListComponent {
  @Input() title: string = 'no - title';
  @Input() chats?: GroupChat[] = [];
  @Output() chatItemSelected = new EventEmitter<string>();
}
