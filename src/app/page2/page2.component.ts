import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { OnsNavigator, Params } from 'ngx-onsenui';
import * as ons from 'onsenui';

import * as TodoAction from '../core/actions/todo.action';
import * as TodoReducer from '../core/reducers/todo.reducer';
import { Todo } from '../models';
import { Page3Component } from '../page3/page3.component';


@Component({
  selector: 'ons-page[page2]',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {
    todo: Todo;
    loading$: Observable<boolean>;
    todo$: Observable<Todo>;
    subscription: Subscription;

    constructor(private store: Store<TodoReducer.State>, private navi: OnsNavigator, private params: Params) {}

    menu(todo: Todo) {
      ons.openActionSheet({
        cancelable: true,
        buttons: [
          { label: 'Delete', icon: 'md-delete', modifier: 'destructive' },
          { label: 'Cancel', icon: 'md-close'}
        ]
        }).then((i: number) => {
          switch(i) {
            case 0:
                  this.delete(todo);
                  break;
            default:
                  break;
          }
      });
    }

    edit(todo: Todo) {
        const params = {
          data: {
            todo
          },
          animation: 'lift'
        };
        this.navi.nativeElement.pushPage(Page3Component, params);
    }

    delete(todo: Todo) {
      this.store.dispatch(new TodoAction.Delete(todo.id));
      this.navi.nativeElement.popPage();
    }

    ngOnInit() {
      this.todo = Object.assign({}, this.params.data.todo);
      this.store.dispatch(new TodoAction.Find(this.todo.id));
    }

    ngOnDestroy() {
      // this.subscription.unsubscribe();
    }

}
