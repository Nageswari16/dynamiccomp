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
export class DynamicPageComponent {
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
        // this.getPageTabs();
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
        // if (this.id) {
        //   this.formresponse(this.action);
        // }
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.FormioService }, { token: i3.Store }, { token: MAT_DIALOG_DATA, optional: true }, { token: i4.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicPageComponent, selector: "app-dynamic-page", inputs: { editId: "editId", pageId: "pageId", sourceid: "sourceid", externalParameters: "externalParameters", isReadOnly: "isReadOnly", componentId: "componentId" }, outputs: { afterSubmit: "afterSubmit", submissionDone: "submissionDone" }, providers: [SpeechRecognitionService, OCRService], viewQueries: [{ propertyName: "external_scanner", first: true, predicate: ["external_scanner"], descendants: true }, { propertyName: "validationPopup", first: true, predicate: ["validationPopup"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"], dependencies: [{ kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }, { kind: "component", type: i7.AlertComponent, selector: "app-alert" }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i9.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-page', providers: [SpeechRecognitionService, OCRService], template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL2R5bmFtaWMtdGFiLXBhZ2UvZHluYW1pYy1wYWdlL2R5bmFtaWMtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtcGFnZS9keW5hbWljLXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFFTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQWUsTUFBTSwwQkFBMEIsQ0FBQztBQUduRixPQUFPLEVBQWEsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR2xGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkYsT0FBTyxFQUFFLE1BQU0sRUFBUyxNQUFNLGFBQWEsQ0FBQztBQUs1QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sdURBQXVELENBQUM7Ozs7Ozs7Ozs7O0FBRy9HLE1BQU0sMEJBQTBCLEdBQUcsNEJBQTRCLENBQUM7QUFDaEUsTUFBTSxvQkFBb0IsR0FBRyx1QkFBdUIsQ0FBQztBQU9yRCxNQUFNLE9BQU8sb0JBQW9CO0lBOEd0QjtJQUNDO0lBQ0E7SUFDQTtJQUVBO0lBbEhGLGFBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN6RCxZQUFZLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDaEUsTUFBTSxDQUFNO0lBQ1osS0FBSyxDQUFNO0lBQ1gsUUFBUSxDQUFNO0lBQ2QsU0FBUyxDQUFNO0lBQ04sTUFBTSxDQUFNO0lBQ3JCLEVBQUUsQ0FBTTtJQUNSLGFBQWEsQ0FBTTtJQUNuQixlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUN0QixnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDdEIsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUN0QixlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksQ0FBTTtJQUNWLG9CQUFvQixHQUFrQixFQUFFLENBQUM7SUFDaEMsTUFBTSxDQUFNO0lBQ1osUUFBUSxDQUFTO0lBQ2pCLGtCQUFrQixDQUFTO0lBQ3BDLG9CQUFvQixDQUFNO0lBQzFCLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDZCxTQUFTLENBQWlDO0lBQ25CLGdCQUFnQixDQUFhO0lBQzlCLGVBQWUsQ0FBbUI7SUFDeEQsa0JBQWtCLENBQWlDO0lBQ2xELFVBQVUsQ0FBVTtJQUM3QixRQUFRLENBQVU7SUFDbEIsT0FBTyxDQUFNO0lBQ0gsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDaEQsUUFBUSxDQUFNO0lBQ2QsY0FBYyxDQUFNO0lBQ3BCLFlBQVksQ0FBVTtJQUN0QixrQkFBa0IsQ0FBVTtJQUM1QixTQUFTLENBQU07SUFDZixxQkFBcUIsQ0FBVTtJQUMvQixVQUFVLENBQVM7SUFDbkIsWUFBWSxDQUFTO0lBQ3JCLGNBQWMsQ0FBTTtJQUNwQixVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLGFBQWEsR0FBUSxFQUFFLENBQUM7SUFDeEIsT0FBTyxDQUFNO0lBQ2IsU0FBUyxDQUFNO0lBQ2YsT0FBTyxDQUFNO0lBQ2IsUUFBUSxDQUFTO0lBQ2pCLFlBQVksQ0FBZTtJQUMzQixjQUFjLENBQWU7SUFDN0IsUUFBUSxDQUFXO0lBQ25CLFNBQVMsQ0FBbUI7SUFDNUIsd0JBQXdCLENBQTJCO0lBQ25ELGFBQWEsQ0FBc0I7SUFDbkMsR0FBRyxDQUFhO0lBQ2hCLGVBQWUsQ0FBK0I7SUFDOUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUVqQixNQUFNLENBQWtCO0lBQ3hCLGNBQWMsQ0FBTTtJQUNwQixxQkFBcUIsQ0FBd0I7SUFDN0Msb0JBQW9CLENBQXVCO0lBQzNDLFdBQVcsQ0FBYztJQUN6QixjQUFjLEdBQVEsRUFBRSxDQUFDO0lBQ3pCLGFBQWEsR0FBUSxFQUFFLENBQUM7SUFDeEIsY0FBYyxDQUFTO0lBQ3ZCLGdCQUFnQixDQUFNO0lBQ3RCLFlBQVksQ0FBZTtJQUMzQixZQUFZLENBQU07SUFDbEIsU0FBUyxDQUFVO0lBQ25CLFlBQVksQ0FBUztJQUNyQixNQUFNLENBQVM7SUFDZixXQUFXLENBQVU7SUFDckIsaUJBQWlCLENBQXNCO0lBQ3ZDLFNBQVMsQ0FBeUM7SUFDbEQsaUJBQWlCLENBQU07SUFDdkIsWUFBWSxDQUFNO0lBQ2xCLE1BQU0sQ0FBUztJQUNmLFlBQVksR0FBVSxFQUFFLENBQUM7SUFDekIsY0FBYyxDQUFNO0lBQ3BCLG9CQUFvQixDQUF1QjtJQUMzQyxPQUFPLENBQU07SUFDYixTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLFNBQVMsQ0FBTTtJQUNmLFVBQVUsQ0FBTTtJQUNoQixZQUFZLENBQU07SUFDbEIsS0FBSyxDQUFNO0lBQ1gsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNwQixTQUFTLENBQVc7SUFDVixXQUFXLENBQU07SUFDMUIsaUJBQWlCLENBQWlCO0lBQ2xDLGdCQUFnQixDQUE2QjtJQUM5QyxpQkFBaUIsQ0FBZTtJQUN0QixjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUN2RCxtQkFBbUIsQ0FBUztJQUM1QixXQUFXLENBQU07SUFDakIsV0FBVyxDQUFNO0lBQ2pCLFdBQVcsQ0FBTTtJQUNqQixXQUFXLENBQU07SUFDakIsVUFBVSxDQUFNO0lBQ2hCLFVBQVUsQ0FBSztJQUNmLGFBQWEsQ0FBTTtJQUNuQixhQUFhLENBQU07SUFDbkIsWUFBWSxDQUFVO0lBQ3RCLFlBQVksQ0FBTTtJQUNsQixZQUFZLENBQU07SUFDbEIsTUFBTSxDQUFZO0lBQ2xCLFdBQVcsQ0FBSztJQUNoQixVQUFVLENBQUs7SUFDZixtQkFBbUIsQ0FBTTtJQUN6QixZQUNFLFFBQWtCLEVBQ1gsTUFBYyxFQUNiLEtBQXFCLEVBQ3JCLE9BQXNCLEVBQ3RCLEtBQXNCLEVBQ08sSUFBSSxFQUNqQyxhQUF1QztRQUx4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUV0QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFFL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFjLFdBQVcsQ0FBQyxDQUFDO1FBQzFELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQWUsWUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFXLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBbUIsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBMkIsd0JBQXdCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQXNCLG1CQUFtQixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFhLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF3QixxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF1QixvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFxQixrQkFBa0IsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF1QixvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBVyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQVksU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNsRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN2RTtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztRQUN4RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksWUFBWSxFQUFFLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksWUFBWSxFQUFFLEtBQUssRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDbkM7UUFDRCxJQUFJLFlBQVksRUFBRSxRQUFRLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLGtEQUFrRDtZQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRTtRQUVELE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7UUFFdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9GLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsSUFBSTtRQUNyQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekQsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRCxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDMUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUMzQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQy9ELElBQUksWUFBWSxFQUFFO3dCQUNoQixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBcUIsQ0FBQzt3QkFDckgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQzFDLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0NBQ3JDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dDQUM1QixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQ0FDM0MsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7NkJBQ3pDO2lDQUFNO2dDQUNMLGFBQWEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dDQUNoQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDckMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7NkJBQy9DO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUUsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZTttQkFDOUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7Z0JBQ2hELEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDMUQsSUFBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFBO2FBQ0g7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5RSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN0RixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtpQkFBTSxJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM1RixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtpQkFBTSxJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUMzRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzVFLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFO29CQUMzQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDOUU7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM3RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWUsQ0FBQyxzQkFBZ0M7UUFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YscUNBQXFDO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBRyxzQkFBc0IsRUFBQztvQkFDeEIsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU07d0JBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzFCO3FCQUFLO29CQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3pCO2dCQUNELCtDQUErQztZQUNqRCxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7Z0JBQ0osSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO29CQUNiLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLEtBQU0sR0FBRyxFQUFFO3dCQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO3FCQUNsRztpQkFDRjtZQUNILENBQUMsQ0FDQSxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxRSxJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSTtvQkFDSixxQ0FBcUM7b0JBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDakMsdUNBQXVDO3dCQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1RTthQUFNLElBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDakU7WUFDQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbkY7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQzVGLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ2hGLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BHO1FBRUQsSUFBSSxDQUFDLE9BQU87WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQzVELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQUVELHVDQUF1QztJQUMvQixXQUFXLENBQUMsTUFBVztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLE1BQU0sRUFBRTtnQkFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7YUFDakQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksTUFBTSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzthQUNqRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO2FBQ2hEO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLE1BQU0sRUFBRTtnQkFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7YUFDakQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUQ7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHO29CQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPO2lCQUNqQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRzt3QkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO3FCQUNyQixDQUFDO29CQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDeEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztpQkFDbkM7YUFDRjtZQUVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxJQUFJLFFBQVEsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLG1CQUFtQixDQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztZQUN2TCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztZQUMvRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1lBQ25GLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNoSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3hQO1lBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekQsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQVc7UUFDckIsT0FBTyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNyRSxDQUFDO0lBRUQsc0JBQXNCLENBQUMsTUFBTTtRQUMzQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsV0FBVyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUMxRCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQztZQUNuRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDthQUFNLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSywwQkFBMEIsRUFBRTtZQUMzRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBQ0QscUNBQXFDO0lBQ3JDLEtBQUssQ0FBQyxnQkFBZ0I7UUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFRLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2RyxPQUFPLElBQUksQ0FBQztRQUNaLE1BQU07SUFDUixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0UsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUNwRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFFWixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM3RSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNySCxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUM7U0FDRjtRQUNELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBQ0Qsd0JBQXdCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3ZCO1FBQ0QsU0FBUztRQUNULElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0csSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM3QztTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzFCO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsaUJBQWlCO1FBQ2pCLG9DQUFvQztRQUNwQyxJQUFJO0lBQ04sQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFNO1FBQ2pCLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7Z0JBQzdGLElBQUksTUFBTSxFQUFFLElBQUksSUFBSSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDdEY7cUJBQU0sSUFBSSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUM5RjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFTO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU07UUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNwRDtRQUNELElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFFBQVEsSUFBSSxFQUFFLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBTTtRQUNwQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUMvRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDcEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sMkJBQTJCLENBQUMsSUFBUztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzlDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwyRUFBMkU7SUFDM0UsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFNBQVM7UUFDdkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLEVBQUUsU0FBUyxDQUFDO1FBQ3JGLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUNsRCxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUM3QyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2Qyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLHdCQUF3QixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLEVBQUUsU0FBUyxDQUFDO1FBQ3JGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELElBQUksU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLGFBQWEsSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQzVFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksRUFBRSxpQkFBaUIsQ0FBQTtTQUNuRDtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsVUFBVTtRQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxVQUFVLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNSO1FBQ0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUNwRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRTtnQkFDckQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNqSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBRXJGO1NBQ0Y7UUFDRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RCxNQUFNLElBQUksR0FDUixjQUFjLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbEYsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUMxQixDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO1FBQ3BFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0JBQzNELE1BQU0sV0FBVyxHQUFHO29CQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xCLE1BQU0sV0FBVyxHQUFHO29CQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxNQUFNLFdBQVcsR0FBRztvQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwQztTQUNGO2FBQU07WUFDTCxNQUFNLFdBQVcsR0FBRztnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUM7WUFDRixNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUQsSUFBRyxnQkFBZ0IsS0FBSyxpQkFBaUIsRUFBRztnQkFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6RDtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO2dCQUN2TCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwQztTQUNGO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLFdBQVc7UUFDMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDM0UsTUFBTSxDQUFDLEVBQUU7WUFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV0QyxrQkFBa0I7WUFDbEIsd0ZBQXdGO1lBQ3hGLHFCQUFxQjtZQUNyQixJQUFJO1lBRUosSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDbkcsSUFBSSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pHLElBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO29CQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBRSxJQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxtQkFBbUI7d0JBQzVMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjtZQUFBLENBQUM7WUFDSixrRUFBa0U7WUFDbEUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3hJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQ0QsTUFBTSxDQUFDLEVBQUU7WUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFNO1FBQ2xCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO1lBQy9ELElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7WUFDL0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUMzRSxxQkFBcUI7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsV0FBVztRQUNwQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDM0QsSUFBSSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRSxJQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxRixJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUMzRixNQUFNLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixJQUFHLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLG1CQUFtQixJQUFJLElBQUksS0FBSyxjQUFjLENBQUMsRUFBQztnQkFDekYsSUFBRyxJQUFJLEtBQUssU0FBUztvQkFDbkIsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDO29CQUNqSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1YsSUFBRyxJQUFJLEtBQUssbUJBQW1CLElBQUksSUFBSSxLQUFLLGNBQWM7b0JBQ3hELFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtvQkFDaEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUMzRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO29CQUMvRCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDeEI7cUJBQU0sSUFBSSxNQUFNLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO29CQUMvRCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIsSUFBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUM7d0JBQ25HLElBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFOzRCQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxtQkFBbUI7Z0NBQzFMLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMzRjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ2pCO3FCQUNGO2lCQUNBO3FCQUFNO29CQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNmLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRztvQkFDbkIsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRO2lCQUM1QixDQUFDO2dCQUNGLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ25HLElBQUksY0FBYyxFQUFFLGlCQUFpQixFQUFFO29CQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUNwQztnQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2xELElBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7b0JBQ3BHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtRQUNILENBQUMsRUFDRCxNQUFNLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUNGLENBQUM7SUFFSixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRSxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3pDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDeEIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSztRQUM1QixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDL0M7U0FDRjtJQUNILENBQUM7SUFFRCxRQUFRO1FBRU4sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6RyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNoRTtRQUNKLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUNELGlDQUFpQztRQUNqQywrR0FBK0c7UUFDL0csd0VBQXdFO1FBQ3hFLHVFQUF1RTtRQUN2RSxTQUFTO1FBQ1Qsb0VBQW9FO1FBQ3BFLHVLQUF1SztRQUN2SyxpREFBaUQ7UUFDakQsMEJBQTBCO1FBQzFCLDRIQUE0SDtRQUM1SCxrRkFBa0Y7UUFDbEYseUdBQXlHO1FBQ3pHLElBQUk7SUFDTixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBSztRQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDbkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzlFLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsOEJBQThCLENBQUM7Z0JBQ3pELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsOEJBQThCLENBQUM7YUFDeEQ7WUFDRCxNQUFNLElBQUksR0FBRztnQkFDWCxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ3BCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixRQUFRLEVBQUUsUUFBUTthQUNuQixDQUFDO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxjQUFjLENBQUMsSUFBSTtRQUNqQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNyRCxNQUFNLENBQUMsRUFBRTtnQkFDUCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUN0QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekI7cUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDckM7cUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDbkM7WUFDSCxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxlQUFlO1FBQzFCLElBQUksZUFBZSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDckQsS0FBSyxNQUFNLElBQUksSUFBSSxlQUFlLEVBQUU7Z0JBQ2xDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDYjtTQUNGO2FBQU07WUFDTCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFHO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztZQUN0RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUN6RDtRQUNELHNJQUFzSTtRQUN0SSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsRUFBRSxTQUFTLENBQUE7UUFDbEYsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsU0FBUyxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksRUFBRSxpQkFBaUIsQ0FBQztZQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxXQUFXLENBQUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsV0FBVyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxVQUFVLENBQUM7WUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUUsYUFBYSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxFQUFFLGFBQWEsQ0FBQztZQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxZQUFZLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsWUFBWSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYTtnQkFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzVGO1FBRUgsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO2dCQUN0QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRCxTQUFTLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO2dCQUM3QyxTQUFTLENBQUMsU0FBUyxHQUFHLDJEQUEyRCxDQUFDO2dCQUNsRixPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQixTQUFTLENBQUMsZ0JBQWdCLENBQ3hCLE9BQU8sRUFDUCxHQUFHLENBQUMsRUFBRTtvQkFDSixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDaEQsQ0FBQyxFQUNELEtBQUssQ0FDTixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDbEMsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNO1lBQzNELENBQUMsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQzthQUNqRDtZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTO1lBQzlDLFdBQVc7WUFDWCxLQUFLLENBQUMsRUFBRTtnQkFDTixJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNyQyxhQUFhLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ3pELElBQUksVUFBVSxFQUFFO29CQUNkLFVBQVUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO2lCQUNsQztZQUNILENBQUM7WUFDRCxTQUFTO1lBQ1QsR0FBRyxDQUFDLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLGdCQUFnQixDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQzthQUN2RDtZQUNELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFDRCxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHO1FBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsY0FBYyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDbkQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7U0FDdkQ7UUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVDO2FBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLGFBQWEsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLGdCQUFnQixFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sNkZBQTZGLENBQUM7SUFDdkcsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLGlJQUFpSSxDQUFDO0lBQzNJLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxnREFBZ0QsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMkJBQTJCLENBQUMsSUFBSTtRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBRyxJQUFJLENBQUMsaUJBQWlCO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsb0JBQW9CO1lBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBc0I7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxXQUFXLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNuRCxRQUFRLENBQUMsRUFBRTtZQUNULElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQ0QsSUFBSSxDQUFDLEVBQUU7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBTTtRQUN2QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUNyRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtnQkFDMUUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDakMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3hEO2FBQ0Y7aUJBQU07Z0JBQ0wsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JHLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RyxNQUFNLFNBQVMsR0FBRyxFQUFFLEdBQUcsVUFBVSxFQUFFLEdBQUcsVUFBVSxFQUFFLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxJQUFJO1FBQ3RCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNLElBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUs7WUFDVixJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVE7WUFDdEIsSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXO1lBQ3pCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztZQUN6QyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQ25DO1lBQ0EsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7Z0JBQ3hELE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQzthQUM1QjtZQUNELE1BQU0sVUFBVSxHQUFHO2dCQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNwQixDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFakMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQztTQUNGO2FBQU07WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3JDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxnQ0FBZ0MsQ0FBQyxLQUFLO1FBQ3BDLElBQ0UsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLG9CQUFvQjtZQUN2RCxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsa0JBQWtCO1lBQ2hDLEtBQUssRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUMzQjtZQUNBLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksS0FBSyxFQUFFLElBQUksRUFBRSxjQUFjLEtBQUssSUFBSSxFQUFFO2dCQUN4QyxHQUFHLEdBQUcsc0JBQXNCLENBQUM7YUFDOUI7aUJBQU0sSUFBSSxLQUFLLEVBQUUsSUFBSSxFQUFFLGNBQWMsS0FBSyxJQUFJLEVBQUU7Z0JBQy9DLEdBQUcsR0FBRyw2QkFBNkIsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxHQUFHLEdBQUcsd0JBQXdCLENBQUM7YUFDaEM7WUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FDbkQsTUFBTSxDQUFDLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztvQkFDdkIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYTtpQkFDMUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsR0FBRztRQUNiLElBQUksR0FBRyxLQUFLLGNBQWMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHdEQUF3RCxDQUFDLENBQUMsQ0FBQztTQUNsRjthQUFNLElBQUksR0FBRyxLQUFLLDZCQUE2QixFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTtZQUNuQyxRQUFRLEVBQUUsT0FBTyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7U0FDcEQsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3RFLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDWixNQUFNLGdCQUFnQixHQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlELE1BQU0sdUJBQXVCLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDcEcsQ0FBQyxJQUFTLEVBQUUsRUFBRTtvQkFDWixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTt3QkFDOUIsTUFBTSxNQUFNLEdBQUc7NEJBQ2IsSUFBSSxFQUFFLE9BQU8sTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFOzRCQUMvQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJO3lCQUN2QyxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7d0JBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7NEJBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzt5QkFDdkI7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3lCQUN4QjtxQkFDRjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3FCQUMvQztnQkFDSCxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUU7b0JBQ04sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQ0YsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0JBQXNCLENBQUMsS0FBSztRQUMxQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELFNBQVMsQ0FBQyxHQUFHO1FBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQ2hELENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDWCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNuQixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUN6QixNQUFNLGFBQWEsR0FBRyxPQUFPLEVBQUUsYUFBYSxDQUFDO2dCQUM3QyxNQUFNLGtCQUFrQixHQUFHLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQyxFQUNELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDeEIsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsa0JBQWtCO1FBQzNCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxTQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzQixJQUFJLGtCQUFrQixFQUFFO29CQUN0QixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ3RELGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQy9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM1RSxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9CQUFvQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsUUFBUTtRQUNqRSxJQUNFLE9BQU87WUFDUCxPQUFPO1lBQ1AsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRSxXQUFXLEVBQUU7WUFDakQsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFDeEY7WUFDQSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RFLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEtBQUssT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFO29CQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLEtBQUssa0JBQWtCLENBQUMsQ0FBQztpQkFDOUU7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELGNBQWMsQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxRCxDQUFDO3dHQXp4Q1Usb0JBQW9CLGdKQWtIVCxlQUFlOzRGQWxIMUIsb0JBQW9CLDRSQUZwQixDQUFDLHdCQUF3QixFQUFFLFVBQVUsQ0FBQyx3VUNqRG5ELHcvRUFpREE7OzRGREVhLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSxrQkFBa0IsYUFHakIsQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLENBQUM7OzBCQW9IOUMsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxlQUFlO21GQTNHNUIsTUFBTTtzQkFBZCxLQUFLO2dCQVdHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFJeUIsZ0JBQWdCO3NCQUE5QyxTQUFTO3VCQUFDLGtCQUFrQjtnQkFDQyxlQUFlO3NCQUE1QyxTQUFTO3VCQUFDLGlCQUFpQjtnQkFFbkIsVUFBVTtzQkFBbEIsS0FBSztnQkFHSSxXQUFXO3NCQUFwQixNQUFNO2dCQTBCUCxNQUFNO3NCQURMLFNBQVM7dUJBQUMsUUFBUTtnQkFnQ1QsV0FBVztzQkFBbkIsS0FBSztnQkFJRyxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2csTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1pb0NvbXBvbmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IEZpbGVFcnJvciwgTmd4ZlVwbG9hZGVyU2VydmljZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBjb2x1bW5zSnNvbiB9IGZyb20gJy4uLy4uL0Bjb3JlL0pTT04uY29uc3QnO1xyXG5pbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3NwZWVjaC1yZWNvZ25pdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT0NSU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3BsYXRmb3JtLWRhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY3NlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWNzZWFyY2guc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2F0dGFjaG1lbnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPY3JWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1pb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2Zvcm1pby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHB1Ymxpc2hFdmVudCB9IGZyb20gJy4uLy4uL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFN0YXRlIH0gZnJvbSAnLi4vLi4vQHNoYXJlZC9tYXN0ZXItdmlldy1zdGF0ZS9tYXN0ZXItdmlldy5zdGF0ZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9jb3JlLnN0YXRlJztcclxuaW1wb3J0IHsgc2VsZWN0Q29tcG9uZW50Q29uZmlnQnlJZCwgc2VsZWN0RXZlbnQgfSBmcm9tICcuLi8uLi9Ac2hhcmVkL21hc3Rlci12aWV3LXN0YXRlL21hc3Rlci12aWV3LnNlbGVjdG9ycyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuY29uc3QgU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcgPSAnU3RydWN0dXJlZCBEZWNpc2lvbiBNYWtpbmcnO1xyXG5jb25zdCBTT01FVEhJTkdfV0VOVF9XUk9ORyA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyEnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1keW5hbWljLXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtcGFnZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1NwZWVjaFJlY29nbml0aW9uU2VydmljZSwgT0NSU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIHByaXZhdGUgc3VibWl0U3VjY2VzczogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHJpdmF0ZSBzdWJtaXRGYWlsZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGZvcm1JZDogYW55O1xyXG4gIHRhYklkOiBhbnk7XHJcbiAganNvbkZvcm06IGFueTtcclxuICBmcm9tVGl0bGU6IGFueTtcclxuICBASW5wdXQoKSBlZGl0SWQ6IGFueTtcclxuICBpZDogYW55O1xyXG4gIHN1Ym1pdHRlZERhdGE6IGFueTtcclxuICBhZnRlckVudGl0eU5hbWUgPSAnJztcclxuICBhZnRlclJ1bGVBcHBOYW1lID0gJyc7XHJcbiAgYmVmb3JlRW50aXR5TmFtZSA9ICcnO1xyXG4gIGJlZm9yZVJ1bGVBcHBOYW1lID0gJyc7XHJcbiAgYmVmb3JlcnVsZW1ldGhvZCA9ICcnO1xyXG4gIGFmdGVycnVsZW1ldGhvZCA9ICcnO1xyXG4gIHVzZXI6IGFueTtcclxuICBtdWx0aVNlbGVjdERyb3BEb3duczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIEBJbnB1dCgpIHBhZ2VJZDogYW55O1xyXG4gIEBJbnB1dCgpIHNvdXJjZWlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZXh0ZXJuYWxQYXJhbWV0ZXJzOiBzdHJpbmc7XHJcbiAgcGFnZURhdGFTdWJzY3JpcHRpb246IGFueTtcclxuICBpc0RpYWxvZ1BvcHVwID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuICBAVmlld0NoaWxkKCdleHRlcm5hbF9zY2FubmVyJykgZXh0ZXJuYWxfc2Nhbm5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd2YWxpZGF0aW9uUG9wdXAnKSB2YWxpZGF0aW9uUG9wdXA6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgcHJpdmF0ZSB2YWxpZGF0aW9uUG9wdXBSZWY6IE1hdERpYWxvZ1JlZjxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuICBASW5wdXQoKSBpc1JlYWRPbmx5OiBib29sZWFuO1xyXG4gIHNob3dCYWNrOiBib29sZWFuO1xyXG4gIGlzVGl0bGU6IGFueTtcclxuICBAT3V0cHV0KCkgYWZ0ZXJTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBwZXJzb25JZDogYW55O1xyXG4gIHRyaWdnZXJSZWZyZXNoOiBhbnk7XHJcbiAgZnJvbVdvcmtGbG93OiBib29sZWFuO1xyXG4gIGNsaWNrZWRTZXJ2aWNlQ2FzZTogYm9vbGVhbjtcclxuICBzZXJ2aWNlSWQ6IGFueTtcclxuICBzcGVlY2hSZWNvZ25pbml0aW9uT246IGJvb2xlYW47XHJcbiAgc3BlZWNoRGF0YTogc3RyaW5nO1xyXG4gIG5vdGlmaWNhdGlvbjogc3RyaW5nO1xyXG4gIG9yZ2FuaXphdGlvbklkOiBhbnk7XHJcbiAgRm9ybUlucHV0cyA9IFtdO1xyXG4gIHNjYW5uZXJDb25maWc6IGFueSA9IHt9O1xyXG4gIHRhYkRhdGE6IGFueTtcclxuICBuYXJyYXRpdmU6IGFueTtcclxuICBwdXJwb3NlOiBhbnk7XHJcbiAgcGFnZXR5cGU6IHN0cmluZztcclxuICBsb2NhbHN0b3JhZ2U6IExvY2FsU2VydmljZTtcclxuICBzZXNzaW9uU3RvcmFnZTogTG9jYWxTZXJ2aWNlO1xyXG4gIGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICBkYXRhU3RvcmU6IERhdGFTdG9yZVNlcnZpY2U7XHJcbiAgc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlOiBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2U7XHJcbiAgdXBsb2FkU2VydmljZTogTmd4ZlVwbG9hZGVyU2VydmljZTtcclxuICBvY3I6IE9DUlNlcnZpY2U7XHJcbiAgYXBwb2ludG1lbnRMaXN0OiBQcm9taXNlPGJvb2xlYW4+IHwgdW5kZWZpbmVkO1xyXG4gIGlzZm9ybUlPID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZCgnZm9ybUlPJylcclxuICBmb3JtSU86IEZvcm1pb0NvbXBvbmVudDtcclxuICBjdXJyZW50WW91dGhJZDogYW55O1xyXG4gIGR5bmFtaWNUYWJQYWdlU2VydmljZTogRHluYW1pY1RhYlBhZ2VTZXJ2aWNlO1xyXG4gIGR5bmFtaWNTZWFyY2hTZXJ2aWNlOiBEeW5hbWljc2VhcmNoU2VydmljZTtcclxuICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XHJcbiAgYXR0YWNobWVudEluZm86IGFueSA9IHt9O1xyXG4gIHVwbG9hZGVkRmlsZXM6IGFueSA9IFtdO1xyXG4gIHBhcmVudEdyaWRQYWdlOiBzdHJpbmc7XHJcbiAgcGFyZW50R3JpZFBhZ2VJZDogYW55O1xyXG4gIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlO1xyXG4gIHVwbG9hZGVkRmlsZTogYW55O1xyXG4gIGlzT2NyRm9ybTogYm9vbGVhbjtcclxuICBkb2N1bWVudFR5cGU6IHN0cmluZztcclxuICBpbWdVcmw6IHN0cmluZztcclxuICBzaG93T2NyRm9ybTogYm9vbGVhbjtcclxuICBhdHRhY2htZW50U2VydmljZSE6IEF0dGFjaG1lbnRzU2VydmljZTtcclxuICBpbWFnZURhdGE6IHsgY29udGVudFR5cGU6IGFueTsgZmlsZU5hbWU6IHN0cmluZyB9O1xyXG4gIHRhYmxlc2NoZW1hY29uZmlnOiBhbnk7XHJcbiAgZm9ybVJlc3BvbnNlOiBhbnk7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgY29udGVudEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gIHRlbXBsYXRlUmVzdWx0OiBhbnk7XHJcbiAgb2NyVmFsaWRhdGlvblNlcnZpY2U6IE9jclZhbGlkYXRpb25TZXJ2aWNlO1xyXG4gIGRhdGFTdWI6IGFueTtcclxuICBidG5WZXJpZnkgPSBmYWxzZTtcclxuICBlZGl0VmFsdWU6IGFueTtcclxuICBsb2dnZWRVc2VyOiBhbnk7XHJcbiAgcHJvdmlkZXJEYXRhOiBhbnk7XHJcbiAgY2hlY2s6IGFueTtcclxuICBzaG93YmFja2J0biA9IGZhbHNlO1xyXG4gIHNob3dUaXRsZSA6IGJvb2xlYW47XHJcbiAgIEBJbnB1dCgpIGNvbXBvbmVudElkOiBhbnk7XHJcbiAgIHNlbGVjdGVkQ29tcG9uZW50OiBDb21wb25lbnRTdGF0ZTtcclxuICAgY29tcG9uZW50Q29uZmlnJDogT2JzZXJ2YWJsZTxDb21wb25lbnRTdGF0ZT47XHJcbiAgZXZlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBAT3V0cHV0KCkgc3VibWlzc2lvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KCk7XHJcbiAgY29uZmlybWF0aW9ubWVzc2FnZTogc3RyaW5nO1xyXG4gIHNob3dCdXR0b24xOiBhbnk7XHJcbiAgc2hvd0J1dHRvbjI6IGFueTtcclxuICBidXR0b24xVGV4dDogYW55O1xyXG4gIGJ1dHRvbjJUZXh0OiBhbnk7XHJcbiAgYnV0dG9uMUtleTogYW55O1xyXG4gIGJ1dHRvbjJLZXk6YW55O1xyXG4gIGJ1dHRvbjFBY3Rpb246IGFueTtcclxuICBidXR0b24yQWN0aW9uOiBhbnk7XHJcbiAgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxyXG4gIGJ1dHRvbjFTdHlsZTogYW55O1xyXG4gIGJ1dHRvbjJTdHlsZTogYW55O1xyXG4gIGRpYWxvZzogTWF0RGlhbG9nO1xyXG4gIGh0dHBTZXJ2aWNlOmFueTtcclxuICBhcHBTZXJ2aWNlOmFueTtcclxuICBmYWxsYmFja0lkRnJvbVJvdXRlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgX2Zvcm1JTzogRm9ybWlvU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBkYXRhLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ107XHJcbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlID0gcmVzWydBUFBTRVJWSUNFJ107XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UgPSByZXNbJ0FMRVJUU0VSVklDRSddO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGluamVjdG9yLmdldDxBdXRoU2VydmljZT4oQXV0aFNlcnZpY2UpO1xyXG4gICAgLy8gdGhpcy5hbGVydFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QWxlcnRTZXJ2aWNlPihBbGVydFNlcnZpY2UpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2UgPSBpbmplY3Rvci5nZXQ8TG9jYWxTZXJ2aWNlPihMb2NhbFNlcnZpY2UpO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IGluamVjdG9yLmdldDxMb2NhdGlvbj4oTG9jYXRpb24pO1xyXG4gICAgdGhpcy5kYXRhU3RvcmUgPSBpbmplY3Rvci5nZXQ8RGF0YVN0b3JlU2VydmljZT4oRGF0YVN0b3JlU2VydmljZSk7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uU2VydmljZSA9IGluamVjdG9yLmdldDxTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2U+KFNwZWVjaFJlY29nbml0aW9uU2VydmljZSk7XHJcbiAgICB0aGlzLnVwbG9hZFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8Tmd4ZlVwbG9hZGVyU2VydmljZT4oTmd4ZlVwbG9hZGVyU2VydmljZSk7XHJcbiAgICB0aGlzLm9jciA9IGluamVjdG9yLmdldDxPQ1JTZXJ2aWNlPihPQ1JTZXJ2aWNlKTtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNUYWJQYWdlU2VydmljZT4oRHluYW1pY1RhYlBhZ2VTZXJ2aWNlKTtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8RHluYW1pY3NlYXJjaFNlcnZpY2U+KER5bmFtaWNzZWFyY2hTZXJ2aWNlKTtcclxuICAgIHRoaXMuYXR0YWNobWVudFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QXR0YWNobWVudHNTZXJ2aWNlPihBdHRhY2htZW50c1NlcnZpY2UpO1xyXG4gICAgdGhpcy5vY3JWYWxpZGF0aW9uU2VydmljZSA9IGluamVjdG9yLmdldDxPY3JWYWxpZGF0aW9uU2VydmljZT4oT2NyVmFsaWRhdGlvblNlcnZpY2UpO1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8TmdiTW9kYWw+KE5nYk1vZGFsKTtcclxuICAgIHRoaXMuZGlhbG9nID0gaW5qZWN0b3IuZ2V0PE1hdERpYWxvZz4oTWF0RGlhbG9nKTtcclxuICAgIHRoaXMudXNlciA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaigndXNlcicpO1xyXG4gICAgaWYgKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3BhcmVudEdyaWRQYWdlJykpIHtcclxuICAgICAgdGhpcy5zaG93YmFja2J0biA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHBhcmVudEdyaWRQYWdlT2JqID0gSlNPTi5wYXJzZSh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYXJlbnRHcmlkUGFnZScpKTtcclxuICAgICAgY29uc3QgY3VycmVudHBhZ2UgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYWdlbmFtZScpO1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlID0gY3VycmVudHBhZ2UgPyBjdXJyZW50cGFnZSA6ICcnO1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlSWQgPSBwYXJlbnRHcmlkUGFnZU9iaiA/IHBhcmVudEdyaWRQYWdlT2JqLmlkIDogJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9yZ2FuaXphdGlvbklkID0gdGhpcy51c2VyPy51c2VyV29ya0luZm8/Lm9yZ2FuaXphdGlvbj8uaWQ7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGFnZVVzZXJEYXRhID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLmNvbmRpdGlvbkNoZWNrRGF0YShkYXRhKTtcclxuICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmNsaWNrYWJsZURhdGE7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZURhdGEgPSB0aGlzLnJvdXRlcj8uZ2V0Q3VycmVudE5hdmlnYXRpb24oKT8uZXh0cmFzPy5zdGF0ZTtcclxuICAgIHRoaXMuc2hvd0JhY2sgPSBuYXZpZ2F0ZURhdGE/LmV4dGVybmFsTGluayA/IHRydWUgOiBmYWxzZTtcclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LmlzUmVhZE9ubHkpIHtcclxuICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LnRpdGxlKSB7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9IG5hdmlnYXRlRGF0YS50aXRsZTtcclxuICAgIH1cclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LnBlcnNvbklkKSB7XHJcbiAgICAgIHRoaXMucGVyc29uSWQgPSBuYXZpZ2F0ZURhdGEucGVyc29uSWQ7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQZXJzb25JZCA9IG5hdmlnYXRlRGF0YS5wZXJzb25JZDtcclxuICAgIH1cclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwZWVjaERhdGEgPSAnJztcclxuICAgIGlmIChoaXN0b3J5LnN0YXRlLnRpdGxlKSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3RpdGxlJywgaGlzdG9yeT8uc3RhdGU/LnRpdGxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoaXMuaXNUaXRsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3RpdGxlJyk7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9ICcgLyAnICsgJ0FkZCAnICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2V0LXRpdGxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnZXQtdGl0bGUnKTtcclxuICAgIGlmIChnZXRUaXRsZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmlzVGl0bGUgPSAnQWRkICcgKyBnZXRUaXRsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudFlvdXRoSWQgPSB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICB0aGlzLmF0dGFjaG1lbnRJbmZvID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLkZvcm1JbnB1dHMgPSBbXTtcclxuICAgIHRoaXMudHJpZ2dlclJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB0aGlzLmlzUmVhZE9ubHkgPSBoaXN0b3J5Py5zdGF0ZT8uaXNSZWFkT25seSA/IHRydWUgOiB0aGlzLmlzUmVhZE9ubHk7XHJcbiAgICB0aGlzLnBlcnNvbklkID0gaGlzdG9yeT8uc3RhdGU/LnBlcnNvbklkO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5vbkNoYW5nZVBlcnNvbklkID0gaGlzdG9yeT8uc3RhdGU/LnBlcnNvbklkO1xyXG5cclxuICAgIHRoaXMuc2hvd0JhY2sgPSAoaGlzdG9yeT8uc3RhdGU/LmV4dGVybmFsTGluayAmJiAhaGlzdG9yeT8uc3RhdGU/LmlzSGlkZUJhY2spIHx8IHRoaXMuc2hvd0JhY2s7XHJcbiAgICB0aGlzLnBhZ2VJZCA9IGhpc3Rvcnk/LnN0YXRlPy5wYWdlSWQgPyBoaXN0b3J5Py5zdGF0ZT8ucGFnZUlkIDogdGhpcy5wYWdlSWQ7XHJcbiAgICB0aGlzLmFjdGlvbiA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ2dyaWRBY3Rpb24nKSB8fCB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdncmlkQWN0aW9uJyk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdncmlkQWN0aW9uJywgdGhpcy5hY3Rpb24pXHJcbiAgICB0aGlzLmJ0blZlcmlmeSA9IHRoaXMuYWN0aW9uID09PSAnZWRpdCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCd0YWInKSkge1xyXG4gICAgICB0aGlzLnNob3diYWNrYnRuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd1RpdGxlID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dUaXRsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrRGF0YShkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGEuZWRpdElkID8gZGF0YS5lZGl0SWQgOiBudWxsO1xyXG4gICAgICB0aGlzLmlzRGlhbG9nUG9wdXAgPSBkYXRhLmlzUG9wdXAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZUlkID0gZGF0YS5wYWdlSWQgPyBkYXRhLnBhZ2VJZCA6IHRoaXMucGFnZUlkO1xyXG4gICAgICB0aGlzLmlzUmVhZE9ubHkgPSBkYXRhLmlzUmVhZE9ubHkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZWRVc2VyID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFNoYXJlZE1lc3NhZ2UoZGF0YSk7XHJcbiAgICAgIHRoaXMucm91dGVyUGFnZURhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnNvdXJjZUlkU2VydmljZS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhICE9ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlSWQgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uuc291cmNlSWRTZXJ2aWNlLm5leHQoJycpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tlZFNlcnZpY2VDYXNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbGxHZXRBUEkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5yZXN1bHQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQgIT0gJycpIHtcclxuICAgICAgICB0aGlzLmFmdGVyU3VibWl0LmVtaXQocmVzdWx0KTtcclxuICAgICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnJlc3VsdC5uZXh0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1JTykge1xyXG4gICAgICB0aGlzLmZvcm1JTy5mb3JtaW9SZWFkeS50aGVuKGZvcm1JbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgZm9ybUluc3RhbmNlLnJlYWR5LnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZVBhc3N3b3JkJyk7XHJcbiAgICAgICAgICBpZiAodG9nZ2xlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiZGF0YVske3RvZ2dsZUJ1dHRvblsnYXJpYUxhYmVsJ119XVwiXWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGFzc3dvcmRGaWVsZC50eXBlID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtZXllLXNsYXNoJyk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtZXllJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtZXllJyk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtZXllLXNsYXNoJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMuZXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEV2ZW50KSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmV2ZW50TmFtZSA9PT0gJ3N1Ym1pdCcgJiYgZXZlbnQucGF5bG9hZC5zZXR0aW5ncy5vblN1Ym1pdFJlZnJlc2hcclxuICAgICAgICAmJiBldmVudC5wYXlsb2FkLnNldHRpbmdzLm9uU3VibWl0UmVmcmVzaFdpZGdldHMpIHtcclxuICAgICAgICAgIGV2ZW50LnBheWxvYWQuc2V0dGluZ3Mub25TdWJtaXRSZWZyZXNoV2lkZ2V0cy5mb3JFYWNoKHggPT57XHJcbiAgICAgICAgICBpZihbJ0FUUEJETScsICdGRlAnXS5pbmNsdWRlcyh4LnBhZ2VUeXBlKSkgIHRoaXMuZm9ybUlkID0geC5pZDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcodHJ1ZSk7IFxyXG4gICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByb3V0ZXJQYWdlRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLmZvcm1JZCA9IGRhdGEucGFnZUlkO1xyXG4gICAgaWYgKCF0aGlzLmZvcm1JZCkge1xyXG4gICAgICB0aGlzLmZvcm1JZCA9IHRoaXMucGFnZUlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wb25lbnRDb25maWckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDb21wb25lbnRDb25maWdCeUlkKHRoaXMuY29tcG9uZW50SWQpKSk7XHJcbiAgICB0aGlzLmNvbXBvbmVudENvbmZpZyQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5zZWxlY3RlZENvbXBvbmVudCA9IGRhdGEpO1xyXG4gICAgdGhpcy5ldmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0RXZlbnQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICB0aGlzLnNob3diYWNrYnRuID0gZmFsc2U7XHJcbiAgICAgIGlmIChldmVudCAmJiBldmVudC5ldmVudE5hbWUgPT09ICdlZGl0JyAmJiBldmVudC5wYXlsb2FkLm1hcHBpbmdGb3JtSWQgPT09IHRoaXMucGFnZUlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgICAgICB0aGlzLmdldFJvdXRlckNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGV2ZW50ICYmIGV2ZW50LmV2ZW50TmFtZSA9PT0gJ3ZpZXcnICYmIGV2ZW50LnBheWxvYWQubWFwcGluZ0Zvcm1JZCA9PT0gdGhpcy5wYWdlSWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWRpdElkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZihldmVudCAmJiBldmVudC5ldmVudE5hbWUgPT09ICdhZGQnICYmIGV2ZW50LnBheWxvYWQubWFwcGluZ0Zvcm1JZCA9PT0gdGhpcy5wYWdlSWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFNvdXJjZSgpO1xyXG4gICAgLy8gdGhpcy5nZXRQYWdlVGFicygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVRhYnMoKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRQYWdlQnlJZCh0aGlzLmZvcm1JZCkuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdPy5hY3RpdmVWZXJzaW9uPy5wYWdlbmFtZSkge1xyXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2V0LXRpdGxlJywgcmVzdWx0LmRhdGFbMF0/LmFjdGl2ZVZlcnNpb24/LnBhZ2VuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWJJZCA9IHJlc3VsdC5kYXRhWzBdLmFjdGl2ZVZlcnNpb24uaWQ7XHJcbiAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcoKTtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSAnQWRkICcgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnZXQtdGl0bGUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRSb3V0ZXJDb25maWcoaXNDb21wb3NpdGVQYWdlUmVmcmVzaD86IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmZvcm1JZCkge1xyXG4gICAgICAvLyBnZXQgY29uZmlndXJlIFVSTCBnZXQscG9zdCxwdXQgVVJMXHJcbiAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbigpLnRoZW4oY29uZmlnID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb25maWcpO1xyXG4gICAgICAgIGlmKGlzQ29tcG9zaXRlUGFnZVJlZnJlc2gpe1xyXG4gICAgICAgICAgaWYoY29uZmlnLmRhdGEucGFnZURldGFpbHMuaWQgPT0gdGhpcy5mb3JtSWQpXHJcbiAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKGNvbmZpZyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICB0aGlzLmdldFRlbXBsYXRlKGNvbmZpZyk7ICAgXHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgICAvLyBnZXQgUGFnZSBjb25maWd1cmF0aW9uIFRlbXBsYXRlIERhdGEgICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIGlmIChlcnIuZXJyb3IpIHtcclxuICAgICAgICAgIGlmIChlcnI/LmVycm9yPy5zdGF0dXNDb2RlID09PSAgNDAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKCdZb3UgZG9u4oCZdCBoYXZlIGFjY2VzcyB0byB0aGlzIHBhZ2UuIFBsZWFzZSBjb250YWN0IHRoZSBhZG1pbmlzdHJhdG9yLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnBhZ2VJZCAmJiAhdGhpcy5mb3JtSWQpIHtcclxuICAgICAgdGhpcy5wYWdlRGF0YVN1YnNjcmlwdGlvbiA9IHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuZGF0YS5zdWJzY3JpYmUocGFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybUlkID0gcGFnZTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIC8vIGdldCBjb25maWd1cmUgVVJMIGdldCxwb3N0LHB1dCBVUkxcclxuICAgICAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhXHJcbiAgICAgICAgICAgIHRoaXMuanNvbkZvcm0gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKHJlcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U291cmNlKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnNvdXJjZWlkO1xyXG4gICAgaWYgKHRoaXMucm91dGUucGFyZW50ICYmIHRoaXMucm91dGUucGFyZW50LnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpKSB7XHJcbiAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnNvdXJjZWlkKSB7XHJcbiAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICAgICA/IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8uc25hcHNob3Q/LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKVxyXG4gICAgICAgIDogdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8uc25hcHNob3Q/LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnB1cnBvc2UgPVxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbXMucHVycG9zZVxyXG4gICAgICAgID8gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1zLnB1cnBvc2VcclxuICAgICAgICA6IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50LnNuYXBzaG90LnBhcmFtcy5wdXJwb3NlO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhXHJcbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZShyZXN1bHQ6IGFueSkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZVJlc3VsdCA9IHJlc3VsdDtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMuYWN0aW9uLnRvTG93ZXJDYXNlKCkgPT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ0VkaXQgJyArIHJlc3VsdD8uZGF0YT8ucGFnZW5hbWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb24udG9Mb3dlckNhc2UoKSA9PSAndmlldycpIHtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSAnVmlldyAnICsgcmVzdWx0Py5kYXRhPy5wYWdlbmFtZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi50b0xvd2VyQ2FzZSgpID09ICdhZGQnKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ0FkZCAnICsgcmVzdWx0Py5kYXRhPy5wYWdlbmFtZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi50b0xvd2VyQ2FzZSgpID09ICdsaW5rJykge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdWaWV3ICcgKyByZXN1bHQ/LmRhdGE/LnBhZ2VuYW1lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ0ZPUk1fVElUTEUnKSB8fCAnJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdGT1JNX1RJVExFJywgdGhpcy5pc1RpdGxlKTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiB7fSB9O1xyXG4gICAgICB0aGlzLmVkaXRWYWx1ZSA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnZWRpdFZhbHVlJykpO1xyXG4gICAgICBpZiAodGhpcy5jaGVjayAmJiB0aGlzLnByb3ZpZGVyRGF0YT8uYWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHtcclxuICAgICAgICAgIGRhdGE6IHRoaXMucHJvdmlkZXJEYXRhPy5hY2NvdW50XHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVkaXRWYWx1ZSA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnZWRpdFZhbHVlJykpO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmVkaXRWYWx1ZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhWydlZGl0J10gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIFxyXG4gICAgICB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGUgPSB0eXBlb2YgcmVzdWx0Py5kYXRhPy50ZW1wbGF0ZWpzb24gPT0gJ3N0cmluZyc/IEpTT04ucGFyc2UocmVzdWx0Py5kYXRhPy50ZW1wbGF0ZWpzb24pPy5mYWxsYmFja0lkRnJvbVJvdXRlOiByZXN1bHQ/LmRhdGE/LnRlbXBsYXRlanNvbj8uZmFsbGJhY2tJZEZyb21Sb3V0ZTtcclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSByZXN1bHQuZGF0YT8ucGFnZW5hbWUgPyByZXN1bHQuZGF0YT8ucGFnZW5hbWUgOiAnJztcclxuICAgICAgdGhpcy5kYXRhU3RvcmUuc2V0RGF0YSgndGl0bGUnLCB0aGlzLmZyb21UaXRsZSk7XHJcbiAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tUZW1wbGF0ZShyZXN1bHQpO1xyXG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJuYW1lID0gdGhpcy51c2VyPy5maXJzdE5hbWUgKyAnJyArIHRoaXMudXNlcj8ubGFzdE5hbWU7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnJpYmJvbkRhdGEgPSBudWxsO1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5zb3VyY2VpZCA9IHRoaXMuc291cmNlaWQgPyB0aGlzLnNvdXJjZWlkIDogbnVsbDsgXHJcbiAgICAgIGlmICh0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VLZXknKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlS2V5JykpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YVt0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VLZXknKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlS2V5JyldID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZVZhbHVlJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYWxsR2V0QVBJKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGFTdWIgPSB0aGlzLmRhdGFTdG9yZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXNbJ3VwbG9hZEZyb21HcmlkJ10pIHtcclxuICAgICAgICB0aGlzLnNob3dPY3JGb3JtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0blZlcmlmeSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQYXJhbXMoZWxlbWVudDphbnkpe1xyXG4gICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZWxlbWVudCkgOiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uZGl0aW9uQ2hlY2tUZW1wbGF0ZShyZXN1bHQpIHtcclxuICAgIGxldCByb3V0aW5nUGFnZSA9IFtdO1xyXG4gICAgaWYgKHJlc3VsdC5kYXRhLnRhYmNvbmZpZykge1xyXG4gICAgICBjb25zdCByb3V0aW5nVGFiID0gdGhpcy5jaGVja1BhcmFtcyhyZXN1bHQuZGF0YS50YWJjb25maWcpO1xyXG4gICAgICByb3V0aW5nUGFnZSA9IHJvdXRpbmdUYWIuZmlsdGVyKHggPT4geC50eXBlID09PSAnUk9VVElORycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbikge1xyXG4gICAgICB0aGlzLmlzZm9ybUlPID0gdHJ1ZTtcclxuICAgICAgdGhpcy5qc29uRm9ybSA9IHRoaXMuY2hlY2tQYXJhbXMocmVzdWx0LmRhdGEudGVtcGxhdGVqc29uKVxyXG4gICAgICBjb25zdCBmb3JtVGVtcGxhdGVKc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmpzb25Gb3JtKSk7XHJcbiAgICAgIHRoaXMucGFnZXR5cGUgPSByZXN1bHQuZGF0YT8ucGFnZURldGFpbHM/LnBhZ2V0eXBlO1xyXG4gICAgICBpZiAocmVzdWx0LmRhdGE/LnBhZ2V0eXBlID09PSAnU1VSVkVZJykge1xyXG4gICAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnVzZXI/LmlkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHJlcGFyZUZvcm1LZXlMYWJlbChmb3JtVGVtcGxhdGVKc29uKTtcclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSB0aGlzLmpzb25Gb3JtICYmIHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA/IHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA6IHJlc3VsdC5kYXRhLnBhZ2VuYW1lO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm1vZGlmeVZpZGVvQ29udGVudCgpO1xyXG4gICAgICAgIHRoaXMuc3BlZWNoVG9UZXh0Q29udGVudCgpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSBlbHNlIGlmIChyb3V0aW5nUGFnZS5sZW5ndGggPiAwICYmIHJvdXRpbmdQYWdlWzBdLnBhdGhuYW1lID09PSAnQ3JlYXRlU2l0ZXZpc2l0Q29tcG9uZW50Jykge1xyXG4gICAgICB0aGlzLmlzZm9ybUlPID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYXBwb2ludG1lbnRMaXN0ID0gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBnZXQgY29uZmlndXJlIFVSTCBnZXQscG9zdCxwdXQgVVJMXHJcbiAgYXN5bmMgZ2V0Q29uZmlndXJhdGlvbigpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uID8gdGhpcy5hY3Rpb24/LnRvTG93ZXJDYXNlKCkgOiAnJztcclxuICAgIGNvbnN0IGRhdGE6IGFueSA9IGF3YWl0IHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldEFjdGl2ZVBhZ2UodGhpcy50YWJJZCwgdHJ1ZSwgYWN0aW9uKS50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkSW5jaWRlbnREYXRhKCkge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0TGlzdEJ5U291cmNlSWQodGhpcy5zb3VyY2VpZCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm5hcnJhdGl2ZSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIubmFycmF0aXZlLCAnJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsR2V0QVBJKCkge1xyXG4gICAgaWYgKHRoaXMuZnJvbVRpdGxlLmluY2x1ZGVzKFNUUlVDVFVSRURfREVDSVNJT05fTUFLSU5HKSkge1xyXG4gICAgICB0aGlzLmxvYWRJbmNpZGVudERhdGEoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFiRGF0YSA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ3NlbGVjdGVkVGFiRGF0YScpO1xyXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpID09ICdmb3JtJykge1xyXG4gICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5lZGl0SWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZWRpdElkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgICAgaWYgKCF0aGlzLmlkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZhbGxiYWNrSWQgPSB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGU/IHRoaXMuZmFsbGJhY2tJZEZyb21Sb3V0ZSA6ICdpZCc7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUucGF0aEZyb21Sb290Py5maW5kKHggPT4geC5zbmFwc2hvdC5wYXJhbU1hcC5oYXMoZmFsbGJhY2tJZCkpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoZmFsbGJhY2tJZCk7ICAgICAgICBcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd5b3V0aElEJywgdGhpcy5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tDYWxsR2V0QVBJKCk7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdncmlkQWN0aW9uJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybXJlc3BvbnNlKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrQ2FsbEdldEFQSSgpIHtcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5lZGl0SWQ7XHJcbiAgICB9XHJcbiAgICAvLyAjY2hlY2tcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCdkeW5hbWljLXJvdXRpbmcnKSA+IDAgfHwgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZigncGFnZXMvaW50YWtlJykgPiAwKSB7XHJcbiAgICAgIGlmICh0aGlzLmZyb21Xb3JrRmxvdykge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnNvdXJjZWlkO1xyXG4gICAgICAgIHRoaXMuZnJvbVdvcmtGbG93ID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgPyB0aGlzLmlkIDogdGhpcy5zb3VyY2VpZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2xpY2tlZFNlcnZpY2VDYXNlKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnNlcnZpY2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgIC8vIGlmICh0aGlzLmlkKSB7XHJcbiAgICAvLyAgIHRoaXMuZm9ybXJlc3BvbnNlKHRoaXMuYWN0aW9uKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGZvcm1yZXNwb25zZShhY3Rpb24pIHtcclxuICAgIGlmIChhY3Rpb24gIT09ICdhZGQnKSB7XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldFJlc3BvbnNlQnlQYWdlSWQodGhpcy5pZCwgdGhpcy5mb3JtSWQpLnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0Py5kYXRhICYmIHJlc3VsdD8uZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0TXVsdGlwbGVGcm9tKHRoaXMucGFnZXR5cGUgPT09ICdGRlAnID8gcmVzdWx0Py5kYXRhLnJlc3BvbnNlIDogcmVzdWx0Py5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdD8uZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtUmVzcG9uc2UgPSByZXN1bHQ/LmRhdGE7XHJcbiAgICAgICAgICB0aGlzLmdldEFjdGlvblNlbGVjdCh0aGlzLnBhZ2V0eXBlID09PSAnRkZQJyA/IHJlc3VsdD8uZGF0YS5yZXNwb25zZSA6IHJlc3VsdD8uZGF0YSwgYWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmlkLm5leHQobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc3VsdE51bGxDaGVjayhkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhKSB7XHJcbiAgICAgIHJldHVybiBkYXRhLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFjdGlvblNlbGVjdChyZXN1bHQsIGFjdGlvbikge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdWx0TnVsbENoZWNrKHJlc3VsdCk7XHJcbiAgICB0aGlzLnByb2Nlc3NNdWx0aVNlbGVjdERyb3Bkb3ducyhkYXRhKTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZGF0YSB9O1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICBpZiAodGhpcy5mcm9tVGl0bGUuaW5jbHVkZXMoU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcpKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLm5hcnJhdGl2ZSA9IHRoaXMubmFycmF0aXZlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbiA9PSAnZWRpdCcgfHwgYWN0aW9uID09ICdFZGl0Jykge1xyXG4gICAgICB0aGlzLmlzVGl0bGUgPSAnRWRpdCAnICsgZGF0YT8ucGFnZURldGFpbHM/LmFjdGl2ZVZlcnNpb24/LnBhZ2VuYW1lIHx8ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgaWYgKHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnR5cGUgPSB0aGlzLmV4dGVybmFsUGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIHRoaXMuaWQgPSByZXN1bHQuaWQ7XHJcbiAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TXVsdGlwbGVGcm9tKHJlc3VsdCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdFswXS5kYXRhID8gcmVzdWx0WzBdLmRhdGEgOiByZXN1bHRbMF07XHJcbiAgICB0aGlzLnByb2Nlc3NNdWx0aVNlbGVjdERyb3Bkb3ducyhkYXRhKTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZGF0YSB9O1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICBpZiAodGhpcy5mcm9tVGl0bGUuaW5jbHVkZXMoU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcpKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLm5hcnJhdGl2ZSA9IHRoaXMubmFycmF0aXZlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnR5cGUgPSB0aGlzLmV4dGVybmFsUGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzTXVsdGlTZWxlY3REcm9wZG93bnMoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm11bHRpU2VsZWN0RHJvcERvd25zLmZvckVhY2goZHJvcGRvd25LZXkgPT4ge1xyXG4gICAgICBjb25zdCBkcm9wZG93blZhbHVlID0gZGF0YVtkcm9wZG93bktleV07XHJcbiAgICAgIGlmICh0eXBlb2YgZHJvcGRvd25WYWx1ZSA9PT0gJ3N0cmluZycgJiYgZHJvcGRvd25WYWx1ZS5pbmNsdWRlcygnLCcpKSB7XHJcbiAgICAgICAgZGF0YVtkcm9wZG93bktleV0gPSBkcm9wZG93blZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV4dFN1Ym1pdChldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuICAgIHRoaXMuc3VibWl0RmFpbGVkLm5leHQoJ0ZhaWxlZCB0byBhZGQgcmVzcG9uc2UnKTtcclxuICB9XHJcblxyXG4gIC8qIFRoZSBiZWxvdyBmdW5jdGlvbiB3aWxsIHRyaWdnZXIgd2hlbiB1c2VyIGNsaWNrcyBvbiBhIGJ1dHRvbiBpbiBQb3BVcCAqL1xyXG4gIG9uQ2xpY2tDb25maXJtYXRpb24odXNlckFjdGlvbiwgYWN0aW9uS2V5KSB7XHJcbiAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0VmFsdWUoKTtcclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KCdjdXN0b21WYWxpZGF0aW9uQ29tcG9uZW50Jyk/LmNvbXBvbmVudDtcclxuICAgIGNvbnN0IHVwZGF0ZUNvbXBvbmVudEFuZFJlZHJhdyA9IChsb2NhbEFjdGlvbktleSkgPT4ge1xyXG4gICAgICBpZiAoY29tcCkgY29tcFsndXNlcklucHV0J10gPSBsb2NhbEFjdGlvbktleTtcclxuICAgICAgZm9ybVZhbHVlLmRhdGFbJ3VzZXJJbnB1dCddID0gbG9jYWxBY3Rpb25LZXk7XHJcbiAgICAgIHRoaXMuZm9ybUlPLmZvcm1pby5zZXRWYWx1ZShmb3JtVmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGlmICh1c2VyQWN0aW9uID09PSAnc3VibWl0Jykge1xyXG4gICAgICB0aGlzLmNsb3NlVmFsaWRhdGlvblBvcHVwKCk7XHJcbiAgICAgIGZvcm1WYWx1ZS5kYXRhWydwcmV2ZW50U3VibWl0J10gPSBmYWxzZTtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvLnNldFZhbHVlKGZvcm1WYWx1ZSk7XHJcbiAgICAgIHVwZGF0ZUNvbXBvbmVudEFuZFJlZHJhdyhhY3Rpb25LZXkpO1xyXG4gICAgICBjb21wPy5wb3B1cE9uU3VibWl0ICYmIHRoaXMub25TdWJtaXQoZm9ybVZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2VWYWxpZGF0aW9uUG9wdXAoKTtcclxuICAgICAgdXBkYXRlQ29tcG9uZW50QW5kUmVkcmF3KGNvbXA/LmJ1dHRvbjJUZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlVmFsaWRhdGlvblBvcHVwKCkge1xyXG4gICAgdGhpcy52YWxpZGF0aW9uUG9wdXBSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KCdjdXN0b21WYWxpZGF0aW9uQ29tcG9uZW50Jyk/LmNvbXBvbmVudDtcclxuICAgIGNvbnN0IGZvcm1WYWx1ZSA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRWYWx1ZSgpO1xyXG4gICAgaWYgKGZvcm1WYWx1ZT8uZGF0YT8ucHJldmVudFN1Ym1pdCAmJiBjb21wPy5wb3B1cE9uU3VibWl0ICYmIGNvbXA/LnNob3dQb3B1cCkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25Qb3B1cFJlZiA9IHRoaXMuZGlhbG9nLm9wZW4odGhpcy52YWxpZGF0aW9uUG9wdXApO1xyXG4gICAgICB0aGlzLmNvbmZpcm1hdGlvbm1lc3NhZ2UgPSBjb21wPy52YWxpZGF0aW9uTWVzc2FnZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoc3VibWlzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcclxuICAgIGlmIChzdWJtaXNzaW9uPy5kYXRhPy5wcmV2ZW50U3VibWl0KSB7XHJcbiAgICAgIHRoaXMuZm9ybUlPLmZvcm1pby5lbWl0KCdzdWJtaXREb25lJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZVBhZ2UgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ0FkZEFjdGlvbicpO1xyXG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpID09ICdmb3JtJykge1xyXG4gICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5lZGl0SWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZWRpdElkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICBpZiAoIXRoaXMuaWQgJiYgIWNyZWF0ZVBhZ2UgJiYgdGhpcy5wYWdldHlwZSAhPSAnRkZQJykge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eUlkID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnaWQnKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgICAgICBjb25zdCB5b3V0aElkID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlVmFsdWUnKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlVmFsdWUnKTtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5mYWxsYmFja0lkRnJvbVJvdXRlPy50b0xvd2VyQ2FzZSgpID09ICd5b3V0aGlkJyA/IHlvdXRoSWQgOiBlbnRpdHlJZDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pc3Npb25EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdWJtaXNzaW9uKSk7XHJcbiAgICBjb25zdCBkYXRhID1cclxuICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgaWYgKHRoaXMucHJvdmlkZXJEYXRhPy5pZCkgZGF0YS5wcm92aWRlcl9pZCA9IHRoaXMucHJvdmlkZXJEYXRhPy5pZDtcclxuICAgIGlmICh0aGlzLmNoZWNrKSB7XHJcbiAgICAgIGlmICh0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGE/LnRleHRGaWVsZD8uYWNjb3VudD8uaWQpIHtcclxuICAgICAgICBkYXRhLmlkID0gdGhpcy5zdWJtaXR0ZWREYXRhPy5kYXRhPy50ZXh0RmllbGQ/LmFjY291bnQ/LmlkO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgIHBhZ2VpZDogdGhpcy5mb3JtSWQsXHJcbiAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtKHJlcXVlc3REYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgIHBhZ2VpZDogdGhpcy5mb3JtSWQsXHJcbiAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdWJtaXRlV2l0aG91dElkKHJlcXVlc3REYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBnZXRGb3JtUGFnZVRpdGxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnRk9STV9USVRMRScpO1xyXG4gICAgICBpZihnZXRGb3JtUGFnZVRpdGxlID09PSAnRWRpdCBZb3V0aCBJbmZvJyApIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICAgIGlmICgodGhpcy5zdWJtaXR0ZWREYXRhPy5kYXRhLmFjdGlvbiAhPT0gXCJzd2l0Y2hcIiAmJiB0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGEuYWN0aW9uICE9PSBcImNvcHlcIikgJiYgdGhpcy5pZCB8fCB0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGE/LnRleHRGaWVsZD8uaWQgfHwgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGE/LmVkaXQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3VibWl0ZVdpdGhvdXRJZChyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdGVXaXRob3V0SWQocmVxdWVzdERhdGEpIHtcclxuICAgIGNvbnN0IGZpbGVVcGxvYWREYXRhID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jcmVhdGVGb3JtUmVzcG9uc2UodGhpcy5pZCwgcmVxdWVzdERhdGEpLnN1YnNjcmliZShcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pc3Npb25Eb25lLmVtaXQodHJ1ZSlcclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdBZGRBY3Rpb24nLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZGF0YVN0b3JlLnNldERhdGEoJ2dyaWRBY3Rpb24nLG51bGwpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkRGF0ZShyZXN1bHRbJ2RhdGEnXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaWFsb2dQb3B1cCkge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWZ0ZXJTdWJtaXQuZW1pdChyZXN1bHRbJ2RhdGEnXSk7XHJcblxyXG4gICAgICAgIC8vIFJlZGlyZWN0aW9uIEZpeFxyXG4gICAgICAgIC8vIGlmICh0aGlzLnNob3dCYWNrIHx8IChoaXN0b3J5Py5zdGF0ZT8uZXh0ZXJuYWxMaW5rICYmICFoaXN0b3J5Py5zdGF0ZT8uaXNIaWRlQmFjaykpIHtcclxuICAgICAgICAvLyAgIHRoaXMucmVkaXJlY3QoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJtaXRUb1N1cnZleSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihyZXN1bHRbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1N1Ym1pdHRlZCBTdWNjZXNzZnVsbHknLHRydWUpO1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpdGxldGFiJyk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ21hc3Rlci12aWV3JykgPiAtMSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdjb21wb3NpdGUtcGFnZScpID4gLTEgKVxyXG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBpZigodGhpcy5zZWxlY3RlZENvbXBvbmVudD8ubG9hZGVkRnJvbU1hc3RlclZpZXcgfHwgdGhpcy5zZWxlY3RlZENvbXBvbmVudD8ubG9hZGVkRnJvbUNvbXBvc2l0ZVBhZ2UgKSYmIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQuc2V0dGluZ3MgJiYgdGhpcy5zZWxlY3RlZENvbXBvbmVudC5zZXR0aW5ncy5vblN1Ym1pdFJlZGlyZWN0aW9uKSBcclxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBvbmVudFsnc3VibWl0dGVkRGF0YSddID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gocHVibGlzaEV2ZW50KHtldmVudE5hbWU6ICdzdWJtaXQnLCBwYXlsb2FkOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50fSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAvLyBVc2luZyBiZWxvdyBmb3IgYWxsIHBhZ2VzIChhZnRlciBhZGQgcmVzcG9ucykgZXhjZXB0IGNvbXBvc2l0ZS5cclxuICAgICAgICBpZiAodGhpcy5hcHBTZXJ2aWNlLmNhbk5hdmlnYXRlQmFjaygpICYmICF3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSAmJiAhd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ21hc3Rlci12aWV3JykpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VibWl0RmFpbGVkLm5leHQoJ0ZhaWxlZCB0byBhZGQgcmVzcG9uc2UnKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZEF0dGFjaG1lbnQoaW5mbykge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlRm9ybVJlc3BvbnNlQXR0YWNobWVudChpbmZvKS5zdWJzY3JpYmUocmVzID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0dGVkRGF0ZShyZXN1bHQpIHtcclxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHJlc3VsdFswXS5kYXRhID8gcmVzdWx0WzBdLmRhdGEgOiByZXN1bHRbMF0gfTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHJlc3VsdD8uZGF0YSA/IHJlc3VsdD8uZGF0YSA6IHJlc3VsdCB9O1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgICAgdGhpcy5pZCA9IHJlc3VsdC5pZDtcclxuICAgICAgdGhpcy5vcGVuQm90dG9tU2hlZXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmlkLm5leHQobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXRUb1N1cnZleSgpIHtcclxuICAgIGlmICh0aGlzLnBhZ2V0eXBlID09PSAnU1VSVkVZJykge1xyXG4gICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jcmVhdGVVc2VyU3VydmV5KGhpc3RvcnksIHRoaXMuaWQpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy9UaGlzIGlzIGludGVudGlvbmFsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRm9ybShyZXF1ZXN0RGF0YSkge1xyXG4gICAgY29uc3QgZmlsZVVwbG9hZERhdGEgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFNoYXJlZE1lc3NhZ2UoKTtcclxuICAgIGlmIChyZXF1ZXN0RGF0YT8ucmVzcG9uc2U/LmlkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSByZXF1ZXN0RGF0YT8ucmVzcG9uc2U/LmlkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgRWRpdEdyaWRQYWdlSUQgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdFZGl0R3JpZFBhZ2VJRCcpO1xyXG4gICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2NvbXBvc2l0ZS1wYWdlJykpIHJlcXVlc3REYXRhWydpc0NvbXBvc2l0ZVBhZ2UnXSA9IHRydWU7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGRhdGVGb3JtUmVzcG9uc2UodGhpcy5pZCwgcmVxdWVzdERhdGEsIEVkaXRHcmlkUGFnZUlEKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXNzaW9uRG9uZS5lbWl0KHRydWUpOyBcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgaWYoZGF0YSAmJiAoZGF0YSA9PT0gJ05PX0VESVQnIHx8IGRhdGEgPT09ICdOT1RfQUxMT1dfVE9fRURJVCcgfHwgZGF0YSA9PT0gJ0lOVkFMSURfVVNFUicpKXtcclxuICAgICAgICAgIGlmKGRhdGEgPT09ICdOT19FRElUJylcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uud2FybignVGhlIGVkaXQgd2luZG93IGZvciB0aGlzIHJlY29yZCBoYXMgZXhwaXJlZCBhbmQgY2hhbmdlcyBjYW5ub3QgYmUgbWFkZSBhdCB0aGlzIHRpbWUuJyk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICBpZihkYXRhID09PSAnTk9UX0FMTE9XX1RPX0VESVQnIHx8IGRhdGEgPT09ICdJTlZBTElEX1VTRVInKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTsgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHJlc3VsdFswXS5kYXRhID8gcmVzdWx0WzBdLmRhdGEgOiByZXN1bHRbMF0gfTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IGRhdGEgPyBkYXRhIDogcmVzdWx0IH07XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gcmVzdWx0WydpZCddO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnbWFzdGVyLXZpZXcnKSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICBpZigodGhpcy5zZWxlY3RlZENvbXBvbmVudC5sb2FkZWRGcm9tTWFzdGVyVmlldyB8fCB0aGlzLnNlbGVjdGVkQ29tcG9uZW50LmxvYWRlZEZyb21Db21wb3NpdGVQYWdlKSAmJiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50LnNldHRpbmdzICYmIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQuc2V0dGluZ3Mub25TdWJtaXRSZWRpcmVjdGlvbikgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50WydzdWJtaXR0ZWREYXRhJ10gPSBkYXRhO1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gocHVibGlzaEV2ZW50KHtldmVudE5hbWU6ICdzdWJtaXQnLCBwYXlsb2FkOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50fSkpOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuaWQubmV4dChudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ2VkaXRWYWx1ZScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhPy5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnU3VibWl0dGVkIFN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhOiByZXF1ZXN0RGF0YT8ucmVzcG9uc2VcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIocmVzdWx0WydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpdGxldGFiJyk7XHJcbiAgICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5yZW1vdmVJdGVtKCdlZGl0VmFsdWUnKTtcclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RhcmdldC10YWItZmlsdGVyJyk7XHJcbiAgICAgICAgICBpZighd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2NvbXBvc2l0ZS1wYWdlJykgJiYgIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdtYXN0ZXItdmlldycpKVxyXG4gICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEZhaWxlZC5uZXh0KCdGYWlsZWQgdG8gdXBkYXRlIHJlc3BvbnNlJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uL2xpc3QnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkJvdHRvbVNoZWV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5zb3VyY2VJZC5uZXh0KHRoaXMuc291cmNlaWQpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KHRoaXMuaWQpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5wYWdlSWQubmV4dCh0aGlzLmZvcm1JZCk7XHJcbiAgfVxyXG5cclxuICBtb2RpZnlWaWRlb0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB2aWRlb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZXRvSWZyYW1lJyk7XHJcbiAgICBpZiAodmlkZW9FbGVtZW50cyAmJiB2aWRlb0VsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICB2aWRlb0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gICAgICAgIGNvbnN0IGlmcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICBpZnJtLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcclxuICAgICAgICBpZnJtLnN0eWxlLndpZHRoID0gZWxlbWVudC53aWR0aCA/IGVsZW1lbnQud2lkdGggOiBudWxsO1xyXG4gICAgICAgIGlmcm0uc3R5bGUuaGVpZ2h0ID0gZWxlbWVudC5oZWlnaHQgPyBlbGVtZW50LmhlaWdodCA6IG51bGw7XHJcbiAgICAgICAgaWZybS53aWR0aCA9IGVsZW1lbnQud2lkdGggPyBlbGVtZW50LndpZHRoIDogbnVsbDtcclxuICAgICAgICBpZnJtLmhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0ID8gZWxlbWVudC5oZWlnaHQgOiBudWxsO1xyXG4gICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoaWZybSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tQ2xpY2tFdmVudHMoX2RhdGEsIGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5pZCA9PSAnc2Nhbl9idXR0b24nKSB7XHJcbiAgICAgIHRoaXMuZXh0ZXJuYWxfc2Nhbm5lci5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgIGlmIChldmVudC5zcmNFbGVtZW50LmRhdGFzZXQpIHtcclxuICAgICAgICB0aGlzLnNjYW5uZXJDb25maWcgPSBldmVudC5zcmNFbGVtZW50LmRhdGFzZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KCkge1xyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdtYXN0ZXItdmlldycpID4gMCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdjb21wb3NpdGUtcGFnZScpID4gMCkge1xyXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignZHluYW1pYy1yb3V0aW5nJykgPiAwIHx8IHRoaXMuaWQpXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi8uLi8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgICAgfVxyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY2hhbmdlUGFnZSh0cnVlKTtcclxuICAgIGlmKHRoaXMucGFyZW50R3JpZFBhZ2VJZCl7XHJcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gICAgLy9SZW1vdmluZyBVbndhbnRlZCByZWRpcmVjdCBjb2RlXHJcbiAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWFzdGVyLXZpZXcnKSA+IDAgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY29tcG9zaXRlLXBhZ2UnKSA+IDApIHtcclxuICAgIC8vICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2R5bmFtaWMtcm91dGluZycpID4gMCB8fCB0aGlzLmlkKVxyXG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIC8vICAgZWxzZVxyXG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIC8vIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigndGFiJykgPiAwICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ21hc3Rlci12aWV3JykgPT09IC0xICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbXBvc2l0ZS1wYWdlJykgPT09IC0xKSB7XHJcbiAgICAvLyAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNoYW5nZVBhZ2UodHJ1ZSk7XHJcbiAgICAvLyAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgLy8gfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdtYXN0ZXItdmlldycpID09PSAtMSAmJiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdjb21wb3NpdGUtcGFnZScpID09PSAtMSkge1xyXG4gICAgLy8gICBjb25zdCBncmlkUGFnZUluZm8gPSBKU09OLnBhcnNlKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3BhcmVudEdyaWRQYWdlJykpO1xyXG4gICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9wYWdlcy9keW5hbWljLXNlYS9zZWFyY2gvJHtncmlkUGFnZUluZm8/LmlkfWBdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBjdXN0b21FdmVudHNCdXR0b24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50eXBlID09PSAncmVwb3J0ZG93bmxvYWQnKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5RGF0YSA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ2dyaWREYXRhJyk7XHJcbiAgICAgIGNvbnN0IHBhZ2VEYXRhID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgncGFnZURhdGEnKTtcclxuICAgICAgZXZlbnQuZGF0YVsnY3VycmVudFllYXInXSA9IGV2ZW50LmRhdGEucmVwb3J0MSA9PT0gJ2N1cnJlbnRZZWFyJyA/ICd5ZXMnIDogJyc7XHJcbiAgICAgIGlmIChldmVudC5kYXRhWydjdXJyZW50WWVhciddID09PSAneWVzJykge1xyXG4gICAgICAgIGV2ZW50LmRhdGFbJ2Zyb21SYW5nZSddID0gJzIwMjEtMDYtMThUMTQ6MzM6MDYuMzY2KzAwMDAnO1xyXG4gICAgICAgIGV2ZW50LmRhdGFbJ3RvUmFuZ2UnXSA9ICcyMDIxLTA2LTE4VDE0OjMzOjA2LjM2NiswMDAwJztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGZvcm1EYXRhOiBldmVudC5kYXRhLFxyXG4gICAgICAgIHF1ZXJ5RGF0YTogcXVlcnlEYXRhLFxyXG4gICAgICAgIHBhZ2VEYXRhOiBwYWdlRGF0YVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmRvd25sb2FkUmVwb3J0KGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG93bmxvYWRSZXBvcnQoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZXhwb3J0UmVwb3J0KGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcCA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgICAgICAgaWYgKHJlc3AucGRmQXdzVXJsICYmIHJlc3AuZXhjZWxBd3NVcmwpIHtcclxuICAgICAgICAgICAgY29uc3QgdXJscyA9IFtdO1xyXG4gICAgICAgICAgICB1cmxzLnB1c2gocmVzcC5wZGZBd3NVcmwpO1xyXG4gICAgICAgICAgICB1cmxzLnB1c2gocmVzcC5leGNlbEF3c1VybCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHVybHMpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwLmV4Y2VsQXdzVXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHJlc3AuZXhjZWxBd3NVcmwpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwLnBkZkF3c1VybCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZShyZXNwLnBkZkF3c1VybCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG93bmxvYWRGaWxlKHMzQnVja2V0VXJsTmFtZSkge1xyXG4gICAgaWYgKHMzQnVja2V0VXJsTmFtZSAmJiBBcnJheS5pc0FycmF5KHMzQnVja2V0VXJsTmFtZSkpIHtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHMzQnVja2V0VXJsTmFtZSkge1xyXG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGl0ZW07XHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9ICdkb3dubG9hZCc7XHJcbiAgICAgICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBsaW5rLmhyZWYgPSBzM0J1Y2tldFVybE5hbWUudHJpbSgpO1xyXG4gICAgICBsaW5rLmRvd25sb2FkID0gJ2Rvd25sb2FkJztcclxuICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tRXZlbnRzKGV2dCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2VzIGRvbmVcIiwgZXZ0KTsgICAgXHJcbiAgICBpZiAoZXZ0LmRhdGEpIHtcclxuICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5vbkNoYW5nZVBhZ2VFdmVudERhdGEgPSBldnQ7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQYWdlRXZlbnRJZCA9IHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICAvKiBJZiB0aGUgRm9ybS5pbyBmb3JtIHJlcXVpcmVzIGEgcG9wdXAsIHRoZXJlIHNob3VsZCBiZSBhIGhpZGRlbiBjb21wb25lbnQgd2l0aCB0aGUgQVBJIHByb3BlcnR5IG5hbWUgJ2N1c3RvbVZhbGlkYXRpb25Db21wb25lbnQnLiAqL1xyXG4gICAgY29uc3QgY29tcCA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRDb21wb25lbnQoJ2N1c3RvbVZhbGlkYXRpb25Db21wb25lbnQnKT8uY29tcG9uZW50XHJcbiAgICAgIGlmIChjb21wICYmIGV2dD8uZGF0YSAmJiBjb21wPy5zaG93UG9wdXAgJiYgZXZ0Py5jaGFuZ2VkKSB7XHJcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25tZXNzYWdlID0gY29tcD8udmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5zaG93QnV0dG9uMSA9IGNvbXA/LnNob3dCdXR0b24xID8gY29tcD8uc2hvd0J1dHRvbjEgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dCdXR0b24yID0gY29tcD8uc2hvd0J1dHRvbjIgPyBjb21wPy5zaG93QnV0dG9uMiA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMVRleHQgPSBjb21wPy5idXR0b24xVGV4dDtcclxuICAgICAgICB0aGlzLmJ1dHRvbjJUZXh0ID0gY29tcD8uYnV0dG9uMlRleHQ7XHJcbiAgICAgICAgdGhpcy5idXR0b24xS2V5ID0gY29tcD8uYnV0dG9uMUtleTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjJLZXkgPSBjb21wPy5idXR0b24yS2V5O1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMUFjdGlvbiA9IGNvbXA/LmJ1dHRvbjFBY3Rpb247XHJcbiAgICAgICAgdGhpcy5idXR0b24yQWN0aW9uID0gY29tcD8uYnV0dG9uMkFjdGlvbjtcclxuICAgICAgICB0aGlzLmJ1dHRvbjFTdHlsZSA9IGNvbXA/LmJ1dHRvbjFTdHlsZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbjJTdHlsZSA9IGNvbXA/LmJ1dHRvbjJTdHlsZTtcclxuICAgICAgICBpZiAoIWNvbXA/LnBvcHVwT25TdWJtaXQpIHRoaXMudmFsaWRhdGlvblBvcHVwUmVmID0gdGhpcy5kaWFsb2cub3Blbih0aGlzLnZhbGlkYXRpb25Qb3B1cCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbmFuY2VDdXN0b21FdmVudHNGdW5jdGlvbmFsaXR5KGV2dCk7XHJcbiAgfVxyXG5cclxuICBzcGVlY2hUb1RleHRDb250ZW50KCkge1xyXG4gICAgY29uc3Qgc3BlZWNoRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlZWNoVG9UZXh0Jyk7XHJcbiAgICBpZiAoc3BlZWNoRWxlbWVudHMgJiYgc3BlZWNoRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIHNwZWVjaEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwZWVjaGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNwZWVjaGJ0bi5jbGFzc05hbWUgPSAnbmFycmF0aXZlLXNwZWVjaC1idG4nO1xyXG4gICAgICAgIHNwZWVjaGJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1taWNyb3Bob25lLXNsYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGVlY2hidG4pO1xyXG4gICAgICAgIHNwZWVjaGJ0bi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgIGV2dCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTcGVlY2hUb1RleHQodGhpcywgZXZ0LCBlbGVtZW50KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGVTcGVlY2hUb1RleHQoY3RybCwgZXZ0LCBpdGVtKSB7XHJcbiAgICBjb25zdCBuYXJyYXRpdmVFbGVtZW50ID0gZXZ0Py5jdXJyZW50VGFyZ2V0Py5jaGlsZHJlbj8ubGVuZ3RoXHJcbiAgICAgID8gZXZ0Py5jdXJyZW50VGFyZ2V0Py5jaGlsZHJlblswXVxyXG4gICAgICA6IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uID0gIXRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uO1xyXG4gICAgaWYgKHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uKSB7XHJcbiAgICAgIGNvbnN0IHNwZWVjaFRleHQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGlmIChuYXJyYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgbmFycmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnZmEgZmEtbWljcm9waG9uZSc7XHJcbiAgICAgIH1cclxuICAgICAgY3RybC5zcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UucmVjb3JkKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgIC8vIGxpc3RlbmVyXHJcbiAgICAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgbGV0IHRlbXBOYXJyYXRpdmUgPSBzcGVlY2hUZXh0LnZhbHVlO1xyXG4gICAgICAgICAgdGVtcE5hcnJhdGl2ZSA9IHRlbXBOYXJyYXRpdmUudHJpbSgpLmNvbmNhdCgnICcgKyB2YWx1ZSk7XHJcbiAgICAgICAgICBpZiAoc3BlZWNoVGV4dCkge1xyXG4gICAgICAgICAgICBzcGVlY2hUZXh0LnZhbHVlID0gdGVtcE5hcnJhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGVycnJvclxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrRXJyb3IobmFycmF0aXZlRWxlbWVudCwgY3RybCwgZXZ0LCBpdGVtLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChuYXJyYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgbmFycmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnZmEgZmEtbWljcm9waG9uZS1zbGFzaCc7XHJcbiAgICAgIH1cclxuICAgICAgY3RybC5kZUFjdGl2YXRlU3BlZWNoUmVjb2duaXRpb24oY3RybCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrRXJyb3IobmFycmF0aXZlRWxlbWVudCwgY3RybCwgZXZ0LCBpdGVtLCBlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHRoaXMuZXJyb3JFeGVjdXRpb24obmFycmF0aXZlRWxlbWVudCwgY3RybCwgZXZ0LCBpdGVtLCBlcnIpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JFeGVjdXRpb24obmFycmF0aXZlRWxlbWVudCwgY3RybCwgZXZ0LCBpdGVtLCBlcnIpIHtcclxuICAgIGlmIChuYXJyYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIG5hcnJhdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZhIGZhLW1pY3JvcGhvbmUtc2xhc2gnO1xyXG4gICAgfVxyXG4gICAgaWYgKGVyci5lcnJvciA9PT0gJ25vLXNwZWVjaCcpIHtcclxuICAgICAgY3RybC5ub3RpZmljYXRpb24gPSB0aGlzLm5vU3BlZWNoQWxlcnQoKTtcclxuICAgICAgY3RybC5hY3RpdmF0ZVNwZWVjaFRvVGV4dChjdHJsLCBldnQsIGl0ZW0pO1xyXG4gICAgfSBlbHNlIGlmIChlcnIuZXJyb3IgPT09ICdub3QtYWxsb3dlZCcpIHtcclxuICAgICAgY3RybC5ub3RpZmljYXRpb24gPSB0aGlzLm1pY1VuYXV0aG9yaXNlZEFsZXJ0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGVyci5lcnJvciA9PT0gJ25vdC1taWNyb3Bob25lJykge1xyXG4gICAgICBjdHJsLm5vdGlmaWNhdGlvbiA9IHRoaXMubWljTm90QXZhaWxhYmxlQWxlcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1pY05vdEF2YWlsYWJsZUFsZXJ0KCkge1xyXG4gICAgcmV0dXJuICdNaWNyb3Bob25lIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSB2ZXJpZnkgdGhlIGNvbm5lY3Rpb24gb2YgeW91ciBtaWNyb3Bob25lIGFuZCB0cnkgYWdhaW4uJztcclxuICB9XHJcblxyXG4gIG1pY1VuYXV0aG9yaXNlZEFsZXJ0KCkge1xyXG4gICAgcmV0dXJuICdZb3VyIGJyb3dzZXIgaXMgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHlvdXIgbWljcm9waG9uZS4gVmVyaWZ5IHRoYXQgeW91ciBicm93c2VyIGhhcyBhY2Nlc3MgdG8geW91ciBtaWNyb3Bob25lIGFuZCB0cnkgYWdhaW4uJztcclxuICB9XHJcblxyXG4gIG5vU3BlZWNoQWxlcnQoKSB7XHJcbiAgICByZXR1cm4gJ05vIHNwZWVjaCBoYXMgYmVlbiBkZXRlY3RlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xyXG4gIH1cclxuXHJcbiAgZGVBY3RpdmF0ZVNwZWVjaFJlY29nbml0aW9uKGN0cmwpIHtcclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uID0gZmFsc2U7XHJcbiAgICBjdHJsLnNwZWVjaFJlY29nbml0aW9uU2VydmljZS5kZXN0cm95U3BlZWNoT2JqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGFTdWIpIHRoaXMuZGF0YVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgaWYodGhpcy5ldmVudFN1YnNjcmlwdGlvbikgdGhpcy5ldmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UuZGVzdHJveVNwZWVjaE9iamVjdCgpO1xyXG4gICAgdGhpcy5vY3IuY2xlYXJSZXNwb25zZSgpO1xyXG4gICAgaWYgKHRoaXMucGFnZURhdGFTdWJzY3JpcHRpb24pIHRoaXMucGFnZURhdGFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZEZpbGUoZmlsZTogRmlsZSB8IEZpbGVFcnJvcik6IHZvaWQge1xyXG4gICAgdGhpcy5vY3IuZ2V0UmVzcG9uc2UoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzID09ICdTVUNDRUVERUQnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzT0NSUmVzcG9uc2UocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb2Nlc3NSZXNwb25zZURhdGEoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzUmVzcG9uc2VEYXRhKGZpbGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLnVwbG9hZEZpbGUoZmlsZSkuc3Vic2NyaWJlKFxyXG4gICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucGVyY2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIHByb2Nlc3MgeW91ciByZXF1ZXN0LicpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc09DUlJlc3BvbnNlKHJlc3VsdCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSByZXN1bHQucmVzcG9uc2U7XHJcbiAgICBpZiAodGhpcy5zY2FubmVyQ29uZmlnICYmIHRoaXMuc2Nhbm5lckNvbmZpZy5zY2FuVHlwZSkge1xyXG4gICAgICBpZiAodGhpcy5zY2FubmVyQ29uZmlnLnNjYW5UeXBlID09PSAndGV4dCcgJiYgdGhpcy5zY2FubmVyQ29uZmlnLnNjYW5QYXRjaCkge1xyXG4gICAgICAgIGNvbnN0IHNkYXRhID0gdGhpcy5zdWJtaXR0ZWREYXRhO1xyXG4gICAgICAgIGlmIChzZGF0YSAmJiBzZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICBzZGF0YS5kYXRhW3RoaXMuc2Nhbm5lckNvbmZpZy5zY2FuUGF0Y2hdID0gcmVzcG9uc2UucmF3X3RleHQ7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhdjEgPSB0aGlzLm9jci5wcmVwYXJlX2Zvcm1fZGF0YShyZXNwb25zZSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLkZvcm1JbnB1dHMpKSk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGF2MiA9IHRoaXMub2NyLnByZXBhcmVfZnJvbV9kYXRhX3YxKHJlc3BvbnNlLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuRm9ybUlucHV0cykpKTtcclxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB7IC4uLmZvcm1EYXRhdjEsIC4uLmZvcm1EYXRhdjIgfTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IGZpbmFsRGF0YSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlRm9ybUtleUxhYmVsKGpzb24pIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XHJcbiAgICAgIGpzb24uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0aGlzLnByZXBhcmVGb3JtS2V5TGFiZWwoaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAganNvbi5oYXNPd25Qcm9wZXJ0eSgnaW5wdXQnKSAmJlxyXG4gICAgICBqc29uLmlucHV0ICYmXHJcbiAgICAgIGpzb24udHlwZSAhPT0gJ2J1dHRvbicgJiZcclxuICAgICAganNvbi50eXBlICE9PSAnc2lnbmF0dXJlJyAmJlxyXG4gICAgICAhanNvbi5oYXNPd25Qcm9wZXJ0eSgnY3VzdG9tQ29uZGl0aW9uYWwnKSAmJlxyXG4gICAgICAhanNvbi5oYXNPd25Qcm9wZXJ0eSgnY29uZGl0aW9uYWwnKVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCB2YWx1ZXMgPSBbXTtcclxuICAgICAgaWYgKGpzb24udHlwZSA9PT0gJ3JhZGlvJyB8fCBqc29uLnR5cGUgPT09ICdzZWxlY3Rib3hlcycpIHtcclxuICAgICAgICB2YWx1ZXMgPSBqc29uLnZhbHVlcyB8fCBbXTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb3JtT2JqZWN0ID0ge1xyXG4gICAgICAgIGtleToganNvblsna2V5J10sXHJcbiAgICAgICAgbGFiZWw6IGpzb25bJ2xhYmVsJ10sXHJcbiAgICAgICAgdHlwZToganNvblsndHlwZSddLFxyXG4gICAgICAgIHZhbHVlczogWy4uLnZhbHVlc11cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5Gb3JtSW5wdXRzLnB1c2goZm9ybU9iamVjdCk7XHJcblxyXG4gICAgICBpZiAoanNvbi50eXBlID09PSAnc2VsZWN0JyAmJiBqc29uLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aVNlbGVjdERyb3BEb3ducy5wdXNoKGpzb24ua2V5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT2JqZWN0LmtleXMoanNvbikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcclxuICAgICAgICAgIHRoaXMucHJlcGFyZUZvcm1LZXlMYWJlbChqc29uW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5hbmNlQ3VzdG9tRXZlbnRzRnVuY3Rpb25hbGl0eShldmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICBldmVudD8uY2hhbmdlZD8uY29tcG9uZW50Py5rZXkgPT09ICdpc0JhbmtBY2NvdW50RXhpc3QnICYmXHJcbiAgICAgICFldmVudD8uZGF0YT8uaXNCYW5rQWNjb3VudEV4aXN0ICYmXHJcbiAgICAgIGV2ZW50Py5kYXRhPy5hY2NvdW50VHlwZUtleVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBhcGkgPSAnJztcclxuICAgICAgaWYgKGV2ZW50Py5kYXRhPy5hY2NvdW50VHlwZUtleSA9PT0gJ0NBJykge1xyXG4gICAgICAgIGFwaSA9ICdmaW5hbmNlY2FyZWFjY291bnRubyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQ/LmRhdGE/LmFjY291bnRUeXBlS2V5ID09PSAnUkEnKSB7XHJcbiAgICAgICAgYXBpID0gJ2ZpbmFuY2VyZXN0aXR1dGlvbmFjY291bnRubyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBpID0gJ2ZpbmFuY2VzYXZpbmdhY2NvdW50bm8nO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldFVuaXF1ZUlkKGFwaSkuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5iYW5rQWNjb3VudE51bWJlciA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgICAgICAgdGhpcy50cmlnZ2VyUmVmcmVzaC5lbWl0KHtcclxuICAgICAgICAgICAgcHJvcGVydHk6ICdzdWJtaXNzaW9uJyxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3VibWl0dGVkRGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcm91dGVUb0dyaWQodmFsKSB7XHJcbiAgICBpZiAodmFsID09PSAnTWFrZSBQYXltZW50Jykge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vcGFnZXMvbWVyZ2VwYWdlLzFmNGUyNzJhLTRjMDMtNDczOS1iNGE1LTUzNzQ4ZTA2ZTI0NyddKTtcclxuICAgIH0gZWxzZSBpZiAodmFsID09PSAnUGF5bWVudCBEZXRhaWxzIEluZm9ybWF0aW9uJykge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50KGV2ZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtSU8uY3VzdG9tRXZlbnQoZXZlbnQsIHRoaXMuZm9ybUlPKTtcclxuICB9XHJcblxyXG4gIG9jclVwbG9hZChmaWxlcykge1xyXG4gICAgdGhpcy51cGxvYWRlZEZpbGUgPSBmaWxlcy50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCBwYWdlSUQgPSB0aGlzLmZvcm1JZCA/IHRoaXMuZm9ybUlkIDogdGhpcy5wYWdlSWQ7XHJcbiAgICB0aGlzLmltYWdlRGF0YSA9IHtcclxuICAgICAgY29udGVudFR5cGU6IHRoaXMudXBsb2FkZWRGaWxlLnR5cGUsXHJcbiAgICAgIGZpbGVOYW1lOiBgb2NyLyR7cGFnZUlEfS8ke3RoaXMudXBsb2FkZWRGaWxlLm5hbWV9YFxyXG4gICAgfTtcclxuICAgIHRoaXMuYXR0YWNobWVudFNlcnZpY2UudXBsb2FkS2V5KHRoaXMuaW1hZ2VEYXRhKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZEF0dGFjaG1lbnQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJyk7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkQXR0YWNobWVudERldGFpbHMgPSB1cGxvYWRBdHRhY2htZW50LmZpbGVzWzBdO1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucHV0dXBsb2FkMihyZXMuZGF0YSwgdXBsb2FkQXR0YWNobWVudERldGFpbHMsIHVwbG9hZEF0dGFjaG1lbnREZXRhaWxzLnR5cGUpLnN1YnNjcmliZShcclxuICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3AgJiYgcmVzcC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogYG9jci8ke3BhZ2VJRH0vJHt0aGlzLnVwbG9hZGVkRmlsZS5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50dHlwZTogdGhpcy51cGxvYWRlZEZpbGUudHlwZVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnVXBsb2FkZWQgU3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVwbG9hZChKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuVmVyaWZ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0T2JqKCdPQ1JPYmonLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd09jckZvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5WZXJpZnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoU09NRVRISU5HX1dFTlRfV1JPTkcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpb25DaGVja0Vycm9yQWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25kaW9uQ2hlY2tFcnJvckFsZXJ0KGVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDApIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKFNPTUVUSElOR19XRU5UX1dST05HKTtcclxuICB9XHJcbiAgZ2V0VXBsb2FkKG9iaikge1xyXG4gICAgdGhpcy5vY3JWYWxpZGF0aW9uU2VydmljZS5nZXRVcGxvYWQob2JqKS5zdWJzY3JpYmUoXHJcbiAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc0RhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgIGNvbnN0IGltYWdlQ2F0ZWdvcnkgPSByZXNEYXRhPy5pbWFnZUNhdGVnb3J5O1xyXG4gICAgICAgICAgY29uc3Qgb2NyRG9jdW1lbnREZXRhaWxzID0gaW1hZ2VDYXRlZ29yeT8uaWRfanNvblswXTtcclxuICAgICAgICAgIHRoaXMudmVyaWZpRGF0YShvY3JEb2N1bWVudERldGFpbHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihTT01FVEhJTkdfV0VOVF9XUk9ORyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZlcmlmaURhdGEob2NyRG9jdW1lbnREZXRhaWxzKSB7XHJcbiAgICBjb25zdCBqc29uRm9ybSA9IHRoaXMuanNvbkZvcm0/LmNvbXBvbmVudHNbMF07XHJcbiAgICBpZiAodGhpcy5mb3JtUmVzcG9uc2UpIHtcclxuICAgICAgY29uc3QgZnJvbUFycmF5ID0gT2JqZWN0LmtleXModGhpcy5mb3JtUmVzcG9uc2UpO1xyXG4gICAgICBmcm9tQXJyYXk/LmZvckVhY2gocmVzcG9zZSA9PiB7XHJcbiAgICAgICAgaWYgKG9jckRvY3VtZW50RGV0YWlscykge1xyXG4gICAgICAgICAgY29uc3QgZG9jdW1lbnRWYWx1ZSA9IE9iamVjdC5rZXlzKG9jckRvY3VtZW50RGV0YWlscyk7XHJcbiAgICAgICAgICBkb2N1bWVudFZhbHVlPy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrVmVyaWZ5KGVsZW1lbnQsIG9jckRvY3VtZW50RGV0YWlscywgcmVzcG9zZSwganNvbkZvcm0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbHVtbnNKc29uLmNvbHVtbnNbMF0uY29tcG9uZW50c1swXS5jb21wb25lbnRzWzBdLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnRBcnJheT8uam9pbignJyk7XHJcbiAgICB0aGlzLmpzb25Gb3JtLmNvbXBvbmVudHNbMF0uY29tcG9uZW50cy5zcGxpY2UoMCwgMCwgY29sdW1uc0pzb24pO1xyXG4gICAgdGhpcy50cmlnZ2VyUmVmcmVzaC5lbWl0KHtcclxuICAgICAgcHJvcGVydHk6ICdmb3JtJyxcclxuICAgICAgdmFsdWU6IHRoaXMuanNvbkZvcm1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25kaXRpb25DaGVja1ZlcmlmeShlbGVtZW50LCBvY3JEb2N1bWVudERldGFpbHMsIHJlc3Bvc2UsIGpzb25Gb3JtKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGVsZW1lbnQgJiZcclxuICAgICAgcmVzcG9zZSAmJlxyXG4gICAgICBlbGVtZW50Py50b0xvd2VyQ2FzZSgpID09PSByZXNwb3NlPy50b0xvd2VyQ2FzZSgpICYmXHJcbiAgICAgIG9jckRvY3VtZW50RGV0YWlsc1tlbGVtZW50XT8udG9Mb3dlckNhc2UoKSAhPT0gdGhpcy5mb3JtUmVzcG9uc2VbcmVzcG9zZV0/LnRvTG93ZXJDYXNlKClcclxuICAgICkge1xyXG4gICAgICB0aGlzLmpzb25Gb3JtLmNvbXBvbmVudHNbMF0uY29tcG9uZW50cyA9IGpzb25Gb3JtPy5jb21wb25lbnRzLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgJiYgcmVzPy5rZXkgPT09IGVsZW1lbnQ/LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgIHRoaXMuY29udGVudEFycmF5LnB1c2goYDxwIHN0eWxlPVwiY29sb3I6cmVkO1wiPiR7cmVzLmxhYmVsfSBOb3QgTWF0Y2g8L3A+XFxuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRFbWl0dGVkRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLnNob3dPY3JGb3JtID0gZmFsc2U7XHJcbiAgICB0aGlzLmJ0blZlcmlmeSA9IHRydWU7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IC4uLmRhdGEsIC4uLnRoaXMuc3VibWl0dGVkRGF0YSB9O1xyXG4gIH1cclxufSIsIjxhcHAtYWxlcnQ+PC9hcHAtYWxlcnQ+XHJcbjxkaXYgW25nQ2xhc3NdPVwic2hvd1RpdGxlID8gJ2NhcmQnIDogJ3lvdXRoc2VhcmNoLWZvcm1pbydcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG15LTNcIiAqbmdJZj1cImlzVGl0bGVcIj5cclxuICAgICAgPCEtLSA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsXCIgKGNsaWNrKT1cInJlZGlyZWN0KClcIiAqbmdJZj1cInNob3diYWNrYnRuXCI+XHJcbiAgICAgICAgQmFjayB7eyBwYXJlbnRHcmlkUGFnZSAmJiAndG8gJyArIHBhcmVudEdyaWRQYWdlIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aDYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIG1iLTIgbXQtMyBmcm9tVGl0bGVcIiAqbmdJZj1cInNob3dUaXRsZVwiPnt7IGlzVGl0bGUgfX08L2g2PiAtLT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrLXRvLW1haW5cIj5cclxuICAgICAgICA8ZGl2IChjbGljayk9XCJyZWRpcmVjdCgpXCIgKm5nSWY9XCJzaG93YmFja2J0blwiPnt7IHBhcmVudEdyaWRQYWdlfX08L2Rpdj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dUaXRsZVwiPiB7eyBpc1RpdGxlIH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cIiFzaG93T2NyRm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkeW5hbWljLXBhZ2UgbXQtMFwiIFtoaWRkZW5dPVwiIWlzZm9ybUlPXCI+XHJcbiAgICAgIDxmb3JtaW8gI2Zvcm1JTyBbZm9ybV09XCJqc29uRm9ybVwiIFtyZWFkT25seV09XCJpc1JlYWRPbmx5XCIgW3N1Ym1pc3Npb25dPVwic3VibWl0dGVkRGF0YVwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNoYW5nZSk9XCJjdXN0b21FdmVudHMoJGV2ZW50KVwiIChjbGljayk9XCJjdXN0b21DbGlja0V2ZW50cyhzdWJtaXR0ZWREYXRhLCAkZXZlbnQpXCJcclxuICAgICAgICAoY3VzdG9tRXZlbnQpPVwiY3VzdG9tRXZlbnRzQnV0dG9uKCRldmVudClcIiBbcmVmcmVzaF09XCJ0cmlnZ2VyUmVmcmVzaFwiIFtzdWJtaXREb25lXT1cInN1Ym1pc3Npb25Eb25lXCIgW3N1Y2Nlc3NdPVwic3VibWl0U3VjY2Vzc1wiXHJcbiAgICAgICAgW2Vycm9yXT1cInN1Ym1pdEZhaWxlZFwiIChjdXN0b21FdmVudCk9XCJjdXN0b21FdmVudCgkZXZlbnQpXCI+PC9mb3JtaW8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cInNob3dPY3JGb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZHluYW1pYy1wYWdlIG10LTBcIj5cclxuICAgICAgICA8YXBwLW9jci12YWxpZGF0aW9uIChvY3JSZXNwb25zZSk9XCJnZXRFbWl0dGVkRGF0YSgkZXZlbnQpXCIgW2N1cnJlbnR0ZW1wbGF0ZVJlc3VsdF09XCJ0ZW1wbGF0ZVJlc3VsdFwiXHJcbiAgICAgICAgICBbZm9ybVJlc3BvbnNlRGF0YV09XCJmb3JtUmVzcG9uc2VcIiBbc3VibWl0aW9uRGF0YV09XCJzdWJtaXR0ZWREYXRhXCI+PC9hcHAtb2NyLXZhbGlkYXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48YnV0dG9uIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIGlkPVwiZXh0ZXJuYWxfc2Nhbm5lclwiICNleHRlcm5hbF9zY2FubmVyIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwiYnRuLWljb24tYmdcIlxyXG4gIChuZ3hmLXNlbGVjdCk9XCJ1cGxvYWRGaWxlKCRldmVudClcIj5cclxuICBTY2FuXHJcbjwvYnV0dG9uPlxyXG5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdmFsaWRhdGlvblBvcHVwPlxyXG4gIDxkaXYgY2xhc3M9XCJwLTMgdmFsaWRhdGlvbi1wb3B1cFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4IG1iLTRcIj48ZGl2IFtpbm5lckhUTUxdPVwiY29uZmlybWF0aW9ubWVzc2FnZVwiPjwvZGl2PjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHByLTMgbW9kYWwtYnV0dG9uc1wiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInB1bGwtcmlnaHQgbWItMiBidG5cIiBbbmdDbGFzc109XCJidXR0b24xU3R5bGVcIiAqbmdJZj1cInNob3dCdXR0b24xXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAoY2xpY2spPVwib25DbGlja0NvbmZpcm1hdGlvbihidXR0b24xQWN0aW9uLCBidXR0b24xS2V5KVwiPlxyXG4gICAgICB7e2J1dHRvbjFUZXh0fX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInB1bGwtcmlnaHQgbWItMiBtci0yIGJ0blwiIFtuZ0NsYXNzXT1cImJ1dHRvbjJTdHlsZVwiICpuZ0lmPVwic2hvd0J1dHRvbjJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrQ29uZmlybWF0aW9uKGJ1dHRvbjJBY3Rpb24sIGJ1dHRvbjJLZXkpXCI+e3tidXR0b24yVGV4dH19PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==