import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';
import { DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import { DynamicModule } from 'ng-dynamic-component';
import { D as DynamicSearchCleanupComponent, A as AlertModule, M as MaterialUIModule, G as GridListModule, P as PrimengModule } from './pics-core-dynamic-pics-core-dynamic-8f313ac9.mjs';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import 'rxjs';
import 'rxjs/operators';
import '@angular/common/http';
import '@angular/material/dialog';
import '@ngrx/store';
import 'devextreme/data/custom_store';
import 'devextreme/pdf_exporter';
import 'jspdf';
import 'moment/moment';
import 'primeng/multiselect';
import 'print-js';
import 'rxjs/add/operator/map';
import 'ngxf-uploader';
import 'rxjs/internal/observable/throwError';
import '@ngrx/router-store';
import '@angular/material/button';
import '@angular/material/icon';
import '@angular/material/input';
import '@angular/material/form-field';
import '@angular/material/menu';
import '@angular/material/tooltip';
import 'devextreme-angular/ui/nested';
import 'devextreme-angular/core';
import 'primeng/accordion';
import 'primeng/api';
import 'primeng/dropdown';
import 'primeng/inputtextarea';
import '@angular/material/bottom-sheet';
import '@angular/material/card';
import '@angular/material/checkbox';
import '@angular/material/core';
import '@angular/material/datepicker';
import '@angular/material/radio';
import '@angular/material/select';
import '@angular/material/slide-toggle';
import '@angular/material/sort';
import '@angular/material/stepper';
import '@angular/material/table';
import '@angular/material/tabs';
import 'ngx-mask';
import 'ngx-pagination';
import '@angular/platform-browser';
import 'primeng/tabmenu';
import 'primeng/message';
import 'primeng/table';
import 'primeng/inputtext';
import 'primeng/calendar';
import 'primeng/checkbox';
import 'primeng/editor';
import 'primeng/fieldset';
import 'primeng/button';
import 'primeng/radiobutton';
import 'primeng/inputmask';
import 'primeng/steps';
import 'primeng/card';
import 'primeng/toast';
import 'primeng/ripple';
import 'primeng/avatar';
import 'primeng/badge';
import 'primeng/inputswitch';
import 'primeng/confirmdialog';
import 'primeng/treeselect';
import 'primeng/progressspinner';
import 'primeng/speeddial';
import 'primeng/orderlist';
import 'primeng/dialog';
import 'primeng/fileupload';
import 'primeng/password';
import 'primeng/knob';
import 'primeng/tabview';
import 'primeng/sidebar';
import 'primeng/panel';
import '@angular/cdk/drag-drop';
import 'primeng/autocomplete';
import '@angular/cdk/stepper';
import '@angular/elements';
import 'formiojs';
import 'lodash';
import '@ng-bootstrap/ng-bootstrap';
import 'angular-gridster2';

const routes = [
    {
        path: 'search/:pageId',
        component: DynamicSearchCleanupComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearchcleanup_module; }).then(m => m.DynamicSearchCleanupModule)
    },
    {
        path: 'view/:pageId',
        component: DynamicSearchCleanupComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearchcleanup_module; }).then(m => m.DynamicSearchCleanupModule)
    },
    {
        path: 'search/:pageId/:pageSaveID',
        component: DynamicSearchCleanupComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearchcleanup_module; }).then(m => m.DynamicSearchCleanupModule)
    }
];
class DynamicSearchCleanupRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchCleanupRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class DynamicSearchCleanupModule {
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

var dynamicSearchcleanup_module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DynamicSearchCleanupModule: DynamicSearchCleanupModule
});

export { DynamicSearchCleanupModule };
//# sourceMappingURL=pics-core-dynamic-dynamic-searchcleanup.module-cc03bb40.mjs.map
