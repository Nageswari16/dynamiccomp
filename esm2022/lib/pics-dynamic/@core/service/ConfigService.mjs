import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ConfigService {
    truncateTextValue = 60;
    getValue() {
        return this.truncateTextValue;
    }
    setValue(newValue) {
        this.truncateTextValue = newValue;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvQ29uZmlnU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sYUFBYTtJQUNoQixpQkFBaUIsR0FBVyxFQUFFLENBQUM7SUFFdkMsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFRCxRQUFRLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQztJQUNwQyxDQUFDO3dHQVRVLGFBQWE7NEdBQWIsYUFBYSxjQUZaLE1BQU07OzRGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgdHJ1bmNhdGVUZXh0VmFsdWU6IG51bWJlciA9IDYwO1xyXG5cclxuICBnZXRWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudHJ1bmNhdGVUZXh0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZShuZXdWYWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnRydW5jYXRlVGV4dFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==