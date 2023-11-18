import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Socket, io } from "socket.io-client";
import { ChatListEntity } from 'src/app/shared/entity/chat/chat-list.entity';
import { ChatEntity } from 'src/app/shared/entity/chat/chat.entity';

@Injectable({ providedIn: 'root' })
export class ChatService {
  newChat$ = new Subject<string>();
  // chatList: ChatListEntity[] = [];
  chats: ChatEntity[] = [];
  private socket: Socket;
  constructor() {
    this.socket = io('http://localhost:3000/', { autoConnect: false });
  }

  connectToSocket(username: string) {
    this.socket.auth = { username };
    this.socket.connect();
    this.subToEvents();
  }

  sendMessage(msg: string) {
    if (this.socket.connected) {
      this.socket.emit("hello", msg);
    } else {
      console.log("no socket found");
    }
  }

  sendMessageInChat(msg: string, chatId: string) {
    if (this.socket.connected) {
      console.log();

      this.socket.emit("chatMessage", { msg, chatId });
    } else {
      console.log("no socket found");
    }
  }

  openChat(users: string[]) {
    if (this.socket.connected) {
      this.socket.emit("joinChat", users);
    } else {
      console.log("no socket found");
    }
  }

  private subToEvents() {
    this.socket.on("connect", () => {
      console.log('connected:', this.socket.id);
    });

    this.socket.on("chat", (getMsg: string) => {
      console.log("chat", getMsg);
      this.newChat$.next(getMsg);
    });

    this.socket.on("chatJoined", (newChat: ChatEntity) => {
      console.log("chatJoined", newChat);
      this.chats.push(newChat)
      console.log(this.chats);
    });

  }
}
