import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class AttachmentsService {
    private _storeservice;
    http: any;
    constructor(_storeservice: DataStoreService);
    getAttachmentReferral(referralid: any): any;
    getCategoryLookup(name: any): any;
    uploadKey(objparams: any): any;
    downloadKey(objparams: any): any;
    postAttachment(objparams: any): any;
    putAttachment(objparams: any, attachmentId: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttachmentsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AttachmentsService>;
}
