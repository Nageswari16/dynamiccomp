import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { DynamicPageCleanupComponent } from '../dynamic-tab-page/dynamic-pagecleanup/dynamic-pagecleanup.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: ':masterPageId',
        component: MasterViewComponent,
    },
    {
        path: 'view/:masterPageId',
        component: MasterViewComponent,
    },
    {
        path: ':masterPageId/form/:pageId',
        component: DynamicPageCleanupComponent
    },
    {
        path: ':masterPageId/form/:pageId/:id',
        component: DynamicPageCleanupComponent
    },
];
export class MasterViewRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MasterViewRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXctcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9tYXN0ZXItdmlldy9tYXN0ZXItdmlldy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7O0FBRXBILE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLGVBQWU7UUFDckIsU0FBUyxFQUFFLG1CQUFtQjtLQUMvQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLFNBQVMsRUFBRSwyQkFBMkI7S0FDdkM7SUFDRDtRQUNFLElBQUksRUFBRSxnQ0FBZ0M7UUFDdEMsU0FBUyxFQUFFLDJCQUEyQjtLQUN2QztDQUNGLENBQUM7QUFNRixNQUFNLE9BQU8sdUJBQXVCO3dHQUF2Qix1QkFBdUI7eUdBQXZCLHVCQUF1Qix3Q0FGeEIsWUFBWTt5R0FFWCx1QkFBdUIsWUFIeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDN0IsWUFBWTs7NEZBRVgsdUJBQXVCO2tCQUpuQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hc3RlclZpZXdDb21wb25lbnQgfSBmcm9tICcuL21hc3Rlci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtdGFiLXBhZ2UvZHluYW1pYy1wYWdlY2xlYW51cC9keW5hbWljLXBhZ2VjbGVhbnVwLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnOm1hc3RlclBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IE1hc3RlclZpZXdDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndmlldy86bWFzdGVyUGFnZUlkJyxcclxuICAgIGNvbXBvbmVudDogTWFzdGVyVmlld0NvbXBvbmVudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICc6bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJzptYXN0ZXJQYWdlSWQvZm9ybS86cGFnZUlkLzppZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc3RlclZpZXdSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=