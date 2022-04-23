import { Action } from '@ngrx/store'
import { AccountDTO } from '../models/accountDTO'

export const ADD = 'Add'
export const REMOVE = 'Remove'

export class AddAction implements Action {
    readonly type: string = ADD;

    constructor(public payload: AccountDTO){} 

}

export class RemoveAction implements Action {
    readonly type: string = REMOVE;
    
    constructor(public payload: AccountDTO){} 
}

export type Actions = AddAction | RemoveAction