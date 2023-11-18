import { MessageAuthorType } from '../../types/message-author.type';
import { MessageStateType } from '../../types/message-state.type';
import { ReferredMessageEntity } from './referred-message.entity';

export class MessageEntity {
  message: string;
  state: MessageStateType;
  author: MessageAuthorType;
  referredMessage?: ReferredMessageEntity;
  constructor(entity: MessageEntity) {
    this.message = entity.message;
    this.state = entity.state;
    this.author = entity.author;
    this.referredMessage = entity.referredMessage;
  }
}
