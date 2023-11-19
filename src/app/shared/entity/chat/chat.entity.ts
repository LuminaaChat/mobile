import { MessageEntity } from '../message/message.entity';

export class ChatEntity {
  participants: string[] = [];
  id: string = 'default Room';
  messages: MessageEntity[] = [];
  chatName?: string;
}
