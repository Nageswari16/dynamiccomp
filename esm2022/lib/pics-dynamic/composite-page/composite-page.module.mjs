import { NgModule } from '@angular/core';
import { CompositePageRoutingModule } from './composite-page-routing.module';
import { CompositePageComponent } from './composite-page.component';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';
import { PrimengModule } from '../@shared/primeng.module';
import * as i0 from "@angular/core";
export class CompositePageModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CompositePageModule, declarations: [CompositePageComponent], imports: [CommonModule, CompositePageRoutingModule, DynamicModule, PrimengModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageModule, imports: [CommonModule, CompositePageRoutingModule, DynamicModule, PrimengModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CompositePageComponent],
                    imports: [CommonModule, CompositePageRoutingModule, DynamicModule, PrimengModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvY29tcG9zaXRlLXBhZ2UvY29tcG9zaXRlLXBhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBTTFELE1BQU0sT0FBTyxtQkFBbUI7d0dBQW5CLG1CQUFtQjt5R0FBbkIsbUJBQW1CLGlCQUhmLHNCQUFzQixhQUMzQixZQUFZLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxFQUFFLGFBQWE7eUdBRXJFLG1CQUFtQixZQUZwQixZQUFZLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxFQUFFLGFBQWE7OzRGQUVyRSxtQkFBbUI7a0JBSi9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSwwQkFBMEIsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO2lCQUNsRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvc2l0ZVBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb21wb3NpdGUtcGFnZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IENvbXBvc2l0ZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvc2l0ZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGUgfSBmcm9tICduZy1keW5hbWljLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByaW1lbmdNb2R1bGUgfSBmcm9tICcuLi9Ac2hhcmVkL3ByaW1lbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ29tcG9zaXRlUGFnZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29tcG9zaXRlUGFnZVJvdXRpbmdNb2R1bGUsIER5bmFtaWNNb2R1bGUsIFByaW1lbmdNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVQYWdlTW9kdWxlIHsgfVxyXG4iXX0=