import { NgModule } from '@angular/core';
import { DynamicRibbonComponent } from './dynamic-ribbon.component';
import { DynamicRibbonRoutingModule } from './dynamic-ribbon-routing.module';
import { PrimengModule } from '../@shared/primeng.module';
import { SharedPipesModule } from '../@core/pipe/shared-pipes.module';
import { FormsModule } from '@angular/forms';
import { DynamicRibbonPageComponent } from './dynamic-ribbon-page/dynamic-ribbon-page.component';
import { CommonModule } from '@angular/common';
import { FormioModule } from '@formio/angular';
import * as i0 from "@angular/core";
export class DynamicRibbonModule {
    constructor() {
        console.log("DYNAMIC RIBBON MODULE CALLED");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonModule, declarations: [DynamicRibbonComponent, DynamicRibbonPageComponent], imports: [CommonModule,
            FormioModule,
            PrimengModule,
            DynamicRibbonRoutingModule,
            SharedPipesModule,
            FormsModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonModule, imports: [CommonModule,
            FormioModule,
            PrimengModule,
            DynamicRibbonRoutingModule,
            SharedPipesModule,
            FormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicRibbonComponent, DynamicRibbonPageComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        PrimengModule,
                        DynamicRibbonRoutingModule,
                        SharedPipesModule,
                        FormsModule
                    ]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yaWJib24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy1yaWJib24vZHluYW1pYy1yaWJib24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMEIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFhL0MsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUM3QyxDQUFDO3dHQUhVLG1CQUFtQjt5R0FBbkIsbUJBQW1CLGlCQVZmLHNCQUFzQixFQUFFLDBCQUEwQixhQUUvRCxZQUFZO1lBQ1osWUFBWTtZQUNaLGFBQWE7WUFDYiwwQkFBMEI7WUFDMUIsaUJBQWlCO1lBQ2pCLFdBQVc7eUdBR0YsbUJBQW1CLFlBUjVCLFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtZQUNiLDBCQUEwQjtZQUMxQixpQkFBaUI7WUFDakIsV0FBVzs7NEZBR0YsbUJBQW1CO2tCQVgvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDO29CQUNsRSxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsMEJBQTBCO3dCQUMxQixpQkFBaUI7d0JBQ2pCLFdBQVc7cUJBQ1o7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeW5hbWljUmliYm9uQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLXJpYmJvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljUmliYm9uUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZHluYW1pYy1yaWJib24tcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQcmltZW5nTW9kdWxlIH0gZnJvbSAnLi4vQHNoYXJlZC9wcmltZW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vQGNvcmUvcGlwZS9zaGFyZWQtcGlwZXMubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IER5bmFtaWNSaWJib25QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLXJpYmJvbi1wYWdlL2R5bmFtaWMtcmliYm9uLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRHluYW1pY1JpYmJvbkNvbXBvbmVudCwgRHluYW1pY1JpYmJvblBhZ2VDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1pb01vZHVsZSxcclxuICAgIFByaW1lbmdNb2R1bGUsIFxyXG4gICAgRHluYW1pY1JpYmJvblJvdXRpbmdNb2R1bGUsIFxyXG4gICAgU2hhcmVkUGlwZXNNb2R1bGUsIFxyXG4gICAgRm9ybXNNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljUmliYm9uTW9kdWxlIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgY29uc29sZS5sb2coXCJEWU5BTUlDIFJJQkJPTiBNT0RVTEUgQ0FMTEVEXCIpXHJcbiAgfVxyXG59XHJcbiJdfQ==