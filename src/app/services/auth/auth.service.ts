import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject(false);

  get isLoggedIn(): boolean {
    return this._isLoggedIn$.value;
  }

  login(username: string, password: string): void {
    alert('Logging in as ' + username);
    this._isLoggedIn$.next(true);
  }
}
