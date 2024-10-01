import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://arl0817osho:rOznPNTb1gneSSfv@poem.pijkc.mongodb.net/?retryWrites=true&w=majority&appName=poem')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
