import { Action } from "@ngrx/store";
import { AccountDTO } from "../models/accountDTO";
import * as Actions from './account.action' 



// Section 2
export function reducer(state: AccountDTO[] = [], action: Action) {

    const accountAction = action as Actions.Actions;

    // Section 3
    switch(action.type) {
        case Actions.ADD:
            return [...state, accountAction.payload];
        default:
            return state;
    }
}