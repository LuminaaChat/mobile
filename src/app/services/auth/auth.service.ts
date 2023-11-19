import { Injectable, signal, WritableSignal } from '@angular/core';

import { User, UserType } from '../../../../chatapi';

@Injectable({ providedIn: 'root' })
export class AuthService {
  pinRegistered: WritableSignal<boolean> = signal(false);
  isLoggedIn: WritableSignal<boolean> = signal(false);
  user: WritableSignal<User | undefined> = signal(undefined);

  login(username: string, password: string): void {
    console.log(`${username} logging in with password ${password}`);
    const result = {
      displayName: username,
      userId: 'sichereuserid',
      userType: UserType.Employee,
    } as User;
    this.isLoggedIn.set(!!result);
    this.user.set(result);
    console.warn('information about pin currently missing');
    this.pinRegistered.set(true);
  }
}
