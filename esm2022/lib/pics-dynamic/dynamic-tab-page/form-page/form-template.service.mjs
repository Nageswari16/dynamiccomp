import { Injectable } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { DataStoreService } from '../../@core/service/data-store.service';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/local.service";
import * as i2 from "../../@core/service/alert.service";
import * as i3 from "../../@core/service/dynamicsearch.service";
export class TemplateService {
    localStorage;
    alertService;
    dynamicSearchService;
    jsonForm;
    dataStore;
    templateResult;
    dynamicTabPageService;
    action;
    pageDataSubscription;
    constructor(injector, localStorage, alertService, dynamicSearchService) {
        this.localStorage = localStorage;
        this.alertService = alertService;
        this.dynamicSearchService = dynamicSearchService;
        this.dataStore = injector.get(DataStoreService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.action = this.dataStore.getData('gridAction') || this.localStorage.getItem('gridAction');
    }
    getTitle(action, pageName) {
        if (action) {
            switch (action.toLowerCase()) {
                case 'edit':
                    return `Edit ${pageName}`;
                case 'view':
                    return `View ${pageName}`;
                case 'add':
                    return `Add ${pageName}`;
                case 'link':
                    return `View ${pageName}`;
            }
        }
        return this.localStorage.getItem('FORM_TITLE') || '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplateService, deps: [{ token: i0.Injector }, { token: i1.LocalService }, { token: i2.AlertService }, { token: i3.DynamicsearchService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplateService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.LocalService }, { type: i2.AlertService }, { type: i3.DynamicsearchService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS10ZW1wbGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9mb3JtLXBhZ2UvZm9ybS10ZW1wbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7O0FBTTFFLE1BQU0sT0FBTyxlQUFlO0lBVWQ7SUFDQTtJQUNBO0lBWEosUUFBUSxDQUFNO0lBQ3RCLFNBQVMsQ0FBbUI7SUFDNUIsY0FBYyxDQUFNO0lBQ3BCLHFCQUFxQixDQUF3QjtJQUM3QyxNQUFNLENBQVM7SUFDUCxvQkFBb0IsQ0FBTTtJQUVoQyxZQUNFLFFBQWtCLEVBQ1YsWUFBMEIsRUFDMUIsWUFBMEIsRUFDMUIsb0JBQTBDO1FBRjFDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFtQixnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF3QixxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDdkMsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDNUIsS0FBSyxNQUFNO29CQUNULE9BQU8sUUFBUSxRQUFRLEVBQUUsQ0FBQztnQkFDNUIsS0FBSyxNQUFNO29CQUNULE9BQU8sUUFBUSxRQUFRLEVBQUUsQ0FBQztnQkFDNUIsS0FBSyxLQUFLO29CQUNSLE9BQU8sT0FBTyxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsS0FBSyxNQUFNO29CQUNULE9BQU8sUUFBUSxRQUFRLEVBQUUsQ0FBQzthQUM3QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQzt3R0FqQ1EsZUFBZTs0R0FBZixlQUFlLGNBRmQsTUFBTTs7NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlICwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiUGFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNzZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9keW5hbWljc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGpzb25Gb3JtOiBhbnk7XHJcbiAgZGF0YVN0b3JlOiBEYXRhU3RvcmVTZXJ2aWNlO1xyXG4gIHRlbXBsYXRlUmVzdWx0OiBhbnk7XHJcbiAgZHluYW1pY1RhYlBhZ2VTZXJ2aWNlOiBEeW5hbWljVGFiUGFnZVNlcnZpY2U7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwYWdlRGF0YVN1YnNjcmlwdGlvbjogYW55O1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU2VydmljZSxcclxuICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcclxuICAgICAgcHJpdmF0ZSBkeW5hbWljU2VhcmNoU2VydmljZTogRHluYW1pY3NlYXJjaFNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5kYXRhU3RvcmUgPSBpbmplY3Rvci5nZXQ8RGF0YVN0b3JlU2VydmljZT4oRGF0YVN0b3JlU2VydmljZSk7XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNUYWJQYWdlU2VydmljZT4oRHluYW1pY1RhYlBhZ2VTZXJ2aWNlKTtcclxuICAgICAgdGhpcy5hY3Rpb24gPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdncmlkQWN0aW9uJykgfHwgdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0VGl0bGUoYWN0aW9uOiBzdHJpbmcsIHBhZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgY2FzZSAnZWRpdCc6XHJcbiAgICAgICAgICAgIHJldHVybiBgRWRpdCAke3BhZ2VOYW1lfWA7XHJcbiAgICAgICAgICBjYXNlICd2aWV3JzpcclxuICAgICAgICAgICAgcmV0dXJuIGBWaWV3ICR7cGFnZU5hbWV9YDtcclxuICAgICAgICAgIGNhc2UgJ2FkZCc6XHJcbiAgICAgICAgICAgIHJldHVybiBgQWRkICR7cGFnZU5hbWV9YDtcclxuICAgICAgICAgIGNhc2UgJ2xpbmsnOlxyXG4gICAgICAgICAgICByZXR1cm4gYFZpZXcgJHtwYWdlTmFtZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRk9STV9USVRMRScpIHx8ICcnO1xyXG4gICAgfVxyXG59Il19