import { ComponentState } from './master-view.state';
export declare const selectAllGridsterItems: import("@ngrx/store").MemoizedSelector<object, ComponentState[], import("@ngrx/store").DefaultProjectorFn<ComponentState[]>>;
export declare const selectEvent: import("@ngrx/store").MemoizedSelector<object, import("./master-view.state").ComponentEvent, import("@ngrx/store").DefaultProjectorFn<import("./master-view.state").ComponentEvent>>;
export declare const selectComponentConfigById: (componentId: string) => import("@ngrx/store").MemoizedSelector<object, ComponentState, import("@ngrx/store").DefaultProjectorFn<ComponentState>>;
