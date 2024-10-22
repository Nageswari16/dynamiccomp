import { GridsterItem } from "angular-gridster2";
export interface ComponentState extends GridsterItem {
    id: string;
    name: string;
    componentName: string;
    component: any;
    input: any;
    pageId: number;
    settings: any;
}
export interface MasterViewState {
    comps: ComponentState[];
    compsevent: ComponentEvent;
}
export declare class ComponentEvent {
    eventName: string;
    payload: any;
}
