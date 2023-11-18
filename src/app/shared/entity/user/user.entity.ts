export class UserEntity {
  name?: string;
  pinRegistered?: boolean;
}

export const UserEntityFixture: UserEntity = {
  name: 'Peter',
  pinRegistered: false,
};
