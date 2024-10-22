import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';
// import { AngularSplitModule } from 'angular-split';
import { DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { DynamicModule } from 'ng-dynamic-component';
import { DynamicSearchComponent } from './dynamic-search.component';
// import { DynamicSearchRoutingModule } from './dynamic-search.routing.module';
import { MaterialUIModule } from '../@shared/material-ui/material-ui.module';
import { GridListModule } from '../@shared/grid-list/grid-list.module';
import { PrimengModule } from '../@shared/primeng.module';
import { DynamicSearchRoutingModule } from './dynamic-search.routing.module';
import { AlertModule } from '../@shared/alert/alert.module';
import * as i0 from "@angular/core";
export class DynamicSearchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, declarations: [DynamicSearchComponent], imports: [CommonModule,
            FormioModule,
            AlertModule,
            FormsModule,
            DynamicSearchRoutingModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            GridListModule,
            DynamicModule,
            PrimengModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, imports: [CommonModule,
            FormioModule,
            AlertModule,
            FormsModule,
            DynamicSearchRoutingModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            GridListModule,
            DynamicModule,
            PrimengModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicSearchComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        AlertModule,
                        FormsModule,
                        DynamicSearchRoutingModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWFyY2gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy1zZWFyY2gvZHluYW1pYy1zZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0Msc0RBQXNEO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxnRkFBZ0Y7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBd0I1RCxNQUFNLE9BQU8sbUJBQW1CO3dHQUFuQixtQkFBbUI7eUdBQW5CLG1CQUFtQixpQkFwQmYsc0JBQXNCLGFBRW5DLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLFdBQVc7WUFDWCwwQkFBMEI7WUFDMUIsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGFBQWE7eUdBTUosbUJBQW1CLFlBbEI1QixZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsMEJBQTBCO1lBQzFCLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGFBQWE7WUFDYixhQUFhOzs0RkFNSixtQkFBbUI7a0JBckIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCwwQkFBMEI7d0JBQzFCLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDbkQsU0FBUyxFQUFHLEVBQ1g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhclNwbGl0TW9kdWxlIH0gZnJvbSAnYW5ndWxhci1zcGxpdCc7XHJcbmltcG9ydCB7IER4Q2hlY2tCb3hNb2R1bGUsIER4RGF0YUdyaWRNb2R1bGUsIER4U2VsZWN0Qm94TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyJztcclxuaW1wb3J0IHsgRHluYW1pY01vZHVsZSB9IGZyb20gJ25nLWR5bmFtaWMtY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1zZWFyY2guY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgRHluYW1pY1NlYXJjaFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtc2VhcmNoLnJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxVSU1vZHVsZSB9IGZyb20gJy4uL0BzaGFyZWQvbWF0ZXJpYWwtdWkvbWF0ZXJpYWwtdWkubW9kdWxlJztcclxuaW1wb3J0IHsgR3JpZExpc3RNb2R1bGUgfSBmcm9tICcuLi9Ac2hhcmVkL2dyaWQtbGlzdC9ncmlkLWxpc3QubW9kdWxlJztcclxuaW1wb3J0IHsgUHJpbWVuZ01vZHVsZSB9IGZyb20gJy4uL0BzaGFyZWQvcHJpbWVuZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEeW5hbWljU2VhcmNoUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZHluYW1pYy1zZWFyY2gucm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJy4uL0BzaGFyZWQvYWxlcnQvYWxlcnQubW9kdWxlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0R5bmFtaWNTZWFyY2hDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1pb01vZHVsZSxcclxuICAgIEFsZXJ0TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBEeW5hbWljU2VhcmNoUm91dGluZ01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRlcmlhbFVJTW9kdWxlLFxyXG4gICAgRHhEYXRhR3JpZE1vZHVsZSxcclxuICAgIER4U2VsZWN0Qm94TW9kdWxlLFxyXG4gICAgRHhDaGVja0JveE1vZHVsZSxcclxuICAgIEdyaWRMaXN0TW9kdWxlLFxyXG4gICAgRHluYW1pY01vZHVsZSxcclxuICAgIFByaW1lbmdNb2R1bGVcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BXSxcclxuICBwcm92aWRlcnMgOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1NlYXJjaE1vZHVsZSB7fVxyXG4iXX0=