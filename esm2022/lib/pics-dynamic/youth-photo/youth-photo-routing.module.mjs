import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { ViewYouthPhotoComponent } from './view-youth-photo/view-youth-photo.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'upload-image',
        component: DocumentUploadComponent,
    },
    {
        path: 'upload-image/:photoid',
        component: DocumentUploadComponent,
    },
    {
        path: 'image-list',
        component: ViewYouthPhotoComponent,
    },
    { path: '**', redirectTo: 'image-list', pathMatch: 'full' }
];
export class YouthPhotoRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dGgtcGhvdG8tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy95b3V0aC1waG90by95b3V0aC1waG90by1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7O0FBRXhGLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLHVCQUF1QjtLQUNuQztJQUNEO1FBQ0UsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixTQUFTLEVBQUUsdUJBQXVCO0tBQ25DO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsWUFBWTtRQUNsQixTQUFTLEVBQUUsdUJBQXVCO0tBQ25DO0lBQ0QsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtDQUM1RCxDQUFDO0FBTUYsTUFBTSxPQUFPLHVCQUF1Qjt3R0FBdkIsdUJBQXVCO3lHQUF2Qix1QkFBdUIsd0NBRnhCLFlBQVk7eUdBRVgsdUJBQXVCLFlBSHhCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQzdCLFlBQVk7OzRGQUVYLHVCQUF1QjtrQkFKbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEb2N1bWVudFVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vZG9jdW1lbnQtdXBsb2FkL2RvY3VtZW50LXVwbG9hZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3WW91dGhQaG90b0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy15b3V0aC1waG90by92aWV3LXlvdXRoLXBob3RvLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAndXBsb2FkLWltYWdlJyxcclxuICAgIGNvbXBvbmVudDogRG9jdW1lbnRVcGxvYWRDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndXBsb2FkLWltYWdlLzpwaG90b2lkJyxcclxuICAgIGNvbXBvbmVudDogRG9jdW1lbnRVcGxvYWRDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnaW1hZ2UtbGlzdCcsXHJcbiAgICBjb21wb25lbnQ6IFZpZXdZb3V0aFBob3RvQ29tcG9uZW50LFxyXG4gIH0sXHJcbiAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaW1hZ2UtbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWW91dGhQaG90b1JvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==