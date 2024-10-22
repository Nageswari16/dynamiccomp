import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicRibbonComponent } from './dynamic-ribbon.component';
import { PageBuilderViewComponent } from '../@shared/page-builder-view/page-builder-view.component';
import { MasterViewComponent } from '../master-view/master-view.component';
import { RoutePermissionResolver } from '../@core/router/route-permission.resolver';
import { CompositePageComponent } from '../composite-page/composite-page.component';
import { DynamicSearchCleanupComponent } from '../dynamic-searchcleanup/dynamic-searchcleanup.component';
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
                component: DynamicSearchCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicSearchCleanupComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchCleanupComponent,
                loadChildren: () => import('../dynamic-searchcleanup/dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
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
                component: DynamicSearchCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicSearchCleanupComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchCleanupComponent,
                loadChildren: () => import('../dynamic-searchcleanup/dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
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
                component: DynamicSearchCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicSearchCleanupComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchCleanupComponent,
                loadChildren: () => import('../dynamic-searchcleanup/dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
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
                component: DynamicSearchCleanupComponent,
            },
            {
                path: 'master-view/:masterPageId/form/:pageId/:id',
                component: DynamicSearchCleanupComponent
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
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId/:id',
                component: DynamicSearchCleanupComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yaWJib24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXJpYmJvbi9keW5hbWljLXJpYmJvbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7O0FBRXpHLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUNqQyxNQUFNLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLE1BQU0sY0FBYyxHQUFHLCtCQUErQixDQUFDO0FBQ3ZELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsNkJBQTZCO2FBQ3pDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsU0FBUyxFQUFFLDZCQUE2QjthQUN6QztZQUNEO2dCQUNFLElBQUksRUFBRSxj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bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRHluYW1pY1JpYmJvbkNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1yaWJib24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1BhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtcGFnZS9keW5hbWljLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9wYWdlLWJ1aWxkZXItdmlldy9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXN0ZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFzdGVyLXZpZXcvbWFzdGVyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVQZXJtaXNzaW9uUmVzb2x2ZXIgfSBmcm9tICcuLi9AY29yZS9yb3V0ZXIvcm91dGUtcGVybWlzc2lvbi5yZXNvbHZlcic7XHJcbmltcG9ydCB7IENvbXBvc2l0ZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb3NpdGUtcGFnZS9jb21wb3NpdGUtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtc2VhcmNoY2xlYW51cC9keW5hbWljLXNlYXJjaGNsZWFudXAuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IFBBR0VfUEFUSCA9ICdwYWdlLzpwYWdlSWQnO1xyXG5jb25zdCBEWU5BTUlDX1BBR0VfUEFUSCA9ICdwYWdlLzpwYWdlSWQvOmlkJztcclxuY29uc3QgRFlOQU1JQ19TRUFSQ0ggPSAnZHluYW1pYy1zZWFyY2gvc2VhcmNoLzpwYWdlSWQnO1xyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAndGFiLzp0YWJJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNSaWJib25Db21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IERZTkFNSUNfUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IERZTkFNSUNfU0VBUkNILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnQsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2R5bmFtaWMtc2VhcmNoY2xlYW51cC9keW5hbWljLXNlYXJjaGNsZWFudXAubW9kdWxlJykudGhlbihtID0+IG0uRHluYW1pY1NlYXJjaENsZWFudXBNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndmlldy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXcvOm1hc3RlclBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBNYXN0ZXJWaWV3Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndGFiLzp0YWJJZC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljUmliYm9uQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFBBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1BBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pY3BhZ2UvcGFnZS9tb2RpZnkvOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlL3BhZ2UvbW9kaWZ5LzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1NFQVJDSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50LFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9keW5hbWljLXNlYXJjaGNsZWFudXAvZHluYW1pYy1zZWFyY2hjbGVhbnVwLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hDbGVhbnVwTW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3ZpZXcvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hc3Rlci12aWV3LzptYXN0ZXJQYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTWFzdGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3RhYi86dGFiSWQvOmlkLzpzb3VyY2VLZXkvOnNvdXJjZVZhbHVlLzpzb3VyY2VUeXBlJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1JpYmJvbkNvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBQQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRFlOQU1JQ19QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlL3BhZ2UvbW9kaWZ5LzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljcGFnZS9wYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRFlOQU1JQ19TRUFSQ0gsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudCxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vZHluYW1pYy1zZWFyY2hjbGVhbnVwL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoQ2xlYW51cE1vZHVsZSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd2aWV3LzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBQYWdlQnVpbGRlclZpZXdDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IE1hc3RlclZpZXdDb21wb25lbnQsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL21hc3Rlci12aWV3L21hc3Rlci12aWV3Lm1vZHVsZScpLnRoZW4obSA9PiBtLk1hc3RlclZpZXdNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXcvOm1hc3RlclBhZ2VJZC9mb3JtLzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXcvOm1hc3RlclBhZ2VJZC9mb3JtLzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAneW91dGgtcGhvdG8vOnBhZ2VJZCcsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL3lvdXRoLXBob3RvL3lvdXRoLXBob3RvLm1vZHVsZScpLnRoZW4oeSA9PiB5LllvdXRoUGhvdG9Nb2R1bGUpLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJvb3Rtb2R1bGVuYW1lczogWydZVEgnXSxcclxuICAgICAgICAgIHJvdXRlOiAnL3lvdXRoLXBob3RvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzb2x2ZTogeyBwZXJtaXNzaW9uczogUm91dGVQZXJtaXNzaW9uUmVzb2x2ZXIgfSBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZScsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2NvbXBvc2l0ZS1wYWdlL2NvbXBvc2l0ZS1wYWdlLm1vZHVsZScpLnRoZW4obSA9PiBtLkNvbXBvc2l0ZVBhZ2VNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQvOnBlcnNvbklkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQvOnBlcnNvbklkL2Zvcm0vOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNSaWJib25Sb3V0aW5nTW9kdWxlIHt9XHJcbiJdfQ==