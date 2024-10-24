import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { DynamicPageCleanupComponent } from '../dynamic-tab-page/dynamic-pagecleanup/dynamic-pagecleanup.component';
import { DynamicPageComponent } from '../dynamic-tab-page/dynamic-page/dynamic-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: ':masterPageId',
        component: MasterViewComponent,
    },
    {
        path: 'view/:masterPageId',
        component: MasterViewComponent,
    },
    {
        path: ':masterPageId/form/:pageId',
        component: DynamicPageCleanupComponent
    },
    {
        path: ':masterPageId/form/:pageId/:id',
        component: DynamicPageCleanupComponent
    },
    {
        path: ':masterPageId/form/:pageId',
        component: DynamicPageComponent
    },
    {
        path: ':masterPageId/form/:pageId/:id',
        component: DynamicPageComponent
    },
];
export class MasterViewRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MasterViewRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXctcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9tYXN0ZXItdmlldy9tYXN0ZXItdmlldy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7O0FBRS9GLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLGVBQWU7UUFDckIsU0FBUyxFQUFFLG1CQUFtQjtLQUMvQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLFNBQVMsRUFBRSwyQkFBMkI7S0FDdkM7SUFDRDtRQUNFLElBQUksRUFBRSxnQ0FBZ0M7UUFDdEMsU0FBUyxFQUFFLDJCQUEyQjtLQUN2QztJQUNEO1FBQ0UsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxTQUFTLEVBQUUsb0JBQW9CO0tBQ2hDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsZ0NBQWdDO1FBQ3RDLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLHVCQUF1Qjt3R0FBdkIsdUJBQXVCO3lHQUF2Qix1QkFBdUIsd0NBRnhCLFlBQVk7eUdBRVgsdUJBQXVCLFlBSHhCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQzdCLFlBQVk7OzRGQUVYLHVCQUF1QjtrQkFKbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXN0ZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tYXN0ZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnQgfSBmcm9tICcuLi9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtcGFnZWNsZWFudXAvZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtdGFiLXBhZ2UvZHluYW1pYy1wYWdlL2R5bmFtaWMtcGFnZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJzptYXN0ZXJQYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBNYXN0ZXJWaWV3Q29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3ZpZXcvOm1hc3RlclBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IE1hc3RlclZpZXdDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnOm1hc3RlclBhZ2VJZC9mb3JtLzpwYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICc6bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljUGFnZUNsZWFudXBDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICc6bWFzdGVyUGFnZUlkL2Zvcm0vOnBhZ2VJZCcsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNQYWdlQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnOm1hc3RlclBhZ2VJZC9mb3JtLzpwYWdlSWQvOmlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1BhZ2VDb21wb25lbnRcclxuICB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXN0ZXJWaWV3Um91dGluZ01vZHVsZSB7IH1cclxuIl19