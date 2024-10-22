import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AlertService {
    router;
    subject = new Subject();
    keepAfterRouteChange = false;
    constructor(router) {
        this.router = router;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
export var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
export class Alert {
    type;
    message;
}
export class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRoleDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sdUJBQXVCLENBQUM7OztBQUs5QixNQUFNLE9BQU8sWUFBWTtJQUlGO0lBSFosT0FBTyxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7SUFDL0Isb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBRXJDLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLGtGQUFrRjtRQUNsRixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLEtBQUssWUFBWSxlQUFlLEVBQUU7Z0JBQ3BDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO29CQUM3QixzQ0FBc0M7b0JBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMs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QUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLHNCQUFzQjtJQUMxQixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLFlBQVksRUFBRTtZQUNaLG1CQUFtQixFQUFFLHVCQUF1QjtZQUM1QyxlQUFlLEVBQUUseUdBQXlHO1NBQzNIO0tBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuIGV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8QWxlcnQ+KCk7XHJcbiAgICBwcml2YXRlIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAvLyBjbGVhciBhbGVydCBtZXNzYWdlcyBvbiByb3V0ZSBjaGFuZ2UgdW5sZXNzICdrZWVwQWZ0ZXJSb3V0ZUNoYW5nZScgZmxhZyBpcyB0cnVlXHJcbiAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmtlZXBBZnRlclJvdXRlQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIC8vIG9ubHkga2VlcCBmb3IgYSBzaW5nbGUgcm91dGUgY2hhbmdlXHJcbiAgICAgICAgICAgIHRoaXMua2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGFsZXJ0IG1lc3NhZ2VzXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsZXJ0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5hbGVydChBbGVydFR5cGUuU3VjY2VzcywgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmFsZXJ0KEFsZXJ0VHlwZS5FcnJvciwgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm8obWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoQWxlcnRUeXBlLkluZm8sIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICB3YXJuKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmFsZXJ0KEFsZXJ0VHlwZS5XYXJuaW5nLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQodHlwZTogQWxlcnRUeXBlLCBtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5rZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGtlZXBBZnRlclJvdXRlQ2hhbmdlO1xyXG4gICAgICB0aGlzLnN1YmplY3QubmV4dCg8QWxlcnQ+eyB0eXBlOiB0eXBlLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAvLyBjbGVhciBhbGVydHNcclxuICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoPGFueT57fSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY09iamVjdCB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZW51bSBBbGVydFR5cGUge1xyXG4gICAgU3VjY2VzcyxcclxuICAgIEVycm9yLFxyXG4gICAgSW5mbyxcclxuICAgIFdhcm5pbmdcclxuICB9XHJcbiAgZXhwb3J0IGNsYXNzIEFsZXJ0IHtcclxuICAgIHR5cGUhOiBBbGVydFR5cGU7XHJcbiAgICBtZXNzYWdlITogc3RyaW5nO1xyXG4gIH1cclxuICBleHBvcnQgaW50ZXJmYWNlIEluc2lnaHRzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNlcmllczogU2VyaWVzW107XHJcbiAgfVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2VyaWVzIHtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtb250aDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBTdGF0dXMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBVc2VyR3JvdXBEdG8ge1xyXG4gICAgaWQ/OiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlckdyb3VwRHRvPikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlUGFnZUR0byB7XHJcbiAgICBpZD86IG51bWJlcjtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICByb3V0ZT86IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbiAgICBpc21lbnU/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlclJvbGVQYWdlRHRvPikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRHRvIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHByaW9yaXR5PzogbnVtYmVyO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbiAgICBkZWZhdWx0cGFnZT86IFVzZXJSb2xlUGFnZUR0bztcclxuICAgIGRlZmF1bHRwYWdlaWQ/OiBudW1iZXI7XHJcbiAgICBwYXJlbnRpZD86IG51bWJlciB8IG51bGw7XHJcbiAgICBwYXJlbnQ/OiBVc2VyUm9sZUR0byB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxVc2VyUm9sZUR0bz4pIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBVc2VyRHRvIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHByaW9yaXR5PzogbnVtYmVyO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbiAgICBkZWZhdWx0cGFnZT86IFVzZXJSb2xlUGFnZUR0bztcclxuICAgIGRlZmF1bHRwYWdlaWQ/OiBudW1iZXI7XHJcbiAgICBwYXJlbnRpZD86IG51bWJlciB8IG51bGw7XHJcbiAgICBwYXJlbnQ/OiBVc2VyUm9sZUR0byB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxVc2VyRHRvPikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgY2xhc3MgQWNjZXNzTWFuYWdlbWVudENvbmZpZyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgICBPcmdhbml6YXRpb246IHtcclxuICAgICAgICBnZXRPcmdhbml6YXRpb25MaXN0OiAnL29yZy9vcmdhbml6YXRpb24vYWxsJyxcclxuICAgICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuIl19