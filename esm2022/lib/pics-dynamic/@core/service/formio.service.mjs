import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class FormioService {
    constructor() {
        //not to be empty
    }
    customEvent(event, formIO) {
        if (event.type === 'dateRange') {
            // this.dateRangeEvent(event, formIO);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS9zZXJ2aWNlL2Zvcm1pby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzNDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCO1FBQ0UsaUJBQWlCO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQVk7UUFDN0IsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUM5QixzQ0FBc0M7U0FDdkM7SUFDSCxDQUFDO3dHQVRVLGFBQWE7NEdBQWIsYUFBYSxjQUZaLE1BQU07OzRGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBEYXRlUmFuZ2UgfSBmcm9tICdAYXBwL3BhZ2VzL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9kYXRlLVJhbmdlL2RhdGVSYW5nZS13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1pb0NvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1pb1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy9ub3QgdG8gYmUgZW1wdHlcclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50KGV2ZW50LCBmb3JtSU8/OiBhbnkpIHtcclxuICAgIGlmIChldmVudC50eXBlID09PSAnZGF0ZVJhbmdlJykge1xyXG4gICAgICAvLyB0aGlzLmRhdGVSYW5nZUV2ZW50KGV2ZW50LCBmb3JtSU8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBkYXRlUmFuZ2VFdmVudChldmVudDogYW55LCBmb3JtSU86IEZvcm1pb0NvbXBvbmVudCkge1xyXG4gIC8vICAgY29uc3QgZGF0ZVJhbmdlOiBEYXRlUmFuZ2UgPSBldmVudD8udmFsdWU/LmRhdGVSYW5nZTtcclxuICAvLyAgIGlmIChkYXRlUmFuZ2UpIHtcclxuICAvLyAgICAgbGV0IHN0YXJ0RGF0ZUVsZW1lbnQgPSBmb3JtSU8uZm9ybWlvLmdldENvbXBvbmVudChkYXRlUmFuZ2Uuc3RhcnREYXRlS2V5KTtcclxuICAvLyAgICAgaWYgKCFzdGFydERhdGVFbGVtZW50KSB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHN0YXJ0IGNvbXBvbmVudC4uLicpO1xyXG4gIC8vICAgICAgIHN0YXJ0RGF0ZUVsZW1lbnQgPSBmb3JtSU8uZm9ybWlvLmNyZWF0ZUNvbXBvbmVudCh7XHJcbiAgLy8gICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAvLyAgICAgICAgIHZhbHVlOiBkYXRlUmFuZ2Uuc3RhcnREYXRlLFxyXG4gIC8vICAgICAgICAga2V5OiBkYXRlUmFuZ2Uuc3RhcnREYXRlS2V5XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgc3RhcnREYXRlRWxlbWVudC5zZXRWYWx1ZShkYXRlUmFuZ2Uuc3RhcnREYXRlKTtcclxuXHJcbiAgLy8gICAgIGxldCBlbmREYXRlRWxlbWVudCA9IGZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KGRhdGVSYW5nZS5lbmREYXRlS2V5KTtcclxuICAvLyAgICAgaWYgKCFlbmREYXRlRWxlbWVudCkge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBlbmQgY29tcG9uZW50Li4uJyk7XHJcbiAgLy8gICAgICAgZW5kRGF0ZUVsZW1lbnQgPSBmb3JtSU8uZm9ybWlvLmNyZWF0ZUNvbXBvbmVudCh7XHJcbiAgLy8gICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAvLyAgICAgICAgIHZhbHVlOiBkYXRlUmFuZ2UuZW5kRGF0ZSxcclxuICAvLyAgICAgICAgIGtleTogZGF0ZVJhbmdlLmVuZERhdGVLZXlcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBlbmREYXRlRWxlbWVudC5zZXRWYWx1ZShkYXRlUmFuZ2UuZW5kRGF0ZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==