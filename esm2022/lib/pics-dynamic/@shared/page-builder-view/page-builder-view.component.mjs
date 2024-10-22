import { Component, ViewChild } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { AuthService } from '../../@core/service/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/formio.service";
import * as i3 from "../../@core/service/page-builder-view.service";
import * as i4 from "@angular/common";
import * as i5 from "../../@core/service/local.service";
import * as i6 from "../../@core/service/dynamicsearch.service";
import * as i7 from "@formio/angular";
export class PageBuilderViewComponent {
    route;
    _formIO;
    pageBuilderViewService;
    location;
    localstore;
    dynamicSearchService;
    formId;
    jsonForm;
    fromTitle;
    id;
    submittedData;
    isformIO = false;
    routingConfig = false;
    appointmentList;
    formIO;
    dynamicTabPageService;
    pageid;
    editValue;
    authService;
    loggedUser;
    facility = [];
    providerData;
    constructor(injector, route, _formIO, pageBuilderViewService, location, localstore, dynamicSearchService) {
        this.route = route;
        this._formIO = _formIO;
        this.pageBuilderViewService = pageBuilderViewService;
        this.location = location;
        this.localstore = localstore;
        this.dynamicSearchService = dynamicSearchService;
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.authService = injector.get(AuthService);
        this.loggedUser = this.localstore.getObj('user');
    }
    ngOnInit() {
        this.loggedUser = this.localstore.getObj('user');
        this.formId = this.route.snapshot.paramMap.get('id');
        this.editValue = this.localstore.getObj('editValue');
        this.pageBuilderViewService.getPageVersionByid(this.formId).subscribe((result) => {
            if (result) {
                this.conditionCheckPageBuilder(result);
                if (this.editValue) {
                    this.submittedData = {
                        data: this.editValue
                    };
                    this.submittedData.data['edit'] = true;
                }
                else {
                    this.submittedData = { data: {} };
                }
                this.pageBuilderViewService.getPageVersionByid(this.formId).subscribe((res) => {
                    if (res) {
                        this.id = res?.data.id;
                        this.pageid = res?.data.pageid;
                        this.submittedData = res?.data.submissiondata ? JSON.parse(res?.data.submissiondata) : this.submittedData;
                        setTimeout(() => {
                            this.modifyVideoContent();
                        }, 300);
                    }
                });
            }
            if (result.data.tabconfig) {
                const routingTab = typeof result.data.tabconfig === "string" ? JSON.parse(result.data.tabconfig) : result.data.tabconfig;
                const routingPage = routingTab.filter(x => x.type === 'ROUTING');
                if (routingPage.length > 0 && routingPage[0].pathname === 'CreateSitevisitComponent') {
                    this.routingConfig = true;
                    this.appointmentList = Promise.resolve(true);
                }
            }
        });
    }
    conditionCheckPageBuilder(result) {
        if (result.data.templatejson) {
            this.isformIO = true;
            this.jsonForm = typeof result.data.templatejson === 'string' ? JSON.parse(result.data.templatejson) : result.data.templatejson;
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.data.pagename;
        }
    }
    modifyVideoContent() {
        const videoElements = document.querySelectorAll('.changetoIframe');
        if (videoElements && videoElements.length) {
            videoElements.forEach((element) => {
                const src = element.src;
                const ifrm = document.createElement('iframe');
                ifrm.setAttribute('src', src);
                ifrm.style.width = element.width ? element.width + 'px' : '';
                ifrm.style.height = element.height ? element.height + 'px' : '';
                element.replaceWith(ifrm);
            });
        }
    }
    onSubmit(submission) {
        const submissionData = JSON.parse(JSON.stringify(submission));
        console.log(submissionData, 'fdfasd');
        if (!submissionData?.data?.provider_id) {
            submissionData.data.provider_id = this.localstore.getObj('providerId');
        }
        this.facilityDetails(submissionData?.data?.provider_id, submissionData);
    }
    addAttachment(info) {
        this.dynamicTabPageService.createFormResponseAttachment(info).subscribe(res => console.log(res));
    }
    goBack() {
        this.localstore.removeItem('titletab');
        this.localstore.removeItem('editValue');
        this.localstore.removeItem('target-tab-filter');
        this.location.back();
    }
    customEvent(event) {
        // this._formIO.customEvent(event, this.formIO);
    }
    facilityDetails(id, submissionData) {
        const fileUploadData = this.authService.getSharedMessage();
        this.pageBuilderViewService.getFacilityDetails(id).subscribe((result) => {
            if (submissionData?.data?.provider_id != undefined && result.data.length == 0) {
                this.facility = result.data[result.data.length - 1];
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                data.provider_id = id;
                if ((this, this.facility?.id)) {
                    data.facility_id = this.facility?.id;
                    data.facilty_id = this.facility?.id;
                }
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id1 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id1, requestData).subscribe(() => {
                        const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
                else {
                    const id2 = null;
                    this.dynamicTabPageService.createFormResponse(id2, requestData).subscribe(res => {
                        const fileUploadInfo = Object.assign({ responseid: Number(res['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
            else if (submissionData?.data?.provider_id != undefined && result.data.length > 0) {
                this.facility = result.data[result.data.length - 1];
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                data.provider_id = id;
                data.facilty_id = this.facility?.id;
                data.facility_id = this.facility?.id;
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id3 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id3, requestData).subscribe(() => {
                        this.goBack();
                    });
                }
                else {
                    const id4 = null;
                    this.dynamicTabPageService.createFormResponse(id4, requestData).subscribe(_res => {
                        const fileUploadInfo = Object.assign({ responseid: Number(_res['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
            else {
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id5 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id5, requestData).subscribe(value => {
                        const fileUploadInfo = Object.assign({ responseid: Number(value['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
                else {
                    const id6 = null;
                    this.dynamicTabPageService.createFormResponse(id6, requestData).subscribe(_value => {
                        const fileUploadInfo = Object.assign({ responseid: Number(_value['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
        }, _error => {
            // this is intentional
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: i2.FormioService }, { token: i3.PageBuilderViewService }, { token: i4.Location }, { token: i5.LocalService }, { token: i6.DynamicsearchService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderViewComponent, selector: "app-page-builder-view", viewQueries: [{ propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\">\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n      <h6 class=\"font-weight-bold mb-0 mt-3 fromTitle\">{{ fromTitle }}</h6>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".container-fluid{background:#fff}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7.FormioComponent, selector: "formio" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-view', template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\">\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n      <h6 class=\"font-weight-bold mb-0 mt-3 fromTitle\">{{ fromTitle }}</h6>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".container-fluid{background:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: i2.FormioService }, { type: i3.PageBuilderViewService }, { type: i4.Location }, { type: i5.LocalService }, { type: i6.DynamicsearchService }]; }, propDecorators: { formIO: [{
                type: ViewChild,
                args: ['formIO']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQHNoYXJlZC9wYWdlLWJ1aWxkZXItdmlldy9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL3BhZ2UtYnVpbGRlci12aWV3L3BhZ2UtYnVpbGRlci12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7OztBQVcvRCxNQUFNLE9BQU8sd0JBQXdCO0lBdUJ6QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUE1QlYsTUFBTSxDQUFNO0lBQ1osUUFBUSxDQUFNO0lBQ2QsU0FBUyxDQUFNO0lBQ2YsRUFBRSxDQUFNO0lBQ1IsYUFBYSxDQUFNO0lBQ25CLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDakIsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN0QixlQUFlLENBQStCO0lBRzlDLE1BQU0sQ0FBa0I7SUFFeEIscUJBQXFCLENBQXdCO0lBQzdDLE1BQU0sQ0FBTTtJQUNaLFNBQVMsQ0FBTTtJQUNmLFdBQVcsQ0FBYztJQUN6QixVQUFVLENBQU07SUFDaEIsUUFBUSxHQUFRLEVBQUUsQ0FBQztJQUNuQixZQUFZLENBQU07SUFFbEIsWUFDRSxRQUFrQixFQUNWLEtBQXFCLEVBQ3JCLE9BQXNCLEVBQ3RC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QyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7d0JBQ25HLElBQUksY0FBYyxFQUFFLGlCQUFpQixFQUFFOzRCQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3lCQUNwQzt3QkFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7UUFDSCxDQUFDLEVBQ0QsTUFBTSxDQUFDLEVBQUU7WUFDUCxzQkFBc0I7UUFDeEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO3dHQTlOVSx3QkFBd0I7NEZBQXhCLHdCQUF3QiwrSkNoQnJDLG1oQkFXTTs7NEZES08sd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLHVCQUF1QjtrUkFlakMsTUFBTTtzQkFETCxTQUFTO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybWlvQ29tcG9uZW50IH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9keW5hbWljLXRhYi1wYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3U2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvcGFnZS1idWlsZGVyLXZpZXcuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNzZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9keW5hbWljc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9mb3JtaW8uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wYWdlLWJ1aWxkZXItdmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtYnVpbGRlci12aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlQnVpbGRlclZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvcm1JZDogYW55O1xyXG4gIGpzb25Gb3JtOiBhbnk7XHJcbiAgZnJvbVRpdGxlOiBhbnk7XHJcbiAgaWQ6IGFueTtcclxuICBzdWJtaXR0ZWREYXRhOiBhbnk7XHJcbiAgaXNmb3JtSU8gPSBmYWxzZTtcclxuICByb3V0aW5nQ29uZmlnID0gZmFsc2U7XHJcbiAgYXBwb2ludG1lbnRMaXN0OiBQcm9taXNlPGJvb2xlYW4+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBAVmlld0NoaWxkKCdmb3JtSU8nKVxyXG4gIGZvcm1JTzogRm9ybWlvQ29tcG9uZW50O1xyXG5cclxuICBkeW5hbWljVGFiUGFnZVNlcnZpY2U6IER5bmFtaWNUYWJQYWdlU2VydmljZTtcclxuICBwYWdlaWQ6IGFueTtcclxuICBlZGl0VmFsdWU6IGFueTtcclxuICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XHJcbiAgbG9nZ2VkVXNlcjogYW55O1xyXG4gIGZhY2lsaXR5OiBhbnkgPSBbXTtcclxuICBwcm92aWRlckRhdGE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgX2Zvcm1JTzogRm9ybWlvU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZUJ1aWxkZXJWaWV3U2VydmljZTogUGFnZUJ1aWxkZXJWaWV3U2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBsb2NhbHN0b3JlOiBMb2NhbFNlcnZpY2UsXHJcblxyXG4gICAgcHJpdmF0ZSBkeW5hbWljU2VhcmNoU2VydmljZTogRHluYW1pY3NlYXJjaFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNUYWJQYWdlU2VydmljZT4oRHluYW1pY1RhYlBhZ2VTZXJ2aWNlKTtcclxuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QXV0aFNlcnZpY2U+KEF1dGhTZXJ2aWNlKTtcclxuICAgIHRoaXMubG9nZ2VkVXNlciA9IHRoaXMubG9jYWxzdG9yZS5nZXRPYmooJ3VzZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZWRVc2VyID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaigndXNlcicpO1xyXG4gICAgdGhpcy5mb3JtSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgIHRoaXMuZWRpdFZhbHVlID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaignZWRpdFZhbHVlJyk7XHJcblxyXG4gICAgdGhpcy5wYWdlQnVpbGRlclZpZXdTZXJ2aWNlLmdldFBhZ2VWZXJzaW9uQnlpZCh0aGlzLmZvcm1JZCkuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25DaGVja1BhZ2VCdWlsZGVyKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdFZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZWRpdFZhbHVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGFbJ2VkaXQnXSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YToge30gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlQnVpbGRlclZpZXdTZXJ2aWNlLmdldFBhZ2VWZXJzaW9uQnlpZCh0aGlzLmZvcm1JZCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gcmVzPy5kYXRhLmlkO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VpZCA9IHJlcz8uZGF0YS5wYWdlaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHJlcz8uZGF0YS5zdWJtaXNzaW9uZGF0YSA/IEpTT04ucGFyc2UocmVzPy5kYXRhLnN1Ym1pc3Npb25kYXRhKSA6IHRoaXMuc3VibWl0dGVkRGF0YTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tb2RpZnlWaWRlb0NvbnRlbnQoKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LmRhdGEudGFiY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGluZ1RhYiA9IHR5cGVvZiByZXN1bHQuZGF0YS50YWJjb25maWcgPT09IFwic3RyaW5nXCIgPyBKU09OLnBhcnNlKHJlc3VsdC5kYXRhLnRhYmNvbmZpZykgOiByZXN1bHQuZGF0YS50YWJjb25maWc7XHJcbiAgICAgICAgY29uc3Qgcm91dGluZ1BhZ2UgPSByb3V0aW5nVGFiLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ1JPVVRJTkcnKTtcclxuICAgICAgICBpZiAocm91dGluZ1BhZ2UubGVuZ3RoID4gMCAmJiByb3V0aW5nUGFnZVswXS5wYXRobmFtZSA9PT0gJ0NyZWF0ZVNpdGV2aXNpdENvbXBvbmVudCcpIHtcclxuICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmFwcG9pbnRtZW50TGlzdCA9IFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uZGl0aW9uQ2hlY2tQYWdlQnVpbGRlcihyZXN1bHQpIHtcclxuICAgIGlmIChyZXN1bHQuZGF0YS50ZW1wbGF0ZWpzb24pIHtcclxuICAgICAgdGhpcy5pc2Zvcm1JTyA9IHRydWU7XHJcbiAgICAgIHRoaXMuanNvbkZvcm0gPSB0eXBlb2YgcmVzdWx0LmRhdGEudGVtcGxhdGVqc29uID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UocmVzdWx0LmRhdGEudGVtcGxhdGVqc29uKSA6IHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbjtcclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSB0aGlzLmpzb25Gb3JtICYmIHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA/IHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA6IHJlc3VsdC5kYXRhLnBhZ2VuYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuICBtb2RpZnlWaWRlb0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB2aWRlb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZXRvSWZyYW1lJyk7XHJcbiAgICBpZiAodmlkZW9FbGVtZW50cyAmJiB2aWRlb0VsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICB2aWRlb0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gICAgICAgIGNvbnN0IGlmcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICBpZnJtLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcclxuICAgICAgICBpZnJtLnN0eWxlLndpZHRoID0gZWxlbWVudC53aWR0aCA/IGVsZW1lbnQud2lkdGggKyAncHgnIDogJyc7XHJcbiAgICAgICAgaWZybS5zdHlsZS5oZWlnaHQgPSBlbGVtZW50LmhlaWdodCA/IGVsZW1lbnQuaGVpZ2h0ICsgJ3B4JyA6ICcnO1xyXG4gICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoaWZybSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoc3VibWlzc2lvbik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3VibWlzc2lvbkRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1Ym1pc3Npb24pKTtcclxuICAgIGNvbnNvbGUubG9nKHN1Ym1pc3Npb25EYXRhLCAnZmRmYXNkJyk7XHJcbiAgICBpZiAoIXN1Ym1pc3Npb25EYXRhPy5kYXRhPy5wcm92aWRlcl9pZCkge1xyXG4gICAgICBzdWJtaXNzaW9uRGF0YS5kYXRhLnByb3ZpZGVyX2lkID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaigncHJvdmlkZXJJZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mYWNpbGl0eURldGFpbHMoc3VibWlzc2lvbkRhdGE/LmRhdGE/LnByb3ZpZGVyX2lkLCBzdWJtaXNzaW9uRGF0YSk7XHJcbiAgfVxyXG5cclxuICBhZGRBdHRhY2htZW50KGluZm8pIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoaW5mbykuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYWxzdG9yZS5yZW1vdmVJdGVtKCd0aXRsZXRhYicpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ2VkaXRWYWx1ZScpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ3RhcmdldC10YWItZmlsdGVyJyk7XHJcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50KGV2ZW50KSB7XHJcbiAgICAvLyB0aGlzLl9mb3JtSU8uY3VzdG9tRXZlbnQoZXZlbnQsIHRoaXMuZm9ybUlPKTtcclxuICB9XHJcblxyXG4gIGZhY2lsaXR5RGV0YWlscyhpZCwgc3VibWlzc2lvbkRhdGEpIHtcclxuICAgIGNvbnN0IGZpbGVVcGxvYWREYXRhID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyVmlld1NlcnZpY2UuZ2V0RmFjaWxpdHlEZXRhaWxzKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChzdWJtaXNzaW9uRGF0YT8uZGF0YT8ucHJvdmlkZXJfaWQgIT0gdW5kZWZpbmVkICYmIHJlc3VsdC5kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmZhY2lsaXR5ID0gcmVzdWx0LmRhdGFbcmVzdWx0LmRhdGEubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBjb25zdCBkYXRhID1cclxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICAgICAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgICAgICAgZGF0YS5wcm92aWRlcl9pZCA9IGlkO1xyXG4gICAgICAgICAgaWYgKCh0aGlzLCB0aGlzLmZhY2lsaXR5Py5pZCkpIHtcclxuICAgICAgICAgICAgZGF0YS5mYWNpbGl0eV9pZCA9IHRoaXMuZmFjaWxpdHk/LmlkO1xyXG4gICAgICAgICAgICBkYXRhLmZhY2lsdHlfaWQgPSB0aGlzLmZhY2lsaXR5Py5pZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgICBwYWdlaWQ6IHRoaXMucGFnZWlkLFxyXG4gICAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmICh0aGlzLmlkICYmIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmVkaXQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQxID0gdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLnVwZGF0ZUZvcm1SZXNwb25zZShpZDEsIHJlcXVlc3REYXRhKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihyZXN1bHRbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaWQyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlRm9ybVJlc3BvbnNlKGlkMiwgcmVxdWVzdERhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihyZXNbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3VibWlzc2lvbkRhdGE/LmRhdGE/LnByb3ZpZGVyX2lkICE9IHVuZGVmaW5lZCAmJiByZXN1bHQuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmZhY2lsaXR5ID0gcmVzdWx0LmRhdGFbcmVzdWx0LmRhdGEubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBjb25zdCBkYXRhID1cclxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICAgICAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgICAgICAgZGF0YS5wcm92aWRlcl9pZCA9IGlkO1xyXG4gICAgICAgICAgZGF0YS5mYWNpbHR5X2lkID0gdGhpcy5mYWNpbGl0eT8uaWQ7XHJcbiAgICAgICAgICBkYXRhLmZhY2lsaXR5X2lkID0gdGhpcy5mYWNpbGl0eT8uaWQ7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgICAgcGFnZWlkOiB0aGlzLnBhZ2VpZCxcclxuICAgICAgICAgICAgcmVzcG9uc2U6IGRhdGFcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAodGhpcy5pZCAmJiB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5lZGl0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkMyA9IHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGRhdGVGb3JtUmVzcG9uc2UoaWQzLCByZXF1ZXN0RGF0YSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkNCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZShpZDQsIHJlcXVlc3REYXRhKS5zdWJzY3JpYmUoX3JlcyA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKF9yZXNbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID1cclxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICAgICAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VpZDogdGhpcy5wYWdlaWQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHRoaXMuaWQgJiYgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuZWRpdCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZDUgPSB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5pZDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UudXBkYXRlRm9ybVJlc3BvbnNlKGlkNSwgcmVxdWVzdERhdGEpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKHZhbHVlWydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICAgICAgICBpZiAoZmlsZVVwbG9hZERhdGE/LmF0dGFjaG1lbnRkZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnQoZmlsZVVwbG9hZEluZm8pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkNiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZShpZDYsIHJlcXVlc3REYXRhKS5zdWJzY3JpYmUoX3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIoX3ZhbHVlWydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICAgICAgICBpZiAoZmlsZVVwbG9hZERhdGE/LmF0dGFjaG1lbnRkZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnQoZmlsZVVwbG9hZEluZm8pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBteS0zXCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1jYW5jZWxcIiAoY2xpY2spPVwiZ29CYWNrKClcIj5CYWNrPC9idXR0b24+XHJcbiAgICAgIDxoNiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgbWItMCBtdC0zIGZyb21UaXRsZVwiPnt7IGZyb21UaXRsZSB9fTwvaDY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiAqbmdJZj1cImlzZm9ybUlPXCI+XHJcbiAgICAgIDxmb3JtaW8gI2Zvcm1JTyBbZm9ybV09XCJqc29uRm9ybVwiIFtzdWJtaXNzaW9uXT1cInN1Ym1pdHRlZERhdGFcIiAoc3VibWl0KT1cIm9uU3VibWl0KCRldmVudClcIlxyXG4gICAgICAgIChjdXN0b21FdmVudCk9XCJjdXN0b21FdmVudCgkZXZlbnQpXCI+PC9mb3JtaW8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+Il19