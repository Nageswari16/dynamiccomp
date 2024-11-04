import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./local.service";
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
    updateFormData(data) {
        if (data === 'NO_EDIT') {
            setTimeout(() => {
                this.alertService.warn('The edit window for this record has expired and changes cannot be made at this time.');
            }, 500);
        }
        else if (data === 'NOT_ALLOW_TO_EDIT' || data === 'INVALID_USER') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXN1Ym1pdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9mb3Jtc3VibWl0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRM0MsTUFBTSxPQUFPLHFCQUFxQjtJQUV0QjtJQUNBO0lBQ0E7SUFIVixZQUNVLEtBQXFCLEVBQ3JCLFlBQTBCLEVBQzFCLFlBQTBCO1FBRjFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2pDLENBQUM7SUFFSixjQUFjLENBQUMsTUFBYyxFQUFFLFVBQWtCO1FBQy9DLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDckQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2pCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNqSSxFQUFFLEdBQUcsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFDbkU7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVELHFCQUFxQixDQUFDLFVBQWU7UUFDbkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNoRyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBYyxFQUFFLElBQVM7UUFDMUMsT0FBTztZQUNMLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO0lBQ0osQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHNGQUFzRixDQUFDLENBQUM7WUFDakgsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBTSxJQUFJLElBQUksS0FBSyxtQkFBbUIsSUFBSSxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQ2xFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNqRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7d0dBaERVLHFCQUFxQjs0R0FBckIscUJBQXFCLGNBRnBCLE1BQU07OzRGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1TdWJtaXNzaW9uU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBnZXRJZEZyb21Sb3V0ZShlZGl0SWQ6IHN0cmluZywgZmFsbGJhY2tJZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykgPT09ICdmb3JtJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoZWRpdElkKSB7XHJcbiAgICAgIHJldHVybiBlZGl0SWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgICAgY29uc3QgY3JlYXRlUGFnZSA9IHRoaXMubG9jYWxTdG9yYWdlLmdldE9iaignQWRkQWN0aW9uJyk7XHJcbiAgICAgIGlmICghaWQgJiYgIWNyZWF0ZVBhZ2UpIHtcclxuICAgICAgICBjb25zdCBlbnRpdHlJZCA9IHRoaXMucm91dGUucGF0aEZyb21Sb290Py5maW5kKHggPT4geC5zbmFwc2hvdC5wYXJhbU1hcC5oYXMoJ2lkJykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgeW91dGhJZCA9IHRoaXMucm91dGUucGF0aEZyb21Sb290Py5maW5kKHggPT4geC5zbmFwc2hvdC5wYXJhbU1hcC5oYXMoJ3NvdXJjZVZhbHVlJykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZVZhbHVlJyk7XHJcbiAgICAgICAgaWQgPSBmYWxsYmFja0lkPy50b0xvd2VyQ2FzZSgpID09PSAneW91dGhpZCcgPyB5b3V0aElkIDogZW50aXR5SWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVN1Ym1pc3Npb25EYXRhKHN1Ym1pc3Npb246IGFueSkge1xyXG4gICAgY29uc3Qgc3VibWlzc2lvbkRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1Ym1pc3Npb24pKTtcclxuICAgIGxldCBkYXRhID0gc3VibWlzc2lvbkRhdGEuZGF0YT8uZGF0YT8uZWRpdEdyaWQgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgOiBzdWJtaXNzaW9uRGF0YS5kYXRhO1xyXG4gICAgZGVsZXRlIGRhdGEucmliYm9uRGF0YTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVJlcXVlc3REYXRhKGZvcm1JZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhZ2VpZDogZm9ybUlkLFxyXG4gICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZvcm1EYXRhKGRhdGE6IHN0cmluZykge1xyXG4gICAgaWYgKGRhdGEgPT09ICdOT19FRElUJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS53YXJuKCdUaGUgZWRpdCB3aW5kb3cgZm9yIHRoaXMgcmVjb3JkIGhhcyBleHBpcmVkIGFuZCBjaGFuZ2VzIGNhbm5vdCBiZSBtYWRlIGF0IHRoaXMgdGltZS4nKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gJ05PVF9BTExPV19UT19FRElUJyB8fCBkYXRhID09PSAnSU5WQUxJRF9VU0VSJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufVxyXG4iXX0=