import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { DynamicPageCleanupComponent } from './dynamic-pagecleanup/dynamic-pagecleanup.component';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { DynamicSearchComponent } from '../dynamic-search/dynamic-search.component';
import { PageBuilderViewComponent } from '../@shared/page-builder-view/page-builder-view.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'page',
        component: DynamicPageCleanupComponent
    },
    {
        path: 'page',
        component: DynamicPageComponent
    },
    {
        path: 'page/modify/:pageId/:id',
        component: DynamicPageCleanupComponent
    },
    {
        path: 'page/view/:pageId/:id',
        component: DynamicPageCleanupComponent
    },
    {
        path: 'page/modify/:pageId',
        component: DynamicPageCleanupComponent
    },
    {
        path: 'page/modify/:pageId/:id',
        component: DynamicPageComponent
    },
    {
        path: 'page/view/:pageId/:id',
        component: DynamicPageComponent
    },
    {
        path: 'page/modify/:pageId',
        component: DynamicPageComponent
    },
    {
        path: 'tab/:tabId',
        component: DynamicTabComponent,
        children: [
            {
                path: 'page/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'dynamic-search/:pageId',
                component: DynamicSearchComponent,
                loadChildren: () => import('../dynamic-search/dynamic-search.module').then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            }
        ]
    },
    {
        path: 'tab/:tabId/:id',
        component: DynamicTabComponent,
        children: [
            {
                path: 'page/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'dynamic-search/:pageId',
                component: DynamicSearchComponent,
                loadChildren: () => import('../dynamic-search/dynamic-search.module').then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
    }
];
export class DynamicTabPageRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHlubWljLXRhYi1wYWdlLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9keW5taWMtdGFiLXBhZ2Uucm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7OztBQUVwRyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDJCQUEyQjtLQUN2QztJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsb0JBQW9CO0tBQ2hDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUseUJBQXlCO1FBQy9CLFNBQVMsRUFBRSwyQkFBMkI7S0FDdkM7SUFDRDtRQUNFLElBQUksRUFBQyx1QkFBdUI7UUFDNUIsU0FBUyxFQUFFLDJCQUEyQjtLQUN2QztJQUNEO1FBQ0UsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixTQUFTLEVBQUUsMkJBQTJCO0tBQ3ZDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUseUJBQXlCO1FBQy9CLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7SUFDRDtRQUNF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LENBQUMsTUFBTSxDQUFDLEVBQzdCLFlBQVk7OzRGQUVYLDJCQUEyQjtrQkFKdkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEeW5hbWljUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1wYWdlL2R5bmFtaWMtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtcGFnZWNsZWFudXAvZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLXRhYi9keW5hbWljLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy1zZWFyY2gvZHluYW1pYy1zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9wYWdlLWJ1aWxkZXItdmlldy9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ3BhZ2UnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwYWdlJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDoncGFnZS92aWV3LzpwYWdlSWQvOmlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncGFnZS9tb2RpZnkvOnBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3BhZ2UvbW9kaWZ5LzpwYWdlSWQvOmlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6J3BhZ2Uvdmlldy86cGFnZUlkLzppZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncGFnZS9tb2RpZnkvOnBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndGFiLzp0YWJJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNUYWJDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwYWdlL21vZGlmeS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvbW9kaWZ5LzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncGFnZS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvbW9kaWZ5LzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljLXNlYXJjaC86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDb21wb25lbnQsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndmlldy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd0YWIvOnRhYklkLzppZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNUYWJDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwYWdlL21vZGlmeS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvbW9kaWZ5LzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncGFnZS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvbW9kaWZ5LzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljLXNlYXJjaC86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDb21wb25lbnQsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hNb2R1bGUpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndmlldy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgcmVkaXJlY3RUbzogJ3BhZ2UnLFxyXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNUYWJQYWdlUm91dGluZ01vZHVsZSB7fVxyXG4iXX0=