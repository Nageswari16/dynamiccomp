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
export class FormPageComponent {
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
    async getConfiguration() {
        const action = this.action ? this.action?.toLowerCase() : '';
        const data = await this.dynamicTabPageService.getActivePage(this.tabId, true, action).toPromise();
        return data;
        // });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.FormioService }, { token: i3.Store }, { token: MAT_DIALOG_DATA, optional: true }, { token: i4.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormPageComponent, selector: "app-form-page", inputs: { editId: "editId", pageId: "pageId", sourceid: "sourceid", externalParameters: "externalParameters", isReadOnly: "isReadOnly", componentId: "componentId" }, outputs: { afterSubmit: "afterSubmit", submissionDone: "submissionDone" }, providers: [SpeechRecognitionService, OCRService], viewQueries: [{ propertyName: "external_scanner", first: true, predicate: ["external_scanner"], descendants: true }, { propertyName: "validationPopup", first: true, predicate: ["validationPopup"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"], dependencies: [{ kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }, { kind: "component", type: i7.AlertComponent, selector: "app-alert" }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i9.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-form-page', providers: [SpeechRecognitionService, OCRService], template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL2R5bmFtaWMtdGFiLXBhZ2UvZm9ybS1wYWdlL2Zvcm0tcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2Zvcm0tcGFnZS9mb3JtLXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFFTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQWUsTUFBTSwwQkFBMEIsQ0FBQztBQUduRixPQUFPLEVBQWEsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR2xGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkYsT0FBTyxFQUFFLE1BQU0sRUFBUyxNQUFNLGFBQWEsQ0FBQztBQUs1QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sdURBQXVELENBQUM7Ozs7Ozs7Ozs7O0FBRy9HLE1BQU0sMEJBQTBCLEdBQUcsNEJBQTRCLENBQUM7QUFDaEUsTUFBTSxvQkFBb0IsR0FBRyx1QkFBdUIsQ0FBQztBQU9yRCxNQUFNLE9BQU8saUJBQWlCO0lBOEduQjtJQUNDO0lBQ0E7SUFDQTtJQUVBO0lBbEhGLGFBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN6RCxZQUFZLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDaEUsTUFBTSxDQUFNO0lBQ1osS0FBSyxDQUFNO0lBQ1gsUUFBUSxDQUFNO0lBQ2QsU0FBUyxDQUFNO0lBQ04sTUFBTSxDQUFNO0lBQ3JCLEVBQUUsQ0FBTTtJQUNSLGFBQWEsQ0FBTTtJQUNuQixlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUN0QixnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDdEIsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUN0QixlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksQ0FBTTtJQUNWLG9CQUFvQixHQUFrQixFQUFFLENBQUM7SUFDaEMsTUFBTSxDQUFNO0lBQ1osUUFBUSxDQUFTO0lBQ2pCLGtCQUFrQixDQUFTO0lBQ3BDLG9CQUFvQixDQUFNO0lBQzFCLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDZCxTQUFTLENBQWlDO0lBQ25CLGdCQUFnQixDQUFhO0lBQzlCLGVBQWUsQ0FBbUI7SUFDeEQsa0JBQWtCLENBQWlDO0lBQ2xELFVBQVUsQ0FBVTtJQUM3QixRQUFRLENBQVU7SUFDbEIsT0FBTyxDQUFNO0lBQ0gsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDaEQsUUFBUSxDQUFNO0lBQ2QsY0FBYyxDQUFNO0lBQ3BCLFlBQVksQ0FBVTtJQUN0QixrQkFBa0IsQ0FBVTtJQUM1QixTQUFTLENBQU07SUFDZixxQkFBcUIsQ0FBVTtJQUMvQixVQUFVLENBQVM7SUFDbkIsWUFBWSxDQUFTO0lBQ3JCLGNBQWMsQ0FBTTtJQUNwQixVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLGFBQWEsR0FBUSxFQUFFLENBQUM7SUFDeEIsT0FBTyxDQUFNO0lBQ2IsU0FBUyxDQUFNO0lBQ2YsT0FBTyxDQUFNO0lBQ2IsUUFBUSxDQUFTO0lBQ2pCLFlBQVksQ0FBZTtJQUMzQixjQUFjLENBQWU7SUFDN0IsUUFBUSxDQUFXO0lBQ25CLFNBQVMsQ0FBbUI7SUFDNUIsd0JBQXdCLENBQTJCO0lBQ25ELGFBQWEsQ0FBc0I7SUFDbkMsR0FBRyxDQUFhO0lBQ2hCLGVBQWUsQ0FBK0I7SUFDOUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUVqQixNQUFNLENBQWtCO0lBQ3hCLGNBQWMsQ0FBTTtJQUNwQixxQkFBcUIsQ0FBd0I7SUFDN0Msb0JBQW9CLENBQXVCO0lBQzNDLFdBQVcsQ0FBYztJQUN6QixjQUFjLEdBQVEsRUFBRSxDQUFDO0lBQ3pCLGFBQWEsR0FBUSxFQUFFLENBQUM7SUFDeEIsY0FBYyxDQUFTO0lBQ3ZCLGdCQUFnQixDQUFNO0lBQ3RCLFlBQVksQ0FBZTtJQUMzQixZQUFZLENBQU07SUFDbEIsU0FBUyxDQUFVO0lBQ25CLFlBQVksQ0FBUztJQUNyQixNQUFNLENBQVM7SUFDZixXQUFXLENBQVU7SUFDckIsaUJBQWlCLENBQXNCO0lBQ3ZDLFNBQVMsQ0FBeUM7SUFDbEQsaUJBQWlCLENBQU07SUFDdkIsWUFBWSxDQUFNO0lBQ2xCLE1BQU0sQ0FBUztJQUNmLFlBQVksR0FBVSxFQUFFLENBQUM7SUFDekIsY0FBYyxDQUFNO0lBQ3BCLG9CQUFvQixDQUF1QjtJQUMzQyxPQUFPLENBQU07SUFDYixTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLFNBQVMsQ0FBTTtJQUNmLFVBQVUsQ0FBTTtJQUNoQixZQUFZLENBQU07SUFDbEIsS0FBSyxDQUFNO0lBQ1gsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNwQixTQUFTLENBQVc7SUFDVixXQUFXLENBQU07SUFDMUIsaUJBQWlCLENBQWlCO0lBQ2xDLGdCQUFnQixDQUE2QjtJQUM5QyxpQkFBaUIsQ0FBZTtJQUN0QixjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUN2RCxtQkFBbUIsQ0FBUztJQUM1QixXQUFXLENBQU07SUFDakIsV0FBVyxDQUFNO0lBQ2pCLFdBQVcsQ0FBTTtJQUNqQixXQUFXLENBQU07SUFDakIsVUFBVSxDQUFNO0lBQ2hCLFVBQVUsQ0FBSztJQUNmLGFBQWEsQ0FBTTtJQUNuQixhQUFhLENBQU07SUFDbkIsWUFBWSxDQUFVO0lBQ3RCLFlBQVksQ0FBTTtJQUNsQixZQUFZLENBQU07SUFDbEIsTUFBTSxDQUFZO0lBQ2xCLFdBQVcsQ0FBSztJQUNoQixVQUFVLENBQUs7SUFDZixtQkFBbUIsQ0FBTTtJQUN6QixZQUNFLFFBQWtCLEVBQ1gsTUFBYyxFQUNiLEtBQXFCLEVBQ3JCLE9BQXNCLEVBQ3RCLEtBQXNCLEVBQ08sSUFBSSxFQUNqQyxhQUF1QztRQUx4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUV0QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFFL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFjLFdBQVcsQ0FBQyxDQUFDO1FBQzFELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQWUsWUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFXLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBbUIsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBMkIsd0JBQXdCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQXNCLG1CQUFtQixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFhLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF3QixxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF1QixvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFxQixrQkFBa0IsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF1QixvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBVyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQVksU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNsRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN2RTtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztRQUN4RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksWUFBWSxFQUFFLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksWUFBWSxFQUFFLEtBQUssRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDbkM7UUFDRCxJQUFJLFlBQVksRUFBRSxRQUFRLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLGtEQUFrRDtZQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRTtRQUVELE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7UUFFdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9GLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsSUFBSTtRQUNyQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekQsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRCxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDMUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUMzQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQy9ELElBQUksWUFBWSxFQUFFO3dCQUNoQixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBcUIsQ0FBQzt3QkFDckgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQzFDLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0NBQ3JDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dDQUM1QixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQ0FDM0MsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7NkJBQ3pDO2lDQUFNO2dDQUNMLGFBQWEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dDQUNoQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDckMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7NkJBQy9DO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUUsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZTttQkFDOUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7Z0JBQ2hELEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDMUQsSUFBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFBO2FBQ0g7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5RSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN0RixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtpQkFBTSxJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM1RixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtpQkFBTSxJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUMzRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzVFLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFO29CQUMzQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDOUU7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM3RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxnQkFBZ0I7UUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFRLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2RyxPQUFPLElBQUksQ0FBQztRQUNaLE1BQU07SUFDUixDQUFDO0lBRUQsZUFBZSxDQUFDLHNCQUFnQztRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixxQ0FBcUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixJQUFHLHNCQUFzQixFQUFDO29CQUN4QixJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTTt3QkFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDMUI7cUJBQUs7b0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDekI7Z0JBQ0QsK0NBQStDO1lBQ2pELENBQUMsRUFDRCxHQUFHLENBQUMsRUFBRTtnQkFDSixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7b0JBQ2IsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsS0FBTSxHQUFHLEVBQUU7d0JBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUM7cUJBQ2xHO2lCQUNGO1lBQ0gsQ0FBQyxDQUNBLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFFLElBQUksSUFBSSxFQUFFO29CQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJO29CQUNKLHFDQUFxQztvQkFDckMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNqQyx1Q0FBdUM7d0JBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQy9HLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVFO2FBQU0sSUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUNqRTtZQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDNUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDaEYsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEc7UUFFRCxJQUFJLENBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDNUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDM0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUMzRCxDQUFDO0lBRUQsdUNBQXVDO0lBQy9CLFdBQVcsQ0FBQyxNQUFXO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksTUFBTSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzthQUNqRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO2FBQ2pEO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7YUFDaEQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksTUFBTSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzthQUNqRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM5RDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUc7b0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU87aUJBQ2pDLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHO3dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7cUJBQ3JCLENBQUM7b0JBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUN4QztxQkFBTTtvQkFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO2lCQUNuQzthQUNGO1lBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLElBQUksUUFBUSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUUsbUJBQW1CLENBQUEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixDQUFDO1lBQ3ZMLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO1lBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7WUFDbkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3hFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDeFA7WUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBVztRQUNyQixPQUFPLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxNQUFNO1FBQzNCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3pCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQzFELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDO1lBQ25ELElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2FBQy9CO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzdCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO2FBQU0sSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLDBCQUEwQixFQUFFO1lBQzNGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3RSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDdkU7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO1lBQ3BELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUVaLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JILGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QztTQUNGO1FBQ0QsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFDRCx3QkFBd0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdkI7UUFDRCxTQUFTO1FBQ1QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzRyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzdDO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDMUI7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixpQkFBaUI7UUFDakIsb0NBQW9DO1FBQ3BDLElBQUk7SUFDTixDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQU07UUFDakIsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtnQkFDN0YsSUFBSSxNQUFNLEVBQUUsSUFBSSxJQUFJLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN0RjtxQkFBTSxJQUFJLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQztvQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzlGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNmLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVM7UUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sRUFBRSxDQUFDO1NBQ1g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtRQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7UUFDL0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxJQUFJLEVBQUUsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUN4RDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFNO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNwRDtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTywyQkFBMkIsQ0FBQyxJQUFTO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQUs7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDJFQUEyRTtJQUMzRSxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsU0FBUztRQUN2QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDckYsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ2xELElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQzdDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUM7UUFDRixJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksRUFBRSxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDckYsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsSUFBSSxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsSUFBSSxJQUFJLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDNUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxFQUFFLGlCQUFpQixDQUFBO1NBQ25EO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLFVBQVUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN0QyxPQUFPO1NBQ1I7UUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO1lBQ3BELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFFO2dCQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEgsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFFckY7U0FDRjtRQUNELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzlELE1BQU0sSUFBSSxHQUNSLGNBQWMsQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNsRixDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQzFCLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDM0QsTUFBTSxXQUFXLEdBQUc7b0JBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQztnQkFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDbEIsTUFBTSxXQUFXLEdBQUc7b0JBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQztnQkFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLE1BQU0sV0FBVyxHQUFHO29CQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQztZQUNGLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5RCxJQUFHLGdCQUFnQixLQUFLLGlCQUFpQixFQUFHO2dCQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7Z0JBQ3ZMLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsV0FBVztRQUMxQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUMzRSxNQUFNLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXRDLGtCQUFrQjtZQUNsQix3RkFBd0Y7WUFDeEYscUJBQXFCO1lBQ3JCLElBQUk7WUFFSixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNuRyxJQUFJLGNBQWMsRUFBRSxpQkFBaUIsRUFBRTtnQkFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNwQztZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekcsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3pCLElBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLHVCQUF1QixDQUFFLElBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLG1CQUFtQjt3QkFDNUwsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pCO1lBQUEsQ0FBQztZQUNKLGtFQUFrRTtZQUNsRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDeEksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4QjtRQUNILENBQUMsRUFDRCxNQUFNLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsYUFBYSxDQUFDLElBQUk7UUFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQU07UUFDbEIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7WUFDL0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztZQUMvRCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNmLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzNFLHFCQUFxQjtZQUN2QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxXQUFXO1FBQ3BCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMzRCxJQUFJLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUM7U0FDckM7UUFDRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25FLElBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzFGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQzNGLE1BQU0sQ0FBQyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLElBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssbUJBQW1CLElBQUksSUFBSSxLQUFLLGNBQWMsQ0FBQyxFQUFDO2dCQUN6RixJQUFHLElBQUksS0FBSyxTQUFTO29CQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFO3dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHNGQUFzRixDQUFDLENBQUM7b0JBQ2pILENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDVixJQUFHLElBQUksS0FBSyxtQkFBbUIsSUFBSSxJQUFJLEtBQUssY0FBYztvQkFDeEQsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO29CQUNoRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7b0JBQy9ELElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUN4QjtxQkFBTSxJQUFJLE1BQU0sRUFBRTtvQkFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7b0JBQy9ELElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QixJQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBQzt3QkFDbkcsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7NEJBQ3pCLElBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLG1CQUFtQjtnQ0FDMUwsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDOzRCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzNGOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDakI7cUJBQ0Y7aUJBQ0E7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pDO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHO29CQUNuQixJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVE7aUJBQzVCLENBQUM7Z0JBQ0YsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDbkcsSUFBSSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDbEQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztvQkFDcEcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxFQUNELE1BQU0sQ0FBQyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQ0YsQ0FBQztJQUVKLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO2dCQUNyQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUN4QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDckQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLO1FBQzVCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUMvQztTQUNGO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFFTixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0osSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBQztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsaUNBQWlDO1FBQ2pDLCtHQUErRztRQUMvRyx3RUFBd0U7UUFDeEUsdUVBQXVFO1FBQ3ZFLFNBQVM7UUFDVCxvRUFBb0U7UUFDcEUsdUtBQXVLO1FBQ3ZLLGlEQUFpRDtRQUNqRCwwQkFBMEI7UUFDMUIsNEhBQTRIO1FBQzVILGtGQUFrRjtRQUNsRix5R0FBeUc7UUFDekcsSUFBSTtJQUNOLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLO1FBQ3RCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtZQUNuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyw4QkFBOEIsQ0FBQztnQkFDekQsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyw4QkFBOEIsQ0FBQzthQUN4RDtZQUNELE1BQU0sSUFBSSxHQUFHO2dCQUNYLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFFBQVEsRUFBRSxRQUFRO2FBQ25CLENBQUM7WUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFJO1FBQ2pCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3JELE1BQU0sQ0FBQyxFQUFFO2dCQUNQLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3RDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QjtxQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNyQztxQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNuQztZQUNILENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLGVBQWU7UUFDMUIsSUFBSSxlQUFlLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNyRCxLQUFLLE1BQU0sSUFBSSxJQUFJLGVBQWUsRUFBRTtnQkFDbEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO2dCQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQUc7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEdBQUcsR0FBRyxDQUFDO1lBQ3RELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ3pEO1FBQ0Qsc0lBQXNJO1FBQ3RJLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLFNBQVMsQ0FBQTtRQUNsRixJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxTQUFTLElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUN4RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxFQUFFLGlCQUFpQixDQUFDO1lBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLFdBQVcsQ0FBQztZQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxXQUFXLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUUsVUFBVSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksRUFBRSxhQUFhLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUUsYUFBYSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLFlBQVksQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxZQUFZLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhO2dCQUFFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDNUY7UUFFSCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEUsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMzQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7Z0JBQzdDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsMkRBQTJELENBQUM7Z0JBQ2xGLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9CLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FDeEIsT0FBTyxFQUNQLEdBQUcsQ0FBQyxFQUFFO29CQUNKLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLEVBQ0QsS0FBSyxDQUNOLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELG9CQUFvQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNsQyxNQUFNLGdCQUFnQixHQUFHLEdBQUcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU07WUFDM0QsQ0FBQyxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEQsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVM7WUFDOUMsV0FBVztZQUNYLEtBQUssQ0FBQyxFQUFFO2dCQUNOLElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDekQsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7aUJBQ2xDO1lBQ0gsQ0FBQztZQUNELFNBQVM7WUFDVCxHQUFHLENBQUMsRUFBRTtnQkFDSixJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO2FBQ3ZEO1lBQ0QsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUNELG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRztRQUNuRCxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLGdCQUFnQixDQUFDLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztTQUN2RDtRQUNELElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUM7YUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssYUFBYSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDakQ7YUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssZ0JBQWdCLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyw2RkFBNkYsQ0FBQztJQUN2RyxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8saUlBQWlJLENBQUM7SUFDM0ksQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLGdEQUFnRCxDQUFDO0lBQzFELENBQUM7SUFFRCwyQkFBMkIsQ0FBQyxJQUFJO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxJQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxvQkFBb0I7WUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekUsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFzQjtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN4QyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLFdBQVcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ25ELFFBQVEsQ0FBQyxFQUFFO1lBQ1QsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFDRCxJQUFJLENBQUMsRUFBRTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxNQUFNO1FBQ3ZCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1lBQ3JELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO2dCQUMxRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNqQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO29CQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckcsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hHLE1BQU0sU0FBUyxHQUFHLEVBQUUsR0FBRyxVQUFVLEVBQUUsR0FBRyxVQUFVLEVBQUUsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUMxQztTQUNGO0lBQ0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQUk7UUFDdEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSztZQUNWLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUN0QixJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVc7WUFDekIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1lBQ3pDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFDbkM7WUFDQSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTtnQkFDeEQsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO2FBQzVCO1lBQ0QsTUFBTSxVQUFVLEdBQUc7Z0JBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3BCLENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVqQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDckM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGdDQUFnQyxDQUFDLEtBQUs7UUFDcEMsSUFDRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssb0JBQW9CO1lBQ3ZELENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxrQkFBa0I7WUFDaEMsS0FBSyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQzNCO1lBQ0EsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxLQUFLLEVBQUUsSUFBSSxFQUFFLGNBQWMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3hDLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLEtBQUssRUFBRSxJQUFJLEVBQUUsY0FBYyxLQUFLLElBQUksRUFBRTtnQkFDL0MsR0FBRyxHQUFHLDZCQUE2QixDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQzthQUNoQztZQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUNuRCxNQUFNLENBQUMsRUFBRTtnQkFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUN2QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhO2lCQUMxQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFHO1FBQ2IsSUFBSSxHQUFHLEtBQUssY0FBYyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1NBQ2xGO2FBQU0sSUFBSSxHQUFHLEtBQUssNkJBQTZCLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJO1lBQ25DLFFBQVEsRUFBRSxPQUFPLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtTQUNwRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDdEUsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNaLE1BQU0sZ0JBQWdCLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUQsTUFBTSx1QkFBdUIsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNwRyxDQUFDLElBQVMsRUFBRSxFQUFFO29CQUNaLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO3dCQUM5QixNQUFNLE1BQU0sR0FBRzs0QkFDYixJQUFJLEVBQUUsT0FBTyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7NEJBQy9DLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7eUJBQ3ZDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQzt3QkFDcEQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTs0QkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3lCQUN2Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUMzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs0QkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7eUJBQ3hCO3FCQUNGO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7cUJBQy9DO2dCQUNILENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtvQkFDTixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsQ0FDRixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQkFBc0IsQ0FBQyxLQUFLO1FBQzFCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsU0FBUyxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FDaEQsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNYLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ25CLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU0sYUFBYSxHQUFHLE9BQU8sRUFBRSxhQUFhLENBQUM7Z0JBQzdDLE1BQU0sa0JBQWtCLEdBQUcsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxrQkFBa0I7UUFDM0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pELFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksa0JBQWtCLEVBQUU7b0JBQ3RCLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDdEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzVFLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsb0JBQW9CLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxRQUFRO1FBQ2pFLElBQ0UsT0FBTztZQUNQLE9BQU87WUFDUCxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFLFdBQVcsRUFBRTtZQUNqRCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUN4RjtZQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsS0FBSyxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLENBQUMsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUM5RTtnQkFDRCxPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0QsY0FBYyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFELENBQUM7d0dBenhDVSxpQkFBaUIsZ0pBa0hOLGVBQWU7NEZBbEgxQixpQkFBaUIseVJBRmpCLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLHdVQ2pEbkQsdy9FQWlEQTs7NEZERWEsaUJBQWlCO2tCQU43QixTQUFTOytCQUNFLGVBQWUsYUFHZCxDQUFDLHdCQUF3QixFQUFFLFVBQVUsQ0FBQzs7MEJBb0g5QyxRQUFROzswQkFBSSxNQUFNOzJCQUFDLGVBQWU7bUZBM0c1QixNQUFNO3NCQUFkLEtBQUs7Z0JBV0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUl5QixnQkFBZ0I7c0JBQTlDLFNBQVM7dUJBQUMsa0JBQWtCO2dCQUNDLGVBQWU7c0JBQTVDLFNBQVM7dUJBQUMsaUJBQWlCO2dCQUVuQixVQUFVO3NCQUFsQixLQUFLO2dCQUdJLFdBQVc7c0JBQXBCLE1BQU07Z0JBMEJQLE1BQU07c0JBREwsU0FBUzt1QkFBQyxRQUFRO2dCQWdDVCxXQUFXO3NCQUFuQixLQUFLO2dCQUlHLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZyxNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybWlvQ29tcG9uZW50IH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuaW1wb3J0IHsgRmlsZUVycm9yLCBOZ3hmVXBsb2FkZXJTZXJ2aWNlIH0gZnJvbSAnbmd4Zi11cGxvYWRlcic7XHJcbmltcG9ydCB7IGNvbHVtbnNKc29uIH0gZnJvbSAnLi4vLi4vQGNvcmUvSlNPTi5jb25zdCc7XHJcbmltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvc3BlZWNoLXJlY29nbml0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPQ1JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9vY3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvcGxhdGZvcm0tZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9keW5hbWljLXRhYi1wYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljc2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZHluYW1pY3NlYXJjaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYXR0YWNobWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IE9jclZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9vY3ItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybWlvU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZm9ybWlvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgcHVibGlzaEV2ZW50IH0gZnJvbSAnLi4vLi4vQHNoYXJlZC9tYXN0ZXItdmlldy1zdGF0ZS9tYXN0ZXItdmlldy5hY3Rpb25zJztcclxuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50U3RhdGUgfSBmcm9tICcuLi8uLi9Ac2hhcmVkL21hc3Rlci12aWV3LXN0YXRlL21hc3Rlci12aWV3LnN0YXRlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL2NvcmUuc3RhdGUnO1xyXG5pbXBvcnQgeyBzZWxlY3RDb21wb25lbnRDb25maWdCeUlkLCBzZWxlY3RFdmVudCB9IGZyb20gJy4uLy4uL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcuc2VsZWN0b3JzJztcclxuXHJcbmRlY2xhcmUgY29uc3QgJDogYW55O1xyXG5jb25zdCBTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORyA9ICdTdHJ1Y3R1cmVkIERlY2lzaW9uIE1ha2luZyc7XHJcbmNvbnN0IFNPTUVUSElOR19XRU5UX1dST05HID0gJ1NvbWV0aGluZyBXZW50IFdyb25nISc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLCBPQ1JTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHJpdmF0ZSBzdWJtaXRTdWNjZXNzOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwcml2YXRlIHN1Ym1pdEZhaWxlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZm9ybUlkOiBhbnk7XHJcbiAgdGFiSWQ6IGFueTtcclxuICBqc29uRm9ybTogYW55O1xyXG4gIGZyb21UaXRsZTogYW55O1xyXG4gIEBJbnB1dCgpIGVkaXRJZDogYW55O1xyXG4gIGlkOiBhbnk7XHJcbiAgc3VibWl0dGVkRGF0YTogYW55O1xyXG4gIGFmdGVyRW50aXR5TmFtZSA9ICcnO1xyXG4gIGFmdGVyUnVsZUFwcE5hbWUgPSAnJztcclxuICBiZWZvcmVFbnRpdHlOYW1lID0gJyc7XHJcbiAgYmVmb3JlUnVsZUFwcE5hbWUgPSAnJztcclxuICBiZWZvcmVydWxlbWV0aG9kID0gJyc7XHJcbiAgYWZ0ZXJydWxlbWV0aG9kID0gJyc7XHJcbiAgdXNlcjogYW55O1xyXG4gIG11bHRpU2VsZWN0RHJvcERvd25zOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgQElucHV0KCkgcGFnZUlkOiBhbnk7XHJcbiAgQElucHV0KCkgc291cmNlaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBleHRlcm5hbFBhcmFtZXRlcnM6IHN0cmluZztcclxuICBwYWdlRGF0YVN1YnNjcmlwdGlvbjogYW55O1xyXG4gIGlzRGlhbG9nUG9wdXAgPSBmYWxzZTtcclxuICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRlbXBsYXRlUmVmPGFueT4+O1xyXG4gIEBWaWV3Q2hpbGQoJ2V4dGVybmFsX3NjYW5uZXInKSBleHRlcm5hbF9zY2FubmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3ZhbGlkYXRpb25Qb3B1cCcpIHZhbGlkYXRpb25Qb3B1cDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBwcml2YXRlIHZhbGlkYXRpb25Qb3B1cFJlZjogTWF0RGlhbG9nUmVmPFRlbXBsYXRlUmVmPGFueT4+O1xyXG4gIEBJbnB1dCgpIGlzUmVhZE9ubHk6IGJvb2xlYW47XHJcbiAgc2hvd0JhY2s6IGJvb2xlYW47XHJcbiAgaXNUaXRsZTogYW55O1xyXG4gIEBPdXRwdXQoKSBhZnRlclN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHBlcnNvbklkOiBhbnk7XHJcbiAgdHJpZ2dlclJlZnJlc2g6IGFueTtcclxuICBmcm9tV29ya0Zsb3c6IGJvb2xlYW47XHJcbiAgY2xpY2tlZFNlcnZpY2VDYXNlOiBib29sZWFuO1xyXG4gIHNlcnZpY2VJZDogYW55O1xyXG4gIHNwZWVjaFJlY29nbmluaXRpb25PbjogYm9vbGVhbjtcclxuICBzcGVlY2hEYXRhOiBzdHJpbmc7XHJcbiAgbm90aWZpY2F0aW9uOiBzdHJpbmc7XHJcbiAgb3JnYW5pemF0aW9uSWQ6IGFueTtcclxuICBGb3JtSW5wdXRzID0gW107XHJcbiAgc2Nhbm5lckNvbmZpZzogYW55ID0ge307XHJcbiAgdGFiRGF0YTogYW55O1xyXG4gIG5hcnJhdGl2ZTogYW55O1xyXG4gIHB1cnBvc2U6IGFueTtcclxuICBwYWdldHlwZTogc3RyaW5nO1xyXG4gIGxvY2Fsc3RvcmFnZTogTG9jYWxTZXJ2aWNlO1xyXG4gIHNlc3Npb25TdG9yYWdlOiBMb2NhbFNlcnZpY2U7XHJcbiAgbG9jYXRpb246IExvY2F0aW9uO1xyXG4gIGRhdGFTdG9yZTogRGF0YVN0b3JlU2VydmljZTtcclxuICBzcGVlY2hSZWNvZ25pdGlvblNlcnZpY2U6IFNwZWVjaFJlY29nbml0aW9uU2VydmljZTtcclxuICB1cGxvYWRTZXJ2aWNlOiBOZ3hmVXBsb2FkZXJTZXJ2aWNlO1xyXG4gIG9jcjogT0NSU2VydmljZTtcclxuICBhcHBvaW50bWVudExpc3Q6IFByb21pc2U8Ym9vbGVhbj4gfCB1bmRlZmluZWQ7XHJcbiAgaXNmb3JtSU8gPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdmb3JtSU8nKVxyXG4gIGZvcm1JTzogRm9ybWlvQ29tcG9uZW50O1xyXG4gIGN1cnJlbnRZb3V0aElkOiBhbnk7XHJcbiAgZHluYW1pY1RhYlBhZ2VTZXJ2aWNlOiBEeW5hbWljVGFiUGFnZVNlcnZpY2U7XHJcbiAgZHluYW1pY1NlYXJjaFNlcnZpY2U6IER5bmFtaWNzZWFyY2hTZXJ2aWNlO1xyXG4gIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcclxuICBhdHRhY2htZW50SW5mbzogYW55ID0ge307XHJcbiAgdXBsb2FkZWRGaWxlczogYW55ID0gW107XHJcbiAgcGFyZW50R3JpZFBhZ2U6IHN0cmluZztcclxuICBwYXJlbnRHcmlkUGFnZUlkOiBhbnk7XHJcbiAgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2U7XHJcbiAgdXBsb2FkZWRGaWxlOiBhbnk7XHJcbiAgaXNPY3JGb3JtOiBib29sZWFuO1xyXG4gIGRvY3VtZW50VHlwZTogc3RyaW5nO1xyXG4gIGltZ1VybDogc3RyaW5nO1xyXG4gIHNob3dPY3JGb3JtOiBib29sZWFuO1xyXG4gIGF0dGFjaG1lbnRTZXJ2aWNlITogQXR0YWNobWVudHNTZXJ2aWNlO1xyXG4gIGltYWdlRGF0YTogeyBjb250ZW50VHlwZTogYW55OyBmaWxlTmFtZTogc3RyaW5nIH07XHJcbiAgdGFibGVzY2hlbWFjb25maWc6IGFueTtcclxuICBmb3JtUmVzcG9uc2U6IGFueTtcclxuICBhY3Rpb246IHN0cmluZztcclxuICBjb250ZW50QXJyYXk6IGFueVtdID0gW107XHJcbiAgdGVtcGxhdGVSZXN1bHQ6IGFueTtcclxuICBvY3JWYWxpZGF0aW9uU2VydmljZTogT2NyVmFsaWRhdGlvblNlcnZpY2U7XHJcbiAgZGF0YVN1YjogYW55O1xyXG4gIGJ0blZlcmlmeSA9IGZhbHNlO1xyXG4gIGVkaXRWYWx1ZTogYW55O1xyXG4gIGxvZ2dlZFVzZXI6IGFueTtcclxuICBwcm92aWRlckRhdGE6IGFueTtcclxuICBjaGVjazogYW55O1xyXG4gIHNob3diYWNrYnRuID0gZmFsc2U7XHJcbiAgc2hvd1RpdGxlIDogYm9vbGVhbjtcclxuICAgQElucHV0KCkgY29tcG9uZW50SWQ6IGFueTtcclxuICAgc2VsZWN0ZWRDb21wb25lbnQ6IENvbXBvbmVudFN0YXRlO1xyXG4gICBjb21wb25lbnRDb25maWckOiBPYnNlcnZhYmxlPENvbXBvbmVudFN0YXRlPjtcclxuICBldmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIEBPdXRwdXQoKSBzdWJtaXNzaW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcclxuICBjb25maXJtYXRpb25tZXNzYWdlOiBzdHJpbmc7XHJcbiAgc2hvd0J1dHRvbjE6IGFueTtcclxuICBzaG93QnV0dG9uMjogYW55O1xyXG4gIGJ1dHRvbjFUZXh0OiBhbnk7XHJcbiAgYnV0dG9uMlRleHQ6IGFueTtcclxuICBidXR0b24xS2V5OiBhbnk7XHJcbiAgYnV0dG9uMktleTphbnk7XHJcbiAgYnV0dG9uMUFjdGlvbjogYW55O1xyXG4gIGJ1dHRvbjJBY3Rpb246IGFueTtcclxuICBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXHJcbiAgYnV0dG9uMVN0eWxlOiBhbnk7XHJcbiAgYnV0dG9uMlN0eWxlOiBhbnk7XHJcbiAgZGlhbG9nOiBNYXREaWFsb2c7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGFwcFNlcnZpY2U6YW55O1xyXG4gIGZhbGxiYWNrSWRGcm9tUm91dGU6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBfZm9ybUlPOiBGb3JtaW9TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIGRhdGEsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXTtcclxuICAgICAgICB0aGlzLmFwcFNlcnZpY2UgPSByZXNbJ0FQUFNFUlZJQ0UnXTtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZSA9IHJlc1snQUxFUlRTRVJWSUNFJ107XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEF1dGhTZXJ2aWNlPihBdXRoU2VydmljZSk7XHJcbiAgICAvLyB0aGlzLmFsZXJ0U2VydmljZSA9IGluamVjdG9yLmdldDxBbGVydFNlcnZpY2U+KEFsZXJ0U2VydmljZSk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZSA9IGluamVjdG9yLmdldDxMb2NhbFNlcnZpY2U+KExvY2FsU2VydmljZSk7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gaW5qZWN0b3IuZ2V0PExvY2F0aW9uPihMb2NhdGlvbik7XHJcbiAgICB0aGlzLmRhdGFTdG9yZSA9IGluamVjdG9yLmdldDxEYXRhU3RvcmVTZXJ2aWNlPihEYXRhU3RvcmVTZXJ2aWNlKTtcclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PFNwZWVjaFJlY29nbml0aW9uU2VydmljZT4oU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlKTtcclxuICAgIHRoaXMudXBsb2FkU2VydmljZSA9IGluamVjdG9yLmdldDxOZ3hmVXBsb2FkZXJTZXJ2aWNlPihOZ3hmVXBsb2FkZXJTZXJ2aWNlKTtcclxuICAgIHRoaXMub2NyID0gaW5qZWN0b3IuZ2V0PE9DUlNlcnZpY2U+KE9DUlNlcnZpY2UpO1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8RHluYW1pY1RhYlBhZ2VTZXJ2aWNlPihEeW5hbWljVGFiUGFnZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZSA9IGluamVjdG9yLmdldDxEeW5hbWljc2VhcmNoU2VydmljZT4oRHluYW1pY3NlYXJjaFNlcnZpY2UpO1xyXG4gICAgdGhpcy5hdHRhY2htZW50U2VydmljZSA9IGluamVjdG9yLmdldDxBdHRhY2htZW50c1NlcnZpY2U+KEF0dGFjaG1lbnRzU2VydmljZSk7XHJcbiAgICB0aGlzLm9jclZhbGlkYXRpb25TZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PE9jclZhbGlkYXRpb25TZXJ2aWNlPihPY3JWYWxpZGF0aW9uU2VydmljZSk7XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZSA9IGluamVjdG9yLmdldDxOZ2JNb2RhbD4oTmdiTW9kYWwpO1xyXG4gICAgdGhpcy5kaWFsb2cgPSBpbmplY3Rvci5nZXQ8TWF0RGlhbG9nPihNYXREaWFsb2cpO1xyXG4gICAgdGhpcy51c2VyID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICBpZiAodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgncGFyZW50R3JpZFBhZ2UnKSkge1xyXG4gICAgICB0aGlzLnNob3diYWNrYnRuID0gdHJ1ZTtcclxuICAgICAgY29uc3QgcGFyZW50R3JpZFBhZ2VPYmogPSBKU09OLnBhcnNlKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3BhcmVudEdyaWRQYWdlJykpO1xyXG4gICAgICBjb25zdCBjdXJyZW50cGFnZSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3BhZ2VuYW1lJyk7XHJcbiAgICAgIHRoaXMucGFyZW50R3JpZFBhZ2UgPSBjdXJyZW50cGFnZSA/IGN1cnJlbnRwYWdlIDogJyc7XHJcbiAgICAgIHRoaXMucGFyZW50R3JpZFBhZ2VJZCA9IHBhcmVudEdyaWRQYWdlT2JqID8gcGFyZW50R3JpZFBhZ2VPYmouaWQgOiAnJztcclxuICAgIH1cclxuICAgIHRoaXMub3JnYW5pemF0aW9uSWQgPSB0aGlzLnVzZXI/LnVzZXJXb3JrSW5mbz8ub3JnYW5pemF0aW9uPy5pZDtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQYWdlVXNlckRhdGEgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tEYXRhKGRhdGEpO1xyXG4gICAgdGhpcy5zb3VyY2VpZCA9IHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuY2xpY2thYmxlRGF0YTtcclxuICAgIGNvbnN0IG5hdmlnYXRlRGF0YSA9IHRoaXMucm91dGVyPy5nZXRDdXJyZW50TmF2aWdhdGlvbigpPy5leHRyYXM/LnN0YXRlO1xyXG4gICAgdGhpcy5zaG93QmFjayA9IG5hdmlnYXRlRGF0YT8uZXh0ZXJuYWxMaW5rID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgaWYgKG5hdmlnYXRlRGF0YT8uaXNSZWFkT25seSkge1xyXG4gICAgICB0aGlzLmlzUmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKG5hdmlnYXRlRGF0YT8udGl0bGUpIHtcclxuICAgICAgdGhpcy5pc1RpdGxlID0gbmF2aWdhdGVEYXRhLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgaWYgKG5hdmlnYXRlRGF0YT8ucGVyc29uSWQpIHtcclxuICAgICAgdGhpcy5wZXJzb25JZCA9IG5hdmlnYXRlRGF0YS5wZXJzb25JZDtcclxuICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5vbkNoYW5nZVBlcnNvbklkID0gbmF2aWdhdGVEYXRhLnBlcnNvbklkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zcGVlY2hSZWNvZ25pbml0aW9uT24gPSBmYWxzZTtcclxuICAgIHRoaXMuc3BlZWNoRGF0YSA9ICcnO1xyXG4gICAgaWYgKGhpc3Rvcnkuc3RhdGUudGl0bGUpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGl0bGUnLCBoaXN0b3J5Py5zdGF0ZT8udGl0bGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhpcy5pc1RpdGxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndGl0bGUnKTtcclxuICAgICAgdGhpcy5pc1RpdGxlID0gJyAvICcgKyAnQWRkICcgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnZXQtdGl0bGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dldC10aXRsZScpO1xyXG4gICAgaWYgKGdldFRpdGxlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9ICdBZGQgJyArIGdldFRpdGxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1RpdGxlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50WW91dGhJZCA9IHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgIHRoaXMuYXR0YWNobWVudEluZm8gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFNoYXJlZE1lc3NhZ2UoKTtcclxuICAgIHRoaXMuRm9ybUlucHV0cyA9IFtdO1xyXG4gICAgdGhpcy50cmlnZ2VyUmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHRoaXMuaXNSZWFkT25seSA9IGhpc3Rvcnk/LnN0YXRlPy5pc1JlYWRPbmx5ID8gdHJ1ZSA6IHRoaXMuaXNSZWFkT25seTtcclxuICAgIHRoaXMucGVyc29uSWQgPSBoaXN0b3J5Py5zdGF0ZT8ucGVyc29uSWQ7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGVyc29uSWQgPSBoaXN0b3J5Py5zdGF0ZT8ucGVyc29uSWQ7XHJcblxyXG4gICAgdGhpcy5zaG93QmFjayA9IChoaXN0b3J5Py5zdGF0ZT8uZXh0ZXJuYWxMaW5rICYmICFoaXN0b3J5Py5zdGF0ZT8uaXNIaWRlQmFjaykgfHwgdGhpcy5zaG93QmFjaztcclxuICAgIHRoaXMucGFnZUlkID0gaGlzdG9yeT8uc3RhdGU/LnBhZ2VJZCA/IGhpc3Rvcnk/LnN0YXRlPy5wYWdlSWQgOiB0aGlzLnBhZ2VJZDtcclxuICAgIHRoaXMuYWN0aW9uID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgnZ3JpZEFjdGlvbicpIHx8IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2dyaWRBY3Rpb24nKTtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ2dyaWRBY3Rpb24nLCB0aGlzLmFjdGlvbilcclxuICAgIHRoaXMuYnRuVmVyaWZ5ID0gdGhpcy5hY3Rpb24gPT09ICdlZGl0JyA/IHRydWUgOiBmYWxzZTtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3RhYicpKSB7XHJcbiAgICAgIHRoaXMuc2hvd2JhY2tidG4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93VGl0bGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd1RpdGxlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uZGl0aW9uQ2hlY2tEYXRhKGRhdGEpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gZGF0YS5lZGl0SWQgPyBkYXRhLmVkaXRJZCA6IG51bGw7XHJcbiAgICAgIHRoaXMuaXNEaWFsb2dQb3B1cCA9IGRhdGEuaXNQb3B1cCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5wYWdlSWQgPSBkYXRhLnBhZ2VJZCA/IGRhdGEucGFnZUlkIDogdGhpcy5wYWdlSWQ7XHJcbiAgICAgIHRoaXMuaXNSZWFkT25seSA9IGRhdGEuaXNSZWFkT25seSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlZFVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0U2hhcmVkTWVzc2FnZShkYXRhKTtcclxuICAgICAgdGhpcy5yb3V0ZXJQYWdlRGF0YShkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uuc291cmNlSWRTZXJ2aWNlLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEgIT0gJycpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VJZCA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5zb3VyY2VJZFNlcnZpY2UubmV4dCgnJyk7XHJcbiAgICAgICAgdGhpcy5jbGlja2VkU2VydmljZUNhc2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FsbEdldEFQSSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnJlc3VsdC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdCAhPSAnJykge1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJTdWJtaXQuZW1pdChyZXN1bHQpO1xyXG4gICAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UucmVzdWx0Lm5leHQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZm9ybUlPKSB7XHJcbiAgICAgIHRoaXMuZm9ybUlPLmZvcm1pb1JlYWR5LnRoZW4oZm9ybUluc3RhbmNlID0+IHtcclxuICAgICAgICBmb3JtSW5zdGFuY2UucmVhZHkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlUGFzc3dvcmQnKTtcclxuICAgICAgICAgIGlmICh0b2dnbGVCdXR0b24pIHtcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkYXRhWyR7dG9nZ2xlQnV0dG9uWydhcmlhTGFiZWwnXX1dXCJdYCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChwYXNzd29yZEZpZWxkLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGQudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1leWUtc2xhc2gnKTtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1leWUnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC50eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1leWUnKTtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1leWUtc2xhc2gnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0RXZlbnQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZXZlbnROYW1lID09PSAnc3VibWl0JyAmJiBldmVudC5wYXlsb2FkLnNldHRpbmdzLm9uU3VibWl0UmVmcmVzaFxyXG4gICAgICAgICYmIGV2ZW50LnBheWxvYWQuc2V0dGluZ3Mub25TdWJtaXRSZWZyZXNoV2lkZ2V0cykge1xyXG4gICAgICAgICAgZXZlbnQucGF5bG9hZC5zZXR0aW5ncy5vblN1Ym1pdFJlZnJlc2hXaWRnZXRzLmZvckVhY2goeCA9PntcclxuICAgICAgICAgIGlmKFsnQVRQQkRNJywgJ0ZGUCddLmluY2x1ZGVzKHgucGFnZVR5cGUpKSAgdGhpcy5mb3JtSWQgPSB4LmlkOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlckNvbmZpZyh0cnVlKTsgXHJcbiAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJvdXRlclBhZ2VEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuZm9ybUlkID0gZGF0YS5wYWdlSWQ7XHJcbiAgICBpZiAoIXRoaXMuZm9ybUlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybUlkID0gdGhpcy5wYWdlSWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbXBvbmVudENvbmZpZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENvbXBvbmVudENvbmZpZ0J5SWQodGhpcy5jb21wb25lbnRJZCkpKTtcclxuICAgIHRoaXMuY29tcG9uZW50Q29uZmlnJC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50ID0gZGF0YSk7XHJcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RFdmVudCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd2JhY2tidG4gPSBmYWxzZTtcclxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmV2ZW50TmFtZSA9PT0gJ2VkaXQnICYmIGV2ZW50LnBheWxvYWQubWFwcGluZ0Zvcm1JZCA9PT0gdGhpcy5wYWdlSWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gZXZlbnQucGF5bG9hZC5pZDtcclxuICAgICAgICB0aGlzLmVkaXRJZCA9IGV2ZW50LnBheWxvYWQuaWQ7XHJcbiAgICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0Um91dGVyQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYoZXZlbnQgJiYgZXZlbnQuZXZlbnROYW1lID09PSAndmlldycgJiYgZXZlbnQucGF5bG9hZC5tYXBwaW5nRm9ybUlkID09PSB0aGlzLnBhZ2VJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBldmVudC5wYXlsb2FkLmlkO1xyXG4gICAgICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgICAgICB0aGlzLmdldFJvdXRlckNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKGV2ZW50ICYmIGV2ZW50LmV2ZW50TmFtZSA9PT0gJ2FkZCcgJiYgZXZlbnQucGF5bG9hZC5tYXBwaW5nRm9ybUlkID09PSB0aGlzLnBhZ2VJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdldFJvdXRlckNvbmZpZygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2V0U291cmNlKCk7XHJcbiAgICB0aGlzLmdldFBhZ2VUYWJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlVGFicygpIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldFBhZ2VCeUlkKHRoaXMuZm9ybUlkKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGFbMF0/LmFjdGl2ZVZlcnNpb24/LnBhZ2VuYW1lKSB7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnZXQtdGl0bGUnLCByZXN1bHQuZGF0YVswXT8uYWN0aXZlVmVyc2lvbj8ucGFnZW5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhYklkID0gcmVzdWx0LmRhdGFbMF0uYWN0aXZlVmVyc2lvbi5pZDtcclxuICAgICAgICB0aGlzLmdldFJvdXRlckNvbmZpZygpO1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdBZGQgJyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dldC10aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbiA/IHRoaXMuYWN0aW9uPy50b0xvd2VyQ2FzZSgpIDogJyc7XHJcbiAgICBjb25zdCBkYXRhOiBhbnkgPSBhd2FpdCB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRBY3RpdmVQYWdlKHRoaXMudGFiSWQsIHRydWUsIGFjdGlvbikudG9Qcm9taXNlKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um91dGVyQ29uZmlnKGlzQ29tcG9zaXRlUGFnZVJlZnJlc2g/OiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtSWQpIHtcclxuICAgICAgLy8gZ2V0IGNvbmZpZ3VyZSBVUkwgZ2V0LHBvc3QscHV0IFVSTFxyXG4gICAgICB0aGlzLmdldENvbmZpZ3VyYXRpb24oKS50aGVuKGNvbmZpZyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuICAgICAgICBpZihpc0NvbXBvc2l0ZVBhZ2VSZWZyZXNoKXtcclxuICAgICAgICAgIGlmKGNvbmZpZy5kYXRhLnBhZ2VEZXRhaWxzLmlkID09IHRoaXMuZm9ybUlkKVxyXG4gICAgICAgICAgdGhpcy5nZXRUZW1wbGF0ZShjb25maWcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgdGhpcy5nZXRUZW1wbGF0ZShjb25maWcpOyAgIFxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICBpZiAoZXJyLmVycm9yKSB7XHJcbiAgICAgICAgICBpZiAoZXJyPy5lcnJvcj8uc3RhdHVzQ29kZSA9PT0gIDQwMykge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcignWW91IGRvbuKAmXQgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwYWdlLiBQbGVhc2UgY29udGFjdCB0aGUgYWRtaW5pc3RyYXRvci4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5wYWdlSWQgJiYgIXRoaXMuZm9ybUlkKSB7XHJcbiAgICAgIHRoaXMucGFnZURhdGFTdWJzY3JpcHRpb24gPSB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmRhdGEuc3Vic2NyaWJlKHBhZ2UgPT4ge1xyXG4gICAgICAgIGlmIChwYWdlKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1JZCA9IHBhZ2U7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAvLyBnZXQgY29uZmlndXJlIFVSTCBnZXQscG9zdCxwdXQgVVJMXHJcbiAgICAgICAgICB0aGlzLmdldENvbmZpZ3VyYXRpb24oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGdldCBQYWdlIGNvbmZpZ3VyYXRpb24gVGVtcGxhdGUgRGF0YVxyXG4gICAgICAgICAgICB0aGlzLmpzb25Gb3JtID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5nZXRUZW1wbGF0ZShyZXMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNvdXJjZSgpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5zb3VyY2VpZDtcclxuICAgIGlmICh0aGlzLnJvdXRlLnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKSkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudCAmJlxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zb3VyY2VpZCA9IHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3VyY2VpZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zb3VyY2VpZCkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5zbmFwc2hvdD8ucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpXHJcbiAgICAgICAgPyB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICAgICA6IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wdXJwb3NlID1cclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1zLnB1cnBvc2VcclxuICAgICAgICA/IHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtcy5wdXJwb3NlXHJcbiAgICAgICAgOiB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudC5zbmFwc2hvdC5wYXJhbXMucHVycG9zZTtcclxuICB9XHJcblxyXG4gIC8vIGdldCBQYWdlIGNvbmZpZ3VyYXRpb24gVGVtcGxhdGUgRGF0YVxyXG4gIHByaXZhdGUgZ2V0VGVtcGxhdGUocmVzdWx0OiBhbnkpIHtcclxuICAgIHRoaXMudGVtcGxhdGVSZXN1bHQgPSByZXN1bHQ7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi50b0xvd2VyQ2FzZSgpID09ICdlZGl0Jykge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdFZGl0ICcgKyByZXN1bHQ/LmRhdGE/LnBhZ2VuYW1lO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMuYWN0aW9uLnRvTG93ZXJDYXNlKCkgPT0gJ3ZpZXcnKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ1ZpZXcgJyArIHJlc3VsdD8uZGF0YT8ucGFnZW5hbWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb24udG9Mb3dlckNhc2UoKSA9PSAnYWRkJykge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdBZGQgJyArIHJlc3VsdD8uZGF0YT8ucGFnZW5hbWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb24udG9Mb3dlckNhc2UoKSA9PSAnbGluaycpIHtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSAnVmlldyAnICsgcmVzdWx0Py5kYXRhPy5wYWdlbmFtZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdGT1JNX1RJVExFJykgfHwgJyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnRk9STV9USVRMRScsIHRoaXMuaXNUaXRsZSk7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YToge30gfTtcclxuICAgICAgdGhpcy5lZGl0VmFsdWUgPSBKU09OLnBhcnNlKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2VkaXRWYWx1ZScpKTtcclxuICAgICAgaWYgKHRoaXMuY2hlY2sgJiYgdGhpcy5wcm92aWRlckRhdGE/LmFjY291bnQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7XHJcbiAgICAgICAgICBkYXRhOiB0aGlzLnByb3ZpZGVyRGF0YT8uYWNjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lZGl0VmFsdWUgPSBKU09OLnBhcnNlKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2VkaXRWYWx1ZScpKTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0VmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHtcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5lZGl0VmFsdWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YVsnZWRpdCddID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiB7fSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICBcclxuICAgICAgdGhpcy5mYWxsYmFja0lkRnJvbVJvdXRlID0gdHlwZW9mIHJlc3VsdD8uZGF0YT8udGVtcGxhdGVqc29uID09ICdzdHJpbmcnPyBKU09OLnBhcnNlKHJlc3VsdD8uZGF0YT8udGVtcGxhdGVqc29uKT8uZmFsbGJhY2tJZEZyb21Sb3V0ZTogcmVzdWx0Py5kYXRhPy50ZW1wbGF0ZWpzb24/LmZhbGxiYWNrSWRGcm9tUm91dGU7XHJcbiAgICAgIHRoaXMuZnJvbVRpdGxlID0gcmVzdWx0LmRhdGE/LnBhZ2VuYW1lID8gcmVzdWx0LmRhdGE/LnBhZ2VuYW1lIDogJyc7XHJcbiAgICAgIHRoaXMuZGF0YVN0b3JlLnNldERhdGEoJ3RpdGxlJywgdGhpcy5mcm9tVGl0bGUpO1xyXG4gICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrVGVtcGxhdGUocmVzdWx0KTtcclxuICAgICAgdGhpcy51c2VyID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2VybmFtZSA9IHRoaXMudXNlcj8uZmlyc3ROYW1lICsgJycgKyB0aGlzLnVzZXI/Lmxhc3ROYW1lO1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5yaWJib25EYXRhID0gbnVsbDtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuc291cmNlaWQgPSB0aGlzLnNvdXJjZWlkID8gdGhpcy5zb3VyY2VpZCA6IG51bGw7IFxyXG4gICAgICBpZiAodGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZUtleScpKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGFbdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZUtleScpXSA9IHRoaXMucm91dGUucGF0aEZyb21Sb290Py5maW5kKHggPT4geC5zbmFwc2hvdC5wYXJhbU1hcC5oYXMoJ3NvdXJjZUtleScpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VWYWx1ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FsbEdldEFQSSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhU3ViID0gdGhpcy5kYXRhU3RvcmUuY3VycmVudFN0b3JlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzWyd1cGxvYWRGcm9tR3JpZCddKSB7XHJcbiAgICAgICAgdGhpcy5zaG93T2NyRm9ybSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idG5WZXJpZnkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrUGFyYW1zKGVsZW1lbnQ6YW55KXtcclxuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGVsZW1lbnQpIDogZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbmRpdGlvbkNoZWNrVGVtcGxhdGUocmVzdWx0KSB7XHJcbiAgICBsZXQgcm91dGluZ1BhZ2UgPSBbXTtcclxuICAgIGlmIChyZXN1bHQuZGF0YS50YWJjb25maWcpIHtcclxuICAgICAgY29uc3Qgcm91dGluZ1RhYiA9IHRoaXMuY2hlY2tQYXJhbXMocmVzdWx0LmRhdGEudGFiY29uZmlnKTtcclxuICAgICAgcm91dGluZ1BhZ2UgPSByb3V0aW5nVGFiLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ1JPVVRJTkcnKTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQuZGF0YS50ZW1wbGF0ZWpzb24pIHtcclxuICAgICAgdGhpcy5pc2Zvcm1JTyA9IHRydWU7XHJcbiAgICAgIHRoaXMuanNvbkZvcm0gPSB0aGlzLmNoZWNrUGFyYW1zKHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbilcclxuICAgICAgY29uc3QgZm9ybVRlbXBsYXRlSnNvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uRm9ybSkpO1xyXG4gICAgICB0aGlzLnBhZ2V0eXBlID0gcmVzdWx0LmRhdGE/LnBhZ2VEZXRhaWxzPy5wYWdldHlwZTtcclxuICAgICAgaWYgKHJlc3VsdC5kYXRhPy5wYWdldHlwZSA9PT0gJ1NVUlZFWScpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy51c2VyPy5pZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByZXBhcmVGb3JtS2V5TGFiZWwoZm9ybVRlbXBsYXRlSnNvbik7XHJcbiAgICAgIHRoaXMuZnJvbVRpdGxlID0gdGhpcy5qc29uRm9ybSAmJiB0aGlzLmpzb25Gb3JtWydwYWdlJ10gPyB0aGlzLmpzb25Gb3JtWydwYWdlJ10gOiByZXN1bHQuZGF0YS5wYWdlbmFtZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tb2RpZnlWaWRlb0NvbnRlbnQoKTtcclxuICAgICAgICB0aGlzLnNwZWVjaFRvVGV4dENvbnRlbnQoKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGluZ1BhZ2UubGVuZ3RoID4gMCAmJiByb3V0aW5nUGFnZVswXS5wYXRobmFtZSA9PT0gJ0NyZWF0ZVNpdGV2aXNpdENvbXBvbmVudCcpIHtcclxuICAgICAgdGhpcy5pc2Zvcm1JTyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFwcG9pbnRtZW50TGlzdCA9IFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRJbmNpZGVudERhdGEoKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRMaXN0QnlTb3VyY2VJZCh0aGlzLnNvdXJjZWlkKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubmFycmF0aXZlID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5uYXJyYXRpdmUsICcnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGxHZXRBUEkoKSB7XHJcbiAgICBpZiAodGhpcy5mcm9tVGl0bGUuaW5jbHVkZXMoU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcpKSB7XHJcbiAgICAgIHRoaXMubG9hZEluY2lkZW50RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJEYXRhID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgnc2VsZWN0ZWRUYWJEYXRhJyk7XHJcbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykgPT0gJ2Zvcm0nKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVkaXRJZCkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5lZGl0SWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xyXG4gICAgICBpZiAoIXRoaXMuaWQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZmFsbGJhY2tJZCA9IHRoaXMuZmFsbGJhY2tJZEZyb21Sb3V0ZT8gdGhpcy5mYWxsYmFja0lkRnJvbVJvdXRlIDogJ2lkJztcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcyhmYWxsYmFja0lkKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldChmYWxsYmFja0lkKTsgICAgICAgIFxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3lvdXRoSUQnLCB0aGlzLmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb25kaXRpb25DaGVja0NhbGxHZXRBUEkoKTtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ2dyaWRBY3Rpb24nKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xyXG4gICAgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5mb3JtcmVzcG9uc2UoYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uZGl0aW9uQ2hlY2tDYWxsR2V0QVBJKCkge1xyXG4gICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmVkaXRJZDtcclxuICAgIH1cclxuICAgIC8vICNjaGVja1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJ2R5bmFtaWMtcm91dGluZycpID4gMCB8fCB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCdwYWdlcy9pbnRha2UnKSA+IDApIHtcclxuICAgICAgaWYgKHRoaXMuZnJvbVdvcmtGbG93KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuc291cmNlaWQ7XHJcbiAgICAgICAgdGhpcy5mcm9tV29ya0Zsb3cgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5pZCA/IHRoaXMuaWQgOiB0aGlzLnNvdXJjZWlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbGlja2VkU2VydmljZUNhc2UpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuc2VydmljZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xyXG4gICAgLy8gaWYgKHRoaXMuaWQpIHtcclxuICAgIC8vICAgdGhpcy5mb3JtcmVzcG9uc2UodGhpcy5hY3Rpb24pO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgZm9ybXJlc3BvbnNlKGFjdGlvbikge1xyXG4gICAgaWYgKGFjdGlvbiAhPT0gJ2FkZCcpIHtcclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0UmVzcG9uc2VCeVBhZ2VJZCh0aGlzLmlkLCB0aGlzLmZvcm1JZCkuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQ/LmRhdGEgJiYgcmVzdWx0Py5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5nZXRNdWx0aXBsZUZyb20odGhpcy5wYWdldHlwZSA9PT0gJ0ZGUCcgPyByZXN1bHQ/LmRhdGEucmVzcG9uc2UgOiByZXN1bHQ/LmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Py5kYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1SZXNwb25zZSA9IHJlc3VsdD8uZGF0YTtcclxuICAgICAgICAgIHRoaXMuZ2V0QWN0aW9uU2VsZWN0KHRoaXMucGFnZXR5cGUgPT09ICdGRlAnID8gcmVzdWx0Py5kYXRhLnJlc3BvbnNlIDogcmVzdWx0Py5kYXRhLCBhY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuaWQubmV4dChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzdWx0TnVsbENoZWNrKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmRhdGEpIHtcclxuICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aW9uU2VsZWN0KHJlc3VsdCwgYWN0aW9uKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bHROdWxsQ2hlY2socmVzdWx0KTtcclxuICAgIHRoaXMucHJvY2Vzc011bHRpU2VsZWN0RHJvcGRvd25zKGRhdGEpO1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiBkYXRhIH07XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgIGlmICh0aGlzLmZyb21UaXRsZS5pbmNsdWRlcyhTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORykpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEubmFycmF0aXZlID0gdGhpcy5uYXJyYXRpdmU7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uID09ICdlZGl0JyB8fCBhY3Rpb24gPT0gJ0VkaXQnKSB7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9ICdFZGl0ICcgKyBkYXRhPy5wYWdlRGV0YWlscz8uYWN0aXZlVmVyc2lvbj8ucGFnZW5hbWUgfHwgJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICBpZiAodGhpcy5leHRlcm5hbFBhcmFtZXRlcnMpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudHlwZSA9IHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pZCA9IHJlc3VsdC5pZDtcclxuICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRNdWx0aXBsZUZyb20ocmVzdWx0KSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVzdWx0WzBdLmRhdGEgPyByZXN1bHRbMF0uZGF0YSA6IHJlc3VsdFswXTtcclxuICAgIHRoaXMucHJvY2Vzc011bHRpU2VsZWN0RHJvcGRvd25zKGRhdGEpO1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiBkYXRhIH07XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgIGlmICh0aGlzLmZyb21UaXRsZS5pbmNsdWRlcyhTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORykpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEubmFycmF0aXZlID0gdGhpcy5uYXJyYXRpdmU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5leHRlcm5hbFBhcmFtZXRlcnMpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudHlwZSA9IHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pZCA9IHJlc3VsdFswXS5pZDtcclxuICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3NNdWx0aVNlbGVjdERyb3Bkb3ducyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMubXVsdGlTZWxlY3REcm9wRG93bnMuZm9yRWFjaChkcm9wZG93bktleSA9PiB7XHJcbiAgICAgIGNvbnN0IGRyb3Bkb3duVmFsdWUgPSBkYXRhW2Ryb3Bkb3duS2V5XTtcclxuICAgICAgaWYgKHR5cGVvZiBkcm9wZG93blZhbHVlID09PSAnc3RyaW5nJyAmJiBkcm9wZG93blZhbHVlLmluY2x1ZGVzKCcsJykpIHtcclxuICAgICAgICBkYXRhW2Ryb3Bkb3duS2V5XSA9IGRyb3Bkb3duVmFsdWUuc3BsaXQoJywnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0U3VibWl0KGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG4gICAgdGhpcy5zdWJtaXRGYWlsZWQubmV4dCgnRmFpbGVkIHRvIGFkZCByZXNwb25zZScpO1xyXG4gIH1cclxuXHJcbiAgLyogVGhlIGJlbG93IGZ1bmN0aW9uIHdpbGwgdHJpZ2dlciB3aGVuIHVzZXIgY2xpY2tzIG9uIGEgYnV0dG9uIGluIFBvcFVwICovXHJcbiAgb25DbGlja0NvbmZpcm1hdGlvbih1c2VyQWN0aW9uLCBhY3Rpb25LZXkpIHtcclxuICAgIGNvbnN0IGZvcm1WYWx1ZSA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRWYWx1ZSgpO1xyXG4gICAgY29uc3QgY29tcCA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRDb21wb25lbnQoJ2N1c3RvbVZhbGlkYXRpb25Db21wb25lbnQnKT8uY29tcG9uZW50O1xyXG4gICAgY29uc3QgdXBkYXRlQ29tcG9uZW50QW5kUmVkcmF3ID0gKGxvY2FsQWN0aW9uS2V5KSA9PiB7XHJcbiAgICAgIGlmIChjb21wKSBjb21wWyd1c2VySW5wdXQnXSA9IGxvY2FsQWN0aW9uS2V5O1xyXG4gICAgICBmb3JtVmFsdWUuZGF0YVsndXNlcklucHV0J10gPSBsb2NhbEFjdGlvbktleTtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvLnNldFZhbHVlKGZvcm1WYWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHVzZXJBY3Rpb24gPT09ICdzdWJtaXQnKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VWYWxpZGF0aW9uUG9wdXAoKTtcclxuICAgICAgZm9ybVZhbHVlLmRhdGFbJ3ByZXZlbnRTdWJtaXQnXSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmZvcm1JTy5mb3JtaW8uc2V0VmFsdWUoZm9ybVZhbHVlKTtcclxuICAgICAgdXBkYXRlQ29tcG9uZW50QW5kUmVkcmF3KGFjdGlvbktleSk7XHJcbiAgICAgIGNvbXA/LnBvcHVwT25TdWJtaXQgJiYgdGhpcy5vblN1Ym1pdChmb3JtVmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZVZhbGlkYXRpb25Qb3B1cCgpO1xyXG4gICAgICB1cGRhdGVDb21wb25lbnRBbmRSZWRyYXcoY29tcD8uYnV0dG9uMlRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VWYWxpZGF0aW9uUG9wdXAoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRpb25Qb3B1cFJlZi5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgY29uc3QgY29tcCA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRDb21wb25lbnQoJ2N1c3RvbVZhbGlkYXRpb25Db21wb25lbnQnKT8uY29tcG9uZW50O1xyXG4gICAgY29uc3QgZm9ybVZhbHVlID0gdGhpcy5mb3JtSU8uZm9ybWlvLmdldFZhbHVlKCk7XHJcbiAgICBpZiAoZm9ybVZhbHVlPy5kYXRhPy5wcmV2ZW50U3VibWl0ICYmIGNvbXA/LnBvcHVwT25TdWJtaXQgJiYgY29tcD8uc2hvd1BvcHVwKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvblBvcHVwUmVmID0gdGhpcy5kaWFsb2cub3Blbih0aGlzLnZhbGlkYXRpb25Qb3B1cCk7XHJcbiAgICAgIHRoaXMuY29uZmlybWF0aW9ubWVzc2FnZSA9IGNvbXA/LnZhbGlkYXRpb25NZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdChzdWJtaXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbGlkYXRlRm9ybSgpO1xyXG4gICAgaWYgKHN1Ym1pc3Npb24/LmRhdGE/LnByZXZlbnRTdWJtaXQpIHtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvLmVtaXQoJ3N1Ym1pdERvbmUnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlUGFnZSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaignQWRkQWN0aW9uJyk7XHJcbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykgPT0gJ2Zvcm0nKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVkaXRJZCkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5lZGl0SWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgIGlmICghdGhpcy5pZCAmJiAhY3JlYXRlUGFnZSAmJiB0aGlzLnBhZ2V0eXBlICE9ICdGRlAnKSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5SWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdpZCcpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IHlvdXRoSWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VWYWx1ZScpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VWYWx1ZScpO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGU/LnRvTG93ZXJDYXNlKCkgPT0gJ3lvdXRoaWQnID8geW91dGhJZCA6IGVudGl0eUlkO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3VibWlzc2lvbkRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1Ym1pc3Npb24pKTtcclxuICAgIGNvbnN0IGRhdGEgPVxyXG4gICAgICBzdWJtaXNzaW9uRGF0YS5kYXRhICYmIHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEuZWRpdEdyaWRcclxuICAgICAgICA/IHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgIDogc3VibWlzc2lvbkRhdGEuZGF0YTtcclxuICAgIGRlbGV0ZSBkYXRhLnJpYmJvbkRhdGE7XHJcbiAgICBpZiAodGhpcy5wcm92aWRlckRhdGE/LmlkKSBkYXRhLnByb3ZpZGVyX2lkID0gdGhpcy5wcm92aWRlckRhdGE/LmlkO1xyXG4gICAgaWYgKHRoaXMuY2hlY2spIHtcclxuICAgICAgaWYgKHRoaXMuc3VibWl0dGVkRGF0YT8uZGF0YT8udGV4dEZpZWxkPy5hY2NvdW50Py5pZCkge1xyXG4gICAgICAgIGRhdGEuaWQgPSB0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGE/LnRleHRGaWVsZD8uYWNjb3VudD8uaWQ7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgICBwYWdlaWQ6IHRoaXMuZm9ybUlkLFxyXG4gICAgICAgICAgcmVzcG9uc2U6IGRhdGFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9ybShyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN1Ym1pdGVXaXRob3V0SWQocmVxdWVzdERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICBwYWdlaWQ6IHRoaXMuZm9ybUlkLFxyXG4gICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGdldEZvcm1QYWdlVGl0bGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdGT1JNX1RJVExFJyk7XHJcbiAgICAgIGlmKGdldEZvcm1QYWdlVGl0bGUgPT09ICdFZGl0IFlvdXRoIEluZm8nICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgaWYgKCh0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGEuYWN0aW9uICE9PSBcInN3aXRjaFwiICYmIHRoaXMuc3VibWl0dGVkRGF0YT8uZGF0YS5hY3Rpb24gIT09IFwiY29weVwiKSAmJiB0aGlzLmlkIHx8IHRoaXMuc3VibWl0dGVkRGF0YT8uZGF0YT8udGV4dEZpZWxkPy5pZCB8fCB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YT8uZWRpdCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9ybShyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRlV2l0aG91dElkKHJlcXVlc3REYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0ZVdpdGhvdXRJZChyZXF1ZXN0RGF0YSkge1xyXG4gICAgY29uc3QgZmlsZVVwbG9hZERhdGEgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFNoYXJlZE1lc3NhZ2UoKTtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZSh0aGlzLmlkLCByZXF1ZXN0RGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VibWlzc2lvbkRvbmUuZW1pdCh0cnVlKVxyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ0FkZEFjdGlvbicsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5yZW1vdmVJdGVtKCdncmlkQWN0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUuc2V0RGF0YSgnZ3JpZEFjdGlvbicsbnVsbCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRlKHJlc3VsdFsnZGF0YSddKTtcclxuICAgICAgICBpZiAodGhpcy5pc0RpYWxvZ1BvcHVwKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZnRlclN1Ym1pdC5lbWl0KHJlc3VsdFsnZGF0YSddKTtcclxuXHJcbiAgICAgICAgLy8gUmVkaXJlY3Rpb24gRml4XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuc2hvd0JhY2sgfHwgKGhpc3Rvcnk/LnN0YXRlPy5leHRlcm5hbExpbmsgJiYgIWhpc3Rvcnk/LnN0YXRlPy5pc0hpZGVCYWNrKSkge1xyXG4gICAgICAgIC8vICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1Ym1pdFRvU3VydmV5KCk7XHJcbiAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKHJlc3VsdFsnZGF0YSddWydpZCddKSB9LCBmaWxlVXBsb2FkRGF0YSk7XHJcbiAgICAgICAgaWYgKGZpbGVVcGxvYWREYXRhPy5hdHRhY2htZW50ZGV0YWlscykge1xyXG4gICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnU3VibWl0dGVkIFN1Y2Nlc3NmdWxseScsdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgndGl0bGV0YWInKTtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWFzdGVyLXZpZXcnKSA+IC0xIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbXBvc2l0ZS1wYWdlJykgPiAtMSApXHJcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGlmKCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50Py5sb2FkZWRGcm9tTWFzdGVyVmlldyB8fCB0aGlzLnNlbGVjdGVkQ29tcG9uZW50Py5sb2FkZWRGcm9tQ29tcG9zaXRlUGFnZSApJiYgdGhpcy5zZWxlY3RlZENvbXBvbmVudC5zZXR0aW5ncyAmJiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50LnNldHRpbmdzLm9uU3VibWl0UmVkaXJlY3Rpb24pIFxyXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcG9uZW50WydzdWJtaXR0ZWREYXRhJ10gPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChwdWJsaXNoRXZlbnQoe2V2ZW50TmFtZTogJ3N1Ym1pdCcsIHBheWxvYWQ6IHRoaXMuc2VsZWN0ZWRDb21wb25lbnR9KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIC8vIFVzaW5nIGJlbG93IGZvciBhbGwgcGFnZXMgKGFmdGVyIGFkZCByZXNwb25zKSBleGNlcHQgY29tcG9zaXRlLlxyXG4gICAgICAgIGlmICh0aGlzLmFwcFNlcnZpY2UuY2FuTmF2aWdhdGVCYWNrKCkgJiYgIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdjb21wb3NpdGUtcGFnZScpICYmICF3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnbWFzdGVyLXZpZXcnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRGYWlsZWQubmV4dCgnRmFpbGVkIHRvIGFkZCByZXNwb25zZScpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkQXR0YWNobWVudChpbmZvKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jcmVhdGVGb3JtUmVzcG9uc2VBdHRhY2htZW50KGluZm8pLnN1YnNjcmliZShyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXR0ZWREYXRlKHJlc3VsdCkge1xyXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogcmVzdWx0WzBdLmRhdGEgPyByZXN1bHRbMF0uZGF0YSA6IHJlc3VsdFswXSB9O1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgICAgdGhpcy5pZCA9IHJlc3VsdFswXS5pZDtcclxuICAgICAgdGhpcy5vcGVuQm90dG9tU2hlZXQoKTtcclxuICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogcmVzdWx0Py5kYXRhID8gcmVzdWx0Py5kYXRhIDogcmVzdWx0IH07XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICB0aGlzLmlkID0gcmVzdWx0LmlkO1xyXG4gICAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuaWQubmV4dChudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdFRvU3VydmV5KCkge1xyXG4gICAgaWYgKHRoaXMucGFnZXR5cGUgPT09ICdTVVJWRVknKSB7XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZVVzZXJTdXJ2ZXkoaGlzdG9yeSwgdGhpcy5pZCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvL1RoaXMgaXMgaW50ZW50aW9uYWxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGb3JtKHJlcXVlc3REYXRhKSB7XHJcbiAgICBjb25zdCBmaWxlVXBsb2FkRGF0YSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U2hhcmVkTWVzc2FnZSgpO1xyXG4gICAgaWYgKHJlcXVlc3REYXRhPy5yZXNwb25zZT8uaWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHJlcXVlc3REYXRhPy5yZXNwb25zZT8uaWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBFZGl0R3JpZFBhZ2VJRCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ0VkaXRHcmlkUGFnZUlEJyk7XHJcbiAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSkgcmVxdWVzdERhdGFbJ2lzQ29tcG9zaXRlUGFnZSddID0gdHJ1ZTtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLnVwZGF0ZUZvcm1SZXNwb25zZSh0aGlzLmlkLCByZXF1ZXN0RGF0YSwgRWRpdEdyaWRQYWdlSUQpLnN1YnNjcmliZShcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pc3Npb25Eb25lLmVtaXQodHJ1ZSk7IFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgICBpZihkYXRhICYmIChkYXRhID09PSAnTk9fRURJVCcgfHwgZGF0YSA9PT0gJ05PVF9BTExPV19UT19FRElUJyB8fCBkYXRhID09PSAnSU5WQUxJRF9VU0VSJykpe1xyXG4gICAgICAgICAgaWYoZGF0YSA9PT0gJ05PX0VESVQnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS53YXJuKCdUaGUgZWRpdCB3aW5kb3cgZm9yIHRoaXMgcmVjb3JkIGhhcyBleHBpcmVkIGFuZCBjaGFuZ2VzIGNhbm5vdCBiZSBtYWRlIGF0IHRoaXMgdGltZS4nKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgIGlmKGRhdGEgPT09ICdOT1RfQUxMT1dfVE9fRURJVCcgfHwgZGF0YSA9PT0gJ0lOVkFMSURfVVNFUicpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLndhcm4oJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpOyAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogcmVzdWx0WzBdLmRhdGEgPyByZXN1bHRbMF0uZGF0YSA6IHJlc3VsdFswXSB9O1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHJlc3VsdFswXS5pZDtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQm90dG9tU2hlZXQoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZGF0YSA/IGRhdGEgOiByZXN1bHQgfTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSByZXN1bHRbJ2lkJ107XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdjb21wb3NpdGUtcGFnZScpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdtYXN0ZXItdmlldycpKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgIGlmKCh0aGlzLnNlbGVjdGVkQ29tcG9uZW50LmxvYWRlZEZyb21NYXN0ZXJWaWV3IHx8IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQubG9hZGVkRnJvbUNvbXBvc2l0ZVBhZ2UpICYmIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQuc2V0dGluZ3MgJiYgdGhpcy5zZWxlY3RlZENvbXBvbmVudC5zZXR0aW5ncy5vblN1Ym1pdFJlZGlyZWN0aW9uKSBcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnRbJ3N1Ym1pdHRlZERhdGEnXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChwdWJsaXNoRXZlbnQoe2V2ZW50TmFtZTogJ3N1Ym1pdCcsIHBheWxvYWQ6IHRoaXMuc2VsZWN0ZWRDb21wb25lbnR9KSk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KG51bGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnZWRpdFZhbHVlJywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGE/LnJlc3BvbnNlKSk7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlcXVlc3REYXRhPy5yZXNwb25zZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihyZXN1bHRbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgaWYgKGZpbGVVcGxvYWREYXRhPy5hdHRhY2htZW50ZGV0YWlscykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnQoZmlsZVVwbG9hZEluZm8pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgndGl0bGV0YWInKTtcclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ2VkaXRWYWx1ZScpO1xyXG4gICAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSgndGFyZ2V0LXRhYi1maWx0ZXInKTtcclxuICAgICAgICAgIGlmKCF3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSAmJiAhd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ21hc3Rlci12aWV3JykpXHJcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VibWl0RmFpbGVkLm5leHQoJ0ZhaWxlZCB0byB1cGRhdGUgcmVzcG9uc2UnKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgXHJcbiAgfVxyXG5cclxuICBjbG9zZVBvcHVwKCkge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vbGlzdCddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQm90dG9tU2hlZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnNvdXJjZUlkLm5leHQodGhpcy5zb3VyY2VpZCk7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmlkLm5leHQodGhpcy5pZCk7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnBhZ2VJZC5uZXh0KHRoaXMuZm9ybUlkKTtcclxuICB9XHJcblxyXG4gIG1vZGlmeVZpZGVvQ29udGVudCgpIHtcclxuICAgIGNvbnN0IHZpZGVvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdldG9JZnJhbWUnKTtcclxuICAgIGlmICh2aWRlb0VsZW1lbnRzICYmIHZpZGVvRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIHZpZGVvRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3JjID0gZWxlbWVudC5zcmM7XHJcbiAgICAgICAgY29uc3QgaWZybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xyXG4gICAgICAgIGlmcm0uc3R5bGUud2lkdGggPSBlbGVtZW50LndpZHRoID8gZWxlbWVudC53aWR0aCA6IG51bGw7XHJcbiAgICAgICAgaWZybS5zdHlsZS5oZWlnaHQgPSBlbGVtZW50LmhlaWdodCA/IGVsZW1lbnQuaGVpZ2h0IDogbnVsbDtcclxuICAgICAgICBpZnJtLndpZHRoID0gZWxlbWVudC53aWR0aCA/IGVsZW1lbnQud2lkdGggOiBudWxsO1xyXG4gICAgICAgIGlmcm0uaGVpZ2h0ID0gZWxlbWVudC5oZWlnaHQgPyBlbGVtZW50LmhlaWdodCA6IG51bGw7XHJcbiAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChpZnJtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdXN0b21DbGlja0V2ZW50cyhfZGF0YSwgZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlkID09ICdzY2FuX2J1dHRvbicpIHtcclxuICAgICAgdGhpcy5leHRlcm5hbF9zY2FubmVyLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuZGF0YXNldCkge1xyXG4gICAgICAgIHRoaXMuc2Nhbm5lckNvbmZpZyA9IGV2ZW50LnNyY0VsZW1lbnQuZGF0YXNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVkaXJlY3QoKSB7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ21hc3Rlci12aWV3JykgPiAwIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbXBvc2l0ZS1wYWdlJykgPiAwKSB7XHJcbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdkeW5hbWljLXJvdXRpbmcnKSA+IDAgfHwgdGhpcy5pZClcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLy4uLyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAgICB9XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jaGFuZ2VQYWdlKHRydWUpO1xyXG4gICAgaWYodGhpcy5wYXJlbnRHcmlkUGFnZUlkKXtcclxuICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbiAgICAvL1JlbW92aW5nIFVud2FudGVkIHJlZGlyZWN0IGNvZGVcclxuICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdtYXN0ZXItdmlldycpID4gMCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdjb21wb3NpdGUtcGFnZScpID4gMCkge1xyXG4gICAgLy8gICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignZHluYW1pYy1yb3V0aW5nJykgPiAwIHx8IHRoaXMuaWQpXHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi8uLi8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgLy8gICBlbHNlXHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgLy8gfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCd0YWInKSA+IDAgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWFzdGVyLXZpZXcnKSA9PT0gLTEgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignY29tcG9zaXRlLXBhZ2UnKSA9PT0gLTEpIHtcclxuICAgIC8vICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY2hhbmdlUGFnZSh0cnVlKTtcclxuICAgIC8vICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICAvLyB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ21hc3Rlci12aWV3JykgPT09IC0xICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvbXBvc2l0ZS1wYWdlJykgPT09IC0xKSB7XHJcbiAgICAvLyAgIGNvbnN0IGdyaWRQYWdlSW5mbyA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgncGFyZW50R3JpZFBhZ2UnKSk7XHJcbiAgICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL3BhZ2VzL2R5bmFtaWMtc2VhL3NlYXJjaC8ke2dyaWRQYWdlSW5mbz8uaWR9YF0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50c0J1dHRvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdyZXBvcnRkb3dubG9hZCcpIHtcclxuICAgICAgY29uc3QgcXVlcnlEYXRhID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgnZ3JpZERhdGEnKTtcclxuICAgICAgY29uc3QgcGFnZURhdGEgPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdwYWdlRGF0YScpO1xyXG4gICAgICBldmVudC5kYXRhWydjdXJyZW50WWVhciddID0gZXZlbnQuZGF0YS5yZXBvcnQxID09PSAnY3VycmVudFllYXInID8gJ3llcycgOiAnJztcclxuICAgICAgaWYgKGV2ZW50LmRhdGFbJ2N1cnJlbnRZZWFyJ10gPT09ICd5ZXMnKSB7XHJcbiAgICAgICAgZXZlbnQuZGF0YVsnZnJvbVJhbmdlJ10gPSAnMjAyMS0wNi0xOFQxNDozMzowNi4zNjYrMDAwMCc7XHJcbiAgICAgICAgZXZlbnQuZGF0YVsndG9SYW5nZSddID0gJzIwMjEtMDYtMThUMTQ6MzM6MDYuMzY2KzAwMDAnO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZm9ybURhdGE6IGV2ZW50LmRhdGEsXHJcbiAgICAgICAgcXVlcnlEYXRhOiBxdWVyeURhdGEsXHJcbiAgICAgICAgcGFnZURhdGE6IHBhZ2VEYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZG93bmxvYWRSZXBvcnQoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZFJlcG9ydChkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5leHBvcnRSZXBvcnQoZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgICBpZiAocmVzcC5wZGZBd3NVcmwgJiYgcmVzcC5leGNlbEF3c1VybCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmxzID0gW107XHJcbiAgICAgICAgICAgIHVybHMucHVzaChyZXNwLnBkZkF3c1VybCk7XHJcbiAgICAgICAgICAgIHVybHMucHVzaChyZXNwLmV4Y2VsQXdzVXJsKTtcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUodXJscyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3AuZXhjZWxBd3NVcmwpIHtcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUocmVzcC5leGNlbEF3c1VybCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3AucGRmQXdzVXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHJlc3AucGRmQXdzVXJsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEZpbGUoczNCdWNrZXRVcmxOYW1lKSB7XHJcbiAgICBpZiAoczNCdWNrZXRVcmxOYW1lICYmIEFycmF5LmlzQXJyYXkoczNCdWNrZXRVcmxOYW1lKSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgczNCdWNrZXRVcmxOYW1lKSB7XHJcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5ocmVmID0gaXRlbTtcclxuICAgICAgICBsaW5rLmRvd25sb2FkID0gJ2Rvd25sb2FkJztcclxuICAgICAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluayA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGxpbmsuaHJlZiA9IHMzQnVja2V0VXJsTmFtZS50cmltKCk7XHJcbiAgICAgIGxpbmsuZG93bmxvYWQgPSAnZG93bmxvYWQnO1xyXG4gICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIGxpbmsucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdXN0b21FdmVudHMoZXZ0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNoYW5nZXMgZG9uZVwiLCBldnQpOyAgICBcclxuICAgIGlmIChldnQuZGF0YSkge1xyXG4gICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGFnZUV2ZW50RGF0YSA9IGV2dDtcclxuICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5vbkNoYW5nZVBhZ2VFdmVudElkID0gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIC8qIElmIHRoZSBGb3JtLmlvIGZvcm0gcmVxdWlyZXMgYSBwb3B1cCwgdGhlcmUgc2hvdWxkIGJlIGEgaGlkZGVuIGNvbXBvbmVudCB3aXRoIHRoZSBBUEkgcHJvcGVydHkgbmFtZSAnY3VzdG9tVmFsaWRhdGlvbkNvbXBvbmVudCcuICovXHJcbiAgICBjb25zdCBjb21wID0gdGhpcy5mb3JtSU8uZm9ybWlvLmdldENvbXBvbmVudCgnY3VzdG9tVmFsaWRhdGlvbkNvbXBvbmVudCcpPy5jb21wb25lbnRcclxuICAgICAgaWYgKGNvbXAgJiYgZXZ0Py5kYXRhICYmIGNvbXA/LnNob3dQb3B1cCAmJiBldnQ/LmNoYW5nZWQpIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbm1lc3NhZ2UgPSBjb21wPy52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgICAgICB0aGlzLnNob3dCdXR0b24xID0gY29tcD8uc2hvd0J1dHRvbjEgPyBjb21wPy5zaG93QnV0dG9uMSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbjIgPSBjb21wPy5zaG93QnV0dG9uMiA/IGNvbXA/LnNob3dCdXR0b24yIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b24xVGV4dCA9IGNvbXA/LmJ1dHRvbjFUZXh0O1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMlRleHQgPSBjb21wPy5idXR0b24yVGV4dDtcclxuICAgICAgICB0aGlzLmJ1dHRvbjFLZXkgPSBjb21wPy5idXR0b24xS2V5O1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMktleSA9IGNvbXA/LmJ1dHRvbjJLZXk7XHJcbiAgICAgICAgdGhpcy5idXR0b24xQWN0aW9uID0gY29tcD8uYnV0dG9uMUFjdGlvbjtcclxuICAgICAgICB0aGlzLmJ1dHRvbjJBY3Rpb24gPSBjb21wPy5idXR0b24yQWN0aW9uO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMVN0eWxlID0gY29tcD8uYnV0dG9uMVN0eWxlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMlN0eWxlID0gY29tcD8uYnV0dG9uMlN0eWxlO1xyXG4gICAgICAgIGlmICghY29tcD8ucG9wdXBPblN1Ym1pdCkgdGhpcy52YWxpZGF0aW9uUG9wdXBSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKHRoaXMudmFsaWRhdGlvblBvcHVwKTtcclxuICAgICAgfVxyXG5cclxuICAgIHRoaXMuZmluYW5jZUN1c3RvbUV2ZW50c0Z1bmN0aW9uYWxpdHkoZXZ0KTtcclxuICB9XHJcblxyXG4gIHNwZWVjaFRvVGV4dENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBzcGVlY2hFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVlY2hUb1RleHQnKTtcclxuICAgIGlmIChzcGVlY2hFbGVtZW50cyAmJiBzcGVlY2hFbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgc3BlZWNoRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3BlZWNoYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgc3BlZWNoYnRuLmNsYXNzTmFtZSA9ICduYXJyYXRpdmUtc3BlZWNoLWJ0bic7XHJcbiAgICAgICAgc3BlZWNoYnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLW1pY3JvcGhvbmUtc2xhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNwZWVjaGJ0bik7XHJcbiAgICAgICAgc3BlZWNoYnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICAgZXZ0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVNwZWVjaFRvVGV4dCh0aGlzLCBldnQsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZVNwZWVjaFRvVGV4dChjdHJsLCBldnQsIGl0ZW0pIHtcclxuICAgIGNvbnN0IG5hcnJhdGl2ZUVsZW1lbnQgPSBldnQ/LmN1cnJlbnRUYXJnZXQ/LmNoaWxkcmVuPy5sZW5ndGhcclxuICAgICAgPyBldnQ/LmN1cnJlbnRUYXJnZXQ/LmNoaWxkcmVuWzBdXHJcbiAgICAgIDogZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgdGhpcy5zcGVlY2hSZWNvZ25pbml0aW9uT24gPSAhdGhpcy5zcGVlY2hSZWNvZ25pbml0aW9uT247XHJcbiAgICBpZiAodGhpcy5zcGVlY2hSZWNvZ25pbml0aW9uT24pIHtcclxuICAgICAgY29uc3Qgc3BlZWNoVGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuICAgICAgaWYgKG5hcnJhdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICBuYXJyYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdmYSBmYS1taWNyb3Bob25lJztcclxuICAgICAgfVxyXG4gICAgICBjdHJsLnNwZWVjaFJlY29nbml0aW9uU2VydmljZS5yZWNvcmQoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gbGlzdGVuZXJcclxuICAgICAgICB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICBsZXQgdGVtcE5hcnJhdGl2ZSA9IHNwZWVjaFRleHQudmFsdWU7XHJcbiAgICAgICAgICB0ZW1wTmFycmF0aXZlID0gdGVtcE5hcnJhdGl2ZS50cmltKCkuY29uY2F0KCcgJyArIHZhbHVlKTtcclxuICAgICAgICAgIGlmIChzcGVlY2hUZXh0KSB7XHJcbiAgICAgICAgICAgIHNwZWVjaFRleHQudmFsdWUgPSB0ZW1wTmFycmF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZXJycm9yXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tFcnJvcihuYXJyYXRpdmVFbGVtZW50LCBjdHJsLCBldnQsIGl0ZW0sIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG5hcnJhdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICBuYXJyYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdmYSBmYS1taWNyb3Bob25lLXNsYXNoJztcclxuICAgICAgfVxyXG4gICAgICBjdHJsLmRlQWN0aXZhdGVTcGVlY2hSZWNvZ25pdGlvbihjdHJsKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uZGl0aW9uQ2hlY2tFcnJvcihuYXJyYXRpdmVFbGVtZW50LCBjdHJsLCBldnQsIGl0ZW0sIGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgdGhpcy5lcnJvckV4ZWN1dGlvbihuYXJyYXRpdmVFbGVtZW50LCBjdHJsLCBldnQsIGl0ZW0sIGVycik7XHJcbiAgfVxyXG5cclxuICBlcnJvckV4ZWN1dGlvbihuYXJyYXRpdmVFbGVtZW50LCBjdHJsLCBldnQsIGl0ZW0sIGVycikge1xyXG4gICAgaWYgKG5hcnJhdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgbmFycmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnZmEgZmEtbWljcm9waG9uZS1zbGFzaCc7XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyLmVycm9yID09PSAnbm8tc3BlZWNoJykge1xyXG4gICAgICBjdHJsLm5vdGlmaWNhdGlvbiA9IHRoaXMubm9TcGVlY2hBbGVydCgpO1xyXG4gICAgICBjdHJsLmFjdGl2YXRlU3BlZWNoVG9UZXh0KGN0cmwsIGV2dCwgaXRlbSk7XHJcbiAgICB9IGVsc2UgaWYgKGVyci5lcnJvciA9PT0gJ25vdC1hbGxvd2VkJykge1xyXG4gICAgICBjdHJsLm5vdGlmaWNhdGlvbiA9IHRoaXMubWljVW5hdXRob3Jpc2VkQWxlcnQoKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyLmVycm9yID09PSAnbm90LW1pY3JvcGhvbmUnKSB7XHJcbiAgICAgIGN0cmwubm90aWZpY2F0aW9uID0gdGhpcy5taWNOb3RBdmFpbGFibGVBbGVydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWljTm90QXZhaWxhYmxlQWxlcnQoKSB7XHJcbiAgICByZXR1cm4gJ01pY3JvcGhvbmUgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIHZlcmlmeSB0aGUgY29ubmVjdGlvbiBvZiB5b3VyIG1pY3JvcGhvbmUgYW5kIHRyeSBhZ2Fpbi4nO1xyXG4gIH1cclxuXHJcbiAgbWljVW5hdXRob3Jpc2VkQWxlcnQoKSB7XHJcbiAgICByZXR1cm4gJ1lvdXIgYnJvd3NlciBpcyBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgeW91ciBtaWNyb3Bob25lLiBWZXJpZnkgdGhhdCB5b3VyIGJyb3dzZXIgaGFzIGFjY2VzcyB0byB5b3VyIG1pY3JvcGhvbmUgYW5kIHRyeSBhZ2Fpbi4nO1xyXG4gIH1cclxuXHJcbiAgbm9TcGVlY2hBbGVydCgpIHtcclxuICAgIHJldHVybiAnTm8gc3BlZWNoIGhhcyBiZWVuIGRldGVjdGVkLiBQbGVhc2UgdHJ5IGFnYWluLic7XHJcbiAgfVxyXG5cclxuICBkZUFjdGl2YXRlU3BlZWNoUmVjb2duaXRpb24oY3RybCkge1xyXG4gICAgdGhpcy5zcGVlY2hSZWNvZ25pbml0aW9uT24gPSBmYWxzZTtcclxuICAgIGN0cmwuc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLmRlc3Ryb3lTcGVlY2hPYmplY3QoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YVN1YikgdGhpcy5kYXRhU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBpZih0aGlzLmV2ZW50U3Vic2NyaXB0aW9uKSB0aGlzLmV2ZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uU2VydmljZS5kZXN0cm95U3BlZWNoT2JqZWN0KCk7XHJcbiAgICB0aGlzLm9jci5jbGVhclJlc3BvbnNlKCk7XHJcbiAgICBpZiAodGhpcy5wYWdlRGF0YVN1YnNjcmlwdGlvbikgdGhpcy5wYWdlRGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZShmaWxlOiBGaWxlIHwgRmlsZUVycm9yKTogdm9pZCB7XHJcbiAgICB0aGlzLm9jci5nZXRSZXNwb25zZSgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdGF0dXMgPT0gJ1NVQ0NFRURFRCcpIHtcclxuICAgICAgICB0aGlzLnByb2Nlc3NPQ1JSZXNwb25zZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvY2Vzc1Jlc3BvbnNlRGF0YShmaWxlKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NSZXNwb25zZURhdGEoZmlsZSk6IHZvaWQge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UudXBsb2FkRmlsZShmaWxlKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5wZXJjZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gcHJvY2VzcyB5b3VyIHJlcXVlc3QuJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzT0NSUmVzcG9uc2UocmVzdWx0KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHJlc3VsdC5yZXNwb25zZTtcclxuICAgIGlmICh0aGlzLnNjYW5uZXJDb25maWcgJiYgdGhpcy5zY2FubmVyQ29uZmlnLnNjYW5UeXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLnNjYW5uZXJDb25maWcuc2NhblR5cGUgPT09ICd0ZXh0JyAmJiB0aGlzLnNjYW5uZXJDb25maWcuc2NhblBhdGNoKSB7XHJcbiAgICAgICAgY29uc3Qgc2RhdGEgPSB0aGlzLnN1Ym1pdHRlZERhdGE7XHJcbiAgICAgICAgaWYgKHNkYXRhICYmIHNkYXRhLmRhdGEpIHtcclxuICAgICAgICAgIHNkYXRhLmRhdGFbdGhpcy5zY2FubmVyQ29uZmlnLnNjYW5QYXRjaF0gPSByZXNwb25zZS5yYXdfdGV4dDtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2RhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGF2MSA9IHRoaXMub2NyLnByZXBhcmVfZm9ybV9kYXRhKHJlc3BvbnNlLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuRm9ybUlucHV0cykpKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YXYyID0gdGhpcy5vY3IucHJlcGFyZV9mcm9tX2RhdGFfdjEocmVzcG9uc2UsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5Gb3JtSW5wdXRzKSkpO1xyXG4gICAgICAgIGNvbnN0IGZpbmFsRGF0YSA9IHsgLi4uZm9ybURhdGF2MSwgLi4uZm9ybURhdGF2MiB9O1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZmluYWxEYXRhIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXBhcmVGb3JtS2V5TGFiZWwoanNvbikge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbikpIHtcclxuICAgICAganNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMucHJlcGFyZUZvcm1LZXlMYWJlbChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBqc29uLmhhc093blByb3BlcnR5KCdpbnB1dCcpICYmXHJcbiAgICAgIGpzb24uaW5wdXQgJiZcclxuICAgICAganNvbi50eXBlICE9PSAnYnV0dG9uJyAmJlxyXG4gICAgICBqc29uLnR5cGUgIT09ICdzaWduYXR1cmUnICYmXHJcbiAgICAgICFqc29uLmhhc093blByb3BlcnR5KCdjdXN0b21Db25kaXRpb25hbCcpICYmXHJcbiAgICAgICFqc29uLmhhc093blByb3BlcnR5KCdjb25kaXRpb25hbCcpXHJcbiAgICApIHtcclxuICAgICAgbGV0IHZhbHVlcyA9IFtdO1xyXG4gICAgICBpZiAoanNvbi50eXBlID09PSAncmFkaW8nIHx8IGpzb24udHlwZSA9PT0gJ3NlbGVjdGJveGVzJykge1xyXG4gICAgICAgIHZhbHVlcyA9IGpzb24udmFsdWVzIHx8IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZvcm1PYmplY3QgPSB7XHJcbiAgICAgICAga2V5OiBqc29uWydrZXknXSxcclxuICAgICAgICBsYWJlbDoganNvblsnbGFiZWwnXSxcclxuICAgICAgICB0eXBlOiBqc29uWyd0eXBlJ10sXHJcbiAgICAgICAgdmFsdWVzOiBbLi4udmFsdWVzXVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLkZvcm1JbnB1dHMucHVzaChmb3JtT2JqZWN0KTtcclxuXHJcbiAgICAgIGlmIChqc29uLnR5cGUgPT09ICdzZWxlY3QnICYmIGpzb24ubXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLm11bHRpU2VsZWN0RHJvcERvd25zLnB1c2goanNvbi5rZXkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBPYmplY3Qua2V5cyhqc29uKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbltrZXldKSkge1xyXG4gICAgICAgICAgdGhpcy5wcmVwYXJlRm9ybUtleUxhYmVsKGpzb25ba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmFuY2VDdXN0b21FdmVudHNGdW5jdGlvbmFsaXR5KGV2ZW50KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGV2ZW50Py5jaGFuZ2VkPy5jb21wb25lbnQ/LmtleSA9PT0gJ2lzQmFua0FjY291bnRFeGlzdCcgJiZcclxuICAgICAgIWV2ZW50Py5kYXRhPy5pc0JhbmtBY2NvdW50RXhpc3QgJiZcclxuICAgICAgZXZlbnQ/LmRhdGE/LmFjY291bnRUeXBlS2V5XHJcbiAgICApIHtcclxuICAgICAgbGV0IGFwaSA9ICcnO1xyXG4gICAgICBpZiAoZXZlbnQ/LmRhdGE/LmFjY291bnRUeXBlS2V5ID09PSAnQ0EnKSB7XHJcbiAgICAgICAgYXBpID0gJ2ZpbmFuY2VjYXJlYWNjb3VudG5vJztcclxuICAgICAgfSBlbHNlIGlmIChldmVudD8uZGF0YT8uYWNjb3VudFR5cGVLZXkgPT09ICdSQScpIHtcclxuICAgICAgICBhcGkgPSAnZmluYW5jZXJlc3RpdHV0aW9uYWNjb3VudG5vJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcGkgPSAnZmluYW5jZXNhdmluZ2FjY291bnRubyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZ2V0VW5pcXVlSWQoYXBpKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmJhbmtBY2NvdW50TnVtYmVyID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJSZWZyZXNoLmVtaXQoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ3N1Ym1pc3Npb24nLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdWJtaXR0ZWREYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByb3V0ZVRvR3JpZCh2YWwpIHtcclxuICAgIGlmICh2YWwgPT09ICdNYWtlIFBheW1lbnQnKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi9wYWdlcy9tZXJnZXBhZ2UvMWY0ZTI3MmEtNGMwMy00NzM5LWI0YTUtNTM3NDhlMDZlMjQ3J10pO1xyXG4gICAgfSBlbHNlIGlmICh2YWwgPT09ICdQYXltZW50IERldGFpbHMgSW5mb3JtYXRpb24nKSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tRXZlbnQoZXZlbnQpIHtcclxuICAgIHRoaXMuX2Zvcm1JTy5jdXN0b21FdmVudChldmVudCwgdGhpcy5mb3JtSU8pO1xyXG4gIH1cclxuXHJcbiAgb2NyVXBsb2FkKGZpbGVzKSB7XHJcbiAgICB0aGlzLnVwbG9hZGVkRmlsZSA9IGZpbGVzLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IHBhZ2VJRCA9IHRoaXMuZm9ybUlkID8gdGhpcy5mb3JtSWQgOiB0aGlzLnBhZ2VJZDtcclxuICAgIHRoaXMuaW1hZ2VEYXRhID0ge1xyXG4gICAgICBjb250ZW50VHlwZTogdGhpcy51cGxvYWRlZEZpbGUudHlwZSxcclxuICAgICAgZmlsZU5hbWU6IGBvY3IvJHtwYWdlSUR9LyR7dGhpcy51cGxvYWRlZEZpbGUubmFtZX1gXHJcbiAgICB9O1xyXG4gICAgdGhpcy5hdHRhY2htZW50U2VydmljZS51cGxvYWRLZXkodGhpcy5pbWFnZURhdGEpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkQXR0YWNobWVudDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcclxuICAgICAgICBjb25zdCB1cGxvYWRBdHRhY2htZW50RGV0YWlscyA9IHVwbG9hZEF0dGFjaG1lbnQuZmlsZXNbMF07XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wdXR1cGxvYWQyKHJlcy5kYXRhLCB1cGxvYWRBdHRhY2htZW50RGV0YWlscywgdXBsb2FkQXR0YWNobWVudERldGFpbHMudHlwZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcCAmJiByZXNwLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBgb2NyLyR7cGFnZUlEfS8ke3RoaXMudXBsb2FkZWRGaWxlLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnR0eXBlOiB0aGlzLnVwbG9hZGVkRmlsZS50eXBlXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdVcGxvYWRlZCBTdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXBsb2FkKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5WZXJpZnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRPYmooJ09DUk9iaicsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T2NyRm9ybSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blZlcmlmeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihTT01FVEhJTkdfV0VOVF9XUk9ORyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZGlvbkNoZWNrRXJyb3JBbGVydChlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbmRpb25DaGVja0Vycm9yQWxlcnQoZXJyb3IpIHtcclxuICAgIGlmIChlcnJvci5zdGF0dXMgPT0gMCkgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoU09NRVRISU5HX1dFTlRfV1JPTkcpO1xyXG4gIH1cclxuICBnZXRVcGxvYWQob2JqKSB7XHJcbiAgICB0aGlzLm9jclZhbGlkYXRpb25TZXJ2aWNlLmdldFVwbG9hZChvYmopLnN1YnNjcmliZShcclxuICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG4gICAgICAgICAgY29uc3QgcmVzRGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgY29uc3QgaW1hZ2VDYXRlZ29yeSA9IHJlc0RhdGE/LmltYWdlQ2F0ZWdvcnk7XHJcbiAgICAgICAgICBjb25zdCBvY3JEb2N1bWVudERldGFpbHMgPSBpbWFnZUNhdGVnb3J5Py5pZF9qc29uWzBdO1xyXG4gICAgICAgICAgdGhpcy52ZXJpZmlEYXRhKG9jckRvY3VtZW50RGV0YWlscyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKFNPTUVUSElOR19XRU5UX1dST05HKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmVyaWZpRGF0YShvY3JEb2N1bWVudERldGFpbHMpIHtcclxuICAgIGNvbnN0IGpzb25Gb3JtID0gdGhpcy5qc29uRm9ybT8uY29tcG9uZW50c1swXTtcclxuICAgIGlmICh0aGlzLmZvcm1SZXNwb25zZSkge1xyXG4gICAgICBjb25zdCBmcm9tQXJyYXkgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm1SZXNwb25zZSk7XHJcbiAgICAgIGZyb21BcnJheT8uZm9yRWFjaChyZXNwb3NlID0+IHtcclxuICAgICAgICBpZiAob2NyRG9jdW1lbnREZXRhaWxzKSB7XHJcbiAgICAgICAgICBjb25zdCBkb2N1bWVudFZhbHVlID0gT2JqZWN0LmtleXMob2NyRG9jdW1lbnREZXRhaWxzKTtcclxuICAgICAgICAgIGRvY3VtZW50VmFsdWU/LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tWZXJpZnkoZWxlbWVudCwgb2NyRG9jdW1lbnREZXRhaWxzLCByZXNwb3NlLCBqc29uRm9ybSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29sdW1uc0pzb24uY29sdW1uc1swXS5jb21wb25lbnRzWzBdLmNvbXBvbmVudHNbMF0uY29udGVudCA9IHRoaXMuY29udGVudEFycmF5Py5qb2luKCcnKTtcclxuICAgIHRoaXMuanNvbkZvcm0uY29tcG9uZW50c1swXS5jb21wb25lbnRzLnNwbGljZSgwLCAwLCBjb2x1bW5zSnNvbik7XHJcbiAgICB0aGlzLnRyaWdnZXJSZWZyZXNoLmVtaXQoe1xyXG4gICAgICBwcm9wZXJ0eTogJ2Zvcm0nLFxyXG4gICAgICB2YWx1ZTogdGhpcy5qc29uRm9ybVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrVmVyaWZ5KGVsZW1lbnQsIG9jckRvY3VtZW50RGV0YWlscywgcmVzcG9zZSwganNvbkZvcm0pIHtcclxuICAgIGlmIChcclxuICAgICAgZWxlbWVudCAmJlxyXG4gICAgICByZXNwb3NlICYmXHJcbiAgICAgIGVsZW1lbnQ/LnRvTG93ZXJDYXNlKCkgPT09IHJlc3Bvc2U/LnRvTG93ZXJDYXNlKCkgJiZcclxuICAgICAgb2NyRG9jdW1lbnREZXRhaWxzW2VsZW1lbnRdPy50b0xvd2VyQ2FzZSgpICE9PSB0aGlzLmZvcm1SZXNwb25zZVtyZXNwb3NlXT8udG9Mb3dlckNhc2UoKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuanNvbkZvcm0uY29tcG9uZW50c1swXS5jb21wb25lbnRzID0ganNvbkZvcm0/LmNvbXBvbmVudHMubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcyAmJiByZXM/LmtleSA9PT0gZWxlbWVudD8udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZW50QXJyYXkucHVzaChgPHAgc3R5bGU9XCJjb2xvcjpyZWQ7XCI+JHtyZXMubGFiZWx9IE5vdCBNYXRjaDwvcD5cXG5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEVtaXR0ZWREYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuc2hvd09jckZvcm0gPSBmYWxzZTtcclxuICAgIHRoaXMuYnRuVmVyaWZ5ID0gdHJ1ZTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgLi4uZGF0YSwgLi4udGhpcy5zdWJtaXR0ZWREYXRhIH07XHJcbiAgfVxyXG59IiwiPGFwcC1hbGVydD48L2FwcC1hbGVydD5cclxuPGRpdiBbbmdDbGFzc109XCJzaG93VGl0bGUgPyAnY2FyZCcgOiAneW91dGhzZWFyY2gtZm9ybWlvJ1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgbXktM1wiICpuZ0lmPVwiaXNUaXRsZVwiPlxyXG4gICAgICA8IS0tIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1jYW5jZWxcIiAoY2xpY2spPVwicmVkaXJlY3QoKVwiICpuZ0lmPVwic2hvd2JhY2tidG5cIj5cclxuICAgICAgICBCYWNrIHt7IHBhcmVudEdyaWRQYWdlICYmICd0byAnICsgcGFyZW50R3JpZFBhZ2UgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxoNiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgbWItMiBtdC0zIGZyb21UaXRsZVwiICpuZ0lmPVwic2hvd1RpdGxlXCI+e3sgaXNUaXRsZSB9fTwvaDY+IC0tPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImJhY2stdG8tbWFpblwiPlxyXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cInJlZGlyZWN0KClcIiAqbmdJZj1cInNob3diYWNrYnRuXCI+e3sgcGFyZW50R3JpZFBhZ2V9fTwvZGl2PlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1RpdGxlXCI+IHt7IGlzVGl0bGUgfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwiIXNob3dPY3JGb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGR5bmFtaWMtcGFnZSBtdC0wXCIgW2hpZGRlbl09XCIhaXNmb3JtSU9cIj5cclxuICAgICAgPGZvcm1pbyAjZm9ybUlPIFtmb3JtXT1cImpzb25Gb3JtXCIgW3JlYWRPbmx5XT1cImlzUmVhZE9ubHlcIiBbc3VibWlzc2lvbl09XCJzdWJtaXR0ZWREYXRhXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgkZXZlbnQpXCJcclxuICAgICAgICAoY2hhbmdlKT1cImN1c3RvbUV2ZW50cygkZXZlbnQpXCIgKGNsaWNrKT1cImN1c3RvbUNsaWNrRXZlbnRzKHN1Ym1pdHRlZERhdGEsICRldmVudClcIlxyXG4gICAgICAgIChjdXN0b21FdmVudCk9XCJjdXN0b21FdmVudHNCdXR0b24oJGV2ZW50KVwiIFtyZWZyZXNoXT1cInRyaWdnZXJSZWZyZXNoXCIgW3N1Ym1pdERvbmVdPVwic3VibWlzc2lvbkRvbmVcIiBbc3VjY2Vzc109XCJzdWJtaXRTdWNjZXNzXCJcclxuICAgICAgICBbZXJyb3JdPVwic3VibWl0RmFpbGVkXCIgKGN1c3RvbUV2ZW50KT1cImN1c3RvbUV2ZW50KCRldmVudClcIj48L2Zvcm1pbz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwic2hvd09jckZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkeW5hbWljLXBhZ2UgbXQtMFwiPlxyXG4gICAgICAgIDxhcHAtb2NyLXZhbGlkYXRpb24gKG9jclJlc3BvbnNlKT1cImdldEVtaXR0ZWREYXRhKCRldmVudClcIiBbY3VycmVudHRlbXBsYXRlUmVzdWx0XT1cInRlbXBsYXRlUmVzdWx0XCJcclxuICAgICAgICAgIFtmb3JtUmVzcG9uc2VEYXRhXT1cImZvcm1SZXNwb25zZVwiIFtzdWJtaXRpb25EYXRhXT1cInN1Ym1pdHRlZERhdGFcIj48L2FwcC1vY3ItdmFsaWRhdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxidXR0b24gc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgaWQ9XCJleHRlcm5hbF9zY2FubmVyXCIgI2V4dGVybmFsX3NjYW5uZXIgbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJidG4taWNvbi1iZ1wiXHJcbiAgKG5neGYtc2VsZWN0KT1cInVwbG9hZEZpbGUoJGV2ZW50KVwiPlxyXG4gIFNjYW5cclxuPC9idXR0b24+XHJcblxyXG5cclxuPG5nLXRlbXBsYXRlICN2YWxpZGF0aW9uUG9wdXA+XHJcbiAgPGRpdiBjbGFzcz1cInAtMyB2YWxpZGF0aW9uLXBvcHVwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXggbWItNFwiPjxkaXYgW2lubmVySFRNTF09XCJjb25maXJtYXRpb25tZXNzYWdlXCI+PC9kaXY+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgcHItMyBtb2RhbC1idXR0b25zXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicHVsbC1yaWdodCBtYi0yIGJ0blwiIFtuZ0NsYXNzXT1cImJ1dHRvbjFTdHlsZVwiICpuZ0lmPVwic2hvd0J1dHRvbjFcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrQ29uZmlybWF0aW9uKGJ1dHRvbjFBY3Rpb24sIGJ1dHRvbjFLZXkpXCI+XHJcbiAgICAgIHt7YnV0dG9uMVRleHR9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicHVsbC1yaWdodCBtYi0yIG1yLTIgYnRuXCIgW25nQ2xhc3NdPVwiYnV0dG9uMlN0eWxlXCIgKm5nSWY9XCJzaG93QnV0dG9uMlwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tDb25maXJtYXRpb24oYnV0dG9uMkFjdGlvbiwgYnV0dG9uMktleSlcIj57e2J1dHRvbjJUZXh0fX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19