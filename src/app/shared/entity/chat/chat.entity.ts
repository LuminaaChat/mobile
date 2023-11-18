import { MessageEntity } from './message.entity';

export class ChatEntity {
  participants: string[] = [];
  id: string = 'default Room';
  messages: MessageEntity[] = []
}
