import { ComponentState } from './master-view.state';
export declare const addComponent: import("@ngrx/store").ActionCreator<"[Master View] Add Component", (props: {
    item: ComponentState;
}) => {
    item: ComponentState;
} & import("@ngrx/store/src/models").TypedAction<"[Master View] Add Component">>;
export declare const removeComponent: import("@ngrx/store").ActionCreator<"[Master View] Remove Component", (props: {
    id: string;
}) => {
    id: string;
} & import("@ngrx/store/src/models").TypedAction<"[Master View] Remove Component">>;
export declare const updateComponent: import("@ngrx/store").ActionCreator<"[Master View] Update Component", (props: {
    item: ComponentState;
}) => {
    item: ComponentState;
} & import("@ngrx/store/src/models").TypedAction<"[Master View] Update Component">>;
export declare const setComponents: import("@ngrx/store").ActionCreator<"[Master View] Set Components", (props: {
    components: ComponentState[];
}) => {
    components: ComponentState[];
} & import("@ngrx/store/src/models").TypedAction<"[Master View] Set Components">>;
export declare const clearComponents: import("@ngrx/store").ActionCreator<"[Master View] Clear Components", () => import("@ngrx/store/src/models").TypedAction<"[Master View] Clear Components">>;
export declare const selectComponentById: import("@ngrx/store").ActionCreator<"[Master View] Select Component By Id", (props: {
    id: string;
}) => {
    id: string;
} & import("@ngrx/store/src/models").TypedAction<"[Master View] Select Component By Id">>;
export declare const publishEvent: import("@ngrx/store").ActionCreator<"[Master View] Publish Event", (props: {
    eventName: string;
    payload: any;
}) => {
    eventName: string;
    payload: any;
} & import("@ngrx/store/src/models").TypedAction<"[Master View] Publish Event">>;
