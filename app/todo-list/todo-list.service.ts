import { Injectable } from '@angular/core';
 // Class
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list: Todo[] = [];
  
  constructor() { }

  getList(): Todo[] {
    return this.list;
  }
 
  add(title: string): void { 
      this.list.push(new Todo(title)); 
  }
  remove(index: number): void {
    this.list.splice(index, 1);
  }
}
