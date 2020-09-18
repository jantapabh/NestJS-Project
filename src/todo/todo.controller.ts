import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    //Constructor
    constructor(private todoService:TodoService){}

    //เมธอดดึงข้อมูล
    @Get()
    getTodos() {
        return this.todoService.getTodos()
    }

    //เมธอดแสดงค่า
    @Post()
    postTodo(@Body("title") title: string, @Body("subtitle") subtitle: string) {
        
        //เรียก service addTodo จาก todo.service ด้วย controller
        this.todoService.addTodo(title, subtitle);
    }

    //เมธอดลบค่าตัวแปรตามค่า ID
    @Delete("/:id")
    deleteTodoById(@Param("id") id: string) {

        console.log(`id: ${id}`);

        return `id is ${id}`
    }
}
