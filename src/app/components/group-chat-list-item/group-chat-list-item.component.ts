import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-chat-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-chat-list-item.component.html',
  styleUrl: './group-chat-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupChatListItemComponent {

}
