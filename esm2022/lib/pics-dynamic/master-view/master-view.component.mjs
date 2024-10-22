import { Component, Input } from '@angular/core';
import { options } from './options';
import { selectAllGridsterItems } from '../@shared/master-view-state/master-view.selectors';
import { clearComponents, setComponents } from '../@shared/master-view-state/master-view.actions';
import { AlertService } from '../@core/service/alert.service';
import { DynamicSearchCleanupComponent } from '../dynamic-searchcleanup/dynamic-searchcleanup.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../@core/service/dynamic-tab-page-service";
import * as i3 from "@ngrx/store";
import * as i4 from "@angular/common";
import * as i5 from "angular-gridster2";
import * as i6 from "ng-dynamic-component";
import * as i7 from "../@shared/alert/alert.component";
export class MasterViewComponent {
    route;
    dynamicTabPageService;
    store;
    options;
    masterViewWidget$;
    masterPageId;
    alertService;
    editMode = true;
    constructor(injector, route, dynamicTabPageService, store) {
        this.route = route;
        this.dynamicTabPageService = dynamicTabPageService;
        this.store = store;
        this.options = options;
        this.alertService = injector.get(AlertService);
        this.masterViewWidget$ = this.store.select(selectAllGridsterItems);
    }
    ngOnInit() {
        this.masterPageId = this.route.snapshot.paramMap.get('masterPageId');
        if (window.location.pathname.includes('master-view/view')) {
            this.editMode = false;
        }
        this.getDynamicPage(this.masterPageId);
    }
    getDynamicPage(masterPageId) {
        this.dynamicTabPageService.getDynamicPage(masterPageId).subscribe(value => {
            const activeversionid = value['data'][0].activeversionid;
            this.dynamicTabPageService.getActivePage(activeversionid, this.editMode).subscribe(result => {
                if (result) {
                    const masterviewconfig = typeof result['data'].masterviewconfig === 'string'
                        ? JSON.parse(result['data'].masterviewconfig)
                        : result['data'].masterviewconfig;
                    if (masterviewconfig) {
                        masterviewconfig.forEach(x => {
                            x.loadedFromMasterView = true;
                            x.input = { ...x.input, componentId: x.id };
                            if (x.componentName === 'dynamicpage-common') {
                                x.component = DynamicSearchCleanupComponent;
                            }
                            else if (x.componentName === 'dynamicpage-sea') {
                                x.component = DynamicSearchCleanupComponent;
                            }
                        });
                        this.store.dispatch(setComponents({ components: masterviewconfig }));
                    }
                }
            });
        }, error => {
            this.alertService.error('Something went wrong');
            console.error(error);
        });
    }
    ngAfterViewInit() {
        this.route.paramMap.subscribe(() => {
            this.masterPageId = this.route.snapshot.paramMap.get('masterPageId');
            this.getDynamicPage(this.masterPageId);
        });
    }
    ngOnDestroy() {
        this.store.dispatch(clearComponents());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: i2.DynamicTabPageService }, { token: i3.Store }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: MasterViewComponent, selector: "app-master-view", inputs: { masterPageId: "masterPageId" }, ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"float-container\">\r\n  <div class=\"float-child-right\">\r\n    <div class=\"dashboard-inner mt-0\">\r\n      <div class=\"float-child-right\">\r\n        <gridster class=\"gridster\" [options]=\"options\">\r\n          <gridster-item class=\"gridster-item\" [item]=\"item\"\r\n            *ngFor=\"let item of masterViewWidget$ | async; let i = index\">\r\n            <div class=\"clearfix gridster-item-group\">\r\n              <div class=\"gridster-item-content\">\r\n                <!-- <div class=\"drag-handler widget-header p-2 mb-2\">\r\n                  <div class=\"item-buttons widget-header-buttons w-100\">\r\n                    <h6 class=\"mb-0\">{{ item.name }}</h6>\r\n                  </div>\r\n                </div>-->\r\n                <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"> </ndc-dynamic>\r\n              </div>\r\n            </div>\r\n          </gridster-item>\r\n        </gridster>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".float-container .float-child-right{max-height:calc(100vh - 280px);overflow-y:auto}.float-container .float-child-right .close-button{position:absolute;top:2px;right:5px;cursor:pointer;color:#007cc3}.float-container .float-child-right .overallSec{padding-left:0}.float-container .gridster{display:inline-table;background:transparent;padding:0!important}.float-container .gridster-item{margin:0 0 15px!important;padding:0 12px 12px;overflow-y:auto}.float-container .gridster-item-content{position:relative}.pull-right{padding:5px}.gridster{height:120vh;margin:0;padding:0;background-color:#b3b1b1}.gridster-container{margin-top:10px;margin-left:10px}.top-btn-left{width:150px;margin:5px}.top-btn-right{width:350px;margin:5px}.widget-header{background-color:#eee;cursor:default}.widget-header-btn{cursor:pointer}.header-margin-left{margin-left:5px}.header-margin-right{margin-right:5px}app-nomination-widget{height:100%}.widget-header-buttons{display:flex;align-items:center;justify-content:space-between}.widget-header-buttons h6{font-size:12px;text-transform:uppercase;font-weight:600;color:#2c2863}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i5.GridsterComponent, selector: "gridster", inputs: ["options"] }, { kind: "component", type: i5.GridsterItemComponent, selector: "gridster-item", inputs: ["item"], outputs: ["itemInit", "itemChange", "itemResize"] }, { kind: "directive", type: i6.DynamicIoDirective, selector: "[ndcDynamicInputs],[ndcDynamicOutputs]", inputs: ["ndcDynamicInputs", "ndcDynamicOutputs"], exportAs: ["ndcDynamicIo"] }, { kind: "component", type: i6.DynamicComponent, selector: "ndc-dynamic", inputs: ["ndcDynamicComponent", "ndcDynamicInjector", "ndcDynamicProviders", "ndcDynamicContent", "ndcDynamicNgModuleRef", "ndcDynamicEnvironmentInjector"], outputs: ["ndcDynamicCreated"] }, { kind: "component", type: i7.AlertComponent, selector: "app-alert" }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-master-view', template: "<app-alert></app-alert>\r\n<div class=\"float-container\">\r\n  <div class=\"float-child-right\">\r\n    <div class=\"dashboard-inner mt-0\">\r\n      <div class=\"float-child-right\">\r\n        <gridster class=\"gridster\" [options]=\"options\">\r\n          <gridster-item class=\"gridster-item\" [item]=\"item\"\r\n            *ngFor=\"let item of masterViewWidget$ | async; let i = index\">\r\n            <div class=\"clearfix gridster-item-group\">\r\n              <div class=\"gridster-item-content\">\r\n                <!-- <div class=\"drag-handler widget-header p-2 mb-2\">\r\n                  <div class=\"item-buttons widget-header-buttons w-100\">\r\n                    <h6 class=\"mb-0\">{{ item.name }}</h6>\r\n                  </div>\r\n                </div>-->\r\n                <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"> </ndc-dynamic>\r\n              </div>\r\n            </div>\r\n          </gridster-item>\r\n        </gridster>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".float-container .float-child-right{max-height:calc(100vh - 280px);overflow-y:auto}.float-container .float-child-right .close-button{position:absolute;top:2px;right:5px;cursor:pointer;color:#007cc3}.float-container .float-child-right .overallSec{padding-left:0}.float-container .gridster{display:inline-table;background:transparent;padding:0!important}.float-container .gridster-item{margin:0 0 15px!important;padding:0 12px 12px;overflow-y:auto}.float-container .gridster-item-content{position:relative}.pull-right{padding:5px}.gridster{height:120vh;margin:0;padding:0;background-color:#b3b1b1}.gridster-container{margin-top:10px;margin-left:10px}.top-btn-left{width:150px;margin:5px}.top-btn-right{width:350px;margin:5px}.widget-header{background-color:#eee;cursor:default}.widget-header-btn{cursor:pointer}.header-margin-left{margin-left:5px}.header-margin-right{margin-right:5px}app-nomination-widget{height:100%}.widget-header-buttons{display:flex;align-items:center;justify-content:space-between}.widget-header-buttons h6{font-size:12px;text-transform:uppercase;font-weight:600;color:#2c2863}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: i2.DynamicTabPageService }, { type: i3.Store }]; }, propDecorators: { masterPageId: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvbWFzdGVyLXZpZXcvbWFzdGVyLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvbWFzdGVyLXZpZXcvbWFzdGVyLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBWSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUlwQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUc1RixPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7Ozs7Ozs7O0FBT3pHLE1BQU0sT0FBTyxtQkFBbUI7SUFTcEI7SUFDQTtJQUNBO0lBVlYsT0FBTyxDQUFpQjtJQUN4QixpQkFBaUIsQ0FBK0I7SUFDdkMsWUFBWSxDQUFDO0lBQ3RCLFlBQVksQ0FBZTtJQUMzQixRQUFRLEdBQVksSUFBSSxDQUFDO0lBRXpCLFlBQ0UsUUFBa0IsRUFDVixLQUFxQixFQUNyQixxQkFBNEMsRUFDNUMsS0FBc0I7UUFGdEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLE9B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Q0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzt3R0FqRVUsbUJBQW1COzRGQUFuQixtQkFBbUIsaUdDckJoQyxvaUNBdUJNOzs0RkRGTyxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsaUJBQWlCO29MQU9sQixZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnIH0gZnJvbSAnYW5ndWxhci1ncmlkc3RlcjInO1xyXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vQGNvcmUvc2VydmljZS9keW5hbWljLXRhYi1wYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRTdGF0ZSB9IGZyb20gJy4uL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcuc3RhdGUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNlbGVjdEFsbEdyaWRzdGVySXRlbXMgfSBmcm9tICcuLi9Ac2hhcmVkL21hc3Rlci12aWV3LXN0YXRlL21hc3Rlci12aWV3LnNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL0Bjb3JlL2NvcmUuc3RhdGUnO1xyXG5pbXBvcnQgeyBjbGVhckNvbXBvbmVudHMsIHNldENvbXBvbmVudHMgfSBmcm9tICcuLi9Ac2hhcmVkL21hc3Rlci12aWV3LXN0YXRlL21hc3Rlci12aWV3LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlL3BsYXRmb3JtLWRhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy10YWItcGFnZS9keW5hbWljLXBhZ2UvZHluYW1pYy1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNTZWFyY2hDbGVhbnVwQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy1zZWFyY2hjbGVhbnVwL2R5bmFtaWMtc2VhcmNoY2xlYW51cC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbWFzdGVyLXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXN0ZXItdmlldy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWFzdGVyLXZpZXcuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgb3B0aW9uczogR3JpZHN0ZXJDb25maWc7XHJcbiAgbWFzdGVyVmlld1dpZGdldCQ6IE9ic2VydmFibGU8Q29tcG9uZW50U3RhdGVbXT47XHJcbiAgQElucHV0KCkgbWFzdGVyUGFnZUlkO1xyXG4gIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlO1xyXG4gIGVkaXRNb2RlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgZHluYW1pY1RhYlBhZ2VTZXJ2aWNlOiBEeW5hbWljVGFiUGFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT5cclxuICApIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmFsZXJ0U2VydmljZSA9IGluamVjdG9yLmdldDxBbGVydFNlcnZpY2U+KEFsZXJ0U2VydmljZSk7XHJcbiAgICB0aGlzLm1hc3RlclZpZXdXaWRnZXQkID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0QWxsR3JpZHN0ZXJJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWFzdGVyUGFnZUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ21hc3RlclBhZ2VJZCcpO1xyXG4gICAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdtYXN0ZXItdmlldy92aWV3Jykpe1xyXG4gICAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldER5bmFtaWNQYWdlKHRoaXMubWFzdGVyUGFnZUlkKTtcclxuICB9XHJcblxyXG4gIGdldER5bmFtaWNQYWdlKG1hc3RlclBhZ2VJZCkge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0RHluYW1pY1BhZ2UobWFzdGVyUGFnZUlkKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmV2ZXJzaW9uaWQgPSB2YWx1ZVsnZGF0YSddWzBdLmFjdGl2ZXZlcnNpb25pZDtcclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0QWN0aXZlUGFnZShhY3RpdmV2ZXJzaW9uaWQsIHRoaXMuZWRpdE1vZGUpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIGNvbnN0IG1hc3RlcnZpZXdjb25maWcgPSB0eXBlb2YgcmVzdWx0WydkYXRhJ10ubWFzdGVydmlld2NvbmZpZyA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgPyBKU09OLnBhcnNlKHJlc3VsdFsnZGF0YSddLm1hc3RlcnZpZXdjb25maWcpXHJcbiAgICAgICAgICAgIDogcmVzdWx0WydkYXRhJ10ubWFzdGVydmlld2NvbmZpZztcclxuXHJcbiAgICAgICAgICBpZiAobWFzdGVydmlld2NvbmZpZykge1xyXG4gICAgICAgICAgICBtYXN0ZXJ2aWV3Y29uZmlnLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgeC5sb2FkZWRGcm9tTWFzdGVyVmlldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgeC5pbnB1dCA9IHsgLi4ueC5pbnB1dCwgY29tcG9uZW50SWQ6IHguaWQgfTtcclxuICAgICAgICAgICAgICBpZiAoeC5jb21wb25lbnROYW1lID09PSAnZHluYW1pY3BhZ2UtY29tbW9uJykge1xyXG4gICAgICAgICAgICAgICAgeC5jb21wb25lbnQgPSBEeW5hbWljU2VhcmNoQ2xlYW51cENvbXBvbmVudDtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHguY29tcG9uZW50TmFtZSA9PT0gJ2R5bmFtaWNwYWdlLXNlYScpIHtcclxuICAgICAgICAgICAgICAgIHguY29tcG9uZW50ID0gRHluYW1pY1NlYXJjaENsZWFudXBDb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzZXRDb21wb25lbnRzKHsgY29tcG9uZW50czogbWFzdGVydmlld2NvbmZpZyB9KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubWFzdGVyUGFnZUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ21hc3RlclBhZ2VJZCcpO1xyXG4gICAgICB0aGlzLmdldER5bmFtaWNQYWdlKHRoaXMubWFzdGVyUGFnZUlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNsZWFyQ29tcG9uZW50cygpKTtcclxuICB9XHJcbn0iLCI8YXBwLWFsZXJ0PjwvYXBwLWFsZXJ0PlxyXG48ZGl2IGNsYXNzPVwiZmxvYXQtY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImZsb2F0LWNoaWxkLXJpZ2h0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLWlubmVyIG10LTBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LWNoaWxkLXJpZ2h0XCI+XHJcbiAgICAgICAgPGdyaWRzdGVyIGNsYXNzPVwiZ3JpZHN0ZXJcIiBbb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICA8Z3JpZHN0ZXItaXRlbSBjbGFzcz1cImdyaWRzdGVyLWl0ZW1cIiBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWFzdGVyVmlld1dpZGdldCQgfCBhc3luYzsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXggZ3JpZHN0ZXItaXRlbS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkc3Rlci1pdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImRyYWctaGFuZGxlciB3aWRnZXQtaGVhZGVyIHAtMiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWJ1dHRvbnMgd2lkZ2V0LWhlYWRlci1idXR0b25zIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibWItMFwiPnt7IGl0ZW0ubmFtZSB9fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8bmRjLWR5bmFtaWMgW25kY0R5bmFtaWNDb21wb25lbnRdPVwiaXRlbS5jb21wb25lbnRcIiBbbmRjRHluYW1pY0lucHV0c109XCJpdGVtLmlucHV0XCI+IDwvbmRjLWR5bmFtaWM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9ncmlkc3Rlci1pdGVtPlxyXG4gICAgICAgIDwvZ3JpZHN0ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==