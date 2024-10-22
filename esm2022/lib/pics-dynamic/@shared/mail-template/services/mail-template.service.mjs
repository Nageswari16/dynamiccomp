import { Injectable } from '@angular/core';
import { MailTemplatePopConfig } from './mail-template-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../../../@core/service/http.service";
export class MailTemplateService {
    http;
    constructor(http) {
        this.http = http;
        // This is intentional
    }
    ValidateReferralId(id) {
        return this.http.get(MailTemplatePopConfig.EndPoint.Email.ValidateReferral1 +
            id +
            MailTemplatePopConfig.EndPoint.Email.ValidateReferral2);
    }
    getPacketListing() {
        return this.http.get(MailTemplatePopConfig.EndPoint.Email.PacketListing);
    }
    mailSent(modal) {
        return this.http.post(MailTemplatePopConfig.EndPoint.Email.Mailattachments, modal);
    }
    getAllEmailTemplateCategories() {
        return this.http.get(MailTemplatePopConfig.EndPoint.Email.GetAllEmailTemplateCategories);
    }
    getEmailTemplateList(id) {
        return this.http.get(MailTemplatePopConfig.EndPoint.Email.GetEmailTemplateList + id);
    }
    getEmailTemplateNewList() {
        return this.http.get(MailTemplatePopConfig.EndPoint.Email.emailtemplateList);
    }
    getReferralSuggestions(searchText) {
        return this.http.get(MailTemplatePopConfig.EndPoint.Email.getReferralSuggestions + searchText);
    }
    mailattachmentsValidation(modal) {
        return this.http.post(MailTemplatePopConfig.EndPoint.Email.mailattachmentsValidation, modal);
    }
    getallPages(id, data) {
        return this.http.post(MailTemplatePopConfig.EndPoint.pages.getAllPages.replace('{orgid}', String(id)), data);
    }
    getResponseSuggesstions(searchText) {
        return this.http.post(MailTemplatePopConfig.EndPoint.pages.responseSuggestions, searchText);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MailTemplateService, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MailTemplateService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MailTemplateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbC10ZW1wbGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQHNoYXJlZC9tYWlsLXRlbXBsYXRlL3NlcnZpY2VzL21haWwtdGVtcGxhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFLbkUsTUFBTSxPQUFPLG1CQUFtQjtJQUNWO0lBQXBCLFlBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDbEMsc0JBQXNCO0lBQ3pCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxFQUFFO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCO1lBQ3BELEVBQUU7WUFDRixxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUNELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsUUFBUSxDQUFDLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDRCw2QkFBNkI7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNELG9CQUFvQixDQUFDLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDRCx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUNELHNCQUFzQixDQUFDLFVBQVU7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFDRCx5QkFBeUIsQ0FBQyxLQUFLO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBRUQsdUJBQXVCLENBQUMsVUFBVTtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUYsQ0FBQzt3R0F4Q1UsbUJBQW1COzRHQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1haWxUZW1wbGF0ZVBvcENvbmZpZyB9IGZyb20gJy4vbWFpbC10ZW1wbGF0ZS11cmwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haWxUZW1wbGF0ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHtcclxuICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgfVxyXG5cclxuICBWYWxpZGF0ZVJlZmVycmFsSWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICBNYWlsVGVtcGxhdGVQb3BDb25maWcuRW5kUG9pbnQuRW1haWwuVmFsaWRhdGVSZWZlcnJhbDEgK1xyXG4gICAgICAgIGlkICtcclxuICAgICAgICBNYWlsVGVtcGxhdGVQb3BDb25maWcuRW5kUG9pbnQuRW1haWwuVmFsaWRhdGVSZWZlcnJhbDJcclxuICAgICk7XHJcbiAgfVxyXG4gIGdldFBhY2tldExpc3RpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChNYWlsVGVtcGxhdGVQb3BDb25maWcuRW5kUG9pbnQuRW1haWwuUGFja2V0TGlzdGluZyk7XHJcbiAgfVxyXG4gIG1haWxTZW50KG1vZGFsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoTWFpbFRlbXBsYXRlUG9wQ29uZmlnLkVuZFBvaW50LkVtYWlsLk1haWxhdHRhY2htZW50cywgbW9kYWwpO1xyXG4gIH1cclxuICBnZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KE1haWxUZW1wbGF0ZVBvcENvbmZpZy5FbmRQb2ludC5FbWFpbC5HZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcyk7XHJcbiAgfVxyXG4gIGdldEVtYWlsVGVtcGxhdGVMaXN0KGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChNYWlsVGVtcGxhdGVQb3BDb25maWcuRW5kUG9pbnQuRW1haWwuR2V0RW1haWxUZW1wbGF0ZUxpc3QgKyBpZCk7XHJcbiAgfVxyXG4gIGdldEVtYWlsVGVtcGxhdGVOZXdMaXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoTWFpbFRlbXBsYXRlUG9wQ29uZmlnLkVuZFBvaW50LkVtYWlsLmVtYWlsdGVtcGxhdGVMaXN0KTtcclxuICB9XHJcbiAgZ2V0UmVmZXJyYWxTdWdnZXN0aW9ucyhzZWFyY2hUZXh0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChNYWlsVGVtcGxhdGVQb3BDb25maWcuRW5kUG9pbnQuRW1haWwuZ2V0UmVmZXJyYWxTdWdnZXN0aW9ucyArIHNlYXJjaFRleHQpO1xyXG4gIH1cclxuICBtYWlsYXR0YWNobWVudHNWYWxpZGF0aW9uKG1vZGFsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoTWFpbFRlbXBsYXRlUG9wQ29uZmlnLkVuZFBvaW50LkVtYWlsLm1haWxhdHRhY2htZW50c1ZhbGlkYXRpb24sIG1vZGFsKTtcclxuICB9XHJcblxyXG4gIGdldGFsbFBhZ2VzKGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoTWFpbFRlbXBsYXRlUG9wQ29uZmlnLkVuZFBvaW50LnBhZ2VzLmdldEFsbFBhZ2VzLnJlcGxhY2UoJ3tvcmdpZH0nLCBTdHJpbmcoaWQpKSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRSZXNwb25zZVN1Z2dlc3N0aW9ucyhzZWFyY2hUZXh0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoTWFpbFRlbXBsYXRlUG9wQ29uZmlnLkVuZFBvaW50LnBhZ2VzLnJlc3BvbnNlU3VnZ2VzdGlvbnMsIHNlYXJjaFRleHQpO1xyXG4gIH1cclxufVxyXG4iXX0=