import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test codesss
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU12QyxNQUFNLE9BQU8sZ0JBQWdCO0lBQ25CLG1CQUFtQixHQUFHLElBQUksZUFBZSxDQUFNLEVBQVMsQ0FBQyxDQUFDO0lBQzNELFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFOUQ7UUFDRSxlQUFlO0lBQ2pCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDN0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVDLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDeEMsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7d0dBakNVLGdCQUFnQjs0R0FBaEIsZ0JBQWdCLGNBRmYsTUFBTTs7NEZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVN0b3JlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjdXJyZW50U3RvcmVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9IGFzIGFueSk7XHJcbiAgcHVibGljIGN1cnJlbnRTdG9yZSA9IHRoaXMuY3VycmVudFN0b3JlU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0ZXN0IGNvZGVzc3NcclxuICB9XHJcblxyXG4gIHNldERhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRTdG9yZSA9IHRoaXMuZ2V0Q3VycmVudFN0b3JlKCk7XHJcbiAgICBjdXJyZW50U3RvcmVba2V5XSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jdXJyZW50U3RvcmVTdWJqZWN0Lm5leHQoY3VycmVudFN0b3JlKTtcclxuICB9XHJcblxyXG4gIHNldE9iamVjdCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IGN1cnJlbnRTdG9yZSA9IHRoaXMuZ2V0Q3VycmVudFN0b3JlKCk7XHJcbiAgICByZXR1cm4gY3VycmVudFN0b3JlW2tleV07XHJcbiAgfVxyXG5cclxuICBjbGVhclN0b3JlKCkge1xyXG4gICAgY29uc3QgY3VycmVudFN0b3JlID0gdGhpcy5nZXRDdXJyZW50U3RvcmUoKTtcclxuICAgIE9iamVjdC5rZXlzKGN1cnJlbnRTdG9yZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGRlbGV0ZSBjdXJyZW50U3RvcmVba2V5XTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jdXJyZW50U3RvcmVTdWJqZWN0Lm5leHQoY3VycmVudFN0b3JlKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRTdG9yZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0b3JlU3ViamVjdC52YWx1ZTtcclxuICB9XHJcbn1cclxuIl19