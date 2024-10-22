import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./data-store.service";
export class HttpService {
    http;
    _storeservice;
    RBACORG;
    overrideUrl = true;
    errorData;
    baseUrl = '';
    tokenKey;
    headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('role', 'role=CP_PUBLIC');
    showSpinner = new BehaviorSubject(false);
    outsideShowSpinner = new BehaviorSubject(false);
    url1;
    url;
    constructor(http, _storeservice) {
        this.http = http;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.url = this.RBACORG['apiHost'] ? this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                this.tokenKey = this.RBACORG['tokenKey'];
            }
        });
        this.url1 = '';
    }
    get(apiRoute) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    post(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    put(apiRoute, body) {
        return this.http.put(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    patch(apiRoute, body) {
        return this.http.patch(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    delete(apiRoute) {
        return this.http.delete(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getHttpHeaders() {
        return new HttpHeaders().set('key', 'value');
    }
    getHttpNewHeaders() {
        return this.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }
    getAttachmentHttpHeaders(contentType) {
        return new HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
    }
    putUpload(apiRoute, body, contentType) {
        return this.http.put(`${this.url1 + apiRoute}`, body, { headers: this.getAttachmentHttpHeaders(contentType) });
    }
    putupload2(apiRoute, body, contenttype) {
        return this.http
            .put(`${this.url1 + apiRoute}`, body, {
            headers: this.getAttachmentHttpHeaders(contenttype),
            observe: 'response'
        })
            .pipe(map(data => {
            return data;
        }));
    }
    /**
     *
     * @param apiRoute
     * This function will download the stream file from the API service.
     * No HTTP required for this stream. So used Window.location.href to download the file
     */
    getFormDownloaded(apiRoute) {
        window.location.href = `${this.url + apiRoute}`;
    }
    //common http service(optional)
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error?.error?.message ? error?.error?.message : error.message}`;
        }
        return throwError(errorMessage);
    }
    getToken() {
        const token = this.tokenKey ? this.tokenKey : 'jwt-token';
        return sessionStorage.getItem(token);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXJDLE1BQU0sT0FBTyxXQUFXO0lBZUE7SUFBMEI7SUFkOUMsT0FBTyxDQUFNO0lBQ2IsV0FBVyxHQUFHLElBQUksQ0FBQztJQUNuQixTQUFTLENBQXFCO0lBQzlCLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDYixRQUFRLENBQU07SUFDUCxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7U0FDL0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztTQUNqQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO1NBQ3ZDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUUxQixXQUFXLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQzVFLGtCQUFrQixHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUMxRixJQUFJLENBQVM7SUFDYixHQUFHLENBQU07SUFDVCxZQUFvQixJQUFnQixFQUFVLGFBQStCO1FBQXpELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFB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Q0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzt3R0E1R1EsV0FBVzs0R0FBWCxXQUFXLGNBRlgsTUFBTTs7NEZBRU4sV0FBVztrQkFIdkIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUMsTUFBTTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aHJvd0Vycm9yJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46J3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgICBSQkFDT1JHOiBhbnk7XHJcbiAgICBvdmVycmlkZVVybCA9IHRydWU7XHJcbiAgICBlcnJvckRhdGEhOiBIdHRwRXJyb3JSZXNwb25zZTtcclxuICAgIGJhc2VVcmwgPSAnJztcclxuICAgIHRva2VuS2V5OiBhbnk7XHJcbiAgICBwdWJsaWMgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXHJcbiAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAuc2V0KCdyb2xlJywgJ3JvbGU9Q1BfUFVCTElDJyk7XHJcblxyXG4gICAgcHVibGljIHNob3dTcGlubmVyOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIHB1YmxpYyBvdXRzaWRlU2hvd1NwaW5uZXI6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgdXJsMTogc3RyaW5nO1xyXG4gICAgdXJsOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzWydSQkFDT1JHJ10gJiYgcmVzWydSQkFDT1JHJ10gIT09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5SQkFDT1JHWydhcGlIb3N0J10gPyB0aGlzLlJCQUNPUkdbJ2FwaUhvc3QnXSA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJztcclxuICAgICAgICAgIHRoaXMudG9rZW5LZXkgPSB0aGlzLlJCQUNPUkdbJ3Rva2VuS2V5J107XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy51cmwxID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGFwaVJvdXRlOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwTmV3SGVhZGVycygpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QoYXBpUm91dGU6IHN0cmluZywgYm9keTogYW55KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBOZXdIZWFkZXJzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk6IGFueSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBOZXdIZWFkZXJzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2goYXBpUm91dGU6IHN0cmluZywgYm9keT86IGFueSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwgYm9keSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cE5ld0hlYWRlcnMoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoYXBpUm91dGU6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBOZXdIZWFkZXJzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SHR0cEhlYWRlcnMoKTogSHR0cEhlYWRlcnMge1xyXG4gICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdrZXknLCAndmFsdWUnKTtcclxuICAgIH1cclxuICAgIGdldEh0dHBOZXdIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7dGhpcy5nZXRUb2tlbigpfWApO1xyXG4gICAgfVxyXG4gICAgZ2V0QXR0YWNobWVudEh0dHBIZWFkZXJzKGNvbnRlbnRUeXBlOiBhbnkpOiBIdHRwSGVhZGVycyB7XHJcbiAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKS5zZXQoJ3gtbXMtYmxvYi10eXBlJywgJ0Jsb2NrQmxvYicpO1xyXG4gICAgfVxyXG4gICAgcHV0VXBsb2FkKGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk6IGFueSwgY29udGVudFR5cGU6IGFueSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHt0aGlzLnVybDEgKyBhcGlSb3V0ZX1gLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuZ2V0QXR0YWNobWVudEh0dHBIZWFkZXJzKGNvbnRlbnRUeXBlKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdXR1cGxvYWQyKGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk6IGFueSwgY29udGVudHR5cGU6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAucHV0KGAke3RoaXMudXJsMSArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0QXR0YWNobWVudEh0dHBIZWFkZXJzKGNvbnRlbnR0eXBlKSxcclxuICAgICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcGlSb3V0ZVxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGRvd25sb2FkIHRoZSBzdHJlYW0gZmlsZSBmcm9tIHRoZSBBUEkgc2VydmljZS5cclxuICAgICAqIE5vIEhUVFAgcmVxdWlyZWQgZm9yIHRoaXMgc3RyZWFtLiBTbyB1c2VkIFdpbmRvdy5sb2NhdGlvbi5ocmVmIHRvIGRvd25sb2FkIHRoZSBmaWxlXHJcbiAgICAgKi9cclxuICAgIGdldEZvcm1Eb3dubG9hZGVkKGFwaVJvdXRlOiBzdHJpbmcpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt0aGlzLnVybCArIGFwaVJvdXRlfWA7XHJcbiAgICB9XHJcbiAgICAvL2NvbW1vbiBodHRwIHNlcnZpY2Uob3B0aW9uYWwpXHJcblxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAgIC8vIENsaWVudC1zaWRlIGVycm9yc1xyXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGBFcnJvcjogJHtlcnJvci5lcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2VydmVyLXNpZGUgZXJyb3JzXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7XHJcbiAgICAgICAgICBlcnJvcj8uZXJyb3I/Lm1lc3NhZ2UgPyBlcnJvcj8uZXJyb3I/Lm1lc3NhZ2UgOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgfWA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGdldFRva2VuKCk6IGFueSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlbktleSA/IHRoaXMudG9rZW5LZXkgOiAnand0LXRva2VuJztcclxuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odG9rZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==