import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const APP_PREFIX = 'GAMED-';
export class LocalStorageService {
    constructor() {
        // This is intentional
    }
    static loadInitialState() {
        return Object.keys(localStorage).reduce((state, storageKey) => {
            if (storageKey.includes(APP_PREFIX)) {
                const stateKeys = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.')
                    .map(key => key
                    .split('-')
                    .map((token, index) => (index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)))
                    .join(''));
                let currentStateRef = state;
                stateKeys.forEach((key, index) => {
                    if (index === stateKeys.length - 1) {
                        currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey) || '');
                        return;
                    }
                    currentStateRef[key] = currentStateRef[key] || {};
                    currentStateRef = currentStateRef[key];
                });
            }
            return state;
        }, {});
    }
    setItem(key, value) {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    }
    getItem(key) {
        return localStorage.getItem(`${APP_PREFIX}${key}`) || '';
    }
    removeItem(key) {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
    }
    /** Tests that localStorage exists, can be written to, and read from. */
    testLocalStorage() {
        const testValue = 'testValue';
        const testKey = 'testKey';
        const errorMessage = 'localStorage did not return expected value';
        this.setItem(testKey, testValue);
        const retrievedValue = this.getItem(testKey);
        this.removeItem(testKey);
        if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBSzVCLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUI7UUFDRSxzQkFBc0I7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0I7UUFDckIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUNqRSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sU0FBUyxHQUFHLFVBQVU7cUJBQ3pCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO3FCQUN2QixXQUFXLEVBQUU7cUJBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQztxQkFDVixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDVCxHQUFHO3FCQUNBLEtBQUssQ0FBQyxHQUFHLENBQUM7cUJBQ1YsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3RixJQUFJLENBQUMsRUFBRSxDQUFDLENBQ1osQ0FBQztnQkFDSixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQy9CLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRSxPQUFPO3FCQUNSO29CQUNELGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNsRCxlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQzdCLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFVLEdBQUcsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLGdCQUFnQjtRQUNkLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUM5QixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDMUIsTUFBTSxZQUFZLEdBQUcsNENBQTRDLENBQUM7UUFFbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpCLElBQUksY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzt3R0F6RFUsbUJBQW1COzRHQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IEFQUF9QUkVGSVggPSAnR0FNRUQtJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5yZWR1Y2UoKHN0YXRlOiBhbnksIHN0b3JhZ2VLZXkpID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2VLZXkuaW5jbHVkZXMoQVBQX1BSRUZJWCkpIHtcclxuICAgICAgICBjb25zdCBzdGF0ZUtleXMgPSBzdG9yYWdlS2V5XHJcbiAgICAgICAgICAucmVwbGFjZShBUFBfUFJFRklYLCAnJylcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAuc3BsaXQoJy4nKVxyXG4gICAgICAgICAgLm1hcChrZXkgPT5cclxuICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgLnNwbGl0KCctJylcclxuICAgICAgICAgICAgICAubWFwKCh0b2tlbiwgaW5kZXgpID0+IChpbmRleCA9PT0gMCA/IHRva2VuIDogdG9rZW4uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0b2tlbi5zbGljZSgxKSkpXHJcbiAgICAgICAgICAgICAgLmpvaW4oJycpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGxldCBjdXJyZW50U3RhdGVSZWYgPSBzdGF0ZTtcclxuICAgICAgICBzdGF0ZUtleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBzdGF0ZUtleXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RhdGVSZWZba2V5XSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgfHwgJycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjdXJyZW50U3RhdGVSZWZba2V5XSA9IGN1cnJlbnRTdGF0ZVJlZltrZXldIHx8IHt9O1xyXG4gICAgICAgICAgY3VycmVudFN0YXRlUmVmID0gY3VycmVudFN0YXRlUmVmW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfSwge30pO1xyXG4gIH1cclxuXHJcbiAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7QVBQX1BSRUZJWH0ke2tleX1gLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbShrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke0FQUF9QUkVGSVh9JHtrZXl9YCkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtBUFBfUFJFRklYfSR7a2V5fWApO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRlc3RzIHRoYXQgbG9jYWxTdG9yYWdlIGV4aXN0cywgY2FuIGJlIHdyaXR0ZW4gdG8sIGFuZCByZWFkIGZyb20uICovXHJcbiAgdGVzdExvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IHRlc3RWYWx1ZSA9ICd0ZXN0VmFsdWUnO1xyXG4gICAgY29uc3QgdGVzdEtleSA9ICd0ZXN0S2V5JztcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdsb2NhbFN0b3JhZ2UgZGlkIG5vdCByZXR1cm4gZXhwZWN0ZWQgdmFsdWUnO1xyXG5cclxuICAgIHRoaXMuc2V0SXRlbSh0ZXN0S2V5LCB0ZXN0VmFsdWUpO1xyXG4gICAgY29uc3QgcmV0cmlldmVkVmFsdWUgPSB0aGlzLmdldEl0ZW0odGVzdEtleSk7XHJcbiAgICB0aGlzLnJlbW92ZUl0ZW0odGVzdEtleSk7XHJcblxyXG4gICAgaWYgKHJldHJpZXZlZFZhbHVlICE9PSB0ZXN0VmFsdWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==