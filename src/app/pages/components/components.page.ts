import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/base-components/button/button.component';
import { ChipComponent } from '../../components/base-components/chip/chip.component';
import { InputFieldComponent } from '../../components/base-components/input-field/input-field.component';
import { ChatMessageListItemComponent } from '../../components/chat-message-list-item/chat-message-list-item.component';
import { MessageEntity } from '../../shared/entity/message/message.entity';

@Component({
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  imports: [
    ButtonComponent,
    ChatMessageListItemComponent,
    ChipComponent,
    InputFieldComponent,
  ],
  standalone: true,
})
export class ComponentPage {
  shortMessage = 'Lorem ipsum dolor sit.';
  longMessage =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis minima explicabo atque, doloremque, sapiente assumenda earum eos fugit suscipit qui eius voluptatem nam quaerat dolores amet placeat dolorum. Inventore, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis minima explicabo atque, doloremque, sapiente assumenda earum eos fugit suscipit qui eius voluptatem nam quaerat dolores amet placeat dolorum. Inventore, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis minima explicabo atque, doloremque, sapiente assumenda earum eos fugit suscipit qui eius voluptatem nam quaerat dolores amet placeat dolorum. Inventore, dolorem!';

  shortMessageEntityOther = new MessageEntity({
    authorId: 'Maria',
    message: this.shortMessage,
    state: 'send',
  });
  shortMessageEntityMe = new MessageEntity({
    authorId: 'Tim',
    message: this.shortMessage,
    state: 'send',
  });
  longMessageEntityOther = new MessageEntity({
    authorId: 'Maria',
    message: this.longMessage,
    state: 'send',
  });
  longMessageEntityMe = new MessageEntity({
    authorId: 'Tim',
    message: this.longMessage,
    state: 'delivered',
  });

  shortMessageEntityOtherReferred = new MessageEntity({
    authorId: 'Maria',
    message: this.shortMessage,
    state: 'send',
    referredMessage: {
      author: 'Other Author',
      message: this.longMessage,
    },
  });
  shortMessageEntityMeReferred = new MessageEntity({
    authorId: 'Tim',
    message: this.shortMessage,
    state: 'read',
    referredMessage: {
      author: 'Other Author',
      message: this.shortMessage,
    },
  });
  longMessageEntityOtherReferred = new MessageEntity({
    authorId: 'Maria',
    message: this.longMessage,
    state: 'send',
    referredMessage: {
      author: 'Other Author',
      message: this.shortMessage,
    },
  });
  longMessageEntityMeReferred = new MessageEntity({
    authorId: 'Tim',
    message: this.longMessage,
    state: 'send',
    referredMessage: {
      author: 'Other Author',
      message: this.longMessage,
    },
  });
}
