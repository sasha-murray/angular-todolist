import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lastId: number = 0;

  todos: Todo[] = [];

  constructor() {
  }

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoByID(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoByID(id: number, values: Object = {}): Todo {
    let todo = this.getTodoByID(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoByID(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoByID(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
