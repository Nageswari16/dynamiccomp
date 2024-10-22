import { EventEmitter } from '@angular/core';
import { FormioCustomComponent } from '@formio/angular';
import * as i0 from "@angular/core";
export declare class RatingWrapperComponent implements FormioCustomComponent<number> {
    value: number;
    valueChange: EventEmitter<number>;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingWrapperComponent, "app-rating-wrapper", never, { "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
