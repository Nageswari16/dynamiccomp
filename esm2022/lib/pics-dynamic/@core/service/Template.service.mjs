import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/local.service";
export class TemplateService {
    localStorage;
    constructor(localStorage) {
        this.localStorage = localStorage;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplateService, deps: [{ token: i1.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplateService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TemplateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvVGVtcGxhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVM0MsTUFBTSxPQUFPLGVBQWU7SUFFZDtJQURWLFlBQ1UsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDakMsQ0FBQztJQUVKLFFBQVEsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDdkMsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDNUIsS0FBSyxNQUFNO29CQUNULE9BQU8sUUFBUSxRQUFRLEVBQUUsQ0FBQztnQkFDNUIsS0FBSyxNQUFNO29CQUNULE9BQU8sUUFBUSxRQUFRLEVBQUUsQ0FBQztnQkFDNUIsS0FBSyxLQUFLO29CQUNSLE9BQU8sT0FBTyxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsS0FBSyxNQUFNO29CQUNULE9BQU8sUUFBUSxRQUFRLEVBQUUsQ0FBQzthQUM3QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQzt3R0FuQlEsZUFBZTs0R0FBZixlQUFlLGNBRmQsTUFBTTs7NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9sb2NhbC5zZXJ2aWNlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFNlcnZpY2UsXHJcbiAgICApIHt9XHJcbiAgXHJcbiAgICBnZXRUaXRsZShhY3Rpb246IHN0cmluZywgcGFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICBjYXNlICdlZGl0JzpcclxuICAgICAgICAgICAgcmV0dXJuIGBFZGl0ICR7cGFnZU5hbWV9YDtcclxuICAgICAgICAgIGNhc2UgJ3ZpZXcnOlxyXG4gICAgICAgICAgICByZXR1cm4gYFZpZXcgJHtwYWdlTmFtZX1gO1xyXG4gICAgICAgICAgY2FzZSAnYWRkJzpcclxuICAgICAgICAgICAgcmV0dXJuIGBBZGQgJHtwYWdlTmFtZX1gO1xyXG4gICAgICAgICAgY2FzZSAnbGluayc6XHJcbiAgICAgICAgICAgIHJldHVybiBgVmlldyAke3BhZ2VOYW1lfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGT1JNX1RJVExFJykgfHwgJyc7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==