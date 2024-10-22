import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { PageBuilderViewComponent } from '../@shared/page-builder-view/page-builder-view.component';
import { DynamicSearchCleanupComponent } from '../dynamic-searchcleanup/dynamic-searchcleanup.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'page',
        component: DynamicSearchCleanupComponent
    },
    {
        path: 'page/modify/:pageId/:id',
        component: DynamicSearchCleanupComponent
    },
    {
        path: 'page/view/:pageId/:id',
        component: DynamicSearchCleanupComponent
    },
    {
        path: 'page/modify/:pageId',
        component: DynamicSearchCleanupComponent
    },
    {
        path: 'tab/:tabId',
        component: DynamicTabComponent,
        children: [
            {
                path: 'page/:pageId',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'dynamic-search/:pageId',
                component: DynamicSearchCleanupComponent,
                loadChildren: () => import('../dynamic-searchcleanup/dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
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
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicSearchCleanupComponent
            },
            {
                path: 'dynamic-search/:pageId',
                component: DynamicSearchCleanupComponent,
                loadChildren: () => import('../dynamic-searchcleanup/dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHlubWljLXRhYi1wYWdlLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9keW5taWMtdGFiLXBhZ2Uucm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMERBQTBELENBQUM7OztBQUV6RyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDZCQUE2QjtLQUN6QztJQUNEO1FBQ0UsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixTQUFTLEVBQUUsNkJBQTZCO0tBQ3pDO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsdUJBQXVCO1FBQzVCLFNBQVMsRUFBRSw2QkFBNkI7S0FDekM7SUFDRDtRQUNFLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsU0FBUyxFQUFFLDZCQUE2QjtLQUN6QztJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsU0FBUyxFQUFFLDZCQUE2QjthQUN6QztZQUNEO2dCQUNFLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLFNBQVMsRUFBRSw2QkFBNkI7YUFDekM7WUFDRDtnQkFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixTQUFTLEVBQUUsNkJBQTZCO2FBQ3pDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLDZCQUE2QjthQUN6QztZQUNEO2dCQUNFLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsdURBQXVELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUM7YUFDNUg7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHdCQUF3QjthQUNwQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsU0FBUyxFQUFFLDZCQUE2QjthQUN6QztZQUNEO2dCQUNFLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLFNBQVMsRUFBRSw2QkFBNkI7YUFDekM7WUFDRDtnQkFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixTQUFTLEVBQUUsNkJBQTZCO2FBQ3pDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLDZCQUE2QjthQUN6QztZQUNEO2dCQUNFLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsdURBQXVELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUM7YUFDNUg7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHdCQUF3QjthQUNwQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLE1BQU07UUFDbEIsU0FBUyxFQUFFLE1BQU07S0FDbEI7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLDJCQUEyQjt3R0FBM0IsMkJBQTJCO3lHQUEzQiwyQkFBMkIsd0NBRjVCLFlBQVk7eUdBRVgsMkJBQTJCLFlBSDVCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQzdCLFlBQVk7OzRGQUVYLDJCQUEyQjtrQkFKdkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEeW5hbWljUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1wYWdlL2R5bmFtaWMtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLXRhYi9keW5hbWljLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlclZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL3BhZ2UtYnVpbGRlci12aWV3L3BhZ2UtYnVpbGRlci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy1zZWFyY2hjbGVhbnVwL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ3BhZ2UnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3BhZ2UvbW9kaWZ5LzpwYWdlSWQvOmlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6J3BhZ2Uvdmlldy86cGFnZUlkLzppZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncGFnZS9tb2RpZnkvOnBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndGFiLzp0YWJJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNUYWJDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvbW9kaWZ5LzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwYWdlL21vZGlmeS86cGFnZUlkLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3BhZ2UvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdkeW5hbWljLXNlYXJjaC86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50LFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9keW5hbWljLXNlYXJjaGNsZWFudXAvZHluYW1pYy1zZWFyY2hjbGVhbnVwLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hDbGVhbnVwTW9kdWxlKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3ZpZXcvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndGFiLzp0YWJJZC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljVGFiQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwYWdlLzpwYWdlSWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwYWdlL21vZGlmeS86cGFnZUlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncGFnZS9tb2RpZnkvOnBhZ2VJZC86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdwYWdlLzpwYWdlSWQvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnZHluYW1pYy1zZWFyY2gvOnBhZ2VJZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudCxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vZHluYW1pYy1zZWFyY2hjbGVhbnVwL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoQ2xlYW51cE1vZHVsZSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd2aWV3LzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBQYWdlQnVpbGRlclZpZXdDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICByZWRpcmVjdFRvOiAncGFnZScsXHJcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1RhYlBhZ2VSb3V0aW5nTW9kdWxlIHt9XHJcbiJdfQ==