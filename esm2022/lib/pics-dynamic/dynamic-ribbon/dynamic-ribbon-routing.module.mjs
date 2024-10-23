import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicRibbonComponent } from './dynamic-ribbon.component';
import { DynamicPageCleanupComponent } from '../dynamic-tab-page/dynamic-pagecleanup/dynamic-pagecleanup.component';
import { DynamicSearchComponent } from '../dynamic-search/dynamic-search.component';
import { PageBuilderViewComponent } from '../@shared/page-builder-view/page-builder-view.component';
import { MasterViewComponent } from '../master-view/master-view.component';
import { RoutePermissionResolver } from '../@core/router/route-permission.resolver';
import { CompositePageComponent } from '../composite-page/composite-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const PAGE_PATH = 'page/:pageId';
const DYNAMIC_PAGE_PATH = 'page/:pageId/:id';
const DYNAMIC_SEARCH = 'dynamic-search/search/:pageId';
const routes = [
    {
        path: 'tab/:tabId',
        component: DynamicRibbonComponent,
        children: [
            {
                path: PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchComponent,
                loadChildren: () => import('../dynamic-search/dynamic-search.module').then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            },
            {
                path: 'master-view/:masterPageId',
                component: MasterViewComponent
            },
            {
                path: 'composite-page/:compositePageId',
                component: CompositePageComponent
            },
            {
                path: 'composite-page/:compositePageId/:id',
                component: CompositePageComponent
            }
        ]
    },
    {
        path: 'tab/:tabId/:id',
        component: DynamicRibbonComponent,
        children: [
            {
                path: PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchComponent,
                loadChildren: () => import('../dynamic-search/dynamic-search.module').then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            },
            {
                path: 'master-view/:masterPageId',
                component: MasterViewComponent
            },
            {
                path: 'composite-page/:compositePageId',
                component: CompositePageComponent
            },
            {
                path: 'composite-page/:compositePageId/:id',
                component: CompositePageComponent
            }
        ]
    },
    {
        path: 'tab/:tabId/:id/:sourceKey/:sourceValue/:sourceType',
        component: DynamicRibbonComponent,
        children: [
            {
                path: PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchComponent,
                loadChildren: () => import('../dynamic-search/dynamic-search.module').then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            },
            {
                path: 'master-view/:masterPageId',
                component: MasterViewComponent,
                loadChildren: () => import('../master-view/master-view.module').then(m => m.MasterViewModule)
            },
            {
                path: 'master-view/:masterPageId/form/:pageId',
                component: DynamicPageCleanupComponent,
            },
            {
                path: 'master-view/:masterPageId/form/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'youth-photo/:pageId',
                loadChildren: () => import('../youth-photo/youth-photo.module').then(y => y.YouthPhotoModule),
                data: {
                    rootmodulenames: ['YTH'],
                    route: '/youth-photo'
                },
                resolve: { permissions: RoutePermissionResolver }
            },
            {
                path: 'composite-page',
                loadChildren: () => import('../composite-page/composite-page.module').then(m => m.CompositePageModule)
            },
            {
                path: 'composite-page/:compositePageId',
                component: CompositePageComponent
            },
            {
                path: 'composite-page/:compositePageId/:id',
                component: CompositePageComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
        ]
    }
];
export class DynamicRibbonRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yaWJib24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXJpYmJvbi9keW5hbWljLXJpYmJvbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBRXBGLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUNqQyxNQUFNLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLE1BQU0sY0FBYyxHQUFHLCtCQUErQixDQUFDO0FBQ3ZELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsMkJBQTJCO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIs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QU0sQ0FBQyxFQUM3QixZQUFZOzs0RkFFWCwwQkFBMEI7a0JBSnRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRHluYW1pY1JpYmJvbkNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1yaWJib24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy10YWItcGFnZS9keW5hbWljLXBhZ2VjbGVhbnVwL2R5bmFtaWMtcGFnZWNsZWFudXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaENvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL0BzaGFyZWQvcGFnZS1idWlsZGVyLXZpZXcvcGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFzdGVyVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL21hc3Rlci12aWV3L21hc3Rlci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlUGVybWlzc2lvblJlc29sdmVyIH0gZnJvbSAnLi4vQGNvcmUvcm91dGVyL3JvdXRlLXBlcm1pc3Npb24ucmVzb2x2ZXInO1xyXG5pbXBvcnQgeyBDb21wb3NpdGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9zaXRlLXBhZ2UvY29tcG9zaXRlLXBhZ2UuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IFBBR0VfUEFUSCA9ICdwYWdlLzpwYWdlSWQnO1xyXG5jb25zdCBEWU5BTUlDX1BBR0VfUEFUSCA9ICdwYWdlLzpwYWdlSWQvOmlkJztcclxuY29uc3QgRFlOQU1JQ19TRUFSQ0ggPSAnZHluYW1pYy1zZWFyY2gvc2VhcmNoLzpwYWdlSWQnO1xyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAndGFiLzp0YWJJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNSaWJib25Db21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1BBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRFlOQU1JQ19TRUFSQ0gsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9keW5hbWljLXNlYXJjaC9keW5hbWljLXNlYXJjaC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoTW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3ZpZXcvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hc3Rlci12aWV3LzptYXN0ZXJQYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTWFzdGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3RhYi86dGFiSWQvOmlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1JpYmJvbkNvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBQQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IERZTkFNSUNfUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pY3BhZ2UvcGFnZS9tb2RpZnkvOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljcGFnZS9wYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IERZTkFNSUNfU0VBUkNILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENvbXBvbmVudCxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vZHluYW1pYy1zZWFyY2gvZHluYW1pYy1zZWFyY2gubW9kdWxlJykudGhlbihtID0+IG0uRHluYW1pY1NlYXJjaE1vZHVsZSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd2aWV3LzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBQYWdlQnVpbGRlclZpZXdDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IE1hc3RlclZpZXdDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd0YWIvOnRhYklkLzppZC86c291cmNlS2V5Lzpzb3VyY2VWYWx1ZS86c291cmNlVHlwZScsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNSaWJib25Db21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1BBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlL3BhZ2UvbW9kaWZ5LzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pY3BhZ2UvcGFnZS9tb2RpZnkvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1NFQVJDSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDb21wb25lbnQsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndmlldy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXcvOm1hc3RlclBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBNYXN0ZXJWaWV3Q29tcG9uZW50LFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9tYXN0ZXItdmlldy9tYXN0ZXItdmlldy5tb2R1bGUnKS50aGVuKG0gPT4gbS5NYXN0ZXJWaWV3TW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hc3Rlci12aWV3LzptYXN0ZXJQYWdlSWQvZm9ybS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAneW91dGgtcGhvdG8vOnBhZ2VJZCcsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL3lvdXRoLXBob3RvL3lvdXRoLXBob3RvLm1vZHVsZScpLnRoZW4oeSA9PiB5LllvdXRoUGhvdG9Nb2R1bGUpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJvb3Rtb2R1bGVuYW1lczogWydZVEgnXSxcclxuICAgICAgICAgIHJvdXRlOiAnL3lvdXRoLXBob3RvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzb2x2ZTogeyBwZXJtaXNzaW9uczogUm91dGVQZXJtaXNzaW9uUmVzb2x2ZXIgfSBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZScsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2NvbXBvc2l0ZS1wYWdlL2NvbXBvc2l0ZS1wYWdlLm1vZHVsZScpLnRoZW4obSA9PiBtLkNvbXBvc2l0ZVBhZ2VNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQvOnBlcnNvbklkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkLzpwZXJzb25JZC9mb3JtLzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1JpYmJvblJvdXRpbmdNb2R1bGUge31cclxuIl19