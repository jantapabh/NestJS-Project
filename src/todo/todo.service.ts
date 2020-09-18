import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

//Service is คล้ายคลาส โดยไฟล์นี้สามารถทำการเรียกจาก service ด้วยกันเองผ่าน constructor


@Injectable()
export class TodoService {

     //ข้อมูลอาเรย์จะลิ้งกับไฟล์ชื่อ todo.entify.ts
    todoArray:Todo[] = []
  
    //เมธอดสำหรับ addTodo
    addTodo(title:string, subtitle:string){

        console.log(`Title: ${title}, Subtitle: ${subtitle}`);
    
        //ข้อความที่ส่งไป
        const todo = new Todo();
        todo.id = "1";
        todo.title = title;
        todo.subtitle = subtitle;

        // ส่วนการ add ค่าในตัวแปร Todo
        this.todoArray.push(todo)
    }

    getTodos(){
        return this.todoArray
    }
}


