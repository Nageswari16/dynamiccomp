import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicSearchCleanupComponent } from './dynamic-searchcleanup.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'search/:pageId',
        component: DynamicSearchCleanupComponent,
        loadChildren: () => import('./dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
    },
    {
        path: 'view/:pageId',
        component: DynamicSearchCleanupComponent,
        loadChildren: () => import('./dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
    },
    {
        path: 'search/:pageId/:pageSaveID',
        component: DynamicSearchCleanupComponent,
        loadChildren: () => import('./dynamic-searchcleanup.module').then(m => m.DynamicSearchCleanupModule)
    }
];
export class DynamicSearchCleanupRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWFyY2hjbGVhbnVwLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy1zZWFyY2hjbGVhbnVwL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBRWxGLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixTQUFTLEVBQUUsNkJBQTZCO1FBQ3hDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUM7S0FDckc7SUFDRDtRQUNFLElBQUksRUFBRSxjQUFjO1FBQ3BCLFNBQVMsRUFBRSw2QkFBNkI7UUFDeEMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztLQUNyRztJQUNEO1FBQ0UsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxTQUFTLEVBQUUsNkJBQTZCO1FBQ3hDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUM7S0FDckc7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLGlDQUFpQzt3R0FBakMsaUNBQWlDO3lHQUFqQyxpQ0FBaUMsd0NBRmxDLFlBQVk7eUdBRVgsaUNBQWlDLFlBSGxDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQzdCLFlBQVk7OzRGQUVYLGlDQUFpQztrQkFKN0MsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1zZWFyY2hjbGVhbnVwLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnc2VhcmNoLzpwYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudCxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoQ2xlYW51cE1vZHVsZSlcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd2aWV3LzpwYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudCxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoQ2xlYW51cE1vZHVsZSlcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdzZWFyY2gvOnBhZ2VJZC86cGFnZVNhdmVJRCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50LFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vZHluYW1pYy1zZWFyY2hjbGVhbnVwLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hDbGVhbnVwTW9kdWxlKVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1NlYXJjaENsZWFudXBSb3V0aW5nTW9kdWxlIHt9XHJcbiJdfQ==