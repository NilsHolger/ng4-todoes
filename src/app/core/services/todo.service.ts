import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Page, Todo } from '../../models/index';


@Injectable()
export class TodoService {
  baseUrl = 'https://spring-boot-travis-heroku.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {}

  findAll(offset?: number, limit?: number): Observable<Page<Todo>> {
    const url = `${this.baseUrl}/todos`;
    return this.http.get<Page<Todo>>(url);
  }

  find(id: number): Observable<Todo> {
    const url = `${this.baseUrl}/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  create(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/todos`;
    return this.http.post<Todo>(url, todo);
  }

  update(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/todos/${id}`;
    return this.http.delete<void>(url);
  }


}
