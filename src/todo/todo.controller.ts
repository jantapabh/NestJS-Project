import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

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

    @Delete("/:id")
    deleteTodoById(@Param("id") id:string){

        console.log(`id: ${id}`);
    }
}
