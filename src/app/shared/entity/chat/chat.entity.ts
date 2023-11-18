import { MessageEntity } from '../message/message.entity';

export class ChatEntity {
  participants: string[] = [];
  id: string = 'default Room';
  messages: MessageEntity[];
  constructor(entity: ChatEntity) {
    this.participants = entity.participants;
    this.id = entity.id;
    this.messages = entity.messages;
  }
}
