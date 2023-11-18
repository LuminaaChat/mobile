import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  pinRegistered: WritableSignal<boolean> = signal(false);
  isLoggedIn: WritableSignal<boolean> = signal(false);
  userName: WritableSignal<string | null> = signal(null);

  login(username: string, password: string): void {
    console.log(`${username} logging in with password ${password}`);
    this.isLoggedIn.set(true);
    this.userName.set(username);
  }
}
