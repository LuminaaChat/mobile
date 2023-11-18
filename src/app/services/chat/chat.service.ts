import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class ChatService {
  newChat$ = new Subject<string>();
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
      this.socket.emit('hello', msg);
    } else {
      console.log('no socket found');
    }
  }

  private subToEvents() {
    this.socket.on('connect', () => {
      console.log('connected:', this.socket.id);
    });
    this.socket.on('chat', (getMsg: string) => {
      console.log('chat', getMsg);
      this.newChat$.next(getMsg);
    });
  }
}
