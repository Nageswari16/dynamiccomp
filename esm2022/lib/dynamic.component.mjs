import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-dynamic/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-dynamic/@core/permissions/permission.store";
import * as i2 from "./pics-dynamic/@core/service/platform-data-store.service";
import * as i3 from "@angular/router";
export class DynamicComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    COMMONSERVICE;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.COMMONSERVICE.subscribe(val => {
            if (val) {
                this.RBACORG = val.RBACORG;
                this.PERMISSION = val.PERMISSION;
                this._storeservice.setData('RBACORG', this.RBACORG);
                this.permissionStore.setStore(this.PERMISSION);
                this._storeservice.setData('PERMISSION', val.PERMISSION);
                this._storeservice.setData('HTTPSERVICE', val.HTTPSERVICE);
                this._storeservice.setData('ALERTSERVICE', val.ALERTSERVICE);
                this._storeservice.setData('APPSERVICE', val.APPSERVICE);
                this._storeservice.setData('SHAREDSERVICE', val.SHAREDSERVICE);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicComponent, deps: [{ token: i1.PermissionStore }, { token: i2.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicComponent, selector: "dynamicdata", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE" }, ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dynamicdata', template: `
    <router-outlet></router-outlet>
  ` }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.PlatformDataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL2R5bmFtaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFhckUsTUFBTSxPQUFPLGdCQUFnQjtJQU1qQjtJQUNBO0lBTk0sT0FBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFDcEMsVUFBVSxDQUFPO0lBQ2pCLGFBQWEsQ0FBbUI7SUFFaEQsWUFDVSxlQUFnQyxFQUNoQyxhQUF1QztRQUR2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO0lBRWpELENBQUM7SUFDRCxRQUFRO1FBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMvRDtRQUNGLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzt3R0F4QlUsZ0JBQWdCOzRGQUFoQixnQkFBZ0IsNklBTmpCOztHQUVUOzs0RkFJVSxnQkFBZ0I7a0JBUjVCLFNBQVM7K0JBQ0UsYUFBYSxZQUNiOztHQUVUOzZJQUtlLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4vcGljcy1keW5hbWljL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtZHluYW1pYy9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgUGxhdGZvcm1EYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9wbGF0Zm9ybS1kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkeW5hbWljZGF0YScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHPzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcclxuICBASW5wdXQoKSBwdWJsaWMgUEVSTUlTU0lPTj86IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgQ09NTU9OU0VSVklDRSE6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5DT01NT05TRVJWSUNFLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICBpZih2YWwpe1xyXG4gICAgICAgIHRoaXMuUkJBQ09SRyA9IHZhbC5SQkFDT1JHO1xyXG4gICAgICAgIHRoaXMuUEVSTUlTU0lPTiA9IHZhbC5QRVJNSVNTSU9OO1xyXG4gICAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdSQkFDT1JHJywgdGhpcy5SQkFDT1JHKTtcclxuICAgICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdQRVJNSVNTSU9OJywgdmFsLlBFUk1JU1NJT04pO1xyXG4gICAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdIVFRQU0VSVklDRScsdmFsLkhUVFBTRVJWSUNFKTtcclxuICAgICAgICB0aGlzLl9zdG9yZXNlcnZpY2Uuc2V0RGF0YSgnQUxFUlRTRVJWSUNFJyx2YWwuQUxFUlRTRVJWSUNFKTtcclxuICAgICAgICB0aGlzLl9zdG9yZXNlcnZpY2Uuc2V0RGF0YSgnQVBQU0VSVklDRScsdmFsLkFQUFNFUlZJQ0UpO1xyXG4gICAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdTSEFSRURTRVJWSUNFJyx2YWwuU0hBUkVEU0VSVklDRSk7XHJcbiAgICAgIH1cclxuICAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=