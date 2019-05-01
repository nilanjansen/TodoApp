import { Injectable } from '@angular/core';
import {Todo} from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  //Placeholder for last id so that
  //we can simulate auto increamenting of ids
  lastId:number = 0;

  //placeholder for todos
  todos:Todo[]=[];

  constructor() { }

  //simulate POST /todos
  addTodo(todo:Todo):TodoDataService{
    if(!todo.id){
      todo.id = ++this.lastId; 
    }
    this.todos.push(todo);
    return this;
  }
  //Simulate DELETE /todos/:id
  deleteTodoById(id:number):TodoDataService{
    this.todos = this.todos.filter(todo=>todo.id != id);
    return this;
  }
  updateTodoById(id:number,values: Object={}):Todo{
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo,values);
    return todo;
  }
//Simulate GET /todos
getAllTodos(){
  return this.todos;
}
//Simulate GET /todos/:id
getTodoById(id:number):Todo{
  return this.todos.filter(x=>x.id === id).pop();
}

//Toggle todo complete
toggleTodoComplete(todo:Todo){
  let updateTodo = this.updateTodoById(todo.id,{
    complete:!todo.complete
  });
  return updateTodo;
}

}
