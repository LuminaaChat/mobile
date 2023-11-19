import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { GroupChat } from '../../../../chatapi';
import { IconComponent } from '../base-components/icon/icon.component';

@Component({
  selector: 'app-group-chat-list-item',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './group-chat-list-item.component.html',
  styleUrl: './group-chat-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupChatListItemComponent {
  @Input() chat?: GroupChat;
  @Output() itemClicked = new EventEmitter();
}
