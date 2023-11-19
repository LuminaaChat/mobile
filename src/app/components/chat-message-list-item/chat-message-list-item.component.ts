import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message-list-item',
  templateUrl: './chat-message-list-item.component.html',
  styleUrls: ['./chat-message-list-item.component.scss'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageListItemComponent {
  @Input()
  message =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis minima explicabo atque, doloremque, sapiente assumenda earum eos fugit suscipit qui eius voluptatem nam quaerat dolores amet placeat dolorum. Inventore, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis minima explicabo atque, doloremque, sapiente assumenda earum eos fugit suscipit qui eius voluptatem nam quaerat dolores amet placeat dolorum. Inventore, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis minima explicabo atque, doloremque, sapiente assumenda earum eos fugit suscipit qui eius voluptatem nam quaerat dolores amet placeat dolorum. Inventore, dolorem!';

  @Input()
  author: 'me' | 'other' = 'other';
}
