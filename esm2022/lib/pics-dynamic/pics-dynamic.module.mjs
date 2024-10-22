import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormioModule } from '@formio/angular';
import { AuthStore } from './@core/auth/auth.store';
import { HttpClient } from '@angular/common/http';
import { DynamicSearchModule } from './dynamic-search/dynamic-search.module';
import { DynmicTabPageModule } from './dynamic-tab-page/dynmic-tab-page.module';
import { SharedPipesModule } from './@core/pipe/shared-pipes.module';
import { DynamicRibbonModule } from './dynamic-ribbon/dynamic-ribbon.module';
import { ViewYouthPhotoComponent } from './youth-photo/view-youth-photo/view-youth-photo.component';
import { DynamicSearchCleanupModule } from './dynamic-searchcleanup/dynamic-searchcleanup.module';
import * as i0 from "@angular/core";
export class PicsDynamicModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, declarations: [ViewYouthPhotoComponent], imports: [CommonModule,
            DynamicSearchModule,
            DynamicSearchCleanupModule,
            DynmicTabPageModule,
            DynamicRibbonModule,
            FormioModule,
            SharedPipesModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, providers: [
            HttpClient,
            AuthStore
        ], imports: [CommonModule,
            DynamicSearchModule,
            DynamicSearchCleanupModule,
            DynmicTabPageModule,
            DynamicRibbonModule,
            FormioModule,
            SharedPipesModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ViewYouthPhotoComponent],
                    imports: [
                        CommonModule,
                        DynamicSearchModule,
                        DynamicSearchCleanupModule,
                        DynmicTabPageModule,
                        DynamicRibbonModule,
                        FormioModule,
                        SharedPipesModule
                    ],
                    providers: [
                        HttpClient,
                        AuthStore
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1keW5hbWljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL3BpY3MtZHluYW1pYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBbUJsRyxNQUFNLE9BQU8saUJBQWlCO3dHQUFqQixpQkFBaUI7eUdBQWpCLGlCQUFpQixpQkFoQmIsdUJBQXVCLGFBRXBDLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsMEJBQTBCO1lBQzFCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGlCQUFpQjt5R0FRUixpQkFBaUIsYUFOakI7WUFDVCxVQUFVO1lBQ1YsU0FBUztTQUNWLFlBWEMsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFDMUIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osaUJBQWlCOzs0RkFRUixpQkFBaUI7a0JBakI3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLDBCQUEwQjt3QkFDMUIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osaUJBQWlCO3FCQUNoQjtvQkFDSCxTQUFTLEVBQUU7d0JBQ1QsVUFBVTt3QkFDVixTQUFTO3FCQUNWO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO2lCQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1pb01vZHVsZSB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IEF1dGhTdG9yZSB9IGZyb20gJy4vQGNvcmUvYXV0aC9hdXRoLnN0b3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaE1vZHVsZSB9IGZyb20gJy4vZHluYW1pYy1zZWFyY2gvZHluYW1pYy1zZWFyY2gubW9kdWxlJztcclxuaW1wb3J0IHsgRHlubWljVGFiUGFnZU1vZHVsZSB9IGZyb20gJy4vZHluYW1pYy10YWItcGFnZS9keW5taWMtdGFiLXBhZ2UubW9kdWxlJztcclxuaW1wb3J0IHsgU2hhcmVkUGlwZXNNb2R1bGUgfSBmcm9tICcuL0Bjb3JlL3BpcGUvc2hhcmVkLXBpcGVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IER5bmFtaWNSaWJib25Nb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtcmliYm9uL2R5bmFtaWMtcmliYm9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFZpZXdZb3V0aFBob3RvQ29tcG9uZW50IH0gZnJvbSAnLi95b3V0aC1waG90by92aWV3LXlvdXRoLXBob3RvL3ZpZXcteW91dGgtcGhvdG8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaENsZWFudXBNb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtc2VhcmNoY2xlYW51cC9keW5hbWljLXNlYXJjaGNsZWFudXAubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVmlld1lvdXRoUGhvdG9Db21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgXHJcbiAgICBEeW5hbWljU2VhcmNoTW9kdWxlLFxyXG4gICAgRHluYW1pY1NlYXJjaENsZWFudXBNb2R1bGUsXHJcbiAgICBEeW5taWNUYWJQYWdlTW9kdWxlLFxyXG4gICAgRHluYW1pY1JpYmJvbk1vZHVsZSxcclxuICAgIEZvcm1pb01vZHVsZSxcclxuICAgIFNoYXJlZFBpcGVzTW9kdWxlXHJcbiAgICBdLFxyXG4gIHByb3ZpZGVyczogWyBcclxuICAgIEh0dHBDbGllbnQsIFxyXG4gICAgQXV0aFN0b3JlICBcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBpY3NEeW5hbWljTW9kdWxlIHtcclxuXHJcbiB9XHJcbiJdfQ==