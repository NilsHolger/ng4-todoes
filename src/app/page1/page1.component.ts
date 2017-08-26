import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { OnsNavigator, Params } from 'ngx-onsenui';

import * as TodoAction from '../core/actions/todo.action';
import * as TodoReducer from '../core/reducers/todo.reducer';
import { Todo } from '../models';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';

@Component({
  selector: 'ons-page[page1]',
  templateUrl: './page1.component.html'
})
export class Page1Component implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodoReducer.State>, private navi: OnsNavigator,
    private params: Params) {
      this.todos$ = store.select(TodoReducer.getTodos);
    }


  detail(todo) {
      const params = {
        data: {
          todo
        }
      };
      this.navi.nativeElement.pushPage(Page2Component, params);
  }

  add() {
      const params = {
        data: {
          todo: new Todo(null, '')
        },
        animation: 'lift'
      };
      this.navi.nativeElement.pushPage(Page3Component, params);
  }



  ngOnInit() {
    this.store.dispatch(new TodoAction.FindAll());
  }


}
