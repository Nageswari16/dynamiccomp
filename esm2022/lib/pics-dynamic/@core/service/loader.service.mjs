import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// const LOADER_SELECTOR = '#loaderAnimation';
export class LoaderService {
    loaderContainer = document.getElementById('loaderAnimation2');
    constructor() {
        $('#loaderAnimation').hide();
    }
    show() {
        $('#loaderAnimation').show();
    }
    hide() {
        $('#loaderAnimation').hide();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS9zZXJ2aWNlL2xvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLDhDQUE4QztBQU05QyxNQUFNLE9BQU8sYUFBYTtJQUNoQixlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RFO1FBQ0UsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUk7UUFDRixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSTtRQUNGLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7d0dBWlUsYUFBYTs0R0FBYixhQUFhLGNBSFosTUFBTTs7NEZBR1AsYUFBYTtrQkFKekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmRlY2xhcmUgY29uc3QgJDogYW55O1xyXG4vLyBjb25zdCBMT0FERVJfU0VMRUNUT1IgPSAnI2xvYWRlckFuaW1hdGlvbic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGVyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsb2FkZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyQW5pbWF0aW9uMicpO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgJCgnI2xvYWRlckFuaW1hdGlvbicpLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICAkKCcjbG9hZGVyQW5pbWF0aW9uJykuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgICQoJyNsb2FkZXJBbmltYXRpb24nKS5oaWRlKCk7XHJcbiAgfVxyXG59Il19