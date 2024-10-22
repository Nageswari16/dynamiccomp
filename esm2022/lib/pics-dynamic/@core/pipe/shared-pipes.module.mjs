import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { MaskPipe } from './ssnMask.pipe';
import { TabFilterPipe } from './tab-filter.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import * as i0 from "@angular/core";
export class SharedPipesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, declarations: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe], imports: [CommonModule], exports: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, providers: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe], imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe],
                    exports: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe],
                    providers: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3BpcGUvc2hhcmVkLXBpcGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQVFoRCxNQUFNLE9BQU8saUJBQWlCO3dHQUFqQixpQkFBaUI7eUdBQWpCLGlCQUFpQixpQkFKYixRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZLGFBRHRELFlBQVksYUFFWixRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZO3lHQUdoRCxpQkFBaUIsYUFGakIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsWUFIcEQsWUFBWTs7NEZBS1gsaUJBQWlCO2tCQU43QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO29CQUNqRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7b0JBQzVELFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztpQkFDL0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWx0ZXJQaXBlIH0gZnJvbSAnLi9maWx0ZXIucGlwZSc7XHJcbmltcG9ydCB7IE1hc2tQaXBlIH0gZnJvbSAnLi9zc25NYXNrLnBpcGUnO1xyXG5pbXBvcnQgeyBUYWJGaWx0ZXJQaXBlIH0gZnJvbSAnLi90YWItZmlsdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL3NhZmUtaHRtbC5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTWFza1BpcGUsIEZpbHRlclBpcGUsIFRhYkZpbHRlclBpcGUsIFNhZmVIdG1sUGlwZV0sXHJcbiAgZXhwb3J0czogW01hc2tQaXBlLCBGaWx0ZXJQaXBlLCBUYWJGaWx0ZXJQaXBlLCBTYWZlSHRtbFBpcGVdLFxyXG4gIHByb3ZpZGVyczogW01hc2tQaXBlLCBGaWx0ZXJQaXBlLCBUYWJGaWx0ZXJQaXBlLCBTYWZlSHRtbFBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRQaXBlc01vZHVsZSB7fVxyXG4iXX0=