import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  //messagesRepo: MessagesRepository;
  //constructor(messagesRepo: MessagesRepository) {
  //this.messagesRepo = messagesRepo;
  //}

  //An alternative way of commented lines is below line
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
