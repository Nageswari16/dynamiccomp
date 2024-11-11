import { ActivatedRoute } from '@angular/router';
import { LocalService } from '../../@core/service/local.service';
import { AlertService } from '../../@core/service/alert.service';
import * as i0 from "@angular/core";
export declare class FormSubmissionService {
    private route;
    private localStorage;
    private alertService;
    constructor(route: ActivatedRoute, localStorage: LocalService, alertService: AlertService);
    getIdFromRoute(editId: string, fallbackId: string): string | null;
    prepareSubmissionData(submission: any): any;
    prepareRequestData(formId: string, data: any): {
        pageid: string;
        response: any;
    };
    updateFormData(errorType: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormSubmissionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormSubmissionService>;
}
