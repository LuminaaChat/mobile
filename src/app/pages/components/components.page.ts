import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/base-components/button/button.component';
import { InputFieldComponent } from '../../components/base-components/input-field/input-field.component';
import { ChatMessageListItemComponent } from '../../components/chat-message-list-item/chat-message-list-item.component';

@Component({
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  imports: [ButtonComponent, InputFieldComponent, ChatMessageListItemComponent],
  standalone: true,
})
export class ComponentPage {
  constructor() {}
}
