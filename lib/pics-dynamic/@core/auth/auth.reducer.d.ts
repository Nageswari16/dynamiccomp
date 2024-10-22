import { AuthState } from './auth.models';
import { Action } from '@ngrx/store';
export declare const initialState: AuthState;
export declare function authReducer(state: AuthState | undefined, action: Action): AuthState;
