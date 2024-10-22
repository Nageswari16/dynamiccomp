import { Injectable } from '@angular/core';
import { RoutesRecognized } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppService {
    router;
    currentState = new Subject();
    currentValue = new BehaviorSubject({});
    getValue = this.currentValue.asObservable();
    excludedUrl = ['/login', '/registration/', '/forgot-password', 'change-password'];
    previousUrl;
    constructor(router) {
        this.router = router;
        this.router.events
            .pipe(filter((evt) => evt instanceof RoutesRecognized), pairwise())
            .subscribe((events) => {
            this.previousUrl = events[0].urlAfterRedirects;
        });
    }
    addValue(key, value) {
        this.currentState.next({ key, value });
    }
    setValue(key, value) {
        this.currentValue.next({ key, value });
    }
    canNavigateBack() {
        return this.previousUrl && !this.excludedUrl.some((url) => this.previousUrl.startsWith(url));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS9zZXJ2aWNlL2FwcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFVLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS2xELE1BQU0sT0FBTyxVQUFVO0lBU0Q7SUFQcEIsWUFBWSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQzNDLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztJQUM1QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVwQyxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNsRixXQUFXLENBQVM7SUFFNUIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsWUFBWSxnQkFBZ0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ3ZFLFNBQVMsQ0FBQyxDQUFDLE1BQTBCLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO3dHQTNCVSxVQUFVOzRHQUFWLFVBQVUsY0FGVCxNQUFNOzs0RkFFUCxVQUFVO2tCQUh0QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXNSZWNvZ25pemVkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgcGFpcndpc2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuXHJcbiAgY3VycmVudFN0YXRlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGN1cnJlbnRWYWx1ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XHJcbiAgZ2V0VmFsdWUgPSB0aGlzLmN1cnJlbnRWYWx1ZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBleGNsdWRlZFVybCA9IFsnL2xvZ2luJywgJy9yZWdpc3RyYXRpb24vJywgJy9mb3Jnb3QtcGFzc3dvcmQnLCAnY2hhbmdlLXBhc3N3b3JkJ107XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1VybDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgIC5waXBlKGZpbHRlcigoZXZ0OiBhbnkpID0+IGV2dCBpbnN0YW5jZW9mIFJvdXRlc1JlY29nbml6ZWQpLCBwYWlyd2lzZSgpKVxyXG4gICAgLnN1YnNjcmliZSgoZXZlbnRzOiBSb3V0ZXNSZWNvZ25pemVkW10pID0+IHtcclxuICAgICAgdGhpcy5wcmV2aW91c1VybCA9IGV2ZW50c1swXS51cmxBZnRlclJlZGlyZWN0cztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY3VycmVudFN0YXRlLm5leHQoeyBrZXksIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQoeyBrZXksIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuTmF2aWdhdGVCYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNVcmwgJiYgIXRoaXMuZXhjbHVkZWRVcmwuc29tZSgodXJsKSA9PiB0aGlzLnByZXZpb3VzVXJsLnN0YXJ0c1dpdGgodXJsKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=