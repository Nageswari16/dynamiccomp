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
import * as i0 from "@angular/core";
export class PicsDynamicModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, declarations: [ViewYouthPhotoComponent], imports: [CommonModule,
            DynamicSearchModule,
            DynmicTabPageModule,
            DynamicRibbonModule,
            FormioModule,
            SharedPipesModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, providers: [
            HttpClient,
            AuthStore
        ], imports: [CommonModule,
            DynamicSearchModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1keW5hbWljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL3BpY3MtZHluYW1pYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7O0FBa0JwRyxNQUFNLE9BQU8saUJBQWlCO3dHQUFqQixpQkFBaUI7eUdBQWpCLGlCQUFpQixpQkFmYix1QkFBdUIsYUFFcEMsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixpQkFBaUI7eUdBUVIsaUJBQWlCLGFBTmpCO1lBQ1QsVUFBVTtZQUNWLFNBQVM7U0FDVixZQVZDLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osaUJBQWlCOzs0RkFRUixpQkFBaUI7a0JBaEI3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGlCQUFpQjtxQkFDaEI7b0JBQ0gsU0FBUyxFQUFFO3dCQUNULFVBQVU7d0JBQ1YsU0FBUztxQkFDVjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztpQkFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3JtaW9Nb2R1bGUgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBBdXRoU3RvcmUgfSBmcm9tICcuL0Bjb3JlL2F1dGgvYXV0aC5zdG9yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IER5bmFtaWNTZWFyY2hNb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLm1vZHVsZSc7XHJcbmltcG9ydCB7IER5bm1pY1RhYlBhZ2VNb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtdGFiLXBhZ2UvZHlubWljLXRhYi1wYWdlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9waXBlL3NoYXJlZC1waXBlcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEeW5hbWljUmliYm9uTW9kdWxlIH0gZnJvbSAnLi9keW5hbWljLXJpYmJvbi9keW5hbWljLXJpYmJvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBWaWV3WW91dGhQaG90b0NvbXBvbmVudCB9IGZyb20gJy4veW91dGgtcGhvdG8vdmlldy15b3V0aC1waG90by92aWV3LXlvdXRoLXBob3RvLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1ZpZXdZb3V0aFBob3RvQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsIFxyXG4gICAgRHluYW1pY1NlYXJjaE1vZHVsZSxcclxuICAgIER5bm1pY1RhYlBhZ2VNb2R1bGUsXHJcbiAgICBEeW5hbWljUmliYm9uTW9kdWxlLFxyXG4gICAgRm9ybWlvTW9kdWxlLFxyXG4gICAgU2hhcmVkUGlwZXNNb2R1bGVcclxuICAgIF0sXHJcbiAgcHJvdmlkZXJzOiBbIFxyXG4gICAgSHR0cENsaWVudCwgXHJcbiAgICBBdXRoU3RvcmUgIFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGljc0R5bmFtaWNNb2R1bGUge1xyXG5cclxuIH1cclxuIl19