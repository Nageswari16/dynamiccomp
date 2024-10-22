import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicComponent } from './dynamic.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export const pageBuilderRoutes = [
    {
        path: '',
        component: DynamicComponent,
        children: [
            {
                path: 'dynamicpage',
                loadChildren: () => import('./pics-dynamic/dynamic-tab-page/dynmic-tab-page.module').then(m => m.DynmicTabPageModule)
            },
            {
                path: 'dynamic-search',
                loadChildren: () => import('./pics-dynamic/dynamic-searchcleanup/dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
            },
            {
                path: 'dynamic-routing',
                loadChildren: () => import('./pics-dynamic/dynamic-ribbon/dynamic-ribbon.module').then(m => m.DynamicRibbonModule)
            },
            {
                path: 'master-view',
                loadChildren: () => import('./pics-dynamic/master-view/master-view.module').then(m => m.MasterViewModule)
            },
            {
                path: 'composite-page',
                loadChildren: () => import('./pics-dynamic/composite-page/composite-page.module').then(m => m.CompositePageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
export class DynamicRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRoutingModule, imports: [RouterModule.forChild(pageBuilderRoutes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(pageBuilderRoutes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yb3V0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvZHluYW1pYy1yb3V0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXZELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFXO0lBQ3ZDO1FBQ0UsSUFBSSxFQUFDLEVBQUU7UUFDUCxTQUFTLEVBQUMsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBQztZQUNQO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLHdEQUF3RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO2FBQ3JIO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsWUFBWSxFQUFFLEdBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQywwQkFBMEIsQ0FBQzthQUNySTtZQUNEO2dCQUNFLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscURBQXFELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7YUFDbkg7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxRztZQUNEO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscURBQXFELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7YUFDbkg7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLE1BQU07S0FDbEI7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLG9CQUFvQjt3R0FBcEIsb0JBQW9CO3lHQUFwQixvQkFBb0Isd0NBRnJCLFlBQVk7eUdBRVgsb0JBQW9CLFlBSHJCLFlBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFDeEMsWUFBWTs7NEZBRVgsb0JBQW9CO2tCQUpoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDbkQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlQnVpbGRlclJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6JycsXHJcbiAgICBjb21wb25lbnQ6RHluYW1pY0NvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOltcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljcGFnZScsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGljcy1keW5hbWljL2R5bmFtaWMtdGFiLXBhZ2UvZHlubWljLXRhYi1wYWdlLm1vZHVsZScpLnRoZW4obT0+IG0uRHlubWljVGFiUGFnZU1vZHVsZSkgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pYy1zZWFyY2gnLFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCk9PiBpbXBvcnQoJy4vcGljcy1keW5hbWljL2R5bmFtaWMtc2VhcmNoY2xlYW51cC9keW5hbWljLXNlYXJjaGNsZWFudXAubW9kdWxlJykudGhlbihtPT5tLkR5bmFtaWNTZWFyY2hDbGVhbnVwTW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWMtcm91dGluZycsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGljcy1keW5hbWljL2R5bmFtaWMtcmliYm9uL2R5bmFtaWMtcmliYm9uLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNSaWJib25Nb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXcnLFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3BpY3MtZHluYW1pYy9tYXN0ZXItdmlldy9tYXN0ZXItdmlldy5tb2R1bGUnKS50aGVuKG0gPT4gbS5NYXN0ZXJWaWV3TW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlJyxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9waWNzLWR5bmFtaWMvY29tcG9zaXRlLXBhZ2UvY29tcG9zaXRlLXBhZ2UubW9kdWxlJykudGhlbihtID0+IG0uQ29tcG9zaXRlUGFnZU1vZHVsZSlcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICByZWRpcmVjdFRvOiAnJyxcclxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHBhZ2VCdWlsZGVyUm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=