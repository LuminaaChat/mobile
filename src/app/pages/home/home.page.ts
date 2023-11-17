import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class HomePage implements OnInit {
  private chatService = inject(ChatService);
  private authService = inject(AuthService);

  protected messageFormGroup = new FormGroup({
    message: new FormControl('', [Validators.required]),
  });

  protected messages = new Array<string>();

  constructor() {}

  ngOnInit(): void {
    const userName = this.authService.userName;
    if (userName) {
      this.chatService.connectToSocket(userName);
    }

    this.chatService.newChat$
      .asObservable()
      .subscribe((chat) => this.messages.push(chat));
  }

  send(): void {
    const message = this.messageFormGroup.controls.message.value;
    if (message) {
      this.chatService.sendMessage(message);
    }
  }
}
