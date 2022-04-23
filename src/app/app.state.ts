import { AccountDTO } from "./models/accountDTO";


export interface AppState {
  readonly account: AccountDTO[];
}