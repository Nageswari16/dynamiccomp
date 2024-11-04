import { LocalService } from '../../@core/service/local.service';
import * as i0 from "@angular/core";
export declare class TemplateService {
    private localStorage;
    constructor(localStorage: LocalService);
    getTitle(action: string, pageName: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TemplateService>;
}
