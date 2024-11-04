import { ActivatedRoute } from '@angular/router';
import { LocalService } from './local.service';
import * as i0 from "@angular/core";
export declare class routeParamService {
    private route;
    private localStorage;
    constructor(route: ActivatedRoute, localStorage: LocalService);
    getSourceId(id: any): any;
    handleEvent(event: any, pageId: string, id: string | null, isReadOnly: boolean, editId: string | null): {
        id: string | null;
        isReadOnly: boolean;
        editId: string | null;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<routeParamService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<routeParamService>;
}
