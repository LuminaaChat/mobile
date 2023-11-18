import { MessageAuthorType } from '../../types/message-author.type';
import { MessageStateType } from '../../types/message-state.type';
import { ReferredMessageEntity } from './referred-message.entity';

export class MessageEntity {
  chatId?: string;
  message: string;
  state: MessageStateType;
  author: MessageAuthorType;
  timestamp?: Date;
  referredMessage?: ReferredMessageEntity;
  constructor(entity: MessageEntity) {
    this.chatId = entity.chatId;
    this.message = entity.message;
    this.state = entity.state;
    this.author = entity.author;
    this.timestamp = entity.timestamp;
    this.referredMessage = entity.referredMessage;
  }
}
