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
    //cleanupcode
    // nextSubmit(event) {
    //   console.log(event);
    //   this.submitFailed.next('Failed to add response');
    // }
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
    //code cleanup
    // goBack(): void {
    //   this.router.navigate(['../../list'], { relativeTo: this.route });
    // }
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
    // code cleanup
    // routeToGrid(val) {
    //   if (val === 'Make Payment') {
    //     this.router.navigate(['./pages/mergepage/1f4e272a-4c03-4739-b4a5-53748e06e247']);
    //   } else if (val === 'Payment Details Information') {
    //     this.location.back();
    //   }
    // }
    customEvent(event) {
        this._formIO.customEvent(event, this.formIO);
    }
    // code cleanup
    // ocrUpload(files) {
    //   this.uploadedFile = files.target.files[0];
    //   const pageID = this.formId ? this.formId : this.pageId;
    //   this.imageData = {
    //     contentType: this.uploadedFile.type,
    //     fileName: `ocr/${pageID}/${this.uploadedFile.name}`
    //   };
    //   this.attachmentService.uploadKey(this.imageData).subscribe((res: any) => {
    //     if (res.data) {
    //       const uploadAttachment: any = document.getElementById('file');
    //       const uploadAttachmentDetails = uploadAttachment.files[0];
    //       this.httpService.putupload2(res.data, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe(
    //         (resp: any) => {
    //           if (resp && resp.status == 200) {
    //             const object = {
    //               path: `ocr/${pageID}/${this.uploadedFile.name}`,
    //               attachmenttype: this.uploadedFile.type
    //             };
    //             this.alertService.success('Uploaded Successfully!');
    //             if (this.action === 'edit') {
    //               this.getUpload(JSON.stringify(object));
    //               this.btnVerify = true;
    //             } else {
    //               this.localstorage.setObj('OCRObj', JSON.stringify(object));
    //               this.showOcrForm = true;
    //               this.btnVerify = false;
    //             }
    //           } else {
    //             this.alertService.error(SOMETHING_WENT_WRONG);
    //           }
    //         },
    //         error => {
    //           this.condionCheckErrorAlert(error);
    //         }
    //       );
    //     }
    //   });
    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtcGFnZWNsZWFudXAvZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtcGFnZWNsZWFudXAvZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUVOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBZSxNQUFNLDBCQUEwQixDQUFDO0FBR25GLE9BQU8sRUFBYSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztB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SztnQkFJeUIsZ0JBQWdCO3NCQUE5QyxTQUFTO3VCQUFDLGtCQUFrQjtnQkFDQyxlQUFlO3NCQUE1QyxTQUFTO3VCQUFDLGlCQUFpQjtnQkFFbkIsVUFBVTtzQkFBbEIsS0FBSztnQkFHSSxXQUFXO3NCQUFwQixNQUFNO2dCQTBCUCxNQUFNO3NCQURMLFNBQVM7dUJBQUMsUUFBUTtnQkFnQ1QsV0FBVztzQkFBbkIsS0FBSztnQkFJRyxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2csTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1pb0NvbXBvbmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IEZpbGVFcnJvciwgTmd4ZlVwbG9hZGVyU2VydmljZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBjb2x1bW5zSnNvbiB9IGZyb20gJy4uLy4uL0Bjb3JlL0pTT04uY29uc3QnO1xyXG5pbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3NwZWVjaC1yZWNvZ25pdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT0NSU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3BsYXRmb3JtLWRhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY3NlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWNzZWFyY2guc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2F0dGFjaG1lbnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPY3JWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1pb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2Zvcm1pby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHB1Ymxpc2hFdmVudCB9IGZyb20gJy4uLy4uL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFN0YXRlIH0gZnJvbSAnLi4vLi4vQHNoYXJlZC9tYXN0ZXItdmlldy1zdGF0ZS9tYXN0ZXItdmlldy5zdGF0ZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9jb3JlLnN0YXRlJztcclxuaW1wb3J0IHsgc2VsZWN0Q29tcG9uZW50Q29uZmlnQnlJZCwgc2VsZWN0RXZlbnQgfSBmcm9tICcuLi8uLi9Ac2hhcmVkL21hc3Rlci12aWV3LXN0YXRlL21hc3Rlci12aWV3LnNlbGVjdG9ycyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuY29uc3QgU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcgPSAnU3RydWN0dXJlZCBEZWNpc2lvbiBNYWtpbmcnO1xyXG5jb25zdCBTT01FVEhJTkdfV0VOVF9XUk9ORyA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyEnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1keW5hbWljLXBhZ2VjbGVhbnVwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1wYWdlY2xlYW51cC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1NwZWVjaFJlY29nbml0aW9uU2VydmljZSwgT0NSU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNQYWdlQ2xlYW51cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIHN1Ym1pdFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHByaXZhdGUgc3VibWl0RmFpbGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBmb3JtSWQ6IGFueTtcclxuICB0YWJJZDogYW55O1xyXG4gIGpzb25Gb3JtOiBhbnk7XHJcbiAgZnJvbVRpdGxlOiBhbnk7XHJcbiAgQElucHV0KCkgZWRpdElkOiBhbnk7XHJcbiAgaWQ6IGFueTtcclxuICBzdWJtaXR0ZWREYXRhOiBhbnk7XHJcbiAgYWZ0ZXJFbnRpdHlOYW1lID0gJyc7XHJcbiAgYWZ0ZXJSdWxlQXBwTmFtZSA9ICcnO1xyXG4gIGJlZm9yZUVudGl0eU5hbWUgPSAnJztcclxuICBiZWZvcmVSdWxlQXBwTmFtZSA9ICcnO1xyXG4gIGJlZm9yZXJ1bGVtZXRob2QgPSAnJztcclxuICBhZnRlcnJ1bGVtZXRob2QgPSAnJztcclxuICB1c2VyOiBhbnk7XHJcbiAgbXVsdGlTZWxlY3REcm9wRG93bnM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBASW5wdXQoKSBwYWdlSWQ6IGFueTtcclxuICBASW5wdXQoKSBzb3VyY2VpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGV4dGVybmFsUGFyYW1ldGVyczogc3RyaW5nO1xyXG4gIHBhZ2VEYXRhU3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgaXNEaWFsb2dQb3B1cCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGVtcGxhdGVSZWY8YW55Pj47XHJcbiAgQFZpZXdDaGlsZCgnZXh0ZXJuYWxfc2Nhbm5lcicpIGV4dGVybmFsX3NjYW5uZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndmFsaWRhdGlvblBvcHVwJykgdmFsaWRhdGlvblBvcHVwOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHByaXZhdGUgdmFsaWRhdGlvblBvcHVwUmVmOiBNYXREaWFsb2dSZWY8VGVtcGxhdGVSZWY8YW55Pj47XHJcbiAgQElucHV0KCkgaXNSZWFkT25seTogYm9vbGVhbjtcclxuICBzaG93QmFjazogYm9vbGVhbjtcclxuICBpc1RpdGxlOiBhbnk7XHJcbiAgQE91dHB1dCgpIGFmdGVyU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgcGVyc29uSWQ6IGFueTtcclxuICB0cmlnZ2VyUmVmcmVzaDogYW55O1xyXG4gIGZyb21Xb3JrRmxvdzogYm9vbGVhbjtcclxuICBjbGlja2VkU2VydmljZUNhc2U6IGJvb2xlYW47XHJcbiAgc2VydmljZUlkOiBhbnk7XHJcbiAgc3BlZWNoUmVjb2duaW5pdGlvbk9uOiBib29sZWFuO1xyXG4gIHNwZWVjaERhdGE6IHN0cmluZztcclxuICBub3RpZmljYXRpb246IHN0cmluZztcclxuICBvcmdhbml6YXRpb25JZDogYW55O1xyXG4gIEZvcm1JbnB1dHMgPSBbXTtcclxuICBzY2FubmVyQ29uZmlnOiBhbnkgPSB7fTtcclxuICB0YWJEYXRhOiBhbnk7XHJcbiAgbmFycmF0aXZlOiBhbnk7XHJcbiAgcHVycG9zZTogYW55O1xyXG4gIHBhZ2V0eXBlOiBzdHJpbmc7XHJcbiAgbG9jYWxzdG9yYWdlOiBMb2NhbFNlcnZpY2U7XHJcbiAgc2Vzc2lvblN0b3JhZ2U6IExvY2FsU2VydmljZTtcclxuICBsb2NhdGlvbjogTG9jYXRpb247XHJcbiAgZGF0YVN0b3JlOiBEYXRhU3RvcmVTZXJ2aWNlO1xyXG4gIHNwZWVjaFJlY29nbml0aW9uU2VydmljZTogU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlO1xyXG4gIHVwbG9hZFNlcnZpY2U6IE5neGZVcGxvYWRlclNlcnZpY2U7XHJcbiAgb2NyOiBPQ1JTZXJ2aWNlO1xyXG4gIGFwcG9pbnRtZW50TGlzdDogUHJvbWlzZTxib29sZWFuPiB8IHVuZGVmaW5lZDtcclxuICBpc2Zvcm1JTyA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ2Zvcm1JTycpXHJcbiAgZm9ybUlPOiBGb3JtaW9Db21wb25lbnQ7XHJcbiAgY3VycmVudFlvdXRoSWQ6IGFueTtcclxuICBkeW5hbWljVGFiUGFnZVNlcnZpY2U6IER5bmFtaWNUYWJQYWdlU2VydmljZTtcclxuICBkeW5hbWljU2VhcmNoU2VydmljZTogRHluYW1pY3NlYXJjaFNlcnZpY2U7XHJcbiAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xyXG4gIGF0dGFjaG1lbnRJbmZvOiBhbnkgPSB7fTtcclxuICB1cGxvYWRlZEZpbGVzOiBhbnkgPSBbXTtcclxuICBwYXJlbnRHcmlkUGFnZTogc3RyaW5nO1xyXG4gIHBhcmVudEdyaWRQYWdlSWQ6IGFueTtcclxuICBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZTtcclxuICB1cGxvYWRlZEZpbGU6IGFueTtcclxuICBpc09jckZvcm06IGJvb2xlYW47XHJcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgaW1nVXJsOiBzdHJpbmc7XHJcbiAgc2hvd09jckZvcm06IGJvb2xlYW47XHJcbiAgYXR0YWNobWVudFNlcnZpY2UhOiBBdHRhY2htZW50c1NlcnZpY2U7XHJcbiAgaW1hZ2VEYXRhOiB7IGNvbnRlbnRUeXBlOiBhbnk7IGZpbGVOYW1lOiBzdHJpbmcgfTtcclxuICB0YWJsZXNjaGVtYWNvbmZpZzogYW55O1xyXG4gIGZvcm1SZXNwb25zZTogYW55O1xyXG4gIGFjdGlvbjogc3RyaW5nO1xyXG4gIGNvbnRlbnRBcnJheTogYW55W10gPSBbXTtcclxuICB0ZW1wbGF0ZVJlc3VsdDogYW55O1xyXG4gIG9jclZhbGlkYXRpb25TZXJ2aWNlOiBPY3JWYWxpZGF0aW9uU2VydmljZTtcclxuICBkYXRhU3ViOiBhbnk7XHJcbiAgYnRuVmVyaWZ5ID0gZmFsc2U7XHJcbiAgZWRpdFZhbHVlOiBhbnk7XHJcbiAgbG9nZ2VkVXNlcjogYW55O1xyXG4gIHByb3ZpZGVyRGF0YTogYW55O1xyXG4gIGNoZWNrOiBhbnk7XHJcbiAgc2hvd2JhY2tidG4gPSBmYWxzZTtcclxuICBzaG93VGl0bGUgOiBib29sZWFuO1xyXG4gICBASW5wdXQoKSBjb21wb25lbnRJZDogYW55O1xyXG4gICBzZWxlY3RlZENvbXBvbmVudDogQ29tcG9uZW50U3RhdGU7XHJcbiAgIGNvbXBvbmVudENvbmZpZyQ6IE9ic2VydmFibGU8Q29tcG9uZW50U3RhdGU+O1xyXG4gIGV2ZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgQE91dHB1dCgpIHN1Ym1pc3Npb25Eb25lID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPigpO1xyXG4gIGNvbmZpcm1hdGlvbm1lc3NhZ2U6IHN0cmluZztcclxuICBzaG93QnV0dG9uMTogYW55O1xyXG4gIHNob3dCdXR0b24yOiBhbnk7XHJcbiAgYnV0dG9uMVRleHQ6IGFueTtcclxuICBidXR0b24yVGV4dDogYW55O1xyXG4gIGJ1dHRvbjFLZXk6IGFueTtcclxuICBidXR0b24yS2V5OmFueTtcclxuICBidXR0b24xQWN0aW9uOiBhbnk7XHJcbiAgYnV0dG9uMkFjdGlvbjogYW55O1xyXG4gIG1vZGFsU2VydmljZTogTmdiTW9kYWxcclxuICBidXR0b24xU3R5bGU6IGFueTtcclxuICBidXR0b24yU3R5bGU6IGFueTtcclxuICBkaWFsb2c6IE1hdERpYWxvZztcclxuICBodHRwU2VydmljZTphbnk7XHJcbiAgYXBwU2VydmljZTphbnk7XHJcbiAgZmFsbGJhY2tJZEZyb21Sb3V0ZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIF9mb3JtSU86IEZvcm1pb1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgZGF0YSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogUGxhdGZvcm1EYXRhU3RvcmVTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddO1xyXG4gICAgICAgIHRoaXMuYXBwU2VydmljZSA9IHJlc1snQVBQU0VSVklDRSddO1xyXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlID0gcmVzWydBTEVSVFNFUlZJQ0UnXTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QXV0aFNlcnZpY2U+KEF1dGhTZXJ2aWNlKTtcclxuICAgIC8vIHRoaXMuYWxlcnRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEFsZXJ0U2VydmljZT4oQWxlcnRTZXJ2aWNlKTtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlID0gaW5qZWN0b3IuZ2V0PExvY2FsU2VydmljZT4oTG9jYWxTZXJ2aWNlKTtcclxuICAgIHRoaXMubG9jYXRpb24gPSBpbmplY3Rvci5nZXQ8TG9jYXRpb24+KExvY2F0aW9uKTtcclxuICAgIHRoaXMuZGF0YVN0b3JlID0gaW5qZWN0b3IuZ2V0PERhdGFTdG9yZVNlcnZpY2U+KERhdGFTdG9yZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8U3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlPihTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UpO1xyXG4gICAgdGhpcy51cGxvYWRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PE5neGZVcGxvYWRlclNlcnZpY2U+KE5neGZVcGxvYWRlclNlcnZpY2UpO1xyXG4gICAgdGhpcy5vY3IgPSBpbmplY3Rvci5nZXQ8T0NSU2VydmljZT4oT0NSU2VydmljZSk7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZSA9IGluamVjdG9yLmdldDxEeW5hbWljVGFiUGFnZVNlcnZpY2U+KER5bmFtaWNUYWJQYWdlU2VydmljZSk7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNzZWFyY2hTZXJ2aWNlPihEeW5hbWljc2VhcmNoU2VydmljZSk7XHJcbiAgICB0aGlzLmF0dGFjaG1lbnRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEF0dGFjaG1lbnRzU2VydmljZT4oQXR0YWNobWVudHNTZXJ2aWNlKTtcclxuICAgIHRoaXMub2NyVmFsaWRhdGlvblNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8T2NyVmFsaWRhdGlvblNlcnZpY2U+KE9jclZhbGlkYXRpb25TZXJ2aWNlKTtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PE5nYk1vZGFsPihOZ2JNb2RhbCk7XHJcbiAgICB0aGlzLmRpYWxvZyA9IGluamVjdG9yLmdldDxNYXREaWFsb2c+KE1hdERpYWxvZyk7XHJcbiAgICB0aGlzLnVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIGlmICh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYXJlbnRHcmlkUGFnZScpKSB7XHJcbiAgICAgIHRoaXMuc2hvd2JhY2tidG4gPSB0cnVlO1xyXG4gICAgICBjb25zdCBwYXJlbnRHcmlkUGFnZU9iaiA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgncGFyZW50R3JpZFBhZ2UnKSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRwYWdlID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgncGFnZW5hbWUnKTtcclxuICAgICAgdGhpcy5wYXJlbnRHcmlkUGFnZSA9IGN1cnJlbnRwYWdlID8gY3VycmVudHBhZ2UgOiAnJztcclxuICAgICAgdGhpcy5wYXJlbnRHcmlkUGFnZUlkID0gcGFyZW50R3JpZFBhZ2VPYmogPyBwYXJlbnRHcmlkUGFnZU9iai5pZCA6ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcmdhbml6YXRpb25JZCA9IHRoaXMudXNlcj8udXNlcldvcmtJbmZvPy5vcmdhbml6YXRpb24/LmlkO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5vbkNoYW5nZVBhZ2VVc2VyRGF0YSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaigndXNlcicpO1xyXG4gICAgdGhpcy5jb25kaXRpb25DaGVja0RhdGEoZGF0YSk7XHJcbiAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5jbGlja2FibGVEYXRhO1xyXG4gICAgY29uc3QgbmF2aWdhdGVEYXRhID0gdGhpcy5yb3V0ZXI/LmdldEN1cnJlbnROYXZpZ2F0aW9uKCk/LmV4dHJhcz8uc3RhdGU7XHJcbiAgICB0aGlzLnNob3dCYWNrID0gbmF2aWdhdGVEYXRhPy5leHRlcm5hbExpbmsgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBpZiAobmF2aWdhdGVEYXRhPy5pc1JlYWRPbmx5KSB7XHJcbiAgICAgIHRoaXMuaXNSZWFkT25seSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAobmF2aWdhdGVEYXRhPy50aXRsZSkge1xyXG4gICAgICB0aGlzLmlzVGl0bGUgPSBuYXZpZ2F0ZURhdGEudGl0bGU7XHJcbiAgICB9XHJcbiAgICBpZiAobmF2aWdhdGVEYXRhPy5wZXJzb25JZCkge1xyXG4gICAgICB0aGlzLnBlcnNvbklkID0gbmF2aWdhdGVEYXRhLnBlcnNvbklkO1xyXG4gICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGVyc29uSWQgPSBuYXZpZ2F0ZURhdGEucGVyc29uSWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zcGVlY2hEYXRhID0gJyc7XHJcbiAgICBpZiAoaGlzdG9yeS5zdGF0ZS50aXRsZSkge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0aXRsZScsIGhpc3Rvcnk/LnN0YXRlPy50aXRsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLmlzVGl0bGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0aXRsZScpO1xyXG4gICAgICB0aGlzLmlzVGl0bGUgPSAnIC8gJyArICdBZGQgJyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dldC10aXRsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRpdGxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2V0LXRpdGxlJyk7XHJcbiAgICBpZiAoZ2V0VGl0bGUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5pc1RpdGxlID0gJ0FkZCAnICsgZ2V0VGl0bGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzVGl0bGUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRZb3V0aElkID0gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgdGhpcy5hdHRhY2htZW50SW5mbyA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U2hhcmVkTWVzc2FnZSgpO1xyXG4gICAgdGhpcy5Gb3JtSW5wdXRzID0gW107XHJcbiAgICB0aGlzLnRyaWdnZXJSZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgdGhpcy5pc1JlYWRPbmx5ID0gaGlzdG9yeT8uc3RhdGU/LmlzUmVhZE9ubHkgPyB0cnVlIDogdGhpcy5pc1JlYWRPbmx5O1xyXG4gICAgdGhpcy5wZXJzb25JZCA9IGhpc3Rvcnk/LnN0YXRlPy5wZXJzb25JZDtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQZXJzb25JZCA9IGhpc3Rvcnk/LnN0YXRlPy5wZXJzb25JZDtcclxuXHJcbiAgICB0aGlzLnNob3dCYWNrID0gKGhpc3Rvcnk/LnN0YXRlPy5leHRlcm5hbExpbmsgJiYgIWhpc3Rvcnk/LnN0YXRlPy5pc0hpZGVCYWNrKSB8fCB0aGlzLnNob3dCYWNrO1xyXG4gICAgdGhpcy5wYWdlSWQgPSBoaXN0b3J5Py5zdGF0ZT8ucGFnZUlkID8gaGlzdG9yeT8uc3RhdGU/LnBhZ2VJZCA6IHRoaXMucGFnZUlkO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdncmlkQWN0aW9uJykgfHwgdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnZ3JpZEFjdGlvbicsIHRoaXMuYWN0aW9uKVxyXG4gICAgdGhpcy5idG5WZXJpZnkgPSB0aGlzLmFjdGlvbiA9PT0gJ2VkaXQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygndGFiJykpIHtcclxuICAgICAgdGhpcy5zaG93YmFja2J0biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dUaXRsZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93VGl0bGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25kaXRpb25DaGVja0RhdGEoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBkYXRhLmVkaXRJZCA/IGRhdGEuZWRpdElkIDogbnVsbDtcclxuICAgICAgdGhpcy5pc0RpYWxvZ1BvcHVwID0gZGF0YS5pc1BvcHVwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLnBhZ2VJZCA9IGRhdGEucGFnZUlkID8gZGF0YS5wYWdlSWQgOiB0aGlzLnBhZ2VJZDtcclxuICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gZGF0YS5pc1JlYWRPbmx5ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VkVXNlciA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaigndXNlcicpO1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRTaGFyZWRNZXNzYWdlKGRhdGEpO1xyXG4gICAgICB0aGlzLnJvdXRlclBhZ2VEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5zb3VyY2VJZFNlcnZpY2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YSAhPSAnJykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZUlkID0gZGF0YTtcclxuICAgICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnNvdXJjZUlkU2VydmljZS5uZXh0KCcnKTtcclxuICAgICAgICB0aGlzLmNsaWNrZWRTZXJ2aWNlQ2FzZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYWxsR2V0QVBJKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UucmVzdWx0LnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0ICE9ICcnKSB7XHJcbiAgICAgICAgdGhpcy5hZnRlclN1Ym1pdC5lbWl0KHJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5yZXN1bHQubmV4dChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mb3JtSU8pIHtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvUmVhZHkudGhlbihmb3JtSW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGZvcm1JbnN0YW5jZS5yZWFkeS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVQYXNzd29yZCcpO1xyXG4gICAgICAgICAgaWYgKHRvZ2dsZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImRhdGFbJHt0b2dnbGVCdXR0b25bJ2FyaWFMYWJlbCddfV1cIl1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWV5ZS1zbGFzaCcpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWV5ZScpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWV5ZScpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWV5ZS1zbGFzaCcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RFdmVudCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCAmJiBldmVudC5ldmVudE5hbWUgPT09ICdzdWJtaXQnICYmIGV2ZW50LnBheWxvYWQuc2V0dGluZ3Mub25TdWJtaXRSZWZyZXNoXHJcbiAgICAgICAgJiYgZXZlbnQucGF5bG9hZC5zZXR0aW5ncy5vblN1Ym1pdFJlZnJlc2hXaWRnZXRzKSB7XHJcbiAgICAgICAgICBldmVudC5wYXlsb2FkLnNldHRpbmdzLm9uU3VibWl0UmVmcmVzaFdpZGdldHMuZm9yRWFjaCh4ID0+e1xyXG4gICAgICAgICAgaWYoWydBVFBCRE0nLCAnRkZQJ10uaW5jbHVkZXMoeC5wYWdlVHlwZSkpICB0aGlzLmZvcm1JZCA9IHguaWQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVyQ29uZmlnKHRydWUpOyBcclxuICAgICAgICAgIH0pIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcm91dGVyUGFnZURhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5mb3JtSWQgPSBkYXRhLnBhZ2VJZDtcclxuICAgIGlmICghdGhpcy5mb3JtSWQpIHtcclxuICAgICAgdGhpcy5mb3JtSWQgPSB0aGlzLnBhZ2VJZDtcclxuICAgIH1cclxuICAgIHRoaXMuY29tcG9uZW50Q29uZmlnJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q29tcG9uZW50Q29uZmlnQnlJZCh0aGlzLmNvbXBvbmVudElkKSkpO1xyXG4gICAgdGhpcy5jb21wb25lbnRDb25maWckLnN1YnNjcmliZShkYXRhID0+IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSBkYXRhKTtcclxuICAgIHRoaXMuZXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEV2ZW50KSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgdGhpcy5zaG93YmFja2J0biA9IGZhbHNlO1xyXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZXZlbnROYW1lID09PSAnZWRpdCcgJiYgZXZlbnQucGF5bG9hZC5tYXBwaW5nRm9ybUlkID09PSB0aGlzLnBhZ2VJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIHRoaXMuZWRpdElkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZihldmVudCAmJiBldmVudC5ldmVudE5hbWUgPT09ICd2aWV3JyAmJiBldmVudC5wYXlsb2FkLm1hcHBpbmdGb3JtSWQgPT09IHRoaXMucGFnZUlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVkaXRJZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0Um91dGVyQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYoZXZlbnQgJiYgZXZlbnQuZXZlbnROYW1lID09PSAnYWRkJyAmJiBldmVudC5wYXlsb2FkLm1hcHBpbmdGb3JtSWQgPT09IHRoaXMucGFnZUlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2V0Um91dGVyQ29uZmlnKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRTb3VyY2UoKTtcclxuICAgIHRoaXMuZ2V0UGFnZVRhYnMoKTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VUYWJzKCkge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQodGhpcy5mb3JtSWQpLnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YVswXT8uYWN0aXZlVmVyc2lvbj8ucGFnZW5hbWUpIHtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dldC10aXRsZScsIHJlc3VsdC5kYXRhWzBdPy5hY3RpdmVWZXJzaW9uPy5wYWdlbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFiSWQgPSByZXN1bHQuZGF0YVswXS5hY3RpdmVWZXJzaW9uLmlkO1xyXG4gICAgICAgIHRoaXMuZ2V0Um91dGVyQ29uZmlnKCk7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ0FkZCAnICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2V0LXRpdGxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um91dGVyQ29uZmlnKGlzQ29tcG9zaXRlUGFnZVJlZnJlc2g/OiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtSWQpIHtcclxuICAgICAgLy8gZ2V0IGNvbmZpZ3VyZSBVUkwgZ2V0LHBvc3QscHV0IFVSTFxyXG4gICAgICB0aGlzLmdldENvbmZpZ3VyYXRpb24oKS50aGVuKGNvbmZpZyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuICAgICAgICBpZihpc0NvbXBvc2l0ZVBhZ2VSZWZyZXNoKXtcclxuICAgICAgICAgIGlmKGNvbmZpZy5kYXRhLnBhZ2VEZXRhaWxzLmlkID09IHRoaXMuZm9ybUlkKVxyXG4gICAgICAgICAgdGhpcy5nZXRUZW1wbGF0ZShjb25maWcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgdGhpcy5nZXRUZW1wbGF0ZShjb25maWcpOyAgIFxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBpZiAoZXJyLmVycm9yKSB7XHJcbiAgICAgICAgICBpZiAoZXJyPy5lcnJvcj8uc3RhdHVzQ29kZSA9PT0gIDQwMykge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcignWW91IGRvbuKAmXQgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwYWdlLiBQbGVhc2UgY29udGFjdCB0aGUgYWRtaW5pc3RyYXRvci4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5wYWdlSWQgJiYgIXRoaXMuZm9ybUlkKSB7XHJcbiAgICAgIHRoaXMucGFnZURhdGFTdWJzY3JpcHRpb24gPSB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmRhdGEuc3Vic2NyaWJlKHBhZ2UgPT4ge1xyXG4gICAgICAgIGlmIChwYWdlKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1JZCA9IHBhZ2U7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAvLyBnZXQgY29uZmlndXJlIFVSTCBnZXQscG9zdCxwdXQgVVJMXHJcbiAgICAgICAgICB0aGlzLmdldENvbmZpZ3VyYXRpb24oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGdldCBQYWdlIGNvbmZpZ3VyYXRpb24gVGVtcGxhdGUgRGF0YVxyXG4gICAgICAgICAgICB0aGlzLmpzb25Gb3JtID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5nZXRUZW1wbGF0ZShyZXMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNvdXJjZSgpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5zb3VyY2VpZDtcclxuICAgIGlmICh0aGlzLnJvdXRlLnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKSkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudCAmJlxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zb3VyY2VpZCA9IHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3VyY2VpZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zb3VyY2VpZCkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5zbmFwc2hvdD8ucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpXHJcbiAgICAgICAgPyB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICAgICA6IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wdXJwb3NlID1cclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1zLnB1cnBvc2VcclxuICAgICAgICA/IHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtcy5wdXJwb3NlXHJcbiAgICAgICAgOiB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudC5zbmFwc2hvdC5wYXJhbXMucHVycG9zZTtcclxuICB9XHJcblxyXG4gIC8vIGdldCBQYWdlIGNvbmZpZ3VyYXRpb24gVGVtcGxhdGUgRGF0YVxyXG4gIHByaXZhdGUgZ2V0VGVtcGxhdGUocmVzdWx0OiBhbnkpIHtcclxuICAgIHRoaXMudGVtcGxhdGVSZXN1bHQgPSByZXN1bHQ7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi50b0xvd2VyQ2FzZSgpID09ICdlZGl0Jykge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdFZGl0ICcgKyByZXN1bHQ/LmRhdGE/LnBhZ2VuYW1lO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMuYWN0aW9uLnRvTG93ZXJDYXNlKCkgPT0gJ3ZpZXcnKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ1ZpZXcgJyArIHJlc3VsdD8uZGF0YT8ucGFnZW5hbWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb24udG9Mb3dlckNhc2UoKSA9PSAnYWRkJykge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdBZGQgJyArIHJlc3VsdD8uZGF0YT8ucGFnZW5hbWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb24udG9Mb3dlckNhc2UoKSA9PSAnbGluaycpIHtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSAnVmlldyAnICsgcmVzdWx0Py5kYXRhPy5wYWdlbmFtZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdGT1JNX1RJVExFJykgfHwgJyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnRk9STV9USVRMRScsIHRoaXMuaXNUaXRsZSk7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YToge30gfTtcclxuICAgICAgdGhpcy5lZGl0VmFsdWUgPSBKU09OLnBhcnNlKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2VkaXRWYWx1ZScpKTtcclxuICAgICAgaWYgKHRoaXMuY2hlY2sgJiYgdGhpcy5wcm92aWRlckRhdGE/LmFjY291bnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7XHJcbiAgICAgICAgICBkYXRhOiB0aGlzLnByb3ZpZGVyRGF0YT8uYWNjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lZGl0VmFsdWUgPSBKU09OLnBhcnNlKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2VkaXRWYWx1ZScpKTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0VmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHtcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5lZGl0VmFsdWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YVsnZWRpdCddID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiB7fSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICBcclxuICAgICAgdGhpcy5mYWxsYmFja0lkRnJvbVJvdXRlID0gdHlwZW9mIHJlc3VsdD8uZGF0YT8udGVtcGxhdGVqc29uID09ICdzdHJpbmcnPyBKU09OLnBhcnNlKHJlc3VsdD8uZGF0YT8udGVtcGxhdGVqc29uKT8uZmFsbGJhY2tJZEZyb21Sb3V0ZTogcmVzdWx0Py5kYXRhPy50ZW1wbGF0ZWpzb24/LmZhbGxiYWNrSWRGcm9tUm91dGU7XHJcbiAgICAgIHRoaXMuZnJvbVRpdGxlID0gcmVzdWx0LmRhdGE/LnBhZ2VuYW1lID8gcmVzdWx0LmRhdGE/LnBhZ2VuYW1lIDogJyc7XHJcbiAgICAgIHRoaXMuZGF0YVN0b3JlLnNldERhdGEoJ3RpdGxlJywgdGhpcy5mcm9tVGl0bGUpO1xyXG4gICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrVGVtcGxhdGUocmVzdWx0KTtcclxuICAgICAgdGhpcy51c2VyID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2VybmFtZSA9IHRoaXMudXNlcj8uZmlyc3ROYW1lICsgJycgKyB0aGlzLnVzZXI/Lmxhc3ROYW1lO1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5yaWJib25EYXRhID0gbnVsbDtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuc291cmNlaWQgPSB0aGlzLnNvdXJjZWlkID8gdGhpcy5zb3VyY2VpZCA6IG51bGw7IFxyXG4gICAgICBpZiAodGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZUtleScpKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGFbdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZUtleScpXSA9IHRoaXMucm91dGUucGF0aEZyb21Sb290Py5maW5kKHggPT4geC5zbmFwc2hvdC5wYXJhbU1hcC5oYXMoJ3NvdXJjZUtleScpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VWYWx1ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FsbEdldEFQSSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhU3ViID0gdGhpcy5kYXRhU3RvcmUuY3VycmVudFN0b3JlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzWyd1cGxvYWRGcm9tR3JpZCddKSB7XHJcbiAgICAgICAgdGhpcy5zaG93T2NyRm9ybSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idG5WZXJpZnkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrUGFyYW1zKGVsZW1lbnQ6YW55KXtcclxuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGVsZW1lbnQpIDogZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbmRpdGlvbkNoZWNrVGVtcGxhdGUocmVzdWx0KSB7XHJcbiAgICBsZXQgcm91dGluZ1BhZ2UgPSBbXTtcclxuICAgIGlmIChyZXN1bHQuZGF0YS50YWJjb25maWcpIHtcclxuICAgICAgY29uc3Qgcm91dGluZ1RhYiA9IHRoaXMuY2hlY2tQYXJhbXMocmVzdWx0LmRhdGEudGFiY29uZmlnKTtcclxuICAgICAgcm91dGluZ1BhZ2UgPSByb3V0aW5nVGFiLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ1JPVVRJTkcnKTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQuZGF0YS50ZW1wbGF0ZWpzb24pIHtcclxuICAgICAgdGhpcy5pc2Zvcm1JTyA9IHRydWU7XHJcbiAgICAgIHRoaXMuanNvbkZvcm0gPSB0aGlzLmNoZWNrUGFyYW1zKHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbilcclxuICAgICAgY29uc3QgZm9ybVRlbXBsYXRlSnNvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uRm9ybSkpO1xyXG4gICAgICB0aGlzLnBhZ2V0eXBlID0gcmVzdWx0LmRhdGE/LnBhZ2VEZXRhaWxzPy5wYWdldHlwZTtcclxuICAgICAgaWYgKHJlc3VsdC5kYXRhPy5wYWdldHlwZSA9PT0gJ1NVUlZFWScpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy51c2VyPy5pZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByZXBhcmVGb3JtS2V5TGFiZWwoZm9ybVRlbXBsYXRlSnNvbik7XHJcbiAgICAgIHRoaXMuZnJvbVRpdGxlID0gdGhpcy5qc29uRm9ybSAmJiB0aGlzLmpzb25Gb3JtWydwYWdlJ10gPyB0aGlzLmpzb25Gb3JtWydwYWdlJ10gOiByZXN1bHQuZGF0YS5wYWdlbmFtZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tb2RpZnlWaWRlb0NvbnRlbnQoKTtcclxuICAgICAgICB0aGlzLnNwZWVjaFRvVGV4dENvbnRlbnQoKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGluZ1BhZ2UubGVuZ3RoID4gMCAmJiByb3V0aW5nUGFnZVswXS5wYXRobmFtZSA9PT0gJ0NyZWF0ZVNpdGV2aXNpdENvbXBvbmVudCcpIHtcclxuICAgICAgdGhpcy5pc2Zvcm1JTyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFwcG9pbnRtZW50TGlzdCA9IFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gZ2V0IGNvbmZpZ3VyZSBVUkwgZ2V0LHBvc3QscHV0IFVSTFxyXG4gIGFzeW5jIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbiA/IHRoaXMuYWN0aW9uPy50b0xvd2VyQ2FzZSgpIDogJyc7XHJcbiAgICBjb25zdCBkYXRhOiBhbnkgPSBhd2FpdCB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRBY3RpdmVQYWdlKHRoaXMudGFiSWQsIHRydWUsIGFjdGlvbikudG9Qcm9taXNlKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEluY2lkZW50RGF0YSgpIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldExpc3RCeVNvdXJjZUlkKHRoaXMuc291cmNlaWQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uYXJyYXRpdmUgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLm5hcnJhdGl2ZSwgJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsbEdldEFQSSgpIHtcclxuICAgIGlmICh0aGlzLmZyb21UaXRsZS5pbmNsdWRlcyhTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORykpIHtcclxuICAgICAgdGhpcy5sb2FkSW5jaWRlbnREYXRhKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYkRhdGEgPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdzZWxlY3RlZFRhYkRhdGEnKTtcclxuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSA9PSAnZm9ybScpIHtcclxuICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWRpdElkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmVkaXRJZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICAgIGlmICghdGhpcy5pZCkge1xyXG5cclxuICAgICAgICBjb25zdCBmYWxsYmFja0lkID0gdGhpcy5mYWxsYmFja0lkRnJvbVJvdXRlPyB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGUgOiAnaWQnO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKGZhbGxiYWNrSWQpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KGZhbGxiYWNrSWQpOyAgICAgICAgXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgneW91dGhJRCcsIHRoaXMuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbmRpdGlvbkNoZWNrQ2FsbEdldEFQSSgpO1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmZvcm1yZXNwb25zZShhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25kaXRpb25DaGVja0NhbGxHZXRBUEkoKSB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZWRpdElkO1xyXG4gICAgfVxyXG4gICAgLy8gI2NoZWNrXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignZHluYW1pYy1yb3V0aW5nJykgPiAwIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJ3BhZ2VzL2ludGFrZScpID4gMCkge1xyXG4gICAgICBpZiAodGhpcy5mcm9tV29ya0Zsb3cpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5zb3VyY2VpZDtcclxuICAgICAgICB0aGlzLmZyb21Xb3JrRmxvdyA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkID8gdGhpcy5pZCA6IHRoaXMuc291cmNlaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsaWNrZWRTZXJ2aWNlQ2FzZSkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5zZXJ2aWNlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmZvcm1yZXNwb25zZSh0aGlzLmFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtcmVzcG9uc2UoYWN0aW9uKSB7XHJcbiAgICBpZiAoYWN0aW9uICE9PSAnYWRkJykge1xyXG4gICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRSZXNwb25zZUJ5UGFnZUlkKHRoaXMuaWQsIHRoaXMuZm9ybUlkKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdD8uZGF0YSAmJiByZXN1bHQ/LmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmdldE11bHRpcGxlRnJvbSh0aGlzLnBhZ2V0eXBlID09PSAnRkZQJyA/IHJlc3VsdD8uZGF0YS5yZXNwb25zZSA6IHJlc3VsdD8uZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQ/LmRhdGEpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybVJlc3BvbnNlID0gcmVzdWx0Py5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5nZXRBY3Rpb25TZWxlY3QodGhpcy5wYWdldHlwZSA9PT0gJ0ZGUCcgPyByZXN1bHQ/LmRhdGEucmVzcG9uc2UgOiByZXN1bHQ/LmRhdGEsIGFjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXN1bHROdWxsQ2hlY2soZGF0YTogYW55KTogYW55IHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuZGF0YSkge1xyXG4gICAgICByZXR1cm4gZGF0YS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBY3Rpb25TZWxlY3QocmVzdWx0LCBhY3Rpb24pIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VsdE51bGxDaGVjayhyZXN1bHQpO1xyXG4gICAgdGhpcy5wcm9jZXNzTXVsdGlTZWxlY3REcm9wZG93bnMoZGF0YSk7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IGRhdGEgfTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgaWYgKHRoaXMuZnJvbVRpdGxlLmluY2x1ZGVzKFNUUlVDVFVSRURfREVDSVNJT05fTUFLSU5HKSkge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5uYXJyYXRpdmUgPSB0aGlzLm5hcnJhdGl2ZTtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24gPT0gJ2VkaXQnIHx8IGFjdGlvbiA9PSAnRWRpdCcpIHtcclxuICAgICAgdGhpcy5pc1RpdGxlID0gJ0VkaXQgJyArIGRhdGE/LnBhZ2VEZXRhaWxzPy5hY3RpdmVWZXJzaW9uPy5wYWdlbmFtZSB8fCAnJztcclxuICAgIH1cclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgIGlmICh0aGlzLmV4dGVybmFsUGFyYW1ldGVycykge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS50eXBlID0gdGhpcy5leHRlcm5hbFBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlkID0gcmVzdWx0LmlkO1xyXG4gICAgdGhpcy5vcGVuQm90dG9tU2hlZXQoKTtcclxuICB9XHJcblxyXG4gIGdldE11bHRpcGxlRnJvbShyZXN1bHQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXN1bHRbMF0uZGF0YSA/IHJlc3VsdFswXS5kYXRhIDogcmVzdWx0WzBdO1xyXG4gICAgdGhpcy5wcm9jZXNzTXVsdGlTZWxlY3REcm9wZG93bnMoZGF0YSk7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IGRhdGEgfTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgaWYgKHRoaXMuZnJvbVRpdGxlLmluY2x1ZGVzKFNUUlVDVFVSRURfREVDSVNJT05fTUFLSU5HKSkge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5uYXJyYXRpdmUgPSB0aGlzLm5hcnJhdGl2ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmV4dGVybmFsUGFyYW1ldGVycykge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS50eXBlID0gdGhpcy5leHRlcm5hbFBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlkID0gcmVzdWx0WzBdLmlkO1xyXG4gICAgdGhpcy5vcGVuQm90dG9tU2hlZXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc011bHRpU2VsZWN0RHJvcGRvd25zKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5tdWx0aVNlbGVjdERyb3BEb3ducy5mb3JFYWNoKGRyb3Bkb3duS2V5ID0+IHtcclxuICAgICAgY29uc3QgZHJvcGRvd25WYWx1ZSA9IGRhdGFbZHJvcGRvd25LZXldO1xyXG4gICAgICBpZiAodHlwZW9mIGRyb3Bkb3duVmFsdWUgPT09ICdzdHJpbmcnICYmIGRyb3Bkb3duVmFsdWUuaW5jbHVkZXMoJywnKSkge1xyXG4gICAgICAgIGRhdGFbZHJvcGRvd25LZXldID0gZHJvcGRvd25WYWx1ZS5zcGxpdCgnLCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbi8vY2xlYW51cGNvZGVcclxuICAvLyBuZXh0U3VibWl0KGV2ZW50KSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG4gIC8vICAgdGhpcy5zdWJtaXRGYWlsZWQubmV4dCgnRmFpbGVkIHRvIGFkZCByZXNwb25zZScpO1xyXG4gIC8vIH1cclxuXHJcbiAgLyogVGhlIGJlbG93IGZ1bmN0aW9uIHdpbGwgdHJpZ2dlciB3aGVuIHVzZXIgY2xpY2tzIG9uIGEgYnV0dG9uIGluIFBvcFVwICovXHJcbiAgb25DbGlja0NvbmZpcm1hdGlvbih1c2VyQWN0aW9uLCBhY3Rpb25LZXkpIHtcclxuICAgIGNvbnN0IGZvcm1WYWx1ZSA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRWYWx1ZSgpO1xyXG4gICAgY29uc3QgY29tcCA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRDb21wb25lbnQoJ2N1c3RvbVZhbGlkYXRpb25Db21wb25lbnQnKT8uY29tcG9uZW50O1xyXG4gICAgY29uc3QgdXBkYXRlQ29tcG9uZW50QW5kUmVkcmF3ID0gKGxvY2FsQWN0aW9uS2V5KSA9PiB7XHJcbiAgICAgIGlmIChjb21wKSBjb21wWyd1c2VySW5wdXQnXSA9IGxvY2FsQWN0aW9uS2V5O1xyXG4gICAgICBmb3JtVmFsdWUuZGF0YVsndXNlcklucHV0J10gPSBsb2NhbEFjdGlvbktleTtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvLnNldFZhbHVlKGZvcm1WYWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHVzZXJBY3Rpb24gPT09ICdzdWJtaXQnKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VWYWxpZGF0aW9uUG9wdXAoKTtcclxuICAgICAgZm9ybVZhbHVlLmRhdGFbJ3ByZXZlbnRTdWJtaXQnXSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmZvcm1JTy5mb3JtaW8uc2V0VmFsdWUoZm9ybVZhbHVlKTtcclxuICAgICAgdXBkYXRlQ29tcG9uZW50QW5kUmVkcmF3KGFjdGlvbktleSk7XHJcbiAgICAgIGNvbXA/LnBvcHVwT25TdWJtaXQgJiYgdGhpcy5vblN1Ym1pdChmb3JtVmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZVZhbGlkYXRpb25Qb3B1cCgpO1xyXG4gICAgICB1cGRhdGVDb21wb25lbnRBbmRSZWRyYXcoY29tcD8uYnV0dG9uMlRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VWYWxpZGF0aW9uUG9wdXAoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRpb25Qb3B1cFJlZi5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgY29uc3QgY29tcCA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRDb21wb25lbnQoJ2N1c3RvbVZhbGlkYXRpb25Db21wb25lbnQnKT8uY29tcG9uZW50O1xyXG4gICAgY29uc3QgZm9ybVZhbHVlID0gdGhpcy5mb3JtSU8uZm9ybWlvLmdldFZhbHVlKCk7XHJcbiAgICBpZiAoZm9ybVZhbHVlPy5kYXRhPy5wcmV2ZW50U3VibWl0ICYmIGNvbXA/LnBvcHVwT25TdWJtaXQgJiYgY29tcD8uc2hvd1BvcHVwKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvblBvcHVwUmVmID0gdGhpcy5kaWFsb2cub3Blbih0aGlzLnZhbGlkYXRpb25Qb3B1cCk7XHJcbiAgICAgIHRoaXMuY29uZmlybWF0aW9ubWVzc2FnZSA9IGNvbXA/LnZhbGlkYXRpb25NZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdChzdWJtaXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbGlkYXRlRm9ybSgpO1xyXG4gICAgaWYgKHN1Ym1pc3Npb24/LmRhdGE/LnByZXZlbnRTdWJtaXQpIHtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvLmVtaXQoJ3N1Ym1pdERvbmUnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlUGFnZSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaignQWRkQWN0aW9uJyk7XHJcbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykgPT0gJ2Zvcm0nKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVkaXRJZCkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5lZGl0SWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgIGlmICghdGhpcy5pZCAmJiAhY3JlYXRlUGFnZSAmJiB0aGlzLnBhZ2V0eXBlICE9ICdGRlAnKSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5SWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdpZCcpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IHlvdXRoSWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VWYWx1ZScpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VWYWx1ZScpO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGU/LnRvTG93ZXJDYXNlKCkgPT0gJ3lvdXRoaWQnID8geW91dGhJZCA6IGVudGl0eUlkO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3VibWlzc2lvbkRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1Ym1pc3Npb24pKTtcclxuICAgIGNvbnN0IGRhdGEgPVxyXG4gICAgICBzdWJtaXNzaW9uRGF0YS5kYXRhICYmIHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEuZWRpdEdyaWRcclxuICAgICAgICA/IHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgIDogc3VibWlzc2lvbkRhdGEuZGF0YTtcclxuICAgIGRlbGV0ZSBkYXRhLnJpYmJvbkRhdGE7XHJcbiAgICBpZiAodGhpcy5wcm92aWRlckRhdGE/LmlkKSBkYXRhLnByb3ZpZGVyX2lkID0gdGhpcy5wcm92aWRlckRhdGE/LmlkO1xyXG4gICAgaWYgKHRoaXMuY2hlY2spIHtcclxuICAgICAgaWYgKHRoaXMuc3VibWl0dGVkRGF0YT8uZGF0YT8udGV4dEZpZWxkPy5hY2NvdW50Py5pZCkge1xyXG4gICAgICAgIGRhdGEuaWQgPSB0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGE/LnRleHRGaWVsZD8uYWNjb3VudD8uaWQ7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgICBwYWdlaWQ6IHRoaXMuZm9ybUlkLFxyXG4gICAgICAgICAgcmVzcG9uc2U6IGRhdGFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9ybShyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN1Ym1pdGVXaXRob3V0SWQocmVxdWVzdERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICBwYWdlaWQ6IHRoaXMuZm9ybUlkLFxyXG4gICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGdldEZvcm1QYWdlVGl0bGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdGT1JNX1RJVExFJyk7XHJcbiAgICAgIGlmKGdldEZvcm1QYWdlVGl0bGUgPT09ICdFZGl0IFlvdXRoIEluZm8nICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgaWYgKCh0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGEuYWN0aW9uICE9PSBcInN3aXRjaFwiICYmIHRoaXMuc3VibWl0dGVkRGF0YT8uZGF0YS5hY3Rpb24gIT09IFwiY29weVwiKSAmJiB0aGlzLmlkIHx8IHRoaXMuc3VibWl0dGVkRGF0YT8uZGF0YT8udGV4dEZpZWxkPy5pZCB8fCB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YT8uZWRpdCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9ybShyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRlV2l0aG91dElkKHJlcXVlc3REYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0ZVdpdGhvdXRJZChyZXF1ZXN0RGF0YSkge1xyXG4gICAgY29uc3QgZmlsZVVwbG9hZERhdGEgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFNoYXJlZE1lc3NhZ2UoKTtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZSh0aGlzLmlkLCByZXF1ZXN0RGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VibWlzc2lvbkRvbmUuZW1pdCh0cnVlKVxyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ0FkZEFjdGlvbicsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5yZW1vdmVJdGVtKCdncmlkQWN0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUuc2V0RGF0YSgnZ3JpZEFjdGlvbicsbnVsbCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRlKHJlc3VsdFsnZGF0YSddKTtcclxuICAgICAgICBpZiAodGhpcy5pc0RpYWxvZ1BvcHVwKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZnRlclN1Ym1pdC5lbWl0KHJlc3VsdFsnZGF0YSddKTtcclxuXHJcbiAgICAgICAgLy8gUmVkaXJlY3Rpb24gRml4XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuc2hvd0JhY2sgfHwgKGhpc3Rvcnk/LnN0YXRlPy5leHRlcm5hbExpbmsgJiYgIWhpc3Rvcnk/LnN0YXRlPy5pc0hpZGVCYWNrKSkge1xyXG4gICAgICAgIC8vICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1Ym1pdFRvU3VydmV5KCk7XHJcbiAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKHJlc3VsdFsnZGF0YSddWydpZCddKSB9LCBmaWxlVXBsb2FkRGF0YSk7XHJcbiAgICAgICAgaWYgKGZpbGVVcGxvYWREYXRhPy5hdHRhY2htZW50ZGV0YWlscykge1xyXG4gICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnU3VibWl0dGVkIFN1Y2Nlc3NmdWxseScsdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgndGl0bGV0YWInKTtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWFzdGVyLXZpZXcnKSA+IC0xIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbXBvc2l0ZS1wYWdlJykgPiAtMSApXHJcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGlmKCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50Py5sb2FkZWRGcm9tTWFzdGVyVmlldyB8fCB0aGlzLnNlbGVjdGVkQ29tcG9uZW50Py5sb2FkZWRGcm9tQ29tcG9zaXRlUGFnZSApJiYgdGhpcy5zZWxlY3RlZENvbXBvbmVudC5zZXR0aW5ncyAmJiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50LnNldHRpbmdzLm9uU3VibWl0UmVkaXJlY3Rpb24pIFxyXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50WydzdWJtaXR0ZWREYXRhJ10gPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChwdWJsaXNoRXZlbnQoe2V2ZW50TmFtZTogJ3N1Ym1pdCcsIHBheWxvYWQ6IHRoaXMuc2VsZWN0ZWRDb21wb25lbnR9KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIC8vIFVzaW5nIGJlbG93IGZvciBhbGwgcGFnZXMgKGFmdGVyIGFkZCByZXNwb25zKSBleGNlcHQgY29tcG9zaXRlLlxyXG4gICAgICAgIGlmICh0aGlzLmFwcFNlcnZpY2UuY2FuTmF2aWdhdGVCYWNrKCkgJiYgIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdjb21wb3NpdGUtcGFnZScpICYmICF3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnbWFzdGVyLXZpZXcnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRGYWlsZWQubmV4dCgnRmFpbGVkIHRvIGFkZCByZXNwb25zZScpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkQXR0YWNobWVudChpbmZvKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jcmVhdGVGb3JtUmVzcG9uc2VBdHRhY2htZW50KGluZm8pLnN1YnNjcmliZShyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXR0ZWREYXRlKHJlc3VsdCkge1xyXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogcmVzdWx0WzBdLmRhdGEgPyByZXN1bHRbMF0uZGF0YSA6IHJlc3VsdFswXSB9O1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgICAgdGhpcy5pZCA9IHJlc3VsdFswXS5pZDtcclxuICAgICAgdGhpcy5vcGVuQm90dG9tU2hlZXQoKTtcclxuICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogcmVzdWx0Py5kYXRhID8gcmVzdWx0Py5kYXRhIDogcmVzdWx0IH07XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICB0aGlzLmlkID0gcmVzdWx0LmlkO1xyXG4gICAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuaWQubmV4dChudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdFRvU3VydmV5KCkge1xyXG4gICAgaWYgKHRoaXMucGFnZXR5cGUgPT09ICdTVVJWRVknKSB7XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZVVzZXJTdXJ2ZXkoaGlzdG9yeSwgdGhpcy5pZCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvL1RoaXMgaXMgaW50ZW50aW9uYWxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGb3JtKHJlcXVlc3REYXRhKSB7XHJcbiAgICBjb25zdCBmaWxlVXBsb2FkRGF0YSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U2hhcmVkTWVzc2FnZSgpO1xyXG4gICAgaWYgKHJlcXVlc3REYXRhPy5yZXNwb25zZT8uaWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHJlcXVlc3REYXRhPy5yZXNwb25zZT8uaWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBFZGl0R3JpZFBhZ2VJRCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ0VkaXRHcmlkUGFnZUlEJyk7XHJcbiAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSkgcmVxdWVzdERhdGFbJ2lzQ29tcG9zaXRlUGFnZSddID0gdHJ1ZTtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLnVwZGF0ZUZvcm1SZXNwb25zZSh0aGlzLmlkLCByZXF1ZXN0RGF0YSwgRWRpdEdyaWRQYWdlSUQpLnN1YnNjcmliZShcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pc3Npb25Eb25lLmVtaXQodHJ1ZSk7IFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgICBpZihkYXRhICYmIChkYXRhID09PSAnTk9fRURJVCcgfHwgZGF0YSA9PT0gJ05PVF9BTExPV19UT19FRElUJyB8fCBkYXRhID09PSAnSU5WQUxJRF9VU0VSJykpe1xyXG4gICAgICAgICAgaWYoZGF0YSA9PT0gJ05PX0VESVQnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS53YXJuKCdUaGUgZWRpdCB3aW5kb3cgZm9yIHRoaXMgcmVjb3JkIGhhcyBleHBpcmVkIGFuZCBjaGFuZ2VzIGNhbm5vdCBiZSBtYWRlIGF0IHRoaXMgdGltZS4nKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgIGlmKGRhdGEgPT09ICdOT1RfQUxMT1dfVE9fRURJVCcgfHwgZGF0YSA9PT0gJ0lOVkFMSURfVVNFUicpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLndhcm4oJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpOyAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogcmVzdWx0WzBdLmRhdGEgPyByZXN1bHRbMF0uZGF0YSA6IHJlc3VsdFswXSB9O1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHJlc3VsdFswXS5pZDtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQm90dG9tU2hlZXQoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZGF0YSA/IGRhdGEgOiByZXN1bHQgfTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSByZXN1bHRbJ2lkJ107XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdjb21wb3NpdGUtcGFnZScpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdtYXN0ZXItdmlldycpKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgIGlmKCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50LmxvYWRlZEZyb21NYXN0ZXJWaWV3IHx8IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQubG9hZGVkRnJvbUNvbXBvc2l0ZVBhZ2UpICYmIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQuc2V0dGluZ3MgJiYgdGhpcy5zZWxlY3RlZENvbXBvbmVudC5zZXR0aW5ncy5vblN1Ym1pdFJlZGlyZWN0aW9uKSBcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnRbJ3N1Ym1pdHRlZERhdGEnXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChwdWJsaXNoRXZlbnQoe2V2ZW50TmFtZTogJ3N1Ym1pdCcsIHBheWxvYWQ6IHRoaXMuc2VsZWN0ZWRDb21wb25lbnR9KSk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KG51bGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnZWRpdFZhbHVlJywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGE/LnJlc3BvbnNlKSk7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlcXVlc3REYXRhPy5yZXNwb25zZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihyZXN1bHRbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgaWYgKGZpbGVVcGxvYWREYXRhPy5hdHRhY2htZW50ZGV0YWlscykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnQoZmlsZVVwbG9hZEluZm8pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgndGl0bGV0YWInKTtcclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ2VkaXRWYWx1ZScpO1xyXG4gICAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgndGFyZ2V0LXRhYi1maWx0ZXInKTtcclxuICAgICAgICAgIGlmKCF3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSAmJiAhd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ21hc3Rlci12aWV3JykpXHJcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VibWl0RmFpbGVkLm5leHQoJ0ZhaWxlZCB0byB1cGRhdGUgcmVzcG9uc2UnKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgXHJcbiAgfVxyXG5cclxuICBjbG9zZVBvcHVwKCkge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbi8vY29kZSBjbGVhbnVwXHJcbiAgLy8gZ29CYWNrKCk6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi9saXN0J10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAvLyB9XHJcblxyXG4gIG9wZW5Cb3R0b21TaGVldCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uuc291cmNlSWQubmV4dCh0aGlzLnNvdXJjZWlkKTtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuaWQubmV4dCh0aGlzLmlkKTtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UucGFnZUlkLm5leHQodGhpcy5mb3JtSWQpO1xyXG4gIH1cclxuXHJcbiAgbW9kaWZ5VmlkZW9Db250ZW50KCkge1xyXG4gICAgY29uc3QgdmlkZW9FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFuZ2V0b0lmcmFtZScpO1xyXG4gICAgaWYgKHZpZGVvRWxlbWVudHMgJiYgdmlkZW9FbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgdmlkZW9FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBzcmMgPSBlbGVtZW50LnNyYztcclxuICAgICAgICBjb25zdCBpZnJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XHJcbiAgICAgICAgaWZybS5zdHlsZS53aWR0aCA9IGVsZW1lbnQud2lkdGggPyBlbGVtZW50LndpZHRoIDogbnVsbDtcclxuICAgICAgICBpZnJtLnN0eWxlLmhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0ID8gZWxlbWVudC5oZWlnaHQgOiBudWxsO1xyXG4gICAgICAgIGlmcm0ud2lkdGggPSBlbGVtZW50LndpZHRoID8gZWxlbWVudC53aWR0aCA6IG51bGw7XHJcbiAgICAgICAgaWZybS5oZWlnaHQgPSBlbGVtZW50LmhlaWdodCA/IGVsZW1lbnQuaGVpZ2h0IDogbnVsbDtcclxuICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGlmcm0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUNsaWNrRXZlbnRzKF9kYXRhLCBldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuaWQgPT0gJ3NjYW5fYnV0dG9uJykge1xyXG4gICAgICB0aGlzLmV4dGVybmFsX3NjYW5uZXIubmF0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gICAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5kYXRhc2V0KSB7XHJcbiAgICAgICAgdGhpcy5zY2FubmVyQ29uZmlnID0gZXZlbnQuc3JjRWxlbWVudC5kYXRhc2V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWRpcmVjdCgpIHtcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWFzdGVyLXZpZXcnKSA+IDAgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY29tcG9zaXRlLXBhZ2UnKSA+IDApIHtcclxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2R5bmFtaWMtcm91dGluZycpID4gMCB8fCB0aGlzLmlkKVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgICAgIH1cclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNoYW5nZVBhZ2UodHJ1ZSk7XHJcbiAgICBpZih0aGlzLnBhcmVudEdyaWRQYWdlSWQpe1xyXG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICAgIC8vUmVtb3ZpbmcgVW53YW50ZWQgcmVkaXJlY3QgY29kZVxyXG4gICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ21hc3Rlci12aWV3JykgPiAwIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbXBvc2l0ZS1wYWdlJykgPiAwKSB7XHJcbiAgICAvLyAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdkeW5hbWljLXJvdXRpbmcnKSA+IDAgfHwgdGhpcy5pZClcclxuICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLy4uLyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAvLyAgIGVsc2VcclxuICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAvLyB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3RhYicpID4gMCAmJiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdtYXN0ZXItdmlldycpID09PSAtMSAmJiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdjb21wb3NpdGUtcGFnZScpID09PSAtMSkge1xyXG4gICAgLy8gICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jaGFuZ2VQYWdlKHRydWUpO1xyXG4gICAgLy8gICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIC8vIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWFzdGVyLXZpZXcnKSA9PT0gLTEgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY29tcG9zaXRlLXBhZ2UnKSA9PT0gLTEpIHtcclxuICAgIC8vICAgY29uc3QgZ3JpZFBhZ2VJbmZvID0gSlNPTi5wYXJzZSh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYXJlbnRHcmlkUGFnZScpKTtcclxuICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvcGFnZXMvZHluYW1pYy1zZWEvc2VhcmNoLyR7Z3JpZFBhZ2VJbmZvPy5pZH1gXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tRXZlbnRzQnV0dG9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3JlcG9ydGRvd25sb2FkJykge1xyXG4gICAgICBjb25zdCBxdWVyeURhdGEgPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdncmlkRGF0YScpO1xyXG4gICAgICBjb25zdCBwYWdlRGF0YSA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ3BhZ2VEYXRhJyk7XHJcbiAgICAgIGV2ZW50LmRhdGFbJ2N1cnJlbnRZZWFyJ10gPSBldmVudC5kYXRhLnJlcG9ydDEgPT09ICdjdXJyZW50WWVhcicgPyAneWVzJyA6ICcnO1xyXG4gICAgICBpZiAoZXZlbnQuZGF0YVsnY3VycmVudFllYXInXSA9PT0gJ3llcycpIHtcclxuICAgICAgICBldmVudC5kYXRhWydmcm9tUmFuZ2UnXSA9ICcyMDIxLTA2LTE4VDE0OjMzOjA2LjM2NiswMDAwJztcclxuICAgICAgICBldmVudC5kYXRhWyd0b1JhbmdlJ10gPSAnMjAyMS0wNi0xOFQxNDozMzowNi4zNjYrMDAwMCc7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBmb3JtRGF0YTogZXZlbnQuZGF0YSxcclxuICAgICAgICBxdWVyeURhdGE6IHF1ZXJ5RGF0YSxcclxuICAgICAgICBwYWdlRGF0YTogcGFnZURhdGFcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5kb3dubG9hZFJlcG9ydChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvd25sb2FkUmVwb3J0KGRhdGEpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmV4cG9ydFJlcG9ydChkYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3AgPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgICAgIGlmIChyZXNwLnBkZkF3c1VybCAmJiByZXNwLmV4Y2VsQXdzVXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybHMgPSBbXTtcclxuICAgICAgICAgICAgdXJscy5wdXNoKHJlc3AucGRmQXdzVXJsKTtcclxuICAgICAgICAgICAgdXJscy5wdXNoKHJlc3AuZXhjZWxBd3NVcmwpO1xyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZSh1cmxzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcC5leGNlbEF3c1VybCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZShyZXNwLmV4Y2VsQXdzVXJsKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcC5wZGZBd3NVcmwpIHtcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUocmVzcC5wZGZBd3NVcmwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvd25sb2FkRmlsZShzM0J1Y2tldFVybE5hbWUpIHtcclxuICAgIGlmIChzM0J1Y2tldFVybE5hbWUgJiYgQXJyYXkuaXNBcnJheShzM0J1Y2tldFVybE5hbWUpKSB7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzM0J1Y2tldFVybE5hbWUpIHtcclxuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSBpdGVtO1xyXG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSAnZG93bmxvYWQnO1xyXG4gICAgICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgbGluay5ocmVmID0gczNCdWNrZXRVcmxOYW1lLnRyaW0oKTtcclxuICAgICAgbGluay5kb3dubG9hZCA9ICdkb3dubG9hZCc7XHJcbiAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgbGluay5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50cyhldnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlcyBkb25lXCIsIGV2dCk7ICAgIFxyXG4gICAgaWYgKGV2dC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQYWdlRXZlbnREYXRhID0gZXZ0O1xyXG4gICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGFnZUV2ZW50SWQgPSB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgLyogSWYgdGhlIEZvcm0uaW8gZm9ybSByZXF1aXJlcyBhIHBvcHVwLCB0aGVyZSBzaG91bGQgYmUgYSBoaWRkZW4gY29tcG9uZW50IHdpdGggdGhlIEFQSSBwcm9wZXJ0eSBuYW1lICdjdXN0b21WYWxpZGF0aW9uQ29tcG9uZW50Jy4gKi9cclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KCdjdXN0b21WYWxpZGF0aW9uQ29tcG9uZW50Jyk/LmNvbXBvbmVudFxyXG4gICAgICBpZiAoY29tcCAmJiBldnQ/LmRhdGEgJiYgY29tcD8uc2hvd1BvcHVwICYmIGV2dD8uY2hhbmdlZCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9ubWVzc2FnZSA9IGNvbXA/LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbjEgPSBjb21wPy5zaG93QnV0dG9uMSA/IGNvbXA/LnNob3dCdXR0b24xIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93QnV0dG9uMiA9IGNvbXA/LnNob3dCdXR0b24yID8gY29tcD8uc2hvd0J1dHRvbjIgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjFUZXh0ID0gY29tcD8uYnV0dG9uMVRleHQ7XHJcbiAgICAgICAgdGhpcy5idXR0b24yVGV4dCA9IGNvbXA/LmJ1dHRvbjJUZXh0O1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMUtleSA9IGNvbXA/LmJ1dHRvbjFLZXk7XHJcbiAgICAgICAgdGhpcy5idXR0b24yS2V5ID0gY29tcD8uYnV0dG9uMktleTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjFBY3Rpb24gPSBjb21wPy5idXR0b24xQWN0aW9uO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMkFjdGlvbiA9IGNvbXA/LmJ1dHRvbjJBY3Rpb247XHJcbiAgICAgICAgdGhpcy5idXR0b24xU3R5bGUgPSBjb21wPy5idXR0b24xU3R5bGU7XHJcbiAgICAgICAgdGhpcy5idXR0b24yU3R5bGUgPSBjb21wPy5idXR0b24yU3R5bGU7XHJcbiAgICAgICAgaWYgKCFjb21wPy5wb3B1cE9uU3VibWl0KSB0aGlzLnZhbGlkYXRpb25Qb3B1cFJlZiA9IHRoaXMuZGlhbG9nLm9wZW4odGhpcy52YWxpZGF0aW9uUG9wdXApO1xyXG4gICAgICB9XHJcblxyXG4gICAgdGhpcy5maW5hbmNlQ3VzdG9tRXZlbnRzRnVuY3Rpb25hbGl0eShldnQpO1xyXG4gIH1cclxuXHJcbiAgc3BlZWNoVG9UZXh0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IHNwZWVjaEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWVjaFRvVGV4dCcpO1xyXG4gICAgaWYgKHNwZWVjaEVsZW1lbnRzICYmIHNwZWVjaEVsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICBzcGVlY2hFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBzcGVlY2hidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzcGVlY2hidG4uY2xhc3NOYW1lID0gJ25hcnJhdGl2ZS1zcGVlY2gtYnRuJztcclxuICAgICAgICBzcGVlY2hidG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtbWljcm9waG9uZS1zbGFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3BlZWNoYnRuKTtcclxuICAgICAgICBzcGVlY2hidG4uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICBldnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlU3BlZWNoVG9UZXh0KHRoaXMsIGV2dCwgZWxlbWVudCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlU3BlZWNoVG9UZXh0KGN0cmwsIGV2dCwgaXRlbSkge1xyXG4gICAgY29uc3QgbmFycmF0aXZlRWxlbWVudCA9IGV2dD8uY3VycmVudFRhcmdldD8uY2hpbGRyZW4/Lmxlbmd0aFxyXG4gICAgICA/IGV2dD8uY3VycmVudFRhcmdldD8uY2hpbGRyZW5bMF1cclxuICAgICAgOiBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbiA9ICF0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbjtcclxuICAgIGlmICh0aGlzLnNwZWVjaFJlY29nbmluaXRpb25Pbikge1xyXG4gICAgICBjb25zdCBzcGVlY2hUZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG4gICAgICBpZiAobmFycmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIG5hcnJhdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZhIGZhLW1pY3JvcGhvbmUnO1xyXG4gICAgICB9XHJcbiAgICAgIGN0cmwuc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLnJlY29yZCgpLnN1YnNjcmliZShcclxuICAgICAgICAvLyBsaXN0ZW5lclxyXG4gICAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgIGxldCB0ZW1wTmFycmF0aXZlID0gc3BlZWNoVGV4dC52YWx1ZTtcclxuICAgICAgICAgIHRlbXBOYXJyYXRpdmUgPSB0ZW1wTmFycmF0aXZlLnRyaW0oKS5jb25jYXQoJyAnICsgdmFsdWUpO1xyXG4gICAgICAgICAgaWYgKHNwZWVjaFRleHQpIHtcclxuICAgICAgICAgICAgc3BlZWNoVGV4dC52YWx1ZSA9IHRlbXBOYXJyYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBlcnJyb3JcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb25kaXRpb25DaGVja0Vycm9yKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobmFycmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIG5hcnJhdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZhIGZhLW1pY3JvcGhvbmUtc2xhc2gnO1xyXG4gICAgICB9XHJcbiAgICAgIGN0cmwuZGVBY3RpdmF0ZVNwZWVjaFJlY29nbml0aW9uKGN0cmwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25kaXRpb25DaGVja0Vycm9yKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB0aGlzLmVycm9yRXhlY3V0aW9uKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKTtcclxuICB9XHJcblxyXG4gIGVycm9yRXhlY3V0aW9uKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKSB7XHJcbiAgICBpZiAobmFycmF0aXZlRWxlbWVudCkge1xyXG4gICAgICBuYXJyYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdmYSBmYS1taWNyb3Bob25lLXNsYXNoJztcclxuICAgIH1cclxuICAgIGlmIChlcnIuZXJyb3IgPT09ICduby1zcGVlY2gnKSB7XHJcbiAgICAgIGN0cmwubm90aWZpY2F0aW9uID0gdGhpcy5ub1NwZWVjaEFsZXJ0KCk7XHJcbiAgICAgIGN0cmwuYWN0aXZhdGVTcGVlY2hUb1RleHQoY3RybCwgZXZ0LCBpdGVtKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyLmVycm9yID09PSAnbm90LWFsbG93ZWQnKSB7XHJcbiAgICAgIGN0cmwubm90aWZpY2F0aW9uID0gdGhpcy5taWNVbmF1dGhvcmlzZWRBbGVydCgpO1xyXG4gICAgfSBlbHNlIGlmIChlcnIuZXJyb3IgPT09ICdub3QtbWljcm9waG9uZScpIHtcclxuICAgICAgY3RybC5ub3RpZmljYXRpb24gPSB0aGlzLm1pY05vdEF2YWlsYWJsZUFsZXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtaWNOb3RBdmFpbGFibGVBbGVydCgpIHtcclxuICAgIHJldHVybiAnTWljcm9waG9uZSBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgdmVyaWZ5IHRoZSBjb25uZWN0aW9uIG9mIHlvdXIgbWljcm9waG9uZSBhbmQgdHJ5IGFnYWluLic7XHJcbiAgfVxyXG5cclxuICBtaWNVbmF1dGhvcmlzZWRBbGVydCgpIHtcclxuICAgIHJldHVybiAnWW91ciBicm93c2VyIGlzIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB5b3VyIG1pY3JvcGhvbmUuIFZlcmlmeSB0aGF0IHlvdXIgYnJvd3NlciBoYXMgYWNjZXNzIHRvIHlvdXIgbWljcm9waG9uZSBhbmQgdHJ5IGFnYWluLic7XHJcbiAgfVxyXG5cclxuICBub1NwZWVjaEFsZXJ0KCkge1xyXG4gICAgcmV0dXJuICdObyBzcGVlY2ggaGFzIGJlZW4gZGV0ZWN0ZWQuIFBsZWFzZSB0cnkgYWdhaW4uJztcclxuICB9XHJcblxyXG4gIGRlQWN0aXZhdGVTcGVlY2hSZWNvZ25pdGlvbihjdHJsKSB7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbiA9IGZhbHNlO1xyXG4gICAgY3RybC5zcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UuZGVzdHJveVNwZWVjaE9iamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhU3ViKSB0aGlzLmRhdGFTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmKHRoaXMuZXZlbnRTdWJzY3JpcHRpb24pIHRoaXMuZXZlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLmRlc3Ryb3lTcGVlY2hPYmplY3QoKTtcclxuICAgIHRoaXMub2NyLmNsZWFyUmVzcG9uc2UoKTtcclxuICAgIGlmICh0aGlzLnBhZ2VEYXRhU3Vic2NyaXB0aW9uKSB0aGlzLnBhZ2VEYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlKGZpbGU6IEZpbGUgfCBGaWxlRXJyb3IpOiB2b2lkIHtcclxuICAgIHRoaXMub2NyLmdldFJlc3BvbnNlKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cyA9PSAnU1VDQ0VFREVEJykge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc09DUlJlc3BvbnNlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9jZXNzUmVzcG9uc2VEYXRhKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1Jlc3BvbnNlRGF0YShmaWxlKTogdm9pZCB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGxvYWRGaWxlKGZpbGUpLnN1YnNjcmliZShcclxuICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnBlcmNlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2VyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBwcm9jZXNzIHlvdXIgcmVxdWVzdC4nKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NPQ1JSZXNwb25zZShyZXN1bHQpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0LnJlc3BvbnNlO1xyXG4gICAgaWYgKHRoaXMuc2Nhbm5lckNvbmZpZyAmJiB0aGlzLnNjYW5uZXJDb25maWcuc2NhblR5cGUpIHtcclxuICAgICAgaWYgKHRoaXMuc2Nhbm5lckNvbmZpZy5zY2FuVHlwZSA9PT0gJ3RleHQnICYmIHRoaXMuc2Nhbm5lckNvbmZpZy5zY2FuUGF0Y2gpIHtcclxuICAgICAgICBjb25zdCBzZGF0YSA9IHRoaXMuc3VibWl0dGVkRGF0YTtcclxuICAgICAgICBpZiAoc2RhdGEgJiYgc2RhdGEuZGF0YSkge1xyXG4gICAgICAgICAgc2RhdGEuZGF0YVt0aGlzLnNjYW5uZXJDb25maWcuc2NhblBhdGNoXSA9IHJlc3BvbnNlLnJhd190ZXh0O1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YXYxID0gdGhpcy5vY3IucHJlcGFyZV9mb3JtX2RhdGEocmVzcG9uc2UsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5Gb3JtSW5wdXRzKSkpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhdjIgPSB0aGlzLm9jci5wcmVwYXJlX2Zyb21fZGF0YV92MShyZXNwb25zZSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLkZvcm1JbnB1dHMpKSk7XHJcbiAgICAgICAgY29uc3QgZmluYWxEYXRhID0geyAuLi5mb3JtRGF0YXYxLCAuLi5mb3JtRGF0YXYyIH07XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiBmaW5hbERhdGEgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlcGFyZUZvcm1LZXlMYWJlbChqc29uKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xyXG4gICAgICBqc29uLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlRm9ybUtleUxhYmVsKGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGpzb24uaGFzT3duUHJvcGVydHkoJ2lucHV0JykgJiZcclxuICAgICAganNvbi5pbnB1dCAmJlxyXG4gICAgICBqc29uLnR5cGUgIT09ICdidXR0b24nICYmXHJcbiAgICAgIGpzb24udHlwZSAhPT0gJ3NpZ25hdHVyZScgJiZcclxuICAgICAgIWpzb24uaGFzT3duUHJvcGVydHkoJ2N1c3RvbUNvbmRpdGlvbmFsJykgJiZcclxuICAgICAgIWpzb24uaGFzT3duUHJvcGVydHkoJ2NvbmRpdGlvbmFsJylcclxuICAgICkge1xyXG4gICAgICBsZXQgdmFsdWVzID0gW107XHJcbiAgICAgIGlmIChqc29uLnR5cGUgPT09ICdyYWRpbycgfHwganNvbi50eXBlID09PSAnc2VsZWN0Ym94ZXMnKSB7XHJcbiAgICAgICAgdmFsdWVzID0ganNvbi52YWx1ZXMgfHwgW107XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZm9ybU9iamVjdCA9IHtcclxuICAgICAgICBrZXk6IGpzb25bJ2tleSddLFxyXG4gICAgICAgIGxhYmVsOiBqc29uWydsYWJlbCddLFxyXG4gICAgICAgIHR5cGU6IGpzb25bJ3R5cGUnXSxcclxuICAgICAgICB2YWx1ZXM6IFsuLi52YWx1ZXNdXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuRm9ybUlucHV0cy5wdXNoKGZvcm1PYmplY3QpO1xyXG5cclxuICAgICAgaWYgKGpzb24udHlwZSA9PT0gJ3NlbGVjdCcgJiYganNvbi5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3REcm9wRG93bnMucHVzaChqc29uLmtleSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGpzb24pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXBhcmVGb3JtS2V5TGFiZWwoanNvbltrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmluYW5jZUN1c3RvbUV2ZW50c0Z1bmN0aW9uYWxpdHkoZXZlbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgZXZlbnQ/LmNoYW5nZWQ/LmNvbXBvbmVudD8ua2V5ID09PSAnaXNCYW5rQWNjb3VudEV4aXN0JyAmJlxyXG4gICAgICAhZXZlbnQ/LmRhdGE/LmlzQmFua0FjY291bnRFeGlzdCAmJlxyXG4gICAgICBldmVudD8uZGF0YT8uYWNjb3VudFR5cGVLZXlcclxuICAgICkge1xyXG4gICAgICBsZXQgYXBpID0gJyc7XHJcbiAgICAgIGlmIChldmVudD8uZGF0YT8uYWNjb3VudFR5cGVLZXkgPT09ICdDQScpIHtcclxuICAgICAgICBhcGkgPSAnZmluYW5jZWNhcmVhY2NvdW50bm8nO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50Py5kYXRhPy5hY2NvdW50VHlwZUtleSA9PT0gJ1JBJykge1xyXG4gICAgICAgIGFwaSA9ICdmaW5hbmNlcmVzdGl0dXRpb25hY2NvdW50bm8nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFwaSA9ICdmaW5hbmNlc2F2aW5nYWNjb3VudG5vJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRVbmlxdWVJZChhcGkpLnN1YnNjcmliZShcclxuICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuYmFua0FjY291bnROdW1iZXIgPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgICAgIHRoaXMudHJpZ2dlclJlZnJlc2guZW1pdCh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5OiAnc3VibWlzc2lvbicsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN1Ym1pdHRlZERhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbi8vIGNvZGUgY2xlYW51cFxyXG4gIC8vIHJvdXRlVG9HcmlkKHZhbCkge1xyXG4gIC8vICAgaWYgKHZhbCA9PT0gJ01ha2UgUGF5bWVudCcpIHtcclxuICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuL3BhZ2VzL21lcmdlcGFnZS8xZjRlMjcyYS00YzAzLTQ3MzktYjRhNS01Mzc0OGUwNmUyNDcnXSk7XHJcbiAgLy8gICB9IGVsc2UgaWYgKHZhbCA9PT0gJ1BheW1lbnQgRGV0YWlscyBJbmZvcm1hdGlvbicpIHtcclxuICAvLyAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBjdXN0b21FdmVudChldmVudCkge1xyXG4gICAgdGhpcy5fZm9ybUlPLmN1c3RvbUV2ZW50KGV2ZW50LCB0aGlzLmZvcm1JTyk7XHJcbiAgfVxyXG4vLyBjb2RlIGNsZWFudXBcclxuXHJcbiAgLy8gb2NyVXBsb2FkKGZpbGVzKSB7XHJcbiAgLy8gICB0aGlzLnVwbG9hZGVkRmlsZSA9IGZpbGVzLnRhcmdldC5maWxlc1swXTtcclxuICAvLyAgIGNvbnN0IHBhZ2VJRCA9IHRoaXMuZm9ybUlkID8gdGhpcy5mb3JtSWQgOiB0aGlzLnBhZ2VJZDtcclxuICAvLyAgIHRoaXMuaW1hZ2VEYXRhID0ge1xyXG4gIC8vICAgICBjb250ZW50VHlwZTogdGhpcy51cGxvYWRlZEZpbGUudHlwZSxcclxuICAvLyAgICAgZmlsZU5hbWU6IGBvY3IvJHtwYWdlSUR9LyR7dGhpcy51cGxvYWRlZEZpbGUubmFtZX1gXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgdGhpcy5hdHRhY2htZW50U2VydmljZS51cGxvYWRLZXkodGhpcy5pbWFnZURhdGEpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAvLyAgICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgLy8gICAgICAgY29uc3QgdXBsb2FkQXR0YWNobWVudDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcclxuICAvLyAgICAgICBjb25zdCB1cGxvYWRBdHRhY2htZW50RGV0YWlscyA9IHVwbG9hZEF0dGFjaG1lbnQuZmlsZXNbMF07XHJcbiAgLy8gICAgICAgdGhpcy5odHRwU2VydmljZS5wdXR1cGxvYWQyKHJlcy5kYXRhLCB1cGxvYWRBdHRhY2htZW50RGV0YWlscywgdXBsb2FkQXR0YWNobWVudERldGFpbHMudHlwZSkuc3Vic2NyaWJlKFxyXG4gIC8vICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xyXG4gIC8vICAgICAgICAgICBpZiAocmVzcCAmJiByZXNwLnN0YXR1cyA9PSAyMDApIHtcclxuICAvLyAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgLy8gICAgICAgICAgICAgICBwYXRoOiBgb2NyLyR7cGFnZUlEfS8ke3RoaXMudXBsb2FkZWRGaWxlLm5hbWV9YCxcclxuICAvLyAgICAgICAgICAgICAgIGF0dGFjaG1lbnR0eXBlOiB0aGlzLnVwbG9hZGVkRmlsZS50eXBlXHJcbiAgLy8gICAgICAgICAgICAgfTtcclxuICAvLyAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdVcGxvYWRlZCBTdWNjZXNzZnVsbHkhJyk7XHJcbiAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnZWRpdCcpIHtcclxuICAvLyAgICAgICAgICAgICAgIHRoaXMuZ2V0VXBsb2FkKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gIC8vICAgICAgICAgICAgICAgdGhpcy5idG5WZXJpZnkgPSB0cnVlO1xyXG4gIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRPYmooJ09DUk9iaicsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gIC8vICAgICAgICAgICAgICAgdGhpcy5zaG93T2NyRm9ybSA9IHRydWU7XHJcbiAgLy8gICAgICAgICAgICAgICB0aGlzLmJ0blZlcmlmeSA9IGZhbHNlO1xyXG4gIC8vICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihTT01FVEhJTkdfV0VOVF9XUk9ORyk7XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICBlcnJvciA9PiB7XHJcbiAgLy8gICAgICAgICAgIHRoaXMuY29uZGlvbkNoZWNrRXJyb3JBbGVydChlcnJvcik7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG4gIGNvbmRpb25DaGVja0Vycm9yQWxlcnQoZXJyb3IpIHtcclxuICAgIGlmIChlcnJvci5zdGF0dXMgPT0gMCkgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoU09NRVRISU5HX1dFTlRfV1JPTkcpO1xyXG4gIH1cclxuICBnZXRVcGxvYWQob2JqKSB7XHJcbiAgICB0aGlzLm9jclZhbGlkYXRpb25TZXJ2aWNlLmdldFVwbG9hZChvYmopLnN1YnNjcmliZShcclxuICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG4gICAgICAgICAgY29uc3QgcmVzRGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgY29uc3QgaW1hZ2VDYXRlZ29yeSA9IHJlc0RhdGE/LmltYWdlQ2F0ZWdvcnk7XHJcbiAgICAgICAgICBjb25zdCBvY3JEb2N1bWVudERldGFpbHMgPSBpbWFnZUNhdGVnb3J5Py5pZF9qc29uWzBdO1xyXG4gICAgICAgICAgdGhpcy52ZXJpZmlEYXRhKG9jckRvY3VtZW50RGV0YWlscyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKFNPTUVUSElOR19XRU5UX1dST05HKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmVyaWZpRGF0YShvY3JEb2N1bWVudERldGFpbHMpIHtcclxuICAgIGNvbnN0IGpzb25Gb3JtID0gdGhpcy5qc29uRm9ybT8uY29tcG9uZW50c1swXTtcclxuICAgIGlmICh0aGlzLmZvcm1SZXNwb25zZSkge1xyXG4gICAgICBjb25zdCBmcm9tQXJyYXkgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm1SZXNwb25zZSk7XHJcbiAgICAgIGZyb21BcnJheT8uZm9yRWFjaChyZXNwb3NlID0+IHtcclxuICAgICAgICBpZiAob2NyRG9jdW1lbnREZXRhaWxzKSB7XHJcbiAgICAgICAgICBjb25zdCBkb2N1bWVudFZhbHVlID0gT2JqZWN0LmtleXMob2NyRG9jdW1lbnREZXRhaWxzKTtcclxuICAgICAgICAgIGRvY3VtZW50VmFsdWU/LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tWZXJpZnkoZWxlbWVudCwgb2NyRG9jdW1lbnREZXRhaWxzLCByZXNwb3NlLCBqc29uRm9ybSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29sdW1uc0pzb24uY29sdW1uc1swXS5jb21wb25lbnRzWzBdLmNvbXBvbmVudHNbMF0uY29udGVudCA9IHRoaXMuY29udGVudEFycmF5Py5qb2luKCcnKTtcclxuICAgIHRoaXMuanNvbkZvcm0uY29tcG9uZW50c1swXS5jb21wb25lbnRzLnNwbGljZSgwLCAwLCBjb2x1bW5zSnNvbik7XHJcbiAgICB0aGlzLnRyaWdnZXJSZWZyZXNoLmVtaXQoe1xyXG4gICAgICBwcm9wZXJ0eTogJ2Zvcm0nLFxyXG4gICAgICB2YWx1ZTogdGhpcy5qc29uRm9ybVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrVmVyaWZ5KGVsZW1lbnQsIG9jckRvY3VtZW50RGV0YWlscywgcmVzcG9zZSwganNvbkZvcm0pIHtcclxuICAgIGlmIChcclxuICAgICAgZWxlbWVudCAmJlxyXG4gICAgICByZXNwb3NlICYmXHJcbiAgICAgIGVsZW1lbnQ/LnRvTG93ZXJDYXNlKCkgPT09IHJlc3Bvc2U/LnRvTG93ZXJDYXNlKCkgJiZcclxuICAgICAgb2NyRG9jdW1lbnREZXRhaWxzW2VsZW1lbnRdPy50b0xvd2VyQ2FzZSgpICE9PSB0aGlzLmZvcm1SZXNwb25zZVtyZXNwb3NlXT8udG9Mb3dlckNhc2UoKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuanNvbkZvcm0uY29tcG9uZW50c1swXS5jb21wb25lbnRzID0ganNvbkZvcm0/LmNvbXBvbmVudHMubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcyAmJiByZXM/LmtleSA9PT0gZWxlbWVudD8udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZW50QXJyYXkucHVzaChgPHAgc3R5bGU9XCJjb2xvcjpyZWQ7XCI+JHtyZXMubGFiZWx9IE5vdCBNYXRjaDwvcD5cXG5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEVtaXR0ZWREYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuc2hvd09jckZvcm0gPSBmYWxzZTtcclxuICAgIHRoaXMuYnRuVmVyaWZ5ID0gdHJ1ZTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgLi4uZGF0YSwgLi4udGhpcy5zdWJtaXR0ZWREYXRhIH07XHJcbiAgfVxyXG59IiwiPGFwcC1hbGVydD48L2FwcC1hbGVydD5cclxuPGRpdiBbbmdDbGFzc109XCJzaG93VGl0bGUgPyAnY2FyZCcgOiAneW91dGhzZWFyY2gtZm9ybWlvJ1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgbXktM1wiICpuZ0lmPVwiaXNUaXRsZVwiPlxyXG4gICAgICA8IS0tIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1jYW5jZWxcIiAoY2xpY2spPVwicmVkaXJlY3QoKVwiICpuZ0lmPVwic2hvd2JhY2tidG5cIj5cclxuICAgICAgICBCYWNrIHt7IHBhcmVudEdyaWRQYWdlICYmICd0byAnICsgcGFyZW50R3JpZFBhZ2UgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxoNiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgbWItMiBtdC0zIGZyb21UaXRsZVwiICpuZ0lmPVwic2hvd1RpdGxlXCI+e3sgaXNUaXRsZSB9fTwvaDY+IC0tPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImJhY2stdG8tbWFpblwiPlxyXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cInJlZGlyZWN0KClcIiAqbmdJZj1cInNob3diYWNrYnRuXCI+e3sgcGFyZW50R3JpZFBhZ2V9fTwvZGl2PlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1RpdGxlXCI+IHt7IGlzVGl0bGUgfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwiIXNob3dPY3JGb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGR5bmFtaWMtcGFnZSBtdC0wXCIgW2hpZGRlbl09XCIhaXNmb3JtSU9cIj5cclxuICAgICAgPGZvcm1pbyAjZm9ybUlPIFtmb3JtXT1cImpzb25Gb3JtXCIgW3JlYWRPbmx5XT1cImlzUmVhZE9ubHlcIiBbc3VibWlzc2lvbl09XCJzdWJtaXR0ZWREYXRhXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgkZXZlbnQpXCJcclxuICAgICAgICAoY2hhbmdlKT1cImN1c3RvbUV2ZW50cygkZXZlbnQpXCIgKGNsaWNrKT1cImN1c3RvbUNsaWNrRXZlbnRzKHN1Ym1pdHRlZERhdGEsICRldmVudClcIlxyXG4gICAgICAgIChjdXN0b21FdmVudCk9XCJjdXN0b21FdmVudHNCdXR0b24oJGV2ZW50KVwiIFtyZWZyZXNoXT1cInRyaWdnZXJSZWZyZXNoXCIgW3N1Ym1pdERvbmVdPVwic3VibWlzc2lvbkRvbmVcIiBbc3VjY2Vzc109XCJzdWJtaXRTdWNjZXNzXCJcclxuICAgICAgICBbZXJyb3JdPVwic3VibWl0RmFpbGVkXCIgKGN1c3RvbUV2ZW50KT1cImN1c3RvbUV2ZW50KCRldmVudClcIj48L2Zvcm1pbz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwic2hvd09jckZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkeW5hbWljLXBhZ2UgbXQtMFwiPlxyXG4gICAgICAgIDxhcHAtb2NyLXZhbGlkYXRpb24gKG9jclJlc3BvbnNlKT1cImdldEVtaXR0ZWREYXRhKCRldmVudClcIiBbY3VycmVudHRlbXBsYXRlUmVzdWx0XT1cInRlbXBsYXRlUmVzdWx0XCJcclxuICAgICAgICAgIFtmb3JtUmVzcG9uc2VEYXRhXT1cImZvcm1SZXNwb25zZVwiIFtzdWJtaXRpb25EYXRhXT1cInN1Ym1pdHRlZERhdGFcIj48L2FwcC1vY3ItdmFsaWRhdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxidXR0b24gc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgaWQ9XCJleHRlcm5hbF9zY2FubmVyXCIgI2V4dGVybmFsX3NjYW5uZXIgbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJidG4taWNvbi1iZ1wiXHJcbiAgKG5neGYtc2VsZWN0KT1cInVwbG9hZEZpbGUoJGV2ZW50KVwiPlxyXG4gIFNjYW5cclxuPC9idXR0b24+XHJcblxyXG5cclxuPG5nLXRlbXBsYXRlICN2YWxpZGF0aW9uUG9wdXA+XHJcbiAgPGRpdiBjbGFzcz1cInAtMyB2YWxpZGF0aW9uLXBvcHVwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXggbWItNFwiPjxkaXYgW2lubmVySFRNTF09XCJjb25maXJtYXRpb25tZXNzYWdlXCI+PC9kaXY+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgcHItMyBtb2RhbC1idXR0b25zXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicHVsbC1yaWdodCBtYi0yIGJ0blwiIFtuZ0NsYXNzXT1cImJ1dHRvbjFTdHlsZVwiICpuZ0lmPVwic2hvd0J1dHRvbjFcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrQ29uZmlybWF0aW9uKGJ1dHRvbjFBY3Rpb24sIGJ1dHRvbjFLZXkpXCI+XHJcbiAgICAgIHt7YnV0dG9uMVRleHR9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicHVsbC1yaWdodCBtYi0yIG1yLTIgYnRuXCIgW25nQ2xhc3NdPVwiYnV0dG9uMlN0eWxlXCIgKm5nSWY9XCJzaG93QnV0dG9uMlwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tDb25maXJtYXRpb24oYnV0dG9uMkFjdGlvbiwgYnV0dG9uMktleSlcIj57e2J1dHRvbjJUZXh0fX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19