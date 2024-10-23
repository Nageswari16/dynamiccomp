import { Location } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgxfUploaderService } from 'ngxf-uploader';
import { columnsJson } from '../../@core/JSON.const';
import { SpeechRecognitionService } from '../../@core/service/speech-recognition.service';
import { OCRService } from '../../@core/service/ocr.service';
import { LocalService } from '../../@core/service/local.service';
import { DataStoreService } from '../../@core/service/data-store.service';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { DynamicsearchService } from '../../@core/service/dynamicsearch.service';
import { AuthService } from '../../@core/service/auth.service';
import { AttachmentsService } from '../../@core/service/attachments.service';
import { OcrValidationService } from '../../@core/service/ocr-validation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { publishEvent } from '../../@shared/master-view-state/master-view.actions';
import { select } from '@ngrx/store';
import { selectComponentConfigById, selectEvent } from '../../@shared/master-view-state/master-view.selectors';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/formio.service";
import * as i3 from "@ngrx/store";
import * as i4 from "../../@core/service/platform-data-store.service";
import * as i5 from "@angular/common";
import * as i6 from "@formio/angular";
import * as i7 from "../../@shared/alert/alert.component";
import * as i8 from "@angular/material/button";
import * as i9 from "ngxf-uploader";
const STRUCTURED_DECISION_MAKING = 'Structured Decision Making';
const SOMETHING_WENT_WRONG = 'Something Went Wrong!';
export class DynamicPageCleanupComponent {
    router;
    route;
    _formIO;
    store;
    _storeservice;
    submitSuccess = new EventEmitter();
    submitFailed = new EventEmitter();
    formId;
    tabId;
    jsonForm;
    fromTitle;
    editId;
    id;
    submittedData;
    afterEntityName = '';
    afterRuleAppName = '';
    beforeEntityName = '';
    beforeRuleAppName = '';
    beforerulemethod = '';
    afterrulemethod = '';
    user;
    multiSelectDropDowns = [];
    pageId;
    sourceid;
    externalParameters;
    pageDataSubscription;
    isDialogPopup = false;
    dialogRef;
    external_scanner;
    validationPopup;
    validationPopupRef;
    isReadOnly;
    showBack;
    isTitle;
    afterSubmit = new EventEmitter();
    personId;
    triggerRefresh;
    fromWorkFlow;
    clickedServiceCase;
    serviceId;
    speechRecogninitionOn;
    speechData;
    notification;
    organizationId;
    FormInputs = [];
    scannerConfig = {};
    tabData;
    narrative;
    purpose;
    pagetype;
    localstorage;
    sessionStorage;
    location;
    dataStore;
    speechRecognitionService;
    uploadService;
    ocr;
    appointmentList;
    isformIO = false;
    formIO;
    currentYouthId;
    dynamicTabPageService;
    dynamicSearchService;
    authService;
    attachmentInfo = {};
    uploadedFiles = [];
    parentGridPage;
    parentGridPageId;
    alertService;
    uploadedFile;
    isOcrForm;
    documentType;
    imgUrl;
    showOcrForm;
    attachmentService;
    imageData;
    tableschemaconfig;
    formResponse;
    action;
    contentArray = [];
    templateResult;
    ocrValidationService;
    dataSub;
    btnVerify = false;
    editValue;
    loggedUser;
    providerData;
    check;
    showbackbtn = false;
    showTitle;
    componentId;
    selectedComponent;
    componentConfig$;
    eventSubscription;
    submissionDone = new EventEmitter();
    confirmationmessage;
    showButton1;
    showButton2;
    button1Text;
    button2Text;
    button1Key;
    button2Key;
    button1Action;
    button2Action;
    modalService;
    button1Style;
    button2Style;
    dialog;
    httpService;
    appService;
    fallbackIdFromRoute;
    constructor(injector, router, route, _formIO, store, data, _storeservice) {
        this.router = router;
        this.route = route;
        this._formIO = _formIO;
        this.store = store;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
                this.appService = res['APPSERVICE'];
                this.alertService = res['ALERTSERVICE'];
            }
        });
        this.authService = injector.get(AuthService);
        // this.alertService = injector.get<AlertService>(AlertService);
        this.localstorage = injector.get(LocalService);
        this.location = injector.get(Location);
        this.dataStore = injector.get(DataStoreService);
        this.speechRecognitionService = injector.get(SpeechRecognitionService);
        this.uploadService = injector.get(NgxfUploaderService);
        this.ocr = injector.get(OCRService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.dynamicSearchService = injector.get(DynamicsearchService);
        this.attachmentService = injector.get(AttachmentsService);
        this.ocrValidationService = injector.get(OcrValidationService);
        this.modalService = injector.get(NgbModal);
        this.dialog = injector.get(MatDialog);
        this.user = this.localstorage.getObj('user');
        if (this.localstorage.getItem('parentGridPage')) {
            this.showbackbtn = true;
            const parentGridPageObj = JSON.parse(this.localstorage.getItem('parentGridPage'));
            const currentpage = this.localstorage.getItem('pagename');
            this.parentGridPage = currentpage ? currentpage : '';
            this.parentGridPageId = parentGridPageObj ? parentGridPageObj.id : '';
        }
        this.organizationId = this.user?.userWorkInfo?.organization?.id;
        this.dynamicSearchService.onChangePageUserData = this.localstorage.getObj('user');
        this.conditionCheckData(data);
        this.sourceid = this.dynamicSearchService.clickableData;
        const navigateData = this.router?.getCurrentNavigation()?.extras?.state;
        this.showBack = navigateData?.externalLink ? true : false;
        if (navigateData?.isReadOnly) {
            this.isReadOnly = true;
        }
        if (navigateData?.title) {
            this.isTitle = navigateData.title;
        }
        if (navigateData?.personId) {
            this.personId = navigateData.personId;
            this.dynamicSearchService.onChangePersonId = navigateData.personId;
        }
        this.speechRecogninitionOn = false;
        this.speechData = '';
        if (history.state.title) {
            sessionStorage.setItem('title', history?.state?.title);
        }
        else {
            // this.isTitle = sessionStorage.getItem('title');
            this.isTitle = ' / ' + 'Add ' + sessionStorage.getItem('get-title');
        }
        const getTitle = sessionStorage.getItem('get-title');
        if (getTitle !== null) {
            this.isTitle = 'Add ' + getTitle;
        }
        else {
            this.isTitle = '';
        }
        this.currentYouthId = this.route.parent.snapshot.paramMap.get('id');
        this.attachmentInfo = this.authService.getSharedMessage();
        this.FormInputs = [];
        this.triggerRefresh = new EventEmitter();
        this.isReadOnly = history?.state?.isReadOnly ? true : this.isReadOnly;
        this.personId = history?.state?.personId;
        this.dynamicSearchService.onChangePersonId = history?.state?.personId;
        this.showBack = (history?.state?.externalLink && !history?.state?.isHideBack) || this.showBack;
        this.pageId = history?.state?.pageId ? history?.state?.pageId : this.pageId;
        this.action = this.dataStore.getData('gridAction') || this.localstorage.getItem('gridAction');
        this.localstorage.setItem('gridAction', this.action);
        this.btnVerify = this.action === 'edit' ? true : false;
        if (window.location.pathname.includes('tab')) {
            this.showbackbtn = false;
            this.showTitle = false;
        }
        else {
            this.showTitle = true;
        }
    }
    conditionCheckData(data) {
        if (data) {
            this.editId = data.editId ? data.editId : null;
            this.isDialogPopup = data.isPopup ? true : false;
            this.pageId = data.pageId ? data.pageId : this.pageId;
            this.isReadOnly = data.isReadOnly ? true : false;
        }
    }
    ngOnInit() {
        this.loggedUser = this.localstorage.getObj('user');
        this.route.params.subscribe(data => {
            console.log(data);
            this.authService.setSharedMessage(data);
            this.routerPageData(data);
        });
        this.dynamicSearchService.sourceIdService.subscribe(data => {
            if (data != '') {
                this.serviceId = data;
                this.dynamicSearchService.sourceIdService.next('');
                this.clickedServiceCase = true;
                this.callGetAPI();
            }
        });
        this.dynamicSearchService.result.subscribe(result => {
            if (result != null && result != '') {
                this.afterSubmit.emit(result);
                this.dynamicSearchService.result.next(null);
            }
        });
    }
    ngAfterViewInit() {
        if (this.formIO) {
            this.formIO.formioReady.then(formInstance => {
                formInstance.ready.then(() => {
                    const toggleButton = document.getElementById('togglePassword');
                    if (toggleButton) {
                        const passwordField = document.querySelector(`input[name="data[${toggleButton['ariaLabel']}]"]`);
                        toggleButton.addEventListener('click', () => {
                            if (passwordField.type === 'password') {
                                passwordField.type = 'text';
                                toggleButton.classList.add('fa-eye-slash');
                                toggleButton.classList.remove('fa-eye');
                            }
                            else {
                                passwordField.type = 'password';
                                toggleButton.classList.add('fa-eye');
                                toggleButton.classList.remove('fa-eye-slash');
                            }
                        });
                    }
                });
            });
        }
        this.eventSubscription = this.store.pipe(select(selectEvent)).subscribe(event => {
            if (event && event.eventName === 'submit' && event.payload.settings.onSubmitRefresh
                && event.payload.settings.onSubmitRefreshWidgets) {
                event.payload.settings.onSubmitRefreshWidgets.forEach(x => {
                    if (['ATPBDM', 'FFP'].includes(x.pageType))
                        this.formId = x.id;
                    this.getRouterConfig(true);
                });
            }
        });
    }
    routerPageData(data) {
        this.formId = data.pageId;
        if (!this.formId) {
            this.formId = this.pageId;
        }
        this.componentConfig$ = this.store.pipe(select(selectComponentConfigById(this.componentId)));
        this.componentConfig$.subscribe(data => this.selectedComponent = data);
        this.eventSubscription = this.store.pipe(select(selectEvent)).subscribe(event => {
            this.showbackbtn = false;
            if (event && event.eventName === 'edit' && event.payload.mappingFormId === this.pageId) {
                this.id = event.payload.id;
                this.editId = event.payload.id;
                this.isReadOnly = false;
                if (this.id) {
                    this.getRouterConfig();
                }
            }
            else if (event && event.eventName === 'view' && event.payload.mappingFormId === this.pageId) {
                this.id = event.payload.id;
                this.isReadOnly = true;
                this.editId = event.payload.id;
                if (this.id) {
                    this.getRouterConfig();
                }
            }
            else if (event && event.eventName === 'add' && event.payload.mappingFormId === this.pageId) {
                this.id = null;
                this.isReadOnly = false;
                this.editId = null;
                this.getRouterConfig();
            }
        });
        this.getSource();
        this.getPageTabs();
    }
    getPageTabs() {
        this.dynamicTabPageService.getPageById(this.formId).subscribe((result) => {
            if (result) {
                if (result.data[0]?.activeVersion?.pagename) {
                    sessionStorage.setItem('get-title', result.data[0]?.activeVersion?.pagename);
                }
                this.tabId = result.data[0].activeVersion.id;
                this.getRouterConfig();
                this.isTitle = 'Add ' + sessionStorage.getItem('get-title');
            }
        });
    }
    getRouterConfig(isCompositePageRefresh) {
        if (this.formId) {
            // get configure URL get,post,put URL
            this.getConfiguration().then(config => {
                console.log(config);
                if (isCompositePageRefresh) {
                    if (config.data.pageDetails.id == this.formId)
                        this.getTemplate(config);
                }
                else {
                    this.getTemplate(config);
                }
                // get Page configuration Template Data        
            }, err => {
                if (err.error) {
                    if (err?.error?.statusCode === 403) {
                        this.alertService.error('You don’t have access to this page. Please contact the administrator.');
                    }
                }
            });
        }
        if (!this.pageId && !this.formId) {
            this.pageDataSubscription = this.dynamicSearchService.data.subscribe(page => {
                if (page) {
                    this.formId = page;
                    // }
                    // get configure URL get,post,put URL
                    this.getConfiguration().then(res => {
                        // get Page configuration Template Data
                        this.jsonForm = null;
                        this.getTemplate(res);
                    });
                }
            });
        }
    }
    getSource() {
        const id = this.sourceid;
        if (this.route.parent && this.route.parent.parent && this.route.parent.parent.snapshot.paramMap.get('sourceid')) {
            this.sourceid = this.route.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else if (this.route.parent &&
            this.route.parent.parent &&
            this.route.parent.parent.parent &&
            this.route.parent.parent.parent.snapshot.paramMap.get('sourceid')) {
            this.sourceid = this.route.parent.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else {
            this.sourceid = id;
        }
        if (!this.sourceid) {
            this.sourceid = this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
                ? this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
                : this.route?.parent?.parent?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid');
        }
        this.purpose =
            this.route.parent && this.route.parent.snapshot.params.purpose
                ? this.route.parent.snapshot.params.purpose
                : this.route?.parent?.parent.snapshot.params.purpose;
    }
    // get Page configuration Template Data
    getTemplate(result) {
        this.templateResult = result;
        if (result) {
            if (this.action && this.action.toLowerCase() == 'edit') {
                this.isTitle = 'Edit ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'view') {
                this.isTitle = 'View ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'add') {
                this.isTitle = 'Add ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'link') {
                this.isTitle = 'View ' + result?.data?.pagename;
            }
            else {
                this.isTitle = this.localstorage.getItem('FORM_TITLE') || '';
            }
            this.localstorage.setItem('FORM_TITLE', this.isTitle);
            this.submittedData = { data: {} };
            this.editValue = JSON.parse(this.localstorage.getItem('editValue'));
            if (this.check && this.providerData?.account) {
                this.submittedData = {
                    data: this.providerData?.account
                };
            }
            else {
                this.editValue = JSON.parse(this.localstorage.getItem('editValue'));
                if (this.editValue) {
                    this.submittedData = {
                        data: this.editValue
                    };
                    this.submittedData.data['edit'] = true;
                }
                else {
                    this.submittedData = { data: {} };
                }
            }
            this.fallbackIdFromRoute = typeof result?.data?.templatejson == 'string' ? JSON.parse(result?.data?.templatejson)?.fallbackIdFromRoute : result?.data?.templatejson?.fallbackIdFromRoute;
            this.fromTitle = result.data?.pagename ? result.data?.pagename : '';
            this.dataStore.setData('title', this.fromTitle);
            this.conditionCheckTemplate(result);
            this.user = this.localstorage.getObj('user');
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.submittedData.data.username = this.user?.firstName + '' + this.user?.lastName;
            this.submittedData.data.ribbonData = null;
            this.submittedData.data.sourceid = this.sourceid ? this.sourceid : null;
            if (this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceKey'))?.snapshot.paramMap.get('sourceKey')) {
                this.submittedData.data[this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceKey'))?.snapshot.paramMap.get('sourceKey')] = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceKey'))?.snapshot.paramMap.get('sourceValue');
            }
            this.callGetAPI();
        }
        this.dataSub = this.dataStore.currentStore.subscribe(res => {
            if (res['uploadFromGrid']) {
                this.showOcrForm = true;
                this.btnVerify = true;
            }
        });
    }
    checkParams(element) {
        return typeof element === 'string' ? JSON.parse(element) : element;
    }
    conditionCheckTemplate(result) {
        let routingPage = [];
        if (result.data.tabconfig) {
            const routingTab = this.checkParams(result.data.tabconfig);
            routingPage = routingTab.filter(x => x.type === 'ROUTING');
        }
        if (result.data.templatejson) {
            this.isformIO = true;
            this.jsonForm = this.checkParams(result.data.templatejson);
            const formTemplateJson = JSON.parse(JSON.stringify(this.jsonForm));
            this.pagetype = result.data?.pageDetails?.pagetype;
            if (result.data?.pagetype === 'SURVEY') {
                this.sourceid = this.user?.id;
            }
            this.prepareFormKeyLabel(formTemplateJson);
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.data.pagename;
            setTimeout(() => {
                this.modifyVideoContent();
                this.speechToTextContent();
            }, 200);
        }
        else if (routingPage.length > 0 && routingPage[0].pathname === 'CreateSitevisitComponent') {
            this.isformIO = false;
            this.appointmentList = Promise.resolve(true);
        }
    }
    // get configure URL get,post,put URL
    async getConfiguration() {
        const action = this.action ? this.action?.toLowerCase() : '';
        const data = await this.dynamicTabPageService.getActivePage(this.tabId, true, action).toPromise();
        return data;
        // });
    }
    loadIncidentData() {
        this.dynamicTabPageService.getListBySourceId(this.sourceid).subscribe(result => {
            const data = result['data'];
            if (data && data.length) {
                this.narrative = data.reduce((acc, curr) => acc + curr.narrative, '');
            }
        });
    }
    callGetAPI() {
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.loadIncidentData();
        }
        this.tabData = this.dataStore.getData('selectedTabData');
        if (this.route.snapshot.paramMap.get('id') == 'form') {
            this.id = null;
        }
        else if (this.editId) {
            this.id = this.editId;
        }
        else {
            this.id = this.route.snapshot.paramMap.get('id');
            console.log(this.id);
            if (!this.id) {
                const fallbackId = this.fallbackIdFromRoute ? this.fallbackIdFromRoute : 'id';
                this.id = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has(fallbackId))?.snapshot.paramMap.get(fallbackId);
                sessionStorage.setItem('youthID', this.id);
            }
        }
        this.conditionCheckCallGetAPI();
        const action = this.dataStore.getData('gridAction');
        console.log(this.id);
        if (this.id) {
            this.formresponse(action);
        }
    }
    conditionCheckCallGetAPI() {
        if (!this.id) {
            this.id = this.editId;
        }
        // #check
        if (window.location.hash.indexOf('dynamic-routing') > 0 || window.location.hash.indexOf('pages/intake') > 0) {
            if (this.fromWorkFlow) {
                this.id = this.sourceid;
                this.fromWorkFlow = false;
            }
            else {
                this.id = this.id ? this.id : this.sourceid;
            }
        }
        if (this.clickedServiceCase) {
            this.id = this.serviceId;
        }
        console.log(this.id);
        if (this.id) {
            this.formresponse(this.action);
        }
    }
    formresponse(action) {
        if (action !== 'add') {
            this.dynamicTabPageService.getResponseByPageId(this.id, this.formId).subscribe((result) => {
                if (result?.data && result?.data.length) {
                    this.getMultipleFrom(this.pagetype === 'FFP' ? result?.data.response : result?.data);
                }
                else if (result?.data) {
                    this.formResponse = result?.data;
                    this.getActionSelect(this.pagetype === 'FFP' ? result?.data.response : result?.data, action);
                }
                else {
                    this.id = null;
                    this.dynamicSearchService.id.next(null);
                }
            });
        }
    }
    resultNullCheck(data) {
        if (!data) {
            return {};
        }
        else if (data.data) {
            return data.data;
        }
        else {
            return data;
        }
    }
    getActionSelect(result, action) {
        const data = this.resultNullCheck(result);
        this.processMultiSelectDropdowns(data);
        this.submittedData = { data: data };
        this.submittedData.data.userrolekey = this.user?.role?.rolekey;
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.submittedData.data.narrative = this.narrative;
        }
        if (action == 'edit' || action == 'Edit') {
            this.isTitle = 'Edit ' + data?.pageDetails?.activeVersion?.pagename || '';
        }
        this.submittedData.data.action = action;
        if (this.externalParameters) {
            this.submittedData.data.type = this.externalParameters;
        }
        this.id = result.id;
        this.openBottomSheet();
    }
    getMultipleFrom(result) {
        const data = result[0].data ? result[0].data : result[0];
        this.processMultiSelectDropdowns(data);
        this.submittedData = { data: data };
        this.submittedData.data.userrolekey = this.user?.role?.rolekey;
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.submittedData.data.narrative = this.narrative;
        }
        if (this.externalParameters) {
            this.submittedData.data.type = this.externalParameters;
        }
        this.id = result[0].id;
        this.openBottomSheet();
    }
    processMultiSelectDropdowns(data) {
        this.multiSelectDropDowns.forEach(dropdownKey => {
            const dropdownValue = data[dropdownKey];
            if (typeof dropdownValue === 'string' && dropdownValue.includes(',')) {
                data[dropdownKey] = dropdownValue.split(',');
            }
        });
    }
    nextSubmit(event) {
        console.log(event);
        this.submitFailed.next('Failed to add response');
    }
    /* The below function will trigger when user clicks on a button in PopUp */
    onClickConfirmation(userAction, actionKey) {
        const formValue = this.formIO.formio.getValue();
        const comp = this.formIO.formio.getComponent('customValidationComponent')?.component;
        const updateComponentAndRedraw = (localActionKey) => {
            if (comp)
                comp['userInput'] = localActionKey;
            formValue.data['userInput'] = localActionKey;
            this.formIO.formio.setValue(formValue);
        };
        if (userAction === 'submit') {
            this.closeValidationPopup();
            formValue.data['preventSubmit'] = false;
            this.formIO.formio.setValue(formValue);
            updateComponentAndRedraw(actionKey);
            comp?.popupOnSubmit && this.onSubmit(formValue);
        }
        else {
            this.closeValidationPopup();
            updateComponentAndRedraw(comp?.button2Text);
        }
    }
    closeValidationPopup() {
        this.validationPopupRef.close();
    }
    validateForm() {
        const comp = this.formIO.formio.getComponent('customValidationComponent')?.component;
        const formValue = this.formIO.formio.getValue();
        if (formValue?.data?.preventSubmit && comp?.popupOnSubmit && comp?.showPopup) {
            this.validationPopupRef = this.dialog.open(this.validationPopup);
            this.confirmationmessage = comp?.validationMessage;
        }
    }
    onSubmit(submission) {
        this.validateForm();
        if (submission?.data?.preventSubmit) {
            this.formIO.formio.emit('submitDone');
            return;
        }
        const createPage = this.localstorage.getObj('AddAction');
        if (this.route.snapshot.paramMap.get('id') == 'form') {
            this.id = null;
        }
        else if (this.editId) {
            this.id = this.editId;
        }
        else {
            this.id = this.route.snapshot.paramMap.get('id');
            if (!this.id && !createPage && this.pagetype != 'FFP') {
                const entityId = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('id'))?.snapshot.paramMap.get('id');
                const youthId = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceValue'))?.snapshot.paramMap.get('sourceValue');
                this.id = this.fallbackIdFromRoute?.toLowerCase() == 'youthid' ? youthId : entityId;
            }
        }
        const submissionData = JSON.parse(JSON.stringify(submission));
        const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
            ? submissionData.data.data
            : submissionData.data;
        delete data.ribbonData;
        if (this.providerData?.id)
            data.provider_id = this.providerData?.id;
        if (this.check) {
            if (this.submittedData?.data?.textField?.account?.id) {
                data.id = this.submittedData?.data?.textField?.account?.id;
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.updateForm(requestData);
            }
            else if (this.id) {
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.updateForm(requestData);
            }
            else {
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.submiteWithoutId(requestData);
            }
        }
        else {
            const requestData = {
                pageid: this.formId,
                response: data
            };
            const getFormPageTitle = sessionStorage.getItem('FORM_TITLE');
            if (getFormPageTitle === 'Edit Youth Info') {
                this.id = this.route.parent.snapshot.paramMap.get('id');
            }
            if ((this.submittedData?.data.action !== "switch" && this.submittedData?.data.action !== "copy") && this.id || this.submittedData?.data?.textField?.id || this.submittedData.data?.edit) {
                this.updateForm(requestData);
            }
            else {
                this.id = null;
                this.submiteWithoutId(requestData);
            }
        }
    }
    submiteWithoutId(requestData) {
        const fileUploadData = this.authService.getSharedMessage();
        this.dynamicTabPageService.createFormResponse(this.id, requestData).subscribe(result => {
            this.submissionDone.emit(true);
            this.localstorage.setItem('AddAction', false);
            this.localstorage.removeItem('gridAction');
            this.dataStore.setData('gridAction', null);
            this.submittedDate(result['data']);
            if (this.isDialogPopup) {
                this.closePopup();
            }
            this.afterSubmit.emit(result['data']);
            // Redirection Fix
            // if (this.showBack || (history?.state?.externalLink && !history?.state?.isHideBack)) {
            //   this.redirect();
            // }
            this.submitToSurvey();
            const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
            if (fileUploadData?.attachmentdetails) {
                this.addAttachment(fileUploadInfo);
            }
            this.alertService.success('Submitted Successfully', true);
            this.localstorage.removeItem('titletab');
            if (window.location.href.indexOf('master-view') > -1 || window.location.href.indexOf('composite-page') > -1)
                if (this.selectedComponent) {
                    if ((this.selectedComponent?.loadedFromMasterView || this.selectedComponent?.loadedFromCompositePage) && this.selectedComponent.settings && this.selectedComponent.settings.onSubmitRedirection)
                        this.router.navigate(['../../'], { relativeTo: this.route });
                    this.selectedComponent['submittedData'] = result['data'];
                    this.store.dispatch(publishEvent({ eventName: 'submit', payload: this.selectedComponent }));
                }
                else {
                    this.redirect();
                }
            ;
            // Using below for all pages (after add respons) except composite.
            if (this.appService.canNavigateBack() && !window.location.href.includes('composite-page') && !window.location.href.includes('master-view')) {
                this.location.back();
            }
        }, _error => {
            this.submitFailed.next('Failed to add response');
        });
    }
    addAttachment(info) {
        this.dynamicTabPageService.createFormResponseAttachment(info).subscribe(res => console.log(res));
    }
    submittedDate(result) {
        if (result && result.length) {
            this.submittedData = { data: result[0].data ? result[0].data : result[0] };
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.id = result[0].id;
            this.openBottomSheet();
        }
        else if (result) {
            this.submittedData = { data: result?.data ? result?.data : result };
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.id = result.id;
            this.openBottomSheet();
        }
        else {
            this.id = null;
            this.dynamicSearchService.id.next(null);
        }
    }
    submitToSurvey() {
        if (this.pagetype === 'SURVEY') {
            this.dynamicTabPageService.createUserSurvey(history, this.id).subscribe(() => {
                //This is intentional
            });
        }
    }
    updateForm(requestData) {
        const fileUploadData = this.authService.getSharedMessage();
        if (requestData?.response?.id) {
            this.id = requestData?.response?.id;
        }
        const EditGridPageID = this.localstorage.getItem('EditGridPageID');
        if (window.location.href.includes('composite-page'))
            requestData['isCompositePage'] = true;
        this.dynamicTabPageService.updateFormResponse(this.id, requestData, EditGridPageID).subscribe(result => {
            this.submissionDone.emit(true);
            const data = result['data'];
            if (data && (data === 'NO_EDIT' || data === 'NOT_ALLOW_TO_EDIT' || data === 'INVALID_USER')) {
                if (data === 'NO_EDIT')
                    setTimeout(() => {
                        this.alertService.warn('The edit window for this record has expired and changes cannot be made at this time.');
                    }, 500);
                if (data === 'NOT_ALLOW_TO_EDIT' || data === 'INVALID_USER')
                    setTimeout(() => {
                        this.alertService.warn('Something went wrong');
                    }, 500);
                this.redirect();
            }
            else {
                if (data && data.length) {
                    this.submittedData = { data: result[0].data ? result[0].data : result[0] };
                    this.submittedData.data.userrolekey = this.user?.role?.rolekey;
                    this.id = result[0].id;
                    this.openBottomSheet();
                }
                else if (result) {
                    this.submittedData = { data: data ? data : result };
                    this.submittedData.data.userrolekey = this.user?.role?.rolekey;
                    this.id = result['id'];
                    if (window.location.href.includes('composite-page') || window.location.href.includes('master-view')) {
                        if (this.selectedComponent) {
                            if ((this.selectedComponent.loadedFromMasterView || this.selectedComponent.loadedFromCompositePage) && this.selectedComponent.settings && this.selectedComponent.settings.onSubmitRedirection)
                                this.redirect();
                            this.selectedComponent['submittedData'] = data;
                            this.store.dispatch(publishEvent({ eventName: 'submit', payload: this.selectedComponent }));
                        }
                        else {
                            this.redirect();
                        }
                    }
                }
                else {
                    this.id = null;
                    this.dynamicSearchService.id.next(null);
                }
                this.localstorage.setItem('editValue', JSON.stringify(requestData?.response));
                this.alertService.success('Submitted Successfully');
                this.submittedData = {
                    data: requestData?.response
                };
                const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
                if (fileUploadData?.attachmentdetails) {
                    this.addAttachment(fileUploadInfo);
                }
                this.localstorage.removeItem('titletab');
                this.localstorage.removeItem('editValue');
                this.localstorage.removeItem('target-tab-filter');
                if (!window.location.href.includes('composite-page') && !window.location.href.includes('master-view'))
                    this.redirect();
            }
        }, _error => {
            this.submitFailed.next('Failed to update response');
        });
    }
    closePopup() {
        this.dialogRef.close();
    }
    goBack() {
        this.router.navigate(['../../list'], { relativeTo: this.route });
    }
    openBottomSheet() {
        this.dynamicSearchService.sourceId.next(this.sourceid);
        this.dynamicSearchService.id.next(this.id);
        this.dynamicSearchService.pageId.next(this.formId);
    }
    modifyVideoContent() {
        const videoElements = document.querySelectorAll('.changetoIframe');
        if (videoElements && videoElements.length) {
            videoElements.forEach((element) => {
                const src = element.src;
                const ifrm = document.createElement('iframe');
                ifrm.setAttribute('src', src);
                ifrm.style.width = element.width ? element.width : null;
                ifrm.style.height = element.height ? element.height : null;
                ifrm.width = element.width ? element.width : null;
                ifrm.height = element.height ? element.height : null;
                element.replaceWith(ifrm);
            });
        }
    }
    customClickEvents(_data, event) {
        if (event.srcElement.id == 'scan_button') {
            this.external_scanner.nativeElement.click();
            if (event.srcElement.dataset) {
                this.scannerConfig = event.srcElement.dataset;
            }
        }
    }
    redirect() {
        if (window.location.href.indexOf('master-view') > 0 || window.location.href.indexOf('composite-page') > 0) {
            if (window.location.href.indexOf('dynamic-routing') > 0 || this.id)
                this.router.navigate(['../../../'], { relativeTo: this.route });
        }
        this.dynamicTabPageService.changePage(true);
        if (this.parentGridPageId) {
            this.location.back();
        }
        //Removing Unwanted redirect code
        // if (window.location.href.indexOf('master-view') > 0 || window.location.href.indexOf('composite-page') > 0) {
        //   if (window.location.href.indexOf('dynamic-routing') > 0 || this.id)
        //     this.router.navigate(['../../../'], { relativeTo: this.route });
        //   else
        //     this.router.navigate(['../../'], { relativeTo: this.route });
        // } else if (window.location.href.indexOf('tab') > 0 && window.location.href.indexOf('master-view') === -1 && window.location.href.indexOf('composite-page') === -1) {
        //   this.dynamicTabPageService.changePage(true);
        //   this.location.back();
        // } else if (window.location.href.indexOf('master-view') === -1 && window.location.href.indexOf('composite-page') === -1) {
        //   const gridPageInfo = JSON.parse(this.localstorage.getItem('parentGridPage'));
        //   this.router.navigate([`/pages/dynamic-sea/search/${gridPageInfo?.id}`], { relativeTo: this.route });
        // }
    }
    customEventsButton(event) {
        if (event.type === 'reportdownload') {
            const queryData = this.dataStore.getData('gridData');
            const pageData = this.dataStore.getData('pageData');
            event.data['currentYear'] = event.data.report1 === 'currentYear' ? 'yes' : '';
            if (event.data['currentYear'] === 'yes') {
                event.data['fromRange'] = '2021-06-18T14:33:06.366+0000';
                event.data['toRange'] = '2021-06-18T14:33:06.366+0000';
            }
            const data = {
                formData: event.data,
                queryData: queryData,
                pageData: pageData
            };
            this.downloadReport(data);
        }
    }
    downloadReport(data) {
        if (data) {
            this.dynamicTabPageService.exportReport(data).subscribe(result => {
                const resp = result['data'];
                if (resp.pdfAwsUrl && resp.excelAwsUrl) {
                    const urls = [];
                    urls.push(resp.pdfAwsUrl);
                    urls.push(resp.excelAwsUrl);
                    this.downloadFile(urls);
                }
                else if (resp.excelAwsUrl) {
                    this.downloadFile(resp.excelAwsUrl);
                }
                else if (resp.pdfAwsUrl) {
                    this.downloadFile(resp.pdfAwsUrl);
                }
            }, error => {
                console.log(error);
            });
        }
    }
    downloadFile(s3BucketUrlName) {
        if (s3BucketUrlName && Array.isArray(s3BucketUrlName)) {
            for (const item of s3BucketUrlName) {
                let link = document.createElement('a');
                link.href = item;
                link.download = 'download';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                link = null;
            }
        }
        else {
            const link = document.createElement('a');
            link.href = s3BucketUrlName.trim();
            link.download = 'download';
            link.click();
            link.remove();
        }
    }
    customEvents(evt) {
        console.log("changes done", evt);
        if (evt.data) {
            this.dynamicSearchService.onChangePageEventData = evt;
            this.dynamicSearchService.onChangePageEventId = this.id;
        }
        /* If the Form.io form requires a popup, there should be a hidden component with the API property name 'customValidationComponent'. */
        const comp = this.formIO.formio.getComponent('customValidationComponent')?.component;
        if (comp && evt?.data && comp?.showPopup && evt?.changed) {
            this.confirmationmessage = comp?.validationMessage;
            this.showButton1 = comp?.showButton1 ? comp?.showButton1 : false;
            this.showButton2 = comp?.showButton2 ? comp?.showButton2 : false;
            this.button1Text = comp?.button1Text;
            this.button2Text = comp?.button2Text;
            this.button1Key = comp?.button1Key;
            this.button2Key = comp?.button2Key;
            this.button1Action = comp?.button1Action;
            this.button2Action = comp?.button2Action;
            this.button1Style = comp?.button1Style;
            this.button2Style = comp?.button2Style;
            if (!comp?.popupOnSubmit)
                this.validationPopupRef = this.dialog.open(this.validationPopup);
        }
        this.financeCustomEventsFunctionality(evt);
    }
    speechToTextContent() {
        const speechElements = document.querySelectorAll('.speechToText');
        if (speechElements && speechElements.length) {
            speechElements.forEach((element) => {
                const speechbtn = document.createElement('button');
                speechbtn.className = 'narrative-speech-btn';
                speechbtn.innerHTML = '<i class="fa fa-microphone-slash" aria-hidden="true"></i>';
                element.appendChild(speechbtn);
                speechbtn.addEventListener('click', evt => {
                    this.activateSpeechToText(this, evt, element);
                }, false);
            });
        }
    }
    activateSpeechToText(ctrl, evt, item) {
        const narrativeElement = evt?.currentTarget?.children?.length
            ? evt?.currentTarget?.children[0]
            : evt.target.parentElement;
        this.speechRecogninitionOn = !this.speechRecogninitionOn;
        if (this.speechRecogninitionOn) {
            const speechText = item.querySelector('textarea');
            if (narrativeElement) {
                narrativeElement.className = 'fa fa-microphone';
            }
            ctrl.speechRecognitionService.record().subscribe(
            // listener
            value => {
                let tempNarrative = speechText.value;
                tempNarrative = tempNarrative.trim().concat(' ' + value);
                if (speechText) {
                    speechText.value = tempNarrative;
                }
            }, 
            // errror
            err => {
                this.conditionCheckError(narrativeElement, ctrl, evt, item, err);
            });
        }
        else {
            if (narrativeElement) {
                narrativeElement.className = 'fa fa-microphone-slash';
            }
            ctrl.deActivateSpeechRecognition(ctrl);
        }
    }
    conditionCheckError(narrativeElement, ctrl, evt, item, err) {
        console.error(err);
        this.errorExecution(narrativeElement, ctrl, evt, item, err);
    }
    errorExecution(narrativeElement, ctrl, evt, item, err) {
        if (narrativeElement) {
            narrativeElement.className = 'fa fa-microphone-slash';
        }
        if (err.error === 'no-speech') {
            ctrl.notification = this.noSpeechAlert();
            ctrl.activateSpeechToText(ctrl, evt, item);
        }
        else if (err.error === 'not-allowed') {
            ctrl.notification = this.micUnauthorisedAlert();
        }
        else if (err.error === 'not-microphone') {
            ctrl.notification = this.micNotAvailableAlert();
        }
    }
    micNotAvailableAlert() {
        return 'Microphone is not available. Please verify the connection of your microphone and try again.';
    }
    micUnauthorisedAlert() {
        return 'Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.';
    }
    noSpeechAlert() {
        return 'No speech has been detected. Please try again.';
    }
    deActivateSpeechRecognition(ctrl) {
        this.speechRecogninitionOn = false;
        ctrl.speechRecognitionService.destroySpeechObject();
    }
    ngOnDestroy() {
        if (this.dataSub)
            this.dataSub.unsubscribe();
        if (this.eventSubscription)
            this.eventSubscription.unsubscribe();
        this.speechRecognitionService.destroySpeechObject();
        this.ocr.clearResponse();
        if (this.pageDataSubscription)
            this.pageDataSubscription.unsubscribe();
    }
    uploadFile(file) {
        this.ocr.getResponse().subscribe(result => {
            if (result && result.status == 'SUCCEEDED') {
                this.processOCRResponse(result);
            }
        });
        this.processResponseData(file);
    }
    processResponseData(file) {
        this.dynamicTabPageService.uploadFile(file).subscribe(response => {
            if (response.status) {
                console.log(response.percent);
            }
        }, _err => {
            console.log('Unable to process your request.');
        });
    }
    processOCRResponse(result) {
        const response = result.response;
        if (this.scannerConfig && this.scannerConfig.scanType) {
            if (this.scannerConfig.scanType === 'text' && this.scannerConfig.scanPatch) {
                const sdata = this.submittedData;
                if (sdata && sdata.data) {
                    sdata.data[this.scannerConfig.scanPatch] = response.raw_text;
                    this.submittedData = JSON.parse(JSON.stringify(sdata));
                }
            }
            else {
                const formDatav1 = this.ocr.prepare_form_data(response, JSON.parse(JSON.stringify(this.FormInputs)));
                const formDatav2 = this.ocr.prepare_from_data_v1(response, JSON.parse(JSON.stringify(this.FormInputs)));
                const finalData = { ...formDatav1, ...formDatav2 };
                this.submittedData = { data: finalData };
            }
        }
    }
    prepareFormKeyLabel(json) {
        if (Array.isArray(json)) {
            json.forEach(item => {
                this.prepareFormKeyLabel(item);
            });
        }
        else if (json.hasOwnProperty('input') &&
            json.input &&
            json.type !== 'button' &&
            json.type !== 'signature' &&
            !json.hasOwnProperty('customConditional') &&
            !json.hasOwnProperty('conditional')) {
            let values = [];
            if (json.type === 'radio' || json.type === 'selectboxes') {
                values = json.values || [];
            }
            const formObject = {
                key: json['key'],
                label: json['label'],
                type: json['type'],
                values: [...values]
            };
            this.FormInputs.push(formObject);
            if (json.type === 'select' && json.multiple) {
                this.multiSelectDropDowns.push(json.key);
            }
        }
        else {
            Object.keys(json).forEach(key => {
                if (Array.isArray(json[key])) {
                    this.prepareFormKeyLabel(json[key]);
                }
            });
        }
    }
    financeCustomEventsFunctionality(event) {
        if (event?.changed?.component?.key === 'isBankAccountExist' &&
            !event?.data?.isBankAccountExist &&
            event?.data?.accountTypeKey) {
            let api = '';
            if (event?.data?.accountTypeKey === 'CA') {
                api = 'financecareaccountno';
            }
            else if (event?.data?.accountTypeKey === 'RA') {
                api = 'financerestitutionaccountno';
            }
            else {
                api = 'financesavingaccountno';
            }
            this.dynamicTabPageService.getUniqueId(api).subscribe(result => {
                this.submittedData.data.bankAccountNumber = result['data'];
                this.triggerRefresh.emit({
                    property: 'submission',
                    value: this.submittedData
                });
            }, error => {
                console.log(error);
            });
        }
    }
    routeToGrid(val) {
        if (val === 'Make Payment') {
            this.router.navigate(['./pages/mergepage/1f4e272a-4c03-4739-b4a5-53748e06e247']);
        }
        else if (val === 'Payment Details Information') {
            this.location.back();
        }
    }
    customEvent(event) {
        this._formIO.customEvent(event, this.formIO);
    }
    ocrUpload(files) {
        this.uploadedFile = files.target.files[0];
        const pageID = this.formId ? this.formId : this.pageId;
        this.imageData = {
            contentType: this.uploadedFile.type,
            fileName: `ocr/${pageID}/${this.uploadedFile.name}`
        };
        this.attachmentService.uploadKey(this.imageData).subscribe((res) => {
            if (res.data) {
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putupload2(res.data, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((resp) => {
                    if (resp && resp.status == 200) {
                        const object = {
                            path: `ocr/${pageID}/${this.uploadedFile.name}`,
                            attachmenttype: this.uploadedFile.type
                        };
                        this.alertService.success('Uploaded Successfully!');
                        if (this.action === 'edit') {
                            this.getUpload(JSON.stringify(object));
                            this.btnVerify = true;
                        }
                        else {
                            this.localstorage.setObj('OCRObj', JSON.stringify(object));
                            this.showOcrForm = true;
                            this.btnVerify = false;
                        }
                    }
                    else {
                        this.alertService.error(SOMETHING_WENT_WRONG);
                    }
                }, error => {
                    this.condionCheckErrorAlert(error);
                });
            }
        });
    }
    condionCheckErrorAlert(error) {
        if (error.status == 0)
            this.alertService.error(SOMETHING_WENT_WRONG);
    }
    getUpload(obj) {
        this.ocrValidationService.getUpload(obj).subscribe((res) => {
            if (res && res.data) {
                const resData = res.data;
                const imageCategory = resData?.imageCategory;
                const ocrDocumentDetails = imageCategory?.id_json[0];
                this.verifiData(ocrDocumentDetails);
            }
            else {
                this.alertService.error(SOMETHING_WENT_WRONG);
            }
        }, err => console.log(err));
    }
    verifiData(ocrDocumentDetails) {
        const jsonForm = this.jsonForm?.components[0];
        if (this.formResponse) {
            const fromArray = Object.keys(this.formResponse);
            fromArray?.forEach(respose => {
                if (ocrDocumentDetails) {
                    const documentValue = Object.keys(ocrDocumentDetails);
                    documentValue?.forEach(element => {
                        this.conditionCheckVerify(element, ocrDocumentDetails, respose, jsonForm);
                    });
                }
            });
        }
        columnsJson.columns[0].components[0].components[0].content = this.contentArray?.join('');
        this.jsonForm.components[0].components.splice(0, 0, columnsJson);
        this.triggerRefresh.emit({
            property: 'form',
            value: this.jsonForm
        });
    }
    conditionCheckVerify(element, ocrDocumentDetails, respose, jsonForm) {
        if (element &&
            respose &&
            element?.toLowerCase() === respose?.toLowerCase() &&
            ocrDocumentDetails[element]?.toLowerCase() !== this.formResponse[respose]?.toLowerCase()) {
            this.jsonForm.components[0].components = jsonForm?.components.map(res => {
                if (res && res?.key === element?.toLowerCase()) {
                    this.contentArray.push(`<p style="color:red;">${res.label} Not Match</p>\n`);
                }
                return res;
            });
        }
    }
    getEmittedData(data) {
        this.showOcrForm = false;
        this.btnVerify = true;
        this.submittedData = { ...data, ...this.submittedData };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageCleanupComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.FormioService }, { token: i3.Store }, { token: MAT_DIALOG_DATA, optional: true }, { token: i4.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicPageCleanupComponent, selector: "app-dynamic-pagecleanup", inputs: { editId: "editId", pageId: "pageId", sourceid: "sourceid", externalParameters: "externalParameters", isReadOnly: "isReadOnly", componentId: "componentId" }, outputs: { afterSubmit: "afterSubmit", submissionDone: "submissionDone" }, providers: [SpeechRecognitionService, OCRService], viewQueries: [{ propertyName: "external_scanner", first: true, predicate: ["external_scanner"], descendants: true }, { propertyName: "validationPopup", first: true, predicate: ["validationPopup"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"], dependencies: [{ kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }, { kind: "component", type: i7.AlertComponent, selector: "app-alert" }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i9.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageCleanupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-pagecleanup', providers: [SpeechRecognitionService, OCRService], template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.FormioService }, { type: i3.Store }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i4.PlatformDataStoreService }]; }, propDecorators: { editId: [{
                type: Input
            }], pageId: [{
                type: Input
            }], sourceid: [{
                type: Input
            }], externalParameters: [{
                type: Input
            }], external_scanner: [{
                type: ViewChild,
                args: ['external_scanner']
            }], validationPopup: [{
                type: ViewChild,
                args: ['validationPopup']
            }], isReadOnly: [{
                type: Input
            }], afterSubmit: [{
                type: Output
            }], formIO: [{
                type: ViewChild,
                args: ['formIO']
            }], componentId: [{
                type: Input
            }], submissionDone: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtcGFnZWNsZWFudXAvZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtcGFnZWNsZWFudXAvZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUVOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBZSxNQUFNLDBCQUEwQixDQUFDO0FBR25GLE9BQU8sRUFBYSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztB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LEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUQsQ0FBQzt3R0F6eENVLDJCQUEyQixnSkFrSGhCLGVBQWU7NEZBbEgxQiwyQkFBMkIsbVNBRjNCLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLHdVQ2pEbkQsdy9FQWlEQTs7NEZERWEsMkJBQTJCO2tCQU52QyxTQUFTOytCQUNFLHlCQUF5QixhQUd4QixDQUFDLHdCQUF3QixFQUFFLFVBQVUsQ0FBQzs7MEJBb0g5QyxRQUFROzswQkFBSSxNQUFNOzJCQUFDLGVBQWU7bUZBM0c1QixNQUFNO3NCQUFkLEtBQUs7Z0JBV0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUl5QixnQkFBZ0I7c0JBQTlDLFNBQVM7dUJBQUMsa0JBQWtCO2dCQUNDLGVBQWU7c0JBQTVDLFNBQVM7dUJBQUMsaUJBQWlCO2dCQUVuQixVQUFVO3NCQUFsQixLQUFLO2dCQUdJLFdBQVc7c0JBQXBCLE1BQU07Z0JBMEJQLE1BQU07c0JBREwsU0FBUzt1QkFBQyxRQUFRO2dCQWdDVCxXQUFXO3NCQUFuQixLQUFLO2dCQUlHLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZyxNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybWlvQ29tcG9uZW50IH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuaW1wb3J0IHsgRmlsZUVycm9yLCBOZ3hmVXBsb2FkZXJTZXJ2aWNlIH0gZnJvbSAnbmd4Zi11cGxvYWRlcic7XHJcbmltcG9ydCB7IGNvbHVtbnNKc29uIH0gZnJvbSAnLi4vLi4vQGNvcmUvSlNPTi5jb25zdCc7XHJcbmltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvc3BlZWNoLXJlY29nbml0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPQ1JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9vY3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvcGxhdGZvcm0tZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9keW5hbWljLXRhYi1wYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljc2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZHluYW1pY3NlYXJjaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYXR0YWNobWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IE9jclZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9vY3ItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybWlvU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZm9ybWlvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgcHVibGlzaEV2ZW50IH0gZnJvbSAnLi4vLi4vQHNoYXJlZC9tYXN0ZXItdmlldy1zdGF0ZS9tYXN0ZXItdmlldy5hY3Rpb25zJztcclxuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50U3RhdGUgfSBmcm9tICcuLi8uLi9Ac2hhcmVkL21hc3Rlci12aWV3LXN0YXRlL21hc3Rlci12aWV3LnN0YXRlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL2NvcmUuc3RhdGUnO1xyXG5pbXBvcnQgeyBzZWxlY3RDb21wb25lbnRDb25maWdCeUlkLCBzZWxlY3RFdmVudCB9IGZyb20gJy4uLy4uL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcuc2VsZWN0b3JzJztcclxuXHJcbmRlY2xhcmUgY29uc3QgJDogYW55O1xyXG5jb25zdCBTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORyA9ICdTdHJ1Y3R1cmVkIERlY2lzaW9uIE1ha2luZyc7XHJcbmNvbnN0IFNPTUVUSElOR19XRU5UX1dST05HID0gJ1NvbWV0aGluZyBXZW50IFdyb25nISc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWR5bmFtaWMtcGFnZWNsZWFudXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLXBhZ2VjbGVhbnVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLXBhZ2VjbGVhbnVwLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLCBPQ1JTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1BhZ2VDbGVhbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIHByaXZhdGUgc3VibWl0U3VjY2VzczogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHJpdmF0ZSBzdWJtaXRGYWlsZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGZvcm1JZDogYW55O1xyXG4gIHRhYklkOiBhbnk7XHJcbiAganNvbkZvcm06IGFueTtcclxuICBmcm9tVGl0bGU6IGFueTtcclxuICBASW5wdXQoKSBlZGl0SWQ6IGFueTtcclxuICBpZDogYW55O1xyXG4gIHN1Ym1pdHRlZERhdGE6IGFueTtcclxuICBhZnRlckVudGl0eU5hbWUgPSAnJztcclxuICBhZnRlclJ1bGVBcHBOYW1lID0gJyc7XHJcbiAgYmVmb3JlRW50aXR5TmFtZSA9ICcnO1xyXG4gIGJlZm9yZVJ1bGVBcHBOYW1lID0gJyc7XHJcbiAgYmVmb3JlcnVsZW1ldGhvZCA9ICcnO1xyXG4gIGFmdGVycnVsZW1ldGhvZCA9ICcnO1xyXG4gIHVzZXI6IGFueTtcclxuICBtdWx0aVNlbGVjdERyb3BEb3duczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIEBJbnB1dCgpIHBhZ2VJZDogYW55O1xyXG4gIEBJbnB1dCgpIHNvdXJjZWlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZXh0ZXJuYWxQYXJhbWV0ZXJzOiBzdHJpbmc7XHJcbiAgcGFnZURhdGFTdWJzY3JpcHRpb246IGFueTtcclxuICBpc0RpYWxvZ1BvcHVwID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuICBAVmlld0NoaWxkKCdleHRlcm5hbF9zY2FubmVyJykgZXh0ZXJuYWxfc2Nhbm5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd2YWxpZGF0aW9uUG9wdXAnKSB2YWxpZGF0aW9uUG9wdXA6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgcHJpdmF0ZSB2YWxpZGF0aW9uUG9wdXBSZWY6IE1hdERpYWxvZ1JlZjxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuICBASW5wdXQoKSBpc1JlYWRPbmx5OiBib29sZWFuO1xyXG4gIHNob3dCYWNrOiBib29sZWFuO1xyXG4gIGlzVGl0bGU6IGFueTtcclxuICBAT3V0cHV0KCkgYWZ0ZXJTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBwZXJzb25JZDogYW55O1xyXG4gIHRyaWdnZXJSZWZyZXNoOiBhbnk7XHJcbiAgZnJvbVdvcmtGbG93OiBib29sZWFuO1xyXG4gIGNsaWNrZWRTZXJ2aWNlQ2FzZTogYm9vbGVhbjtcclxuICBzZXJ2aWNlSWQ6IGFueTtcclxuICBzcGVlY2hSZWNvZ25pbml0aW9uT246IGJvb2xlYW47XHJcbiAgc3BlZWNoRGF0YTogc3RyaW5nO1xyXG4gIG5vdGlmaWNhdGlvbjogc3RyaW5nO1xyXG4gIG9yZ2FuaXphdGlvbklkOiBhbnk7XHJcbiAgRm9ybUlucHV0cyA9IFtdO1xyXG4gIHNjYW5uZXJDb25maWc6IGFueSA9IHt9O1xyXG4gIHRhYkRhdGE6IGFueTtcclxuICBuYXJyYXRpdmU6IGFueTtcclxuICBwdXJwb3NlOiBhbnk7XHJcbiAgcGFnZXR5cGU6IHN0cmluZztcclxuICBsb2NhbHN0b3JhZ2U6IExvY2FsU2VydmljZTtcclxuICBzZXNzaW9uU3RvcmFnZTogTG9jYWxTZXJ2aWNlO1xyXG4gIGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICBkYXRhU3RvcmU6IERhdGFTdG9yZVNlcnZpY2U7XHJcbiAgc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlOiBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2U7XHJcbiAgdXBsb2FkU2VydmljZTogTmd4ZlVwbG9hZGVyU2VydmljZTtcclxuICBvY3I6IE9DUlNlcnZpY2U7XHJcbiAgYXBwb2ludG1lbnRMaXN0OiBQcm9taXNlPGJvb2xlYW4+IHwgdW5kZWZpbmVkO1xyXG4gIGlzZm9ybUlPID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZCgnZm9ybUlPJylcclxuICBmb3JtSU86IEZvcm1pb0NvbXBvbmVudDtcclxuICBjdXJyZW50WW91dGhJZDogYW55O1xyXG4gIGR5bmFtaWNUYWJQYWdlU2VydmljZTogRHluYW1pY1RhYlBhZ2VTZXJ2aWNlO1xyXG4gIGR5bmFtaWNTZWFyY2hTZXJ2aWNlOiBEeW5hbWljc2VhcmNoU2VydmljZTtcclxuICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XHJcbiAgYXR0YWNobWVudEluZm86IGFueSA9IHt9O1xyXG4gIHVwbG9hZGVkRmlsZXM6IGFueSA9IFtdO1xyXG4gIHBhcmVudEdyaWRQYWdlOiBzdHJpbmc7XHJcbiAgcGFyZW50R3JpZFBhZ2VJZDogYW55O1xyXG4gIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlO1xyXG4gIHVwbG9hZGVkRmlsZTogYW55O1xyXG4gIGlzT2NyRm9ybTogYm9vbGVhbjtcclxuICBkb2N1bWVudFR5cGU6IHN0cmluZztcclxuICBpbWdVcmw6IHN0cmluZztcclxuICBzaG93T2NyRm9ybTogYm9vbGVhbjtcclxuICBhdHRhY2htZW50U2VydmljZSE6IEF0dGFjaG1lbnRzU2VydmljZTtcclxuICBpbWFnZURhdGE6IHsgY29udGVudFR5cGU6IGFueTsgZmlsZU5hbWU6IHN0cmluZyB9O1xyXG4gIHRhYmxlc2NoZW1hY29uZmlnOiBhbnk7XHJcbiAgZm9ybVJlc3BvbnNlOiBhbnk7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgY29udGVudEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gIHRlbXBsYXRlUmVzdWx0OiBhbnk7XHJcbiAgb2NyVmFsaWRhdGlvblNlcnZpY2U6IE9jclZhbGlkYXRpb25TZXJ2aWNlO1xyXG4gIGRhdGFTdWI6IGFueTtcclxuICBidG5WZXJpZnkgPSBmYWxzZTtcclxuICBlZGl0VmFsdWU6IGFueTtcclxuICBsb2dnZWRVc2VyOiBhbnk7XHJcbiAgcHJvdmlkZXJEYXRhOiBhbnk7XHJcbiAgY2hlY2s6IGFueTtcclxuICBzaG93YmFja2J0biA9IGZhbHNlO1xyXG4gIHNob3dUaXRsZSA6IGJvb2xlYW47XHJcbiAgIEBJbnB1dCgpIGNvbXBvbmVudElkOiBhbnk7XHJcbiAgIHNlbGVjdGVkQ29tcG9uZW50OiBDb21wb25lbnRTdGF0ZTtcclxuICAgY29tcG9uZW50Q29uZmlnJDogT2JzZXJ2YWJsZTxDb21wb25lbnRTdGF0ZT47XHJcbiAgZXZlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBAT3V0cHV0KCkgc3VibWlzc2lvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KCk7XHJcbiAgY29uZmlybWF0aW9ubWVzc2FnZTogc3RyaW5nO1xyXG4gIHNob3dCdXR0b24xOiBhbnk7XHJcbiAgc2hvd0J1dHRvbjI6IGFueTtcclxuICBidXR0b24xVGV4dDogYW55O1xyXG4gIGJ1dHRvbjJUZXh0OiBhbnk7XHJcbiAgYnV0dG9uMUtleTogYW55O1xyXG4gIGJ1dHRvbjJLZXk6YW55O1xyXG4gIGJ1dHRvbjFBY3Rpb246IGFueTtcclxuICBidXR0b24yQWN0aW9uOiBhbnk7XHJcbiAgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxyXG4gIGJ1dHRvbjFTdHlsZTogYW55O1xyXG4gIGJ1dHRvbjJTdHlsZTogYW55O1xyXG4gIGRpYWxvZzogTWF0RGlhbG9nO1xyXG4gIGh0dHBTZXJ2aWNlOmFueTtcclxuICBhcHBTZXJ2aWNlOmFueTtcclxuICBmYWxsYmFja0lkRnJvbVJvdXRlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgX2Zvcm1JTzogRm9ybWlvU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBkYXRhLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ107XHJcbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlID0gcmVzWydBUFBTRVJWSUNFJ107XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UgPSByZXNbJ0FMRVJUU0VSVklDRSddO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGluamVjdG9yLmdldDxBdXRoU2VydmljZT4oQXV0aFNlcnZpY2UpO1xyXG4gICAgLy8gdGhpcy5hbGVydFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QWxlcnRTZXJ2aWNlPihBbGVydFNlcnZpY2UpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2UgPSBpbmplY3Rvci5nZXQ8TG9jYWxTZXJ2aWNlPihMb2NhbFNlcnZpY2UpO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IGluamVjdG9yLmdldDxMb2NhdGlvbj4oTG9jYXRpb24pO1xyXG4gICAgdGhpcy5kYXRhU3RvcmUgPSBpbmplY3Rvci5nZXQ8RGF0YVN0b3JlU2VydmljZT4oRGF0YVN0b3JlU2VydmljZSk7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uU2VydmljZSA9IGluamVjdG9yLmdldDxTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2U+KFNwZWVjaFJlY29nbml0aW9uU2VydmljZSk7XHJcbiAgICB0aGlzLnVwbG9hZFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8Tmd4ZlVwbG9hZGVyU2VydmljZT4oTmd4ZlVwbG9hZGVyU2VydmljZSk7XHJcbiAgICB0aGlzLm9jciA9IGluamVjdG9yLmdldDxPQ1JTZXJ2aWNlPihPQ1JTZXJ2aWNlKTtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNUYWJQYWdlU2VydmljZT4oRHluYW1pY1RhYlBhZ2VTZXJ2aWNlKTtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8RHluYW1pY3NlYXJjaFNlcnZpY2U+KER5bmFtaWNzZWFyY2hTZXJ2aWNlKTtcclxuICAgIHRoaXMuYXR0YWNobWVudFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QXR0YWNobWVudHNTZXJ2aWNlPihBdHRhY2htZW50c1NlcnZpY2UpO1xyXG4gICAgdGhpcy5vY3JWYWxpZGF0aW9uU2VydmljZSA9IGluamVjdG9yLmdldDxPY3JWYWxpZGF0aW9uU2VydmljZT4oT2NyVmFsaWRhdGlvblNlcnZpY2UpO1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8TmdiTW9kYWw+KE5nYk1vZGFsKTtcclxuICAgIHRoaXMuZGlhbG9nID0gaW5qZWN0b3IuZ2V0PE1hdERpYWxvZz4oTWF0RGlhbG9nKTtcclxuICAgIHRoaXMudXNlciA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaigndXNlcicpO1xyXG4gICAgaWYgKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3BhcmVudEdyaWRQYWdlJykpIHtcclxuICAgICAgdGhpcy5zaG93YmFja2J0biA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHBhcmVudEdyaWRQYWdlT2JqID0gSlNPTi5wYXJzZSh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYXJlbnRHcmlkUGFnZScpKTtcclxuICAgICAgY29uc3QgY3VycmVudHBhZ2UgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYWdlbmFtZScpO1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlID0gY3VycmVudHBhZ2UgPyBjdXJyZW50cGFnZSA6ICcnO1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlSWQgPSBwYXJlbnRHcmlkUGFnZU9iaiA/IHBhcmVudEdyaWRQYWdlT2JqLmlkIDogJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9yZ2FuaXphdGlvbklkID0gdGhpcy51c2VyPy51c2VyV29ya0luZm8/Lm9yZ2FuaXphdGlvbj8uaWQ7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGFnZVVzZXJEYXRhID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLmNvbmRpdGlvbkNoZWNrRGF0YShkYXRhKTtcclxuICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmNsaWNrYWJsZURhdGE7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZURhdGEgPSB0aGlzLnJvdXRlcj8uZ2V0Q3VycmVudE5hdmlnYXRpb24oKT8uZXh0cmFzPy5zdGF0ZTtcclxuICAgIHRoaXMuc2hvd0JhY2sgPSBuYXZpZ2F0ZURhdGE/LmV4dGVybmFsTGluayA/IHRydWUgOiBmYWxzZTtcclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LmlzUmVhZE9ubHkpIHtcclxuICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LnRpdGxlKSB7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9IG5hdmlnYXRlRGF0YS50aXRsZTtcclxuICAgIH1cclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LnBlcnNvbklkKSB7XHJcbiAgICAgIHRoaXMucGVyc29uSWQgPSBuYXZpZ2F0ZURhdGEucGVyc29uSWQ7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQZXJzb25JZCA9IG5hdmlnYXRlRGF0YS5wZXJzb25JZDtcclxuICAgIH1cclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwZWVjaERhdGEgPSAnJztcclxuICAgIGlmIChoaXN0b3J5LnN0YXRlLnRpdGxlKSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3RpdGxlJywgaGlzdG9yeT8uc3RhdGU/LnRpdGxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoaXMuaXNUaXRsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3RpdGxlJyk7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9ICcgLyAnICsgJ0FkZCAnICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2V0LXRpdGxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnZXQtdGl0bGUnKTtcclxuICAgIGlmIChnZXRUaXRsZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmlzVGl0bGUgPSAnQWRkICcgKyBnZXRUaXRsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudFlvdXRoSWQgPSB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICB0aGlzLmF0dGFjaG1lbnRJbmZvID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLkZvcm1JbnB1dHMgPSBbXTtcclxuICAgIHRoaXMudHJpZ2dlclJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB0aGlzLmlzUmVhZE9ubHkgPSBoaXN0b3J5Py5zdGF0ZT8uaXNSZWFkT25seSA/IHRydWUgOiB0aGlzLmlzUmVhZE9ubHk7XHJcbiAgICB0aGlzLnBlcnNvbklkID0gaGlzdG9yeT8uc3RhdGU/LnBlcnNvbklkO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5vbkNoYW5nZVBlcnNvbklkID0gaGlzdG9yeT8uc3RhdGU/LnBlcnNvbklkO1xyXG5cclxuICAgIHRoaXMuc2hvd0JhY2sgPSAoaGlzdG9yeT8uc3RhdGU/LmV4dGVybmFsTGluayAmJiAhaGlzdG9yeT8uc3RhdGU/LmlzSGlkZUJhY2spIHx8IHRoaXMuc2hvd0JhY2s7XHJcbiAgICB0aGlzLnBhZ2VJZCA9IGhpc3Rvcnk/LnN0YXRlPy5wYWdlSWQgPyBoaXN0b3J5Py5zdGF0ZT8ucGFnZUlkIDogdGhpcy5wYWdlSWQ7XHJcbiAgICB0aGlzLmFjdGlvbiA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ2dyaWRBY3Rpb24nKSB8fCB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdncmlkQWN0aW9uJyk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdncmlkQWN0aW9uJywgdGhpcy5hY3Rpb24pXHJcbiAgICB0aGlzLmJ0blZlcmlmeSA9IHRoaXMuYWN0aW9uID09PSAnZWRpdCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCd0YWInKSkge1xyXG4gICAgICB0aGlzLnNob3diYWNrYnRuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd1RpdGxlID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dUaXRsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrRGF0YShkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGEuZWRpdElkID8gZGF0YS5lZGl0SWQgOiBudWxsO1xyXG4gICAgICB0aGlzLmlzRGlhbG9nUG9wdXAgPSBkYXRhLmlzUG9wdXAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZUlkID0gZGF0YS5wYWdlSWQgPyBkYXRhLnBhZ2VJZCA6IHRoaXMucGFnZUlkO1xyXG4gICAgICB0aGlzLmlzUmVhZE9ubHkgPSBkYXRhLmlzUmVhZE9ubHkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZWRVc2VyID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFNoYXJlZE1lc3NhZ2UoZGF0YSk7XHJcbiAgICAgIHRoaXMucm91dGVyUGFnZURhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnNvdXJjZUlkU2VydmljZS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhICE9ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlSWQgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uuc291cmNlSWRTZXJ2aWNlLm5leHQoJycpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tlZFNlcnZpY2VDYXNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbGxHZXRBUEkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5yZXN1bHQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQgIT0gJycpIHtcclxuICAgICAgICB0aGlzLmFmdGVyU3VibWl0LmVtaXQocmVzdWx0KTtcclxuICAgICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnJlc3VsdC5uZXh0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1JTykge1xyXG4gICAgICB0aGlzLmZvcm1JTy5mb3JtaW9SZWFkeS50aGVuKGZvcm1JbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgZm9ybUluc3RhbmNlLnJlYWR5LnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZVBhc3N3b3JkJyk7XHJcbiAgICAgICAgICBpZiAodG9nZ2xlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiZGF0YVske3RvZ2dsZUJ1dHRvblsnYXJpYUxhYmVsJ119XVwiXWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGFzc3dvcmRGaWVsZC50eXBlID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtZXllLXNsYXNoJyk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtZXllJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtZXllJyk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtZXllLXNsYXNoJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMuZXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEV2ZW50KSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmV2ZW50TmFtZSA9PT0gJ3N1Ym1pdCcgJiYgZXZlbnQucGF5bG9hZC5zZXR0aW5ncy5vblN1Ym1pdFJlZnJlc2hcclxuICAgICAgICAmJiBldmVudC5wYXlsb2FkLnNldHRpbmdzLm9uU3VibWl0UmVmcmVzaFdpZGdldHMpIHtcclxuICAgICAgICAgIGV2ZW50LnBheWxvYWQuc2V0dGluZ3Mub25TdWJtaXRSZWZyZXNoV2lkZ2V0cy5mb3JFYWNoKHggPT57XHJcbiAgICAgICAgICBpZihbJ0FUUEJETScsICdGRlAnXS5pbmNsdWRlcyh4LnBhZ2VUeXBlKSkgIHRoaXMuZm9ybUlkID0geC5pZDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcodHJ1ZSk7IFxyXG4gICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByb3V0ZXJQYWdlRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLmZvcm1JZCA9IGRhdGEucGFnZUlkO1xyXG4gICAgaWYgKCF0aGlzLmZvcm1JZCkge1xyXG4gICAgICB0aGlzLmZvcm1JZCA9IHRoaXMucGFnZUlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wb25lbnRDb25maWckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDb21wb25lbnRDb25maWdCeUlkKHRoaXMuY29tcG9uZW50SWQpKSk7XHJcbiAgICB0aGlzLmNvbXBvbmVudENvbmZpZyQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IGRhdGEpO1xyXG4gICAgdGhpcy5ldmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0RXZlbnQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICB0aGlzLnNob3diYWNrYnRuID0gZmFsc2U7XHJcbiAgICAgIGlmIChldmVudCAmJiBldmVudC5ldmVudE5hbWUgPT09ICdlZGl0JyAmJiBldmVudC5wYXlsb2FkLm1hcHBpbmdGb3JtSWQgPT09IHRoaXMucGFnZUlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgICAgICB0aGlzLmdldFJvdXRlckNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGV2ZW50ICYmIGV2ZW50LmV2ZW50TmFtZSA9PT0gJ3ZpZXcnICYmIGV2ZW50LnBheWxvYWQubWFwcGluZ0Zvcm1JZCA9PT0gdGhpcy5wYWdlSWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWRpdElkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZihldmVudCAmJiBldmVudC5ldmVudE5hbWUgPT09ICdhZGQnICYmIGV2ZW50LnBheWxvYWQubWFwcGluZ0Zvcm1JZCA9PT0gdGhpcy5wYWdlSWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFNvdXJjZSgpO1xyXG4gICAgdGhpcy5nZXRQYWdlVGFicygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVRhYnMoKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRQYWdlQnlJZCh0aGlzLmZvcm1JZCkuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdPy5hY3RpdmVWZXJzaW9uPy5wYWdlbmFtZSkge1xyXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2V0LXRpdGxlJywgcmVzdWx0LmRhdGFbMF0/LmFjdGl2ZVZlcnNpb24/LnBhZ2VuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWJJZCA9IHJlc3VsdC5kYXRhWzBdLmFjdGl2ZVZlcnNpb24uaWQ7XHJcbiAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcoKTtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSAnQWRkICcgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnZXQtdGl0bGUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRSb3V0ZXJDb25maWcoaXNDb21wb3NpdGVQYWdlUmVmcmVzaD86IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmZvcm1JZCkge1xyXG4gICAgICAvLyBnZXQgY29uZmlndXJlIFVSTCBnZXQscG9zdCxwdXQgVVJMXHJcbiAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbigpLnRoZW4oY29uZmlnID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb25maWcpO1xyXG4gICAgICAgIGlmKGlzQ29tcG9zaXRlUGFnZVJlZnJlc2gpe1xyXG4gICAgICAgICAgaWYoY29uZmlnLmRhdGEucGFnZURldGFpbHMuaWQgPT0gdGhpcy5mb3JtSWQpXHJcbiAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKGNvbmZpZyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICB0aGlzLmdldFRlbXBsYXRlKGNvbmZpZyk7ICAgXHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgICAvLyBnZXQgUGFnZSBjb25maWd1cmF0aW9uIFRlbXBsYXRlIERhdGEgICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIGlmIChlcnIuZXJyb3IpIHtcclxuICAgICAgICAgIGlmIChlcnI/LmVycm9yPy5zdGF0dXNDb2RlID09PSAgNDAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKCdZb3UgZG9u4oCZdCBoYXZlIGFjY2VzcyB0byB0aGlzIHBhZ2UuIFBsZWFzZSBjb250YWN0IHRoZSBhZG1pbmlzdHJhdG9yLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnBhZ2VJZCAmJiAhdGhpcy5mb3JtSWQpIHtcclxuICAgICAgdGhpcy5wYWdlRGF0YVN1YnNjcmlwdGlvbiA9IHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuZGF0YS5zdWJzY3JpYmUocGFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybUlkID0gcGFnZTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIC8vIGdldCBjb25maWd1cmUgVVJMIGdldCxwb3N0LHB1dCBVUkxcclxuICAgICAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhXHJcbiAgICAgICAgICAgIHRoaXMuanNvbkZvcm0gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKHJlcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U291cmNlKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnNvdXJjZWlkO1xyXG4gICAgaWYgKHRoaXMucm91dGUucGFyZW50ICYmIHRoaXMucm91dGUucGFyZW50LnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpKSB7XHJcbiAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnNvdXJjZWlkKSB7XHJcbiAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICAgICA/IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8uc25hcHNob3Q/LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKVxyXG4gICAgICAgIDogdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8uc25hcHNob3Q/LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnB1cnBvc2UgPVxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbXMucHVycG9zZVxyXG4gICAgICAgID8gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1zLnB1cnBvc2VcclxuICAgICAgICA6IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50LnNuYXBzaG90LnBhcmFtcy5wdXJwb3NlO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhXHJcbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZShyZXN1bHQ6IGFueSkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZVJlc3VsdCA9IHJlc3VsdDtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMuYWN0aW9uLnRvTG93ZXJDYXNlKCkgPT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ0VkaXQgJyArIHJlc3VsdD8uZGF0YT8ucGFnZW5hbWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb24udG9Mb3dlckNhc2UoKSA9PSAndmlldycpIHtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSAnVmlldyAnICsgcmVzdWx0Py5kYXRhPy5wYWdlbmFtZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi50b0xvd2VyQ2FzZSgpID09ICdhZGQnKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ0FkZCAnICsgcmVzdWx0Py5kYXRhPy5wYWdlbmFtZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi50b0xvd2VyQ2FzZSgpID09ICdsaW5rJykge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdWaWV3ICcgKyByZXN1bHQ/LmRhdGE/LnBhZ2VuYW1lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ0ZPUk1fVElUTEUnKSB8fCAnJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdGT1JNX1RJVExFJywgdGhpcy5pc1RpdGxlKTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiB7fSB9O1xyXG4gICAgICB0aGlzLmVkaXRWYWx1ZSA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnZWRpdFZhbHVlJykpO1xyXG4gICAgICBpZiAodGhpcy5jaGVjayAmJiB0aGlzLnByb3ZpZGVyRGF0YT8uYWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHtcclxuICAgICAgICAgIGRhdGE6IHRoaXMucHJvdmlkZXJEYXRhPy5hY2NvdW50XHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVkaXRWYWx1ZSA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnZWRpdFZhbHVlJykpO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmVkaXRWYWx1ZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhWydlZGl0J10gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIFxyXG4gICAgICB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGUgPSB0eXBlb2YgcmVzdWx0Py5kYXRhPy50ZW1wbGF0ZWpzb24gPT0gJ3N0cmluZyc/IEpTT04ucGFyc2UocmVzdWx0Py5kYXRhPy50ZW1wbGF0ZWpzb24pPy5mYWxsYmFja0lkRnJvbVJvdXRlOiByZXN1bHQ/LmRhdGE/LnRlbXBsYXRlanNvbj8uZmFsbGJhY2tJZEZyb21Sb3V0ZTtcclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSByZXN1bHQuZGF0YT8ucGFnZW5hbWUgPyByZXN1bHQuZGF0YT8ucGFnZW5hbWUgOiAnJztcclxuICAgICAgdGhpcy5kYXRhU3RvcmUuc2V0RGF0YSgndGl0bGUnLCB0aGlzLmZyb21UaXRsZSk7XHJcbiAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tUZW1wbGF0ZShyZXN1bHQpO1xyXG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJuYW1lID0gdGhpcy51c2VyPy5maXJzdE5hbWUgKyAnJyArIHRoaXMudXNlcj8ubGFzdE5hbWU7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnJpYmJvbkRhdGEgPSBudWxsO1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5zb3VyY2VpZCA9IHRoaXMuc291cmNlaWQgPyB0aGlzLnNvdXJjZWlkIDogbnVsbDsgXHJcbiAgICAgIGlmICh0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VLZXknKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlS2V5JykpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YVt0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VLZXknKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlS2V5JyldID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZVZhbHVlJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYWxsR2V0QVBJKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGFTdWIgPSB0aGlzLmRhdGFTdG9yZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXNbJ3VwbG9hZEZyb21HcmlkJ10pIHtcclxuICAgICAgICB0aGlzLnNob3dPY3JGb3JtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0blZlcmlmeSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQYXJhbXMoZWxlbWVudDphbnkpe1xyXG4gICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZWxlbWVudCkgOiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uZGl0aW9uQ2hlY2tUZW1wbGF0ZShyZXN1bHQpIHtcclxuICAgIGxldCByb3V0aW5nUGFnZSA9IFtdO1xyXG4gICAgaWYgKHJlc3VsdC5kYXRhLnRhYmNvbmZpZykge1xyXG4gICAgICBjb25zdCByb3V0aW5nVGFiID0gdGhpcy5jaGVja1BhcmFtcyhyZXN1bHQuZGF0YS50YWJjb25maWcpO1xyXG4gICAgICByb3V0aW5nUGFnZSA9IHJvdXRpbmdUYWIuZmlsdGVyKHggPT4geC50eXBlID09PSAnUk9VVElORycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbikge1xyXG4gICAgICB0aGlzLmlzZm9ybUlPID0gdHJ1ZTtcclxuICAgICAgdGhpcy5qc29uRm9ybSA9IHRoaXMuY2hlY2tQYXJhbXMocmVzdWx0LmRhdGEudGVtcGxhdGVqc29uKVxyXG4gICAgICBjb25zdCBmb3JtVGVtcGxhdGVKc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmpzb25Gb3JtKSk7XHJcbiAgICAgIHRoaXMucGFnZXR5cGUgPSByZXN1bHQuZGF0YT8ucGFnZURldGFpbHM/LnBhZ2V0eXBlO1xyXG4gICAgICBpZiAocmVzdWx0LmRhdGE/LnBhZ2V0eXBlID09PSAnU1VSVkVZJykge1xyXG4gICAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnVzZXI/LmlkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHJlcGFyZUZvcm1LZXlMYWJlbChmb3JtVGVtcGxhdGVKc29uKTtcclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSB0aGlzLmpzb25Gb3JtICYmIHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA/IHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA6IHJlc3VsdC5kYXRhLnBhZ2VuYW1lO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm1vZGlmeVZpZGVvQ29udGVudCgpO1xyXG4gICAgICAgIHRoaXMuc3BlZWNoVG9UZXh0Q29udGVudCgpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSBlbHNlIGlmIChyb3V0aW5nUGFnZS5sZW5ndGggPiAwICYmIHJvdXRpbmdQYWdlWzBdLnBhdGhuYW1lID09PSAnQ3JlYXRlU2l0ZXZpc2l0Q29tcG9uZW50Jykge1xyXG4gICAgICB0aGlzLmlzZm9ybUlPID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYXBwb2ludG1lbnRMaXN0ID0gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBnZXQgY29uZmlndXJlIFVSTCBnZXQscG9zdCxwdXQgVVJMXHJcbiAgYXN5bmMgZ2V0Q29uZmlndXJhdGlvbigpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uID8gdGhpcy5hY3Rpb24/LnRvTG93ZXJDYXNlKCkgOiAnJztcclxuICAgIGNvbnN0IGRhdGE6IGFueSA9IGF3YWl0IHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldEFjdGl2ZVBhZ2UodGhpcy50YWJJZCwgdHJ1ZSwgYWN0aW9uKS50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkSW5jaWRlbnREYXRhKCkge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0TGlzdEJ5U291cmNlSWQodGhpcy5zb3VyY2VpZCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm5hcnJhdGl2ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIubmFycmF0aXZlLCAnJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsR2V0QVBJKCkge1xyXG4gICAgaWYgKHRoaXMuZnJvbVRpdGxlLmluY2x1ZGVzKFNUUlVDVFVSRURfREVDSVNJT05fTUFLSU5HKSkge1xyXG4gICAgICB0aGlzLmxvYWRJbmNpZGVudERhdGEoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFiRGF0YSA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ3NlbGVjdGVkVGFiRGF0YScpO1xyXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpID09ICdmb3JtJykge1xyXG4gICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5lZGl0SWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZWRpdElkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgICAgaWYgKCF0aGlzLmlkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZhbGxiYWNrSWQgPSB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGU/IHRoaXMuZmFsbGJhY2tJZEZyb21Sb3V0ZSA6ICdpZCc7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUucGF0aEZyb21Sb290Py5maW5kKHggPT4geC5zbmFwc2hvdC5wYXJhbU1hcC5oYXMoZmFsbGJhY2tJZCkpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoZmFsbGJhY2tJZCk7ICAgICAgICBcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd5b3V0aElEJywgdGhpcy5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tDYWxsR2V0QVBJKCk7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdncmlkQWN0aW9uJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybXJlc3BvbnNlKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrQ2FsbEdldEFQSSgpIHtcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5lZGl0SWQ7XHJcbiAgICB9XHJcbiAgICAvLyAjY2hlY2tcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCdkeW5hbWljLXJvdXRpbmcnKSA+IDAgfHwgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZigncGFnZXMvaW50YWtlJykgPiAwKSB7XHJcbiAgICAgIGlmICh0aGlzLmZyb21Xb3JrRmxvdykge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnNvdXJjZWlkO1xyXG4gICAgICAgIHRoaXMuZnJvbVdvcmtGbG93ID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgPyB0aGlzLmlkIDogdGhpcy5zb3VyY2VpZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2xpY2tlZFNlcnZpY2VDYXNlKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnNlcnZpY2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybXJlc3BvbnNlKHRoaXMuYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1yZXNwb25zZShhY3Rpb24pIHtcclxuICAgIGlmIChhY3Rpb24gIT09ICdhZGQnKSB7XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldFJlc3BvbnNlQnlQYWdlSWQodGhpcy5pZCwgdGhpcy5mb3JtSWQpLnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0Py5kYXRhICYmIHJlc3VsdD8uZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0TXVsdGlwbGVGcm9tKHRoaXMucGFnZXR5cGUgPT09ICdGRlAnID8gcmVzdWx0Py5kYXRhLnJlc3BvbnNlIDogcmVzdWx0Py5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdD8uZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtUmVzcG9uc2UgPSByZXN1bHQ/LmRhdGE7XHJcbiAgICAgICAgICB0aGlzLmdldEFjdGlvblNlbGVjdCh0aGlzLnBhZ2V0eXBlID09PSAnRkZQJyA/IHJlc3VsdD8uZGF0YS5yZXNwb25zZSA6IHJlc3VsdD8uZGF0YSwgYWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmlkLm5leHQobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc3VsdE51bGxDaGVjayhkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhKSB7XHJcbiAgICAgIHJldHVybiBkYXRhLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFjdGlvblNlbGVjdChyZXN1bHQsIGFjdGlvbikge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdWx0TnVsbENoZWNrKHJlc3VsdCk7XHJcbiAgICB0aGlzLnByb2Nlc3NNdWx0aVNlbGVjdERyb3Bkb3ducyhkYXRhKTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZGF0YSB9O1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICBpZiAodGhpcy5mcm9tVGl0bGUuaW5jbHVkZXMoU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcpKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLm5hcnJhdGl2ZSA9IHRoaXMubmFycmF0aXZlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbiA9PSAnZWRpdCcgfHwgYWN0aW9uID09ICdFZGl0Jykge1xyXG4gICAgICB0aGlzLmlzVGl0bGUgPSAnRWRpdCAnICsgZGF0YT8ucGFnZURldGFpbHM/LmFjdGl2ZVZlcnNpb24/LnBhZ2VuYW1lIHx8ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgaWYgKHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnR5cGUgPSB0aGlzLmV4dGVybmFsUGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIHRoaXMuaWQgPSByZXN1bHQuaWQ7XHJcbiAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TXVsdGlwbGVGcm9tKHJlc3VsdCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdFswXS5kYXRhID8gcmVzdWx0WzBdLmRhdGEgOiByZXN1bHRbMF07XHJcbiAgICB0aGlzLnByb2Nlc3NNdWx0aVNlbGVjdERyb3Bkb3ducyhkYXRhKTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZGF0YSB9O1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICBpZiAodGhpcy5mcm9tVGl0bGUuaW5jbHVkZXMoU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcpKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLm5hcnJhdGl2ZSA9IHRoaXMubmFycmF0aXZlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnR5cGUgPSB0aGlzLmV4dGVybmFsUGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzTXVsdGlTZWxlY3REcm9wZG93bnMoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm11bHRpU2VsZWN0RHJvcERvd25zLmZvckVhY2goZHJvcGRvd25LZXkgPT4ge1xyXG4gICAgICBjb25zdCBkcm9wZG93blZhbHVlID0gZGF0YVtkcm9wZG93bktleV07XHJcbiAgICAgIGlmICh0eXBlb2YgZHJvcGRvd25WYWx1ZSA9PT0gJ3N0cmluZycgJiYgZHJvcGRvd25WYWx1ZS5pbmNsdWRlcygnLCcpKSB7XHJcbiAgICAgICAgZGF0YVtkcm9wZG93bktleV0gPSBkcm9wZG93blZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV4dFN1Ym1pdChldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuICAgIHRoaXMuc3VibWl0RmFpbGVkLm5leHQoJ0ZhaWxlZCB0byBhZGQgcmVzcG9uc2UnKTtcclxuICB9XHJcblxyXG4gIC8qIFRoZSBiZWxvdyBmdW5jdGlvbiB3aWxsIHRyaWdnZXIgd2hlbiB1c2VyIGNsaWNrcyBvbiBhIGJ1dHRvbiBpbiBQb3BVcCAqL1xyXG4gIG9uQ2xpY2tDb25maXJtYXRpb24odXNlckFjdGlvbiwgYWN0aW9uS2V5KSB7XHJcbiAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0VmFsdWUoKTtcclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KCdjdXN0b21WYWxpZGF0aW9uQ29tcG9uZW50Jyk/LmNvbXBvbmVudDtcclxuICAgIGNvbnN0IHVwZGF0ZUNvbXBvbmVudEFuZFJlZHJhdyA9IChsb2NhbEFjdGlvbktleSkgPT4ge1xyXG4gICAgICBpZiAoY29tcCkgY29tcFsndXNlcklucHV0J10gPSBsb2NhbEFjdGlvbktleTtcclxuICAgICAgZm9ybVZhbHVlLmRhdGFbJ3VzZXJJbnB1dCddID0gbG9jYWxBY3Rpb25LZXk7XHJcbiAgICAgIHRoaXMuZm9ybUlPLmZvcm1pby5zZXRWYWx1ZShmb3JtVmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGlmICh1c2VyQWN0aW9uID09PSAnc3VibWl0Jykge1xyXG4gICAgICB0aGlzLmNsb3NlVmFsaWRhdGlvblBvcHVwKCk7XHJcbiAgICAgIGZvcm1WYWx1ZS5kYXRhWydwcmV2ZW50U3VibWl0J10gPSBmYWxzZTtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvLnNldFZhbHVlKGZvcm1WYWx1ZSk7XHJcbiAgICAgIHVwZGF0ZUNvbXBvbmVudEFuZFJlZHJhdyhhY3Rpb25LZXkpO1xyXG4gICAgICBjb21wPy5wb3B1cE9uU3VibWl0ICYmIHRoaXMub25TdWJtaXQoZm9ybVZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2VWYWxpZGF0aW9uUG9wdXAoKTtcclxuICAgICAgdXBkYXRlQ29tcG9uZW50QW5kUmVkcmF3KGNvbXA/LmJ1dHRvbjJUZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlVmFsaWRhdGlvblBvcHVwKCkge1xyXG4gICAgdGhpcy52YWxpZGF0aW9uUG9wdXBSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KCdjdXN0b21WYWxpZGF0aW9uQ29tcG9uZW50Jyk/LmNvbXBvbmVudDtcclxuICAgIGNvbnN0IGZvcm1WYWx1ZSA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRWYWx1ZSgpO1xyXG4gICAgaWYgKGZvcm1WYWx1ZT8uZGF0YT8ucHJldmVudFN1Ym1pdCAmJiBjb21wPy5wb3B1cE9uU3VibWl0ICYmIGNvbXA/LnNob3dQb3B1cCkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25Qb3B1cFJlZiA9IHRoaXMuZGlhbG9nLm9wZW4odGhpcy52YWxpZGF0aW9uUG9wdXApO1xyXG4gICAgICB0aGlzLmNvbmZpcm1hdGlvbm1lc3NhZ2UgPSBjb21wPy52YWxpZGF0aW9uTWVzc2FnZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoc3VibWlzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcclxuICAgIGlmIChzdWJtaXNzaW9uPy5kYXRhPy5wcmV2ZW50U3VibWl0KSB7XHJcbiAgICAgIHRoaXMuZm9ybUlPLmZvcm1pby5lbWl0KCdzdWJtaXREb25lJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZVBhZ2UgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ0FkZEFjdGlvbicpO1xyXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpID09ICdmb3JtJykge1xyXG4gICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5lZGl0SWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZWRpdElkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICBpZiAoIXRoaXMuaWQgJiYgIWNyZWF0ZVBhZ2UgJiYgdGhpcy5wYWdldHlwZSAhPSAnRkZQJykge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eUlkID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnaWQnKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgICAgICBjb25zdCB5b3V0aElkID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlVmFsdWUnKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlVmFsdWUnKTtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5mYWxsYmFja0lkRnJvbVJvdXRlPy50b0xvd2VyQ2FzZSgpID09ICd5b3V0aGlkJyA/IHlvdXRoSWQgOiBlbnRpdHlJZDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pc3Npb25EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdWJtaXNzaW9uKSk7XHJcbiAgICBjb25zdCBkYXRhID1cclxuICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgaWYgKHRoaXMucHJvdmlkZXJEYXRhPy5pZCkgZGF0YS5wcm92aWRlcl9pZCA9IHRoaXMucHJvdmlkZXJEYXRhPy5pZDtcclxuICAgIGlmICh0aGlzLmNoZWNrKSB7XHJcbiAgICAgIGlmICh0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGE/LnRleHRGaWVsZD8uYWNjb3VudD8uaWQpIHtcclxuICAgICAgICBkYXRhLmlkID0gdGhpcy5zdWJtaXR0ZWREYXRhPy5kYXRhPy50ZXh0RmllbGQ/LmFjY291bnQ/LmlkO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgIHBhZ2VpZDogdGhpcy5mb3JtSWQsXHJcbiAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtKHJlcXVlc3REYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgIHBhZ2VpZDogdGhpcy5mb3JtSWQsXHJcbiAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdWJtaXRlV2l0aG91dElkKHJlcXVlc3REYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBnZXRGb3JtUGFnZVRpdGxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnRk9STV9USVRMRScpO1xyXG4gICAgICBpZihnZXRGb3JtUGFnZVRpdGxlID09PSAnRWRpdCBZb3V0aCBJbmZvJyApIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICAgIGlmICgodGhpcy5zdWJtaXR0ZWREYXRhPy5kYXRhLmFjdGlvbiAhPT0gXCJzd2l0Y2hcIiAmJiB0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGEuYWN0aW9uICE9PSBcImNvcHlcIikgJiYgdGhpcy5pZCB8fCB0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGE/LnRleHRGaWVsZD8uaWQgfHwgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGE/LmVkaXQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3VibWl0ZVdpdGhvdXRJZChyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdGVXaXRob3V0SWQocmVxdWVzdERhdGEpIHtcclxuICAgIGNvbnN0IGZpbGVVcGxvYWREYXRhID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jcmVhdGVGb3JtUmVzcG9uc2UodGhpcy5pZCwgcmVxdWVzdERhdGEpLnN1YnNjcmliZShcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pc3Npb25Eb25lLmVtaXQodHJ1ZSlcclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdBZGRBY3Rpb24nLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZGF0YVN0b3JlLnNldERhdGEoJ2dyaWRBY3Rpb24nLG51bGwpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkRGF0ZShyZXN1bHRbJ2RhdGEnXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaWFsb2dQb3B1cCkge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWZ0ZXJTdWJtaXQuZW1pdChyZXN1bHRbJ2RhdGEnXSk7XHJcblxyXG4gICAgICAgIC8vIFJlZGlyZWN0aW9uIEZpeFxyXG4gICAgICAgIC8vIGlmICh0aGlzLnNob3dCYWNrIHx8IChoaXN0b3J5Py5zdGF0ZT8uZXh0ZXJuYWxMaW5rICYmICFoaXN0b3J5Py5zdGF0ZT8uaXNIaWRlQmFjaykpIHtcclxuICAgICAgICAvLyAgIHRoaXMucmVkaXJlY3QoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJtaXRUb1N1cnZleSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihyZXN1bHRbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1N1Ym1pdHRlZCBTdWNjZXNzZnVsbHknLHRydWUpO1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpdGxldGFiJyk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ21hc3Rlci12aWV3JykgPiAtMSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdjb21wb3NpdGUtcGFnZScpID4gLTEgKVxyXG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBpZigodGhpcy5zZWxlY3RlZENvbXBvbmVudD8ubG9hZGVkRnJvbU1hc3RlclZpZXcgfHwgdGhpcy5zZWxlY3RlZENvbXBvbmVudD8ubG9hZGVkRnJvbUNvbXBvc2l0ZVBhZ2UgKSYmIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQuc2V0dGluZ3MgJiYgdGhpcy5zZWxlY3RlZENvbXBvbmVudC5zZXR0aW5ncy5vblN1Ym1pdFJlZGlyZWN0aW9uKSBcclxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudFsnc3VibWl0dGVkRGF0YSddID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gocHVibGlzaEV2ZW50KHtldmVudE5hbWU6ICdzdWJtaXQnLCBwYXlsb2FkOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50fSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAvLyBVc2luZyBiZWxvdyBmb3IgYWxsIHBhZ2VzIChhZnRlciBhZGQgcmVzcG9ucykgZXhjZXB0IGNvbXBvc2l0ZS5cclxuICAgICAgICBpZiAodGhpcy5hcHBTZXJ2aWNlLmNhbk5hdmlnYXRlQmFjaygpICYmICF3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSAmJiAhd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ21hc3Rlci12aWV3JykpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VibWl0RmFpbGVkLm5leHQoJ0ZhaWxlZCB0byBhZGQgcmVzcG9uc2UnKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZEF0dGFjaG1lbnQoaW5mbykge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlRm9ybVJlc3BvbnNlQXR0YWNobWVudChpbmZvKS5zdWJzY3JpYmUocmVzID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0dGVkRGF0ZShyZXN1bHQpIHtcclxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHJlc3VsdFswXS5kYXRhID8gcmVzdWx0WzBdLmRhdGEgOiByZXN1bHRbMF0gfTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHJlc3VsdD8uZGF0YSA/IHJlc3VsdD8uZGF0YSA6IHJlc3VsdCB9O1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgICAgdGhpcy5pZCA9IHJlc3VsdC5pZDtcclxuICAgICAgdGhpcy5vcGVuQm90dG9tU2hlZXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmlkLm5leHQobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXRUb1N1cnZleSgpIHtcclxuICAgIGlmICh0aGlzLnBhZ2V0eXBlID09PSAnU1VSVkVZJykge1xyXG4gICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jcmVhdGVVc2VyU3VydmV5KGhpc3RvcnksIHRoaXMuaWQpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy9UaGlzIGlzIGludGVudGlvbmFsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRm9ybShyZXF1ZXN0RGF0YSkge1xyXG4gICAgY29uc3QgZmlsZVVwbG9hZERhdGEgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFNoYXJlZE1lc3NhZ2UoKTtcclxuICAgIGlmIChyZXF1ZXN0RGF0YT8ucmVzcG9uc2U/LmlkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSByZXF1ZXN0RGF0YT8ucmVzcG9uc2U/LmlkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgRWRpdEdyaWRQYWdlSUQgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdFZGl0R3JpZFBhZ2VJRCcpO1xyXG4gICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2NvbXBvc2l0ZS1wYWdlJykpIHJlcXVlc3REYXRhWydpc0NvbXBvc2l0ZVBhZ2UnXSA9IHRydWU7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGRhdGVGb3JtUmVzcG9uc2UodGhpcy5pZCwgcmVxdWVzdERhdGEsIEVkaXRHcmlkUGFnZUlEKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXNzaW9uRG9uZS5lbWl0KHRydWUpOyBcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgaWYoZGF0YSAmJiAoZGF0YSA9PT0gJ05PX0VESVQnIHx8IGRhdGEgPT09ICdOT1RfQUxMT1dfVE9fRURJVCcgfHwgZGF0YSA9PT0gJ0lOVkFMSURfVVNFUicpKXtcclxuICAgICAgICAgIGlmKGRhdGEgPT09ICdOT19FRElUJylcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uud2FybignVGhlIGVkaXQgd2luZG93IGZvciB0aGlzIHJlY29yZCBoYXMgZXhwaXJlZCBhbmQgY2hhbmdlcyBjYW5ub3QgYmUgbWFkZSBhdCB0aGlzIHRpbWUuJyk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICBpZihkYXRhID09PSAnTk9UX0FMTE9XX1RPX0VESVQnIHx8IGRhdGEgPT09ICdJTlZBTElEX1VTRVInKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTsgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHJlc3VsdFswXS5kYXRhID8gcmVzdWx0WzBdLmRhdGEgOiByZXN1bHRbMF0gfTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IGRhdGEgPyBkYXRhIDogcmVzdWx0IH07XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gcmVzdWx0WydpZCddO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnbWFzdGVyLXZpZXcnKSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICBpZigodGhpcy5zZWxlY3RlZENvbXBvbmVudC5sb2FkZWRGcm9tTWFzdGVyVmlldyB8fCB0aGlzLnNlbGVjdGVkQ29tcG9uZW50LmxvYWRlZEZyb21Db21wb3NpdGVQYWdlKSAmJiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50LnNldHRpbmdzICYmIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQuc2V0dGluZ3Mub25TdWJtaXRSZWRpcmVjdGlvbikgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50WydzdWJtaXR0ZWREYXRhJ10gPSBkYXRhO1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gocHVibGlzaEV2ZW50KHtldmVudE5hbWU6ICdzdWJtaXQnLCBwYXlsb2FkOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50fSkpOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuaWQubmV4dChudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ2VkaXRWYWx1ZScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhPy5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnU3VibWl0dGVkIFN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhOiByZXF1ZXN0RGF0YT8ucmVzcG9uc2VcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIocmVzdWx0WydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpdGxldGFiJyk7XHJcbiAgICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5yZW1vdmVJdGVtKCdlZGl0VmFsdWUnKTtcclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RhcmdldC10YWItZmlsdGVyJyk7XHJcbiAgICAgICAgICBpZighd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2NvbXBvc2l0ZS1wYWdlJykgJiYgIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdtYXN0ZXItdmlldycpKVxyXG4gICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEZhaWxlZC5uZXh0KCdGYWlsZWQgdG8gdXBkYXRlIHJlc3BvbnNlJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uL2xpc3QnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkJvdHRvbVNoZWV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5zb3VyY2VJZC5uZXh0KHRoaXMuc291cmNlaWQpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KHRoaXMuaWQpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5wYWdlSWQubmV4dCh0aGlzLmZvcm1JZCk7XHJcbiAgfVxyXG5cclxuICBtb2RpZnlWaWRlb0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB2aWRlb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZXRvSWZyYW1lJyk7XHJcbiAgICBpZiAodmlkZW9FbGVtZW50cyAmJiB2aWRlb0VsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICB2aWRlb0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gICAgICAgIGNvbnN0IGlmcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICBpZnJtLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcclxuICAgICAgICBpZnJtLnN0eWxlLndpZHRoID0gZWxlbWVudC53aWR0aCA/IGVsZW1lbnQud2lkdGggOiBudWxsO1xyXG4gICAgICAgIGlmcm0uc3R5bGUuaGVpZ2h0ID0gZWxlbWVudC5oZWlnaHQgPyBlbGVtZW50LmhlaWdodCA6IG51bGw7XHJcbiAgICAgICAgaWZybS53aWR0aCA9IGVsZW1lbnQud2lkdGggPyBlbGVtZW50LndpZHRoIDogbnVsbDtcclxuICAgICAgICBpZnJtLmhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0ID8gZWxlbWVudC5oZWlnaHQgOiBudWxsO1xyXG4gICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoaWZybSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tQ2xpY2tFdmVudHMoX2RhdGEsIGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5pZCA9PSAnc2Nhbl9idXR0b24nKSB7XHJcbiAgICAgIHRoaXMuZXh0ZXJuYWxfc2Nhbm5lci5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgIGlmIChldmVudC5zcmNFbGVtZW50LmRhdGFzZXQpIHtcclxuICAgICAgICB0aGlzLnNjYW5uZXJDb25maWcgPSBldmVudC5zcmNFbGVtZW50LmRhdGFzZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KCkge1xyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdtYXN0ZXItdmlldycpID4gMCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdjb21wb3NpdGUtcGFnZScpID4gMCkge1xyXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignZHluYW1pYy1yb3V0aW5nJykgPiAwIHx8IHRoaXMuaWQpXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi8uLi8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgICAgfVxyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY2hhbmdlUGFnZSh0cnVlKTtcclxuICAgIGlmKHRoaXMucGFyZW50R3JpZFBhZ2VJZCl7XHJcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gICAgLy9SZW1vdmluZyBVbndhbnRlZCByZWRpcmVjdCBjb2RlXHJcbiAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWFzdGVyLXZpZXcnKSA+IDAgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY29tcG9zaXRlLXBhZ2UnKSA+IDApIHtcclxuICAgIC8vICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2R5bmFtaWMtcm91dGluZycpID4gMCB8fCB0aGlzLmlkKVxyXG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIC8vICAgZWxzZVxyXG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIC8vIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigndGFiJykgPiAwICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ21hc3Rlci12aWV3JykgPT09IC0xICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbXBvc2l0ZS1wYWdlJykgPT09IC0xKSB7XHJcbiAgICAvLyAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNoYW5nZVBhZ2UodHJ1ZSk7XHJcbiAgICAvLyAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgLy8gfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdtYXN0ZXItdmlldycpID09PSAtMSAmJiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdjb21wb3NpdGUtcGFnZScpID09PSAtMSkge1xyXG4gICAgLy8gICBjb25zdCBncmlkUGFnZUluZm8gPSBKU09OLnBhcnNlKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3BhcmVudEdyaWRQYWdlJykpO1xyXG4gICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9wYWdlcy9keW5hbWljLXNlYS9zZWFyY2gvJHtncmlkUGFnZUluZm8/LmlkfWBdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBjdXN0b21FdmVudHNCdXR0b24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50eXBlID09PSAncmVwb3J0ZG93bmxvYWQnKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5RGF0YSA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ2dyaWREYXRhJyk7XHJcbiAgICAgIGNvbnN0IHBhZ2VEYXRhID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgncGFnZURhdGEnKTtcclxuICAgICAgZXZlbnQuZGF0YVsnY3VycmVudFllYXInXSA9IGV2ZW50LmRhdGEucmVwb3J0MSA9PT0gJ2N1cnJlbnRZZWFyJyA/ICd5ZXMnIDogJyc7XHJcbiAgICAgIGlmIChldmVudC5kYXRhWydjdXJyZW50WWVhciddID09PSAneWVzJykge1xyXG4gICAgICAgIGV2ZW50LmRhdGFbJ2Zyb21SYW5nZSddID0gJzIwMjEtMDYtMThUMTQ6MzM6MDYuMzY2KzAwMDAnO1xyXG4gICAgICAgIGV2ZW50LmRhdGFbJ3RvUmFuZ2UnXSA9ICcyMDIxLTA2LTE4VDE0OjMzOjA2LjM2NiswMDAwJztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGZvcm1EYXRhOiBldmVudC5kYXRhLFxyXG4gICAgICAgIHF1ZXJ5RGF0YTogcXVlcnlEYXRhLFxyXG4gICAgICAgIHBhZ2VEYXRhOiBwYWdlRGF0YVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmRvd25sb2FkUmVwb3J0KGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG93bmxvYWRSZXBvcnQoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZXhwb3J0UmVwb3J0KGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcCA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgICAgICAgaWYgKHJlc3AucGRmQXdzVXJsICYmIHJlc3AuZXhjZWxBd3NVcmwpIHtcclxuICAgICAgICAgICAgY29uc3QgdXJscyA9IFtdO1xyXG4gICAgICAgICAgICB1cmxzLnB1c2gocmVzcC5wZGZBd3NVcmwpO1xyXG4gICAgICAgICAgICB1cmxzLnB1c2gocmVzcC5leGNlbEF3c1VybCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHVybHMpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwLmV4Y2VsQXdzVXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHJlc3AuZXhjZWxBd3NVcmwpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwLnBkZkF3c1VybCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZShyZXNwLnBkZkF3c1VybCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG93bmxvYWRGaWxlKHMzQnVja2V0VXJsTmFtZSkge1xyXG4gICAgaWYgKHMzQnVja2V0VXJsTmFtZSAmJiBBcnJheS5pc0FycmF5KHMzQnVja2V0VXJsTmFtZSkpIHtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHMzQnVja2V0VXJsTmFtZSkge1xyXG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGl0ZW07XHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9ICdkb3dubG9hZCc7XHJcbiAgICAgICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBsaW5rLmhyZWYgPSBzM0J1Y2tldFVybE5hbWUudHJpbSgpO1xyXG4gICAgICBsaW5rLmRvd25sb2FkID0gJ2Rvd25sb2FkJztcclxuICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tRXZlbnRzKGV2dCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2VzIGRvbmVcIiwgZXZ0KTsgICAgXHJcbiAgICBpZiAoZXZ0LmRhdGEpIHtcclxuICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5vbkNoYW5nZVBhZ2VFdmVudERhdGEgPSBldnQ7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQYWdlRXZlbnRJZCA9IHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICAvKiBJZiB0aGUgRm9ybS5pbyBmb3JtIHJlcXVpcmVzIGEgcG9wdXAsIHRoZXJlIHNob3VsZCBiZSBhIGhpZGRlbiBjb21wb25lbnQgd2l0aCB0aGUgQVBJIHByb3BlcnR5IG5hbWUgJ2N1c3RvbVZhbGlkYXRpb25Db21wb25lbnQnLiAqL1xyXG4gICAgY29uc3QgY29tcCA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRDb21wb25lbnQoJ2N1c3RvbVZhbGlkYXRpb25Db21wb25lbnQnKT8uY29tcG9uZW50XHJcbiAgICAgIGlmIChjb21wICYmIGV2dD8uZGF0YSAmJiBjb21wPy5zaG93UG9wdXAgJiYgZXZ0Py5jaGFuZ2VkKSB7XHJcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25tZXNzYWdlID0gY29tcD8udmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5zaG93QnV0dG9uMSA9IGNvbXA/LnNob3dCdXR0b24xID8gY29tcD8uc2hvd0J1dHRvbjEgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dCdXR0b24yID0gY29tcD8uc2hvd0J1dHRvbjIgPyBjb21wPy5zaG93QnV0dG9uMiA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMVRleHQgPSBjb21wPy5idXR0b24xVGV4dDtcclxuICAgICAgICB0aGlzLmJ1dHRvbjJUZXh0ID0gY29tcD8uYnV0dG9uMlRleHQ7XHJcbiAgICAgICAgdGhpcy5idXR0b24xS2V5ID0gY29tcD8uYnV0dG9uMUtleTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjJLZXkgPSBjb21wPy5idXR0b24yS2V5O1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMUFjdGlvbiA9IGNvbXA/LmJ1dHRvbjFBY3Rpb247XHJcbiAgICAgICAgdGhpcy5idXR0b24yQWN0aW9uID0gY29tcD8uYnV0dG9uMkFjdGlvbjtcclxuICAgICAgICB0aGlzLmJ1dHRvbjFTdHlsZSA9IGNvbXA/LmJ1dHRvbjFTdHlsZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjJTdHlsZSA9IGNvbXA/LmJ1dHRvbjJTdHlsZTtcclxuICAgICAgICBpZiAoIWNvbXA/LnBvcHVwT25TdWJtaXQpIHRoaXMudmFsaWRhdGlvblBvcHVwUmVmID0gdGhpcy5kaWFsb2cub3Blbih0aGlzLnZhbGlkYXRpb25Qb3B1cCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbmFuY2VDdXN0b21FdmVudHNGdW5jdGlvbmFsaXR5KGV2dCk7XHJcbiAgfVxyXG5cclxuICBzcGVlY2hUb1RleHRDb250ZW50KCkge1xyXG4gICAgY29uc3Qgc3BlZWNoRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlZWNoVG9UZXh0Jyk7XHJcbiAgICBpZiAoc3BlZWNoRWxlbWVudHMgJiYgc3BlZWNoRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIHNwZWVjaEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwZWVjaGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNwZWVjaGJ0bi5jbGFzc05hbWUgPSAnbmFycmF0aXZlLXNwZWVjaC1idG4nO1xyXG4gICAgICAgIHNwZWVjaGJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1taWNyb3Bob25lLXNsYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGVlY2hidG4pO1xyXG4gICAgICAgIHNwZWVjaGJ0bi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgIGV2dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTcGVlY2hUb1RleHQodGhpcywgZXZ0LCBlbGVtZW50KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGVTcGVlY2hUb1RleHQoY3RybCwgZXZ0LCBpdGVtKSB7XHJcbiAgICBjb25zdCBuYXJyYXRpdmVFbGVtZW50ID0gZXZ0Py5jdXJyZW50VGFyZ2V0Py5jaGlsZHJlbj8ubGVuZ3RoXHJcbiAgICAgID8gZXZ0Py5jdXJyZW50VGFyZ2V0Py5jaGlsZHJlblswXVxyXG4gICAgICA6IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uID0gIXRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uO1xyXG4gICAgaWYgKHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uKSB7XHJcbiAgICAgIGNvbnN0IHNwZWVjaFRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGlmIChuYXJyYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgbmFycmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnZmEgZmEtbWljcm9waG9uZSc7XHJcbiAgICAgIH1cclxuICAgICAgY3RybC5zcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UucmVjb3JkKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgIC8vIGxpc3RlbmVyXHJcbiAgICAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgbGV0IHRlbXBOYXJyYXRpdmUgPSBzcGVlY2hUZXh0LnZhbHVlO1xyXG4gICAgICAgICAgdGVtcE5hcnJhdGl2ZSA9IHRlbXBOYXJyYXRpdmUudHJpbSgpLmNvbmNhdCgnICcgKyB2YWx1ZSk7XHJcbiAgICAgICAgICBpZiAoc3BlZWNoVGV4dCkge1xyXG4gICAgICAgICAgICBzcGVlY2hUZXh0LnZhbHVlID0gdGVtcE5hcnJhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGVycnJvclxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrRXJyb3IobmFycmF0aXZlRWxlbWVudCwgY3RybCwgZXZ0LCBpdGVtLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChuYXJyYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgbmFycmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnZmEgZmEtbWljcm9waG9uZS1zbGFzaCc7XHJcbiAgICAgIH1cclxuICAgICAgY3RybC5kZUFjdGl2YXRlU3BlZWNoUmVjb2duaXRpb24oY3RybCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrRXJyb3IobmFycmF0aXZlRWxlbWVudCwgY3RybCwgZXZ0LCBpdGVtLCBlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHRoaXMuZXJyb3JFeGVjdXRpb24obmFycmF0aXZlRWxlbWVudCwgY3RybCwgZXZ0LCBpdGVtLCBlcnIpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JFeGVjdXRpb24obmFycmF0aXZlRWxlbWVudCwgY3RybCwgZXZ0LCBpdGVtLCBlcnIpIHtcclxuICAgIGlmIChuYXJyYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIG5hcnJhdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZhIGZhLW1pY3JvcGhvbmUtc2xhc2gnO1xyXG4gICAgfVxyXG4gICAgaWYgKGVyci5lcnJvciA9PT0gJ25vLXNwZWVjaCcpIHtcclxuICAgICAgY3RybC5ub3RpZmljYXRpb24gPSB0aGlzLm5vU3BlZWNoQWxlcnQoKTtcclxuICAgICAgY3RybC5hY3RpdmF0ZVNwZWVjaFRvVGV4dChjdHJsLCBldnQsIGl0ZW0pO1xyXG4gICAgfSBlbHNlIGlmIChlcnIuZXJyb3IgPT09ICdub3QtYWxsb3dlZCcpIHtcclxuICAgICAgY3RybC5ub3RpZmljYXRpb24gPSB0aGlzLm1pY1VuYXV0aG9yaXNlZEFsZXJ0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGVyci5lcnJvciA9PT0gJ25vdC1taWNyb3Bob25lJykge1xyXG4gICAgICBjdHJsLm5vdGlmaWNhdGlvbiA9IHRoaXMubWljTm90QXZhaWxhYmxlQWxlcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1pY05vdEF2YWlsYWJsZUFsZXJ0KCkge1xyXG4gICAgcmV0dXJuICdNaWNyb3Bob25lIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSB2ZXJpZnkgdGhlIGNvbm5lY3Rpb24gb2YgeW91ciBtaWNyb3Bob25lIGFuZCB0cnkgYWdhaW4uJztcclxuICB9XHJcblxyXG4gIG1pY1VuYXV0aG9yaXNlZEFsZXJ0KCkge1xyXG4gICAgcmV0dXJuICdZb3VyIGJyb3dzZXIgaXMgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHlvdXIgbWljcm9waG9uZS4gVmVyaWZ5IHRoYXQgeW91ciBicm93c2VyIGhhcyBhY2Nlc3MgdG8geW91ciBtaWNyb3Bob25lIGFuZCB0cnkgYWdhaW4uJztcclxuICB9XHJcblxyXG4gIG5vU3BlZWNoQWxlcnQoKSB7XHJcbiAgICByZXR1cm4gJ05vIHNwZWVjaCBoYXMgYmVlbiBkZXRlY3RlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xyXG4gIH1cclxuXHJcbiAgZGVBY3RpdmF0ZVNwZWVjaFJlY29nbml0aW9uKGN0cmwpIHtcclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uID0gZmFsc2U7XHJcbiAgICBjdHJsLnNwZWVjaFJlY29nbml0aW9uU2VydmljZS5kZXN0cm95U3BlZWNoT2JqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGFTdWIpIHRoaXMuZGF0YVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgaWYodGhpcy5ldmVudFN1YnNjcmlwdGlvbikgdGhpcy5ldmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UuZGVzdHJveVNwZWVjaE9iamVjdCgpO1xyXG4gICAgdGhpcy5vY3IuY2xlYXJSZXNwb25zZSgpO1xyXG4gICAgaWYgKHRoaXMucGFnZURhdGFTdWJzY3JpcHRpb24pIHRoaXMucGFnZURhdGFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZEZpbGUoZmlsZTogRmlsZSB8IEZpbGVFcnJvcik6IHZvaWQge1xyXG4gICAgdGhpcy5vY3IuZ2V0UmVzcG9uc2UoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzID09ICdTVUNDRUVERUQnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzT0NSUmVzcG9uc2UocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb2Nlc3NSZXNwb25zZURhdGEoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzUmVzcG9uc2VEYXRhKGZpbGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLnVwbG9hZEZpbGUoZmlsZSkuc3Vic2NyaWJlKFxyXG4gICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucGVyY2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIHByb2Nlc3MgeW91ciByZXF1ZXN0LicpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc09DUlJlc3BvbnNlKHJlc3VsdCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSByZXN1bHQucmVzcG9uc2U7XHJcbiAgICBpZiAodGhpcy5zY2FubmVyQ29uZmlnICYmIHRoaXMuc2Nhbm5lckNvbmZpZy5zY2FuVHlwZSkge1xyXG4gICAgICBpZiAodGhpcy5zY2FubmVyQ29uZmlnLnNjYW5UeXBlID09PSAndGV4dCcgJiYgdGhpcy5zY2FubmVyQ29uZmlnLnNjYW5QYXRjaCkge1xyXG4gICAgICAgIGNvbnN0IHNkYXRhID0gdGhpcy5zdWJtaXR0ZWREYXRhO1xyXG4gICAgICAgIGlmIChzZGF0YSAmJiBzZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICBzZGF0YS5kYXRhW3RoaXMuc2Nhbm5lckNvbmZpZy5zY2FuUGF0Y2hdID0gcmVzcG9uc2UucmF3X3RleHQ7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhdjEgPSB0aGlzLm9jci5wcmVwYXJlX2Zvcm1fZGF0YShyZXNwb25zZSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLkZvcm1JbnB1dHMpKSk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGF2MiA9IHRoaXMub2NyLnByZXBhcmVfZnJvbV9kYXRhX3YxKHJlc3BvbnNlLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuRm9ybUlucHV0cykpKTtcclxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB7IC4uLmZvcm1EYXRhdjEsIC4uLmZvcm1EYXRhdjIgfTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IGZpbmFsRGF0YSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlRm9ybUtleUxhYmVsKGpzb24pIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XHJcbiAgICAgIGpzb24uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0aGlzLnByZXBhcmVGb3JtS2V5TGFiZWwoaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAganNvbi5oYXNPd25Qcm9wZXJ0eSgnaW5wdXQnKSAmJlxyXG4gICAgICBqc29uLmlucHV0ICYmXHJcbiAgICAgIGpzb24udHlwZSAhPT0gJ2J1dHRvbicgJiZcclxuICAgICAganNvbi50eXBlICE9PSAnc2lnbmF0dXJlJyAmJlxyXG4gICAgICAhanNvbi5oYXNPd25Qcm9wZXJ0eSgnY3VzdG9tQ29uZGl0aW9uYWwnKSAmJlxyXG4gICAgICAhanNvbi5oYXNPd25Qcm9wZXJ0eSgnY29uZGl0aW9uYWwnKVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCB2YWx1ZXMgPSBbXTtcclxuICAgICAgaWYgKGpzb24udHlwZSA9PT0gJ3JhZGlvJyB8fCBqc29uLnR5cGUgPT09ICdzZWxlY3Rib3hlcycpIHtcclxuICAgICAgICB2YWx1ZXMgPSBqc29uLnZhbHVlcyB8fCBbXTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb3JtT2JqZWN0ID0ge1xyXG4gICAgICAgIGtleToganNvblsna2V5J10sXHJcbiAgICAgICAgbGFiZWw6IGpzb25bJ2xhYmVsJ10sXHJcbiAgICAgICAgdHlwZToganNvblsndHlwZSddLFxyXG4gICAgICAgIHZhbHVlczogWy4uLnZhbHVlc11cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5Gb3JtSW5wdXRzLnB1c2goZm9ybU9iamVjdCk7XHJcblxyXG4gICAgICBpZiAoanNvbi50eXBlID09PSAnc2VsZWN0JyAmJiBqc29uLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aVNlbGVjdERyb3BEb3ducy5wdXNoKGpzb24ua2V5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT2JqZWN0LmtleXMoanNvbikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcclxuICAgICAgICAgIHRoaXMucHJlcGFyZUZvcm1LZXlMYWJlbChqc29uW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5hbmNlQ3VzdG9tRXZlbnRzRnVuY3Rpb25hbGl0eShldmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICBldmVudD8uY2hhbmdlZD8uY29tcG9uZW50Py5rZXkgPT09ICdpc0JhbmtBY2NvdW50RXhpc3QnICYmXHJcbiAgICAgICFldmVudD8uZGF0YT8uaXNCYW5rQWNjb3VudEV4aXN0ICYmXHJcbiAgICAgIGV2ZW50Py5kYXRhPy5hY2NvdW50VHlwZUtleVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBhcGkgPSAnJztcclxuICAgICAgaWYgKGV2ZW50Py5kYXRhPy5hY2NvdW50VHlwZUtleSA9PT0gJ0NBJykge1xyXG4gICAgICAgIGFwaSA9ICdmaW5hbmNlY2FyZWFjY291bnRubyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQ/LmRhdGE/LmFjY291bnRUeXBlS2V5ID09PSAnUkEnKSB7XHJcbiAgICAgICAgYXBpID0gJ2ZpbmFuY2VyZXN0aXR1dGlvbmFjY291bnRubyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBpID0gJ2ZpbmFuY2VzYXZpbmdhY2NvdW50bm8nO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldFVuaXF1ZUlkKGFwaSkuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5iYW5rQWNjb3VudE51bWJlciA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgICAgICAgdGhpcy50cmlnZ2VyUmVmcmVzaC5lbWl0KHtcclxuICAgICAgICAgICAgcHJvcGVydHk6ICdzdWJtaXNzaW9uJyxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3VibWl0dGVkRGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcm91dGVUb0dyaWQodmFsKSB7XHJcbiAgICBpZiAodmFsID09PSAnTWFrZSBQYXltZW50Jykge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vcGFnZXMvbWVyZ2VwYWdlLzFmNGUyNzJhLTRjMDMtNDczOS1iNGE1LTUzNzQ4ZTA2ZTI0NyddKTtcclxuICAgIH0gZWxzZSBpZiAodmFsID09PSAnUGF5bWVudCBEZXRhaWxzIEluZm9ybWF0aW9uJykge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50KGV2ZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtSU8uY3VzdG9tRXZlbnQoZXZlbnQsIHRoaXMuZm9ybUlPKTtcclxuICB9XHJcblxyXG4gIG9jclVwbG9hZChmaWxlcykge1xyXG4gICAgdGhpcy51cGxvYWRlZEZpbGUgPSBmaWxlcy50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCBwYWdlSUQgPSB0aGlzLmZvcm1JZCA/IHRoaXMuZm9ybUlkIDogdGhpcy5wYWdlSWQ7XHJcbiAgICB0aGlzLmltYWdlRGF0YSA9IHtcclxuICAgICAgY29udGVudFR5cGU6IHRoaXMudXBsb2FkZWRGaWxlLnR5cGUsXHJcbiAgICAgIGZpbGVOYW1lOiBgb2NyLyR7cGFnZUlEfS8ke3RoaXMudXBsb2FkZWRGaWxlLm5hbWV9YFxyXG4gICAgfTtcclxuICAgIHRoaXMuYXR0YWNobWVudFNlcnZpY2UudXBsb2FkS2V5KHRoaXMuaW1hZ2VEYXRhKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZEF0dGFjaG1lbnQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJyk7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkQXR0YWNobWVudERldGFpbHMgPSB1cGxvYWRBdHRhY2htZW50LmZpbGVzWzBdO1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucHV0dXBsb2FkMihyZXMuZGF0YSwgdXBsb2FkQXR0YWNobWVudERldGFpbHMsIHVwbG9hZEF0dGFjaG1lbnREZXRhaWxzLnR5cGUpLnN1YnNjcmliZShcclxuICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3AgJiYgcmVzcC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogYG9jci8ke3BhZ2VJRH0vJHt0aGlzLnVwbG9hZGVkRmlsZS5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50dHlwZTogdGhpcy51cGxvYWRlZEZpbGUudHlwZVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnVXBsb2FkZWQgU3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVwbG9hZChKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuVmVyaWZ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0T2JqKCdPQ1JPYmonLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd09jckZvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5WZXJpZnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoU09NRVRISU5HX1dFTlRfV1JPTkcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpb25DaGVja0Vycm9yQWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25kaW9uQ2hlY2tFcnJvckFsZXJ0KGVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDApIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKFNPTUVUSElOR19XRU5UX1dST05HKTtcclxuICB9XHJcbiAgZ2V0VXBsb2FkKG9iaikge1xyXG4gICAgdGhpcy5vY3JWYWxpZGF0aW9uU2VydmljZS5nZXRVcGxvYWQob2JqKS5zdWJzY3JpYmUoXHJcbiAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc0RhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgIGNvbnN0IGltYWdlQ2F0ZWdvcnkgPSByZXNEYXRhPy5pbWFnZUNhdGVnb3J5O1xyXG4gICAgICAgICAgY29uc3Qgb2NyRG9jdW1lbnREZXRhaWxzID0gaW1hZ2VDYXRlZ29yeT8uaWRfanNvblswXTtcclxuICAgICAgICAgIHRoaXMudmVyaWZpRGF0YShvY3JEb2N1bWVudERldGFpbHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihTT01FVEhJTkdfV0VOVF9XUk9ORyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZlcmlmaURhdGEob2NyRG9jdW1lbnREZXRhaWxzKSB7XHJcbiAgICBjb25zdCBqc29uRm9ybSA9IHRoaXMuanNvbkZvcm0/LmNvbXBvbmVudHNbMF07XHJcbiAgICBpZiAodGhpcy5mb3JtUmVzcG9uc2UpIHtcclxuICAgICAgY29uc3QgZnJvbUFycmF5ID0gT2JqZWN0LmtleXModGhpcy5mb3JtUmVzcG9uc2UpO1xyXG4gICAgICBmcm9tQXJyYXk/LmZvckVhY2gocmVzcG9zZSA9PiB7XHJcbiAgICAgICAgaWYgKG9jckRvY3VtZW50RGV0YWlscykge1xyXG4gICAgICAgICAgY29uc3QgZG9jdW1lbnRWYWx1ZSA9IE9iamVjdC5rZXlzKG9jckRvY3VtZW50RGV0YWlscyk7XHJcbiAgICAgICAgICBkb2N1bWVudFZhbHVlPy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrVmVyaWZ5KGVsZW1lbnQsIG9jckRvY3VtZW50RGV0YWlscywgcmVzcG9zZSwganNvbkZvcm0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbHVtbnNKc29uLmNvbHVtbnNbMF0uY29tcG9uZW50c1swXS5jb21wb25lbnRzWzBdLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnRBcnJheT8uam9pbignJyk7XHJcbiAgICB0aGlzLmpzb25Gb3JtLmNvbXBvbmVudHNbMF0uY29tcG9uZW50cy5zcGxpY2UoMCwgMCwgY29sdW1uc0pzb24pO1xyXG4gICAgdGhpcy50cmlnZ2VyUmVmcmVzaC5lbWl0KHtcclxuICAgICAgcHJvcGVydHk6ICdmb3JtJyxcclxuICAgICAgdmFsdWU6IHRoaXMuanNvbkZvcm1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25kaXRpb25DaGVja1ZlcmlmeShlbGVtZW50LCBvY3JEb2N1bWVudERldGFpbHMsIHJlc3Bvc2UsIGpzb25Gb3JtKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGVsZW1lbnQgJiZcclxuICAgICAgcmVzcG9zZSAmJlxyXG4gICAgICBlbGVtZW50Py50b0xvd2VyQ2FzZSgpID09PSByZXNwb3NlPy50b0xvd2VyQ2FzZSgpICYmXHJcbiAgICAgIG9jckRvY3VtZW50RGV0YWlsc1tlbGVtZW50XT8udG9Mb3dlckNhc2UoKSAhPT0gdGhpcy5mb3JtUmVzcG9uc2VbcmVzcG9zZV0/LnRvTG93ZXJDYXNlKClcclxuICAgICkge1xyXG4gICAgICB0aGlzLmpzb25Gb3JtLmNvbXBvbmVudHNbMF0uY29tcG9uZW50cyA9IGpzb25Gb3JtPy5jb21wb25lbnRzLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgJiYgcmVzPy5rZXkgPT09IGVsZW1lbnQ/LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgIHRoaXMuY29udGVudEFycmF5LnB1c2goYDxwIHN0eWxlPVwiY29sb3I6cmVkO1wiPiR7cmVzLmxhYmVsfSBOb3QgTWF0Y2g8L3A+XFxuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRFbWl0dGVkRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLnNob3dPY3JGb3JtID0gZmFsc2U7XHJcbiAgICB0aGlzLmJ0blZlcmlmeSA9IHRydWU7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IC4uLmRhdGEsIC4uLnRoaXMuc3VibWl0dGVkRGF0YSB9O1xyXG4gIH1cclxufSIsIjxhcHAtYWxlcnQ+PC9hcHAtYWxlcnQ+XHJcbjxkaXYgW25nQ2xhc3NdPVwic2hvd1RpdGxlID8gJ2NhcmQnIDogJ3lvdXRoc2VhcmNoLWZvcm1pbydcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG15LTNcIiAqbmdJZj1cImlzVGl0bGVcIj5cclxuICAgICAgPCEtLSA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsXCIgKGNsaWNrKT1cInJlZGlyZWN0KClcIiAqbmdJZj1cInNob3diYWNrYnRuXCI+XHJcbiAgICAgICAgQmFjayB7eyBwYXJlbnRHcmlkUGFnZSAmJiAndG8gJyArIHBhcmVudEdyaWRQYWdlIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aDYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIG1iLTIgbXQtMyBmcm9tVGl0bGVcIiAqbmdJZj1cInNob3dUaXRsZVwiPnt7IGlzVGl0bGUgfX08L2g2PiAtLT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrLXRvLW1haW5cIj5cclxuICAgICAgICA8ZGl2IChjbGljayk9XCJyZWRpcmVjdCgpXCIgKm5nSWY9XCJzaG93YmFja2J0blwiPnt7IHBhcmVudEdyaWRQYWdlfX08L2Rpdj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dUaXRsZVwiPiB7eyBpc1RpdGxlIH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cIiFzaG93T2NyRm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkeW5hbWljLXBhZ2UgbXQtMFwiIFtoaWRkZW5dPVwiIWlzZm9ybUlPXCI+XHJcbiAgICAgIDxmb3JtaW8gI2Zvcm1JTyBbZm9ybV09XCJqc29uRm9ybVwiIFtyZWFkT25seV09XCJpc1JlYWRPbmx5XCIgW3N1Ym1pc3Npb25dPVwic3VibWl0dGVkRGF0YVwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNoYW5nZSk9XCJjdXN0b21FdmVudHMoJGV2ZW50KVwiIChjbGljayk9XCJjdXN0b21DbGlja0V2ZW50cyhzdWJtaXR0ZWREYXRhLCAkZXZlbnQpXCJcclxuICAgICAgICAoY3VzdG9tRXZlbnQpPVwiY3VzdG9tRXZlbnRzQnV0dG9uKCRldmVudClcIiBbcmVmcmVzaF09XCJ0cmlnZ2VyUmVmcmVzaFwiIFtzdWJtaXREb25lXT1cInN1Ym1pc3Npb25Eb25lXCIgW3N1Y2Nlc3NdPVwic3VibWl0U3VjY2Vzc1wiXHJcbiAgICAgICAgW2Vycm9yXT1cInN1Ym1pdEZhaWxlZFwiIChjdXN0b21FdmVudCk9XCJjdXN0b21FdmVudCgkZXZlbnQpXCI+PC9mb3JtaW8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cInNob3dPY3JGb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZHluYW1pYy1wYWdlIG10LTBcIj5cclxuICAgICAgICA8YXBwLW9jci12YWxpZGF0aW9uIChvY3JSZXNwb25zZSk9XCJnZXRFbWl0dGVkRGF0YSgkZXZlbnQpXCIgW2N1cnJlbnR0ZW1wbGF0ZVJlc3VsdF09XCJ0ZW1wbGF0ZVJlc3VsdFwiXHJcbiAgICAgICAgICBbZm9ybVJlc3BvbnNlRGF0YV09XCJmb3JtUmVzcG9uc2VcIiBbc3VibWl0aW9uRGF0YV09XCJzdWJtaXR0ZWREYXRhXCI+PC9hcHAtb2NyLXZhbGlkYXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48YnV0dG9uIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIGlkPVwiZXh0ZXJuYWxfc2Nhbm5lclwiICNleHRlcm5hbF9zY2FubmVyIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwiYnRuLWljb24tYmdcIlxyXG4gIChuZ3hmLXNlbGVjdCk9XCJ1cGxvYWRGaWxlKCRldmVudClcIj5cclxuICBTY2FuXHJcbjwvYnV0dG9uPlxyXG5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdmFsaWRhdGlvblBvcHVwPlxyXG4gIDxkaXYgY2xhc3M9XCJwLTMgdmFsaWRhdGlvbi1wb3B1cFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4IG1iLTRcIj48ZGl2IFtpbm5lckhUTUxdPVwiY29uZmlybWF0aW9ubWVzc2FnZVwiPjwvZGl2PjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHByLTMgbW9kYWwtYnV0dG9uc1wiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInB1bGwtcmlnaHQgbWItMiBidG5cIiBbbmdDbGFzc109XCJidXR0b24xU3R5bGVcIiAqbmdJZj1cInNob3dCdXR0b24xXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAoY2xpY2spPVwib25DbGlja0NvbmZpcm1hdGlvbihidXR0b24xQWN0aW9uLCBidXR0b24xS2V5KVwiPlxyXG4gICAgICB7e2J1dHRvbjFUZXh0fX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInB1bGwtcmlnaHQgbWItMiBtci0yIGJ0blwiIFtuZ0NsYXNzXT1cImJ1dHRvbjJTdHlsZVwiICpuZ0lmPVwic2hvd0J1dHRvbjJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrQ29uZmlybWF0aW9uKGJ1dHRvbjJBY3Rpb24sIGJ1dHRvbjJLZXkpXCI+e3tidXR0b24yVGV4dH19PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==