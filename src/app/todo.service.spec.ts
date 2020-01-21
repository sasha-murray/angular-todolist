import { TestBed } from '@angular/core/testing';

import { Todo } from './todo';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', () => {
      const service: TodoService = TestBed.get(TodoService);
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should return all todos', () => {
      const service: TodoService = TestBed.get(TodoService);
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', () => {
      const service: TodoService = TestBed.get(TodoService);
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoByID(1)).toEqual(todo1);
      expect(service.getTodoByID(2)).toEqual(todo2);
    });

  });

  describe('#deleteTodoByID(id)', () => {

    it('should remove todo with the corresponding id', () => {
      const service: TodoService = TestBed.get(TodoService);
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoByID(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoByID(2);
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should not removing anything if todo with corresponding id is not found', () => {
      const service: TodoService = TestBed.get(TodoService);
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoByID(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });

  });

  // describe('#updateTodoByID(id, values)', () => {

  //   it('should return todo with the corresponding id and updated data', () => {
  //     const service: TodoService = TestBed.get(TodoService);
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.updateTodoByID(1, {
  //       title: 'new title'
  //     });
  //     expect(updatedTodo.title).toEqual('new title');
  //   });

  //   it('should return null if todo is not found', () => {
  //     const service: TodoService = TestBed.get(TodoService);
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.updateTodoByID(2, {
  //       title: 'new title'
  //     });
  //     expect(updatedTodo).toEqual(null);
  //   });

  // });

  // describe('#toggleTodoComplete(todo)', () => {

  //   it('should return the updated todo with inverse complete status', () => {
  //     const service: TodoService = TestBed.get(TodoService);
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(true);
  //     service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(false);
  //   });

  // });

});
