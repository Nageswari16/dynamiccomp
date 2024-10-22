import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompositePageComponent } from './composite-page.component';
import { DynamicSearchCleanupComponent } from '../dynamic-searchcleanup/dynamic-searchcleanup.component';
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
        path: ':compositePageId/form/:pageId',
        component: DynamicSearchCleanupComponent
    },
    {
        path: ':compositePageId/form/:pageId/:id',
        component: DynamicSearchCleanupComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXBhZ2Utcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9jb21wb3NpdGUtcGFnZS9jb21wb3NpdGUtcGFnZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7O0FBRXpHLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixTQUFTLEVBQUUsc0JBQXNCO0tBQ2xDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEM7SUFDRDtRQUNFLElBQUksRUFBRSwrQkFBK0I7UUFDckMsU0FBUyxFQUFFLDZCQUE2QjtLQUN6QztJQUNEO1FBQ0UsSUFBSSxFQUFFLG1DQUFtQztRQUN6QyxTQUFTLEVBQUUsNkJBQTZCO0tBQ3pDO0NBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTywwQkFBMEI7d0dBQTFCLDBCQUEwQjt5R0FBMUIsMEJBQTBCLHdDQUYzQixZQUFZO3lHQUVYLDBCQUEwQixZQUgzQixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUM3QixZQUFZOzs0RkFFWCwwQkFBMEI7a0JBSnRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tcG9zaXRlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9zaXRlLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1BhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtcGFnZS9keW5hbWljLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnQgfSBmcm9tICcuLi9keW5hbWljLXNlYXJjaGNsZWFudXAvZHluYW1pYy1zZWFyY2hjbGVhbnVwLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnOmNvbXBvc2l0ZVBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndmlldy86Y29tcG9zaXRlUGFnZUlkJyxcclxuICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICc6Y29tcG9zaXRlUGFnZUlkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnOmNvbXBvc2l0ZVBhZ2VJZC9mb3JtLzpwYWdlSWQvOmlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVQYWdlUm91dGluZ01vZHVsZSB7IH1cclxuIl19