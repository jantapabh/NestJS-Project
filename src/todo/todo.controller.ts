import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {


    @Get()
    getTodos(){
        return [1,2,3]
    }

    @Post()
    postTodo(@Body("title") title:string , @Body("subtitle") subtitle:string)
    {

        console.log(`title: ${title}, subtitle: ${subtitle}`);
    }
}
