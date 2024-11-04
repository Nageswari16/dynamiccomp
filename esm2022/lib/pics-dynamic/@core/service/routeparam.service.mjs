import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./local.service";
export class routeParamService {
    route;
    localStorage;
    constructor(route, localStorage) {
        this.route = route;
        this.localStorage = localStorage;
    }
    getSourceId(id) {
        if (this.route.parent && this.route.parent.parent && this.route.parent.parent.snapshot.paramMap.get('sourceid')) {
            return this.route.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else if (this.route.parent &&
            this.route.parent.parent &&
            this.route.parent.parent.parent &&
            this.route.parent.parent.parent.snapshot.paramMap.get('sourceid')) {
            return this.route.parent.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else {
            return id;
        }
    }
    handleEvent(event, pageId, id, isReadOnly, editId) {
        if (event && event.payload.mappingFormId === pageId) {
            if (event.eventName === 'edit') {
                id = event.payload.id;
                editId = event.payload.id;
                isReadOnly = false;
            }
            else if (event.eventName === 'view') {
                id = event.payload.id;
                editId = event.payload.id;
                isReadOnly = true;
            }
            else if (event.eventName === 'add') {
                id = null;
                editId = null;
                isReadOnly = false;
            }
        }
        return { id, isReadOnly, editId };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, deps: [{ token: i1.ActivatedRoute }, { token: i2.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVwYXJhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9yb3V0ZXBhcmFtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8zQyxNQUFNLE9BQU8saUJBQWlCO0lBRWxCO0lBQ0E7SUFGVixZQUNVLEtBQXFCLEVBQ3JCLFlBQTBCO1FBRDFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2pDLENBQUM7SUFFSixXQUFXLENBQUMsRUFBRTtRQUNaLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM3RyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuRTthQUFNLElBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDakU7WUFDQSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVUsRUFBRSxNQUFjLEVBQUUsRUFBaUIsRUFBRSxVQUFtQixFQUFFLE1BQXFCO1FBQ25HLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxLQUFLLE1BQU0sRUFBRTtZQUNuRCxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO2dCQUM5QixFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ3RCLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNwQjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO2dCQUNyQyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ3RCLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNuQjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO2dCQUNwQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNWLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2QsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNwQjtTQUNGO1FBRUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQzt3R0F2Q1UsaUJBQWlCOzRHQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3Mgcm91dGVQYXJhbVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBnZXRTb3VyY2VJZChpZCl7XHJcbiAgICBpZiAodGhpcy5yb3V0ZS5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50ICYmIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJykpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmVudCAmJlxyXG4gICAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudCAmJlxyXG4gICAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQgJiZcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFdmVudChldmVudDogYW55LCBwYWdlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB8IG51bGwsIGlzUmVhZE9ubHk6IGJvb2xlYW4sIGVkaXRJZDogc3RyaW5nIHwgbnVsbCk6IHsgaWQ6IHN0cmluZyB8IG51bGw7IGlzUmVhZE9ubHk6IGJvb2xlYW47IGVkaXRJZDogc3RyaW5nIHwgbnVsbCB9IHtcclxuICAgIGlmIChldmVudCAmJiBldmVudC5wYXlsb2FkLm1hcHBpbmdGb3JtSWQgPT09IHBhZ2VJZCkge1xyXG4gICAgICBpZiAoZXZlbnQuZXZlbnROYW1lID09PSAnZWRpdCcpIHtcclxuICAgICAgICBpZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgZWRpdElkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICBpc1JlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZXZlbnROYW1lID09PSAndmlldycpIHtcclxuICAgICAgICBpZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgZWRpdElkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICBpc1JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5ldmVudE5hbWUgPT09ICdhZGQnKSB7XHJcbiAgICAgICAgaWQgPSBudWxsO1xyXG4gICAgICAgIGVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgaXNSZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgaWQsIGlzUmVhZE9ubHksIGVkaXRJZCB9O1xyXG4gIH1cclxufVxyXG4iXX0=