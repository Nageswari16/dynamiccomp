import { Injectable } from '@angular/core';
import { LocalService } from '../../@core/service/local.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/local.service";
export class routeParamService {
    route;
    localStorage;
    constructor(injector, route, localStorage) {
        this.route = route;
        this.localStorage = localStorage;
        this.localStorage = injector.get(LocalService);
    }
    getSourceId(id) {
        let purpose;
        let sourceid;
        if (this.route.parent && this.route.parent.parent && this.route.parent.parent.snapshot.paramMap.get('sourceid')) {
            sourceid = this.route.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else if (this.route.parent &&
            this.route.parent.parent &&
            this.route.parent.parent.parent &&
            this.route.parent.parent.parent.snapshot.paramMap.get('sourceid')) {
            sourceid = this.route.parent.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else {
            sourceid = id;
        }
        if (!sourceid) {
            sourceid = this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
                ? this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
                : this.route?.parent?.parent?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid');
        }
        purpose =
            this.route.parent && this.route.parent.snapshot.params.purpose
                ? this.route.parent.snapshot.params.purpose
                : this.route?.parent?.parent.snapshot.params.purpose;
        return { sourceid, purpose };
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
    getIdfromRoute(editId, fallbackIdFromRoute) {
        let id;
        if (this.route.snapshot.paramMap.get('id') === 'form') {
            id = null;
        }
        else if (editId) {
            id = editId;
        }
        else {
            id = this.route.snapshot.paramMap.get('id');
            if (!id) {
                const fallbackId = fallbackIdFromRoute ? fallbackIdFromRoute : 'id';
                id = this.route.pathFromRoot.find((x) => x.snapshot.paramMap.has(fallbackId))?.snapshot.paramMap.get(fallbackId) || null;
                sessionStorage.setItem('youthID', id || '');
            }
        }
        return id;
    }
    getIdFromRouteParamMap(key) {
        if (key === 'id') {
            return this.route.parent.snapshot.paramMap.get('id');
        }
        if (key === 'sourceKey') {
            return this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceKey'))?.snapshot.paramMap.get('sourceKey');
        }
        if (key === 'sourceValue') {
            return this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceKey'))?.snapshot.paramMap.get('sourceValue');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: i2.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: i2.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVwYXJhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9mb3JtLXBhZ2Uvcm91dGVwYXJhbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBS2pFLE1BQU0sT0FBTyxpQkFBaUI7SUFHbEI7SUFDQTtJQUhWLFlBQ0UsUUFBbUIsRUFDWCxLQUFxQixFQUNyQixZQUEwQjtRQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUVsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQWUsWUFBWSxDQUFDLENBQUM7SUFFL0QsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFFO1FBQ1osSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZFO2FBQU0sSUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFN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USxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDcEg7UUFFRCxJQUFHLEdBQUcsS0FBSyxhQUFhLEVBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUN0SDtJQUNILENBQUM7d0dBMUZVLGlCQUFpQjs0R0FBakIsaUJBQWlCLGNBRmhCLE1BQU07OzRGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyByb3V0ZVBhcmFtU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvciA6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGluamVjdG9yLmdldDxMb2NhbFNlcnZpY2U+KExvY2FsU2VydmljZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0U291cmNlSWQoaWQpIDogeyBzb3VyY2VpZDogc3RyaW5nIHwgbnVsbCwgcHVycG9zZTogc3RyaW5nIHwgbnVsbCB9e1xyXG4gICAgbGV0IHB1cnBvc2U7XHJcbiAgICBsZXQgc291cmNlaWQ7XHJcbiAgICBpZiAodGhpcy5yb3V0ZS5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50ICYmIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJykpIHtcclxuICAgICAgc291cmNlaWQgPSB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICkge1xyXG4gICAgICBzb3VyY2VpZCA9IHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc291cmNlaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXNvdXJjZWlkKSB7XHJcbiAgICAgIHNvdXJjZWlkID0gdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5zbmFwc2hvdD8ucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpXHJcbiAgICAgICAgPyB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICAgICA6IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVycG9zZSA9XHJcbiAgICB0aGlzLnJvdXRlLnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbXMucHVycG9zZVxyXG4gICAgICA/IHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtcy5wdXJwb3NlXHJcbiAgICAgIDogdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQuc25hcHNob3QucGFyYW1zLnB1cnBvc2U7XHJcbiAgICByZXR1cm4ge3NvdXJjZWlkLCBwdXJwb3NlIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBhbnksIHBhZ2VJZDogc3RyaW5nLCBpZDogc3RyaW5nIHwgbnVsbCwgaXNSZWFkT25seTogYm9vbGVhbiwgZWRpdElkOiBzdHJpbmcgfCBudWxsKTogeyBpZDogc3RyaW5nIHwgbnVsbDsgaXNSZWFkT25seTogYm9vbGVhbjsgZWRpdElkOiBzdHJpbmcgfCBudWxsIH0ge1xyXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnBheWxvYWQubWFwcGluZ0Zvcm1JZCA9PT0gcGFnZUlkKSB7XHJcbiAgICAgIGlmIChldmVudC5ldmVudE5hbWUgPT09ICdlZGl0Jykge1xyXG4gICAgICAgIGlkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICBlZGl0SWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIGlzUmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5ldmVudE5hbWUgPT09ICd2aWV3Jykge1xyXG4gICAgICAgIGlkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICBlZGl0SWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIGlzUmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmV2ZW50TmFtZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgICBpZCA9IG51bGw7XHJcbiAgICAgICAgZWRpdElkID0gbnVsbDtcclxuICAgICAgICBpc1JlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBpZCwgaXNSZWFkT25seSwgZWRpdElkIH07XHJcbiAgfVxyXG5cclxuICBnZXRJZGZyb21Sb3V0ZSAoZWRpdElkPzogc3RyaW5nLCBmYWxsYmFja0lkRnJvbVJvdXRlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBsZXQgaWQ6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpID09PSAnZm9ybScpIHtcclxuICAgICAgaWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChlZGl0SWQpIHtcclxuICAgICAgaWQgPSBlZGl0SWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG5cclxuICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgIGNvbnN0IGZhbGxiYWNrSWQgPSBmYWxsYmFja0lkRnJvbVJvdXRlID8gZmFsbGJhY2tJZEZyb21Sb3V0ZSA6ICdpZCc7XHJcbiAgICAgICAgaWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdC5maW5kKCh4KSA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcyhmYWxsYmFja0lkKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldChmYWxsYmFja0lkKSB8fCBudWxsO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3lvdXRoSUQnLCBpZCB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBnZXRJZEZyb21Sb3V0ZVBhcmFtTWFwIChrZXkpe1xyXG4gICAgaWYoa2V5ID09PSAnaWQnKXtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJylcclxuICAgIH1cclxuICAgIGlmKGtleSA9PT0gJ3NvdXJjZUtleScpe1xyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZUtleScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoa2V5ID09PSAnc291cmNlVmFsdWUnKXtcclxuICAgICAgcmV0dXJuIHRoaXMucm91dGUucGF0aEZyb21Sb290Py5maW5kKHggPT4geC5zbmFwc2hvdC5wYXJhbU1hcC5oYXMoJ3NvdXJjZUtleScpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VWYWx1ZScpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==