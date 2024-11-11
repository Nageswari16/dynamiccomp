import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicRibbonComponent } from './dynamic-ribbon.component';
import { FormPageComponent } from '../dynamic-tab-page/form-page/form-page.component';
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
const FORM_PAGE_PATH = 'pagecleanup/:pageId';
const FORM_DYNAMIC_PAGE_PATH = 'pagecleanup/:pageId/:id';
const FORM_DYNAMIC_SEARCH = 'dynamic-searchcleanup/search/:pageId';
const routes = [
    {
        path: 'tab/:tabId',
        component: DynamicRibbonComponent,
        children: [
            {
                path: FORM_PAGE_PATH,
                component: FormPageComponent
            },
            {
                path: FORM_DYNAMIC_PAGE_PATH,
                component: FormPageComponent
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
                path: FORM_PAGE_PATH,
                component: FormPageComponent
            },
            {
                path: FORM_DYNAMIC_PAGE_PATH,
                component: FormPageComponent
            },
            {
                path: 'dynamicpagecleanup/page/modify/:pageId',
                component: FormPageComponent
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
                component: FormPageComponent
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
                path: FORM_PAGE_PATH,
                component: FormPageComponent
            },
            {
                path: FORM_DYNAMIC_PAGE_PATH,
                component: FormPageComponent
            },
            {
                path: 'dynamicpagecleanup/page/modify/:pageId',
                component: FormPageComponent
            },
            {
                path: 'dynamicpagecleanup/page/modify/:pageId/:id',
                component: FormPageComponent
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
                component: FormPageComponent,
            },
            {
                path: 'master-viewcleanup/:masterPageId/form/:pageId/:id',
                component: FormPageComponent
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
                component: FormPageComponent
            },
            {
                path: 'composite-pagecleanup/:compositePageId/:personId/form/:pageId/:id',
                component: FormPageComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yaWJib24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXJpYmJvbi9keW5hbWljLXJpYmJvbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7O0FBRS9GLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUNqQyxNQUFNLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLE1BQU0sY0FBYyxHQUFHLCtCQUErQixDQUFDO0FBQ3ZELE1BQU0sY0FBYyxHQUFHLHFCQUFxQixDQUFDO0FBQzdDLE1BQU0sc0JBQXNCLEdBQUcseUJBQXlCLENBQUM7QUFDekQsTUFBTSxtQkFBbUIsR0FBRyxzQ0FBc0MsQ0FBQztBQUNuRSxNQUFNLE1BQU0sR0FBVztJQUNyQjtR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TSxDQUFDLEVBQzdCLFlBQVk7OzRGQUVYLDBCQUEwQjtrQkFKdEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEeW5hbWljUmliYm9uQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLXJpYmJvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtdGFiLXBhZ2UvZm9ybS1wYWdlL2Zvcm0tcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy1zZWFyY2gvZHluYW1pYy1zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9wYWdlLWJ1aWxkZXItdmlldy9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXN0ZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFzdGVyLXZpZXcvbWFzdGVyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVQZXJtaXNzaW9uUmVzb2x2ZXIgfSBmcm9tICcuLi9AY29yZS9yb3V0ZXIvcm91dGUtcGVybWlzc2lvbi5yZXNvbHZlcic7XHJcbmltcG9ydCB7IENvbXBvc2l0ZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb3NpdGUtcGFnZS9jb21wb3NpdGUtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtdGFiLXBhZ2UvZHluYW1pYy1wYWdlL2R5bmFtaWMtcGFnZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgUEFHRV9QQVRIID0gJ3BhZ2UvOnBhZ2VJZCc7XHJcbmNvbnN0IERZTkFNSUNfUEFHRV9QQVRIID0gJ3BhZ2UvOnBhZ2VJZC86aWQnO1xyXG5jb25zdCBEWU5BTUlDX1NFQVJDSCA9ICdkeW5hbWljLXNlYXJjaC9zZWFyY2gvOnBhZ2VJZCc7XHJcbmNvbnN0IEZPUk1fUEFHRV9QQVRIID0gJ3BhZ2VjbGVhbnVwLzpwYWdlSWQnO1xyXG5jb25zdCBGT1JNX0RZTkFNSUNfUEFHRV9QQVRIID0gJ3BhZ2VjbGVhbnVwLzpwYWdlSWQvOmlkJztcclxuY29uc3QgRk9STV9EWU5BTUlDX1NFQVJDSCA9ICdkeW5hbWljLXNlYXJjaGNsZWFudXAvc2VhcmNoLzpwYWdlSWQnO1xyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAndGFiLzp0YWJJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNSaWJib25Db21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRk9STV9QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBGb3JtUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRk9STV9EWU5BTUlDX1BBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IEZvcm1QYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1BBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBEWU5BTUlDX1NFQVJDSCxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDb21wb25lbnQsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndmlldy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXcvOm1hc3RlclBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBNYXN0ZXJWaWV3Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndGFiLzp0YWJJZC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljUmliYm9uQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IEZPUk1fUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRm9ybVBhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IEZPUk1fRFlOQU1JQ19QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBGb3JtUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlY2xlYW51cC9wYWdlL21vZGlmeS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IEZvcm1QYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBQQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRFlOQU1JQ19QQUdFX1BBVEgsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlL3BhZ2UvbW9kaWZ5LzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljcGFnZWNsZWFudXAvcGFnZS9tb2RpZnkvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRm9ybVBhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljcGFnZS9wYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogRFlOQU1JQ19TRUFSQ0gsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9keW5hbWljLXNlYXJjaC9keW5hbWljLXNlYXJjaC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoTW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3ZpZXcvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hc3Rlci12aWV3LzptYXN0ZXJQYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTWFzdGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9zaXRlUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlLzpjb21wb3NpdGVQYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3RhYi86dGFiSWQvOmlkLzpzb3VyY2VLZXkvOnNvdXJjZVZhbHVlLzpzb3VyY2VUeXBlJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1JpYmJvbkNvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBGT1JNX1BBR0VfUEFUSCxcclxuICAgICAgICBjb21wb25lbnQ6IEZvcm1QYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBGT1JNX0RZTkFNSUNfUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRm9ybVBhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljcGFnZWNsZWFudXAvcGFnZS9tb2RpZnkvOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBGb3JtUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2R5bmFtaWNwYWdlY2xlYW51cC9wYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBGb3JtUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IERZTkFNSUNfUEFHRV9QQVRILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljcGFnZS9wYWdlL21vZGlmeS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pY3BhZ2UvcGFnZS9tb2RpZnkvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IERZTkFNSUNfU0VBUkNILFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENvbXBvbmVudCxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vZHluYW1pYy1zZWFyY2gvZHluYW1pYy1zZWFyY2gubW9kdWxlJykudGhlbihtID0+IG0uRHluYW1pY1NlYXJjaE1vZHVsZSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd2aWV3LzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBQYWdlQnVpbGRlclZpZXdDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IE1hc3RlclZpZXdDb21wb25lbnQsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL21hc3Rlci12aWV3L21hc3Rlci12aWV3Lm1vZHVsZScpLnRoZW4obSA9PiBtLk1hc3RlclZpZXdNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFzdGVyLXZpZXdjbGVhbnVwLzptYXN0ZXJQYWdlSWQvZm9ybS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IEZvcm1QYWdlQ29tcG9uZW50LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hc3Rlci12aWV3Y2xlYW51cC86bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRm9ybVBhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXN0ZXItdmlldy86bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd5b3V0aC1waG90by86cGFnZUlkJyxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4veW91dGgtcGhvdG8veW91dGgtcGhvdG8ubW9kdWxlJykudGhlbih5ID0+IHkuWW91dGhQaG90b01vZHVsZSksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcm9vdG1vZHVsZW5hbWVzOiBbJ1lUSCddLFxyXG4gICAgICAgICAgcm91dGU6ICcveW91dGgtcGhvdG8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNvbHZlOiB7IHBlcm1pc3Npb25zOiBSb3V0ZVBlcm1pc3Npb25SZXNvbHZlciB9IFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlJyxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vY29tcG9zaXRlLXBhZ2UvY29tcG9zaXRlLXBhZ2UubW9kdWxlJykudGhlbihtID0+IG0uQ29tcG9zaXRlUGFnZU1vZHVsZSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IENvbXBvc2l0ZVBhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjb21wb3NpdGUtcGFnZS86Y29tcG9zaXRlUGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wb3NpdGVQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2VjbGVhbnVwLzpjb21wb3NpdGVQYWdlSWQvOnBlcnNvbklkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBGb3JtUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvbXBvc2l0ZS1wYWdlY2xlYW51cC86Y29tcG9zaXRlUGFnZUlkLzpwZXJzb25JZC9mb3JtLzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IEZvcm1QYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZC86cGVyc29uSWQvZm9ybS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY29tcG9zaXRlLXBhZ2UvOmNvbXBvc2l0ZVBhZ2VJZC86cGVyc29uSWQvZm9ybS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1JpYmJvblJvdXRpbmdNb2R1bGUge31cclxuIl19