import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/local.service";
import * as i3 from "../../@core/service/alert.service";
export class FormSubmissionService {
    route;
    localStorage;
    alertService;
    constructor(route, localStorage, alertService) {
        this.route = route;
        this.localStorage = localStorage;
        this.alertService = alertService;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormSubmissionService, deps: [{ token: i1.ActivatedRoute }, { token: i2.LocalService }, { token: i3.AlertService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormSubmissionService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormSubmissionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.LocalService }, { type: i3.AlertService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXN1Ym1pdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9mb3JtLXBhZ2UvZm9ybXN1Ym1pdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTNDLE1BQU0sT0FBTyxxQkFBcUI7SUFFdEI7SUFDQTtJQUNBO0lBSFYsWUFDVSxLQUFxQixFQUNyQixZQUEwQixFQUMxQixZQUEwQjtRQUYxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNqQyxDQUFDO0lBRUosY0FBYyxDQUFDLE1BQWMsRUFBRSxVQUFrQjtRQUMvQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ3JELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3RCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoSCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakksRUFBRSxHQUFHLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQ25FO1lBQ0QsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxVQUFlO1FBQ25DLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDaEcsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQWMsRUFBRSxJQUFTO1FBQzFDLE9BQU87WUFDTCxNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsU0FBaUI7UUFDOUIsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztZQUNqSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDthQUFNLElBQUksU0FBUyxLQUFLLG1CQUFtQixJQUFJLFNBQVMsS0FBSyxjQUFjLEVBQUU7WUFDNUUsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2pELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQzt3R0FoRFUscUJBQXFCOzRHQUFyQixxQkFBcUIsY0FGcEIsTUFBTTs7NEZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVN1Ym1pc3Npb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU2VydmljZSxcclxuICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGdldElkRnJvbVJvdXRlKGVkaXRJZDogc3RyaW5nLCBmYWxsYmFja0lkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSA9PT0gJ2Zvcm0nKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChlZGl0SWQpIHtcclxuICAgICAgcmV0dXJuIGVkaXRJZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICBjb25zdCBjcmVhdGVQYWdlID0gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0T2JqKCdBZGRBY3Rpb24nKTtcclxuICAgICAgaWYgKCFpZCAmJiAhY3JlYXRlUGFnZSkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eUlkID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnaWQnKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgICAgICBjb25zdCB5b3V0aElkID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlVmFsdWUnKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlVmFsdWUnKTtcclxuICAgICAgICBpZCA9IGZhbGxiYWNrSWQ/LnRvTG93ZXJDYXNlKCkgPT09ICd5b3V0aGlkJyA/IHlvdXRoSWQgOiBlbnRpdHlJZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlU3VibWlzc2lvbkRhdGEoc3VibWlzc2lvbjogYW55KSB7XHJcbiAgICBjb25zdCBzdWJtaXNzaW9uRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3VibWlzc2lvbikpO1xyXG4gICAgbGV0IGRhdGEgPSBzdWJtaXNzaW9uRGF0YS5kYXRhPy5kYXRhPy5lZGl0R3JpZCA/IHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YSA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlUmVxdWVzdERhdGEoZm9ybUlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZWlkOiBmb3JtSWQsXHJcbiAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRm9ybURhdGEoZXJyb3JUeXBlOiBzdHJpbmcpIHtcclxuICAgIGlmIChlcnJvclR5cGUgPT09ICdOT19FRElUJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS53YXJuKCdUaGUgZWRpdCB3aW5kb3cgZm9yIHRoaXMgcmVjb3JkIGhhcyBleHBpcmVkIGFuZCBjaGFuZ2VzIGNhbm5vdCBiZSBtYWRlIGF0IHRoaXMgdGltZS4nKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyb3JUeXBlID09PSAnTk9UX0FMTE9XX1RPX0VESVQnIHx8IGVycm9yVHlwZSA9PT0gJ0lOVkFMSURfVVNFUicpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uud2FybignU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn1cclxuIl19