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
  // newChat$ = new Subject<string>();
  // chatList: ChatListEntity[] = [];
  // chats: ChatEntity[] = [];

  chats: WritableSignal<Array<ChatEntity>> = signal([]);

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000/', { autoConnect: false });
  }

  connectToSocket(username: string) {
    this.socket.auth = { username };
    this.socket.connect();
    // this.subToEvents();
  }

  getMyChatList() {
    // http request
    return [] as ChatEntity[];
  }

  // socket gedöhnse
  sendMessageByChatId(chatId: string, msg: string) {
    if (this.socket.connected) {
      this.socket.emit(CHAT_EVENT.SEND_MSG, { msg, chatId });
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

      // console.log('chat', getMsg);
      // this.newChat$.next(getMsg);
    });

    // this.socket.on('chatJoined', (newChat: ChatEntity) => {
    //   console.log('chatJoined', newChat);
    //   this.chats.push(newChat);
    //   console.log(this.chats);
    // });
  }
}
