import { Component, ViewChild } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { forkJoin, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { LocalService } from '../../@core/service/local.service';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/dynamic-tab-page-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "primeng/tabmenu";
export class DynamicTabComponent {
    dynamicTabPageService;
    route;
    router;
    items = [];
    pages = [];
    activeItem;
    tabPageId;
    formId;
    currentRouterLink;
    localstorage;
    navigateData;
    parentGridPage;
    destroy$ = new Subject();
    tab;
    showTabs = false;
    constructor(injector, dynamicTabPageService, route, router) {
        this.dynamicTabPageService = dynamicTabPageService;
        this.route = route;
        this.router = router;
        this.tabPageId = this.route.snapshot.paramMap.get('tabId');
        this.localstorage = injector.get(LocalService);
        this.navigateData = this.router?.getCurrentNavigation()?.extras?.state;
        if (this.tabPageId) {
            this.localstorage.setItem('tabpageid', this.tabPageId);
        }
    }
    ngOnInit() {
        this.route.params
            .pipe(filter(params => !isNaN(params['tabId'])), tap(params => (this.tabPageId = params['tabId'])), takeUntil(this.destroy$))
            .subscribe(_ => this.getDynamicTab());
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
            setTimeout(() => {
                const index = this.items.findIndex((t) => t.id === this.activeItem.id);
                [...this.tab?.content.nativeElement.querySelectorAll('ul li')].forEach((e) => e.classList.remove('p-highlight'));
                [...this.tab?.content.nativeElement.querySelectorAll('ul li a')].forEach((e) => e.classList.remove('p-menuitem-link-active'));
                if (index > -1) {
                    this.tab.content.nativeElement.querySelector(`ul li:nth-child(${index + 1})`).classList.add('p-highlight');
                    this.tab.content.nativeElement.querySelector(`ul li:nth-child(${index + 1}) a`).classList.add('p-menuitem-link-active');
                }
            }, 200);
        });
    }
    routeToLandingPage() {
        const tabIndex = this.localstorage.getItem('tabIndex') ? this.localstorage.getItem('tabIndex') : '0';
        //Prevent Navigation failing while access to diffrent tabpages with diffrent tabindex.
        const currentRoute = this.items[Number(tabIndex)] ? this.items[Number(tabIndex)] : this.items[0];
        this.currentRouterLink = currentRoute?.routerLink;
        const backToGridPage = this.localstorage.getItem('backToGridPage');
        if (backToGridPage) {
            this.parentGridPage = JSON.parse(backToGridPage)?.name;
        }
        this.localstorage.setItem('navigationState', JSON.stringify(this.navigateData));
        this.activeItem = currentRoute;
        this.router.navigate([`${currentRoute.routerLink}`], { relativeTo: this.route, state: this.navigateData });
    }
    getDynamicTab() {
        this.dynamicTabPageService
            .getActivePage(this.tabPageId)
            .pipe(filter((response) => !!response.data.tabconfig), map((response) => typeof response.data.tabconfig === 'string' ?
            JSON.parse(response.data.tabconfig) : response.data.tabconfig), tap((tabConfig) => {
            this.pages = tabConfig.map(page => {
                return {
                    id: page.id,
                    label: page.name,
                    routerLink: '',
                    icon: page?.icon ? page?.icon : ''
                };
            });
        }), switchMap((tabConfig) => {
            const observables = tabConfig.map(page => {
                return this.getActiveVersion(page);
            });
            return forkJoin(observables);
        }), takeUntil(this.destroy$))
            .subscribe(_ => {
            this.showTabs = true;
            this.routeToLandingPage();
        });
    }
    getActiveVersion(page) {
        return this.dynamicTabPageService.getDynamicPage(page.id).pipe(tap(response => this.setRoutetoTabs(response['data'], page.id)), takeUntil(this.destroy$));
    }
    setRoutetoTabs(rows, pageId) {
        this.items = this.pages
            .map(a => {
            if (a.id === pageId && a.routerLink === '') {
                if (rows[0].pagetype === 'BGP') {
                    a.routerLink = a.id === rows[0].id ? `dynamic-search/${rows[0].activeVersion.id}` : '';
                }
                else {
                    a.routerLink = a.id === rows[0].id ? `page/${pageId}` : '';
                }
            }
            return a; // Return the modified item
        })
            .filter(x => x.routerLink !== ''); // Filter out items with an empty routerLink
    }
    redirect() {
        const id = this.localstorage.getItem('version-id');
        this.router.navigate([`pages/page-design/versions/${id}`]);
        const parentGridPageInfo = JSON.parse(this.localstorage.getItem('backToGridPage'));
        this.router.navigate([`/pages/dynamic-search/search/${parentGridPageInfo.id}`], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.localstorage.removeItem('YouthID');
        this.localstorage.removeItem('navigationState');
        this.destroy$.next();
        this.destroy$.complete();
    }
    onTabItemClick(tab) {
        this.activeItem = this.items.find((t) => t.id === tab?.activeItem?.id);
        this.router.navigate([`${tab.activeItem.routerLink}`], {
            relativeTo: this.route,
            state: this.navigateData
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabComponent, deps: [{ token: i0.Injector }, { token: i1.DynamicTabPageService }, { token: i2.ActivatedRoute }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicTabComponent, selector: "app-dynamic-tab", viewQueries: [{ propertyName: "tab", first: true, predicate: ["tab"], descendants: true }], ngImport: i0, template: "<div class=\"rbac-tab\" *ngIf=\"showTabs\">\r\n  <p-tabMenu\r\n    [model]=\"items\"\r\n    #tab\r\n    (click)=\"onTabItemClick(tab)\"\r\n    [scrollable]=\"true\"\r\n    [activeItem]=\"activeItem\"></p-tabMenu>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [".rbac-tab .p-tabmenu-nav .p-menuitem-text{line-height:1;font-size:13px}.rbac-tab .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link{background:#fff;border-color:#2c2863;color:#2c2863;font-weight:700}\n"], dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i4.TabMenu, selector: "p-tabMenu", inputs: ["model", "activeItem", "scrollable", "popup", "style", "styleClass", "ariaLabel", "ariaLabelledBy"], outputs: ["activeItemChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-tab', template: "<div class=\"rbac-tab\" *ngIf=\"showTabs\">\r\n  <p-tabMenu\r\n    [model]=\"items\"\r\n    #tab\r\n    (click)=\"onTabItemClick(tab)\"\r\n    [scrollable]=\"true\"\r\n    [activeItem]=\"activeItem\"></p-tabMenu>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [".rbac-tab .p-tabmenu-nav .p-menuitem-text{line-height:1;font-size:13px}.rbac-tab .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link{background:#fff;border-color:#2c2863;color:#2c2863;font-weight:700}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.DynamicTabPageService }, { type: i2.ActivatedRoute }, { type: i2.Router }]; }, propDecorators: { tab: [{
                type: ViewChild,
                args: ['tab']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9keW5hbWljLXRhYi9keW5hbWljLXRhYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtdGFiL2R5bmFtaWMtdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQStCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQWtCLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxRQUFRLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7QUFRakUsTUFBTSxPQUFPLG1CQUFtQjtJQWdCcEI7SUFDQTtJQUNBO0lBakJWLEtBQUssR0FBZSxFQUFFLENBQUM7SUFDdkIsS0FBSyxHQUFlLEVBQUUsQ0FBQztJQUN2QixVQUFVLENBQVk7SUFDdEIsU0FBUyxDQUFTO0lBQ2xCLE1BQU0sQ0FBUztJQUNmLGlCQUFpQixDQUFTO0lBQzFCLFlBQVksQ0FBZTtJQUMzQixZQUFZLENBQU07SUFDbEIsY0FBYyxDQUFNO0lBQ1osUUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFDckIsR0FBRyxDQUFVO0lBQy9CLFFBQVEs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QUFFLEtBQUssR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFO1lBQ3JELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztZQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt3R0FuSlUsbUJBQW1COzRGQUFuQixtQkFBbUIsbUpDZGhDLHVRQVNBOzs0RkRLYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsaUJBQWlCO3FMQWVULEdBQUc7c0JBQXBCLFNBQVM7dUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBUYWJNZW51IH0gZnJvbSAncHJpbWVuZy90YWJtZW51JztcclxuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWR5bmFtaWMtdGFiJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy10YWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtdGFiLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaXRlbXM6IE1lbnVJdGVtW10gPSBbXTtcclxuICBwYWdlczogTWVudUl0ZW1bXSA9IFtdO1xyXG4gIGFjdGl2ZUl0ZW0hOiBNZW51SXRlbTtcclxuICB0YWJQYWdlSWQ6IHN0cmluZztcclxuICBmb3JtSWQ6IHN0cmluZztcclxuICBjdXJyZW50Um91dGVyTGluazogc3RyaW5nO1xyXG4gIGxvY2Fsc3RvcmFnZTogTG9jYWxTZXJ2aWNlO1xyXG4gIG5hdmlnYXRlRGF0YTogYW55O1xyXG4gIHBhcmVudEdyaWRQYWdlOiBhbnk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQFZpZXdDaGlsZCgndGFiJykgdGFiOiBUYWJNZW51O1xyXG4gIHNob3dUYWJzID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBkeW5hbWljVGFiUGFnZVNlcnZpY2U6IER5bmFtaWNUYWJQYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge1xyXG4gICAgdGhpcy50YWJQYWdlSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgndGFiSWQnKTtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlID0gaW5qZWN0b3IuZ2V0PExvY2FsU2VydmljZT4oTG9jYWxTZXJ2aWNlKTtcclxuICAgIHRoaXMubmF2aWdhdGVEYXRhID0gdGhpcy5yb3V0ZXI/LmdldEN1cnJlbnROYXZpZ2F0aW9uKCk/LmV4dHJhcz8uc3RhdGU7XHJcbiAgICBpZiAodGhpcy50YWJQYWdlSWQpIHtcclxuICAgICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgndGFicGFnZWlkJywgdGhpcy50YWJQYWdlSWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIocGFyYW1zID0+XHJcbiAgICAgICAgICAgIWlzTmFOKHBhcmFtc1sndGFiSWQnXSlcclxuICAgICAgICAgICksXHJcbiAgICAgICAgdGFwKHBhcmFtcyA9PiBcclxuICAgICAgICAgICh0aGlzLnRhYlBhZ2VJZCA9IHBhcmFtc1sndGFiSWQnXSlcclxuICAgICAgICApLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiBcclxuICAgICAgICB0aGlzLmdldER5bmFtaWNUYWIoKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50KSA9PiBcclxuICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZFxyXG4gICAgICApXHJcbiAgICAgICkuc3Vic2NyaWJlKChfKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KCh0KSA9PiB0LmlkID09PSB0aGlzLmFjdGl2ZUl0ZW0uaWQpO1xyXG4gICAgICAgICAgWy4uLnRoaXMudGFiPy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwgbGknKV0uZm9yRWFjaCgoZSkgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKCdwLWhpZ2hsaWdodCcpKTtcclxuICAgICAgICAgIFsuLi50aGlzLnRhYj8uY29udGVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsIGxpIGEnKV0uZm9yRWFjaCgoZSkgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKCdwLW1lbnVpdGVtLWxpbmstYWN0aXZlJykpO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy50YWIuY29udGVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYHVsIGxpOm50aC1jaGlsZCgke2luZGV4ICsgMX0pYCkuY2xhc3NMaXN0LmFkZCgncC1oaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgdGhpcy50YWIuY29udGVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYHVsIGxpOm50aC1jaGlsZCgke2luZGV4ICsgMX0pIGFgKS5jbGFzc0xpc3QuYWRkKCdwLW1lbnVpdGVtLWxpbmstYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByb3V0ZVRvTGFuZGluZ1BhZ2UoKSB7XHJcbiAgICBjb25zdCB0YWJJbmRleCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3RhYkluZGV4JykgPyB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCd0YWJJbmRleCcpIDogJzAnO1xyXG4gICAgLy9QcmV2ZW50IE5hdmlnYXRpb24gZmFpbGluZyB3aGlsZSBhY2Nlc3MgdG8gZGlmZnJlbnQgdGFicGFnZXMgd2l0aCBkaWZmcmVudCB0YWJpbmRleC5cclxuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IHRoaXMuaXRlbXNbTnVtYmVyKHRhYkluZGV4KV0gPyB0aGlzLml0ZW1zW051bWJlcih0YWJJbmRleCldIDogdGhpcy5pdGVtc1swXTtcclxuICAgIHRoaXMuY3VycmVudFJvdXRlckxpbmsgPSBjdXJyZW50Um91dGU/LnJvdXRlckxpbms7XHJcbiAgICBjb25zdCBiYWNrVG9HcmlkUGFnZSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2JhY2tUb0dyaWRQYWdlJyk7XHJcbiAgICBpZiAoYmFja1RvR3JpZFBhZ2UpIHtcclxuICAgICAgdGhpcy5wYXJlbnRHcmlkUGFnZSA9IEpTT04ucGFyc2UoYmFja1RvR3JpZFBhZ2UpPy5uYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnbmF2aWdhdGlvblN0YXRlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5uYXZpZ2F0ZURhdGEpKTtcclxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IGN1cnJlbnRSb3V0ZTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgJHtjdXJyZW50Um91dGUucm91dGVyTGlua31gXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLCBzdGF0ZTogdGhpcy5uYXZpZ2F0ZURhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREeW5hbWljVGFiKCkge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2VcclxuICAgICAgLmdldEFjdGl2ZVBhZ2UodGhpcy50YWJQYWdlSWQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigocmVzcG9uc2U6IGFueSkgPT4gISFyZXNwb25zZS5kYXRhLnRhYmNvbmZpZyksXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB0eXBlb2YgcmVzcG9uc2UuZGF0YS50YWJjb25maWcgPT09ICdzdHJpbmcnID8gXHJcbiAgICAgICAgSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLnRhYmNvbmZpZykgOiByZXNwb25zZS5kYXRhLnRhYmNvbmZpZyksXHJcbiAgICAgICAgdGFwKCh0YWJDb25maWc6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wYWdlcyA9IHRhYkNvbmZpZy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHBhZ2UuaWQsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHBhZ2UubmFtZSxcclxuICAgICAgICAgICAgICByb3V0ZXJMaW5rOiAnJyxcclxuICAgICAgICAgICAgICBpY29uOiBwYWdlPy5pY29uID8gcGFnZT8uaWNvbiA6ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBzd2l0Y2hNYXAoKHRhYkNvbmZpZzogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlcyA9IHRhYkNvbmZpZy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFjdGl2ZVZlcnNpb24ocGFnZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmb3JrSm9pbihvYnNlcnZhYmxlcyk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICB0aGlzLnNob3dUYWJzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJvdXRlVG9MYW5kaW5nUGFnZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEFjdGl2ZVZlcnNpb24ocGFnZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0RHluYW1pY1BhZ2UocGFnZS5pZCkucGlwZShcclxuICAgICAgdGFwKHJlc3BvbnNlID0+IHRoaXMuc2V0Um91dGV0b1RhYnMocmVzcG9uc2VbJ2RhdGEnXSwgcGFnZS5pZCkpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXRSb3V0ZXRvVGFicyhyb3dzOiBhbnksIHBhZ2VJZCkge1xyXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMucGFnZXNcclxuICAubWFwKGEgPT4ge1xyXG4gICAgaWYgKGEuaWQgPT09IHBhZ2VJZCAmJiBhLnJvdXRlckxpbmsgPT09ICcnKSB7XHJcbiAgICAgIGlmIChyb3dzWzBdLnBhZ2V0eXBlID09PSAnQkdQJykge1xyXG4gICAgICAgIGEucm91dGVyTGluayA9IGEuaWQgPT09IHJvd3NbMF0uaWQgPyBgZHluYW1pYy1zZWFyY2gvJHtyb3dzWzBdLmFjdGl2ZVZlcnNpb24uaWR9YCA6ICcnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGEucm91dGVyTGluayA9IGEuaWQgPT09IHJvd3NbMF0uaWQgPyBgcGFnZS8ke3BhZ2VJZH1gIDogJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhOyAvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIGl0ZW1cclxuICB9KVxyXG4gIC5maWx0ZXIoeCA9PiB4LnJvdXRlckxpbmsgIT09ICcnKTsgLy8gRmlsdGVyIG91dCBpdGVtcyB3aXRoIGFuIGVtcHR5IHJvdXRlckxpbmtcclxuXHJcbiAgfVxyXG5cclxuICByZWRpcmVjdCgpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgndmVyc2lvbi1pZCcpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2BwYWdlcy9wYWdlLWRlc2lnbi92ZXJzaW9ucy8ke2lkfWBdKTtcclxuICAgIGNvbnN0IHBhcmVudEdyaWRQYWdlSW5mbyA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnYmFja1RvR3JpZFBhZ2UnKSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9wYWdlcy9keW5hbWljLXNlYXJjaC9zZWFyY2gvJHtwYXJlbnRHcmlkUGFnZUluZm8uaWR9YF0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgnWW91dGhJRCcpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgnbmF2aWdhdGlvblN0YXRlJyk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uVGFiSXRlbUNsaWNrKHRhYjogYW55KSB7XHJcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoKHQpID0+IHQuaWQgPT09IHRhYj8uYWN0aXZlSXRlbT8uaWQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Ake3RhYi5hY3RpdmVJdGVtLnJvdXRlckxpbmt9YF0sIHtcclxuICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgc3RhdGU6IHRoaXMubmF2aWdhdGVEYXRhXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInJiYWMtdGFiXCIgKm5nSWY9XCJzaG93VGFic1wiPlxyXG4gIDxwLXRhYk1lbnVcclxuICAgIFttb2RlbF09XCJpdGVtc1wiXHJcbiAgICAjdGFiXHJcbiAgICAoY2xpY2spPVwib25UYWJJdGVtQ2xpY2sodGFiKVwiXHJcbiAgICBbc2Nyb2xsYWJsZV09XCJ0cnVlXCJcclxuICAgIFthY3RpdmVJdGVtXT1cImFjdGl2ZUl0ZW1cIj48L3AtdGFiTWVudT5cclxuPC9kaXY+XHJcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuIl19