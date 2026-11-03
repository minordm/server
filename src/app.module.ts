import { Module } from '@nestjs/common';
// import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AppGateway } from './app/app.gateway.js';
import { PrismaService } from './prisma.service.js';
import { ConfigModule } from '@nestjs/config';

// export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // // Distributed tracing, auto-correlated logs, request/job metrics, error
    // // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    // ObserveModule.forRoot({
    //   appKey: 'YOUR_APP_KEY',
    //   appSecret: 'YOUR_APP_SECRET',
    //   serviceId: 'server',
    // }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway, PrismaService],
})
export class AppModule {}
