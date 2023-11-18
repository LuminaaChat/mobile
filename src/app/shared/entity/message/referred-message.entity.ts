export class ReferredMessageEntity {
  message: string;
  author: string;
  constructor(entity: ReferredMessageEntity) {
    this.message = entity.message;
    this.author = entity.author;
  }
}
