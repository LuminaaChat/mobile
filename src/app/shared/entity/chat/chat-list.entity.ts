import { ChatEntity } from './chat.entity';

export class ChatListEntity {
  readonly chats: ChatEntity[];
  constructor(entity: ChatListEntity) {
    this.chats = entity.chats;
  }
}
