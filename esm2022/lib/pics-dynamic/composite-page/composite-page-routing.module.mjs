import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompositePageComponent } from './composite-page.component';
import { DynamicPageCleanupComponent } from '../dynamic-tab-page/dynamic-pagecleanup/dynamic-pagecleanup.component';
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
        component: DynamicPageCleanupComponent
    },
    {
        path: ':compositePageId/form/:pageId/:id',
        component: DynamicPageCleanupComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXBhZ2Utcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9jb21wb3NpdGUtcGFnZS9jb21wb3NpdGUtcGFnZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7O0FBRXBILE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixTQUFTLEVBQUUsc0JBQXNCO0tBQ2xDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEM7SUFDRDtRQUNFLElBQUksRUFBRSwrQkFBK0I7UUFDckMsU0FBUyxFQUFFLDJCQUEyQjtLQUN2QztJQUNEO1FBQ0UsSUFBSSxFQUFFLG1DQUFtQztRQUN6QyxTQUFTLEVBQUUsMkJBQTJCO0tBQ3ZDO0NBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTywwQkFBMEI7d0dBQTFCLDBCQUEwQjt5R0FBMUIsMEJBQTBCLHdDQUYzQixZQUFZO3lHQUVYLDBCQUEwQixZQUgzQixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUM3QixZQUFZOzs0RkFFWCwwQkFBMEI7a0JBSnRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tcG9zaXRlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9zaXRlLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy10YWItcGFnZS9keW5hbWljLXBhZ2VjbGVhbnVwL2R5bmFtaWMtcGFnZWNsZWFudXAuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICc6Y29tcG9zaXRlUGFnZUlkJyxcclxuICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd2aWV3Lzpjb21wb3NpdGVQYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJzpjb21wb3NpdGVQYWdlSWQvZm9ybS86cGFnZUlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnOmNvbXBvc2l0ZVBhZ2VJZC9mb3JtLzpwYWdlSWQvOmlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlUGFnZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==