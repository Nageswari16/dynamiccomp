import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicRibbonComponent } from './dynamic-ribbon.component';
import { DynamicPageCleanupComponent } from '../dynamic-tab-page/dynamic-pagecleanup/dynamic-pagecleanup.component';
import { DynamicSearchComponent } from '../dynamic-search/dynamic-search.component';
import { PageBuilderViewComponent } from '../@shared/page-builder-view/page-builder-view.component';
import { MasterViewComponent } from '../master-view/master-view.component';
import { RoutePermissionResolver } from '../@core/router/route-permission.resolver';
import { CompositePageComponent } from '../composite-page/composite-page.component';
import { DynamicPageComponent } from '../dynamic-tab-page/dynamic-page/dynamic-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const PAGE_PATH = 'page/:pageId';
const DYNAMIC_PAGE_PATH = 'page/:pageId/:id';
const DYNAMIC_SEARCH = 'dynamic-search/search/:pageId';
const CC_PAGE_PATH = 'pagecleanup/:pageId';
const CC_DYNAMIC_PAGE_PATH = 'pagecleanup/:pageId/:id';
const CC_DYNAMIC_SEARCH = 'dynamic-searchcleanup/search/:pageId';
const routes = [
    {
        path: 'tab/:tabId',
        component: DynamicRibbonComponent,
        children: [
            {
                path: CC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: CC_DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: CC_PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageComponent
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
                path: CC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: CC_DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpagecleanup/page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'dynamicpagecleanup/page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicPageComponent
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
                path: CC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: CC_DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpagecleanup/page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpagecleanup/page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicPageComponent
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
                path: 'master-viewcleanup/:masterPageId/form/:pageId',
                component: DynamicPageCleanupComponent,
            },
            {
                path: 'master-viewcleanup/:masterPageId/form/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'master-view/:masterPageId/form/:pageId',
                component: DynamicPageComponent,
            },
            {
                path: 'master-view/:masterPageId/form/:pageId/:id',
                component: DynamicPageComponent
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
                path: 'composite-pagecleanup/:compositePageId/:personId/form/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'composite-pagecleanup/:compositePageId/:personId/form/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId/:id',
                component: DynamicPageComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yaWJib24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXJpYmJvbi9keW5hbWljLXJpYmJvbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7O0FBRS9GLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUNqQyxNQUFNLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLE1BQU0sY0FBYyxHQUFHLCtCQUErQixDQUFDO0FBQ3ZELE1BQU0sWUFBWSxHQUFHLHFCQUFxQixDQUFDO0FBQzNDLE1BQU0sb0JBQW9CLEdBQUcseUJBQXlCLENBQUM7QUFDdkQsTUFBTSxpQkFBaUIsR0FBRyxzQ0FBc0MsQ0FBQztBQUNqRSxNQUFNLE1BQU0sR0FBVztJQUNyQjtR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Qix3Q0FGM0IsWUFBWTt5R0FFWCwwQkFBMEIsWUFIM0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDN0IsWUFBWTs7NEZBRVgsMEJBQTBCO2tCQUp0QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IER5bmFtaWNSaWJib25Db21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtcmliYm9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtdGFiLXBhZ2UvZHluYW1pYy1wYWdlY2xlYW51cC9keW5hbWljLXBhZ2VjbGVhbnVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuLi9keW5hbWljLXNlYXJjaC9keW5hbWljLXNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlclZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL3BhZ2UtYnVpbGRlci12aWV3L3BhZ2UtYnVpbGRlci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc3RlclZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9tYXN0ZXItdmlldy9tYXN0ZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZVBlcm1pc3Npb25SZXNvbHZlciB9IGZyb20gJy4uL0Bjb3JlL3JvdXRlci9yb3V0ZS1wZXJtaXNzaW9uLnJlc29sdmVyJztcclxuaW1wb3J0IHsgQ29tcG9zaXRlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvc2l0ZS1wYWdlL2NvbXBvc2l0ZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy10YWItcGFnZS9keW5hbWljLXBhZ2UvZHluYW1pYy1wYWdlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBQQUdFX1BBVEggPSAncGFnZS86cGFnZUlkJztcclxuY29uc3QgRFlOQU1JQ19QQUdFX1BBVEggPSAncGFnZS86cGFnZUlkLzppZCc7XHJcbmNvbnN0IERZTkFNSUNfU0VBUkNIID0gJ2R5bmFtaWMtc2VhcmNoL3NlYXJjaC86cGFnZUlkJztcclxuY29uc3QgQ0NfUEFHRV9QQVRIID0gJ3BhZ2VjbGVhbnVwLzpwYWdlSWQnO1xyXG5jb25zdCBDQ19EWU5BTUlDX1BBR0VfUEFUSCA9ICdwYWdlY2xlYW51cC86cGFnZUlkLzppZCc7XHJcbmNvbnN0IENDX0RZTkFNSUNfU0VBUkNIID0gJ2R5bmFtaWMtc2VhcmNoY2xlYW51cC9zZWFyY2gvOnBhZ2VJZCc7XHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICd0YWIvOnRhYklkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1JpYmJvbkNvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBDQ19QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IENDX0RZTkFNSUNfUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBDQ19QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRFlOQU1JQ19QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRFlOQU1JQ19TRUFSQ0gsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9keW5hbWljLXNlYXJjaC9keW5hbWljLXNlYXJjaC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoTW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3ZpZXcvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hc3Rlci12aWV3LzptYXN0ZXJQYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTWFzdGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3RhYi86dGFiSWQvOmlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1JpYmJvbkNvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBDQ19QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IENDX0RZTkFNSUNfUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pY3BhZ2VjbGVhbnVwL3BhZ2UvbW9kaWZ5LzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBQQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRFlOQU1JQ19QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlL3BhZ2UvbW9kaWZ5LzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljcGFnZWNsZWFudXAvcGFnZS9tb2RpZnkvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pY3BhZ2UvcGFnZS9tb2RpZnkvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IERZTkFNSUNfU0VBUkNILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENvbXBvbmVudCxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vZHluYW1pYy1zZWFyY2gvZHluYW1pYy1zZWFyY2gubW9kdWxlJykudGhlbihtID0+IG0uRHluYW1pY1NlYXJjaE1vZHVsZSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd2aWV3LzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBQYWdlQnVpbGRlclZpZXdDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IE1hc3RlclZpZXdDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd0YWIvOnRhYklkLzppZC86c291cmNlS2V5Lzpzb3VyY2VWYWx1ZS86c291cmNlVHlwZScsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNSaWJib25Db21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogQ0NfUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBDQ19EWU5BTUlDX1BBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlY2xlYW51cC9wYWdlL21vZGlmeS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlY2xlYW51cC9wYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFBBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1BBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pY3BhZ2UvcGFnZS9tb2RpZnkvOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlL3BhZ2UvbW9kaWZ5LzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1NFQVJDSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDb21wb25lbnQsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndmlldy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXcvOm1hc3RlclBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBNYXN0ZXJWaWV3Q29tcG9uZW50LFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9tYXN0ZXItdmlldy9tYXN0ZXItdmlldy5tb2R1bGUnKS50aGVuKG0gPT4gbS5NYXN0ZXJWaWV3TW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hc3Rlci12aWV3Y2xlYW51cC86bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXdjbGVhbnVwLzptYXN0ZXJQYWdlSWQvZm9ybS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd5b3V0aC1waG90by86cGFnZUlkJyxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4veW91dGgtcGhvdG8veW91dGgtcGhvdG8ubW9kdWxlJykudGhlbih5ID0+IHkuWW91dGhQaG90b01vZHVsZSksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcm9vdG1vZHVsZW5hbWVzOiBbJ1lUSCddLFxyXG4gICAgICAgICAgcm91dGU6ICcveW91dGgtcGhvdG8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNvbHZlOiB7IHBlcm1pc3Npb25zOiBSb3V0ZVBlcm1pc3Npb25SZXNvbHZlciB9IFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlJyxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vY29tcG9zaXRlLXBhZ2UvY29tcG9zaXRlLXBhZ2UubW9kdWxlJykudGhlbihtID0+IG0uQ29tcG9zaXRlUGFnZU1vZHVsZSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2VjbGVhbnVwLzpjb21wb3NpdGVQYWdlSWQvOnBlcnNvbklkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZWNsZWFudXAvOmNvbXBvc2l0ZVBhZ2VJZC86cGVyc29uSWQvZm9ybS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkLzpwZXJzb25JZC9mb3JtLzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkLzpwZXJzb25JZC9mb3JtLzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljUmliYm9uUm91dGluZ01vZHVsZSB7fVxyXG4iXX0=