import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompositePageComponent } from './composite-page.component';
import { FormPageComponent } from '../dynamic-tab-page/form-page/form-page.component';
import { DynamicPageComponent } from '../dynamic-tab-page/dynamic-page/dynamic-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: ':compositePageId',
        component: CompositePageComponent,
    },
    {
        path: 'view/:compositePageId',
        component: CompositePageComponent,
    },
    {
        path: ':compositePageIdCleanup/form/:pageId',
        component: FormPageComponent
    },
    {
        path: ':compositePageIdCleanup/form/:pageId/:id',
        component: FormPageComponent
    },
    {
        path: ':compositePageId/form/:pageId',
        component: DynamicPageComponent
    },
    {
        path: ':compositePageId/form/:pageId/:id',
        component: DynamicPageComponent
    },
];
export class CompositePageRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CompositePageRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXBhZ2Utcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9jb21wb3NpdGUtcGFnZS9jb21wb3NpdGUtcGFnZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7O0FBRS9GLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixTQUFTLEVBQUUsc0JBQXNCO0tBQ2xDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEM7SUFDRDtRQUNFLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsU0FBUyxFQUFFLGlCQUFpQjtLQUM3QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLDBDQUEwQztRQUNoRCxTQUFTLEVBQUUsaUJBQWlCO0tBQzdCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsU0FBUyxFQUFFLG9CQUFvQjtLQUNoQztDQUNGLENBQUM7QUFNRixNQUFNLE9BQU8sMEJBQTBCO3dHQUExQiwwQkFBMEI7eUdBQTFCLDBCQUEwQix3Q0FGM0IsWUFBWTt5R0FFWCwwQkFBMEIsWUFIM0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDN0IsWUFBWTs7NEZBRVgsMEJBQTBCO2tCQUp0QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbXBvc2l0ZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvc2l0ZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy10YWItcGFnZS9mb3JtLXBhZ2UvZm9ybS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy10YWItcGFnZS9keW5hbWljLXBhZ2UvZHluYW1pYy1wYWdlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnOmNvbXBvc2l0ZVBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndmlldy86Y29tcG9zaXRlUGFnZUlkJyxcclxuICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICc6Y29tcG9zaXRlUGFnZUlkQ2xlYW51cC9mb3JtLzpwYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBGb3JtUGFnZUNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJzpjb21wb3NpdGVQYWdlSWRDbGVhbnVwL2Zvcm0vOnBhZ2VJZC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBGb3JtUGFnZUNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJzpjb21wb3NpdGVQYWdlSWQvZm9ybS86cGFnZUlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICc6Y29tcG9zaXRlUGFnZUlkL2Zvcm0vOnBhZ2VJZC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZVBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=