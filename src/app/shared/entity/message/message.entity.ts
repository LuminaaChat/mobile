import { MessageStateType } from '../../types/message-state.type';
import { ReferredMessageEntity } from './referred-message.entity';

export class MessageEntity {
  chatId?: string;
  message?: string;
  state?: MessageStateType;
  authorId?: string;
  timestamp?: Date;
  referredMessage?: ReferredMessageEntity;
  constructor(entity: MessageEntity) {
    this.chatId = entity.chatId;
    this.message = entity.message;
    this.state = entity.state;
    this.authorId = entity.authorId;
    this.timestamp = entity.timestamp;
    this.referredMessage = entity.referredMessage;
  }
}
