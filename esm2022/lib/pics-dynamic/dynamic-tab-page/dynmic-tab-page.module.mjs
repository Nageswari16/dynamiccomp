import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { DynamicModule } from 'ng-dynamic-component';
import { NgxMaskModule } from 'ngx-mask';
import { NgxfUploaderModule } from 'ngxf-uploader';
import { registerFileUploadComponent } from '../@shared/file-upload-wrapper/file-upload-wrapper.formio';
import { registerBasicFileUploadComponent } from '../@shared/file-upload-basic/file-upload-basic.formio';
import { registerDateRangeComponent } from '../@shared/date-Range/dateRange-wrapper.formio';
import { registerGlobalSearchComponent } from '../@shared/global-search-wrapper/global-search-wrapper.formio';
import { registerRatingComponent } from '../@shared/rating-wrapper/rating-wrapper.formio';
import { registerPopupComponent } from '../@shared/popup-wrapper/popup-wrapper.formio';
import { FormPageComponent } from './form-page/form-page.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { DynamicTabPageRoutingModule } from './dynmic-tab-page.routing.module';
import { FormioModule } from '@formio/angular';
import { PrimengModule } from '../@shared/primeng.module';
import { MaterialUIModule } from '../@shared/material-ui/material-ui.module';
import { SharedPipesModule } from '../@core/pipe/shared-pipes.module';
import { SpeechRecognitionService } from '../@core/service/speech-recognition.service';
import { OCRService } from '../@core/service/ocr.service';
import { PageBuilderViewComponent } from '../@shared/page-builder-view/page-builder-view.component';
import { PopupWrapperComponent } from '../@shared/popup-wrapper/popup-wrapper.component';
import { RatingWrapperComponent } from '../@shared/rating-wrapper/rating-wrapper.component';
import { FileUploadWrapperComponent } from '../@shared/file-upload-wrapper/file-upload-wrapper.component';
import { FileUploadBasicComponent } from '../@shared/file-upload-basic/file-upload-basic.component';
import { GlobalSearchWrapperComponent } from '../@shared/global-search-wrapper/global-search-wrapper.component';
import { DateRangeWrapperComponent } from '../@shared/date-Range/dateRange-wrapper.component';
import { CustomTagsService } from '../@shared/custom-component/custom-tags.service';
import { AlertModule } from '../@shared/alert/alert.module';
import { registerYouthFileUploadComponent } from '../@shared/youth-file-upload-popup/youth-file-upload.wrapper.formio';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class DynmicTabPageModule {
    constructor(injector) {
        registerPopupComponent(injector);
        registerDateRangeComponent(injector);
        registerRatingComponent(injector);
        registerFileUploadComponent(injector);
        registerGlobalSearchComponent(injector);
        registerBasicFileUploadComponent(injector);
        registerYouthFileUploadComponent(injector);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, declarations: [FormPageComponent,
            DynamicPageComponent,
            DynamicTabComponent,
            PageBuilderViewComponent,
            PopupWrapperComponent,
            RatingWrapperComponent,
            FileUploadWrapperComponent,
            GlobalSearchWrapperComponent,
            FileUploadBasicComponent,
            DateRangeWrapperComponent], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            DynamicTabPageRoutingModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            CommonModule,
            PrimengModule,
            AlertModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule, i1.NgxMaskModule, 
            // OcrValidationModule,
            DynamicModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            SpeechRecognitionService,
            OCRService,
            CustomTagsService
        ], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            DynamicTabPageRoutingModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            CommonModule,
            PrimengModule,
            AlertModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot(),
            // OcrValidationModule,
            DynamicModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FormPageComponent,
                        DynamicPageComponent,
                        DynamicTabComponent,
                        PageBuilderViewComponent,
                        PopupWrapperComponent,
                        RatingWrapperComponent,
                        FileUploadWrapperComponent,
                        GlobalSearchWrapperComponent,
                        FileUploadBasicComponent,
                        DateRangeWrapperComponent
                    ],
                    imports: [
                        CommonModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DynamicTabPageRoutingModule,
                        DxDataGridModule,
                        DxSelectBoxModule,
                        DxCheckBoxModule,
                        CommonModule,
                        PrimengModule,
                        AlertModule,
                        MaterialUIModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot(),
                        // OcrValidationModule,
                        DynamicModule,
                    ],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        SpeechRecognitionService,
                        OCRService,
                        CustomTagsService
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHlubWljLXRhYi1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL2R5bmFtaWMtdGFiLXBhZ2UvZHlubWljLXRhYi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFZLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzlHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFB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WCxnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsdUJBQXVCO1lBQ3ZCLGFBQWE7OzRGQWFOLG1CQUFtQjtrQkE3Qy9CLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1Qix3QkFBd0I7d0JBQ3hCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsdUJBQXVCO3dCQUN2QixhQUFhO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsc0JBQXNCOzRCQUMvQixRQUFRLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUU7eUJBQ25EO3dCQUNELHdCQUF3Qjt3QkFDeEIsVUFBVTt3QkFDVixpQkFBaUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO2lCQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNURVBQRVJfR0xPQkFMX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIEluamVjdG9yLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRHhDaGVja0JveE1vZHVsZSwgRHhEYXRhR3JpZE1vZHVsZSwgRHhTZWxlY3RCb3hNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlIH0gZnJvbSAnbmctZHluYW1pYy1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnbmd4LW1hc2snO1xyXG5pbXBvcnQgeyBOZ3hmVXBsb2FkZXJNb2R1bGUgfSBmcm9tICduZ3hmLXVwbG9hZGVyJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9maWxlLXVwbG9hZC13cmFwcGVyL2ZpbGUtdXBsb2FkLXdyYXBwZXIuZm9ybWlvJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJCYXNpY0ZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL2ZpbGUtdXBsb2FkLWJhc2ljL2ZpbGUtdXBsb2FkLWJhc2ljLmZvcm1pbyc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRGF0ZVJhbmdlQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9kYXRlLVJhbmdlL2RhdGVSYW5nZS13cmFwcGVyLmZvcm1pbyc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR2xvYmFsU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9nbG9iYWwtc2VhcmNoLXdyYXBwZXIvZ2xvYmFsLXNlYXJjaC13cmFwcGVyLmZvcm1pbyc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9yYXRpbmctd3JhcHBlci9yYXRpbmctd3JhcHBlci5mb3JtaW8nO1xyXG5pbXBvcnQgeyByZWdpc3RlclBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9wb3B1cC13cmFwcGVyL3BvcHVwLXdyYXBwZXIuZm9ybWlvJztcclxuaW1wb3J0IHsgRm9ybVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tcGFnZS9mb3JtLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtcGFnZS9keW5hbWljLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1RhYkNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy10YWIvZHluYW1pYy10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9keW5taWMtdGFiLXBhZ2Uucm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb3JtaW9Nb2R1bGUgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBQcmltZW5nTW9kdWxlIH0gZnJvbSAnLi4vQHNoYXJlZC9wcmltZW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdGVyaWFsVUlNb2R1bGUgfSBmcm9tICcuLi9Ac2hhcmVkL21hdGVyaWFsLXVpL21hdGVyaWFsLXVpLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vQGNvcmUvcGlwZS9zaGFyZWQtcGlwZXMubW9kdWxlJztcclxuaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vQGNvcmUvc2VydmljZS9zcGVlY2gtcmVjb2duaXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE9DUlNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlL29jci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9wYWdlLWJ1aWxkZXItdmlldy9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3B1cFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL3BvcHVwLXdyYXBwZXIvcG9wdXAtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9yYXRpbmctd3JhcHBlci9yYXRpbmctd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4uL0BzaGFyZWQvZmlsZS11cGxvYWQtd3JhcHBlci9maWxlLXVwbG9hZC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRCYXNpY0NvbXBvbmVudCB9IGZyb20gJy4uL0BzaGFyZWQvZmlsZS11cGxvYWQtYmFzaWMvZmlsZS11cGxvYWQtYmFzaWMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2xvYmFsU2VhcmNoV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4uL0BzaGFyZWQvZ2xvYmFsLXNlYXJjaC13cmFwcGVyL2dsb2JhbC1zZWFyY2gtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9kYXRlLVJhbmdlL2RhdGVSYW5nZS13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1c3RvbVRhZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vQHNoYXJlZC9jdXN0b20tY29tcG9uZW50L2N1c3RvbS10YWdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJy4uL0BzaGFyZWQvYWxlcnQvYWxlcnQubW9kdWxlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJZb3V0aEZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL3lvdXRoLWZpbGUtdXBsb2FkLXBvcHVwL3lvdXRoLWZpbGUtdXBsb2FkLndyYXBwZXIuZm9ybWlvJztcclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICBGb3JtUGFnZUNvbXBvbmVudCxcclxuICAgICAgRHluYW1pY1BhZ2VDb21wb25lbnQsIFxyXG4gICAgICBEeW5hbWljVGFiQ29tcG9uZW50LFxyXG4gICAgICBQYWdlQnVpbGRlclZpZXdDb21wb25lbnQsXHJcbiAgICAgIFBvcHVwV3JhcHBlckNvbXBvbmVudCxcclxuICAgICAgUmF0aW5nV3JhcHBlckNvbXBvbmVudCxcclxuICAgICAgRmlsZVVwbG9hZFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICAgIEdsb2JhbFNlYXJjaFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICAgIEZpbGVVcGxvYWRCYXNpY0NvbXBvbmVudCxcclxuICAgICAgRGF0ZVJhbmdlV3JhcHBlckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICBGb3JtaW9Nb2R1bGUsXHJcbiAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICBEeW5hbWljVGFiUGFnZVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgIER4RGF0YUdyaWRNb2R1bGUsXHJcbiAgICAgIER4U2VsZWN0Qm94TW9kdWxlLFxyXG4gICAgICBEeENoZWNrQm94TW9kdWxlLFxyXG4gICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgIFByaW1lbmdNb2R1bGUsXHJcbiAgICAgIEFsZXJ0TW9kdWxlLFxyXG4gICAgICBNYXRlcmlhbFVJTW9kdWxlLFxyXG4gICAgICBTaGFyZWRQaXBlc01vZHVsZSxcclxuICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgIE5neGZVcGxvYWRlck1vZHVsZSxcclxuICAgICAgTmd4TWFza01vZHVsZS5mb3JSb290KCksXHJcbiAgICAgIC8vIE9jclZhbGlkYXRpb25Nb2R1bGUsXHJcbiAgICAgIER5bmFtaWNNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBTVEVQUEVSX0dMT0JBTF9PUFRJT05TLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogeyBkaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGU6IGZhbHNlIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uU2VydmljZSxcclxuICAgICAgICBPQ1JTZXJ2aWNlLFxyXG4gICAgICAgIEN1c3RvbVRhZ3NTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5taWNUYWJQYWdlTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHJlZ2lzdGVyUG9wdXBDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgcmVnaXN0ZXJEYXRlUmFuZ2VDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgcmVnaXN0ZXJSYXRpbmdDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgcmVnaXN0ZXJGaWxlVXBsb2FkQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIHJlZ2lzdGVyR2xvYmFsU2VhcmNoQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIHJlZ2lzdGVyQmFzaWNGaWxlVXBsb2FkQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIHJlZ2lzdGVyWW91dGhGaWxlVXBsb2FkQ29tcG9uZW50KGluamVjdG9yKTtcclxuICB9XHJcbn1cclxuIl19