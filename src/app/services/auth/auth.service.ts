import { Injectable } from '@angular/core';
import { UserEntity } from 'src/app/shared/entity/user/user.entity';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(user: UserEntity): void {}
}
