import { Injector, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicTabPageService } from '../@core/service/dynamic-tab-page-service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../@core/core.state';
import { AlertService } from '../@core/service/alert.service';
import { LocalService } from '../@core/service/local.service';
import { ComponentState } from '../@shared/master-view-state/master-view.state';
import * as i0 from "@angular/core";
export declare class CompositePageComponent implements OnInit, OnDestroy {
    private route;
    private dynamicTabPageService;
    private store;
    CompositePageWidget$: Observable<ComponentState[]>;
    compositePageId: any;
    id: any;
    alertService: AlertService;
    storage: LocalService;
    editMode: boolean;
    activeIndexes: number[];
    constructor(injector: Injector, route: ActivatedRoute, dynamicTabPageService: DynamicTabPageService, store: Store<AppState>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getDynamicPage(compositePageId: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositePageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CompositePageComponent, "app-composite-page", never, { "compositePageId": { "alias": "compositePageId"; "required": false; }; }, {}, never, never, false, never>;
}
