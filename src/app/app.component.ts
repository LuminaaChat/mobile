import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { io } from "socket.io-client";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello world';
  socket: any;
  constructor() {
    this.socket = io('http://10.38.8.77:3000/');
    this.socket.on("connect", () => {
      console.log(this.socket.id);
    });
    this.socket.on("chat", (getMsg: string) => {
      console.log(getMsg);
    });
  }

  sendMsg() {
    this.socket.emit("hello", this.title);
  }
}
