import { Injectable } from '@angular/core';
import { YouthPhotoConfig } from './youth-photo-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/platform-data-store.service";
export class YouthPhotoService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    uploadKey(objparams) {
        return this.httpService.post(YouthPhotoConfig.EndPoint.UploadKey, objparams);
    }
    addPhoto(data) {
        return this.httpService.post(YouthPhotoConfig.EndPoint.addYouthPhoto, data);
    }
    getYouthPhoto(youthid) {
        return this.httpService.get(YouthPhotoConfig.EndPoint.getYouthPhoto.replace('{youthid}', youthid));
    }
    deleteYouthPhoto(youthid) {
        return this.httpService.patch(YouthPhotoConfig.EndPoint.removeYouthPhoto.replace('{youthid}', youthid));
    }
    getByPhotoId(photoid) {
        return this.httpService.get(YouthPhotoConfig.EndPoint.getbyPhotoId.replace('{photoid}', photoid));
    }
    updateYouthPhoto(data) {
        return this.httpService.put(YouthPhotoConfig.EndPoint.updateYouthPhoto, data);
    }
    getPhysicalDescription(youthid) {
        return this.httpService.get(YouthPhotoConfig.EndPoint.getPhysicalDescription.replace('{youthid}', youthid));
    }
    getPhysicalMarkDescription(code) {
        return this.httpService.get(YouthPhotoConfig.EndPoint.getPhysicalLookUp + '?type=' + code);
    }
    getActivePage(tabPageId, permission, action) {
        return this.httpService.get(`${YouthPhotoConfig.EndPoint.getActivePage.replace('{id}', tabPageId)}${permission
            ? '?applyPermissions=true' : ''}${permission && action === 'add'
            ? '&action=add' : ''}${permission && action === 'edit'
            ? '&action=edit' : ''}${permission && action === 'view'
            ? '&action=view' : ''}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoService, deps: [{ token: i1.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.PlatformDataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dGgtcGhvdG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL3lvdXRoLXBob3RvL0Bjb3JlL3lvdXRoLXBob3RvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBSzVELE1BQU0sT0FBTyxpQkFBaUI7SUFFUjtJQURwQixXQUFXLENBQU07SUFDakIsWUFBb0IsYUFBdUM7UUFBdkMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3pELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JELElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUyxDQUFDLFNBQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBUztRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFPO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELGdCQUFnQixDQUFDLE9BQU87UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFRCxZQUFZLENBQUMsT0FBTztRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxPQUFPO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRUQsMEJBQTBCLENBQUMsSUFBSTtRQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFjLEVBQUUsVUFBb0IsRUFBRSxNQUFlO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ3pCLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLFVBQVU7WUFDaEYsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsVUFBVSxJQUFJLE1BQU0sS0FBSyxLQUFLO1lBQzlELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxVQUFVLElBQUksTUFBTSxLQUFLLE1BQU07WUFDcEQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLFVBQVUsSUFBSSxNQUFNLEtBQUssTUFBTTtZQUNyRCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDaEMsQ0FBQztJQUNKLENBQUM7d0dBbERVLGlCQUFpQjs0R0FBakIsaUJBQWlCLGNBRmhCLE1BQU07OzRGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvcGxhdGZvcm0tZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWW91dGhQaG90b0NvbmZpZyB9IGZyb20gJy4veW91dGgtcGhvdG8tdXJsLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZb3V0aFBob3RvU2VydmljZSB7XHJcbiAgaHR0cFNlcnZpY2U6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1cGxvYWRLZXkob2JqcGFyYW1zOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoWW91dGhQaG90b0NvbmZpZy5FbmRQb2ludC5VcGxvYWRLZXksIG9ianBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBhZGRQaG90byhkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoWW91dGhQaG90b0NvbmZpZy5FbmRQb2ludC5hZGRZb3V0aFBob3RvLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldFlvdXRoUGhvdG8oeW91dGhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFlvdXRoUGhvdG9Db25maWcuRW5kUG9pbnQuZ2V0WW91dGhQaG90by5yZXBsYWNlKCd7eW91dGhpZH0nLCB5b3V0aGlkKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVZb3V0aFBob3RvKHlvdXRoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKFlvdXRoUGhvdG9Db25maWcuRW5kUG9pbnQucmVtb3ZlWW91dGhQaG90by5yZXBsYWNlKCd7eW91dGhpZH0nLCB5b3V0aGlkKSk7XHJcbiAgfVxyXG5cclxuICBnZXRCeVBob3RvSWQocGhvdG9pZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFlvdXRoUGhvdG9Db25maWcuRW5kUG9pbnQuZ2V0YnlQaG90b0lkLnJlcGxhY2UoJ3twaG90b2lkfScsIHBob3RvaWQpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVlvdXRoUGhvdG8oZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KFlvdXRoUGhvdG9Db25maWcuRW5kUG9pbnQudXBkYXRlWW91dGhQaG90bywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRQaHlzaWNhbERlc2NyaXB0aW9uKHlvdXRoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChZb3V0aFBob3RvQ29uZmlnLkVuZFBvaW50LmdldFBoeXNpY2FsRGVzY3JpcHRpb24ucmVwbGFjZSgne3lvdXRoaWR9JywgeW91dGhpZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGh5c2ljYWxNYXJrRGVzY3JpcHRpb24oY29kZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFlvdXRoUGhvdG9Db25maWcuRW5kUG9pbnQuZ2V0UGh5c2ljYWxMb29rVXAgKyAnP3R5cGU9JyArIGNvZGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZlUGFnZSh0YWJQYWdlSWQ6IGFueSwgcGVybWlzc2lvbj86IGJvb2xlYW4sIGFjdGlvbj86IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBgJHtZb3V0aFBob3RvQ29uZmlnLkVuZFBvaW50LmdldEFjdGl2ZVBhZ2UucmVwbGFjZSgne2lkfScsIHRhYlBhZ2VJZCl9JHtwZXJtaXNzaW9uXHJcbiAgICAgICAgPyAnP2FwcGx5UGVybWlzc2lvbnM9dHJ1ZScgOiAnJ30ke3Blcm1pc3Npb24gJiYgYWN0aW9uID09PSAnYWRkJ1xyXG4gICAgICAgICAgPyAnJmFjdGlvbj1hZGQnIDogJyd9JHtwZXJtaXNzaW9uICYmIGFjdGlvbiA9PT0gJ2VkaXQnXHJcbiAgICAgICAgICAgID8gJyZhY3Rpb249ZWRpdCcgOiAnJ30ke3Blcm1pc3Npb24gJiYgYWN0aW9uID09PSAndmlldydcclxuICAgICAgICAgICAgICA/ICcmYWN0aW9uPXZpZXcnIDogJyd9YFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19