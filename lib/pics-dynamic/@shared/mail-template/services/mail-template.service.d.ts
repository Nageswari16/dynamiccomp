import { HttpService } from '../../../@core/service/http.service';
import * as i0 from "@angular/core";
export declare class MailTemplateService {
    private http;
    constructor(http: HttpService);
    ValidateReferralId(id: any): import("rxjs").Observable<Object>;
    getPacketListing(): import("rxjs").Observable<Object>;
    mailSent(modal: any): import("rxjs").Observable<Object>;
    getAllEmailTemplateCategories(): import("rxjs").Observable<Object>;
    getEmailTemplateList(id: any): import("rxjs").Observable<Object>;
    getEmailTemplateNewList(): import("rxjs").Observable<Object>;
    getReferralSuggestions(searchText: any): import("rxjs").Observable<Object>;
    mailattachmentsValidation(modal: any): import("rxjs").Observable<Object>;
    getallPages(id: any, data: any): import("rxjs").Observable<Object>;
    getResponseSuggesstions(searchText: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MailTemplateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MailTemplateService>;
}
