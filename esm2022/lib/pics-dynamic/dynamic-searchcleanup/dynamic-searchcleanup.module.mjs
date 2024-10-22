import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';
// import { AngularSplitModule } from 'angular-split';
import { DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { DynamicModule } from 'ng-dynamic-component';
// import { DynamicSearchRoutingModule } from './dynamic-search.routing.module';
import { MaterialUIModule } from '../@shared/material-ui/material-ui.module';
import { GridListModule } from '../@shared/grid-list/grid-list.module';
import { PrimengModule } from '../@shared/primeng.module';
import { DynamicSearchCleanupRoutingModule } from './dynamic-searchcleanup.routing.module';
import { AlertModule } from '../@shared/alert/alert.module';
import { DynamicSearchCleanupComponent } from './dynamic-searchcleanup.component';
import * as i0 from "@angular/core";
export class DynamicSearchCleanupModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupModule, declarations: [DynamicSearchCleanupComponent], imports: [CommonModule,
            FormioModule,
            AlertModule,
            FormsModule,
            DynamicSearchCleanupRoutingModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            GridListModule,
            DynamicModule,
            PrimengModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupModule, imports: [CommonModule,
            FormioModule,
            AlertModule,
            FormsModule,
            DynamicSearchCleanupRoutingModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            GridListModule,
            DynamicModule,
            PrimengModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicSearchCleanupComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        AlertModule,
                        FormsModule,
                        DynamicSearchCleanupRoutingModule,
                        ReactiveFormsModule,
                        MaterialUIModule,
                        DxDataGridModule,
                        DxSelectBoxModule,
                        DxCheckBoxModule,
                        GridListModule,
                        DynamicModule,
                        PrimengModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    providers: []
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWFyY2hjbGVhbnVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL2R5bmFtaWMtc2VhcmNoY2xlYW51cC9keW5hbWljLXNlYXJjaGNsZWFudXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0Msc0RBQXNEO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxnRkFBZ0Y7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBd0JsRixNQUFNLE9BQU8sMEJBQTBCO3dHQUExQiwwQkFBMEI7eUdBQTFCLDBCQUEwQixpQkFwQnRCLDZCQUE2QixhQUUxQyxZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsaUNBQWlDO1lBQ2pDLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGFBQWE7WUFDYixhQUFhO3lHQU1KLDBCQUEwQixZQWxCbkMsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVztZQUNYLGlDQUFpQztZQUNqQyxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsYUFBYTs7NEZBTUosMEJBQTBCO2tCQXJCdEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDN0MsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsaUNBQWlDO3dCQUNqQyxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ25ELFNBQVMsRUFBRyxFQUNYO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1pb01vZHVsZSB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJTcGxpdE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItc3BsaXQnO1xyXG5pbXBvcnQgeyBEeENoZWNrQm94TW9kdWxlLCBEeERhdGFHcmlkTW9kdWxlLCBEeFNlbGVjdEJveE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhcic7XHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGUgfSBmcm9tICduZy1keW5hbWljLWNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IER5bmFtaWNTZWFyY2hSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9keW5hbWljLXNlYXJjaC5yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdGVyaWFsVUlNb2R1bGUgfSBmcm9tICcuLi9Ac2hhcmVkL21hdGVyaWFsLXVpL21hdGVyaWFsLXVpLm1vZHVsZSc7XHJcbmltcG9ydCB7IEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnLi4vQHNoYXJlZC9ncmlkLWxpc3QvZ3JpZC1saXN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFByaW1lbmdNb2R1bGUgfSBmcm9tICcuLi9Ac2hhcmVkL3ByaW1lbmcubW9kdWxlJztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaENsZWFudXBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9keW5hbWljLXNlYXJjaGNsZWFudXAucm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJy4uL0BzaGFyZWQvYWxlcnQvYWxlcnQubW9kdWxlJztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1pb01vZHVsZSxcclxuICAgIEFsZXJ0TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBEeW5hbWljU2VhcmNoQ2xlYW51cFJvdXRpbmdNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxVSU1vZHVsZSxcclxuICAgIER4RGF0YUdyaWRNb2R1bGUsXHJcbiAgICBEeFNlbGVjdEJveE1vZHVsZSxcclxuICAgIER4Q2hlY2tCb3hNb2R1bGUsXHJcbiAgICBHcmlkTGlzdE1vZHVsZSxcclxuICAgIER5bmFtaWNNb2R1bGUsXHJcbiAgICBQcmltZW5nTW9kdWxlXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQV0sXHJcbiAgcHJvdmlkZXJzIDogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNTZWFyY2hDbGVhbnVwTW9kdWxlIHt9XHJcbiJdfQ==