import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import { C as CompositePageComponent, b as DynamicPageComponent, P as PrimengModule } from './pics-core-dynamic-pics-core-dynamic-a4588d09.mjs';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';
import 'rxjs';
import '@formio/angular';
import 'rxjs/operators';
import '@angular/common/http';
import '@angular/forms';
import 'devextreme-angular';
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
import 'lodash';
import '@ng-bootstrap/ng-bootstrap';
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
import 'angular-gridster2';

const routes = [
    {
        path: ':compositePageId',
        component: CompositePageComponent,
    },
    {
        path: 'view/:compositePageId',
        component: CompositePageComponent,
    },
    {
        path: ':compositePageId/form/:pageId',
        component: DynamicPageComponent
    },
    {
        path: ':compositePageId/form/:pageId/:id',
        component: DynamicPageComponent
    },
];
class CompositePageRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CompositePageRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class CompositePageModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CompositePageModule, declarations: [CompositePageComponent], imports: [CommonModule, CompositePageRoutingModule, DynamicModule, PrimengModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageModule, imports: [CommonModule, CompositePageRoutingModule, DynamicModule, PrimengModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CompositePageComponent],
                    imports: [CommonModule, CompositePageRoutingModule, DynamicModule, PrimengModule]
                }]
        }] });

export { CompositePageModule };
//# sourceMappingURL=pics-core-dynamic-composite-page.module-a8d10f1f.mjs.map
