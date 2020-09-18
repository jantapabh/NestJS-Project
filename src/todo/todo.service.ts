import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
// import * as uuid from 'uuid';
import { v1 as uuidv1 } from 'uuid';

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

        todo.id = uuidv1();  //เรียกการสุ่มค่า id จาก uuid
        todo.title = title;
        todo.subtitle = subtitle;

        // ส่วนการ add ค่าในตัวแปร Todo
        this.todoArray.push(todo)
    }

    getTodos(){
        return this.todoArray
    }

    //การลบข้อมูลโดยกำหนดค่าผ่าน ID
    removeTodoById(id:string){

        const found = this.todoArray.find(item => item.id === id)
        //เป็นการเช้คค่าตัวแปรไหนที่ตรงกับค่า id ในอาเรย์จะทำงานตามคำสั่ง
        //ถ้าเข้าเงื่อนไขแสดงว่าไม่เจอ
        if(!found){
               throw new NotFoundException(`Todo with ${id} not Found`)
        }
        
        // ส่วน Backup ข้อมูลในตัวแปรเมื่อลบค่าไหนก็จะแสดงเฉพาะค่าที่มีเท่านั้น
        this.todoArray = this.todoArray.filter(item=>{return item.id != id})
        return this.todoArray
    }
}


