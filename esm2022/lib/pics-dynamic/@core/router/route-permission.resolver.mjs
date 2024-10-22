import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../store/permission.store";
import * as i2 from "../service/permission.service";
export class RoutePermissionResolver {
    permissionStore;
    permissionService;
    constructor(permissionStore, permissionService) {
        this.permissionStore = permissionStore;
        this.permissionService = permissionService;
        // This is intentional
    }
    resolve(route, _state) {
        const pagePermissions = this.permissionService.getPagePermission(route.data).pipe(tap(res => {
            this.permissionStore.setStore(res['data']);
        }), catchError(_error => of([])));
        const lookupPermissions = this.permissionService.getPageLookupPermission().pipe(tap(res => {
            this.permissionStore.setStore(res['data'], 'LP');
        }), catchError(_error => of([])));
        return forkJoin([pagePermissions, lookupPermissions]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutePermissionResolver, deps: [{ token: i1.PermissionStore }, { token: i2.PermissionService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutePermissionResolver, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutePermissionResolver, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.PermissionService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcGVybWlzc2lvbi5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3JvdXRlci9yb3V0ZS1wZXJtaXNzaW9uLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUtqRCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2Q7SUFBMEM7SUFBOUQsWUFBb0IsZUFBZ0MsRUFBVSxpQkFBb0M7UUFBOUUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUMvRixzQkFBc0I7SUFDekIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUE2QixFQUFFLE1BQTJCO1FBQ2hFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMvRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDN0IsQ0FBQztRQUNGLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLENBQUMsSUFBSSxDQUM3RSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQzdCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzt3R0FuQlUsdUJBQXVCOzRHQUF2Qix1QkFBdUIsY0FGdEIsTUFBTTs7NEZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9wZXJtaXNzaW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgZm9ya0pvaW4sIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvdXRlUGVybWlzc2lvblJlc29sdmVyICB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSwgcHJpdmF0ZSBwZXJtaXNzaW9uU2VydmljZTogUGVybWlzc2lvblNlcnZpY2UpIHtcclxuICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgfVxyXG5cclxuICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBfc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcclxuICAgIGNvbnN0IHBhZ2VQZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvblNlcnZpY2UuZ2V0UGFnZVBlcm1pc3Npb24ocm91dGUuZGF0YSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9uU3RvcmUuc2V0U3RvcmUocmVzWydkYXRhJ10pO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcihfZXJyb3IgPT4gb2YoW10pKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvb2t1cFBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9uU2VydmljZS5nZXRQYWdlTG9va3VwUGVybWlzc2lvbigpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMucGVybWlzc2lvblN0b3JlLnNldFN0b3JlKHJlc1snZGF0YSddLCAnTFAnKTtcclxuICAgICAgfSksXHJcbiAgICAgIGNhdGNoRXJyb3IoX2Vycm9yID0+IG9mKFtdKSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gZm9ya0pvaW4oW3BhZ2VQZXJtaXNzaW9ucywgbG9va3VwUGVybWlzc2lvbnNdKTtcclxuICB9XHJcbn1cclxuIl19