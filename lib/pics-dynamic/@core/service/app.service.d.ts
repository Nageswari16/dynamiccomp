import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AppService {
    private router;
    currentState: Subject<any>;
    currentValue: BehaviorSubject<any>;
    getValue: import("rxjs").Observable<any>;
    private excludedUrl;
    private previousUrl;
    constructor(router: Router);
    addValue(key: string, value: string): void;
    setValue(key: string, value: string): void;
    canNavigateBack(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppService>;
}
