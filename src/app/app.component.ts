import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  public ngOnInit() {
    this.todoService
      .getAllTodos()
      .subscribe(
        todos => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo: Todo) {
    this.todoService
      .addTodo(todo)
      .subscribe(
        newTodo => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onToggleTodoComplete(todo) {
    this.todoService
      .toggleTodoComplete(todo)
      .subscribe(
        updatedTodo => {
          todo = updatedTodo;
        }
      );
  }

  onRemoveTodo(todo) {
    this.todoService
      .deleteTodoByID(todo.id)
      .subscribe(
        _ => {
          this.todos = this.todos.filter(t => t.id !== todo.id);
        }
      );
  }

}
