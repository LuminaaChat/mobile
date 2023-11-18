import { Injectable, signal, WritableSignal } from '@angular/core';

import {
  UserEntity,
  UserEntityFixture,
} from '../../shared/entity/user/user.entity';

@Injectable({ providedIn: 'root' })
export class AuthService {
  pinRegistered: WritableSignal<boolean> = signal(false);
  isLoggedIn: WritableSignal<boolean> = signal(false);
  user: WritableSignal<UserEntity | undefined> = signal(undefined);

  login(username: string, password: string): void {
    console.log(`${username} logging in with password ${password}`);
    const result = { ...UserEntityFixture };
    this.isLoggedIn.set(!!result);
    this.user.set(result);
    this.pinRegistered.set(!!result.pinRegistered);
  }
}
