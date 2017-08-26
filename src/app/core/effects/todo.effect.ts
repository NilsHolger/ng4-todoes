import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as TodoAction from '../actions';
import { TodoService } from '../services/todo.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TodoEffects {

    constructor(private action$: Actions, private todoService: TodoService) {}

    @Effect() findAll$: Observable<Action> = this.action$
          .ofType(TodoAction.FIND_ALL, TodoAction.CREATE_SUCCESS, TodoAction.UPDATE_SUCCESS, TodoAction.DELETE_SUCCESS)
          .map(toPayload)
          .switchMap(payload => this.todoService.findAll()
          .map(data => new TodoAction.FindAllSuccess(data.content)));

    @Effect() find$: Observable<Action> = this.action$
          .ofType(TodoAction.FIND)
          .map(toPayload)
          .switchMap(payload => this.todoService.find(payload)
          .map(data => new TodoAction.FindSuccess(data)));

  @Effect() create$: Observable<Action> = this.action$
          .ofType(TodoAction.CREATE)
          .map(toPayload)
          .switchMap(payload => this.todoService.create(payload)
          .map(data => new TodoAction.CreateSuccess(data)));

  @Effect() update$: Observable<Action> = this.action$
          .ofType(TodoAction.UPDATE)
          .map(toPayload)
          .switchMap(payload => this.todoService.update(payload)
          .map(data => new TodoAction.UpdateSuccess(data)));

@Effect() delete$: Observable<Action> = this.action$
          .ofType(TodoAction.DELETE)
          .map(toPayload)
          .switchMap(payload => this.todoService.delete(payload)
          .map(() => new TodoAction.DeleteSuccess(payload)));


}
