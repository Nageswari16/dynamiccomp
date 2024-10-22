import { Injectable } from '@angular/core';
import { PageBuilderViewURL } from '../urls/Page-builder-view-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./platform-data-store.service";
export class PageBuilderViewService {
    _storeservice;
    port_workflow;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this.port_workflow = 'workflow';
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getPageVersionByid(id) {
        return this.httpService.get(`${PageBuilderViewURL.EndPoint.page_config.pageVersion}/${id}`);
    }
    createPage(data) {
        return this.httpService.post(PageBuilderViewURL.EndPoint.page_config.page, data);
    }
    getFacilityDetails(providerid) {
        return this.httpService.get(PageBuilderViewURL.EndPoint.provider.facilityDetails + '?providerid=' + providerid);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, deps: [{ token: i1.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.PlatformDataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvcGFnZS1idWlsZGVyLXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFNMUUsTUFBTSxPQUFPLHNCQUFzQjtJQUdiO0lBRnBCLGFBQWEsQ0FBUztJQUN0QixXQUFXLENBQUs7SUFDaEIsWUFBb0IsYUFBdUM7UUFBdkMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JELElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxVQUFVO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsY0FBYyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7d0dBdEJVLHNCQUFzQjs0R0FBdEIsc0JBQXNCLGNBRnJCLE1BQU07OzRGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlclZpZXdVUkwgfSBmcm9tICcuLi91cmxzL1BhZ2UtYnVpbGRlci12aWV3LXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BsYXRmb3JtLWRhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlQnVpbGRlclZpZXdTZXJ2aWNlIHtcclxuICBwb3J0X3dvcmtmbG93OiBzdHJpbmc7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogUGxhdGZvcm1EYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnBvcnRfd29ya2Zsb3cgPSAnd29ya2Zsb3cnO1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRQYWdlVmVyc2lvbkJ5aWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtQYWdlQnVpbGRlclZpZXdVUkwuRW5kUG9pbnQucGFnZV9jb25maWcucGFnZVZlcnNpb259LyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlKGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoUGFnZUJ1aWxkZXJWaWV3VVJMLkVuZFBvaW50LnBhZ2VfY29uZmlnLnBhZ2UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmFjaWxpdHlEZXRhaWxzKHByb3ZpZGVyaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChQYWdlQnVpbGRlclZpZXdVUkwuRW5kUG9pbnQucHJvdmlkZXIuZmFjaWxpdHlEZXRhaWxzICsgJz9wcm92aWRlcmlkPScgKyBwcm92aWRlcmlkKTtcclxuICB9XHJcbn1cclxuIl19