export * from './admin.service';
import { AdminService } from './admin.service';
export * from './chat.service';
import { ChatService } from './chat.service';
export * from './fCM.service';
import { FCMService } from './fCM.service';
export const APIS = [AdminService, ChatService, FCMService];
