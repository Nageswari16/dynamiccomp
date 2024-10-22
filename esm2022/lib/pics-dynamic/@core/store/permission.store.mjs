import { Injectable } from '@angular/core';
import { Store } from '../service/store.service';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data, type = 'P') {
        const permissionMap = {};
        if (type === 'P') {
            const flatData = [...this.flat(data)];
            flatData.forEach((permission) => {
                permissionMap[permission.name] = permission.allowed;
            });
            this.setState({ ...this.state, ...permissionMap });
        }
        else {
            data.forEach((permission) => {
                permissionMap['GALKP_' + permission.key] = permission.lookuprolepermissions;
            });
            this.setState({ ...this.state, ...permissionMap });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state.permissions);
        else
            return of(this.state.lookupPermissions);
    }
    flat(array) {
        let result = [];
        array.forEach(item => {
            result.push(item);
            if (item.permissions && Array.isArray(item.permissions)) {
                result = result.concat(this.flat(item.permissions));
            }
        });
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3N0b3JlL3Blcm1pc3Npb24uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdEMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsS0FBVTtJQUM3QztRQUNFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBUyxFQUFFLE9BQWUsR0FBRztRQUNwQyxNQUFNLGFBQWEsR0FBNEIsRUFBRSxDQUFDO1FBQ2xELElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUNoQixNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFlLEVBQUUsRUFBRTtnQkFDbkMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFlLEVBQUUsRUFBRTtnQkFDL0IsYUFBYSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQWUsR0FBRztRQUN6QixJQUFJLElBQUksS0FBSyxHQUFHO1lBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzs7WUFDL0MsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyxJQUFJLENBQUMsS0FBWTtRQUN2QixJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDdkQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNyRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzt3R0FuQ1UsZUFBZTs0R0FBZixlQUFlLGNBRmQsTUFBTTs7NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc2VydmljZS9zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25TdG9yZSBleHRlbmRzIFN0b3JlPGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe30pO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RvcmUoZGF0YTogYW55LCB0eXBlOiBzdHJpbmcgPSAnUCcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25NYXA6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XHJcbiAgICBpZiAodHlwZSA9PT0gJ1AnKSB7XHJcbiAgICAgIGNvbnN0IGZsYXREYXRhID0gWy4uLnRoaXMuZmxhdChkYXRhKV07XHJcbiAgICAgIGZsYXREYXRhLmZvckVhY2goKHBlcm1pc3Npb246IGFueSkgPT4ge1xyXG4gICAgICAgIHBlcm1pc3Npb25NYXBbcGVybWlzc2lvbi5uYW1lXSA9IHBlcm1pc3Npb24uYWxsb3dlZDtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCAuLi5wZXJtaXNzaW9uTWFwIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YS5mb3JFYWNoKChwZXJtaXNzaW9uOiBhbnkpID0+IHtcclxuICAgICAgICBwZXJtaXNzaW9uTWFwWydHQUxLUF8nICsgcGVybWlzc2lvbi5rZXldID0gcGVybWlzc2lvbi5sb29rdXByb2xlcGVybWlzc2lvbnM7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4ucGVybWlzc2lvbk1hcCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0b3JlKHR5cGU6IHN0cmluZyA9ICdQJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1AnKSByZXR1cm4gb2YodGhpcy5zdGF0ZS5wZXJtaXNzaW9ucyk7XHJcbiAgICBlbHNlIHJldHVybiBvZih0aGlzLnN0YXRlLmxvb2t1cFBlcm1pc3Npb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmxhdChhcnJheTogYW55W10pIHtcclxuICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgaWYgKGl0ZW0ucGVybWlzc2lvbnMgJiYgQXJyYXkuaXNBcnJheShpdGVtLnBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5mbGF0KGl0ZW0ucGVybWlzc2lvbnMpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=