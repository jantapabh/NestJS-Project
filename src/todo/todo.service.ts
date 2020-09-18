import { Injectable } from '@nestjs/common';

//Service is คล้ายคลาส โดยไฟล์นี้สามารถทำการเรียกจาก service ด้วยกันเองผ่าน constructor

@Injectable()
export class TodoService {

    addTodo(title:string, subtitle:string){
        console.log(`title: ${title}, subtitle: ${subtitle}`);
    }
}
