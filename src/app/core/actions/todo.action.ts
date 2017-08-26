import { Action } from '@ngrx/store';
import { Todo } from '../../models';

export const FIND_ALL         = '[Todo] Find All';
export const FIND_ALL_SUCCESS = '[Todo] Find All Success';
export const FIND_ALL_FAILED  = '[Todo] Find All Failed';
export const FIND             = '[Todo] Find';
export const FIND_SUCCESS     = '[Todo] Find Success';
export const FIND_FAILED      = '[Todo] Find Failed';
export const CREATE           = '[Todo] Create';
export const CREATE_SUCCESS   = '[Todo] Create Success';
export const CREATE_FAILED    = '[Todo] Create Failed';
export const UPDATE           = '[Todo] Update';
export const UPDATE_SUCCESS   = '[Todo] Update Success';
export const UPDATE_FAILED    = '[Todo] Update Failed';
export const DELETE           = '[Todo] Delete';
export const DELETE_SUCCESS   = '[Todo] Delete Success';
export const DELETE_FAILED    = '[Todo] Delete Failed';


export class FindAll implements Action {
  readonly type = FIND_ALL;
  constructor() {}
}


export class FindAllSuccess implements Action {
  readonly type = FIND_ALL_SUCCESS;
  constructor(public payload: Todo[]) {}
}


export class FindAllFailed implements Action {
  readonly type = FIND_ALL_FAILED;
  constructor() {}
}


export class Find implements Action {
  readonly type = FIND;
  constructor(public payload: number) {}
}


export class FindSuccess implements Action {
  readonly type = FIND_SUCCESS;
  constructor(public payload: Todo) {}
}


export class FindFailed implements Action {
  readonly type = FIND_FAILED;
  constructor() {}
}


export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: Todo) {}
}


export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public payload: Todo) {}
}


export class CreateFailed implements Action {
  readonly type = CREATE_FAILED;
  constructor() {}
}


export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: Todo) {}
}

export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor(public payload: Todo) {}
}


export class UpdateFailed implements Action {
  readonly type = UPDATE_FAILED;
  constructor() {}
}


export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: number) {}
}


export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
  constructor(public payload: number) {}
}


export class DeleteFailed implements Action {
  readonly type = DELETE_FAILED;
  constructor() {}
}

export type Actions =
  FindAll | FindAllSuccess | FindAllFailed |
  Find    | FindSuccess    | FindFailed    |
  Create  | CreateSuccess  | CreateFailed  |
  Update  | UpdateSuccess  | UpdateFailed  |
  Delete  | DeleteSuccess  | DeleteFailed;
