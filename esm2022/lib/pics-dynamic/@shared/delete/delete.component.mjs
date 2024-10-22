import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConstants } from '../../@core/entities/app-constants';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/http.service";
import * as i2 from "../../@core/service/alert.service";
import * as i3 from "@angular/material/dialog";
export class DeleteComponent {
    httpService;
    alert;
    dialogRef;
    deleteId;
    message;
    url;
    portConfig;
    successMsg;
    action;
    data;
    value;
    reasonStatus;
    enteredReason;
    isDisabled = false;
    reasonFormControl;
    rowData = {};
    constructor(httpService, alert, dialogRef, data) {
        this.httpService = httpService;
        this.alert = alert;
        this.dialogRef = dialogRef;
        if (data?.deleteId && data?.deleteId !== '' && data?.url && data?.url !== '') {
            this.deleteId = data.deleteId;
            this.action = data.action;
            this.reasonStatus = data.reasonStatus ?? false;
            this.message = data?.message ? data.message : 'Are you sure want to delete this record ?';
            this.url = data.url;
            this.portConfig = data.portConfig;
            this.successMsg = data?.successMsg ? data.successMsg : 'Deleted Successfully';
            this.data = data;
            this.enteredReason = '';
            this.rowData = { 'data': data.rowData };
            if (this.reasonStatus) {
                this.isDisabled = true;
            }
        }
    }
    ngOnInit() {
        this.reasonFormControl = new FormControl('', Validators.required);
    }
    deleteRecord() {
        if (this.action === 'update_activation') {
            this.updateActivation();
        }
        else if (this.action === 'update') {
            this.updateRecord();
        }
        else if (this.action === 'complete') {
            this.completeRecord();
        }
        else if (this.action === 'page_activation') {
            this.deactivatePage();
        }
        else {
            if (this.reasonStatus) {
                this.rowData = { ...this.rowData, 'reason': this.enteredReason };
                this.httpService.post(`${this.url}/${this.deleteId}`, this.rowData).subscribe(_result1 => {
                    this.closePopup('yes');
                    this.alert.success(this.successMsg);
                }, _error => {
                    this.closePopup();
                    this.alert.error(AppConstants.errorMessage);
                });
            }
            else {
                this.httpService.delete(`${this.url}/${this.deleteId}`).subscribe(_result => {
                    this.closePopup('yes');
                }, _error => {
                    this.closePopup();
                    this.alert.error(AppConstants.errorMessage);
                });
            }
        }
    }
    deactivatePage() {
        this.httpService.patch(this.url).subscribe(_result => {
            this.closePopup('yes');
            this.alert.success(this.successMsg);
        }, error => {
            this.closePopup();
            this.alert.error('Failed to deactivate page. Please try again.');
        });
    }
    updateRecord() {
        this.httpService.put(this.url, this.deleteId).subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, _error => {
            this.closePopup();
            this.alert.error(AppConstants.errorMessage);
        });
    }
    closePopup(deleteData = null) {
        this.dialogRef.close({ data: deleteData });
    }
    completeRecord() {
        this.data.data.status = 'Closed';
        this.data.data.statuskey = '81C';
        this.data.data.completeddate = new Date().toISOString();
        this.httpService
            .post(this.url, {
            data: this.data.data
        })
            .subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, _error => {
            this.closePopup();
            this.alert.error(AppConstants.errorMessage);
        });
    }
    updateActivation() {
        const userData = this.data.data;
        userData.isactive = userData.isactive === true ? false : true;
        this.httpService.post(this.url, [userData]).subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, error => {
            this.closePopup();
            console.log(error);
        });
    }
    checkIsDisabled(text) {
        if (text && text.trim() != '') {
            this.isDisabled = false;
            this.enteredReason = text;
        }
        else {
            this.isDisabled = true;
            this.enteredReason = text;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeleteComponent, deps: [{ token: i1.HttpService }, { token: i2.AlertService }, { token: i3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DeleteComponent, selector: "app-delete", ngImport: i0, template: "<div class=\"modal-body\">\r\n  <p>{{ message }}</p>\r\n\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-cancel mr-2\" mat-button (click)=\"closePopup()\">No</button>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"deleteRecord()\">Yes</button>\r\n  </div>\r\n</div>\r\n", styles: [".modal-body{padding:45px 30px 30px;text-align:center;width:500px}.modal-body p{color:var(--text-dark);font-size:var(--font-15);font-weight:500;margin-bottom:34px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-delete', template: "<div class=\"modal-body\">\r\n  <p>{{ message }}</p>\r\n\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-cancel mr-2\" mat-button (click)=\"closePopup()\">No</button>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"deleteRecord()\">Yes</button>\r\n  </div>\r\n</div>\r\n", styles: [".modal-body{padding:45px 30px 30px;text-align:center;width:500px}.modal-body p{color:var(--text-dark);font-size:var(--font-15);font-weight:500;margin-bottom:34px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }, { type: i2.AlertService }, { type: i3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0BzaGFyZWQvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFPekQsTUFBTSxPQUFPLGVBQWU7SUFnQmhCO0lBQ0E7SUFDRDtJQWpCVCxRQUFRLENBQVM7SUFDakIsT0FBTyxDQUFTO0lBQ2hCLEdBQUcsQ0FBUztJQUNaLFVBQVUsQ0FBUztJQUNuQixVQUFVLENBQVM7SUFDbkIsTUFBTSxDQUFTO0lBQ2YsSUFBSSxDQUFNO0lBQ1YsS0FBSyxDQUFNO0lBQ1gsWUFBWSxDQUFVO0lBQ3RCLGFBQWEsQ0FBUztJQUN0QixVQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLGlCQUFpQixDQUFjO0lBQy9CLE9BQU8sR0FBUSxFQUFFLENBQUM7SUFFbEIsWUFDVSxXQUF3QixFQUN4QixLQUFtQixFQUNwQixTQUF3QyxFQUN0QixJQUFJO1FBSHJCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FB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Q0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ25ELE9BQU8sQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUMxQixJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7d0dBckpVLGVBQWUscUdBbUJoQixlQUFlOzRGQW5CZCxlQUFlLGtEQ1o1Qiw2U0FRQTs7NEZESWEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZOzswQkF1Qm5CLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgQXBwQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vQGNvcmUvZW50aXRpZXMvYXBwLWNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWRlbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGVsZXRlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERlbGV0ZUNvbXBvbmVudCB7XHJcbiAgZGVsZXRlSWQ6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgcG9ydENvbmZpZzogc3RyaW5nO1xyXG4gIHN1Y2Nlc3NNc2c6IHN0cmluZztcclxuICBhY3Rpb246IHN0cmluZztcclxuICBkYXRhOiBhbnk7XHJcbiAgdmFsdWU6IGFueTtcclxuICByZWFzb25TdGF0dXM6IGJvb2xlYW47XHJcbiAgZW50ZXJlZFJlYXNvbjogc3RyaW5nO1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICByZWFzb25Gb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgcm93RGF0YTogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFsZXJ0OiBBbGVydFNlcnZpY2UsXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGVsZXRlQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBkYXRhXHJcbiAgKSB7XHJcbiAgICBpZiAoZGF0YT8uZGVsZXRlSWQgJiYgZGF0YT8uZGVsZXRlSWQgIT09ICcnICYmIGRhdGE/LnVybCAmJiBkYXRhPy51cmwgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMuZGVsZXRlSWQgPSBkYXRhLmRlbGV0ZUlkO1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGRhdGEuYWN0aW9uO1xyXG4gICAgICB0aGlzLnJlYXNvblN0YXR1cyA9IGRhdGEucmVhc29uU3RhdHVzID8/IGZhbHNlO1xyXG4gICAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhPy5tZXNzYWdlID8gZGF0YS5tZXNzYWdlIDogJ0FyZSB5b3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZCA/JztcclxuICAgICAgdGhpcy51cmwgPSBkYXRhLnVybDtcclxuICAgICAgdGhpcy5wb3J0Q29uZmlnID0gZGF0YS5wb3J0Q29uZmlnO1xyXG4gICAgICB0aGlzLnN1Y2Nlc3NNc2cgPSBkYXRhPy5zdWNjZXNzTXNnID8gZGF0YS5zdWNjZXNzTXNnIDogJ0RlbGV0ZWQgU3VjY2Vzc2Z1bGx5JztcclxuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgdGhpcy5lbnRlcmVkUmVhc29uID0gJyc7XHJcbiAgICAgIHRoaXMucm93RGF0YSA9IHsnZGF0YSc6IGRhdGEucm93RGF0YX07XHJcbiAgICAgIGlmKHRoaXMucmVhc29uU3RhdHVzKXtcclxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhc29uRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUmVjb3JkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYWN0aW9uID09PSAndXBkYXRlX2FjdGl2YXRpb24nKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGlvbigpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3VwZGF0ZScpIHtcclxuICAgICAgdGhpcy51cGRhdGVSZWNvcmQoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgdGhpcy5jb21wbGV0ZVJlY29yZCgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3BhZ2VfYWN0aXZhdGlvbicpIHtcclxuICAgICAgdGhpcy5kZWFjdGl2YXRlUGFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYodGhpcy5yZWFzb25TdGF0dXMpe1xyXG4gICAgICAgIHRoaXMucm93RGF0YSA9IHsuLi50aGlzLnJvd0RhdGEsICdyZWFzb24nIDp0aGlzLmVudGVyZWRSZWFzb259O1xyXG4gICAgICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoYCR7dGhpcy51cmx9LyR7dGhpcy5kZWxldGVJZH1gLCB0aGlzLnJvd0RhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICBfcmVzdWx0MSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoJ3llcycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydC5zdWNjZXNzKHRoaXMuc3VjY2Vzc01zZyk7XHJcbiAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydC5lcnJvcihBcHBDb25zdGFudHMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5kZWxldGUoYCR7dGhpcy51cmx9LyR7dGhpcy5kZWxldGVJZH1gKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICBfcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCd5ZXMnKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICAgICAgdGhpcy5hbGVydC5lcnJvcihBcHBDb25zdGFudHMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGRlYWN0aXZhdGVQYWdlKCkge1xyXG4gICAgdGhpcy5odHRwU2VydmljZS5wYXRjaCh0aGlzLnVybCkuc3Vic2NyaWJlKFxyXG4gICAgICBfcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoJ3llcycpO1xyXG4gICAgICAgIHRoaXMuYWxlcnQuc3VjY2Vzcyh0aGlzLnN1Y2Nlc3NNc2cpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgdGhpcy5hbGVydC5lcnJvcignRmFpbGVkIHRvIGRlYWN0aXZhdGUgcGFnZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlY29yZCgpIHtcclxuICAgIHRoaXMuaHR0cFNlcnZpY2UucHV0KHRoaXMudXJsLCB0aGlzLmRlbGV0ZUlkKS5zdWJzY3JpYmUoXHJcbiAgICAgIF9yZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMuYWxlcnQuc3VjY2Vzcyh0aGlzLnN1Y2Nlc3NNc2cpO1xyXG4gICAgICB9LFxyXG4gICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMuYWxlcnQuZXJyb3IoQXBwQ29uc3RhbnRzLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGNsb3NlUG9wdXAoZGVsZXRlRGF0YSA9IG51bGwpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHsgZGF0YTogZGVsZXRlRGF0YSB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBsZXRlUmVjb3JkKCkge1xyXG4gICAgdGhpcy5kYXRhLmRhdGEuc3RhdHVzID0gJ0Nsb3NlZCc7XHJcbiAgICB0aGlzLmRhdGEuZGF0YS5zdGF0dXNrZXkgPSAnODFDJztcclxuICAgIHRoaXMuZGF0YS5kYXRhLmNvbXBsZXRlZGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB0aGlzLmh0dHBTZXJ2aWNlXHJcbiAgICAgIC5wb3N0KHRoaXMudXJsLCB7XHJcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLmRhdGFcclxuICAgICAgfSlcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICBfcmVzdWx0ID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgICAgdGhpcy5hbGVydC5zdWNjZXNzKHRoaXMuc3VjY2Vzc01zZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0LmVycm9yKEFwcENvbnN0YW50cy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcbiAgdXBkYXRlQWN0aXZhdGlvbigpIHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gdGhpcy5kYXRhLmRhdGE7XHJcbiAgICB1c2VyRGF0YS5pc2FjdGl2ZSA9IHVzZXJEYXRhLmlzYWN0aXZlID09PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgdGhpcy5odHRwU2VydmljZS5wb3N0KHRoaXMudXJsLCBbdXNlckRhdGFdKS5zdWJzY3JpYmUoXHJcbiAgICAgIF9yZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMuYWxlcnQuc3VjY2Vzcyh0aGlzLnN1Y2Nlc3NNc2cpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tJc0Rpc2FibGVkKHRleHQ6IHN0cmluZyl7XHJcbiAgICBpZih0ZXh0ICYmIHRleHQudHJpbSgpICE9ICcnKXtcclxuICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZW50ZXJlZFJlYXNvbiA9IHRleHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmVudGVyZWRSZWFzb24gPSB0ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gIDxwPnt7IG1lc3NhZ2UgfX08L3A+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jYW5jZWwgbXItMlwiIG1hdC1idXR0b24gKGNsaWNrKT1cImNsb3NlUG9wdXAoKVwiPk5vPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlUmVjb3JkKClcIj5ZZXM8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==