import { Injector, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenu } from 'primeng/tabmenu';
import { Observable } from 'rxjs';
import { LocalService } from '../../@core/service/local.service';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import * as i0 from "@angular/core";
export declare class DynamicTabComponent implements OnInit, OnDestroy {
    private dynamicTabPageService;
    private route;
    private router;
    items: MenuItem[];
    pages: MenuItem[];
    activeItem: MenuItem;
    tabPageId: string;
    formId: string;
    currentRouterLink: string;
    localstorage: LocalService;
    navigateData: any;
    parentGridPage: any;
    private destroy$;
    tab: TabMenu;
    showTabs: boolean;
    constructor(injector: Injector, dynamicTabPageService: DynamicTabPageService, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    routeToLandingPage(): void;
    getDynamicTab(): void;
    getActiveVersion(page: any): Observable<any>;
    setRoutetoTabs(rows: any, pageId: any): void;
    redirect(): void;
    ngOnDestroy(): void;
    onTabItemClick(tab: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicTabComponent, "app-dynamic-tab", never, {}, {}, never, never, false, never>;
}
