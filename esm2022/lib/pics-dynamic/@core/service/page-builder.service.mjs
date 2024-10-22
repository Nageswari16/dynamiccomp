import { Injectable } from '@angular/core';
import { PageBuilderURL } from '../urls/page-builder-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./platform-data-store.service";
export class PageBuilderService {
    _storeservice;
    port_workflow;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getVersionList(pageId) {
        return this.httpService.get(PageBuilderURL.EndPoints.page_config.versionList.replace('{id}', String(pageId)));
    }
    getAllPageDesigns(id) {
        return this.httpService.get(PageBuilderURL.EndPoints.workflow.pageByOrganization.replace('{id}', id));
    }
    duplicateDesignPage(data, id) {
        return this.httpService.post(PageBuilderURL.EndPoints.workflow.LockPageDesigner.replace('{id}', String(id)), data);
    }
    activatePage(pageId) {
        return this.httpService.patch(PageBuilderURL.EndPoints.workflow.activatePage
            .replace('{pageId}', pageId), {});
    }
    deactivatePage(pageId) {
        return this.httpService.patch(PageBuilderURL.EndPoints.workflow.deactivatePage
            .replace('{pageId}', pageId), {});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, deps: [{ token: i1.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.PlatformDataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS9zZXJ2aWNlL3BhZ2UtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFPakUsTUFBTSxPQUFPLGtCQUFrQjtJQUdUO0lBRnBCLGFBQWEsQ0FBUztJQUN0QixXQUFXLENBQUs7SUFDaEIsWUFBb0IsYUFBdUM7UUFBdkMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3pELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JELElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFBRSxDQUFDO0lBRVAsY0FBYyxDQUFDLE1BQXdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ3pCLGNBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNqRixDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQUU7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUFFO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRUgsWUFBWSxDQUFDLE1BQWM7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZO2FBQ3pFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFjO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYzthQUMzRSxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7d0dBaENZLGtCQUFrQjs0R0FBbEIsa0JBQWtCLGNBRmpCLE1BQU07OzRGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyVVJMIH0gZnJvbSAnLi4vdXJscy9wYWdlLWJ1aWxkZXItdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGxhdGZvcm1EYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9wbGF0Zm9ybS1kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUJ1aWxkZXJTZXJ2aWNlIHtcclxuICBwb3J0X3dvcmtmbG93OiBzdHJpbmc7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogUGxhdGZvcm1EYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgfVxyXG4gICAgfSkgIH1cclxuXHJcbiAgZ2V0VmVyc2lvbkxpc3QocGFnZUlkPzogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgUGFnZUJ1aWxkZXJVUkwuRW5kUG9pbnRzLnBhZ2VfY29uZmlnLnZlcnNpb25MaXN0LnJlcGxhY2UoJ3tpZH0nLCBTdHJpbmcocGFnZUlkKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQYWdlRGVzaWducyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFBhZ2VCdWlsZGVyVVJMLkVuZFBvaW50cy53b3JrZmxvdy5wYWdlQnlPcmdhbml6YXRpb24ucmVwbGFjZSgne2lkfScsIGlkKSk7XHJcbiAgfVxyXG5cclxuICBkdXBsaWNhdGVEZXNpZ25QYWdlKGRhdGEsIGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFBhZ2VCdWlsZGVyVVJMLkVuZFBvaW50cy53b3JrZmxvdy5Mb2NrUGFnZURlc2lnbmVyLnJlcGxhY2UoJ3tpZH0nLCBTdHJpbmcoaWQpKSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuYWN0aXZhdGVQYWdlKHBhZ2VJZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2goUGFnZUJ1aWxkZXJVUkwuRW5kUG9pbnRzLndvcmtmbG93LmFjdGl2YXRlUGFnZVxyXG4gICAgLnJlcGxhY2UoJ3twYWdlSWR9JywgcGFnZUlkKSwge30pO1xyXG59XHJcblxyXG5kZWFjdGl2YXRlUGFnZShwYWdlSWQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKFBhZ2VCdWlsZGVyVVJMLkVuZFBvaW50cy53b3JrZmxvdy5kZWFjdGl2YXRlUGFnZVxyXG4gICAgLnJlcGxhY2UoJ3twYWdlSWR9JywgcGFnZUlkKSwge30pO1xyXG59XHJcbn1cclxuIl19