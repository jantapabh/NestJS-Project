import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entify';

//Service is คล้ายคลาส โดยไฟล์นี้สามารถทำการเรียกจาก service ด้วยกันเองผ่าน constructor


@Injectable()
export class TodoService {

     //ข้อมูลอาเรย์จะลิ้งกับไฟล์ชื่อ todo.entify.ts
    todoArray:Todo[]

    addTodo(title:string, subtitle:string){

        console.log(`Title: ${title}, Subtitle: ${subtitle}`);
    }
}
