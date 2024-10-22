import { RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthState } from './auth/auth.models';
import { RouterStateUrl } from './router/router.state';
import { MasterViewState } from '../@shared/master-view-state/master-view.state';
export declare const reducers: ActionReducerMap<AppState>;
export declare const metaReducers: MetaReducer<AppState>[];
export declare const selectAuthState: import("@ngrx/store").MemoizedSelector<object, AuthState, import("@ngrx/store").DefaultProjectorFn<AuthState>>;
export declare const selectRouterState: import("@ngrx/store").MemoizedSelector<object, RouterReducerState<RouterStateUrl>, import("@ngrx/store").DefaultProjectorFn<RouterReducerState<RouterStateUrl>>>;
export declare const selectGridsterState: import("@ngrx/store").MemoizedSelector<object, MasterViewState, import("@ngrx/store").DefaultProjectorFn<MasterViewState>>;
export interface AppState {
    auth: AuthState;
    router: RouterReducerState<RouterStateUrl>;
    masterWidget: MasterViewState;
}
export interface State extends AppState {
    app: AppState;
}
