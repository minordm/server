import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { Chat, Prisma } from './generated/prisma/client.js';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async createMessage(data: Prisma.ChatCreateInput): Promise<Chat> {
    return await this.prisma.chat.create({ data });
  }

  async getMessages(): Promise<Chat[]> {
    return this.prisma.chat.findMany();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
