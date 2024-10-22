import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { DynamicSearchCleanupComponent } from '../dynamic-searchcleanup/dynamic-searchcleanup.component';
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
        component: DynamicSearchCleanupComponent
    },
    {
        path: ':masterPageId/form/:pageId/:id',
        component: DynamicSearchCleanupComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXctcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9tYXN0ZXItdmlldy9tYXN0ZXItdmlldy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7O0FBRXpHLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLGVBQWU7UUFDckIsU0FBUyxFQUFFLG1CQUFtQjtLQUMvQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLFNBQVMsRUFBRSw2QkFBNkI7S0FDekM7SUFDRDtRQUNFLElBQUksRUFBRSxnQ0FBZ0M7UUFDdEMsU0FBUyxFQUFFLDZCQUE2QjtLQUN6QztDQUNGLENBQUM7QUFNRixNQUFNLE9BQU8sdUJBQXVCO3dHQUF2Qix1QkFBdUI7eUdBQXZCLHVCQUF1Qix3Q0FGeEIsWUFBWTt5R0FFWCx1QkFBdUIsWUFIeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDN0IsWUFBWTs7NEZBRVgsdUJBQXVCO2tCQUpuQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hc3RlclZpZXdDb21wb25lbnQgfSBmcm9tICcuL21hc3Rlci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy10YWItcGFnZS9keW5hbWljLXBhZ2UvZHluYW1pYy1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy1zZWFyY2hjbGVhbnVwL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJzptYXN0ZXJQYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBNYXN0ZXJWaWV3Q29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3ZpZXcvOm1hc3RlclBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IE1hc3RlclZpZXdDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnOm1hc3RlclBhZ2VJZC9mb3JtLzpwYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJzptYXN0ZXJQYWdlSWQvZm9ybS86cGFnZUlkLzppZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyVmlld1JvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==