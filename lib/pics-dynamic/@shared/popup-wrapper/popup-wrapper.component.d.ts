import { EventEmitter } from '@angular/core';
import { FormioCustomComponent } from '@formio/angular';
import * as i0 from "@angular/core";
export declare class PopupWrapperComponent implements FormioCustomComponent<number> {
    value: number;
    valueChange: EventEmitter<number>;
    disabled: boolean;
    display: boolean;
    toggleDisplay(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopupWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopupWrapperComponent, "app-popup-wrapper", never, { "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
