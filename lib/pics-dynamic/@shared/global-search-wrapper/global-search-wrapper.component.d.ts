import { EventEmitter, OnInit } from '@angular/core';
import { FormioCustomComponent, FormioEvent } from '@formio/angular';
import { PlatformDataStoreService } from '../../@core/service/platform-data-store.service';
import * as i0 from "@angular/core";
export interface SearchCriteria {
    schema: any;
    table: any;
    responseColumns: any;
    columns: any;
    value: string;
}
export declare class GlobalSearchWrapperComponent implements FormioCustomComponent<SearchCriteria>, OnInit {
    private _storeservice;
    value: SearchCriteria;
    valueChange: EventEmitter<SearchCriteria>;
    disabled: boolean;
    schema: any;
    table: any;
    columns: any;
    responseColumns: any;
    formioEvent: EventEmitter<FormioEvent>;
    searchInput: string;
    searchResults: any;
    columnHeaders: any;
    cols: any;
    httpService: any;
    constructor(_storeservice: PlatformDataStoreService);
    ngOnInit(): void;
    searchElement(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalSearchWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GlobalSearchWrapperComponent, "app-global-search-wrapper", never, { "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; "table": { "alias": "table"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "responseColumns": { "alias": "responseColumns"; "required": false; }; }, { "valueChange": "valueChange"; "formioEvent": "formioEvent"; }, never, never, false, never>;
}
