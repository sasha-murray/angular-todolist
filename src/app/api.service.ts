import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Todo } from './todo'

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error)
  }

  // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(API_URL + '/todos')
      .pipe(map((res: any) => {
        const todos = res.json();
        return todos.map(todo => new Todo(todo));
      }))
      .pipe(catchError(this.handleError))
  }

  // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/todos', todo)
      .pipe(map((res: any) => {
        return new Todo(res.json());
      }))
      .pipe(catchError(this.handleError))
  }

   // API: GET /todos/:id
  public getTodoByID(todoID: number):Observable<Todo> {
    return this.http
      .get(API_URL + '/todos/' + todoID)
      .pipe(map((res: any) => {
        return new Todo(res.json())
      }))
      .pipe(catchError(this.handleError))
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo)
      .pipe(map((res: any) => {
        return new Todo(res.json());
      }))
      .pipe(catchError(this.handleError))

  }

  // DELETE /todos/:id
  public deleteTodoByID(todoID: number): Observable<null> {
    return this.http
      .delete(API_URL + '/todos/' + todoID)
      .pipe(map(res => null))
      .pipe(catchError(this.handleError))

  }

}
