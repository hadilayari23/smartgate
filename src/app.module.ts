import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {MongooseModule}from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://hadil:hadil@cluster0.dygiwey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
