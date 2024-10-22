import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class RatingWrapperComponent {
    value;
    valueChange = new EventEmitter();
    disabled;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RatingWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RatingWrapperComponent, selector: "app-rating-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<ngb-rating [(rate)]=\"value\" (rateChange)=\"valueChange.emit($event)\" [readonly]=\"disabled\"></ngb-rating>\r\n", styles: ["li{list-style:none}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RatingWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-rating-wrapper', template: "<ngb-rating [(rate)]=\"value\" (rateChange)=\"valueChange.emit($event)\" [readonly]=\"disabled\"></ngb-rating>\r\n", styles: ["li{list-style:none}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQHNoYXJlZC9yYXRpbmctd3JhcHBlci9yYXRpbmctd3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL3JhdGluZy13cmFwcGVyL3JhdGluZy13cmFwcGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUXZFLE1BQU0sT0FBTyxzQkFBc0I7SUFFakMsS0FBSyxDQUFTO0lBR2QsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFHekMsUUFBUSxDQUFVO3dHQVJQLHNCQUFzQjs0RkFBdEIsc0JBQXNCLHFKQ1JuQyxvSEFDQTs7NEZET2Esc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLG9CQUFvQjs4QkFNOUIsS0FBSztzQkFESixLQUFLO2dCQUlOLFdBQVc7c0JBRFYsTUFBTTtnQkFJUCxRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtaW9DdXN0b21Db21wb25lbnQgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcmF0aW5nLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmctd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmF0aW5nLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIEZvcm1pb0N1c3RvbUNvbXBvbmVudDxudW1iZXI+IHtcclxuICBASW5wdXQoKVxyXG4gIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuIiwiPG5nYi1yYXRpbmcgWyhyYXRlKV09XCJ2YWx1ZVwiIChyYXRlQ2hhbmdlKT1cInZhbHVlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiIFtyZWFkb25seV09XCJkaXNhYmxlZFwiPjwvbmdiLXJhdGluZz5cclxuIl19