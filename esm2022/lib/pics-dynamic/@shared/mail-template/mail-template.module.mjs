import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MailTemplateComponent } from './mail-template.component';
import { PrimengModule } from '../primeng.module';
import * as i0 from "@angular/core";
export class MailTemplateModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MailTemplateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MailTemplateModule, declarations: [MailTemplateComponent], imports: [CommonModule,
            PrimengModule,
            FormsModule,
            ReactiveFormsModule
            //  DirectivesModule
        ], exports: [MailTemplateComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MailTemplateModule, imports: [CommonModule,
            PrimengModule,
            FormsModule,
            ReactiveFormsModule
            //  DirectivesModule
        ] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MailTemplateModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrimengModule,
                        FormsModule,
                        ReactiveFormsModule
                        //  DirectivesModule
                    ],
                    declarations: [MailTemplateComponent],
                    exports: [MailTemplateComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbC10ZW1wbGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL21haWwtdGVtcGxhdGUvbWFpbC10ZW1wbGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFhbEQsTUFBTSxPQUFPLGtCQUFrQjt3R0FBbEIsa0JBQWtCO3lHQUFsQixrQkFBa0IsaUJBSGQscUJBQXFCLGFBTmxDLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixvQkFBb0I7cUJBR1oscUJBQXFCO3lHQUVwQixrQkFBa0IsWUFUM0IsWUFBWTtZQUNaLGFBQWE7WUFDYixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLG9CQUFvQjs7OzRGQUtYLGtCQUFrQjtrQkFYOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixvQkFBb0I7cUJBQ3JCO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWFpbFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWlsLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByaW1lbmdNb2R1bGUgfSBmcm9tICcuLi9wcmltZW5nLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFByaW1lbmdNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICAgIC8vICBEaXJlY3RpdmVzTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNYWlsVGVtcGxhdGVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtNYWlsVGVtcGxhdGVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlsVGVtcGxhdGVNb2R1bGUge31cclxuIl19