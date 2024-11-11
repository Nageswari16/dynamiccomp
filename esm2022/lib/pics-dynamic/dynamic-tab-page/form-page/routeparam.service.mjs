import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/local.service";
export class routeParamService {
    route;
    localStorage;
    constructor(route, localStorage) {
        this.route = route;
        this.localStorage = localStorage;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, deps: [{ token: i1.ActivatedRoute }, { token: i2.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: routeParamService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVwYXJhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9mb3JtLXBhZ2Uvcm91dGVwYXJhbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPM0MsTUFBTSxPQUFPLGlCQUFpQjtJQUVsQjtJQUNBO0lBRlYsWUFDVSxLQUFxQixFQUNyQixZQUEwQjtRQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNqQyxDQUFDO0lBRUosV0FBVyxDQUFDLEVBQUU7UUFDWixJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksUUFBUSxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQy9HLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkU7YUFBTSxJQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENB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QUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ3RIO0lBQ0gsQ0FBQzt3R0F0RlUsaUJBQWlCOzRHQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3Mgcm91dGVQYXJhbVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBnZXRTb3VyY2VJZChpZCkgOiB7IHNvdXJjZWlkOiBzdHJpbmcgfCBudWxsLCBwdXJwb3NlOiBzdHJpbmcgfCBudWxsIH17XHJcbiAgICBsZXQgcHVycG9zZTtcclxuICAgIGxldCBzb3VyY2VpZDtcclxuICAgIGlmICh0aGlzLnJvdXRlLnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKSkge1xyXG4gICAgICBzb3VyY2VpZCA9IHRoaXMucm91dGUucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudCAmJlxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudCAmJlxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKVxyXG4gICAgKSB7XHJcbiAgICAgIHNvdXJjZWlkID0gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzb3VyY2VpZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc291cmNlaWQpIHtcclxuICAgICAgc291cmNlaWQgPSB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICAgICA/IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8uc25hcHNob3Q/LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKVxyXG4gICAgICAgIDogdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8uc25hcHNob3Q/LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXJwb3NlID1cclxuICAgIHRoaXMucm91dGUucGFyZW50ICYmIHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtcy5wdXJwb3NlXHJcbiAgICAgID8gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1zLnB1cnBvc2VcclxuICAgICAgOiB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudC5zbmFwc2hvdC5wYXJhbXMucHVycG9zZTtcclxuICAgIHJldHVybiB7c291cmNlaWQsIHB1cnBvc2UgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXZlbnQoZXZlbnQ6IGFueSwgcGFnZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBudWxsLCBpc1JlYWRPbmx5OiBib29sZWFuLCBlZGl0SWQ6IHN0cmluZyB8IG51bGwpOiB7IGlkOiBzdHJpbmcgfCBudWxsOyBpc1JlYWRPbmx5OiBib29sZWFuOyBlZGl0SWQ6IHN0cmluZyB8IG51bGwgfSB7XHJcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQucGF5bG9hZC5tYXBwaW5nRm9ybUlkID09PSBwYWdlSWQpIHtcclxuICAgICAgaWYgKGV2ZW50LmV2ZW50TmFtZSA9PT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgaWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIGVkaXRJZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgaXNSZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmV2ZW50TmFtZSA9PT0gJ3ZpZXcnKSB7XHJcbiAgICAgICAgaWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIGVkaXRJZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgaXNSZWFkT25seSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZXZlbnROYW1lID09PSAnYWRkJykge1xyXG4gICAgICAgIGlkID0gbnVsbDtcclxuICAgICAgICBlZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIGlzUmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGlkLCBpc1JlYWRPbmx5LCBlZGl0SWQgfTtcclxuICB9XHJcblxyXG4gIGdldElkZnJvbVJvdXRlIChlZGl0SWQ/OiBzdHJpbmcsIGZhbGxiYWNrSWRGcm9tUm91dGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGxldCBpZDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykgPT09ICdmb3JtJykge1xyXG4gICAgICBpZCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVkaXRJZCkge1xyXG4gICAgICBpZCA9IGVkaXRJZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcblxyXG4gICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgY29uc3QgZmFsbGJhY2tJZCA9IGZhbGxiYWNrSWRGcm9tUm91dGUgPyBmYWxsYmFja0lkRnJvbVJvdXRlIDogJ2lkJztcclxuICAgICAgICBpZCA9IHRoaXMucm91dGUucGF0aEZyb21Sb290LmZpbmQoKHgpID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKGZhbGxiYWNrSWQpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KGZhbGxiYWNrSWQpIHx8IG51bGw7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgneW91dGhJRCcsIGlkIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGdldElkRnJvbVJvdXRlUGFyYW1NYXAgKGtleSl7XHJcbiAgICBpZihrZXkgPT09ICdpZCcpe1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKVxyXG4gICAgfVxyXG4gICAgaWYoa2V5ID09PSAnc291cmNlS2V5Jyl7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VLZXknKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlS2V5JylcclxuICAgIH1cclxuXHJcbiAgICBpZihrZXkgPT09ICdzb3VyY2VWYWx1ZScpe1xyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZVZhbHVlJylcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19