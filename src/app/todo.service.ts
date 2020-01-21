import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // lastId: number = 0;

  // todos: Todo[] = [];

  constructor(
    private api: ApiService
  ) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo)
  }

  deleteTodoByID(todoID: number): Observable<Todo> {
    return this.api.deleteTodoByID(todoID);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  getTodoByID(todoID: number): Observable<Todo> {
    return this.api.getTodoByID(todoID);
  }

  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
