import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
