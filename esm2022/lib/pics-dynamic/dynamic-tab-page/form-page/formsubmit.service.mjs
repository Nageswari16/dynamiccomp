import { Injectable } from '@angular/core';
import { LocalService } from '../../@core/service/local.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/local.service";
import * as i3 from "../../@core/service/alert.service";
export class FormSubmissionService {
    route;
    localStorage;
    alertService;
    constructor(route, localStorage, alertService, injector) {
        this.route = route;
        this.localStorage = localStorage;
        this.alertService = alertService;
        this.localStorage = injector.get(LocalService);
    }
    getIdFromRoute(editId, fallbackId) {
        if (this.route.snapshot.paramMap.get('id') === 'form') {
            return null;
        }
        else if (editId) {
            return editId;
        }
        else {
            let id = this.route.snapshot.paramMap.get('id');
            const createPage = this.localStorage.getObj('AddAction');
            if (!id && !createPage) {
                const entityId = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('id'))?.snapshot.paramMap.get('id');
                const youthId = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceValue'))?.snapshot.paramMap.get('sourceValue');
                id = fallbackId?.toLowerCase() === 'youthid' ? youthId : entityId;
            }
            return id;
        }
    }
    prepareSubmissionData(submission) {
        const submissionData = JSON.parse(JSON.stringify(submission));
        let data = submissionData.data?.data?.editGrid ? submissionData.data.data : submissionData.data;
        delete data.ribbonData;
        return data;
    }
    prepareRequestData(formId, data) {
        return {
            pageid: formId,
            response: data
        };
    }
    updateFormData(errorType) {
        if (errorType === 'NO_EDIT') {
            setTimeout(() => {
                this.alertService.warn('The edit window for this record has expired and changes cannot be made at this time.');
            }, 500);
        }
        else if (errorType === 'NOT_ALLOW_TO_EDIT' || errorType === 'INVALID_USER') {
            setTimeout(() => {
                this.alertService.warn('Something went wrong');
            }, 500);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormSubmissionService, deps: [{ token: i1.ActivatedRoute }, { token: i2.LocalService }, { token: i3.AlertService }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormSubmissionService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormSubmissionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.LocalService }, { type: i3.AlertService }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXN1Ym1pdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9mb3JtLXBhZ2UvZm9ybXN1Ym1pdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQU1qRSxNQUFNLE9BQU8scUJBQXFCO0lBRXRCO0lBQ0E7SUFDQTtJQUhWLFlBQ1UsS0FBcUIsRUFDckIsWUFBMEIsRUFDMUIsWUFBMEIsRUFDbEMsUUFBa0I7UUFIVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUdsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQWUsWUFBWSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFjLEVBQUUsVUFBa0I7UUFDL0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxNQUFNLEVBQUU7WUFDakIsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEgsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pJLEVBQUUsR0FBRyxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzthQUNuRTtZQUNELE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDO0lBRUQscUJBQXFCLENBQUMsVUFBZTtRQUNuQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQ2hHLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsSUFBUztRQUMxQyxPQUFPO1lBQ0wsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLFNBQWlCO1FBQzlCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHNGQUFzRixDQUFDLENBQUM7WUFDakgsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBTSxJQUFJLFNBQVMsS0FBSyxtQkFBbUIsSUFBSSxTQUFTLEtBQUssY0FBYyxFQUFFO1lBQzVFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNqRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7d0dBbkRVLHFCQUFxQjs0R0FBckIscUJBQXFCLGNBRnBCLE1BQU07OzRGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtU3VibWlzc2lvblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcclxuICAgIGluamVjdG9yOiBJbmplY3RvclxyXG4gICkge1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSBpbmplY3Rvci5nZXQ8TG9jYWxTZXJ2aWNlPihMb2NhbFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWRGcm9tUm91dGUoZWRpdElkOiBzdHJpbmcsIGZhbGxiYWNrSWQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpID09PSAnZm9ybScpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVkaXRJZCkge1xyXG4gICAgICByZXR1cm4gZWRpdElkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZVBhZ2UgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXRPYmooJ0FkZEFjdGlvbicpO1xyXG4gICAgICBpZiAoIWlkICYmICFjcmVhdGVQYWdlKSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5SWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdpZCcpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IHlvdXRoSWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VWYWx1ZScpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VWYWx1ZScpO1xyXG4gICAgICAgIGlkID0gZmFsbGJhY2tJZD8udG9Mb3dlckNhc2UoKSA9PT0gJ3lvdXRoaWQnID8geW91dGhJZCA6IGVudGl0eUlkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXBhcmVTdWJtaXNzaW9uRGF0YShzdWJtaXNzaW9uOiBhbnkpIHtcclxuICAgIGNvbnN0IHN1Ym1pc3Npb25EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdWJtaXNzaW9uKSk7XHJcbiAgICBsZXQgZGF0YSA9IHN1Ym1pc3Npb25EYXRhLmRhdGE/LmRhdGE/LmVkaXRHcmlkID8gc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhIDogc3VibWlzc2lvbkRhdGEuZGF0YTtcclxuICAgIGRlbGV0ZSBkYXRhLnJpYmJvbkRhdGE7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIHByZXBhcmVSZXF1ZXN0RGF0YShmb3JtSWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYWdlaWQ6IGZvcm1JZCxcclxuICAgICAgcmVzcG9uc2U6IGRhdGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGb3JtRGF0YShlcnJvclR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKGVycm9yVHlwZSA9PT0gJ05PX0VESVQnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLndhcm4oJ1RoZSBlZGl0IHdpbmRvdyBmb3IgdGhpcyByZWNvcmQgaGFzIGV4cGlyZWQgYW5kIGNoYW5nZXMgY2Fubm90IGJlIG1hZGUgYXQgdGhpcyB0aW1lLicpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfSBlbHNlIGlmIChlcnJvclR5cGUgPT09ICdOT1RfQUxMT1dfVE9fRURJVCcgfHwgZXJyb3JUeXBlID09PSAnSU5WQUxJRF9VU0VSJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufVxyXG4iXX0=