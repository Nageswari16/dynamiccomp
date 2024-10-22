import { AppState } from '../core.state';
import { ActionReducer } from '@ngrx/store';
export declare function initStateFromLocalStorage(reducer: ActionReducer<AppState>): ActionReducer<AppState>;
