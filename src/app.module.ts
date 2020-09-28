import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TodoService} from './todo/todo.service';
import {TodoController} from './todo/todo.controller';
import { GuestsModule } from './guests/guests.module';


@Module({
  imports: [GuestsModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
