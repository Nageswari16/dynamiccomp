import { Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from '../../@core/service/local.service';
import * as i0 from "@angular/core";
export declare class routeParamService {
    private route;
    private localStorage;
    constructor(injector: Injector, route: ActivatedRoute, localStorage: LocalService);
    getSourceId(id: any): {
        sourceid: string | null;
        purpose: string | null;
    };
    handleEvent(event: any, pageId: string, id: string | null, isReadOnly: boolean, editId: string | null): {
        id: string | null;
        isReadOnly: boolean;
        editId: string | null;
    };
    getIdfromRoute(editId?: string, fallbackIdFromRoute?: string): string | null;
    getIdFromRouteParamMap(key: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<routeParamService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<routeParamService>;
}
