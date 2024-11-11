import { Location } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgxfUploaderService } from 'ngxf-uploader';
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
import { VideoSpeechContentService } from './video-speech-content.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/formio.service";
import * as i3 from "./form-template.service";
import * as i4 from "./ocr-response.service";
import * as i5 from "./custom-event.service";
import * as i6 from "./video-speech-content.service";
import * as i7 from "./routeparam.service";
import * as i8 from "@ngrx/store";
import * as i9 from "../../@core/service/platform-data-store.service";
import * as i10 from "./formsubmit.service";
import * as i11 from "@angular/common";
import * as i12 from "@formio/angular";
import * as i13 from "../../@shared/alert/alert.component";
import * as i14 from "@angular/material/button";
import * as i15 from "ngxf-uploader";
const STRUCTURED_DECISION_MAKING = 'Structured Decision Making';
export class FormPageComponent {
    router;
    route;
    _formIO;
    templateService;
    ocrResponseService;
    customEventService;
    videoSpeechContentService;
    routeparamService;
    store;
    _storeservice;
    formSubmissionService;
    submitFailed = new EventEmitter();
    formId;
    tabId;
    jsonForm;
    fromTitle;
    editId;
    id;
    submittedData;
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
    fromWorkFlow;
    clickedServiceCase;
    serviceId;
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
    parentGridPage;
    parentGridPageId;
    alertService;
    showOcrForm;
    attachmentService;
    formResponse;
    action;
    contentArray = [];
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
    constructor(injector, router, route, _formIO, templateService, ocrResponseService, customEventService, videoSpeechContentService, routeparamService, store, data, _storeservice, formSubmissionService) {
        this.router = router;
        this.route = route;
        this._formIO = _formIO;
        this.templateService = templateService;
        this.ocrResponseService = ocrResponseService;
        this.customEventService = customEventService;
        this.videoSpeechContentService = videoSpeechContentService;
        this.routeparamService = routeparamService;
        this.store = store;
        this._storeservice = _storeservice;
        this.formSubmissionService = formSubmissionService;
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
        this.videoSpeechContentService = injector.get(VideoSpeechContentService);
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
            const { id, isReadOnly, editId } = this.routeparamService.handleEvent(event, this.pageId, this.id, this.isReadOnly, this.editId);
            this.id = id;
            this.isReadOnly = isReadOnly;
            this.editId = editId;
            if (id !== null || event.eventName === 'add') {
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
    masterCompositeViewRoute(data) {
        if (window.location.href.includes('composite-page') || window.location.href.includes('master-view')) {
            if (this.selectedComponent) {
                if ((this.selectedComponent?.loadedFromMasterView || this.selectedComponent?.loadedFromCompositePage) && this.selectedComponent.settings && this.selectedComponent.settings.onSubmitRedirection)
                    this.router.navigate(['../../'], { relativeTo: this.route });
                this.selectedComponent['submittedData'] = data;
                this.store.dispatch(publishEvent({ eventName: 'submit', payload: this.selectedComponent }));
            }
            else {
                this.redirect();
            }
            ;
        }
    }
    onSubmit(submission) {
        this.validateForm();
        if (submission?.data?.preventSubmit) {
            this.formIO.formio.emit('submitDone');
            return;
        }
        this.id = this.formSubmissionService.getIdFromRoute(this.editId, this.fallbackIdFromRoute);
        const data = this.formSubmissionService.prepareSubmissionData(submission);
        if (this.providerData?.id)
            data.provider_id = this.providerData?.id;
        if (this.check) {
            if (this.submittedData?.data?.textField?.account?.id) {
                data.id = this.submittedData?.data?.textField?.account?.id;
                const requestData = this.formSubmissionService.prepareRequestData(this.formId, data);
                this.updateForm(requestData);
            }
            else if (this.id) {
                const requestData = this.formSubmissionService.prepareRequestData(this.formId, data);
                this.updateForm(requestData);
            }
            else {
                const requestData = this.formSubmissionService.prepareRequestData(this.formId, data);
                this.submiteWithoutId(requestData);
            }
        }
        else {
            const requestData = this.formSubmissionService.prepareRequestData(this.formId, data);
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
            this.submitToSurvey();
            const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
            if (fileUploadData?.attachmentdetails) {
                this.addAttachment(fileUploadInfo);
            }
            this.alertService.success('Submitted Successfully', true);
            this.localstorage.removeItem('titletab');
            this.masterCompositeViewRoute(result['data']);
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
                this.formSubmissionService.updateFormData(data);
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
                    this.masterCompositeViewRoute(data);
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
    customClickEvents(_data, event) {
        if (event.srcElement.id == 'scan_button') {
            this.external_scanner.nativeElement.click();
            if (event.srcElement.dataset) {
                this.scannerConfig = event.srcElement.dataset;
            }
        }
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
    async getConfiguration() {
        const action = this.action ? this.action?.toLowerCase() : '';
        const data = await this.dynamicTabPageService.getActivePage(this.tabId, true, action).toPromise();
        return data;
        // });
    }
    getTemplate(result) {
        if (result) {
            this.isTitle = this.templateService.getTitle(this.action, result?.data?.pagename);
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
                this.videoSpeechContentService.modifyVideoContent();
                this.videoSpeechContentService.speechToTextContent();
            }, 200);
        }
        else if (routingPage.length > 0 && routingPage[0].pathname === 'CreateSitevisitComponent') {
            this.isformIO = false;
            this.appointmentList = Promise.resolve(true);
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
        if (window.location.hash.includes('dynamic-routing') || window.location.hash.includes('pages/intake')) {
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
    openBottomSheet() {
        this.dynamicSearchService.sourceId.next(this.sourceid);
        this.dynamicSearchService.id.next(this.id);
        this.dynamicSearchService.pageId.next(this.formId);
    }
    redirect() {
        if (window.location.href.includes('master-view') || window.location.href.includes('composite-page')) {
            if (window.location.href.includes('dynamic-routing') || this.id)
                this.router.navigate(['../../../'], { relativeTo: this.route });
        }
        this.dynamicTabPageService.changePage(true);
        if (this.parentGridPageId) {
            this.location.back();
        }
    }
    customEventsButton(event) {
        this.customEventService.customEventsButton(event);
    }
    uploadFile(file) {
        this.ocr.getResponse().subscribe(result => {
            if (result && result.status == 'SUCCEEDED') {
                this.ocrResponseService.processOCRResponse(result, this.scannerConfig, this.submittedData, this.FormInputs);
            }
        });
        this.ocrResponseService.processResponseData(file);
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
    customEvent(event) {
        this._formIO.customEvent(event, this.formIO);
    }
    getEmittedData(data) {
        this.showOcrForm = false;
        this.btnVerify = true;
        this.submittedData = { ...data, ...this.submittedData };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.FormioService }, { token: i3.TemplateService }, { token: i4.ocrResponseService }, { token: i5.customEventService }, { token: i6.VideoSpeechContentService }, { token: i7.routeParamService }, { token: i8.Store }, { token: MAT_DIALOG_DATA, optional: true }, { token: i9.PlatformDataStoreService }, { token: i10.FormSubmissionService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormPageComponent, selector: "app-form-page", inputs: { editId: "editId", pageId: "pageId", sourceid: "sourceid", externalParameters: "externalParameters", isReadOnly: "isReadOnly", componentId: "componentId" }, outputs: { afterSubmit: "afterSubmit", submissionDone: "submissionDone" }, providers: [SpeechRecognitionService, OCRService], viewQueries: [{ propertyName: "external_scanner", first: true, predicate: ["external_scanner"], descendants: true }, { propertyName: "validationPopup", first: true, predicate: ["validationPopup"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"], dependencies: [{ kind: "directive", type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i11.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i12.FormioComponent, selector: "formio" }, { kind: "component", type: i13.AlertComponent, selector: "app-alert" }, { kind: "component", type: i14.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i15.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-form-page', providers: [SpeechRecognitionService, OCRService], template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.FormioService }, { type: i3.TemplateService }, { type: i4.ocrResponseService }, { type: i5.customEventService }, { type: i6.VideoSpeechContentService }, { type: i7.routeParamService }, { type: i8.Store }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i9.PlatformDataStoreService }, { type: i10.FormSubmissionService }]; }, propDecorators: { editId: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL2R5bmFtaWMtdGFiLXBhZ2UvZm9ybS1wYWdlL2Zvcm0tcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2Zvcm0tcGFnZS9mb3JtLXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFFTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQWUsTUFBTSwwQkFBMEIsQ0FBQztBQUduRixPQUFPLEVBQWEsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0Qs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c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFJeUIsZ0JBQWdCO3NCQUE5QyxTQUFTO3VCQUFDLGtCQUFrQjtnQkFDQyxlQUFlO3NCQUE1QyxTQUFTO3VCQUFDLGlCQUFpQjtnQkFFbkIsVUFBVTtzQkFBbEIsS0FBSztnQkFHSSxXQUFXO3NCQUFwQixNQUFNO2dCQXdCUCxNQUFNO3NCQURMLFNBQVM7dUJBQUMsUUFBUTtnQkF3QlQsV0FBVztzQkFBbkIsS0FBSztnQkFJRyxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2csTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1pb0NvbXBvbmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IEZpbGVFcnJvciwgTmd4ZlVwbG9hZGVyU2VydmljZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3NwZWVjaC1yZWNvZ25pdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT0NSU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3BsYXRmb3JtLWRhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY3NlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWNzZWFyY2guc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2F0dGFjaG1lbnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPY3JWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1pb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2Zvcm1pby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHB1Ymxpc2hFdmVudCB9IGZyb20gJy4uLy4uL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFN0YXRlIH0gZnJvbSAnLi4vLi4vQHNoYXJlZC9tYXN0ZXItdmlldy1zdGF0ZS9tYXN0ZXItdmlldy5zdGF0ZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL2NvcmUuc3RhdGUnO1xyXG5pbXBvcnQgeyBzZWxlY3RDb21wb25lbnRDb25maWdCeUlkLCBzZWxlY3RFdmVudCB9IGZyb20gJy4uLy4uL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcuc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgY3VzdG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi9jdXN0b20tZXZlbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IG9jclJlc3BvbnNlU2VydmljZSB9IGZyb20gJy4vb2NyLXJlc3BvbnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL2Zvcm0tdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFZpZGVvU3BlZWNoQ29udGVudFNlcnZpY2UgfSBmcm9tICcuL3ZpZGVvLXNwZWVjaC1jb250ZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyByb3V0ZVBhcmFtU2VydmljZSB9IGZyb20gJy4vcm91dGVwYXJhbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybVN1Ym1pc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9mb3Jtc3VibWl0LnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCAkOiBhbnk7XHJcbmNvbnN0IFNUUlVDVFVSRURfREVDSVNJT05fTUFLSU5HID0gJ1N0cnVjdHVyZWQgRGVjaXNpb24gTWFraW5nJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybS1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mb3JtLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UsIE9DUlNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIHN1Ym1pdEZhaWxlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZm9ybUlkOiBhbnk7XHJcbiAgdGFiSWQ6IGFueTtcclxuICBqc29uRm9ybTogYW55O1xyXG4gIGZyb21UaXRsZTogYW55O1xyXG4gIEBJbnB1dCgpIGVkaXRJZDogYW55O1xyXG4gIGlkOiBhbnk7XHJcbiAgc3VibWl0dGVkRGF0YTogYW55O1xyXG4gIHVzZXI6IGFueTtcclxuICBtdWx0aVNlbGVjdERyb3BEb3duczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIEBJbnB1dCgpIHBhZ2VJZDogYW55O1xyXG4gIEBJbnB1dCgpIHNvdXJjZWlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZXh0ZXJuYWxQYXJhbWV0ZXJzOiBzdHJpbmc7XHJcbiAgcGFnZURhdGFTdWJzY3JpcHRpb246IGFueTtcclxuICBpc0RpYWxvZ1BvcHVwID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuICBAVmlld0NoaWxkKCdleHRlcm5hbF9zY2FubmVyJykgZXh0ZXJuYWxfc2Nhbm5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd2YWxpZGF0aW9uUG9wdXAnKSB2YWxpZGF0aW9uUG9wdXA6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgcHJpdmF0ZSB2YWxpZGF0aW9uUG9wdXBSZWY6IE1hdERpYWxvZ1JlZjxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuICBASW5wdXQoKSBpc1JlYWRPbmx5OiBib29sZWFuO1xyXG4gIHNob3dCYWNrOiBib29sZWFuO1xyXG4gIGlzVGl0bGU6IGFueTtcclxuICBAT3V0cHV0KCkgYWZ0ZXJTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBwZXJzb25JZDogYW55O1xyXG4gIGZyb21Xb3JrRmxvdzogYm9vbGVhbjtcclxuICBjbGlja2VkU2VydmljZUNhc2U6IGJvb2xlYW47XHJcbiAgc2VydmljZUlkOiBhbnk7XHJcbiAgc3BlZWNoRGF0YTogc3RyaW5nO1xyXG4gIG5vdGlmaWNhdGlvbjogc3RyaW5nO1xyXG4gIG9yZ2FuaXphdGlvbklkOiBhbnk7XHJcbiAgRm9ybUlucHV0cyA9IFtdO1xyXG4gIHNjYW5uZXJDb25maWc6IGFueSA9IHt9O1xyXG4gIHRhYkRhdGE6IGFueTtcclxuICBuYXJyYXRpdmU6IGFueTtcclxuICBwdXJwb3NlOiBhbnk7XHJcbiAgcGFnZXR5cGU6IHN0cmluZztcclxuICBsb2NhbHN0b3JhZ2U6IExvY2FsU2VydmljZTtcclxuICBzZXNzaW9uU3RvcmFnZTogTG9jYWxTZXJ2aWNlO1xyXG4gIGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICBkYXRhU3RvcmU6IERhdGFTdG9yZVNlcnZpY2U7XHJcbiAgc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlOiBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2U7XHJcbiAgdXBsb2FkU2VydmljZTogTmd4ZlVwbG9hZGVyU2VydmljZTtcclxuICBvY3I6IE9DUlNlcnZpY2U7XHJcbiAgYXBwb2ludG1lbnRMaXN0OiBQcm9taXNlPGJvb2xlYW4+IHwgdW5kZWZpbmVkO1xyXG4gIGlzZm9ybUlPID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZCgnZm9ybUlPJylcclxuICBmb3JtSU86IEZvcm1pb0NvbXBvbmVudDtcclxuICBjdXJyZW50WW91dGhJZDogYW55O1xyXG4gIGR5bmFtaWNUYWJQYWdlU2VydmljZTogRHluYW1pY1RhYlBhZ2VTZXJ2aWNlO1xyXG4gIGR5bmFtaWNTZWFyY2hTZXJ2aWNlOiBEeW5hbWljc2VhcmNoU2VydmljZTtcclxuICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XHJcbiAgYXR0YWNobWVudEluZm86IGFueSA9IHt9O1xyXG4gIHBhcmVudEdyaWRQYWdlOiBzdHJpbmc7XHJcbiAgcGFyZW50R3JpZFBhZ2VJZDogYW55O1xyXG4gIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlO1xyXG4gIHNob3dPY3JGb3JtOiBib29sZWFuO1xyXG4gIGF0dGFjaG1lbnRTZXJ2aWNlITogQXR0YWNobWVudHNTZXJ2aWNlO1xyXG4gIGZvcm1SZXNwb25zZTogYW55O1xyXG4gIGFjdGlvbjogc3RyaW5nO1xyXG4gIGNvbnRlbnRBcnJheTogYW55W10gPSBbXTtcclxuICBvY3JWYWxpZGF0aW9uU2VydmljZTogT2NyVmFsaWRhdGlvblNlcnZpY2U7XHJcbiAgZGF0YVN1YjogYW55O1xyXG4gIGJ0blZlcmlmeSA9IGZhbHNlO1xyXG4gIGVkaXRWYWx1ZTogYW55O1xyXG4gIGxvZ2dlZFVzZXI6IGFueTtcclxuICBwcm92aWRlckRhdGE6IGFueTtcclxuICBjaGVjazogYW55O1xyXG4gIHNob3diYWNrYnRuID0gZmFsc2U7XHJcbiAgc2hvd1RpdGxlIDogYm9vbGVhbjtcclxuICAgQElucHV0KCkgY29tcG9uZW50SWQ6IGFueTtcclxuICAgc2VsZWN0ZWRDb21wb25lbnQ6IENvbXBvbmVudFN0YXRlO1xyXG4gICBjb21wb25lbnRDb25maWckOiBPYnNlcnZhYmxlPENvbXBvbmVudFN0YXRlPjtcclxuICBldmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIEBPdXRwdXQoKSBzdWJtaXNzaW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcclxuICBjb25maXJtYXRpb25tZXNzYWdlOiBzdHJpbmc7XHJcbiAgc2hvd0J1dHRvbjE6IGFueTtcclxuICBzaG93QnV0dG9uMjogYW55O1xyXG4gIGJ1dHRvbjFUZXh0OiBhbnk7XHJcbiAgYnV0dG9uMlRleHQ6IGFueTtcclxuICBidXR0b24xS2V5OiBhbnk7XHJcbiAgYnV0dG9uMktleTphbnk7XHJcbiAgYnV0dG9uMUFjdGlvbjogYW55O1xyXG4gIGJ1dHRvbjJBY3Rpb246IGFueTtcclxuICBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXHJcbiAgYnV0dG9uMVN0eWxlOiBhbnk7XHJcbiAgYnV0dG9uMlN0eWxlOiBhbnk7XHJcbiAgZGlhbG9nOiBNYXREaWFsb2c7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGFwcFNlcnZpY2U6YW55O1xyXG4gIGZhbGxiYWNrSWRGcm9tUm91dGU6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBfZm9ybUlPOiBGb3JtaW9TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgb2NyUmVzcG9uc2VTZXJ2aWNlIDogb2NyUmVzcG9uc2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjdXN0b21FdmVudFNlcnZpY2UgOiBjdXN0b21FdmVudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZpZGVvU3BlZWNoQ29udGVudFNlcnZpY2UgOiBWaWRlb1NwZWVjaENvbnRlbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXBhcmFtU2VydmljZSA6IHJvdXRlUGFyYW1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIGRhdGEsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9ybVN1Ym1pc3Npb25TZXJ2aWNlOiBGb3JtU3VibWlzc2lvblNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ107XHJcbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlID0gcmVzWydBUFBTRVJWSUNFJ107XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UgPSByZXNbJ0FMRVJUU0VSVklDRSddO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGluamVjdG9yLmdldDxBdXRoU2VydmljZT4oQXV0aFNlcnZpY2UpO1xyXG4gICAgLy8gdGhpcy5hbGVydFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QWxlcnRTZXJ2aWNlPihBbGVydFNlcnZpY2UpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2UgPSBpbmplY3Rvci5nZXQ8TG9jYWxTZXJ2aWNlPihMb2NhbFNlcnZpY2UpO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IGluamVjdG9yLmdldDxMb2NhdGlvbj4oTG9jYXRpb24pO1xyXG4gICAgdGhpcy5kYXRhU3RvcmUgPSBpbmplY3Rvci5nZXQ8RGF0YVN0b3JlU2VydmljZT4oRGF0YVN0b3JlU2VydmljZSk7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uU2VydmljZSA9IGluamVjdG9yLmdldDxTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2U+KFNwZWVjaFJlY29nbml0aW9uU2VydmljZSk7XHJcbiAgICB0aGlzLnVwbG9hZFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8Tmd4ZlVwbG9hZGVyU2VydmljZT4oTmd4ZlVwbG9hZGVyU2VydmljZSk7XHJcbiAgICB0aGlzLm9jciA9IGluamVjdG9yLmdldDxPQ1JTZXJ2aWNlPihPQ1JTZXJ2aWNlKTtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNUYWJQYWdlU2VydmljZT4oRHluYW1pY1RhYlBhZ2VTZXJ2aWNlKTtcclxuICAgIHRoaXMudmlkZW9TcGVlY2hDb250ZW50U2VydmljZSA9IGluamVjdG9yLmdldDxWaWRlb1NwZWVjaENvbnRlbnRTZXJ2aWNlPihWaWRlb1NwZWVjaENvbnRlbnRTZXJ2aWNlKTtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8RHluYW1pY3NlYXJjaFNlcnZpY2U+KER5bmFtaWNzZWFyY2hTZXJ2aWNlKTtcclxuICAgIHRoaXMuYXR0YWNobWVudFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QXR0YWNobWVudHNTZXJ2aWNlPihBdHRhY2htZW50c1NlcnZpY2UpO1xyXG4gICAgdGhpcy5vY3JWYWxpZGF0aW9uU2VydmljZSA9IGluamVjdG9yLmdldDxPY3JWYWxpZGF0aW9uU2VydmljZT4oT2NyVmFsaWRhdGlvblNlcnZpY2UpO1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8TmdiTW9kYWw+KE5nYk1vZGFsKTtcclxuICAgIHRoaXMuZGlhbG9nID0gaW5qZWN0b3IuZ2V0PE1hdERpYWxvZz4oTWF0RGlhbG9nKTtcclxuICAgIHRoaXMudXNlciA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaigndXNlcicpO1xyXG4gICAgaWYgKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3BhcmVudEdyaWRQYWdlJykpIHtcclxuICAgICAgdGhpcy5zaG93YmFja2J0biA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHBhcmVudEdyaWRQYWdlT2JqID0gSlNPTi5wYXJzZSh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYXJlbnRHcmlkUGFnZScpKTtcclxuICAgICAgY29uc3QgY3VycmVudHBhZ2UgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYWdlbmFtZScpO1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlID0gY3VycmVudHBhZ2UgPyBjdXJyZW50cGFnZSA6ICcnO1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlSWQgPSBwYXJlbnRHcmlkUGFnZU9iaiA/IHBhcmVudEdyaWRQYWdlT2JqLmlkIDogJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9yZ2FuaXphdGlvbklkID0gdGhpcy51c2VyPy51c2VyV29ya0luZm8/Lm9yZ2FuaXphdGlvbj8uaWQ7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGFnZVVzZXJEYXRhID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLmNvbmRpdGlvbkNoZWNrRGF0YShkYXRhKTtcclxuICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmNsaWNrYWJsZURhdGE7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZURhdGEgPSB0aGlzLnJvdXRlcj8uZ2V0Q3VycmVudE5hdmlnYXRpb24oKT8uZXh0cmFzPy5zdGF0ZTtcclxuICAgIHRoaXMuc2hvd0JhY2sgPSBuYXZpZ2F0ZURhdGE/LmV4dGVybmFsTGluayA/IHRydWUgOiBmYWxzZTtcclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LmlzUmVhZE9ubHkpIHtcclxuICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LnRpdGxlKSB7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9IG5hdmlnYXRlRGF0YS50aXRsZTtcclxuICAgIH1cclxuICAgIGlmIChuYXZpZ2F0ZURhdGE/LnBlcnNvbklkKSB7XHJcbiAgICAgIHRoaXMucGVyc29uSWQgPSBuYXZpZ2F0ZURhdGEucGVyc29uSWQ7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQZXJzb25JZCA9IG5hdmlnYXRlRGF0YS5wZXJzb25JZDtcclxuICAgIH1cclxuICAgIHRoaXMuc3BlZWNoRGF0YSA9ICcnO1xyXG4gICAgaWYgKGhpc3Rvcnkuc3RhdGUudGl0bGUpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGl0bGUnLCBoaXN0b3J5Py5zdGF0ZT8udGl0bGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhpcy5pc1RpdGxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndGl0bGUnKTtcclxuICAgICAgdGhpcy5pc1RpdGxlID0gJyAvICcgKyAnQWRkICcgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnZXQtdGl0bGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dldC10aXRsZScpO1xyXG4gICAgaWYgKGdldFRpdGxlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaXNUaXRsZSA9ICdBZGQgJyArIGdldFRpdGxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1RpdGxlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50WW91dGhJZCA9IHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgIHRoaXMuYXR0YWNobWVudEluZm8gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFNoYXJlZE1lc3NhZ2UoKTtcclxuICAgIHRoaXMuRm9ybUlucHV0cyA9IFtdO1xyXG4gICAgdGhpcy5pc1JlYWRPbmx5ID0gaGlzdG9yeT8uc3RhdGU/LmlzUmVhZE9ubHkgPyB0cnVlIDogdGhpcy5pc1JlYWRPbmx5O1xyXG4gICAgdGhpcy5wZXJzb25JZCA9IGhpc3Rvcnk/LnN0YXRlPy5wZXJzb25JZDtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQZXJzb25JZCA9IGhpc3Rvcnk/LnN0YXRlPy5wZXJzb25JZDtcclxuXHJcbiAgICB0aGlzLnNob3dCYWNrID0gKGhpc3Rvcnk/LnN0YXRlPy5leHRlcm5hbExpbmsgJiYgIWhpc3Rvcnk/LnN0YXRlPy5pc0hpZGVCYWNrKSB8fCB0aGlzLnNob3dCYWNrO1xyXG4gICAgdGhpcy5wYWdlSWQgPSBoaXN0b3J5Py5zdGF0ZT8ucGFnZUlkID8gaGlzdG9yeT8uc3RhdGU/LnBhZ2VJZCA6IHRoaXMucGFnZUlkO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdncmlkQWN0aW9uJykgfHwgdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnZ3JpZEFjdGlvbicsIHRoaXMuYWN0aW9uKVxyXG4gICAgdGhpcy5idG5WZXJpZnkgPSB0aGlzLmFjdGlvbiA9PT0gJ2VkaXQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygndGFiJykpIHtcclxuICAgICAgdGhpcy5zaG93YmFja2J0biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dUaXRsZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93VGl0bGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25kaXRpb25DaGVja0RhdGEoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBkYXRhLmVkaXRJZCA/IGRhdGEuZWRpdElkIDogbnVsbDtcclxuICAgICAgdGhpcy5pc0RpYWxvZ1BvcHVwID0gZGF0YS5pc1BvcHVwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLnBhZ2VJZCA9IGRhdGEucGFnZUlkID8gZGF0YS5wYWdlSWQgOiB0aGlzLnBhZ2VJZDtcclxuICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gZGF0YS5pc1JlYWRPbmx5ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VkVXNlciA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaigndXNlcicpO1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRTaGFyZWRNZXNzYWdlKGRhdGEpO1xyXG4gICAgICB0aGlzLnJvdXRlclBhZ2VEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5zb3VyY2VJZFNlcnZpY2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YSAhPSAnJykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZUlkID0gZGF0YTtcclxuICAgICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnNvdXJjZUlkU2VydmljZS5uZXh0KCcnKTtcclxuICAgICAgICB0aGlzLmNsaWNrZWRTZXJ2aWNlQ2FzZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYWxsR2V0QVBJKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UucmVzdWx0LnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0ICE9ICcnKSB7XHJcbiAgICAgICAgdGhpcy5hZnRlclN1Ym1pdC5lbWl0KHJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5yZXN1bHQubmV4dChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mb3JtSU8pIHtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvUmVhZHkudGhlbihmb3JtSW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGZvcm1JbnN0YW5jZS5yZWFkeS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVQYXNzd29yZCcpO1xyXG4gICAgICAgICAgaWYgKHRvZ2dsZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImRhdGFbJHt0b2dnbGVCdXR0b25bJ2FyaWFMYWJlbCddfV1cIl1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWV5ZS1zbGFzaCcpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWV5ZScpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEZpZWxkLnR5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWV5ZScpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWV5ZS1zbGFzaCcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RFdmVudCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCAmJiBldmVudC5ldmVudE5hbWUgPT09ICdzdWJtaXQnICYmIGV2ZW50LnBheWxvYWQuc2V0dGluZ3Mub25TdWJtaXRSZWZyZXNoXHJcbiAgICAgICAgJiYgZXZlbnQucGF5bG9hZC5zZXR0aW5ncy5vblN1Ym1pdFJlZnJlc2hXaWRnZXRzKSB7XHJcbiAgICAgICAgICBldmVudC5wYXlsb2FkLnNldHRpbmdzLm9uU3VibWl0UmVmcmVzaFdpZGdldHMuZm9yRWFjaCh4ID0+e1xyXG4gICAgICAgICAgaWYoWydBVFBCRE0nLCAnRkZQJ10uaW5jbHVkZXMoeC5wYWdlVHlwZSkpICB0aGlzLmZvcm1JZCA9IHguaWQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVyQ29uZmlnKHRydWUpOyBcclxuICAgICAgICAgIH0pIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcm91dGVyUGFnZURhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5mb3JtSWQgPSBkYXRhLnBhZ2VJZDtcclxuICAgIGlmICghdGhpcy5mb3JtSWQpIHtcclxuICAgICAgdGhpcy5mb3JtSWQgPSB0aGlzLnBhZ2VJZDtcclxuICAgIH1cclxuICAgIHRoaXMuY29tcG9uZW50Q29uZmlnJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q29tcG9uZW50Q29uZmlnQnlJZCh0aGlzLmNvbXBvbmVudElkKSkpO1xyXG4gICAgdGhpcy5jb21wb25lbnRDb25maWckLnN1YnNjcmliZShkYXRhID0+IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQgPSBkYXRhKTtcclxuICAgIHRoaXMuZXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEV2ZW50KSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgdGhpcy5zaG93YmFja2J0biA9IGZhbHNlO1xyXG4gICAgICBjb25zdCB7IGlkLCBpc1JlYWRPbmx5LCBlZGl0SWQgfSA9IHRoaXMucm91dGVwYXJhbVNlcnZpY2UuaGFuZGxlRXZlbnQoZXZlbnQsIHRoaXMucGFnZUlkLCB0aGlzLmlkLCB0aGlzLmlzUmVhZE9ubHksdGhpcy5lZGl0SWQpO1xyXG5cclxuICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICB0aGlzLmlzUmVhZE9ubHkgPSBpc1JlYWRPbmx5O1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IGVkaXRJZDtcclxuICAgICAgaWYgKGlkICE9PSBudWxsIHx8IGV2ZW50LmV2ZW50TmFtZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgICB0aGlzLmdldFJvdXRlckNvbmZpZygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2V0U291cmNlKCk7XHJcbiAgICB0aGlzLmdldFBhZ2VUYWJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlVGFicygpIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldFBhZ2VCeUlkKHRoaXMuZm9ybUlkKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0LmRhdGFbMF0/LmFjdGl2ZVZlcnNpb24/LnBhZ2VuYW1lKSB7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnZXQtdGl0bGUnLCByZXN1bHQuZGF0YVswXT8uYWN0aXZlVmVyc2lvbj8ucGFnZW5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhYklkID0gcmVzdWx0LmRhdGFbMF0uYWN0aXZlVmVyc2lvbi5pZDtcclxuICAgICAgICB0aGlzLmdldFJvdXRlckNvbmZpZygpO1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdBZGQgJyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dldC10aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNvdXJjZSgpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5zb3VyY2VpZDtcclxuICAgIGlmICh0aGlzLnJvdXRlLnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKSkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudCAmJlxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zb3VyY2VpZCA9IHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3VyY2VpZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zb3VyY2VpZCkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5zbmFwc2hvdD8ucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpXHJcbiAgICAgICAgPyB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICAgICA6IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wdXJwb3NlID1cclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQgJiYgdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1zLnB1cnBvc2VcclxuICAgICAgICA/IHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtcy5wdXJwb3NlXHJcbiAgICAgICAgOiB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudC5zbmFwc2hvdC5wYXJhbXMucHVycG9zZTtcclxuICB9XHJcbiAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhXHJcblxyXG4gIC8qIFRoZSBiZWxvdyBmdW5jdGlvbiB3aWxsIHRyaWdnZXIgd2hlbiB1c2VyIGNsaWNrcyBvbiBhIGJ1dHRvbiBpbiBQb3BVcCAqL1xyXG4gIG9uQ2xpY2tDb25maXJtYXRpb24odXNlckFjdGlvbiwgYWN0aW9uS2V5KSB7XHJcbiAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0VmFsdWUoKTtcclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KCdjdXN0b21WYWxpZGF0aW9uQ29tcG9uZW50Jyk/LmNvbXBvbmVudDtcclxuICAgIGNvbnN0IHVwZGF0ZUNvbXBvbmVudEFuZFJlZHJhdyA9IChsb2NhbEFjdGlvbktleSkgPT4ge1xyXG4gICAgICBpZiAoY29tcCkgY29tcFsndXNlcklucHV0J10gPSBsb2NhbEFjdGlvbktleTtcclxuICAgICAgZm9ybVZhbHVlLmRhdGFbJ3VzZXJJbnB1dCddID0gbG9jYWxBY3Rpb25LZXk7XHJcbiAgICAgIHRoaXMuZm9ybUlPLmZvcm1pby5zZXRWYWx1ZShmb3JtVmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGlmICh1c2VyQWN0aW9uID09PSAnc3VibWl0Jykge1xyXG4gICAgICB0aGlzLmNsb3NlVmFsaWRhdGlvblBvcHVwKCk7XHJcbiAgICAgIGZvcm1WYWx1ZS5kYXRhWydwcmV2ZW50U3VibWl0J10gPSBmYWxzZTtcclxuICAgICAgdGhpcy5mb3JtSU8uZm9ybWlvLnNldFZhbHVlKGZvcm1WYWx1ZSk7XHJcbiAgICAgIHVwZGF0ZUNvbXBvbmVudEFuZFJlZHJhdyhhY3Rpb25LZXkpO1xyXG4gICAgICBjb21wPy5wb3B1cE9uU3VibWl0ICYmIHRoaXMub25TdWJtaXQoZm9ybVZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2VWYWxpZGF0aW9uUG9wdXAoKTtcclxuICAgICAgdXBkYXRlQ29tcG9uZW50QW5kUmVkcmF3KGNvbXA/LmJ1dHRvbjJUZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlVmFsaWRhdGlvblBvcHVwKCkge1xyXG4gICAgdGhpcy52YWxpZGF0aW9uUG9wdXBSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLmZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KCdjdXN0b21WYWxpZGF0aW9uQ29tcG9uZW50Jyk/LmNvbXBvbmVudDtcclxuICAgIGNvbnN0IGZvcm1WYWx1ZSA9IHRoaXMuZm9ybUlPLmZvcm1pby5nZXRWYWx1ZSgpO1xyXG4gICAgaWYgKGZvcm1WYWx1ZT8uZGF0YT8ucHJldmVudFN1Ym1pdCAmJiBjb21wPy5wb3B1cE9uU3VibWl0ICYmIGNvbXA/LnNob3dQb3B1cCkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25Qb3B1cFJlZiA9IHRoaXMuZGlhbG9nLm9wZW4odGhpcy52YWxpZGF0aW9uUG9wdXApO1xyXG4gICAgICB0aGlzLmNvbmZpcm1hdGlvbm1lc3NhZ2UgPSBjb21wPy52YWxpZGF0aW9uTWVzc2FnZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFzdGVyQ29tcG9zaXRlVmlld1JvdXRlKGRhdGEpIHtcclxuICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdjb21wb3NpdGUtcGFnZScpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdtYXN0ZXItdmlldycpKXtcclxuICAgIGlmKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQpIHtcclxuICAgICAgaWYoKHRoaXMuc2VsZWN0ZWRDb21wb25lbnQ/LmxvYWRlZEZyb21NYXN0ZXJWaWV3IHx8IHRoaXMuc2VsZWN0ZWRDb21wb25lbnQ/LmxvYWRlZEZyb21Db21wb3NpdGVQYWdlICkmJiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50LnNldHRpbmdzICYmIHRoaXMuc2VsZWN0ZWRDb21wb25lbnQuc2V0dGluZ3Mub25TdWJtaXRSZWRpcmVjdGlvbikgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wb25lbnRbJ3N1Ym1pdHRlZERhdGEnXSA9IGRhdGE7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gocHVibGlzaEV2ZW50KHtldmVudE5hbWU6ICdzdWJtaXQnLCBwYXlsb2FkOiB0aGlzLnNlbGVjdGVkQ29tcG9uZW50fSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgfTtcclxufVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoc3VibWlzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcclxuICAgIGlmIChzdWJtaXNzaW9uPy5kYXRhPy5wcmV2ZW50U3VibWl0KSB7XHJcbiAgICAgIHRoaXMuZm9ybUlPLmZvcm1pby5lbWl0KCdzdWJtaXREb25lJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaWQgPSB0aGlzLmZvcm1TdWJtaXNzaW9uU2VydmljZS5nZXRJZEZyb21Sb3V0ZSh0aGlzLmVkaXRJZCwgdGhpcy5mYWxsYmFja0lkRnJvbVJvdXRlKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtU3VibWlzc2lvblNlcnZpY2UucHJlcGFyZVN1Ym1pc3Npb25EYXRhKHN1Ym1pc3Npb24pO1xyXG5cclxuICAgIGlmICh0aGlzLnByb3ZpZGVyRGF0YT8uaWQpIGRhdGEucHJvdmlkZXJfaWQgPSB0aGlzLnByb3ZpZGVyRGF0YT8uaWQ7XHJcbiAgICBpZiAodGhpcy5jaGVjaykge1xyXG4gICAgICBpZiAodGhpcy5zdWJtaXR0ZWREYXRhPy5kYXRhPy50ZXh0RmllbGQ/LmFjY291bnQ/LmlkKSB7XHJcbiAgICAgICAgZGF0YS5pZCA9IHRoaXMuc3VibWl0dGVkRGF0YT8uZGF0YT8udGV4dEZpZWxkPy5hY2NvdW50Py5pZDtcclxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHRoaXMuZm9ybVN1Ym1pc3Npb25TZXJ2aWNlLnByZXBhcmVSZXF1ZXN0RGF0YSh0aGlzLmZvcm1JZCwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtKHJlcXVlc3REYXRhKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB0aGlzLmZvcm1TdWJtaXNzaW9uU2VydmljZS5wcmVwYXJlUmVxdWVzdERhdGEodGhpcy5mb3JtSWQsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9ybShyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB0aGlzLmZvcm1TdWJtaXNzaW9uU2VydmljZS5wcmVwYXJlUmVxdWVzdERhdGEodGhpcy5mb3JtSWQsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0ZVdpdGhvdXRJZChyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0gdGhpcy5mb3JtU3VibWlzc2lvblNlcnZpY2UucHJlcGFyZVJlcXVlc3REYXRhKHRoaXMuZm9ybUlkLCBkYXRhKTtcclxuICAgICAgY29uc3QgZ2V0Rm9ybVBhZ2VUaXRsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0ZPUk1fVElUTEUnKTtcclxuICAgICAgaWYoZ2V0Rm9ybVBhZ2VUaXRsZSA9PT0gJ0VkaXQgWW91dGggSW5mbycgKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICBpZiAoKHRoaXMuc3VibWl0dGVkRGF0YT8uZGF0YS5hY3Rpb24gIT09IFwic3dpdGNoXCIgJiYgdGhpcy5zdWJtaXR0ZWREYXRhPy5kYXRhLmFjdGlvbiAhPT0gXCJjb3B5XCIpICYmIHRoaXMuaWQgfHwgdGhpcy5zdWJtaXR0ZWREYXRhPy5kYXRhPy50ZXh0RmllbGQ/LmlkIHx8IHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhPy5lZGl0KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtKHJlcXVlc3REYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN1Ym1pdGVXaXRob3V0SWQocmVxdWVzdERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXRlV2l0aG91dElkKHJlcXVlc3REYXRhKSB7XHJcbiAgICBjb25zdCBmaWxlVXBsb2FkRGF0YSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U2hhcmVkTWVzc2FnZSgpO1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlRm9ybVJlc3BvbnNlKHRoaXMuaWQsIHJlcXVlc3REYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXNzaW9uRG9uZS5lbWl0KHRydWUpXHJcbiAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnQWRkQWN0aW9uJywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ2dyaWRBY3Rpb24nKTtcclxuICAgICAgICB0aGlzLmRhdGFTdG9yZS5zZXREYXRhKCdncmlkQWN0aW9uJyxudWxsKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGUocmVzdWx0WydkYXRhJ10pO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlhbG9nUG9wdXApIHtcclxuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFmdGVyU3VibWl0LmVtaXQocmVzdWx0WydkYXRhJ10pO1xyXG4gICAgICAgIHRoaXMuc3VibWl0VG9TdXJ2ZXkoKTtcclxuICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIocmVzdWx0WydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICBpZiAoZmlsZVVwbG9hZERhdGE/LmF0dGFjaG1lbnRkZXRhaWxzKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnQoZmlsZVVwbG9hZEluZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5Jyx0cnVlKTtcclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5yZW1vdmVJdGVtKCd0aXRsZXRhYicpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc3RlckNvbXBvc2l0ZVZpZXdSb3V0ZShyZXN1bHRbJ2RhdGEnXSk7XHJcbiAgICAgICAgLy8gVXNpbmcgYmVsb3cgZm9yIGFsbCBwYWdlcyAoYWZ0ZXIgYWRkIHJlc3BvbnMpIGV4Y2VwdCBjb21wb3NpdGUuXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwU2VydmljZS5jYW5OYXZpZ2F0ZUJhY2soKSAmJiAhd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2NvbXBvc2l0ZS1wYWdlJykgJiYgIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdtYXN0ZXItdmlldycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEZhaWxlZC5uZXh0KCdGYWlsZWQgdG8gYWRkIHJlc3BvbnNlJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBhZGRBdHRhY2htZW50KGluZm8pIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoaW5mbykuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdHRlZERhdGUocmVzdWx0KSB7XHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiByZXN1bHRbMF0uZGF0YSA/IHJlc3VsdFswXS5kYXRhIDogcmVzdWx0WzBdIH07XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICB0aGlzLmlkID0gcmVzdWx0WzBdLmlkO1xyXG4gICAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiByZXN1bHQ/LmRhdGEgPyByZXN1bHQ/LmRhdGEgOiByZXN1bHQgfTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgIHRoaXMuaWQgPSByZXN1bHQuaWQ7XHJcbiAgICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0VG9TdXJ2ZXkoKSB7XHJcbiAgICBpZiAodGhpcy5wYWdldHlwZSA9PT0gJ1NVUlZFWScpIHtcclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlVXNlclN1cnZleShoaXN0b3J5LCB0aGlzLmlkKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vVGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpIHtcclxuICAgIGNvbnN0IGZpbGVVcGxvYWREYXRhID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICBpZiAocmVxdWVzdERhdGE/LnJlc3BvbnNlPy5pZCkge1xyXG4gICAgICB0aGlzLmlkID0gcmVxdWVzdERhdGE/LnJlc3BvbnNlPy5pZDtcclxuICAgIH1cclxuICAgIGNvbnN0IEVkaXRHcmlkUGFnZUlEID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnRWRpdEdyaWRQYWdlSUQnKTtcclxuICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdjb21wb3NpdGUtcGFnZScpKSByZXF1ZXN0RGF0YVsnaXNDb21wb3NpdGVQYWdlJ10gPSB0cnVlO1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UudXBkYXRlRm9ybVJlc3BvbnNlKHRoaXMuaWQsIHJlcXVlc3REYXRhLCBFZGl0R3JpZFBhZ2VJRCkuc3Vic2NyaWJlKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VibWlzc2lvbkRvbmUuZW1pdCh0cnVlKTsgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgICAgIGlmKGRhdGEgJiYgKGRhdGEgPT09ICdOT19FRElUJyB8fCBkYXRhID09PSAnTk9UX0FMTE9XX1RPX0VESVQnIHx8IGRhdGEgPT09ICdJTlZBTElEX1VTRVInKSl7XHJcbiAgICAgICAgdGhpcy5mb3JtU3VibWlzc2lvblNlcnZpY2UudXBkYXRlRm9ybURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTsgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHJlc3VsdFswXS5kYXRhID8gcmVzdWx0WzBdLmRhdGEgOiByZXN1bHRbMF0gfTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IGRhdGEgPyBkYXRhIDogcmVzdWx0IH07XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gcmVzdWx0WydpZCddO1xyXG4gICAgICAgICAgICAgIHRoaXMubWFzdGVyQ29tcG9zaXRlVmlld1JvdXRlKGRhdGEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuaWQubmV4dChudWxsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ2VkaXRWYWx1ZScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhPy5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnU3VibWl0dGVkIFN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhOiByZXF1ZXN0RGF0YT8ucmVzcG9uc2VcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIocmVzdWx0WydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpdGxldGFiJyk7XHJcbiAgICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5yZW1vdmVJdGVtKCdlZGl0VmFsdWUnKTtcclxuICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RhcmdldC10YWItZmlsdGVyJyk7XHJcbiAgICAgICAgICBpZighd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2NvbXBvc2l0ZS1wYWdlJykgJiYgIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdtYXN0ZXItdmlldycpKVxyXG4gICAgICAgICAgdGhpcy5yZWRpcmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEZhaWxlZC5uZXh0KCdGYWlsZWQgdG8gdXBkYXRlIHJlc3BvbnNlJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBjdXN0b21DbGlja0V2ZW50cyhfZGF0YSwgZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlkID09ICdzY2FuX2J1dHRvbicpIHtcclxuICAgICAgdGhpcy5leHRlcm5hbF9zY2FubmVyLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQuZGF0YXNldCkge1xyXG4gICAgICAgIHRoaXMuc2Nhbm5lckNvbmZpZyA9IGV2ZW50LnNyY0VsZW1lbnQuZGF0YXNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRSb3V0ZXJDb25maWcoaXNDb21wb3NpdGVQYWdlUmVmcmVzaD86IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmZvcm1JZCkge1xyXG4gICAgICAvLyBnZXQgY29uZmlndXJlIFVSTCBnZXQscG9zdCxwdXQgVVJMXHJcbiAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbigpLnRoZW4oY29uZmlnID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb25maWcpO1xyXG4gICAgICAgIGlmKGlzQ29tcG9zaXRlUGFnZVJlZnJlc2gpe1xyXG4gICAgICAgICAgaWYoY29uZmlnLmRhdGEucGFnZURldGFpbHMuaWQgPT0gdGhpcy5mb3JtSWQpXHJcbiAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKGNvbmZpZyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICB0aGlzLmdldFRlbXBsYXRlKGNvbmZpZyk7ICAgXHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgICAvLyBnZXQgUGFnZSBjb25maWd1cmF0aW9uIFRlbXBsYXRlIERhdGEgICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIGlmIChlcnIuZXJyb3IpIHtcclxuICAgICAgICAgIGlmIChlcnI/LmVycm9yPy5zdGF0dXNDb2RlID09PSAgNDAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKCdZb3UgZG9u4oCZdCBoYXZlIGFjY2VzcyB0byB0aGlzIHBhZ2UuIFBsZWFzZSBjb250YWN0IHRoZSBhZG1pbmlzdHJhdG9yLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnBhZ2VJZCAmJiAhdGhpcy5mb3JtSWQpIHtcclxuICAgICAgdGhpcy5wYWdlRGF0YVN1YnNjcmlwdGlvbiA9IHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuZGF0YS5zdWJzY3JpYmUocGFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybUlkID0gcGFnZTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIC8vIGdldCBjb25maWd1cmUgVVJMIGdldCxwb3N0LHB1dCBVUkxcclxuICAgICAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhXHJcbiAgICAgICAgICAgIHRoaXMuanNvbkZvcm0gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKHJlcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q29uZmlndXJhdGlvbigpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uID8gdGhpcy5hY3Rpb24/LnRvTG93ZXJDYXNlKCkgOiAnJztcclxuICAgIGNvbnN0IGRhdGE6IGFueSA9IGF3YWl0IHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldEFjdGl2ZVBhZ2UodGhpcy50YWJJZCwgdHJ1ZSwgYWN0aW9uKS50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0VGVtcGxhdGUocmVzdWx0OiBhbnkpIHtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5pc1RpdGxlID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0VGl0bGUodGhpcy5hY3Rpb24sIHJlc3VsdD8uZGF0YT8ucGFnZW5hbWUpO1xyXG4gICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdGT1JNX1RJVExFJywgdGhpcy5pc1RpdGxlKTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiB7fSB9O1xyXG4gICAgICB0aGlzLmVkaXRWYWx1ZSA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnZWRpdFZhbHVlJykpO1xyXG4gICAgICBpZiAodGhpcy5jaGVjayAmJiB0aGlzLnByb3ZpZGVyRGF0YT8uYWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHtcclxuICAgICAgICAgIGRhdGE6IHRoaXMucHJvdmlkZXJEYXRhPy5hY2NvdW50XHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVkaXRWYWx1ZSA9IEpTT04ucGFyc2UodGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnZWRpdFZhbHVlJykpO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmVkaXRWYWx1ZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhWydlZGl0J10gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIFxyXG4gICAgICB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGUgPSB0eXBlb2YgcmVzdWx0Py5kYXRhPy50ZW1wbGF0ZWpzb24gPT0gJ3N0cmluZyc/IEpTT04ucGFyc2UocmVzdWx0Py5kYXRhPy50ZW1wbGF0ZWpzb24pPy5mYWxsYmFja0lkRnJvbVJvdXRlOiByZXN1bHQ/LmRhdGE/LnRlbXBsYXRlanNvbj8uZmFsbGJhY2tJZEZyb21Sb3V0ZTtcclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSByZXN1bHQuZGF0YT8ucGFnZW5hbWUgPyByZXN1bHQuZGF0YT8ucGFnZW5hbWUgOiAnJztcclxuICAgICAgdGhpcy5kYXRhU3RvcmUuc2V0RGF0YSgndGl0bGUnLCB0aGlzLmZyb21UaXRsZSk7XHJcbiAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tUZW1wbGF0ZShyZXN1bHQpO1xyXG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJuYW1lID0gdGhpcy51c2VyPy5maXJzdE5hbWUgKyAnJyArIHRoaXMudXNlcj8ubGFzdE5hbWU7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnJpYmJvbkRhdGEgPSBudWxsO1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5zb3VyY2VpZCA9IHRoaXMuc291cmNlaWQgPyB0aGlzLnNvdXJjZWlkIDogbnVsbDsgXHJcbiAgICAgIGlmICh0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VLZXknKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlS2V5JykpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YVt0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKCdzb3VyY2VLZXknKSk/LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlS2V5JyldID0gdGhpcy5yb3V0ZS5wYXRoRnJvbVJvb3Q/LmZpbmQoeCA9PiB4LnNuYXBzaG90LnBhcmFtTWFwLmhhcygnc291cmNlS2V5JykpPy5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZVZhbHVlJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYWxsR2V0QVBJKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGFTdWIgPSB0aGlzLmRhdGFTdG9yZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXNbJ3VwbG9hZEZyb21HcmlkJ10pIHtcclxuICAgICAgICB0aGlzLnNob3dPY3JGb3JtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0blZlcmlmeSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQYXJhbXMoZWxlbWVudDphbnkpe1xyXG4gICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZWxlbWVudCkgOiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uZGl0aW9uQ2hlY2tUZW1wbGF0ZShyZXN1bHQpIHtcclxuICAgIGxldCByb3V0aW5nUGFnZSA9IFtdO1xyXG4gICAgaWYgKHJlc3VsdC5kYXRhLnRhYmNvbmZpZykge1xyXG4gICAgICBjb25zdCByb3V0aW5nVGFiID0gdGhpcy5jaGVja1BhcmFtcyhyZXN1bHQuZGF0YS50YWJjb25maWcpO1xyXG4gICAgICByb3V0aW5nUGFnZSA9IHJvdXRpbmdUYWIuZmlsdGVyKHggPT4geC50eXBlID09PSAnUk9VVElORycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbikge1xyXG4gICAgICB0aGlzLmlzZm9ybUlPID0gdHJ1ZTtcclxuICAgICAgdGhpcy5qc29uRm9ybSA9IHRoaXMuY2hlY2tQYXJhbXMocmVzdWx0LmRhdGEudGVtcGxhdGVqc29uKVxyXG4gICAgICBjb25zdCBmb3JtVGVtcGxhdGVKc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmpzb25Gb3JtKSk7XHJcbiAgICAgIHRoaXMucGFnZXR5cGUgPSByZXN1bHQuZGF0YT8ucGFnZURldGFpbHM/LnBhZ2V0eXBlO1xyXG4gICAgICBpZiAocmVzdWx0LmRhdGE/LnBhZ2V0eXBlID09PSAnU1VSVkVZJykge1xyXG4gICAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnVzZXI/LmlkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHJlcGFyZUZvcm1LZXlMYWJlbChmb3JtVGVtcGxhdGVKc29uKTtcclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSB0aGlzLmpzb25Gb3JtICYmIHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA/IHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA6IHJlc3VsdC5kYXRhLnBhZ2VuYW1lO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnZpZGVvU3BlZWNoQ29udGVudFNlcnZpY2UubW9kaWZ5VmlkZW9Db250ZW50KCk7XHJcbiAgICAgICAgdGhpcy52aWRlb1NwZWVjaENvbnRlbnRTZXJ2aWNlLnNwZWVjaFRvVGV4dENvbnRlbnQoKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGluZ1BhZ2UubGVuZ3RoID4gMCAmJiByb3V0aW5nUGFnZVswXS5wYXRobmFtZSA9PT0gJ0NyZWF0ZVNpdGV2aXNpdENvbXBvbmVudCcpIHtcclxuICAgICAgdGhpcy5pc2Zvcm1JTyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFwcG9pbnRtZW50TGlzdCA9IFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXBhcmVGb3JtS2V5TGFiZWwoanNvbikge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbikpIHtcclxuICAgICAganNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMucHJlcGFyZUZvcm1LZXlMYWJlbChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBqc29uLmhhc093blByb3BlcnR5KCdpbnB1dCcpICYmXHJcbiAgICAgIGpzb24uaW5wdXQgJiZcclxuICAgICAganNvbi50eXBlICE9PSAnYnV0dG9uJyAmJlxyXG4gICAgICBqc29uLnR5cGUgIT09ICdzaWduYXR1cmUnICYmXHJcbiAgICAgICFqc29uLmhhc093blByb3BlcnR5KCdjdXN0b21Db25kaXRpb25hbCcpICYmXHJcbiAgICAgICFqc29uLmhhc093blByb3BlcnR5KCdjb25kaXRpb25hbCcpXHJcbiAgICApIHtcclxuICAgICAgbGV0IHZhbHVlcyA9IFtdO1xyXG4gICAgICBpZiAoanNvbi50eXBlID09PSAncmFkaW8nIHx8IGpzb24udHlwZSA9PT0gJ3NlbGVjdGJveGVzJykge1xyXG4gICAgICAgIHZhbHVlcyA9IGpzb24udmFsdWVzIHx8IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZvcm1PYmplY3QgPSB7XHJcbiAgICAgICAga2V5OiBqc29uWydrZXknXSxcclxuICAgICAgICBsYWJlbDoganNvblsnbGFiZWwnXSxcclxuICAgICAgICB0eXBlOiBqc29uWyd0eXBlJ10sXHJcbiAgICAgICAgdmFsdWVzOiBbLi4udmFsdWVzXVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLkZvcm1JbnB1dHMucHVzaChmb3JtT2JqZWN0KTtcclxuXHJcbiAgICAgIGlmIChqc29uLnR5cGUgPT09ICdzZWxlY3QnICYmIGpzb24ubXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLm11bHRpU2VsZWN0RHJvcERvd25zLnB1c2goanNvbi5rZXkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBPYmplY3Qua2V5cyhqc29uKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbltrZXldKSkge1xyXG4gICAgICAgICAgdGhpcy5wcmVwYXJlRm9ybUtleUxhYmVsKGpzb25ba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFjdGlvblNlbGVjdChyZXN1bHQsIGFjdGlvbikge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdWx0TnVsbENoZWNrKHJlc3VsdCk7XHJcbiAgICB0aGlzLnByb2Nlc3NNdWx0aVNlbGVjdERyb3Bkb3ducyhkYXRhKTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZGF0YSB9O1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICBpZiAodGhpcy5mcm9tVGl0bGUuaW5jbHVkZXMoU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcpKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLm5hcnJhdGl2ZSA9IHRoaXMubmFycmF0aXZlO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbiA9PSAnZWRpdCcgfHwgYWN0aW9uID09ICdFZGl0Jykge1xyXG4gICAgICB0aGlzLmlzVGl0bGUgPSAnRWRpdCAnICsgZGF0YT8ucGFnZURldGFpbHM/LmFjdGl2ZVZlcnNpb24/LnBhZ2VuYW1lIHx8ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgaWYgKHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnR5cGUgPSB0aGlzLmV4dGVybmFsUGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIHRoaXMuaWQgPSByZXN1bHQuaWQ7XHJcbiAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TXVsdGlwbGVGcm9tKHJlc3VsdCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdFswXS5kYXRhID8gcmVzdWx0WzBdLmRhdGEgOiByZXN1bHRbMF07XHJcbiAgICB0aGlzLnByb2Nlc3NNdWx0aVNlbGVjdERyb3Bkb3ducyhkYXRhKTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZGF0YSB9O1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICBpZiAodGhpcy5mcm9tVGl0bGUuaW5jbHVkZXMoU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcpKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLm5hcnJhdGl2ZSA9IHRoaXMubmFycmF0aXZlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnR5cGUgPSB0aGlzLmV4dGVybmFsUGFyYW1ldGVycztcclxuICAgIH1cclxuICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzTXVsdGlTZWxlY3REcm9wZG93bnMoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm11bHRpU2VsZWN0RHJvcERvd25zLmZvckVhY2goZHJvcGRvd25LZXkgPT4ge1xyXG4gICAgICBjb25zdCBkcm9wZG93blZhbHVlID0gZGF0YVtkcm9wZG93bktleV07XHJcbiAgICAgIGlmICh0eXBlb2YgZHJvcGRvd25WYWx1ZSA9PT0gJ3N0cmluZycgJiYgZHJvcGRvd25WYWx1ZS5pbmNsdWRlcygnLCcpKSB7XHJcbiAgICAgICAgZGF0YVtkcm9wZG93bktleV0gPSBkcm9wZG93blZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEluY2lkZW50RGF0YSgpIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldExpc3RCeVNvdXJjZUlkKHRoaXMuc291cmNlaWQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uYXJyYXRpdmUgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLm5hcnJhdGl2ZSwgJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsbEdldEFQSSgpIHtcclxuICAgIGlmICh0aGlzLmZyb21UaXRsZS5pbmNsdWRlcyhTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORykpIHtcclxuICAgICAgdGhpcy5sb2FkSW5jaWRlbnREYXRhKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYkRhdGEgPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdzZWxlY3RlZFRhYkRhdGEnKTtcclxuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSA9PSAnZm9ybScpIHtcclxuICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWRpdElkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmVkaXRJZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICAgIGlmICghdGhpcy5pZCkge1xyXG5cclxuICAgICAgICBjb25zdCBmYWxsYmFja0lkID0gdGhpcy5mYWxsYmFja0lkRnJvbVJvdXRlPyB0aGlzLmZhbGxiYWNrSWRGcm9tUm91dGUgOiAnaWQnO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnBhdGhGcm9tUm9vdD8uZmluZCh4ID0+IHguc25hcHNob3QucGFyYW1NYXAuaGFzKGZhbGxiYWNrSWQpKT8uc25hcHNob3QucGFyYW1NYXAuZ2V0KGZhbGxiYWNrSWQpOyAgICAgICAgXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgneW91dGhJRCcsIHRoaXMuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbmRpdGlvbkNoZWNrQ2FsbEdldEFQSSgpO1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmZvcm1yZXNwb25zZShhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25kaXRpb25DaGVja0NhbGxHZXRBUEkoKSB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZWRpdElkO1xyXG4gICAgfVxyXG4gICAgLy8gI2NoZWNrXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guaW5jbHVkZXMoJ2R5bmFtaWMtcm91dGluZycpIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluY2x1ZGVzKCdwYWdlcy9pbnRha2UnKSkge1xyXG4gICAgICBpZiAodGhpcy5mcm9tV29ya0Zsb3cpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5zb3VyY2VpZDtcclxuICAgICAgICB0aGlzLmZyb21Xb3JrRmxvdyA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkID8gdGhpcy5pZCA6IHRoaXMuc291cmNlaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsaWNrZWRTZXJ2aWNlQ2FzZSkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5zZXJ2aWNlSWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtcmVzcG9uc2UoYWN0aW9uKSB7XHJcbiAgICBpZiAoYWN0aW9uICE9PSAnYWRkJykge1xyXG4gICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRSZXNwb25zZUJ5UGFnZUlkKHRoaXMuaWQsIHRoaXMuZm9ybUlkKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdD8uZGF0YSAmJiByZXN1bHQ/LmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmdldE11bHRpcGxlRnJvbSh0aGlzLnBhZ2V0eXBlID09PSAnRkZQJyA/IHJlc3VsdD8uZGF0YS5yZXNwb25zZSA6IHJlc3VsdD8uZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQ/LmRhdGEpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybVJlc3BvbnNlID0gcmVzdWx0Py5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5nZXRBY3Rpb25TZWxlY3QodGhpcy5wYWdldHlwZSA9PT0gJ0ZGUCcgPyByZXN1bHQ/LmRhdGEucmVzcG9uc2UgOiByZXN1bHQ/LmRhdGEsIGFjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXN1bHROdWxsQ2hlY2soZGF0YTogYW55KTogYW55IHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuZGF0YSkge1xyXG4gICAgICByZXR1cm4gZGF0YS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuQm90dG9tU2hlZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnNvdXJjZUlkLm5leHQodGhpcy5zb3VyY2VpZCk7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmlkLm5leHQodGhpcy5pZCk7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnBhZ2VJZC5uZXh0KHRoaXMuZm9ybUlkKTtcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdtYXN0ZXItdmlldycpICB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnY29tcG9zaXRlLXBhZ2UnKSkge1xyXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2R5bmFtaWMtcm91dGluZycpICB8fCB0aGlzLmlkKVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vLi4vJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgICAgIH1cclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNoYW5nZVBhZ2UodHJ1ZSk7XHJcbiAgICBpZih0aGlzLnBhcmVudEdyaWRQYWdlSWQpe1xyXG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50c0J1dHRvbihldmVudCkge1xyXG4gIHRoaXMuY3VzdG9tRXZlbnRTZXJ2aWNlLmN1c3RvbUV2ZW50c0J1dHRvbihldmVudCk7XHJcbiAgfVxyXG4gIHVwbG9hZEZpbGUoZmlsZTogRmlsZSB8IEZpbGVFcnJvcik6IHZvaWQge1xyXG4gICAgdGhpcy5vY3IuZ2V0UmVzcG9uc2UoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzID09ICdTVUNDRUVERUQnKSB7XHJcbiAgICAgICAgdGhpcy5vY3JSZXNwb25zZVNlcnZpY2UucHJvY2Vzc09DUlJlc3BvbnNlKHJlc3VsdCwgdGhpcy5zY2FubmVyQ29uZmlnLCB0aGlzLnN1Ym1pdHRlZERhdGEsIHRoaXMuRm9ybUlucHV0cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vY3JSZXNwb25zZVNlcnZpY2UucHJvY2Vzc1Jlc3BvbnNlRGF0YShmaWxlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YVN1YikgdGhpcy5kYXRhU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBpZih0aGlzLmV2ZW50U3Vic2NyaXB0aW9uKSB0aGlzLmV2ZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uU2VydmljZS5kZXN0cm95U3BlZWNoT2JqZWN0KCk7XHJcbiAgICB0aGlzLm9jci5jbGVhclJlc3BvbnNlKCk7XHJcbiAgICBpZiAodGhpcy5wYWdlRGF0YVN1YnNjcmlwdGlvbikgdGhpcy5wYWdlRGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgY3VzdG9tRXZlbnQoZXZlbnQpIHtcclxuICAgIHRoaXMuX2Zvcm1JTy5jdXN0b21FdmVudChldmVudCwgdGhpcy5mb3JtSU8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW1pdHRlZERhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5zaG93T2NyRm9ybSA9IGZhbHNlO1xyXG4gICAgdGhpcy5idG5WZXJpZnkgPSB0cnVlO1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyAuLi5kYXRhLCAuLi50aGlzLnN1Ym1pdHRlZERhdGEgfTtcclxuICB9XHJcbn0iLCI8YXBwLWFsZXJ0PjwvYXBwLWFsZXJ0PlxyXG48ZGl2IFtuZ0NsYXNzXT1cInNob3dUaXRsZSA/ICdjYXJkJyA6ICd5b3V0aHNlYXJjaC1mb3JtaW8nXCI+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBteS0zXCIgKm5nSWY9XCJpc1RpdGxlXCI+XHJcbiAgICAgIDwhLS0gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWNhbmNlbFwiIChjbGljayk9XCJyZWRpcmVjdCgpXCIgKm5nSWY9XCJzaG93YmFja2J0blwiPlxyXG4gICAgICAgIEJhY2sge3sgcGFyZW50R3JpZFBhZ2UgJiYgJ3RvICcgKyBwYXJlbnRHcmlkUGFnZSB9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGg2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCBtYi0yIG10LTMgZnJvbVRpdGxlXCIgKm5nSWY9XCJzaG93VGl0bGVcIj57eyBpc1RpdGxlIH19PC9oNj4gLS0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFjay10by1tYWluXCI+XHJcbiAgICAgICAgPGRpdiAoY2xpY2spPVwicmVkaXJlY3QoKVwiICpuZ0lmPVwic2hvd2JhY2tidG5cIj57eyBwYXJlbnRHcmlkUGFnZX19PC9kaXY+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VGl0bGVcIj4ge3sgaXNUaXRsZSB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCIhc2hvd09jckZvcm1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZHluYW1pYy1wYWdlIG10LTBcIiBbaGlkZGVuXT1cIiFpc2Zvcm1JT1wiPlxyXG4gICAgICA8Zm9ybWlvICNmb3JtSU8gW2Zvcm1dPVwianNvbkZvcm1cIiBbcmVhZE9ubHldPVwiaXNSZWFkT25seVwiIFtzdWJtaXNzaW9uXT1cInN1Ym1pdHRlZERhdGFcIiAoc3VibWl0KT1cIm9uU3VibWl0KCRldmVudClcIlxyXG4gICAgICAgIChjaGFuZ2UpPVwiY3VzdG9tRXZlbnRzKCRldmVudClcIiAoY2xpY2spPVwiY3VzdG9tQ2xpY2tFdmVudHMoc3VibWl0dGVkRGF0YSwgJGV2ZW50KVwiXHJcbiAgICAgICAgKGN1c3RvbUV2ZW50KT1cImN1c3RvbUV2ZW50c0J1dHRvbigkZXZlbnQpXCIgW3JlZnJlc2hdPVwidHJpZ2dlclJlZnJlc2hcIiBbc3VibWl0RG9uZV09XCJzdWJtaXNzaW9uRG9uZVwiIFtzdWNjZXNzXT1cInN1Ym1pdFN1Y2Nlc3NcIlxyXG4gICAgICAgIFtlcnJvcl09XCJzdWJtaXRGYWlsZWRcIiAoY3VzdG9tRXZlbnQpPVwiY3VzdG9tRXZlbnQoJGV2ZW50KVwiPjwvZm9ybWlvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJzaG93T2NyRm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGR5bmFtaWMtcGFnZSBtdC0wXCI+XHJcbiAgICAgICAgPGFwcC1vY3ItdmFsaWRhdGlvbiAob2NyUmVzcG9uc2UpPVwiZ2V0RW1pdHRlZERhdGEoJGV2ZW50KVwiIFtjdXJyZW50dGVtcGxhdGVSZXN1bHRdPVwidGVtcGxhdGVSZXN1bHRcIlxyXG4gICAgICAgICAgW2Zvcm1SZXNwb25zZURhdGFdPVwiZm9ybVJlc3BvbnNlXCIgW3N1Ym1pdGlvbkRhdGFdPVwic3VibWl0dGVkRGF0YVwiPjwvYXBwLW9jci12YWxpZGF0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGJ1dHRvbiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiBpZD1cImV4dGVybmFsX3NjYW5uZXJcIiAjZXh0ZXJuYWxfc2Nhbm5lciBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImJ0bi1pY29uLWJnXCJcclxuICAobmd4Zi1zZWxlY3QpPVwidXBsb2FkRmlsZSgkZXZlbnQpXCI+XHJcbiAgU2NhblxyXG48L2J1dHRvbj5cclxuXHJcblxyXG48bmctdGVtcGxhdGUgI3ZhbGlkYXRpb25Qb3B1cD5cclxuICA8ZGl2IGNsYXNzPVwicC0zIHZhbGlkYXRpb24tcG9wdXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeCBtYi00XCI+PGRpdiBbaW5uZXJIVE1MXT1cImNvbmZpcm1hdGlvbm1lc3NhZ2VcIj48L2Rpdj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCBwci0zIG1vZGFsLWJ1dHRvbnNcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwdWxsLXJpZ2h0IG1iLTIgYnRuXCIgW25nQ2xhc3NdPVwiYnV0dG9uMVN0eWxlXCIgKm5nSWY9XCJzaG93QnV0dG9uMVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tDb25maXJtYXRpb24oYnV0dG9uMUFjdGlvbiwgYnV0dG9uMUtleSlcIj5cclxuICAgICAge3tidXR0b24xVGV4dH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwdWxsLXJpZ2h0IG1iLTIgbXItMiBidG5cIiBbbmdDbGFzc109XCJidXR0b24yU3R5bGVcIiAqbmdJZj1cInNob3dCdXR0b24yXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAoY2xpY2spPVwib25DbGlja0NvbmZpcm1hdGlvbihidXR0b24yQWN0aW9uLCBidXR0b24yS2V5KVwiPnt7YnV0dG9uMlRleHR9fTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=