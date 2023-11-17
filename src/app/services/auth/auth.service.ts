import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject(false);
  private _userName$ = new BehaviorSubject('');

  get isLoggedIn(): boolean {
    return this._isLoggedIn$.value;
  }

  get userName(): string | undefined {
    return this._userName$.value ?? undefined;
  }

  login(username: string, password: string): void {
    this._isLoggedIn$.next(true);
    this._userName$.next(username);
  }
}
