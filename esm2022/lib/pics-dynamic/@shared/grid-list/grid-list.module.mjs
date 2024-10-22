import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxfUploaderModule } from 'ngxf-uploader';
import { GridListComponent } from './grid-list.component';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { SharedPipesModule } from '../../@core/pipe/shared-pipes.module';
import { DirectivesModule } from '../../@core/directives/directives.module';
import { AlertModule } from '../alert/alert.module';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class GridListModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, declarations: [GridListComponent], imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            DirectivesModule,
            NgxfUploaderModule,
            AlertModule, i1.NgxMaskModule], exports: [GridListComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            DirectivesModule,
            NgxfUploaderModule,
            AlertModule,
            NgxMaskModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GridListComponent],
                    imports: [
                        CommonModule,
                        MaterialUIModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DirectivesModule,
                        NgxfUploaderModule,
                        AlertModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [GridListComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0BzaGFyZWQvZ3JpZC1saXN0L2dyaWQtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBbUJwRCxNQUFNLE9BQU8sY0FBYzt3R0FBZCxjQUFjO3lHQUFkLGNBQWMsaUJBaEJWLGlCQUFpQixhQUU5QixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixXQUFXLCtCQUdILGlCQUFpQjt5R0FFaEIsY0FBYyxZQWR2QixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsYUFBYSxDQUFDLE9BQU8sRUFBRTs7NEZBSWQsY0FBYztrQkFqQjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGFBQWEsQ0FBQyxPQUFPLEVBQUU7cUJBQ3hCO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEeERhdGFHcmlkTW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyJztcclxuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gJ25neC1tYXNrJztcclxuaW1wb3J0IHsgTmd4UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25neC1wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgTmd4ZlVwbG9hZGVyTW9kdWxlIH0gZnJvbSAnbmd4Zi11cGxvYWRlcic7XHJcbmltcG9ydCB7IEdyaWRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0ZXJpYWxVSU1vZHVsZSB9IGZyb20gJy4uL21hdGVyaWFsLXVpL21hdGVyaWFsLXVpLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcGlwZS9zaGFyZWQtcGlwZXMubW9kdWxlJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlc01vZHVsZSB9IGZyb20gJy4uLy4uL0Bjb3JlL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJy4uL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0dyaWRMaXN0Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRlcmlhbFVJTW9kdWxlLFxyXG4gICAgTmd4UGFnaW5hdGlvbk1vZHVsZSxcclxuICAgIER4RGF0YUdyaWRNb2R1bGUsXHJcbiAgICBTaGFyZWRQaXBlc01vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIERpcmVjdGl2ZXNNb2R1bGUsXHJcbiAgICBOZ3hmVXBsb2FkZXJNb2R1bGUsXHJcbiAgICBBbGVydE1vZHVsZSxcclxuICAgIE5neE1hc2tNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBleHBvcnRzOiBbR3JpZExpc3RDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZExpc3RNb2R1bGUge31cclxuIl19