import { Injectable } from '@angular/core';
import { Store } from '../service/store.service';
import { forkJoin, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthURL } from '../config/auth-url.config';
import { AuthState } from './auth.state';
import * as i0 from "@angular/core";
import * as i1 from "../service/platform-data-store.service";
export class AuthStore extends Store {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        super(new AuthState());
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    addAuthInfo(user) {
        this.setState({ ...this.state, user });
    }
    getAuthInfo() {
        console.log(this.state);
        if (this.state.user) {
            return of(this.state.user);
        }
        else {
            return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
                return user;
            }));
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, deps: [{ token: i1.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.PlatformDataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL2F1dGgvYXV0aC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUt6QyxNQUFNLE9BQU8sU0FBVSxTQUFRLEtBQWdCO0lBRXpCO0lBRHBCLFdBQVcsQ0FBSztJQUNoQixZQUFvQixhQUF1QztRQUN6RCxLQUFLLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBREwsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBRXpELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JELElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLElBQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNoRixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO3dHQTFCVSxTQUFTOzRHQUFULFNBQVMsY0FGUixNQUFNOzs0RkFFUCxTQUFTO2tCQUhyQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlckR0byB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uZW50aXR5JztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi9zZXJ2aWNlL3N0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBdXRoVVJMIH0gZnJvbSAnLi4vY29uZmlnL2F1dGgtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEF1dGhTdGF0ZSB9IGZyb20gJy4vYXV0aC5zdGF0ZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcGxhdGZvcm0tZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFN0b3JlIGV4dGVuZHMgU3RvcmU8QXV0aFN0YXRlPiB7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogUGxhdGZvcm1EYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihuZXcgQXV0aFN0YXRlKCkpO1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYWRkQXV0aEluZm8odXNlcjogVXNlckR0byk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHVzZXIgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRoSW5mbygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS51c2VyKSB7XHJcbiAgICAgIHJldHVybiBvZih0aGlzLnN0YXRlLnVzZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZvcmtKb2luKFt0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIudXNlckluZm8pXSkucGlwZShcclxuICAgICAgICB0YXAoKFt1c2VyXSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19