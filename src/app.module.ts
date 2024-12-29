import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as admin from 'firebase-admin';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert('src/firebase/comfort-backend.json'),

      databaseURL: 'https://comfort-backend.firebaseio.com',
    });
  }
}
