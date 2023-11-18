import { io, Socket } from 'socket.io-client';
import { ChatEntity } from 'src/app/shared/entity/chat/chat.entity';

import { Injectable, signal, WritableSignal } from '@angular/core';

import { MessageEntity } from '../../shared/entity/chat/message.entity';

export enum CHAT_EVENT {
  CONNECT = 'connect',
  SEND_MSG = 'chat-out',
  ON_RECEIVE_MSG = 'chat-in',
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  // chatList: ChatListEntity[] = [];
  // chats: ChatEntity[] = [];

  chats: WritableSignal<Array<ChatEntity>> = signal([
    {
      id: 'test1',
      participants: ['Dennis', 'Clemens'],
      messages: [{ message: 'hallo', author: 'Dennis' }, { message: 'wie gehts?', author: 'Dennis' }, { message: 'hallo', author: 'Clemens' }]
    },
    {
      id: 'test2',
      participants: ['Dennis', 'Clemens'],
      messages: [{ message: 'hallo2', author: 'Dennis' }, { message: 'wie gehts?2', author: 'Dennis' }, { message: 'hallo 2', author: 'Clemens' }]
    },
  ]);

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000/', { autoConnect: false });
  }

  connectToSocket(username: string) {
    this.socket.auth = { username };
    this.socket.connect();
    this.subscribeToMyChats();
  }

  getMyChatList() {
    // http request
    return [] as ChatEntity[];
  }

  // socket gedöhnse
  sendMessageByChatId(chatId: string, message: string, author: string) {
    if (this.socket.connected) {
      this.socket.emit(CHAT_EVENT.SEND_MSG, { message, chatId, author });
    } else {
      console.log('no socket found');
      throw 'not implemented yet';
    }
  }

  // openChat(users: string[]) {
  //   if (this.socket.connected) {
  //     this.socket.emit('joinChat', users);
  //   } else {
  //     console.log('no socket found');
  //   }
  // }

  private subscribeToMyChats() {
    this.socket.on(CHAT_EVENT.CONNECT, () => {
      console.log('connected:', this.socket.id);
    });
    this.socket.on(CHAT_EVENT.ON_RECEIVE_MSG, (msg: MessageEntity) => {
      this.chats.update((chats) => {
        const index = chats.findIndex((c: ChatEntity) => c.id === msg.chatId);
        chats[index].messages.push(msg);
        return chats;
      });
    });

    // this.socket.on('chatJoined', (newChat: ChatEntity) => {
    //   console.log('chatJoined', newChat);
    //   this.chats.push(newChat);
    //   console.log(this.chats);
    // });
  }
}
