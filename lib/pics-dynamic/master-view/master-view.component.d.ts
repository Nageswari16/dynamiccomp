import { Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridsterConfig } from 'angular-gridster2';
import { DynamicTabPageService } from '../@core/service/dynamic-tab-page-service';
import { ComponentState } from '../@shared/master-view-state/master-view.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../@core/core.state';
import { AlertService } from '../@core/service/alert.service';
import * as i0 from "@angular/core";
export declare class MasterViewComponent implements OnInit {
    private route;
    private dynamicTabPageService;
    private store;
    options: GridsterConfig;
    masterViewWidget$: Observable<ComponentState[]>;
    masterPageId: any;
    alertService: AlertService;
    editMode: boolean;
    constructor(injector: Injector, route: ActivatedRoute, dynamicTabPageService: DynamicTabPageService, store: Store<AppState>);
    ngOnInit(): void;
    getDynamicPage(masterPageId: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasterViewComponent, "app-master-view", never, { "masterPageId": { "alias": "masterPageId"; "required": false; }; }, {}, never, never, false, never>;
}
