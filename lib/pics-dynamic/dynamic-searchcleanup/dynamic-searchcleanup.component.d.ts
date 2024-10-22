import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, Injector, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { FormioComponent } from '@formio/angular';
import { Store } from '@ngrx/store';
import { DxDataGridComponent } from 'devextreme-angular';
import { MultiSelect } from 'primeng/multiselect';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../@core/core.state';
import { LocalStorageService } from '../@core/local-storage/local-storage.service';
import { AlertService } from '../@core/service/alert.service';
import { AttachmentsService } from '../@core/service/attachments.service';
import { AuthService } from '../@core/service/auth.service';
import { DataStoreService } from '../@core/service/data-store.service';
import { DynamicTabPageService } from '../@core/service/dynamic-tab-page-service';
import { DynamicsearchService } from '../@core/service/dynamicsearch.service';
import { FormioService } from '../@core/service/formio.service';
import { LocalService } from '../@core/service/local.service';
import { PlatformDataStoreService } from '../@core/service/platform-data-store.service';
import { ComponentState } from '../@shared/master-view-state/master-view.state';
import { SharedService } from '../@core/service/shared.service';
import { ConfigService } from '../@core/service/ConfigService';
import * as i0 from "@angular/core";
export declare class DynamicSearchCleanupComponent implements OnInit, OnDestroy, AfterViewInit {
    private router;
    private route;
    private cdref;
    private fb;
    private _formIO;
    private storageService;
    private formBuilder;
    private store;
    private _PlatformStoreservice;
    private sharedService;
    private configService;
    searchcriteriamenutrigger: MatMenuTrigger;
    dataGrid: DxDataGridComponent;
    private editPopUpDialogRef;
    formId: any;
    jsonForm: any;
    sourceid: string;
    fromTitle: any;
    submittedData: any;
    tableColumns: any;
    totalcount: any;
    pageId: any;
    inputFieldId: any;
    inputId: any;
    url: string;
    dataSource: any;
    popupPosition: any;
    pageType: any;
    searchCriteria: any;
    searchCriteriaArr: any;
    layouttype: string;
    id: any;
    searchparams: any;
    targetId: any;
    columns: any;
    updateGrid: any;
    totalCount: number;
    dublicateGridConfig: any[];
    columnHeader: any;
    spliterSize: number;
    gridspliterSize: number;
    isOpen: boolean;
    icon: string;
    openclose: string;
    user: any;
    isAddButton: boolean;
    pageSaveID: string;
    showFilterRowPanel: boolean;
    popupData: string;
    callDialogPopup: TemplateRef<any>;
    private popupDialogRef;
    showActionColumn: boolean;
    editId: any;
    isDialogPopup: boolean;
    item: any;
    showGridPage: boolean;
    manualPostApiUrl: string;
    moduleid: string;
    purpose: string;
    isShowFormPage: boolean;
    outerRouting: EventEmitter<any>;
    userAction: any;
    rowData: any;
    checkBoxesMode: string;
    gridType: string;
    showExport: boolean;
    dropdownValues: any;
    gridOptions: {
        value: string;
        label: string;
        code: string;
    }[];
    filterOptions: any[];
    selectedFilter: any[];
    filterForm: UntypedFormGroup;
    gridConfig: any;
    tempaConfig: any;
    reorderColumns: any;
    storage: LocalService;
    dataStoreService: DataStoreService;
    alertService: AlertService;
    dialog: MatDialog;
    http: HttpClient;
    screenWidth: number;
    currentPageId: void;
    displayMode: string;
    isResize: boolean;
    isUserPreferenceChange: boolean;
    formIO: FormioComponent;
    dynamicSearchService: DynamicsearchService;
    dynamicTabPageService: DynamicTabPageService;
    sequenceId: any;
    columnWidth: any;
    uploadedFile: any;
    imageData: {
        contentType: any;
        fileName: string;
    };
    attachmentService: AttachmentsService;
    paramvalue: any;
    paramfield: any;
    tablefield: any;
    toTabId: any;
    uniquedata: any;
    pageList: any;
    isViewEnable: string;
    iconClass: string;
    titletab: any;
    header: any;
    openTab: boolean;
    selectedRowIndex: any;
    selectedColumnIndex: any;
    selectedCaption: any;
    selectedRowData: any;
    httpService: any;
    authService: AuthService;
    localstore: LocalService;
    pageBuilderService: any;
    location: Location;
    filterOptionsDropdown: MultiSelect;
    registrationInfo: any;
    checkGridConfig: any;
    gridDynamicSearchForm: UntypedFormGroup;
    dynamicSearchArray: UntypedFormArray;
    dynamicSearch: any[];
    tableDropDown: {
        name: string;
        value: string;
    }[];
    columnDropDown: {}[];
    dynamicSearchResult: any[];
    criteriaId: number;
    saveButtonDisable: boolean;
    associatedId: any;
    isBGP: any;
    youthSearchJson: any[];
    youthSearchBoolean: boolean;
    isInitialLoad: boolean;
    isDeleteRequire: boolean;
    isDeleteTime: number;
    enteredReason: string;
    isDisabled: boolean;
    DeleteConfigURL: string;
    updateByIdAndPageIdWithReasonURL: string;
    deleteConfigData: any;
    DeleteRevertConfigURL: string;
    deletedReason: string;
    primary_column: string;
    adminAccessForDelete: any;
    isConditionalEditDelete: any;
    pagename: any;
    sourceKey: string;
    sourceValue: string;
    sourceType: string;
    currentPageSize: number;
    componentId: any;
    selectedComponent: ComponentState;
    componentConfig$: Observable<ComponentState>;
    eventSubscription: Subscription;
    deletePopupText: string;
    isEditThresholdRequire: boolean;
    DeleteGridList: TemplateRef<any>;
    DeleteGridListWithoutReason: TemplateRef<any>;
    ApproveDeleteGridList: TemplateRef<any>;
    DefaultDeletePopupTextAftThresholdTime: String;
    environment: any;
    businessRuleMessage: string;
    gridActionParams: any;
    allUrlParams: any;
    showMoreText: {
        [key: string]: boolean;
    };
    truncateTextValue: number;
    constructor(injector: Injector, router: Router, route: ActivatedRoute, cdref: ChangeDetectorRef, fb: UntypedFormBuilder, _formIO: FormioService, storageService: LocalStorageService, formBuilder: UntypedFormBuilder, store: Store<AppState>, _PlatformStoreservice: PlatformDataStoreService, sharedService: SharedService, configService: ConfigService, data: any);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    loadFilterForm(): void;
    ngAfterContentChecked(): void;
    redirect(): void;
    private getTemplate;
    getPageTabs(_pageId: any, sourceType: any, sourceKey: any, sourceValue: any, _youthId: any, navigationState?: any): void;
    routeToDynamicForms(type: any, _pageId: any, _youthId: any, navigationState?: any): void;
    setTemplate(result: any): void;
    setGrid(result: any): void;
    getGrid(responseId?: any): Promise<void>;
    setLayout(result: any): void;
    onSubmit(submission: any): void;
    afterSubmitted(_event: any): void;
    saveSearchCriteria(): void;
    setSearch(newd: any): void;
    reset(type: any): void;
    getExportData(submission: any, type: any): void;
    downloadFile(type: any, data: any): void;
    searchGrid(http: any, storage: any, responseId?: any): void;
    freeFormPageGrid(http: any, storage: any): void;
    onClose(): void;
    getRouter(data: any, _item: any): void;
    loadRouter(url: any, datatype: any, column: any, data: any, navigateState?: any): void;
    editData(data: any): void;
    viewData(data: any): void;
    deleteData(data: any): void;
    openLink(data: any): void;
    urlget(data: any, obj: any, pUrl: any): any;
    setURL(key: any, url: any, data: any): any;
    setCurrentUrl(key: any, url: any): any;
    setUrlParam(urlparamArr1: any, url: any, data: any): any;
    getInsideGridAction(data: any, item: any): void;
    getActionRoutes(data: any, item: any): void;
    actionCheck(item: any, data: any): void;
    editActionCheck(item: any, data: any, editDataStatus: any): void;
    actionViewCheck(item: any, dialogConfig: any, data: any): void;
    actionRouterConfig(data: any, item: any, navigateState: any): void;
    popupTypeCheck(item: any, data: any): void;
    actionPrintCheck(data: any): void;
    actionEmailCheck(data: any): void;
    actionDownloadCheck(item: any, data: any): void;
    actionSurveyCheck(data: any): void;
    getOutsideGridAction(item: any): void;
    dynamicRouteCheck(data: any, item: any, navigateState: any): void;
    setRouteData(data: any, _link: any, navigateState: any): any;
    navigateToGridPage(data: any, navigateState: any): void;
    setDialogConfig(item: any): void;
    convertToISOFormat(dateString: any): string;
    addMinutes(dateString: string, minutes: number): string;
    getPrimaryColumnId(primaryColumn: any, data: any): any;
    getAsJSON(json: any): any;
    deleteConfirmation(data: any, item: any): void;
    actionInfoCheck(data: any, item: any): void;
    deleteRecord(): void;
    deleteRecordWithReason(): void;
    deleteRecordWithoutReason(): void;
    cancelPopup(): void;
    reloadPopup(): void;
    checkIsDisabled(text: string): void;
    completeConfirmation(data: any, _item: any): void;
    closePopup(): void;
    popup(data: any, action: any): void;
    closeDialogPopup(): void;
    showIcon(data: any): boolean;
    splitingData(data: any, splitter?: string): string;
    getTitleClass(title: any): any;
    changeStatusColor(value: any): "" | "completed" | "draft" | "open" | "closed" | "pending" | "pending-approval" | "approved" | "returned";
    titleCaseToolTip(value: any): any;
    closeForm(): void;
    downloadFileInternally(s3BucketUrlName: any, filename: any): void;
    getGridSelection(item: any): "none" | "multiple";
    startScheduling(id: any, url?: any): void;
    customSave: (state: any) => void;
    columnChooserClick(): void;
    contentReady: (e: any) => void;
    getVisabilityByChoosableProp(chooser: any, visible: any): any;
    getSortOrder(defaultSortColumn: any, defaultSortType: any, columnDef: any): any;
    goBack(): void;
    showGridActions(updateGrid: any, showActionColumn: any, gridType: any): any;
    changeFilterOptions(e: any): void;
    setPermissions(modal: any): void;
    onResize(): void;
    checkOnresize(mobileColumns: any): void;
    setSelectedGridForm(code: any, value: any): void;
    updateUserGridConfig(): void;
    getUserGridConfig(): void;
    applyUserPreference(gridConfig: any, userPreferenceConfig: any): any[];
    assignVisibleIndexes(gridConfig: any): any[];
    patchMultipleOptions(): void;
    columnsFilteration(): void;
    customEvent(event: any): void;
    onExporting(e: any): void;
    ngOnDestroy(): void;
    getTitle(c: any): any;
    onCellPrepared(e: any): void;
    toggleShowMore(value: string, columnDef: string): string;
    toggleShowMoreState(value: string, columnDef: string): void;
    getToggleKey(value: string, columnDef: string): string;
    onRowPrepared(e: any): void;
    onCellClick(e: any): void;
    targetPage(value: any, targetValue: any): Promise<void>;
    getVersionList(value: any, numericValue: any, action: any): Promise<void>;
    toggleIconClass(): void;
    uploadDocument(item: any, files: any): void;
    getDateFormat(value: any): any;
    buildCriteria(result: any): void;
    removeDupliacteArrayJson(values: any): any;
    initDynamicSearch(): UntypedFormArray;
    addGridDynamicSearch(): void;
    createDynamicSearch(): UntypedFormGroup;
    buildDynamicSearch(res: any): UntypedFormGroup;
    removeDynamicSearch(index: number): void;
    resetDynamicSearch(): void;
    getColumnList(index: number, tableValue: string): void;
    getConditionList(index: number, columnValue: string): void;
    resetDynamicSearchValue(index: number): void;
    trimSpaces(element: any): void;
    submitDynamicSearch(): void;
    saveDynamicSearch(): void;
    getCriteriaByPageId(): Promise<unknown>;
    removeAllDynamicSearchCondtion(): void;
    checkRulesBeforeActions(data: any, item: any): Observable<boolean>;
    confirmGridAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicSearchCleanupComponent, [null, null, null, null, null, null, null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicSearchCleanupComponent, "app-dynamic-searchcleanup", never, { "formId": { "alias": "formId"; "required": false; }; "pageId": { "alias": "pageId"; "required": false; }; "componentId": { "alias": "componentId"; "required": false; }; }, { "outerRouting": "outerRouting"; }, never, never, false, never>;
}
