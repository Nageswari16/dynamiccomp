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
import { DynamicPageCleanupComponent } from './dynamic-pagecleanup/dynamic-pagecleanup.component';
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
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, declarations: [DynamicPageCleanupComponent,
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
                        DynamicPageCleanupComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHlubWljLXRhYi1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL2R5bmFtaWMtdGFiLXBhZ2UvZHlubWljLXRhYi1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFZLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzlHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQUEsT0FBTyxFQUFF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QUNsQixhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLHVCQUF1QjtZQUN2QixhQUFhOzs0RkFhTixtQkFBbUI7a0JBNUMvQixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDWiwyQkFBMkI7d0JBQzNCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsMEJBQTBCO3dCQUMxQiw0QkFBNEI7d0JBQzVCLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLGFBQWE7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxzQkFBc0I7NEJBQy9CLFFBQVEsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEtBQUssRUFBRTt5QkFDbkQ7d0JBQ0Qsd0JBQXdCO3dCQUN4QixVQUFVO3dCQUNWLGlCQUFpQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7aUJBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1RFUFBFUl9HTE9CQUxfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgSW5qZWN0b3IsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEeENoZWNrQm94TW9kdWxlLCBEeERhdGFHcmlkTW9kdWxlLCBEeFNlbGVjdEJveE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhcic7XHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGUgfSBmcm9tICduZy1keW5hbWljLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neE1hc2tNb2R1bGUgfSBmcm9tICduZ3gtbWFzayc7XHJcbmltcG9ydCB7IE5neGZVcGxvYWRlck1vZHVsZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyByZWdpc3RlckZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL2ZpbGUtdXBsb2FkLXdyYXBwZXIvZmlsZS11cGxvYWQtd3JhcHBlci5mb3JtaW8nO1xyXG5pbXBvcnQgeyByZWdpc3RlckJhc2ljRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4uL0BzaGFyZWQvZmlsZS11cGxvYWQtYmFzaWMvZmlsZS11cGxvYWQtYmFzaWMuZm9ybWlvJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJEYXRlUmFuZ2VDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL2RhdGUtUmFuZ2UvZGF0ZVJhbmdlLXdyYXBwZXIuZm9ybWlvJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJHbG9iYWxTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL2dsb2JhbC1zZWFyY2gtd3JhcHBlci9nbG9iYWwtc2VhcmNoLXdyYXBwZXIuZm9ybWlvJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL3JhdGluZy13cmFwcGVyL3JhdGluZy13cmFwcGVyLmZvcm1pbyc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUG9wdXBDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL3BvcHVwLXdyYXBwZXIvcG9wdXAtd3JhcHBlci5mb3JtaW8nO2ltcG9ydCB7IER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1wYWdlY2xlYW51cC9keW5hbWljLXBhZ2VjbGVhbnVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtdGFiL2R5bmFtaWMtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZHlubWljLXRhYi1wYWdlLnJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuaW1wb3J0IHsgUHJpbWVuZ01vZHVsZSB9IGZyb20gJy4uL0BzaGFyZWQvcHJpbWVuZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbFVJTW9kdWxlIH0gZnJvbSAnLi4vQHNoYXJlZC9tYXRlcmlhbC11aS9tYXRlcmlhbC11aS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRQaXBlc01vZHVsZSB9IGZyb20gJy4uL0Bjb3JlL3BpcGUvc2hhcmVkLXBpcGVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uU2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2Uvc3BlZWNoLXJlY29nbml0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPQ1JTZXJ2aWNlIH0gZnJvbSAnLi4vQGNvcmUvc2VydmljZS9vY3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL0BzaGFyZWQvcGFnZS1idWlsZGVyLXZpZXcvcGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9wdXBXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC9wb3B1cC13cmFwcGVyL3BvcHVwLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0aW5nV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4uL0BzaGFyZWQvcmF0aW5nLXdyYXBwZXIvcmF0aW5nLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL2ZpbGUtdXBsb2FkLXdyYXBwZXIvZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkQmFzaWNDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL2ZpbGUtdXBsb2FkLWJhc2ljL2ZpbGUtdXBsb2FkLWJhc2ljLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdsb2JhbFNlYXJjaFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuLi9Ac2hhcmVkL2dsb2JhbC1zZWFyY2gtd3JhcHBlci9nbG9iYWwtc2VhcmNoLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVJhbmdlV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4uL0BzaGFyZWQvZGF0ZS1SYW5nZS9kYXRlUmFuZ2Utd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21UYWdzU2VydmljZSB9IGZyb20gJy4uL0BzaGFyZWQvY3VzdG9tLWNvbXBvbmVudC9jdXN0b20tdGFncy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICcuLi9Ac2hhcmVkL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyWW91dGhGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi4vQHNoYXJlZC95b3V0aC1maWxlLXVwbG9hZC1wb3B1cC95b3V0aC1maWxlLXVwbG9hZC53cmFwcGVyLmZvcm1pbyc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50LCBcclxuICAgICAgRHluYW1pY1RhYkNvbXBvbmVudCxcclxuICAgICAgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50LFxyXG4gICAgICBQb3B1cFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICAgIFJhdGluZ1dyYXBwZXJDb21wb25lbnQsXHJcbiAgICAgIEZpbGVVcGxvYWRXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgICBHbG9iYWxTZWFyY2hXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgICBGaWxlVXBsb2FkQmFzaWNDb21wb25lbnQsXHJcbiAgICAgIERhdGVSYW5nZVdyYXBwZXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgRm9ybWlvTW9kdWxlLFxyXG4gICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgRHluYW1pY1RhYlBhZ2VSb3V0aW5nTW9kdWxlLFxyXG4gICAgICBEeERhdGFHcmlkTW9kdWxlLFxyXG4gICAgICBEeFNlbGVjdEJveE1vZHVsZSxcclxuICAgICAgRHhDaGVja0JveE1vZHVsZSxcclxuICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICBQcmltZW5nTW9kdWxlLFxyXG4gICAgICBBbGVydE1vZHVsZSxcclxuICAgICAgTWF0ZXJpYWxVSU1vZHVsZSxcclxuICAgICAgU2hhcmVkUGlwZXNNb2R1bGUsXHJcbiAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICBOZ3hmVXBsb2FkZXJNb2R1bGUsXHJcbiAgICAgIE5neE1hc2tNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAvLyBPY3JWYWxpZGF0aW9uTW9kdWxlLFxyXG4gICAgICBEeW5hbWljTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogU1RFUFBFUl9HTE9CQUxfT1BUSU9OUyxcclxuICAgICAgICAgICAgdXNlVmFsdWU6IHsgZGlzcGxheURlZmF1bHRJbmRpY2F0b3JUeXBlOiBmYWxzZSB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UsXHJcbiAgICAgICAgT0NSU2VydmljZSxcclxuICAgICAgICBDdXN0b21UYWdzU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHlubWljVGFiUGFnZU1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICByZWdpc3RlclBvcHVwQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIHJlZ2lzdGVyRGF0ZVJhbmdlQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIHJlZ2lzdGVyUmF0aW5nQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIHJlZ2lzdGVyRmlsZVVwbG9hZENvbXBvbmVudChpbmplY3Rvcik7XHJcbiAgICByZWdpc3Rlckdsb2JhbFNlYXJjaENvbXBvbmVudChpbmplY3Rvcik7XHJcbiAgICByZWdpc3RlckJhc2ljRmlsZVVwbG9hZENvbXBvbmVudChpbmplY3Rvcik7XHJcbiAgICByZWdpc3RlcllvdXRoRmlsZVVwbG9hZENvbXBvbmVudChpbmplY3Rvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==