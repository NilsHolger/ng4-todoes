import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo.reducer';


export interface State {
  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer
};
