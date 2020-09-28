import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';



@Module({
  imports: [GuestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
