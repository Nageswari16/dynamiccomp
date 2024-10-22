import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../@shared/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../@core/directives/directives.module';
import { DocumentUploadComponent } from './document-upload.component';
import { NgxfUploaderModule } from 'ngxf-uploader';
import { MailTemplateModule } from '../../@shared/mail-template/mail-template.module';
import * as i0 from "@angular/core";
export class DocumentUploadModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DocumentUploadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DocumentUploadModule, declarations: [DocumentUploadComponent], imports: [CommonModule,
            PrimengModule,
            FormsModule,
            MailTemplateModule,
            DirectivesModule,
            ReactiveFormsModule,
            NgxfUploaderModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DocumentUploadModule, imports: [CommonModule,
            PrimengModule,
            FormsModule,
            MailTemplateModule,
            DirectivesModule,
            ReactiveFormsModule,
            NgxfUploaderModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DocumentUploadModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DocumentUploadComponent],
                    imports: [
                        CommonModule,
                        PrimengModule,
                        FormsModule,
                        MailTemplateModule,
                        DirectivesModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule
                    ],
                    schemas: [NO_ERRORS_SCHEMA]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtdXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL3lvdXRoLXBob3RvL2RvY3VtZW50LXVwbG9hZC9kb2N1bWVudC11cGxvYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUcsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQWV0RixNQUFNLE9BQU8sb0JBQW9CO3dHQUFwQixvQkFBb0I7eUdBQXBCLG9CQUFvQixpQkFaaEIsdUJBQXVCLGFBRXBDLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLGtCQUFrQjt5R0FJVCxvQkFBb0IsWUFWN0IsWUFBWTtZQUNaLGFBQWE7WUFDYixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsa0JBQWtCOzs0RkFJVCxvQkFBb0I7a0JBYmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQcmltZW5nTW9kdWxlIH0gZnJvbSAnLi4vLi4vQHNoYXJlZC9wcmltZW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vQGNvcmUvZGlyZWN0aXZlcy9kaXJlY3RpdmVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IERvY3VtZW50VXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9kb2N1bWVudC11cGxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4ZlVwbG9hZGVyTW9kdWxlIH0gZnJvbSAnbmd4Zi11cGxvYWRlcic7XHJcbmltcG9ydCB7IE1haWxUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL0BzaGFyZWQvbWFpbC10ZW1wbGF0ZS9tYWlsLXRlbXBsYXRlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0RvY3VtZW50VXBsb2FkQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBQcmltZW5nTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYWlsVGVtcGxhdGVNb2R1bGUsXHJcbiAgICBEaXJlY3RpdmVzTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE5neGZVcGxvYWRlck1vZHVsZVxyXG4gIF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFVwbG9hZE1vZHVsZSB7fVxyXG4iXX0=