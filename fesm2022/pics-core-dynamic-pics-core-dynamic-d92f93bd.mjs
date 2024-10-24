import * as i0 from '@angular/core';
import { Injectable, Component, Input, Inject, Injector, runInInjectionContext, inject, EventEmitter, Optional, ViewChild, Output, HostListener, NgModule, Directive, Pipe, ViewChildren, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ApplicationRef } from '@angular/core';
import { BehaviorSubject, of, forkJoin, Subject, Observable, combineLatest } from 'rxjs';
import * as i1 from '@angular/router';
import { NavigationStart, RoutesRecognized, RouterModule, NavigationEnd } from '@angular/router';
import * as i4 from '@angular/common';
import { Location, CommonModule } from '@angular/common';
import * as i6 from '@formio/angular';
import { FormioModule, CustomTagsService as CustomTagsService$1 } from '@formio/angular';
import { tap, mergeMap, map, filter, pairwise, takeUntil, switchMap, catchError } from 'rxjs/operators';
import * as i1$2 from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as i2 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import * as i19 from 'devextreme-angular';
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import * as i22 from 'ng-dynamic-component';
import { DynamicModule } from 'ng-dynamic-component';
import * as i3 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import * as i3$1 from '@ngrx/store';
import { createAction, props, createReducer, on, INIT, UPDATE, createFeatureSelector, createSelector, select } from '@ngrx/store';
import CustomStore from 'devextreme/data/custom_store';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import * as jsPDF from 'jspdf';
import moment from 'moment/moment';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import es6printJS from 'print-js';
import 'rxjs/add/operator/map';
import * as i1$1 from 'ngxf-uploader';
import { NgxfUploaderService, NgxfUploaderModule } from 'ngxf-uploader';
import { throwError } from 'rxjs/internal/observable/throwError';
import { routerReducer } from '@ngrx/router-store';
import * as _ from 'lodash';
import { isArray, isNil, clone } from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i8 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i13 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i14 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i8$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i16 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i17 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i16$1 from 'devextreme-angular/ui/nested';
import * as i21 from 'devextreme-angular/core';
import * as i23 from 'primeng/accordion';
import { AccordionModule } from 'primeng/accordion';
import * as i5 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as i25 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i26 from 'primeng/inputtextarea';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i12 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import * as i6$2 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i9 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i11 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import * as i1$4 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import * as i1$3 from '@angular/platform-browser';
import * as i4$1 from 'primeng/tabmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import * as i5$1 from 'primeng/table';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import * as i6$1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import * as i10 from 'primeng/card';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import * as i11$1 from 'primeng/confirmdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TreeSelectModule } from 'primeng/treeselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpeedDialModule } from 'primeng/speeddial';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import * as i12$1 from 'primeng/fileupload';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { KnobModule } from 'primeng/knob';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { createCustomElement } from '@angular/elements';
import { Components, Utils } from 'formiojs';
import * as i5$2 from 'angular-gridster2';
import { GridType, CompactType, DisplayGrid } from 'angular-gridster2';

class DynamicService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
    static EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
}
class UserConfig {
    static EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
}
let AttachmentConfig$1 = class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
};
class PolicyGroupConfig {
    static EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
}
class PermissionsURL {
    static EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
}
// export class AccessManagementConfig {
//   public static EndPoint = {
//     Organization: {
//       getOrganizationList: '/org/organization/all',
//       getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
//     }
//   };
// }
let AccessManagementConfig$1 = class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/platform/page-designer/page/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        Page: {
            getPage: '/page'
        },
        Asset: {
            getAsset: 'asset',
            getPageAsset: '/platform/page-designer/asset/getpagebyid',
            getUserAsset: '/platform/page-designer/asset/getUserAssets',
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets/',
            getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
        },
        User: {
            getUser: '/org/user/',
            getUserList: '/org/user/all',
            getUserorgList: '/org/user/organization/'
        },
        PolicyGroup: {
            getPolicyGroup: '/platform/page-designer/policyGroup/',
            getPolicyGroupList: '/platform/page-designer/policyGroup/organization/{organizationid}'
        },
        Role: {
            getRole: '/access-control/role/',
            getRoleList: '/access-control/role/organization/{orgid}'
        }
    };
};
let RBACINFO$1 = class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
};
let Environment$1 = class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
};

class Store {
    state$;
    _state$;
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

let PermissionStore$1 = class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState({ ...this.state, ...data });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, providedIn: 'root' });
};
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore$1, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PlatformDataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test codesss
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PlatformDataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PlatformDataStoreService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PlatformDataStoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DynamicComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO$1();
    PERMISSION;
    COMMONSERVICE;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.COMMONSERVICE.subscribe(val => {
            if (val) {
                this.RBACORG = val.RBACORG;
                this.PERMISSION = val.PERMISSION;
                this._storeservice.setData('RBACORG', this.RBACORG);
                this.permissionStore.setStore(this.PERMISSION);
                this._storeservice.setData('PERMISSION', val.PERMISSION);
                this._storeservice.setData('HTTPSERVICE', val.HTTPSERVICE);
                this._storeservice.setData('ALERTSERVICE', val.ALERTSERVICE);
                this._storeservice.setData('APPSERVICE', val.APPSERVICE);
                this._storeservice.setData('SHAREDSERVICE', val.SHAREDSERVICE);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicComponent, deps: [{ token: PermissionStore$1 }, { token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicComponent, selector: "dynamicdata", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE" }, ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dynamicdata', template: `
    <router-outlet></router-outlet>
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore$1 }, { type: PlatformDataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }] } });

class AuthURL {
    static EndPoints = {
        auth: {
            user: {
                conformMail: '/org/auth/forgot-password',
                changePassword: '/org/auth/forgot-password-verification',
                login: '/org/auth/login',
                refreshToken: '/org/auth/refresh-token',
                logout: '/org/auth/logout',
                userInfo: '/org/user/page/list',
                userRole: '/org/user/{id}',
                routeToDynamicPage: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
                authMe: '/org/auth/me',
                resetPassword: '/org/user/reset-password',
                orgList: '/org/management-group/organization/tree',
                notification: '/worker/notification',
                workerAvailability: '/worker/updateAvailablity',
                getWorkerAvailability: '/worker/getByCurrentUser'
            },
            permission: {
                permissionRoleById: '/access-control/permission/role/{id}',
                pagePermission: '/access-control/permission/page',
                pageLookupPermission: '/access-control/permission/page/lookup'
            },
            microstrategy: {
                login: '/platform/microstrategy/login',
                getLibrary: '/platform/microstrategy/library'
            }
        }
    };
}

class AuthState {
    user;
}

class AuthStore extends Store {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        super(new AuthState());
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    addAuthInfo(user) {
        this.setState({ ...this.state, user });
    }
    getAuthInfo() {
        console.log(this.state);
        if (this.state.user) {
            return of(this.state.user);
        }
        else {
            return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
                return user;
            }));
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, deps: [{ token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }]; } });

let AppConstants$1 = class AppConstants {
    static errorMessage = 'Something went wrong!';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
};

class AlertService {
    router;
    subject = new Subject();
    keepAfterRouteChange = false;
    constructor(router) {
        this.router = router;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType$1.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType$1.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType$1.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType$1.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
var AlertType$1;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType$1 || (AlertType$1 = {}));
let Alert$1 = class Alert {
    type;
    message;
};
let UserGroupDto$1 = class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
};
let UserRolePageDto$1 = class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
};
let UserRoleDto$1 = class UserRoleDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
};
let UserDto$1 = class UserDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
};
class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}

class CommonUrlConfig {
    static EndPoint = {
        dropDown: {
            page: '/platform/master/lookup/lookupbycategoryname/PAGE',
            Database: '/referencetype/Database',
            DGPJsonMode: '/referencetype/DGPJsonMode'
        },
        notification: {
            post: '/platform/notification/{id}'
        }
    };
}
class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
}

class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test codesss
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AttachmentsService {
    _storeservice;
    http;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.http = res['HTTPSERVICE'];
            }
        });
    }
    getAttachmentReferral(referralid) {
        return this.http.get(AttachmentConfig.EndPoint.Attachments.GetAttachmentReferral + '/' + referralid);
    }
    getCategoryLookup(name) {
        return this.http.get(AttachmentConfig.EndPoint.Attachments.GetCategoryLookup + '/' + name);
    }
    uploadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    downloadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.DownloadKey, objparams);
    }
    postAttachment(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.PostAttachment, objparams);
    }
    putAttachment(objparams, attachmentId) {
        console.log(AttachmentConfig.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
        return this.http.patch(AttachmentConfig.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class DynamicTabPageConfig {
    static EndPoint = {
        Page: {
            getActivePage: '/platform/page-designer/pageversion/{id}',
            getPage: '/platform/page-designer/page',
            getPageById: '/platform/page-designer/page/{id}',
            getResponseByPageId: '/solution/formresponse/{responseId}/getByPageId/{pageId}',
            createFormResponse: '/solution/formresponse/create',
            patchFormResponse: '/solution/formresponse',
            updateFormResponse: '/pagedata/'
        },
        Narrative: {
            getIncidentListById: '/incident/listBySourceId/{id}'
        },
        Notification: {
            createSurveyConfig: '/surveyconfig/usersurvey/{id}/{status}/{pagedataid}'
        },
        Finance: {
            exportDocument: '/integrated/exportDocuments/',
            uploadDocument: 'document/upload',
            getUniqueId: '/uniqueIdLogic/'
        },
        Attachments: {
            createAttachment: '/solution/formresponse-attachment/create'
        },
        youthSummary: {
            getDetails: '/jjis/youth-summary',
            getRiskValue: '/jjis/youth-summary/getRiskValue',
            getAlertCount: '/jjis/youth-summary/getAlertCount'
        }
    };
}

class DynamicTabPageService {
    uploadService;
    _storeservice;
    httpService;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    constructor(uploadService, _storeservice) {
        this.uploadService = uploadService;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
        // This is intentional
    }
    getActivePage(tabPageId, permission, action) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId)}${permission
            ? '?applyPermissions=true' : ''}${permission && action === 'add'
            ? '&action=add' : ''}${permission && action === 'edit'
            ? '&action=edit' : ''}`);
    }
    getDynamicPage(pageId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getPage}/${pageId}`);
    }
    getPageById(pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
    }
    getListBySourceId(sourceId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
    }
    getResponseByPageId(responseId, pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
            .replace('{responseId}', responseId)
            .replace('{pageId}', pageId));
    }
    createFormResponse(id, requestData) {
        return this.httpService.post(id
            ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
            : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
    }
    createUserSurvey(history, Id) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', history?.state?.usersurveyid)
            .replace('{status}', 'Completed')
            .replace('{pagedataid}', Id), {});
    }
    updateFormResponse(id, requestData, EditGridPageID) {
        return this.httpService.patch(`${DynamicTabPageConfig.EndPoint.Page.patchFormResponse}/${id}?EditGridPageID=${EditGridPageID}`, requestData);
    }
    exportReport(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
    }
    uploadFile(file) {
        return this.uploadService.upload({
            url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
            headers: new HttpHeaders()
                .set('ctype', 'file')
                .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                .set('role', 'role=CP_PUBLIC'),
            files: file,
            process: true
        });
    }
    getUniqueId(api) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    createFormResponseAttachment(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
    }
    getYouthSummaryDetails(data) {
        return this.httpService.post(`${DynamicTabPageConfig.EndPoint.youthSummary.getDetails}`, data);
    }
    getAlertCount(youthId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.youthSummary.getAlertCount}/${youthId}`);
    }
    getRiskValue(youthId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.youthSummary.getRiskValue}/${youthId}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1$1.NgxfUploaderService }, { token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NgxfUploaderService }, { type: PlatformDataStoreService }]; } });

class PageHeaderURL {
    static EndPoints = {
        page: {
            getAuthorizedPages: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true'
        }
    };
}

class PageHeaderService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getAuthorizedPages(orgid) {
        return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
class CredentialsService {
    token = null;
    constructor() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
        return this.token;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials) {
        this.token = credentials || null;
        if (credentials) {
            sessionStorage.setItem(credentialsKey, credentials);
        }
        else {
            sessionStorage.clear();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class StorageService {
    Storage;
    constructor(Storage) {
        this.Storage = Storage;
    }
    getItem(key) {
        return this.Storage.getItem(key);
    }
    setItem(key, item) {
        return this.Storage.setItem(key, item);
    }
    getObj(key, safe = true) {
        try {
            const item = this.getItem(key);
            return JSON.parse(item);
        }
        catch (e) {
            if (!safe) {
                throw e;
            }
        }
    }
    setObj(key, item) {
        return this.setItem(key, JSON.stringify(item));
    }
    removeItem(key) {
        this.Storage.removeItem(key);
    }
    clear() {
        this.Storage.clear();
    }
}

class LocalService extends StorageService {
    constructor() {
        super(window.sessionStorage);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AuthService {
    store;
    _router;
    credentialsService;
    localstore;
    _storeservice;
    sharedInfo;
    alertService;
    dynamicTabPageService;
    pageHeaderService;
    httpService;
    constructor(injector, store, _router, credentialsService, localstore, _storeservice) {
        this.store = store;
        this._router = _router;
        this.credentialsService = credentialsService;
        this.localstore = localstore;
        this._storeservice = _storeservice;
        this.alertService = injector.get(AlertService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.pageHeaderService = injector.get(PageHeaderService);
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    orgInfo = new BehaviorSubject('');
    currentOrgInfo = this.orgInfo.asObservable();
    currentMenu = new BehaviorSubject('');
    currentMenuInfo = this.currentMenu.asObservable();
    feedOrgInfo(data) {
        this.orgInfo.next(data);
    }
    getCurrentMenu(data) {
        this.currentMenu.next(data);
    }
    getUserOrgList() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.orgList);
    }
    getUnNotified() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.notification);
    }
    updateUnNotified(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.notification, data);
    }
    updateWorkerAvailability(data) {
        return this.httpService.patch(AuthURL.EndPoints.auth.user.workerAvailability, data);
    }
    getWorkerAvailability() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.getWorkerAvailability);
    }
    getMstrToken() {
        return this.httpService.get(AuthURL.EndPoints.auth.microstrategy.login).pipe(res => {
            return res;
        });
    }
    login(email, password, otp) {
        const body = {
            email: email,
            password: password,
            secret: otp ? otp : ''
        };
        return this.httpService.post(AuthURL.EndPoints.auth.user.login, body).pipe(mergeMap((res) => {
            if (res['data'] === 'MFA_CODE_SEND') {
                return of(res['data']);
            }
            this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
            sessionStorage.setItem('email', res['data'].idToken.payload['email']);
            sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
            sessionStorage.setItem('username', res['data'].idToken.payload['name']);
            return this.getUserInfo();
        }));
    }
    refreshToken(platform = 'aws') {
        const email = sessionStorage.getItem('email');
        const refreshToken = sessionStorage.getItem('refreshToken');
        const body = {
            email,
            refreshToken
        };
        if (platform === 'aws') {
            return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
                this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                console.log('new token generated...', res['data'].idToken.jwtToken);
                return [res['data'].idToken.jwtToken];
            }));
        }
        else {
            return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
                this.credentialsService.setCredentials(res['data'].token);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken);
                return [res['data'].token];
            }));
        }
    }
    resetLoggedIn() {
        this.httpService
            .post(AuthURL.EndPoints.auth.user.logout, {
            email: sessionStorage.getItem('email')
        })
            .subscribe(() => {
            console.log('Logged in flag reset successful.');
        });
    }
    logout() {
        this._router.navigate(['/login']);
        sessionStorage.clear();
        localStorage.clear();
    }
    getUserInfo() {
        return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
            this.store.addAuthInfo(user['data']);
            return user;
        }));
    }
    getUserRole(id) {
        return this.httpService.get(AuthURL.EndPoints.auth.user.userRole.replace('{id}', id)).pipe(res => {
            return res;
        });
    }
    routeToDynamicPage(orgid) {
        return this.httpService
            .get(AuthURL.EndPoints.auth.user.routeToDynamicPage.replace('{orgid}', orgid))
            .pipe((res) => {
            return res;
        });
    }
    getAuthMe() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.authMe);
    }
    ResetPassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
    }
    getRoleKey() {
        const user = this.localstore.getObj('user');
        if (user && user.role) {
            return user.role.rolekey;
        }
    }
    isAdmin() {
        return 'ADM' === this.getRoleKey();
    }
    getOrgID() {
        const user = this.localstore.getObj('user');
        if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
            return user.userWorkInfo.organization.id;
        }
        else {
            return '';
        }
    }
    conformMail(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.conformMail, data);
    }
    changePassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.changePassword, data);
    }
    setSharedMessage(data) {
        this.sharedInfo = data;
    }
    getSharedMessage() {
        return this.sharedInfo;
    }
    async checkDynamicPagePermission(pageId) {
        const dynamicPages = await this.getAuthorizedPages();
        if (pageId) {
            this.dynamicTabPageService.getPageById(pageId).subscribe(res => {
                if (dynamicPages.some(page => page.id === res['data'][0].activeVersion.id)) {
                    this._router.navigate([`pages/dynamic-search/search/${res['data'][0].activeVersion.id}`]);
                }
                else {
                    this.alertService.error(`You don't have permissions for ${res['data'][0].activeVersion.pagename} . Please Contact Administrator`);
                }
            });
        }
        else {
            this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
        }
    }
    getCurrentOrg() {
        return this.getUserOrgList()
            .toPromise()
            .then(response => {
            return response['data'][0].id;
        });
    }
    async getAuthorizedPages() {
        const orgId = await this.getCurrentOrg();
        return this.pageHeaderService
            .getAuthorizedPages(orgId)
            .toPromise()
            .then(response => {
            const dynamicPage = response['data'].filter(page => {
                return (page.activeVersion &&
                    (page.activeVersion.gridconfig || page.activeVersion.templatejson || this.getCustomPage(page)));
            });
            return dynamicPage.map(page => ({
                id: page.activeVersion.id,
                name: page.activeVersion.pagename,
                activeVersion: page.activeVersion
            }));
        }, _error => this.alertService.error(AppConstants$1.errorMessage));
    }
    getCustomPage(page) {
        if (page.activeVersion.tabconfig) {
            const routingTab = JSON.parse(page.activeVersion.tabconfig).filter(x => x.type === 'ROUTING');
            return routingTab.length && page;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: AuthStore }, { token: i1.Router }, { token: CredentialsService }, { token: LocalService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: AuthStore }, { type: i1.Router }, { type: CredentialsService }, { type: LocalService }, { type: DataStoreService }]; } });

class DynamicSearchURL {
    static EndPoints = {
        userConfig: {
            getUserConfig: '/org/user/getUserPreference/PAGE/',
            saveUserConfig: '/org/user/saveUserPreference',
            getStaticGridConfig: '/org/user/getUserPreference/STATIC_GRID/{id}'
        },
        documents: {
            generateExcel: '/document/exportExcel',
            generatePDF: '/document/exportPdf'
        },
        notification: {
            sendMail: 'communication/sendmail'
        },
        report: {
            schedulertrigger: '/schedulerreport/trigger/'
        },
        pageConfig: {
            pageVersion: '/platform/page-designer/pageversion',
            page: '/platform/page-designer/page',
            postApiurl: '/api/pagedata/'
        },
        formResponse: {
            get: '/solution/formresponse/getByPageId/{pageid}',
            delete: '/solution/formresponse/{id}/pageid',
            update: '/solution/formresponse/{id}/pageid',
            deleteRevoke: '/solution/formresponse/{id}/revokeDeleteByAdmin',
            updateByIdAndPageIdWithReason: '/solution/formresponse/{id}/updateByIdAndPageIdWithReason',
            checkDeleteStatus: '/solution/formresponse/checkDeleteStatus/{pageid}/{id}?name={primaryobject}',
            checkEditStatus: '/solution/formresponse/checkEditStatus/{pageid}/{id}'
        },
        provider: {
            providerData: '/provider'
        },
        criteria: {
            save: '/solution/dynamicsearchcriteria/save',
            getByPageId: '/solution/dynamicsearchcriteria/list/{pageId}'
        },
        rowversion: {
            copy: '/solution/dynamicsearch/rowversion'
        },
        checkRules: {
            rules: '/solution/dynamicsearch/checkRules'
        }
    };
}

class DynamicsearchService {
    _storeservice;
    port;
    port_communication;
    port_document;
    port_searchinput;
    port_report;
    onChangePageEventData;
    onChangePageEventId;
    onChangePageUserData;
    onChangePersonId;
    onChangeConfigData;
    inputFieldId;
    personTabName;
    personHealthTabName;
    personFinanceTabName;
    clickedId;
    rowData;
    caseNumberAfterApproval;
    _httpService;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    data = new BehaviorSubject(false);
    sourceId = new BehaviorSubject('');
    sourceIdService = new BehaviorSubject('');
    id = new BehaviorSubject('');
    pageId = new BehaviorSubject('');
    moduleid = new BehaviorSubject('');
    purposeid = new BehaviorSubject('');
    workFlowDesign = new BehaviorSubject(null);
    workFlowStatus = new BehaviorSubject('');
    result = new BehaviorSubject('');
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this._httpService = res['HTTPSERVICE'];
            }
        });
        // constructor(private _httpService:HttpService){
        this.port = 'workflow';
        this.port_communication = 'communication';
        this.port_document = 'document';
        this.port_searchinput = 'searchinput';
        this.port_report = 'report';
    }
    //This Method for to set httpfile from independent service calls from web component
    SetHttpService(httpService) {
        this._httpService = httpService;
    }
    set clickableData(data) {
        this.inputFieldId = data;
    }
    get clickableData() {
        return this.inputFieldId;
    }
    set personTabNameData(data) {
        this.personTabName = data;
    }
    get personTabNameData() {
        return this.personTabName;
    }
    set personHealthTabNameData(data) {
        this.personHealthTabName = data;
    }
    get personHealthTabNameData() {
        return this.personHealthTabName;
    }
    set personFinanceTabNameData(data) {
        this.personFinanceTabName = data;
    }
    get personFinanceTabNameData() {
        return this.personFinanceTabName;
    }
    set clickedIdData(data) {
        this.clickedId = data;
    }
    get clickedIdData() {
        return this.clickedId;
    }
    set caseNumberAfterApprovalData(data) {
        this.caseNumberAfterApproval = data;
    }
    get caseNumberAfterApprovalData() {
        return this.caseNumberAfterApproval;
    }
    set clickedRowData(data) {
        this.rowData = data;
    }
    get clickedRowData() {
        return this.rowData;
    }
    getGridUserPreference(id) {
        return this._httpService.get(DynamicSearchURL.EndPoints.userConfig.getUserConfig + id);
    }
    getStaticGridConfig(id) {
        return this._httpService.get(DynamicSearchURL.EndPoints.userConfig.getStaticGridConfig.replace('{id}', id));
    }
    saveGridUserPreference(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.userConfig.saveUserConfig, data);
    }
    sendMail(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.notification.sendMail, data);
    }
    generateDocument(data, typeCheck) {
        const url = typeCheck
            ? DynamicSearchURL.EndPoints.documents.generateExcel
            : DynamicSearchURL.EndPoints.documents.generatePDF;
        return this._httpService.post(url, data);
    }
    exportData(data, link) {
        return this._httpService.post(link, data);
    }
    saveSearchCriteria(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.pageConfig.postApiurl, data);
    }
    startScheduling(data, url) {
        return this._httpService.post(url, data);
    }
    startSchedulingNoUrl(data, id) {
        return this._httpService.post(DynamicSearchURL.EndPoints.report.schedulertrigger + id, data);
    }
    getTemplate(formId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.pageConfig.pageVersion + '/' + formId + '?applyPermissions=true');
    }
    // Remove Permission For Page-Designer View
    getTemplateView(formId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.pageConfig.pageVersion + '/' + formId + '?applyPermissions=false');
    }
    getPageTabs(pageId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.pageConfig.page + '/' + pageId);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    getFormResponse(pageId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.formResponse.get.replace('{pageid}', pageId)).toPromise();
    }
    getProviderData(providerid) {
        return this._httpService.get(DynamicSearchURL.EndPoints.provider.providerData + '?userid=' + providerid);
    }
    saveCriteriaByPageId(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.criteria.save, data);
    }
    getCriteriaByPageId(pageId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.criteria.getByPageId.replace('{pageId}', pageId));
    }
    rowVersion(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.rowversion.copy, data);
    }
    checkDeleteStatus(pageid, id, primarytable) {
        return this._httpService.get(DynamicSearchURL.EndPoints.formResponse.checkDeleteStatus.replace('{id}', id).replace('{pageid}', pageid).replace('{primaryobject}', primarytable));
    }
    checkEditStatus(pageid, id) {
        return this._httpService.get(DynamicSearchURL.EndPoints.formResponse.checkEditStatus.replace('{id}', id).replace('{pageid}', pageid));
    }
    checkRulesInWorkflow(pageData) {
        return this._httpService.post(DynamicSearchURL.EndPoints.checkRules.rules, pageData);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, deps: [{ token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }]; } });

class PageBuilderURL {
    static EndPoints = {
        workflow: {
            pageByOrganization: '/platform/page-designer/page/organization/{id}',
            LockPageDesigner: '/platform/page-designer/page/{id}/duplicate',
            activatePage: '/platform/page-designer/page/{pageId}/activate',
            deactivatePage: '/platform/page-designer/page/{pageId}/deactivate'
        },
        page_config: {
            pageVersion: '/platform/page-designer/pageversion/',
            activateVersion: '/platform/page-designer/pageversion/{id}/activate',
            versionList: '/platform/page-designer/pageversion/page/{id}',
            updateVersion: '/platform/page-designer/pageversion/{id}/update',
            copyVersion: '/platform/page-designer/pageversion/{id}/create'
        }
    };
}

class PageBuilderService {
    _storeservice;
    port_workflow;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getVersionList(pageId) {
        return this.httpService.get(PageBuilderURL.EndPoints.page_config.versionList.replace('{id}', String(pageId)));
    }
    getAllPageDesigns(id) {
        return this.httpService.get(PageBuilderURL.EndPoints.workflow.pageByOrganization.replace('{id}', id));
    }
    duplicateDesignPage(data, id) {
        return this.httpService.post(PageBuilderURL.EndPoints.workflow.LockPageDesigner.replace('{id}', String(id)), data);
    }
    activatePage(pageId) {
        return this.httpService.patch(PageBuilderURL.EndPoints.workflow.activatePage
            .replace('{pageId}', pageId), {});
    }
    deactivatePage(pageId) {
        return this.httpService.patch(PageBuilderURL.EndPoints.workflow.deactivatePage
            .replace('{pageId}', pageId), {});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, deps: [{ token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }]; } });

const CONFIGURATOR_TITLE = 'Low Code Configurator';
class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static multiView = 'MV';
    static multiViewRoute = 'master-view';
    static regexSsn = '^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$';
    static regexSsnDigits = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;
    static regexForPhone = '/^[()s-]*(d{8,12}|d{3}[)s-]*d{3}[s-]*d{4}|d{10})[()s-]*$/';
    static formatDate = 'MM/DD/YYYY';
    static camalize = '/[^a-zA-Z0-9]+(.)/g';
    static checSchemaExistQuery = '/(?<=(as|AS)s)("*[a-zA-Zs#~_]*"*)(?=,|(from|FROM))/g';
    static URLVALIDATE = '/(ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/';
    static EventURLValidate;
    static RegexUrlConstant = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    static statusComments = '/<[^>]*>/g';
    static regexEmailType2 = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$';
    static errorMessage = 'Something went wrong!';
    static accessDeniedMessage = 'Access Denied';
    static sessionExpired = 'Your session is expired.';
    static providerError = 'Unable to Process the Request Contact support';
    static verificationSuccess = 'Verification code sent successfully';
    static emailVerificationSuccess = 'Link sent successfully. Please check your inbox for further instructions';
    static passwordNotMatch = 'Password does not match';
    static vaildEmail = 'Please enter a valid email';
    static requiredFields = 'Please fill all required fields!';
    static pages = [
        { page: 'admin', title: 'User Management' },
        { page: 'intake-worker', title: 'Dashboard' },
        { page: 'microstrategy', title: 'Analytics' },
        { page: 'form-builder', title: 'Low Code Configurator' },
        { page: 'tab-order', title: 'Low Code Configurator' },
        { page: 'workflow', title: 'Low Code Configurator' },
        { page: 'document-packetization', title: 'Document Packetization' },
        { page: 'email-template', title: 'Email Template' },
        { page: 'chat', title: 'Chat' },
        { page: 'help-desk', title: 'Help' },
        { page: 'ocr-validation', title: 'Referrals' },
        { page: 'event-scheduler', title: 'Event Scheduler' },
        { page: 'config-dashboard', title: 'Config Dashboard' },
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' },
        { page: 'profile', title: 'Profile' }
    ];
    static errorList = [
        'Include at least one number',
        'Include at least one special character',
        'Include at least one upper case letter',
        'Include at least one lower case letter',
        'Be at least 8 characters in length',
        'Should not exceed sixteen (16) characters',
        'Space characters are invalid'
    ];
    static referralSource = [
        { value: 'law enforcement', label: 'Law Enforcement' },
        { value: 'citizen complaint', label: 'Citizen Complaint' }
    ];
    static generateNumber() {
        const crypto = window.crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    }
    static iconList = [
        { label: 'Apps', value: 'apps' },
        { label: 'Admin Settings', value: 'admin_panel_settings' },
        { label: 'Description', value: 'description' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Settings', value: 'settings' },
        { label: 'Library', value: 'library_books' },
        { label: 'Long Receipt', value: 'receipt_long' },
        { label: 'List', value: 'list' },
        { label: 'Layers', value: 'layers' },
        { label: 'Summarize', value: 'summarize' },
        { label: 'Featured List', value: 'featured_play_list' },
        { label: 'Contract', value: 'contract' },
        { label: 'List Add', value: 'list_alt_add' },
        { label: 'Inactive Order', value: 'inactive_order' },
        { label: 'Receipt', value: 'receipt' },
        { label: 'Dataset', value: 'dataset' },
        { label: 'Density', value: 'density_medium' },
        { label: 'Data Thresholding', value: 'data_thresholding' },
        { label: 'View Comfy', value: 'view_comfy_alt' },
        { label: 'View Compact', value: 'view_compact_alt' },
        { label: 'Rebase', value: 'rebase' },
        { label: 'Data Check', value: 'data_check' },
        { label: 'Check', value: 'check' },
        { label: 'Right Panel Close', value: 'right_panel_close' },
        { label: 'Toolbar', value: 'toolbar' },
        { label: 'User List', value: 'patient_list' },
        { label: 'Tabs', value: 'tabs' },
        { label: 'Single Tab', value: 'tab' },
        { label: 'Shelf Position', value: 'shelf_position' },
        { label: 'Call', value: 'call' },
        { label: 'Bookmark', value: 'bookmark' },
        { label: 'Map', value: 'map' },
        { label: 'Book', value: 'book' },
        { label: 'Box', value: 'box' },
        { label: 'Lock', value: 'lock' },
        { label: 'Star', value: 'star' },
        { label: 'Menu', value: 'menu' },
        { label: 'School', value: 'school' },
        { label: 'Calendar', value: 'calendar_month' },
        { label: 'Circle', value: 'circle' },
        { label: 'Home', value: 'home' },
        { label: 'Bulleted List', value: 'format_list_bulleted' },
        { label: 'Database', value: 'database' },
        { label: 'View Timeline', value: 'view_timeline' },
        { label: 'Settings Account Box', value: 'settings_account_box' },
        { label: 'Iframe', value: 'iframe' },
        { label: 'Bottom Panel Close', value: 'bottom_panel_close' },
        { label: 'Bubbles', value: 'bubbles' },
        { label: 'Task', value: 'task' },
        { label: 'Quiz', value: 'quiz' },
        { label: 'Contact Mail', value: 'contact_mail' },
        { label: 'File Copy', value: 'file_copy' },
        { label: 'Post Add', value: 'post_add' },
        { label: 'Import Contacts', value: 'import_contacts' },
        { label: 'Pending Actions', value: 'pending_actions' },
        { label: 'History Edu', value: 'history_edu' },
        { label: 'Space Dashboard', value: 'space_dashboard' },
        { label: 'Dashboard', value: 'dashboard' },
        { label: 'Table Chart', value: 'table_chart' },
        { label: 'Edit Document', value: 'edit_document' },
    ];
    static defaultVariables = [
        { name: 'User_Name' },
        { name: 'Email_Id' },
        { name: 'Referral_Id' },
        { name: 'Attachment_Details' },
    ];
    static onInput(event, fieldtype, label, required) {
        const validationConfig = [
            {
                type: 'username',
                pattern: {
                    regex: /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ' -]*$/,
                    errormessage: 'Allowed input - Alphabetic, accented letters, apostrophe, and hyphens.',
                    errormessage2: 'First character should be Alphabetic or accented letters.'
                },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'description',
                length: { maxlength: '500', errormessage: 'Input limit - 500 characters.' }
            },
            {
                type: 'name',
                pattern: { regex: /^[a-zA-Z0-9-_ ]+$/, errormessage: 'Allowed input - Alpha numeric, hyphen, underscore and space.' },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'email',
                pattern: { regex: /^[a-zA-Z0-9_]+(?:[.+][a-zA-Z0-9_]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errormessage: 'Valid Email ID is Required' },
                length: { maxlength: '200', errormessage: 'Input limit - 200 characters.' }
            }
        ];
        const config = validationConfig.find(item => item.type === fieldtype);
        const value = event.target.value;
        if (value) {
            if (config) {
                if (config.pattern) {
                    const pattern = new RegExp(config.pattern.regex);
                    if (fieldtype == 'username') {
                        const firstLetterValid = /^[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(value.charAt(0));
                        if (!firstLetterValid) {
                            return config.pattern.errormessage2;
                        }
                    }
                    const patternValid = pattern.test(value);
                    if (!patternValid) {
                        return config.pattern.errormessage;
                    }
                }
                const maxLength = parseInt(config.length.maxlength, 10);
                if (value.length > maxLength) {
                    return `${label} ${config.length.errormessage}`;
                }
            }
        }
        else {
            if (required) {
                return `${label} is Required`;
            }
        }
        /* No error */
        return null;
    }
    static userTimeOut = 31;
    static userPing = 120;
}

class HttpService {
    http;
    _storeservice;
    RBACORG;
    overrideUrl = true;
    errorData;
    baseUrl = '';
    tokenKey;
    headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('role', 'role=CP_PUBLIC');
    showSpinner = new BehaviorSubject(false);
    outsideShowSpinner = new BehaviorSubject(false);
    url1;
    url;
    constructor(http, _storeservice) {
        this.http = http;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.url = this.RBACORG['apiHost'] ? this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                this.tokenKey = this.RBACORG['tokenKey'];
            }
        });
        this.url1 = '';
    }
    get(apiRoute) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    post(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    put(apiRoute, body) {
        return this.http.put(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    patch(apiRoute, body) {
        return this.http.patch(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    delete(apiRoute) {
        return this.http.delete(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getHttpHeaders() {
        return new HttpHeaders().set('key', 'value');
    }
    getHttpNewHeaders() {
        return this.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }
    getAttachmentHttpHeaders(contentType) {
        return new HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
    }
    putUpload(apiRoute, body, contentType) {
        return this.http.put(`${this.url1 + apiRoute}`, body, { headers: this.getAttachmentHttpHeaders(contentType) });
    }
    putupload2(apiRoute, body, contenttype) {
        return this.http
            .put(`${this.url1 + apiRoute}`, body, {
            headers: this.getAttachmentHttpHeaders(contenttype),
            observe: 'response'
        })
            .pipe(map(data => {
            return data;
        }));
    }
    /**
     *
     * @param apiRoute
     * This function will download the stream file from the API service.
     * No HTTP required for this stream. So used Window.location.href to download the file
     */
    getFormDownloaded(apiRoute) {
        window.location.href = `${this.url + apiRoute}`;
    }
    //common http service(optional)
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error?.error?.message ? error?.error?.message : error.message}`;
        }
        return throwError(errorMessage);
    }
    getToken() {
        const token = this.tokenKey ? this.tokenKey : 'jwt-token';
        return sessionStorage.getItem(token);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, deps: [{ token: i1$2.HttpClient }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }, { type: DataStoreService }]; } });

class DeleteComponent {
    httpService;
    alert;
    dialogRef;
    deleteId;
    message;
    url;
    portConfig;
    successMsg;
    action;
    data;
    value;
    reasonStatus;
    enteredReason;
    isDisabled = false;
    reasonFormControl;
    rowData = {};
    constructor(httpService, alert, dialogRef, data) {
        this.httpService = httpService;
        this.alert = alert;
        this.dialogRef = dialogRef;
        if (data?.deleteId && data?.deleteId !== '' && data?.url && data?.url !== '') {
            this.deleteId = data.deleteId;
            this.action = data.action;
            this.reasonStatus = data.reasonStatus ?? false;
            this.message = data?.message ? data.message : 'Are you sure want to delete this record ?';
            this.url = data.url;
            this.portConfig = data.portConfig;
            this.successMsg = data?.successMsg ? data.successMsg : 'Deleted Successfully';
            this.data = data;
            this.enteredReason = '';
            this.rowData = { 'data': data.rowData };
            if (this.reasonStatus) {
                this.isDisabled = true;
            }
        }
    }
    ngOnInit() {
        this.reasonFormControl = new FormControl('', Validators.required);
    }
    deleteRecord() {
        if (this.action === 'update_activation') {
            this.updateActivation();
        }
        else if (this.action === 'update') {
            this.updateRecord();
        }
        else if (this.action === 'complete') {
            this.completeRecord();
        }
        else if (this.action === 'page_activation') {
            this.deactivatePage();
        }
        else {
            if (this.reasonStatus) {
                this.rowData = { ...this.rowData, 'reason': this.enteredReason };
                this.httpService.post(`${this.url}/${this.deleteId}`, this.rowData).subscribe(_result1 => {
                    this.closePopup('yes');
                    this.alert.success(this.successMsg);
                }, _error => {
                    this.closePopup();
                    this.alert.error(AppConstants.errorMessage);
                });
            }
            else {
                this.httpService.delete(`${this.url}/${this.deleteId}`).subscribe(_result => {
                    this.closePopup('yes');
                }, _error => {
                    this.closePopup();
                    this.alert.error(AppConstants.errorMessage);
                });
            }
        }
    }
    deactivatePage() {
        this.httpService.patch(this.url).subscribe(_result => {
            this.closePopup('yes');
            this.alert.success(this.successMsg);
        }, error => {
            this.closePopup();
            this.alert.error('Failed to deactivate page. Please try again.');
        });
    }
    updateRecord() {
        this.httpService.put(this.url, this.deleteId).subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, _error => {
            this.closePopup();
            this.alert.error(AppConstants.errorMessage);
        });
    }
    closePopup(deleteData = null) {
        this.dialogRef.close({ data: deleteData });
    }
    completeRecord() {
        this.data.data.status = 'Closed';
        this.data.data.statuskey = '81C';
        this.data.data.completeddate = new Date().toISOString();
        this.httpService
            .post(this.url, {
            data: this.data.data
        })
            .subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, _error => {
            this.closePopup();
            this.alert.error(AppConstants.errorMessage);
        });
    }
    updateActivation() {
        const userData = this.data.data;
        userData.isactive = userData.isactive === true ? false : true;
        this.httpService.post(this.url, [userData]).subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, error => {
            this.closePopup();
            console.log(error);
        });
    }
    checkIsDisabled(text) {
        if (text && text.trim() != '') {
            this.isDisabled = false;
            this.enteredReason = text;
        }
        else {
            this.isDisabled = true;
            this.enteredReason = text;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeleteComponent, deps: [{ token: HttpService }, { token: AlertService }, { token: i3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DeleteComponent, selector: "app-delete", ngImport: i0, template: "<div class=\"modal-body\">\r\n  <p>{{ message }}</p>\r\n\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-cancel mr-2\" mat-button (click)=\"closePopup()\">No</button>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"deleteRecord()\">Yes</button>\r\n  </div>\r\n</div>\r\n", styles: [".modal-body{padding:45px 30px 30px;text-align:center;width:500px}.modal-body p{color:var(--text-dark);font-size:var(--font-15);font-weight:500;margin-bottom:34px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-delete', template: "<div class=\"modal-body\">\r\n  <p>{{ message }}</p>\r\n\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-cancel mr-2\" mat-button (click)=\"closePopup()\">No</button>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"deleteRecord()\">Yes</button>\r\n  </div>\r\n</div>\r\n", styles: [".modal-body{padding:45px 30px 30px;text-align:center;width:500px}.modal-body p{color:var(--text-dark);font-size:var(--font-15);font-weight:500;margin-bottom:34px}\n"] }]
        }], ctorParameters: function () { return [{ type: HttpService }, { type: AlertService }, { type: i3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });

const addComponent = createAction('[Master View] Add Component', props());
const removeComponent = createAction('[Master View] Remove Component', props());
const updateComponent = createAction('[Master View] Update Component', props());
const setComponents = createAction('[Master View] Set Components', props());
const clearComponents = createAction('[Master View] Clear Components');
const selectComponentById = createAction('[Master View] Select Component By Id', props());
const publishEvent = createAction('[Master View] Publish Event', props());

const authLogout = createAction('[Auth] Logout');
const authLogin = createAction('[Auth] Login', props());
const authLoginSuccess = createAction('[Auth] Login Success', props());
const authLoginFailure = createAction('[Auth] Login Failure', props());

const initialState$1 = {
    isAuthenticated: false,
    pages: []
};
const reducer = createReducer(initialState$1, on(authLogin, state => ({
    ...state,
    loading: true,
    error: null,
    isAuthenticated: false
})), on(authLoginSuccess, (state, { isAuthenticated }) => {
    console.log(isAuthenticated);
    return {
        ...state,
        loading: false,
        isAuthenticated,
        error: null
    };
}), on(authLoginFailure, (state, { isAuthenticated, error }) => ({
    ...state,
    loading: false,
    isAuthenticated,
    error
})), on(authLogout, state => ({
    ...state,
    loading: false,
    error: null,
    isAuthenticated: false
})));
function authReducer(state, action) {
    return reducer(state, action);
}

function debug(reducer) {
    return function (state, action) {
        const newState = reducer(state, action);
        console.log(`[DEBUG] action: ${action.type}`, {
            payload: action.payload,
            oldState: state,
            newState
        });
        return newState;
    };
}

const APP_PREFIX = 'GAMED-';
class LocalStorageService {
    constructor() {
        // This is intentional
    }
    static loadInitialState() {
        return Object.keys(localStorage).reduce((state, storageKey) => {
            if (storageKey.includes(APP_PREFIX)) {
                const stateKeys = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.')
                    .map(key => key
                    .split('-')
                    .map((token, index) => (index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)))
                    .join(''));
                let currentStateRef = state;
                stateKeys.forEach((key, index) => {
                    if (index === stateKeys.length - 1) {
                        currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey) || '');
                        return;
                    }
                    currentStateRef[key] = currentStateRef[key] || {};
                    currentStateRef = currentStateRef[key];
                });
            }
            return state;
        }, {});
    }
    setItem(key, value) {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    }
    getItem(key) {
        return localStorage.getItem(`${APP_PREFIX}${key}`) || '';
    }
    removeItem(key) {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
    }
    /** Tests that localStorage exists, can be written to, and read from. */
    testLocalStorage() {
        const testValue = 'testValue';
        const testKey = 'testKey';
        const errorMessage = 'localStorage did not return expected value';
        this.setItem(testKey, testValue);
        const retrievedValue = this.getItem(testKey);
        this.removeItem(testKey);
        if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
            return { ...newState, ...LocalStorageService.loadInitialState() };
        }
        return newState;
    };
}

const initialState = {
    comps: [],
    compsevent: null
};
const _gridsterReducer = createReducer(initialState, on(setComponents, (state, { components }) => ({
    ...state,
    comps: components
})), on(addComponent, (state, { item }) => ({
    ...state,
    comps: [...state.comps, item]
})), on(removeComponent, (state, { id }) => ({
    ...state,
    comps: state.comps.filter(item => item.id !== id)
})), on(updateComponent, (state, { item }) => ({
    ...state,
    comps: state.comps.map(i => i.id === item.id ? { ...i, ...item } : i)
})), on(clearComponents, state => ({
    ...state,
    comps: []
})), on(selectComponentById, (state, { id }) => {
    const selectedComponent = state.comps.find(comp => comp.id === id);
    return {
        ...state,
        selectedComponent
    };
}), on(publishEvent, (state, { eventName, payload }) => ({
    ...state,
    compsevent: { eventName: eventName, payload: payload }
})));
function gridsterReducer(state, action) {
    return _gridsterReducer(state, action);
}

const injector = Injector.create({
    providers: [
        { provide: PlatformDataStoreService, useClass: PlatformDataStoreService },
    ]
});
let environment;
runInInjectionContext(injector, () => {
    const storeService = inject(PlatformDataStoreService);
    storeService.currentStore.subscribe((res) => {
        if (res) {
            environment = res['RBACORG'];
        }
    });
});
const reducers = {
    auth: authReducer,
    router: routerReducer,
    masterWidget: gridsterReducer
};
const metaReducers = [initStateFromLocalStorage];
if (!environment?.production) {
    metaReducers.unshift(debug);
}
const selectAuthState = createFeatureSelector('auth');
const selectRouterState = createFeatureSelector('router');
const selectGridsterState = createFeatureSelector('masterWidget');

// Selector to get all gridster items (components) from the state
const selectAllGridsterItems = createSelector(selectGridsterState, (state) => state.comps);
// Selector to get the event associated with the gridster components
const selectEvent = createSelector(selectGridsterState, (state) => state.compsevent);
// Selector to get a specific component configuration by ID
const selectComponentConfigById = (componentId) => createSelector(selectAllGridsterItems, (components) => components.find(comp => comp.id === componentId));

const columnsJson = {
    label: 'Columns',
    columns: [
        {
            components: [
                {
                    title: 'OCR Results ',
                    collapsible: false,
                    key: 'ocrResults',
                    type: 'panel',
                    label: 'Panel',
                    input: false,
                    tableView: false,
                    components: [
                        {
                            label: 'HTML',
                            attrs: [
                                {
                                    attr: '',
                                    value: ''
                                }
                            ],
                            content: '<p></p>',
                            refreshOnChange: false,
                            key: 'html',
                            type: 'htmlelement',
                            input: false,
                            tableView: false
                        }
                    ]
                }
            ],
            width: 6,
            offset: 0,
            push: 0,
            pull: 0,
            size: 'md',
            currentWidth: 6
        },
        {
            components: [],
            width: 6,
            offset: 0,
            push: 0,
            pull: 0,
            size: 'md',
            currentWidth: 6
        }
    ],
    key: 'columns',
    type: 'columns',
    input: false,
    tableView: false
};

class SpeechRecognitionService {
    zone;
    speechRecognition;
    constructor(zone) {
        this.zone = zone;
        // This is intentional
    }
    record() {
        return new Observable(observer => {
            const { webkitSpeechRecognition } = window;
            this.speechRecognition = new webkitSpeechRecognition();
            this.speechRecognition.continuous = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 1;
            this.speechRecognition.onresult = speech => {
                let term = '';
                if (speech.results) {
                    const result = speech.results[speech.resultIndex];
                    const transcript = result[0].transcript;
                    if (result.isFinal) {
                        term = _.trim(transcript);
                        console.log('Did you said? -> ' + term + ' , If not then say something else...');
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };
            this.speechRecognition.onerror = error => {
                observer.error(error);
            };
            this.speechRecognition.onend = () => {
                observer.complete();
            };
            this.speechRecognition.start();
            console.log('Say something - We are listening !!!');
        });
    }
    destroySpeechObject() {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; } });

class OCRService {
    listener = new Subject();
    FormIncrementer = 0;
    ocrIncrementer = 0;
    textractInput;
    // cloud_service_base_url = environment.cloud_service_base_url;
    constructor() {
        // This is intentional
    }
    sendResponse(message) {
        this.listener.next(message);
    }
    clearResponse() {
        this.listener.next();
    }
    getResponse() {
        return this.listener.asObservable();
    }
    sendForDoucumentAnalysis(_s3_bucket_path) {
        // This is intentional
    }
    prepare_form_data(ocrResponse, formioInputs) {
        const formData = {};
        if (ocrResponse && ocrResponse.forms) {
            const ocrforms = ocrResponse.forms;
            const formLength = formioInputs.length;
            let loopContinue = true;
            while (loopContinue) {
                const selectedInput = formioInputs[this.FormIncrementer];
                this.textractInput = ocrforms[this.ocrIncrementer];
                this.conditionSelectedInput(selectedInput, formData, ocrforms);
                if (formLength <= this.FormIncrementer) {
                    loopContinue = false;
                }
            }
        }
        return formData;
    }
    conditionSelectedInput(selectedInput, formData, ocrforms) {
        if (selectedInput.label.trim() == this.textractInput.label.trim()) {
            formData[selectedInput.key] = this.textractInput.value;
            this.FormIncrementer++;
            this.ocrIncrementer++;
        }
        else if ((selectedInput.type == 'radio' || selectedInput.type == 'selectboxes') &&
            (this.textractInput.value == 'SELECTED' || this.textractInput.value == 'NOT_SELECTED')) {
            const formValues = selectedInput.values;
            const selectionValue = {};
            console.log('****');
            this.conditionFormValues(formValues, ocrforms, selectedInput, selectionValue, formData);
            this.FormIncrementer++;
        }
        else {
            console.log('skipping input', selectedInput.label);
            console.log('ta', this.textractInput);
            if (selectedInput.type != 'radio' && selectedInput.type != 'selectboxes') {
                this.FormIncrementer++;
            }
            this.ocrIncrementer++;
        }
    }
    conditionFormValues(formValues, ocrforms, selectedInput, selectionValue, formData) {
        formValues.every(selecetionElement => {
            this.textractInput = ocrforms[this.ocrIncrementer];
            console.log(this.textractInput.label);
            if (selecetionElement.label == this.textractInput.label) {
                if (this.textractInput.value == 'SELECTED') {
                    if (selectedInput.type == 'radio') {
                        selectionValue = selecetionElement.value;
                    }
                    else {
                        selectionValue[selecetionElement.value] = true;
                    }
                }
                else {
                    if (selectedInput.type == 'selectboxes') {
                        selectionValue[selecetionElement.value] = false;
                    }
                }
                console.log('sv', selectionValue);
                formData[selectedInput.key] = selectionValue;
                this.ocrIncrementer++;
            }
            return true;
        });
    }
    prepare_from_data_v1(ocr_response, formioInputs) {
        let formData;
        if (ocr_response && ocr_response.forms) {
            ocr_response.forms.forEach(item => {
                if (item.value !== 'SELECTED' && item.value !== 'NOT_SELECTED') {
                    const selectedInput = formioInputs.find(input => input.label == item.label);
                    formData = this.getSelectedDate(item, selectedInput);
                }
            });
        }
        return formData;
    }
    getSelectedDate(item, selectedInput) {
        const formData = {};
        if (selectedInput && selectedInput.type === 'datetime') {
            const mdate = moment(item.value);
            if (mdate.isValid()) {
                item.value = mdate.format('YYYY-MM-DD');
            }
            else {
                item.value = null;
            }
            formData[selectedInput.key] = item.value;
        }
        return formData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class OcrValidationServiceConfig {
    static EndPoint = {
        OCRValidate: {
            GetNewOcrData: '/ocr/analyzeDocument',
            CreateReferral: '/ref/referral/create',
            SaveClientDetail: '/ref/client/create',
            SaveContactDetail: '/ref/contact/create',
            SaveProviderDetail: '/ref/provider/search',
            SaveReferralProvider: '/ref/referral-provider/create',
            CreateAttachment: '/ref/attachment/create',
            UpdateImgaCatogory: '/ocr/imageCategory/',
            CancelRefferral: '/file/delete-file'
        }
    };
}

class OcrValidationService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        console.log('log');
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getUpload(obj) {
        return this.httpService.post(OcrValidationServiceConfig.EndPoint.OCRValidate.GetNewOcrData, JSON.parse(obj));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, deps: [{ token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }]; } });

class FormioService {
    constructor() {
        //not to be empty
    }
    customEvent(event, formIO) {
        if (event.type === 'dateRange') {
            // this.dateRangeEvent(event, formIO);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
    type;
    message;
}
class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}

const DISPLAY_IN_SECONDS = 20;
class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
        // This is intentional
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

const STRUCTURED_DECISION_MAKING$1 = 'Structured Decision Making';
const SOMETHING_WENT_WRONG$1 = 'Something Went Wrong!';
class DynamicPageCleanupComponent {
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
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING$1)) {
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
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING$1)) {
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
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING$1)) {
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
            this.alertService.error(SOMETHING_WENT_WRONG$1);
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
                this.alertService.error(SOMETHING_WENT_WRONG$1);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageCleanupComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: FormioService }, { token: i3$1.Store }, { token: MAT_DIALOG_DATA, optional: true }, { token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicPageCleanupComponent, selector: "app-dynamic-pagecleanup", inputs: { editId: "editId", pageId: "pageId", sourceid: "sourceid", externalParameters: "externalParameters", isReadOnly: "isReadOnly", componentId: "componentId" }, outputs: { afterSubmit: "afterSubmit", submissionDone: "submissionDone" }, providers: [SpeechRecognitionService, OCRService], viewQueries: [{ propertyName: "external_scanner", first: true, predicate: ["external_scanner"], descendants: true }, { propertyName: "validationPopup", first: true, predicate: ["validationPopup"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }, { kind: "component", type: AlertComponent, selector: "app-alert" }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1$1.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageCleanupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-pagecleanup', providers: [SpeechRecognitionService, OCRService], template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: FormioService }, { type: i3$1.Store }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: PlatformDataStoreService }]; }, propDecorators: { editId: [{
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

class SharedService {
    sharedSource = new Subject();
    currentMessage = this.sharedSource.asObservable();
    sendMessage() {
        this.sharedSource.next();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class ConfigService {
    truncateTextValue = 60;
    getValue() {
        return this.truncateTextValue;
    }
    setValue(newValue) {
        this.truncateTextValue = newValue;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

const LOCAL_STORAGE_KEY = 'target-tab-filter';
const PAGE_MODIFY_ROUTE = '/pages/dynamicpage/page/modify/';
const FILE_EXPORT_NAME_KEY = 'FILE EXPORT NAME';
const GRID_URL = '/solution/dynamicsearch/searchinput/';
const ROLE_CP_PUBLIC = 'role=CP_PUBLIC';
const STORAGE_KEY_DYNAMIC_TAB_PAGES = 'dynamic-tab-pages';
const POPUP_TYPE_OPEN = 'Open PopUp';
const FILTER_ID_KEY = 'horizantal-tab-filter';
class DynamicSearchComponent {
    router;
    route;
    cdref;
    fb;
    _formIO;
    storageService;
    formBuilder;
    store;
    _PlatformStoreservice;
    sharedService;
    configService;
    searchcriteriamenutrigger;
    dataGrid;
    editPopUpDialogRef;
    formId;
    jsonForm;
    sourceid;
    fromTitle;
    submittedData;
    tableColumns;
    totalcount;
    pageId;
    inputFieldId;
    inputId;
    url;
    dataSource;
    popupPosition;
    pageType;
    searchCriteria;
    searchCriteriaArr;
    layouttype = 'vertical';
    id;
    searchparams;
    targetId;
    columns;
    updateGrid;
    totalCount;
    dublicateGridConfig;
    columnHeader;
    spliterSize = 0;
    gridspliterSize = 100;
    isOpen = true;
    icon = '';
    openclose = '';
    user;
    isAddButton = false;
    pageSaveID = '';
    showFilterRowPanel;
    popupData;
    callDialogPopup;
    popupDialogRef;
    showActionColumn;
    editId;
    isDialogPopup;
    item;
    showGridPage = true;
    manualPostApiUrl;
    // #check moduleid
    moduleid;
    purpose;
    isShowFormPage = false;
    outerRouting = new EventEmitter();
    userAction;
    rowData;
    checkBoxesMode;
    gridType;
    showExport = false;
    dropdownValues;
    gridOptions;
    filterOptions;
    selectedFilter;
    filterForm;
    gridConfig;
    tempaConfig;
    reorderColumns;
    storage;
    dataStoreService;
    alertService;
    dialog;
    http;
    screenWidth;
    currentPageId;
    displayMode;
    isResize;
    isUserPreferenceChange;
    formIO;
    dynamicSearchService;
    dynamicTabPageService;
    sequenceId;
    columnWidth;
    uploadedFile;
    imageData;
    attachmentService;
    paramvalue;
    paramfield;
    tablefield;
    toTabId;
    uniquedata;
    pageList;
    isViewEnable;
    iconClass;
    titletab;
    header;
    openTab = false;
    selectedRowIndex;
    selectedColumnIndex;
    selectedCaption;
    selectedRowData;
    httpService;
    authService;
    localstore;
    pageBuilderService;
    location;
    filterOptionsDropdown;
    registrationInfo;
    checkGridConfig;
    gridDynamicSearchForm;
    dynamicSearchArray;
    dynamicSearch;
    tableDropDown;
    columnDropDown;
    dynamicSearchResult;
    criteriaId = 0;
    saveButtonDisable = true;
    associatedId;
    isBGP;
    youthSearchJson;
    youthSearchBoolean = false;
    isInitialLoad = true;
    isDeleteRequire = false;
    isDeleteTime = 15;
    enteredReason = '';
    isDisabled = true;
    DeleteConfigURL;
    updateByIdAndPageIdWithReasonURL;
    deleteConfigData;
    DeleteRevertConfigURL;
    deletedReason = '';
    primary_column = '';
    adminAccessForDelete;
    isConditionalEditDelete;
    pagename;
    sourceKey;
    sourceValue;
    sourceType;
    currentPageSize = 5;
    componentId;
    selectedComponent;
    componentConfig$;
    eventSubscription;
    deletePopupText = '';
    isEditThresholdRequire = false;
    DeleteGridList;
    DeleteGridListWithoutReason;
    ApproveDeleteGridList;
    DefaultDeletePopupTextAftThresholdTime = `You are requesting to remove a Youth's physical description. A notification will be sent to your Security Coordinator to review this request and remove the description if appropriate.
  Enter the reason for the removal request. The reason cannot contain more than 4000 characters.`;
    environment;
    businessRuleMessage;
    gridActionParams;
    allUrlParams;
    showMoreText = {};
    truncateTextValue;
    constructor(injector, router, route, cdref, fb, _formIO, storageService, formBuilder, store, _PlatformStoreservice, sharedService, configService, data) {
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.fb = fb;
        this._formIO = _formIO;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.store = store;
        this._PlatformStoreservice = _PlatformStoreservice;
        this.sharedService = sharedService;
        this.configService = configService;
        this._PlatformStoreservice.currentStore.subscribe((res) => {
            if (res) {
                this.environment = res['RBACORG'];
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.pageBuilderService = injector.get(PageBuilderService);
        this.location = injector.get(Location);
        this.localstore = injector.get(LocalService);
        this.storage = injector.get(LocalService);
        this.dataStoreService = injector.get(DataStoreService);
        this.attachmentService = injector.get(AttachmentsService);
        this.alertService = injector.get(AlertService);
        this.dialog = injector.get(MatDialog);
        this.http = injector.get(HttpClient);
        this.dynamicSearchService = injector.get(DynamicsearchService);
        this.authService = injector.get(AuthService);
        this.user = this.storage.getObj('user');
        this.userAction = this.dataStoreService.getData('userAction');
        this.manualPostApiUrl = '';
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.isViewEnable = this.localstore.getObj('isViewEnable');
        if (data) {
            this.pageId = data.pageId ? data.pageId : this.pageId;
            this.inputFieldId = data.inputFieldId ? data.inputFieldId : this.inputFieldId;
            this.inputId = data.inputId ? data.inputId : this.inputId;
        }
        this.checkBoxesMode = 'always';
        this.gridOptions = [
            { label: 'Sorting', value: 'sort', code: '' },
            { label: 'Filtering', value: 'filter', code: '' },
            { label: 'Hide', value: 'hide', code: '' },
            { label: 'Fixed', value: 'fixed', code: '' },
            // { label: 'Default Columns', value: 'Choosable', code: '' },
            // { label: 'Visible', value: 'visible', code: '' },
            { label: 'Date', value: 'dateFormat', code: '' },
            { label: 'Mobile', value: 'mobileView', code: '' },
            { label: 'Tablet', value: 'tabView', code: '' }
        ];
        this.displayMode = 'compact';
        this.dataStoreService.setData('uploadFromGrid', false);
        this.titletab = JSON.parse(this.localstore.getItem('titletab'));
        this.header = JSON.parse(this.localstore.getItem(LOCAL_STORAGE_KEY));
        this.gridDynamicSearchForm = this.formBuilder.group({
            dynamicSearchArray: this.formBuilder.array([])
        });
    }
    ngAfterViewInit() {
        const observerConfig = { attributes: false, childList: true, subtree: true };
        function processNode(node, className, callback) {
            const elements = node.querySelectorAll(className);
            if (elements.length > 0) {
                elements.forEach(callback);
                return true;
            }
            return false;
        }
        const callback = (mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes.length) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && processNode(node, '.dx-checkbox-container', checkbox => {
                            checkbox.setAttribute('tabindex', '0');
                        })) {
                            observer.disconnect();
                        }
                    });
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(document.body, observerConfig);
        const callback2 = (mutationsList, observer) => {
            mutationsList.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            processNode(node, '.dx-checkbox-container', checkbox => {
                                checkbox.setAttribute('tabindex', '0');
                            });
                        }
                    });
                }
            });
        };
        const observer2 = new MutationObserver(callback2);
        observer2.observe(document.body, observerConfig);
        combineLatest([this.route.queryParams]).subscribe(([queryParams]) => {
            const responseId = queryParams['responseId'];
            if (this.route.snapshot.routeConfig.path.indexOf('view') > -1 && (this.route.snapshot.routeConfig.path.indexOf('master-view') === -1 || this.route.snapshot.routeConfig.path.indexOf('composite-page') === -1)) {
                this.gridType = 'view';
            }
            else {
                this.gridType = 'search';
            }
            this.tableColumns =
                this.tableColumns && typeof this.tableColumns === 'string' ? JSON.parse(this.tableColumns) : '';
            this.updateGrid = this.updateGrid && typeof this.updateGrid === 'string' ? JSON.parse(this.updateGrid) : '';
            this.formId = this.route.snapshot.paramMap.get('pageId')
                ? this.route.snapshot.paramMap.get('pageId')
                : this.pageId;
            this.inputFieldId = this.inputFieldId ? this.inputFieldId : null;
            this.dynamicSearchService.clickableData = this.inputFieldId;
            this.rowData = this.dynamicSearchService.rowData;
            if (this.route.snapshot.paramMap.get('pageSaveID')) {
                this.isAddButton = true;
            }
            else {
                this.isAddButton = false;
            }
            this.pageSaveID = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('pageSaveID'))?.snapshot.paramMap.get('pageSaveID');
            this.sourceKey = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceKey'))?.snapshot.paramMap.get('sourceKey');
            this.sourceValue = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceValue'))?.snapshot.paramMap.get('sourceValue');
            this.sourceType = this.route.pathFromRoot?.find(x => x.snapshot.paramMap.has('sourceType'))?.snapshot.paramMap.get('sourceType');
            this.moduleid = this.route.parent.parent.snapshot.paramMap.get('module');
            this.purpose = this.route.parent.parent.snapshot.paramMap.get('purpose');
            this.getTemplate(responseId);
            this.componentConfig$ = this.store.pipe(select(selectComponentConfigById(this.componentId)));
            this.componentConfig$.subscribe(data => this.selectedComponent = data);
            this.eventSubscription = this.store.pipe(select(selectEvent)).subscribe(event => {
                if (event && event.eventName === 'submit' && event.payload.settings.onSubmitRefresh
                    && event.payload.settings.onSubmitRefreshWidgets) {
                    event.payload.settings.onSubmitRefreshWidgets.forEach(x => {
                        if (x.pageType == 'BGP')
                            this.pageId = x.id;
                        this.getGrid();
                    });
                }
            });
        });
        /* Clear data while page navigation */
        this.dynamicSearchService.clickedRowData = null;
        this.screenWidth = window.innerWidth;
        const REGISTRATION = this.storageService.getItem('REGISTRATION');
        if (REGISTRATION) {
            this.registrationInfo = JSON.parse(REGISTRATION);
        }
        if (!Object.keys(this.allUrlParams)?.length) {
            this.route.pathFromRoot?.forEach(x => {
                x.params.subscribe(y => y && Object.keys(y).length ? Object.assign(this.allUrlParams, y) : null);
            });
        }
    }
    ngOnInit() {
        this.gridConfig = '';
        this.localstore.setItem('EditGridPageID', '');
        this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
        this.columns?.forEach(column => {
            if (column.visible === undefined || column.visible === "") {
                column.visible = true;
            }
        });
        if (this.dynamicSearchService?.clickedIdData === true) {
            this.dynamicSearchService.clickedIdData = false;
        }
        this.loadFilterForm();
        this.removeAllDynamicSearchCondtion();
        // this.localstore.removeItem(LOCAL_STORAGE_KEY)
        this.localstore.setItem('gridAction', '');
        this.truncateTextValue = this.configService.getValue(); // Get the value
    }
    loadFilterForm() {
        this.filterForm = this.fb.group({
            selectedFilter: ['']
        });
    }
    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }
    redirect() {
        this.router.navigate([PAGE_MODIFY_ROUTE + this.pageSaveID]);
    }
    getTemplate(responseId) {
        this.removeAllDynamicSearchCondtion();
        this.dynamicSearchService.getTemplate(this.formId).subscribe(result => {
            if (result) {
                const gridPageInfo = {
                    id: this.formId,
                    name: result['data']['pagename']
                };
                this.isBGP = result['data']?.pageDetails?.pagetype;
                if (this.isBGP && this.isBGP == 'BGP') {
                    this.associatedId = result['data']?.pageid;
                }
                this.setTemplate(result['data']);
                this.isConditionalEditDelete = result['data']['isConditionalEditDelete'];
                this.currentPageId = result['data']['pageid'];
                this.sequenceId = result['data']['id'];
                this.storage.setItem('parentGridPage', JSON.stringify(gridPageInfo));
                this.getUserGridConfig();
                this.getGrid(responseId);
            }
        });
    }
    getPageTabs(_pageId, sourceType, sourceKey, sourceValue, _youthId, navigationState) {
        this.dynamicSearchService.getPageTabs(_pageId).subscribe((result) => {
            if (result) {
                const tabId = result.data[0].activeVersion.id;
                if (result.data[0].activeVersion.tabconfig) {
                    const parentGridPage = {
                        id: this.formId,
                        name: this.fromTitle
                    };
                    this.storage.setItem('backToGridPage', JSON.stringify(parentGridPage));
                    navigationState.isHideBack = true;
                    let url = '';
                    if (result.data[0].pagetype === 'RBTP') {
                        url = '/pages/dynamic-routing/tab/';
                    }
                    else {
                        url = '/pages/dynamicpage/tab/';
                    }
                    const dynamicTab = url + tabId + '/' + _youthId + '/' + sourceKey + '/' + sourceValue + '/' + sourceType;
                    this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigationState });
                }
                else {
                    this.routeToDynamicForms(result.data[0].pagetype, _pageId, _youthId, navigationState);
                }
            }
        });
    }
    routeToDynamicForms(type, _pageId, _youthId, navigationState) {
        if (type === 'ATPBDM') {
            if (window.location.href.indexOf('master-view') > 0 || window.location.href.indexOf('composite-page') > 0) {
                const dynamicTab = 'form/' + _pageId + '/' + _youthId;
                this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigationState });
            }
            else if (window.location.href.indexOf('tab') > 0) {
                const dynamicTab = '../../page/' + _pageId + '/' + _youthId;
                this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigationState });
            }
            else {
                const dynamicTab = PAGE_MODIFY_ROUTE + _pageId + '/' + _youthId;
                this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigationState });
            }
        }
    }
    setTemplate(result) {
        //Must Needed for Merge version of PICS
        this.searchparams = result;
        this.searchparams.gridconfig = typeof result?.gridconfig === 'string' ? JSON.parse(result?.gridconfig) : result?.gridconfig;
        this.searchparams.templatejson = typeof result?.templatejson === 'string' ? JSON.parse(result?.templatejson) : result?.templatejson;
        this.searchparams.tableschemaconfig = typeof result?.tableschemaconfig === 'string' ? JSON.parse(result?.tableschemaconfig) : result?.tableschemaconfig;
        this.setLayout(result);
        this.fromTitle = result.pagename;
        this.dataStoreService.setData('Tittle', this.fromTitle);
        this.pageType = result.pageDetails.pagetype ? result.pageDetails.pagetype.trim() : '';
        this.pageId = result && result.pageDetails ? result.pageDetails.id : null;
        if (this.pageType == 'DSP' || this.pageType == 'BUSP') {
            this.spliterSize = 30;
            this.gridspliterSize = 70;
        }
        this.setGrid(this.searchparams);
        this.targetId = this.searchparams?.gridconfig?.gridActionFormArray[0]?.link;
        this.tempaConfig = this.searchparams?.gridconfig;
        this.buildCriteria(result);
    }
    setGrid(result) {
        this.updateGrid = result.gridconfig;
        const filter = this.updateGrid?.gridConfigFormArray.filter(x => x.sort || x.filter);
        if (filter?.length > 0) {
            this.showFilterRowPanel = true;
        }
        if (this.updateGrid?.gridActionFormArray?.some(a => a.action != 'add')) {
            this.showActionColumn = true;
        }
        if (this.updateGrid?.isShowOnTop) {
            this.getOutsideGridAction(this.updateGrid?.gridActionFormArray?.find(a => a?.action?.toLowerCase() === 'add'));
        }
    }
    async getGrid(responseId) {
        this.storage.setObj(FILE_EXPORT_NAME_KEY, this.searchparams?.pagename);
        if (this.searchparams?.templatejson && !this.searchparams?.tableschemaconfig) {
            this.freeFormPageGrid(this.http, this.storage);
        }
        else {
            if (this.dynamicSearch && this.dynamicSearch.length > 0) {
                await this.getCriteriaByPageId();
                this.showGridPage = false;
            }
            else {
                this.showGridPage = true;
                this.removeAllDynamicSearchCondtion();
            }
            this.searchGrid(this.http, this.storage, responseId);
        }
    }
    setLayout(result) {
        if (result.templatejson) {
            this.jsonForm = typeof result.templatejson === 'string' ? JSON.parse(result.templatejson) : result.templatejson;
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.pagename;
            this.layouttype = 'left';
            this.layouttype = this.layouttype === 'left' ? 'horizontal' : 'vertical';
            if (this.layouttype === 'vertical') {
                this.icon = 'expand_more';
                this.openclose = 'Close';
            }
            else {
                this.icon = 'arrow_left';
                this.openclose = 'Close';
            }
        }
    }
    onSubmit(submission) {
        this.searchparams['filterId'] = sessionStorage.getItem(LOCAL_STORAGE_KEY);
        this.submittedData = submission;
        const data = {
            data: this.submittedData,
            pagedata: [this.searchparams]
        };
        const storagedata = this.storage;
        const http = this.http;
        const baseUrl = this.environment.apiHost;
        if (this.dynamicSearchResult && this.dynamicSearchResult.length > 0) {
            data['dynamicSearchArray'] = this.dynamicSearchResult;
        }
        let gridUrl;
        if (this.manualPostApiUrl != '') {
            gridUrl = this.manualPostApiUrl;
        }
        else {
            gridUrl = GRID_URL;
        }
        this.dataSource = new CustomStore({
            load: function (loadOptions) {
                const authToken = storagedata.getItem('jwt-token');
                const user = storagedata.getObj('user');
                ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort', 'filter', 'group'].forEach(function (i) {
                    if (i in loadOptions && isNotEmpty(loadOptions[i])) {
                        data[i] = loadOptions[i];
                    }
                    else {
                        delete data[i];
                    }
                });
                return http
                    .post(baseUrl + gridUrl, data, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`,
                        uniqueid: `${user.id}`,
                        organizationid: `${user.userWorkInfo.organization.id}`,
                        rolekey: `${user.role.rolekey}`,
                        role: ROLE_CP_PUBLIC
                    })
                })
                    .toPromise()
                    .then((res) => ({
                    data: res.data,
                    totalCount: Number(res.totalCount.count)
                }))
                    .catch(_error => this.alertService.error('Data Loading Error'));
            }
        });
        function isNotEmpty(value) {
            return value !== undefined && value !== null && value !== '';
        }
    }
    afterSubmitted(_event) {
        this.showGridPage = true;
        this.getGrid();
        this.item = null;
        if (this.isShowFormPage) {
            this.getOutsideGridAction(this.updateGrid?.gridActionFormArray?.find(a => a?.action?.toLowerCase() === 'add'));
        }
    }
    saveSearchCriteria() {
        if (this.submittedData && this.submittedData.data) {
            this.submittedData.data['searchCriteria'] = this.searchCriteria;
            const body = {
                id: null,
                pageID: this.formId,
                sourceid: '',
                sourcetype: 'I',
                data: this.submittedData.data,
                metadata: this.submittedData.metadata,
                afterEntityName: '',
                afterRuleAppName: '',
                beforeEntityName: '',
                beforeRuleAppName: '',
                parentsourceid: null
            };
            this.dynamicSearchService.saveSearchCriteria(body).subscribe(result => {
                const response = result['data'];
                this.submittedData = response;
                this.id = response.id;
                this.alertService.success('Seach criteria Saved successfully');
            });
        }
        else {
            this.alertService.success('Please perform search in order to save your search criteria');
        }
    }
    setSearch(newd) {
        this.submittedData = { data: newd };
        this.onSubmit(this.submittedData);
    }
    reset(type) {
        this.submittedData = { data: {} };
        this.getExportData(this.submittedData, type);
    }
    getExportData(submission, type) {
        this.submittedData = submission;
        this.searchparams['filterId'] = sessionStorage.getItem(LOCAL_STORAGE_KEY);
        const data = {
            inputFieldId: this.inputFieldId,
            pagedata: [this.searchparams],
            requireTotalCount: true,
            skip: 0,
            take: 5000
        };
        if (!data.inputFieldId) {
            data.inputFieldId = this.user?.userWorkInfo?.organization?.id;
        }
        if (this.dynamicSearchResult && this.dynamicSearchResult.length > 0) {
            data['dynamicSearchArray'] = this.dynamicSearchResult;
        }
        let gridUrl;
        if (this.manualPostApiUrl != '') {
            gridUrl = this.manualPostApiUrl;
        }
        else {
            gridUrl = GRID_URL;
        }
        this.dynamicSearchService.exportData(data, gridUrl).subscribe(value => {
            if (value['data'].length) {
                this.downloadFile(type, value['data']);
            }
            else {
                this.alertService.error('No data available');
            }
        });
    }
    downloadFile(type, data) {
        const fileData = {
            data: data,
            totalcount: data.length,
            pagename: this.fromTitle,
            gridConfigFormArray: this.updateGrid?.gridConfigFormArray
        };
        const fileType = type === 'excel' ? true : false;
        this.dynamicSearchService.generateDocument(fileData, fileType).subscribe(result => {
            if (result) {
                const awsUrl = result['data'].awsUrl;
                this.alertService.success('Document Generated successfully.');
                if (type === 'print') {
                    // If type is print it will open browser print preview
                    es6printJS({ printable: awsUrl, type: 'pdf', showModal: true });
                    return;
                }
                window.open(awsUrl, '_blank');
            }
        }, error => {
            this.alertService.error(error.message);
        });
    }
    searchGrid(http, storage, responseId) {
        const outsideFormID = this.updateGrid?.gridActionFormArray
            ?.find(a => a?.action?.toLowerCase() === 'add')
            ?.link?.split('_sourceform')[0];
        const primary_table = this.searchparams.tableschemaconfig.tablefields.primary;
        const fallbackIdFromRoute = this.searchparams?.gridconfig?.fallbackIdFromRoute;
        console.log(primary_table.replace('_audit', '_id'), 'primary');
        let queryData;
        if (fallbackIdFromRoute) {
            const fallbackIdValue = this.router.url.split('/').pop();
            if (fallbackIdValue) {
                queryData = { data: {} };
                queryData.data[fallbackIdFromRoute] = Number(fallbackIdValue);
            }
        }
        else if (this.sourceKey && this.sourceValue && this.sourceType) {
            queryData = { data: {} };
            queryData.data[this.sourceKey] = (this.sourceType === 'number') ? Number(this.sourceValue) : this.sourceValue;
        }
        this.searchparams['filterId'] = sessionStorage.getItem(LOCAL_STORAGE_KEY);
        const data = {
            data: this.submittedData,
            queryData: queryData,
            pagedata: [this.searchparams],
            inputFieldId: this.inputFieldId,
            inputId: this.inputId,
            requireTotalCount: true,
            restrict: true,
            associatedFormId: outsideFormID ? outsideFormID : this.associatedId.toString(),
            roleId: sessionStorage.getItem('role_id'),
            selectedValue: this.paramvalue,
            selectedField: this.paramfield,
            paginate: true,
            redirectFilterId: responseId
        };
        const baseUrl = this.environment.apiHost;
        if (this.dynamicSearchResult && this.dynamicSearchResult.length > 0) {
            data['dynamicSearchArray'] = this.dynamicSearchResult;
        }
        const ctrl = this;
        let gridUrl;
        if (this.manualPostApiUrl != '') {
            gridUrl = this.manualPostApiUrl;
        }
        else {
            gridUrl = GRID_URL;
        }
        const _this = this;
        this.dataSource = new CustomStore({
            load: function (loadOptions) {
                const authToken = storage.getItem('jwt-token');
                const user = storage.getObj('user');
                if (!user) {
                    // fix for user null immediately after login
                    return setTimeout(() => {
                        _this.searchGrid(http, storage);
                    }, 1000);
                }
                ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort', 'filter', 'pageconfig', 'group'].forEach(function (item) {
                    if (item in loadOptions && isNotEmpty(loadOptions[item])) {
                        data[item] = loadOptions[item];
                    }
                    else {
                        delete data[item];
                    }
                });
                data.requireTotalCount = true;
                return http
                    .post(baseUrl + gridUrl, data, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`,
                        uniqueid: `${user.id}`,
                        organizationid: `${user?.userWorkInfo?.organization?.id ? user.userWorkInfo.organization.id : ''}`,
                        rolekey: `${user?.role?.rolekey ? user.role.rolekey : ''}`,
                        role: ROLE_CP_PUBLIC
                    })
                })
                    .toPromise()
                    .then((res) => {
                    this.primary_column = res.data?.result[0]?.primaryColumn;
                    for (let i = 0; i < res?.data?.data?.length; i++) {
                        for (const key in res?.data?.data[i]) {
                            if (res?.data?.data[i]?.[key]) {
                                const val = res?.data?.data[i]?.[key];
                                if ((typeof val === 'string' || val instanceof String) && val?.includes('[')) {
                                    res.data.data[i][key] = res.data.data[i][key].replace('[', '').replace(']', '').replaceAll('"', '');
                                }
                            }
                        }
                    }
                    ctrl.showGridPage = !((res?.data?.totalCount?.count === 0 || res?.data?.totalCount?.count === 1) &&
                        ctrl.updateGrid?.isInitialFormLoad);
                    this.isShowFormPage = ctrl.showGridPage;
                    if (!ctrl.showGridPage && ctrl.updateGrid?.gridActionFormArray && ctrl.updateGrid?.gridActionFormArray.length) {
                        const formInfo = ctrl.updateGrid?.gridActionFormArray.find(ele => ele.isOutsideGrid);
                        ctrl.item = {
                            component: DynamicPageCleanupComponent,
                            pageId: formInfo?.link,
                            editId: res?.data?.data[0]?.id,
                            outputs: {
                                afterSubmit: event => ctrl.afterSubmitted(event)
                            },
                            isInitialFormLoad: ctrl.updateGrid?.isInitialFormLoad,
                            isShowOnTop: ctrl.updateGrid?.isShowOnTop
                        };
                    }
                    if (ctrl.showGridPage && ctrl.updateGrid?.isShowOnTop && ctrl.updateGrid?.gridActionFormArray && ctrl.updateGrid?.gridActionFormArray.length) {
                        const formInfo = ctrl.updateGrid?.gridActionFormArray.find(ele => ele.isOutsideGrid);
                        ctrl.item = {
                            component: DynamicPageCleanupComponent,
                            pageId: formInfo?.link,
                            outputs: {
                                afterSubmit: event => ctrl.afterSubmitted(event)
                            },
                            isInitialFormLoad: ctrl.updateGrid?.isInitialFormLoad,
                            isShowOnTop: ctrl.updateGrid?.isShowOnTop
                        };
                    }
                    const dynamicSearchData = [];
                    const storedTabData = JSON.parse(JSON.parse(storage.getItem(STORAGE_KEY_DYNAMIC_TAB_PAGES)));
                    const arrresult = [];
                    const resultdata = res.data.result;
                    resultdata.map(n => {
                        n.row.map((c) => {
                            if (storedTabData != null) {
                                storedTabData.map((c1, index) => {
                                    if (index > 0 && c1.pfield == c.name) {
                                        const obj = Object.assign({}, c1);
                                        arrresult.push(obj);
                                    }
                                });
                            }
                        });
                    });
                    this.uniquedata = arrresult.filter((value, index, _array) => index == arrresult.findIndex(item => item.id == value.id));
                    res.data.result.map(n => {
                        const parentObj = {};
                        n.row.forEach((c) => {
                            let columnData = c.value;
                            const [tableName, columnName] = c.name.split('.');
                            columnData = typeof columnData === 'number' ? c.value.toString() : c.value;
                            if (parentObj[tableName]) {
                                parentObj[tableName][columnName] = columnData;
                            }
                            else {
                                parentObj[tableName] = {};
                                parentObj[tableName][columnName] = columnData;
                            }
                            parentObj['rbacConditions'] = n.rbacConditions;
                            parentObj['businessRules'] = n.businessRules ? n.businessRules : [];
                            parentObj['routedata'] = this.uniquedata;
                            parentObj['primaryColumn'] = n.primaryColumn;
                        });
                        dynamicSearchData.push(parentObj);
                    });
                    return {
                        data: dynamicSearchData,
                        totalCount: Number(res?.data.totalCount.count)
                    };
                })
                    .catch(_error => this.alertService.error('Failed to load data'));
            }
        });
        function isNotEmpty(value) {
            return value !== undefined && value !== null && value !== '';
        }
    }
    freeFormPageGrid(http, storage) {
        const data = {
            data: this.submittedData,
            pagedata: [this.searchparams],
            inputFieldId: this.inputFieldId,
            inputId: this.inputId,
            requireTotalCount: true,
            restrict: true,
            roleId: sessionStorage.getItem('role_id')
        };
        const gridActionFormArray = this.updateGrid.gridActionFormArray.map(a => ({
            ...a,
            link: String(this.searchparams.pageid)
        }));
        this.updateGrid = { ...this.updateGrid, gridActionFormArray };
        const baseUrl = this.environment.apiHost;
        const _this = this;
        this.dataSource = new CustomStore({
            load: function (loadOptions) {
                const authToken = storage.getItem('jwt-token');
                const user = storage.getObj('user');
                if (!user) {
                    return setTimeout(() => {
                        _this.freeFormPageGrid(http, storage);
                    }, 1000);
                }
                ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort', 'filter', 'pageconfig', 'group'].forEach(item => {
                    if (item in loadOptions && loadOptions[item].isNotEmpty()) {
                        data[item] = loadOptions[item];
                    }
                    else {
                        delete data[item];
                    }
                });
                const gridUrl = `/solution/formresponse/getByPageId/${_this.searchparams.pageid}`;
                return http
                    .get(baseUrl + gridUrl, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`,
                        uniqueid: `${user.id}`,
                        organizationid: `${user?.userWorkInfo?.organization?.id ? user.userWorkInfo.organization.id : ''}`,
                        rolekey: `${user?.role?.rolekey ? user.role.rolekey : ''}`,
                        role: ROLE_CP_PUBLIC
                    })
                })
                    .toPromise()
                    .then((res) => {
                    const formResponses = res.data.pageResponses.map(a => ({
                        ...a.response,
                        id: a.id,
                        rbacConditions: a.rbacConditions
                    }));
                    const allowedResponseKeys = _this.searchparams.templatejson
                        .components.filter(a => a.key !== 'submit')
                        .map(b => b.key);
                    allowedResponseKeys.push('id', 'rbacConditions');
                    const filteredResponseKeys = formResponses.map(a => Object.keys(a)
                        .filter(key => allowedResponseKeys.includes(key))
                        .reduce((obj, key) => {
                        obj[key] = a[key];
                        return obj;
                    }, {}));
                    return {
                        data: filteredResponseKeys,
                        totalCount: Number(filteredResponseKeys.length)
                    };
                })
                    .catch(_error => this.alertService.error('Failed to load data'));
            }
        });
    }
    onClose() {
        if (this.isOpen) {
            this.spliterSize = 30;
            this.gridspliterSize = 70;
            this.isOpen = false;
            if (this.layouttype === 'vertical') {
                this.icon = 'expand_more';
            }
            else {
                this.icon = 'arrow_left';
            }
            this.openclose = 'Close';
        }
        else {
            this.spliterSize = 0;
            this.gridspliterSize = 100;
            this.isOpen = true;
            if (this.layouttype === 'vertical') {
                this.icon = 'expand_less';
            }
            else {
                this.icon = 'arrow_right';
            }
            this.openclose = 'Open';
        }
    }
    getRouter(data, _item) {
        this.selectedRowData = data;
        this.openTab = false;
        this.selectedRowIndex = data?.rowIndex;
        this.selectedColumnIndex = data?.columnIndex;
        this.selectedCaption = data?.column?.caption;
        const navigateState = {
            externalLink: true,
            isReadOnly: false,
            title: this.fromTitle
        };
        this.dataStoreService.setData('gridAction', null);
        this.dynamicSearchService.clickedIdData = null;
        this.dynamicSearchService.clickedRowData = null;
        let url;
        let datatype;
        this.updateGrid = typeof this.updateGrid === 'string' ? JSON.parse(this.updateGrid) : this.updateGrid;
        const gridArr = this.updateGrid?.gridConfigFormArray;
        const column = data.column.dataField;
        const tableschemaconfig = this.searchparams.tableschemaconfig;
        for (const key of gridArr) {
            if (key.columnDef === column) {
                url = key.link;
                const result = tableschemaconfig.fieldmapping.filter(x => (x.tablename + '.' + x.field) === key.columnDef);
                datatype = result[0].datatype;
                break;
            }
        }
        this.loadRouter(url, datatype, column, data, navigateState);
    }
    loadRouter(url, datatype, column, data, navigateState) {
        if (url) {
            this.dynamicSearchService.clickedRowData = data?.data;
            const URLSs = this.urlget(data, 'editUrl', '');
            this.dynamicSearchService.changePage(true);
            const dataKeys = Object.keys(data?.data);
            if (dataKeys.includes(URLSs)) {
                if (!data?.data[URLSs]) {
                    this.alertService.warn(data.displayValue + ' not generated properly!');
                }
                else {
                    const s3Url = data?.data[URLSs].includes('.com/') ? data?.data[URLSs].split('.com/')[1] : data?.data[URLSs];
                    this.downloadFileInternally(this.environment.s3BucketUrl + '/' + s3Url, data?.data['filename']);
                }
            }
            else {
                data.data.fromGrid = true;
                data.data.externalLink = true;
                this.dynamicSearchService.id.next(data.data[Object.keys(data.data)[0]].id);
                this.getPageTabs(url, datatype, column, data.data[column.split('.')[0]][column.split('.')[1]], data.data[Object.keys(data.data)[0]].id, navigateState);
            }
        }
    }
    editData(data) {
        const URLSs = this.urlget(data, 'editUrl', '');
        this.dynamicSearchService.id.next(data.data[Object.keys(data.data)[0]].id);
        this.router.navigateByUrl(URLSs);
    }
    viewData(data) {
        const URLSs = this.urlget(data, 'editUrl', '');
        this.router.navigateByUrl(URLSs);
    }
    deleteData(data) {
        const URLSs = this.urlget(data, 'deleteUrl', '');
        this.router.navigateByUrl(URLSs);
    }
    openLink(data) {
        const URLSs = this.urlget(data, 'externalLink', '');
        this.router.navigateByUrl(URLSs);
    }
    urlget(data, obj, pUrl) {
        let url = obj ? this.updateGrid[obj] : pUrl;
        if (url) {
            const urlparamArr = url.split('/');
            for (const key of urlparamArr) {
                if (key.indexOf('{') !== -1 && data.data) {
                    url = this.setURL(key, url, data);
                    url = this.setCurrentUrl(key, url);
                }
            }
            url = url.replace('/undefined', '');
            const urlparamArr1 = url.split('/');
            url = this.setUrlParam(urlparamArr1, url, data);
        }
        /* remove duplicate forward slashes from the URL */
        url = url.replace(/([^:]\/)\/+/g, '$1');
        return url;
    }
    setURL(key, url, data) {
        if (key === '{sourceId}') {
            const val = {
                sourceId: this.inputFieldId
            };
            return url.replace(key, val[key.substring(1, key.indexOf('}'))]);
        }
        else if (key === '{purpose}') {
            const val = {
                purpose: this.purpose
            };
            return url.replace(key, val[key.substring(1, key.indexOf('}'))]);
        }
        else {
            return url.replace(key, data.data[key.substring(1, key.indexOf('}'))]);
        }
    }
    setCurrentUrl(key, url) {
        if (this.router.url && key === '{pagepath}') {
            const currentURL = this.router.url.split('mergepage');
            if (currentURL?.length) {
                return url.replace('/pages/dynamicpage/', currentURL[0]);
            }
        }
    }
    setUrlParam(urlparamArr1, url, data) {
        for (const key of urlparamArr1) {
            if (key.indexOf('{') !== -1 && data.data) {
                return url.replace(key, data.data[key.substring(1, key.indexOf('}'))]);
            }
        }
    }
    // dynamic action link
    getInsideGridAction(data, item) {
        this.checkRulesBeforeActions(data, item).subscribe((allowed) => {
            if (!allowed) {
                return false;
            }
            this.getActionRoutes(data, item);
        });
    }
    getActionRoutes(data, item) {
        this.localstore.setItem('gridAction', item.action);
        /* Complexity-14*/
        if (item.action === 'search' || item.action === 'edit' || item.action === 'view' || item.action === 'select' || item.action === 'switch' || item.action === 'copy') {
            /* Complexity splitted function*/
            this.actionCheck(item, data);
        }
        else if (item.action === 'delete') {
            this.deleteConfirmation(data, item);
        }
        else if (item.action === 'complete') {
            this.completeConfirmation(data, item);
        }
        else if (item.action === 'narrative') {
            this.popup(data.data.narrative, item);
        }
        else if (item.action === 'history') {
            if (item.type === POPUP_TYPE_OPEN) {
                /* Complexity splitted function*/
                this.popupTypeCheck(item, data);
            }
        }
        else if (item.action === 'print') {
            /* Complexity splitted function*/
            this.actionPrintCheck(data);
        }
        else if (item.action === 'email') {
            /* Complexity splitted function*/
            this.actionEmailCheck(data);
        }
        else if (item.action === 'download') {
            /* Complexity splitted function*/
            this.actionDownloadCheck(item, data);
        }
        else if (item.action === 'TriggerScheduling') {
            this.startScheduling(data.data[Object.keys(data.data)[0]].id);
        }
        else if (item.action === 'Trigger') {
            this.startScheduling(data.data[Object.keys(data.data)[0]].id, item?.link);
        }
        else if (item.action === 'Survey') {
            this.actionSurveyCheck(data); /* Complexity splitted function*/
        }
        else if (item.action === 'info') {
            this.actionInfoCheck(data, item); /* Complexity splitted function*/
        }
        // else if (item.action === 'copy') {
        //   this.actionCheck(item, data); /* Complexity splitted function*/
        // }
    }
    actionCheck(item, data) {
        /* From getInsideGridAction() */
        const action = item.action;
        let editDataStatus = '';
        const gridConfig = this.searchparams?.gridconfig;
        const tableschemaconfig = this.searchparams?.tableschemaconfig;
        let viewPrimaryTable = '';
        if (tableschemaconfig.objectType == 'view') {
            const firstKey = Object.keys(data.data)[0];
            viewPrimaryTable = data.data[firstKey]['primary_object'];
        }
        if (this.isEditThresholdRequire || gridConfig?.isEditThresholdRequire) {
            this.isEditThresholdRequire = true;
        }
        if (item.action === 'edit') {
            this.localstore.setItem('EditGridPageID', this.pageId.toString());
        }
        if (item.action === 'edit' && this.isEditThresholdRequire) {
            const primary_id = this.getPrimaryColumnId(data.data.primaryColumn, data);
            this.dynamicSearchService.checkEditStatus(this.pageId, primary_id).subscribe(result => {
                if (result['data'] && result['data'].length > 0 && result['data'][0]['status']) {
                    editDataStatus = result['data'][0]['status'];
                    this.editActionCheck(item, data, editDataStatus);
                }
                else {
                    this.alertService.error('Something went wrong');
                    this.getGrid();
                }
            }, _error => {
                this.alertService.error(AppConstants$1.errorMessage);
            });
        }
        else {
            this.dataStoreService.setData('gridAction', action);
            const navigateState = {
                externalLink: true,
                isReadOnly: false,
                title: item.action[0].toUpperCase() + item.action.slice(1) + ' ' + this.fromTitle,
                personId: null,
                pageId: null
            };
            if (item.action === 'view') {
                navigateState.isReadOnly = true;
            }
            if (item.type === POPUP_TYPE_OPEN) {
                const dialogConfig = new MatDialogConfig();
                dialogConfig.disableClose = false;
                dialogConfig.height = '90%';
                dialogConfig.width = '100%';
                this.actionViewCheck(item, dialogConfig, data);
                const ref = this.dialog.open(DynamicPageCleanupComponent, dialogConfig);
                ref.afterClosed().subscribe(() => {
                    this.getGrid();
                });
            }
            else {
                if (item.action === 'copytemp') {
                    const user = this.localstore.getObj('user');
                    console.log(data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]);
                    console.log(Object.keys(data.data)[0]);
                    let pageId = '';
                    if (gridConfig?.gridActionFormArray.length) {
                        gridConfig?.gridActionFormArray.find(item => {
                            if (item?.action == 'add')
                                pageId = item?.link;
                        });
                    }
                    const respid = typeof data.data[Object.keys(data.data)[0]] == 'string'
                        ? data.data?.[data.data.primaryColumn] || data.data?.ID
                        : data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn] || data.data[Object.keys(data.data)[0]]?.id;
                    const requestData = {
                        // "id":data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn],
                        "id": respid,
                        "schema": tableschemaconfig.schema,
                        "tablename": tableschemaconfig.objectType !== 'view' ? Object.keys(data.data)[0] : viewPrimaryTable,
                        "currentUser": user?.id,
                        "pageId": pageId
                    };
                    this.dynamicSearchService.rowVersion(requestData).subscribe((res) => {
                        console.log(res);
                        const url = this.location.path();
                        this.router.navigate([url], {
                            relativeTo: this.route,
                            state: navigateState
                        });
                        this.searchGrid(this.http, this.storage);
                        this.alertService.success('Row added successfully');
                        if (['master-view', 'composite-page'].includes(window.location.href))
                            if (this.selectedComponent) {
                                if ((this.selectedComponent?.loadedFromMasterView || this.selectedComponent?.loadedFromCompositePage) && this.selectedComponent.settings)
                                    this.store.dispatch(publishEvent({ eventName: 'submit', payload: this.selectedComponent }));
                            }
                    }, _error => {
                        this.alertService.error(_error.error.message);
                    });
                }
                //This Routes prioritzing composite-pages as first
                else if (this.router?.url.includes('master-view') || this.router?.url.includes('composite-page')) {
                    const url = this.router.url;
                    if (this.selectedComponent && (this.selectedComponent?.loadedFromMasterView || this.selectedComponent.loadedFromCompositePage) && this.selectedComponent.settings &&
                        this.selectedComponent.settings.mappingFormId)
                        this.store.dispatch(publishEvent({ eventName: item.action,
                            payload: { id: data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn], mappingFormId: this.selectedComponent.settings.mappingFormId } }));
                    else {
                        if (this.selectedComponent) {
                            this.localstore.setItem('compositeTitle', this.selectedComponent.settings.title);
                        }
                        this.localstore.setItem('setTabAction', item.action);
                        this.sharedService.sendMessage();
                        this.router.navigate([url + '/form/' + item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                            relativeTo: this.route,
                            state: navigateState
                        });
                        //this.actionRouterConfig(data, item, navigateState);
                    }
                }
                //Below routing handles ribbon and single grid pages
                else if (this.router?.url.includes('dynamic-routing')) {
                    this.localstore.setItem('setTabAction', item.action);
                    this.sharedService.sendMessage();
                    let url;
                    if (item?.pageType == 'COMP') {
                        url = '../../../composite-page/' + item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                    }
                    else {
                        url = '../../../dynamicpage/page/modify/' + item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                    }
                    this.router.navigate([url], {
                        relativeTo: this.route,
                        state: navigateState
                    });
                    // this.actionRouterConfig(data, item, navigateState);
                }
                else if (item.link.includes('pages/')) {
                    const link = item.link.replace('{id}', data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]);
                    this.router.navigateByUrl('/' + link, { state: item });
                }
                else if (item.link.includes('mergepage')) {
                    let url = item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                    if (item.link.includes('{sourceId}')) {
                        url = this.urlget(data, '', item.link);
                        url = url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                    }
                    this.router.navigate([url], { relativeTo: this.route, state: navigateState });
                }
                else if (item.link.includes('sourceid')) {
                    const formId = item.link.split('_sourceid')[0];
                    const url = '/pages/dynamic-routing/' + data.data.sourceid + '/dynamicpage/page/modify/' + formId;
                    this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                        relativeTo: this.route,
                        state: navigateState
                    });
                }
                else if (item.link.includes('_page')) {
                    // Transactions Page - edit routing changes
                    const formId = item.link.split('_page')[0];
                    const url = '/pages/dynamic-routing/' + data.data.clientaccountid + '/dynamicpage/page/modify/' + formId;
                    this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                        relativeTo: this.route,
                        state: navigateState
                    });
                }
                else {
                    const pageid = item.link ? item.link : this.pageId;
                    const respid = typeof data.data[Object.keys(data.data)[0]] == 'string'
                        ? data.data?.[data.data.primaryColumn] || data.data?.ID
                        : data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn] || data.data[Object.keys(data.data)[0]]?.id;
                    const url = '/pages/dynamicpage/page/modify/' + pageid + '/' + respid;
                    this.router.navigate([url], { relativeTo: this.route, state: navigateState });
                }
            }
        }
    }
    editActionCheck(item, data, editDataStatus) {
        if (item.action === 'edit' && editDataStatus === 'OWNER_ONLY_EDIT') {
            this.alertService.warn('You do not have permission to edit this record. Only the owner who created the record can make changes.');
            this.getGrid();
        }
        else if (item.action === 'edit' && editDataStatus === 'NO_EDIT') {
            this.alertService.warn('The edit window for this record has expired and changes cannot be made at this time.');
            this.getGrid();
        }
        else {
            const action = item.action;
            this.dataStoreService.setData('gridAction', action);
            const navigateState = {
                externalLink: true,
                isReadOnly: false,
                title: item.action[0].toUpperCase() + item.action.slice(1) + ' ' + this.fromTitle,
                personId: null,
                pageId: null
            };
            if (this.router?.url.includes('dynamic-routing')) {
                if (this.router?.url.includes('master-view') || this.router?.url.includes('composite-page')) {
                    const url = this.router.url;
                    if (this.selectedComponent && (this.selectedComponent.loadedFromMasterView || this.selectedComponent.loadedFromCompositePage) && this.selectedComponent.settings &&
                        this.selectedComponent.settings.mappingFormId)
                        this.store.dispatch(publishEvent({
                            eventName: item.action,
                            payload: { id: data.data[Object.keys(data.data)[0]].id, mappingFormId: this.selectedComponent.settings.mappingFormId }
                        }));
                    else {
                        this.router.navigate([url + '/form/' + item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                            relativeTo: this.route,
                            state: navigateState
                        });
                    }
                }
                else {
                    const url = '../../../dynamicpage/page/modify/' + item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                    this.router.navigate([url], {
                        relativeTo: this.route,
                        state: navigateState
                    });
                }
                // this.actionRouterConfig(data, item, navigateState);
            }
            else if (item.link.includes('pages/')) {
                const link = item.link.replace('{id}', data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]);
                this.router.navigateByUrl('/' + link, { state: item });
            }
            else if (item.link.includes('mergepage')) {
                let url = item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                if (item.link.includes('{sourceId}')) {
                    url = this.urlget(data, '', item.link);
                    url = url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                }
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
            else if (item.link.includes('sourceid')) {
                const formId = item.link.split('_sourceid')[0];
                const url = '/pages/dynamic-routing/' + data.data.sourceid + '/dynamicpage/page/modify/' + formId;
                this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                    relativeTo: this.route,
                    state: navigateState
                });
            }
            else if (item.link.includes('_page')) {
                // Transactions Page - edit routing changes
                const formId = item.link.split('_page')[0];
                const url = '/pages/dynamic-routing/' + data.data.clientaccountid + '/dynamicpage/page/modify/' + formId;
                this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                    relativeTo: this.route,
                    state: navigateState
                });
            }
            else if (item.action === 'copy') {
                console.log(data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]);
                console.log(Object.keys(data.data)[0]);
                const requestData = {
                    "id": data.data[Object.keys(data.data)[0]]?.id,
                    "schema": "oya",
                    "tablename": Object.keys(data.data)[0],
                    "currentUser": 572
                };
                this.dynamicSearchService.rowVersion(requestData).subscribe((res) => {
                    console.log(res);
                    const url = this.location.path();
                    this.router.navigate([url], {
                        relativeTo: this.route,
                        state: navigateState
                    });
                    this.searchGrid(this.http, this.storage);
                    this.alertService.success('Row added successfully');
                }, _error => {
                    this.alertService.error(_error.error.message);
                });
            }
            else {
                const pageid = item.link ? item.link : this.pageId;
                const respid = typeof data.data[Object.keys(data.data)[0]] == 'string'
                    ? data.data?.[data.data.primaryColumn] || data.data?.ID
                    : data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn] || data.data[Object.keys(data.data)[0]]?.id;
                const url = '/pages/dynamicpage/page/modify/' + pageid + '/' + respid;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
        }
    }
    actionViewCheck(item, dialogConfig, data) {
        /* From actionCheck()--> getInsideGridAction() */
        if (item.action === 'view') {
            dialogConfig.data = {
                editId: data.data[Object.keys(data.data)[0]].id,
                pageId: item.link,
                isPopup: true,
                isReadOnly: true
            };
        }
        else {
            dialogConfig.data = { editId: data.data[Object.keys(data.data)[0]].id, pageId: item.link, isPopup: true };
        }
    }
    actionRouterConfig(data, item, navigateState) {
        let url = this.router.url;
        if (this.outerRouting?.observers?.length) {
            data.item = item;
            this.dataStoreService.setData('outerRoutingData', data);
            this.outerRouting.emit(data);
        }
        else {
            if (item.link.includes('multipleform')) {
                url = url.split('mergepage')[0];
                const formId = item.link.split('_multipleform')[0];
                url = url + 'dynamicpage/page/modify/' + formId;
            }
            else if (item.link.includes('sourceform')) {
                // for child removal - edit/view routing change
                url = url.split('mergepage')[0];
                const formId = item.link.split('_sourceform')[0];
                url = url + 'page/modify/' + formId;
                if (item.link.split('_sourceform')[1] && item.link.split('_sourceform')[1].includes('_subtab_')) {
                    // External Portal - Staff with subtabs
                    const link = item.link.split('_sourceform')[1];
                    /* Get subtab name for url */
                    const subtab = link.split('_subtab_')[1];
                    url = subtab + '/' + url;
                    /* Disable back button */
                    navigateState.externalLink = false;
                    /* set default page title */
                    navigateState.title = '';
                    this.dynamicSearchService.changePage(true);
                }
            }
            else if (url.indexOf('master-view') > 0 || url.indexOf('composite-page') > 0) {
                url = url + '/form/' + item.link;
            }
            this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                relativeTo: this.route,
                state: navigateState
            });
        }
    }
    popupTypeCheck(item, data) {
        const srcid = this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
            ? this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
            : this.route?.parent?.parent?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid');
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.height = '90%';
        dialogConfig.width = '100%';
        dialogConfig.data = { pageId: item.link, inputFieldId: data.key.id, inputId: srcid };
        const ref = this.dialog.open(DynamicSearchComponent, dialogConfig);
        ref.afterClosed().subscribe(() => {
            this.getGrid();
        });
    }
    actionPrintCheck(data) {
        /* From getInsideGridAction()*/
        if (!data.data.s3bucketurl) {
            this.alertService.warn('No pdf found');
            return;
        }
        const pdfurl = this.environment.s3BucketUrl + '/' + data.data.s3bucketurl;
        es6printJS({ printable: pdfurl, type: 'pdf', showModal: true });
    }
    actionEmailCheck(data) {
        /* From getInsideGridAction()*/
        if (!data.data.email) {
            this.alertService.warn('Email is not available');
            return;
        }
        if (!data.data.s3bucketurl) {
            this.alertService.warn('No Attachment found');
            return;
        }
        // #check fromaddress is hardcoded
        this.dynamicSearchService
            .sendMail({
            subject: data.data.subject,
            content: `${data.data.content_body}<p>Thanks <br> ${this.user.firstName} ${this.user.lastName} <br>  ${this.user.role.description} </p>`,
            s3bucketkey: data.data.s3bucketurl,
            toadresses: [data.data.email],
            fromaddress: 'vmathew@dminc.com'
        })
            .subscribe(() => {
            this.alertService.success('Email Sent successfully');
        });
    }
    actionDownloadCheck(item, data) {
        /* From getInsideGridAction()*/
        if (item.type === 'Document Report Generation') {
            this.dataStoreService.setData('pageData', this.searchparams);
            this.dataStoreService.setData('gridData', data?.data);
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.height = '90%';
            dialogConfig.width = '100%';
            dialogConfig.data = { editId: data.data[Object.keys(data.data)[0]].id, pageId: item.link, isPopup: true };
            const ref = this.dialog.open(DynamicPageCleanupComponent, dialogConfig);
            ref.afterClosed().subscribe(() => {
                this.getGrid();
            });
        }
    }
    actionSurveyCheck(data) {
        /* From getInsideGridAction()*/
        if (data.data.pagedataid) {
            data.data.isReadOnly = true;
        }
        this.router.navigateByUrl(PAGE_MODIFY_ROUTE +
            data.data[Object.keys(data.data)[0]].id +
            (data.data.pagedataid ? '/' + data.data.pagedataid : ''), { state: data.data });
    }
    getOutsideGridAction(item) {
        this.checkRulesBeforeActions({ pageData: this.allUrlParams }, item).subscribe((allowed) => {
            if (!allowed) {
                return false;
            }
            this.storage.setItem('AddAction', true);
            this.localstore.setItem('gridAction', item.action);
            const data = item;
            const action = item.action;
            this.dataStoreService.setData('gridAction', action);
            const navigateState = {
                externalLink: true,
                title: item.action[0].toUpperCase() + item.action.slice(1) + ' ' + this.fromTitle,
                personId: null
            };
            // if (navigateState?.title) {
            //   sessionStorage.setItem('add-title', navigateState?.title);
            // }
            if (data.type == 'External Link') {
                this.getVersionList(item?.link, null, item);
            }
            else if (data.type == POPUP_TYPE_OPEN) {
                this.setDialogConfig(item);
            }
            else {
                if (this.router?.url.includes('dynamic-routing')) {
                    this.dynamicRouteCheck(data, item, navigateState);
                }
                else if (data.link.includes('mergepage')) {
                    const url = data.link;
                    this.router.navigate([url], { relativeTo: this.route, state: navigateState });
                }
                else {
                    this.navigateToGridPage(data, navigateState);
                }
            }
        });
    }
    dynamicRouteCheck(data, item, navigateState) {
        /* From getOutsideGridAction()*/
        let url = this.router.url;
        if (this.outerRouting?.observers?.length) {
            data.item = item;
            this.outerRouting.emit(data);
        }
        else {
            let link = data.link;
            if (data.link.includes('multipleform')) {
                url = url.split('mergepage')[0];
                const formId = data.link.split('_multipleform')[0];
                link = 'dynamicpage/page/modify/' + formId;
            }
            else if (data.link.includes('sourceform')) {
                // for interest transaction add
                url = url.split('mergepage')[0];
                const formId = data.link.split('_sourceform')[0];
                link = 'page/modify/' + formId;
                navigateState = this.setRouteData(data, link, navigateState);
                if (data.link.split('_sourceform')[1] && data.link.split('_sourceform')[1].includes('_subtab_')) {
                    // External Portal - Staff with subtabs
                    const subtabData = data.link.split('_sourceform')[1];
                    /* Get subtab name for url */
                    const subtab = subtabData.split('_subtab_')[1];
                    link = subtab + '/' + link;
                    /* Disable back button */
                    navigateState.externalLink = false;
                    /* set default page title */
                    navigateState.title = '';
                    this.dynamicSearchService.changePage(true);
                }
            }
            this.router.navigate([url + '/' + link], { relativeTo: this.route, state: navigateState });
        }
    }
    setRouteData(data, _link, navigateState) {
        if (data.link.split('_sourceform')[1] && data.link.split('_sourceform')[1].includes('_subtab_')) {
            // External Portal - Staff with subtabs
            // Get subtab name for url
            /* Disable back button */
            navigateState.externalLink = false;
            /* set default page title */
            navigateState.title = '';
            this.dynamicSearchService.changePage(true);
        }
        return navigateState;
    }
    navigateToGridPage(data, navigateState) {
        if (data.link.includes('pages/')) {
            if (data.link.includes('{organizationid}')) {
                const sourceid = this.user?.userWorkInfo?.organization?.id;
                const link = data.link.replace('{organizationid}', sourceid);
                const url = '/' + link;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
            else {
                this.router.navigateByUrl('/' + data.link);
            }
        }
        else {
            if (window.location.href.indexOf('tab') > 0) {
                const url = '../../page/' + data.link;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
            else {
                const url = PAGE_MODIFY_ROUTE + data.link;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
        }
    }
    setDialogConfig(item) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.height = '90%';
        dialogConfig.width = '100%';
        dialogConfig.data = { pageId: item.link, isPopup: true };
        const ref = this.dialog.open(DynamicPageCleanupComponent, dialogConfig);
        ref.afterClosed().subscribe(() => {
            // refresh grid
            this.getGrid();
        });
    }
    convertToISOFormat(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    }
    addMinutes(dateString, minutes) {
        const date = new Date(dateString);
        date.setMinutes(date.getMinutes() + minutes);
        return date.toISOString();
    }
    getPrimaryColumnId(primaryColumn, data) {
        const firstKey = Object.keys(data.data)[0];
        return data.data[firstKey][primaryColumn];
    }
    getAsJSON(json) {
        return typeof json === 'string' ? JSON.parse(json) : json;
    }
    deleteConfirmation(data, item) {
        this.isDisabled = true;
        this.pagename = this.searchparams?.pagename;
        const gridConigForDeleteRequire = this.getAsJSON(this.searchparams?.gridconfig);
        const tableschemaconfig = this.getAsJSON(this.searchparams?.tableschemaconfig);
        let viewPrimaryTable = '';
        if (tableschemaconfig.objectType == 'view') {
            const firstKey = Object.keys(data.data)[0];
            viewPrimaryTable = data.data[firstKey]['primary_object'];
        }
        this.deletePopupText = gridConigForDeleteRequire?.isDeletePopupText;
        if (this.isDeleteRequire || gridConigForDeleteRequire?.isDeleteRequire) {
            this.isDeleteRequire = true;
        }
        if (this.isConditionalEditDelete !== 'true' || !this.isDeleteRequire) {
            const primary_id = this.getPrimaryColumnId(data.data.primaryColumn, data);
            this.DeleteConfigURL = `${DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', primary_id)}/${this.pageId}?name=${viewPrimaryTable}`;
            this.popupDialogRef = this.dialog.open(this.DeleteGridListWithoutReason, {
                panelClass: 'delete-grid-without-reason'
            });
        }
        else {
            this.adminAccessForDelete = false;
            const primary_id = this.getPrimaryColumnId(data.data.primaryColumn, data);
            this.DeleteConfigURL = `${DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', primary_id)}/${this.pageId}?name=${viewPrimaryTable}`;
            this.updateByIdAndPageIdWithReasonURL = `${DynamicSearchURL.EndPoints.formResponse.updateByIdAndPageIdWithReason.replace('{id}', primary_id)}/${this.pageId}?primarytable=${viewPrimaryTable}`;
            const tbName = this.gridConfig.highlightRow.tableName;
            this.deleteConfigData = {};
            this.deleteConfigData = { 'data': data.data[tbName] };
            this.dynamicSearchService.checkDeleteStatus(this.pageId, primary_id, viewPrimaryTable).subscribe(result => {
                if (result['data'] && result['data'].length > 0) {
                    if (result['data'][0]['status'] === 'DEL_PEND') {
                        // const infoDetails = data['data'].rbacConditions.filter(item => item.action == 'info');
                        // this.deletedReason = infoDetails[0]?.message;
                        this.deletedReason = result['data'][0]['popupText'];
                        this.popupDialogRef = this.dialog.open(this.ApproveDeleteGridList, {
                            panelClass: 'approve-delete-grid-list'
                        });
                    }
                    else if (result['data'][0]['status'] === 'DEL_ALLOW') {
                        this.popupDialogRef = this.dialog.open(this.DeleteGridListWithoutReason, {
                            panelClass: 'delete-grid-without-reason'
                        });
                    }
                    else if (result['data'][0]['status'] === 'DEL_REQ') {
                        this.popupDialogRef = this.dialog.open(this.DeleteGridList, {
                            panelClass: 'delete-drid-with-reason'
                        });
                    }
                    else {
                        this.alertService.error('Something went wrong');
                    }
                }
                else {
                    this.alertService.error('Something went wrong');
                }
            }, _error => {
                this.alertService.error(AppConstants$1.errorMessage);
            });
        }
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = true;
        // dialogConfig.data = {
        //   action: 'delete',
        //   deleteId: this.pageId,
        //   message: 'Are you sure you want to delete?',
        //   url: DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]),
        //   portConfig: item.portConfig,
        //   successMsg: 'Record deleted Successfully'
        // };
        // const ref = this.dialog.open(DeleteComponent, dialogConfig);
        // ref.afterClosed().subscribe(() => {
        //   // refresh grid
        //   this.getGrid();
        // });
    }
    actionInfoCheck(data, item) {
        // const primary_id = this.getPrimaryColumnId(data.data.primaryColumn, data);
        // this.DeleteConfigURL = DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', primary_id);
        // this.deletedReason = item.message;
        // $('#ApproveDeleteGridList').modal('show');
    }
    deleteRecord() {
        this.httpService.delete(`${this.DeleteConfigURL}`).subscribe(_result => {
            this.alertService.success('Deleted Successfully');
            this.reloadPopup();
        }, _error => {
            this.cancelPopup();
            this.alertService.error(AppConstants$1.errorMessage);
        });
    }
    deleteRecordWithReason() {
        this.rowData = { ...this.deleteConfigData, 'reason': this.enteredReason, 'pageURL': this.router.url };
        this.httpService.post(`${this.updateByIdAndPageIdWithReasonURL}`, this.rowData).subscribe(_result1 => {
            this.reloadPopup();
            this.alertService.success('Delete Requested Successfully');
        }, _error => {
            this.cancelPopup();
            this.alertService.error(AppConstants$1.errorMessage);
        });
    }
    deleteRecordWithoutReason() {
        this.httpService.delete(`${this.DeleteConfigURL}`).subscribe(_result => {
            if (_result && _result['data'] === 'DEL_REQ') {
                this.alertService.error('Deletion Failed: The threshold time for deleting this record has expired.');
            }
            else if (_result && _result['data']) {
                if (window.location.href.includes('composite-page') || window.location.href.includes('master-view'))
                    if (this.selectedComponent) {
                        if ((this.selectedComponent?.loadedFromMasterView || this.selectedComponent?.loadedFromCompositePage) && this.selectedComponent.settings)
                            this.store.dispatch(publishEvent({ eventName: 'submit', payload: this.selectedComponent }));
                    }
                this.alertService.success('Deleted Successfully');
            }
            else {
                this.alertService.error('Something Went Wrong');
            }
            this.reloadPopup();
        }, _error => {
            this.cancelPopup();
            this.alertService.error(AppConstants$1.errorMessage);
        });
    }
    cancelPopup() {
        this.closeDialogPopup();
        this.enteredReason = '';
    }
    reloadPopup() {
        this.closeDialogPopup();
        this.getGrid();
        this.enteredReason = '';
    }
    checkIsDisabled(text) {
        if (text && text.trim() != '') {
            this.isDisabled = false;
            this.enteredReason = text;
        }
        else {
            this.isDisabled = true;
            this.enteredReason = text;
        }
    }
    completeConfirmation(data, _item) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            action: 'complete',
            deleteId: data.data[Object.keys(data.data)[0]].id,
            message: 'Are you sure you want to complete?',
            url: DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', data.data[Object.keys(data.data)[0]].id),
            portConfig: null,
            successMsg: 'Data completed Successfully',
            data: data.data
        };
        const ref = this.dialog.open(DeleteComponent, dialogConfig);
        ref.afterClosed().subscribe(() => {
            this.getGrid();
        });
    }
    closePopup() {
        this.editPopUpDialogRef.close();
    }
    popup(data, action) {
        const table_name = this.searchparams.tableschemaconfig.tablelist[0];
        const tabdata = data;
        const value = tabdata ? tabdata[table_name] : '';
        this.targetPage(value, action);
        // } else {
        //   this.popupDialogRef = this.dialog.open(this.callDialogPopup);
        //   // tslint:disable-next-line: prefer-for-of
        //   this.popupData = data;
        // }
    }
    closeDialogPopup() {
        this.popupDialogRef.close();
    }
    showIcon(data) {
        if (data.data.timeleft) {
            if (data.data.timeleft.includes(' ')) {
                let timeleft = data.data.timeleft.split(' ');
                timeleft = timeleft[0];
                if (timeleft < 0) {
                    return true;
                }
            }
            else if (data.data.timeleft.includes(':')) {
                let timeleft = data.data.timeleft.split(':');
                timeleft = timeleft[0];
                if (timeleft < 0 || (timeleft == '-00' && timeleft.indexOf('-') != -1)) {
                    return true;
                }
            }
            else {
                return false;
            }
        }
        return false;
    }
    splitingData(data, splitter = ',') {
        if (data.data.narrative) {
            const detail = data.data.narrative;
            const div = document.createElement('div');
            div.innerHTML = detail;
            ///.join("<br/>")
            const finalString = div.innerText.split(splitter);
            for (let i = 0; i < finalString.length; i++) {
                finalString[i] = finalString[i].toLowerCase();
                finalString[i] = finalString[i][0].toUpperCase() + finalString[i].substring(1, 2);
            }
            return finalString.join('<br/>');
        }
        return '';
    }
    getTitleClass(title) {
        if (title) {
            return title.split(' ').join('').toLowerCase();
        }
        return '';
    }
    changeStatusColor(value) {
        if (value === 'Completed') {
            return 'completed';
        }
        else if (value === 'Draft') {
            return 'draft';
        }
        else if (value === 'Open') {
            return 'open';
        }
        else if (value === 'Closed') {
            return 'closed';
        }
        else if (value === 'Pending') {
            return 'pending';
        }
        else if (value === 'Pending Approval' || value === 'In-Progress') {
            return 'pending-approval';
        }
        else if (value === 'Approved' || value === 'Accepted - Screen In') {
            return 'approved';
        }
        else if (value === 'Return to Worker' || value === 'Returned') {
            return 'returned';
        }
        return '';
    }
    titleCaseToolTip(value) {
        return value[0].toUpperCase() + value.slice(1);
    }
    closeForm() {
        this.item = null;
    }
    downloadFileInternally(s3BucketUrlName, filename) {
        const a = document.createElement('a');
        a.href = s3BucketUrlName.trim();
        a.download = filename || 'download';
        a.click();
        a.remove();
    }
    /* for Grid Selection enable/disable */
    getGridSelection(item) {
        if (item === true) {
            return 'multiple';
        }
        return 'none';
    }
    startScheduling(id, url = null) {
        if (url) {
            this.dynamicSearchService.startScheduling({}, url.replace('{id}', id)).subscribe(() => {
                this.alertService.success('Report Triggered Successfully');
            }, _error => {
                this.alertService.success('Report Trigger failed. Try Again!');
            });
        }
        else {
            this.dynamicSearchService.startSchedulingNoUrl({}, id).subscribe(() => {
                this.alertService.success('Report Triggered Successfully');
            }, _error => {
                this.alertService.success('Report Trigger failed. Try Again!');
            });
        }
    }
    customSave = (state) => {
        for (const item in state) {
            if (item !== 'columns')
                delete state[item];
        }
        this.gridConfig.pageSize = this.dataGrid.instance.pageSize();
        const prevWidth = this.columnWidth;
        this.columnWidth = state;
        const validatePageId = this.sequenceId === Number(this.route.snapshot.paramMap.get('pageId'));
        const validate = JSON.stringify(prevWidth) === JSON.stringify(this.columnWidth);
        if (validatePageId) {
            if (state?.columns != undefined) {
                state.columns.forEach((stateColumn) => {
                    const configItem = this.gridConfig.gridConfigFormArray.find(c => c.columnDef === stateColumn.dataField && !c.hide);
                    if (configItem) {
                        configItem.width = stateColumn.width;
                        configItem.filterValues = stateColumn.filterValues;
                        configItem.sortOrder = stateColumn.sortOrder;
                        configItem.sortIndex = stateColumn.sortIndex;
                        configItem.visible = stateColumn.visible ?? true;
                        configItem.visibleIndex = stateColumn.visibleIndex;
                        configItem.filterValue = stateColumn.filterValue;
                        configItem.filterType = stateColumn.filterType;
                        configItem.selectedFilterOperation = stateColumn.selectedFilterOperation;
                    }
                });
                if (this.screenWidth > 1025) {
                    this.columns = this.gridConfig.gridConfigFormArray;
                }
                const body = {
                    type: 'PAGE',
                    mappedid: this.currentPageId,
                    config: JSON.stringify(this.gridConfig)
                };
                this.dynamicSearchService.saveGridUserPreference(body).subscribe(() => {
                    // This is intentional
                });
            }
            // const body = {
            //   type: 'PAGE',
            //   mappedid: this.currentPageId,
            //   config: JSON.stringify(this.gridConfig)
            // };
            // this.dynamicSearchService.saveGridUserPreference(body).subscribe(() => {
            //   // This is intentional
            // });
        }
    };
    columnChooserClick() {
        this.dataGrid.instance.showColumnChooser();
    }
    contentReady = e => {
        const componentInstance = e.component.instance();
        const currentColumns = componentInstance.option('columns');
        if (this.gridConfig && this.gridConfig.userPreferenceGridConfig) {
            if (this.gridConfig.pageSize) {
                this.currentPageSize = this.gridConfig.pageSize;
            }
            let changesMade = false;
            currentColumns.forEach((column, index) => {
                const configItem = this.gridConfig.userPreferenceGridConfig.find(c => c.columnDef === column.dataField);
                if (configItem) {
                    const targetVisibility = configItem.hide ? false : (configItem.visible === "" ? true : configItem.visible);
                    if (column.visible !== targetVisibility) {
                        changesMade = true;
                        currentColumns[index].visible = targetVisibility;
                    }
                    // Check and update the visibleIndex if different
                    if (column.visibleIndex !== configItem.visibleIndex) {
                        changesMade = true;
                        currentColumns[index].visibleIndex = configItem.visibleIndex;
                    }
                }
            });
            if (changesMade) {
                componentInstance.option('columns', currentColumns);
            }
            this.isInitialLoad = false;
            this.isResize = false;
            this.isUserPreferenceChange = false;
        }
    };
    getVisabilityByChoosableProp(chooser, visible) {
        if (chooser) {
            return visible;
        }
        else {
            return true;
        }
    }
    getSortOrder(defaultSortColumn, defaultSortType, columnDef) {
        if (defaultSortColumn && defaultSortType) {
            return defaultSortColumn === columnDef ? defaultSortType : '';
        }
        return '';
    }
    goBack() {
        this.location.back();
    }
    showGridActions(updateGrid, showActionColumn, gridType) {
        const gridActions = updateGrid?.gridActionFormArray
            ? updateGrid?.gridActionFormArray.filter(x => x.action?.toLowerCase() !== 'add')
            : [];
        const hiddenColumns = gridActions?.filter(a => a?.hide);
        return (gridActions.length > 0 &&
            showActionColumn &&
            gridType != 'view' &&
            hiddenColumns.length !== gridActions.length);
    }
    changeFilterOptions(e) {
        this.filterOptionsDropdown.close(e.originalEvent);
        this.isUserPreferenceChange = true;
        this.setPermissions(e.itemValue);
    }
    setPermissions(modal) {
        const [code, value] = modal.split('-');
        const isExist = this.gridConfig.gridConfigFormArray.filter(c => c.columnDef === code && !!c[value]);
        if (isExist.length === 0) {
            this.gridConfig.gridConfigFormArray.map((c) => {
                c[value] = c.columnDef === code ? true : c[value];
                if (c.columnDef === code) {
                    c?.selected?.push(value);
                }
                return c;
            });
        }
        else {
            this.setSelectedGridForm(code, value);
        }
        this.columns = this.gridConfig.gridConfigFormArray;
        this.updateUserGridConfig();
    }
    onResize() {
        const prevWidth = this.screenWidth;
        this.screenWidth = window.innerWidth;
        this.columns = this.gridConfig.gridConfigFormArray;
        if (this.screenWidth < 767) {
            const mobileColumns = this.gridConfig.gridConfigFormArray.filter(c => c.mobileView);
            this.checkOnresize(mobileColumns);
            // this.columns = this.gridConfig.gridConfigFormArray;
        }
        else if (this.screenWidth >= 768 && this.screenWidth < 990) {
            const tabColumns = this.gridConfig.gridConfigFormArray.filter(c => c.tabView);
            if (tabColumns.length) {
                this.columns = this.gridConfig.gridConfigFormArray.filter(x => x.tabView);
            }
            else {
                // const maxVisibleCount = 5;
                // const visibleCount = 0;
                this.columns = this.gridConfig.gridConfigFormArray.filter((t, i) => i < 3);
            }
            // this.columns = this.gridConfig.gridConfigFormArray;
        }
        else if (prevWidth && prevWidth !== this.screenWidth) {
            //to fix loading issue when changing from mobile to web/tab view
            this.columns = this.gridConfig.gridConfigFormArray;
            // this.columns = this.checkGridConfig;
            this.getUserGridConfig();
            // window.location.reload();
        }
    }
    checkOnresize(mobileColumns) {
        if (mobileColumns.length) {
            this.columns = this.gridConfig.gridConfigFormArray.filter(x => x.mobileView);
        }
        else {
            // const maxVisibleCount = 3;
            // const visibleCount = 0;
            this.columns = this.gridConfig.gridConfigFormArray.filter((m, i) => i < 3);
        }
    }
    setSelectedGridForm(code, value) {
        this.gridConfig.gridConfigFormArray.map(c => {
            c[value] = c.columnDef === code ? '' : c[value];
            if (c.columnDef === code && c.selected) {
                c.selected = c.selected.filter(s => s !== value);
                // c?.selected?.map((m, i) => {
                //   m === value && c.selected.splice(i, 1);
                // });
            }
            return c;
        });
    }
    updateUserGridConfig() {
        const body = {
            type: 'PAGE',
            mappedid: this.currentPageId,
            config: JSON.stringify(this.gridConfig)
        };
        if (this.screenWidth > 990) {
            this.dynamicSearchService.saveGridUserPreference(body).subscribe(_res => {
                this.getUserGridConfig();
            });
        }
    }
    getUserGridConfig() {
        this.dataGrid.instance.clearFilter();
        this.dynamicSearchService.getGridUserPreference(this.currentPageId).subscribe((res) => {
            if (res.data && res.data?.config) {
                const configArray = typeof res.data.config === "string" ? JSON.parse(res.data.config) : res.data.config;
                if (configArray && configArray.gridConfigFormArray) {
                    const userPreferenceGridConfig = this.applyUserPreference(this.tempaConfig.gridConfigFormArray, configArray.gridConfigFormArray);
                    configArray.userPreferenceGridConfig = userPreferenceGridConfig;
                    configArray.gridConfigFormArray = userPreferenceGridConfig;
                    this.gridConfig = configArray;
                    this.columnHeader = configArray.gridConfigFormArray.map(column => column?.header);
                    this.columns = configArray.gridConfigFormArray;
                    // this.checkGridConfig = configArray.gridConfigFormArray;
                    this.isDeleteRequire = configArray?.isDeleteRequire;
                    this.isEditThresholdRequire = configArray?.isEditThresholdRequire;
                    this.isDeleteTime = configArray?.isDeleteTime;
                    // const storedTabData = JSON.parse(JSON.parse(this.storage.getItem('dynamic-tab-pages')));
                    const storedTabData = JSON.parse(JSON.parse(this.storage.getItem(STORAGE_KEY_DYNAMIC_TAB_PAGES)));
                    storedTabData?.map(item => {
                        this.columns.map(item1 => {
                            if (item.pfield == item1.columnDef) {
                                item1.link = item.pfield;
                            }
                        });
                    });
                    this.columns.map(c => {
                        c?.selected?.map(s => Object.assign({ col_ref: `${c.columnDef}-${s}` }, c));
                    });
                    const options = [];
                    const arr = [];
                    configArray.gridConfigFormArray.map(a => {
                        options.push({
                            columnName: a.header,
                            items: this.gridOptions.map(p => ({
                                id: `${a.columnDef}-${p.value}`,
                                label: p.label,
                                value: p.value,
                                code: a.columnDef,
                                active: a[p.value] !== '' ? true : ''
                            }))
                        });
                        a?.selected?.map(r => arr.push(`${a.columnDef}-${r}`));
                    });
                    this.columnsFilteration();
                    this.onResize();
                    this.filterOptions = options;
                    this.filterForm?.patchValue({ selectedFilter: arr });
                }
                else {
                    this.patchMultipleOptions();
                }
            }
            else {
                this.patchMultipleOptions();
            }
        });
    }
    applyUserPreference(gridConfig, userPreferenceConfig) {
        const options = ['width', 'filterValues', 'sortOrder', 'sortIndex', 'visible', 'visibleIndex', 'filterValue', 'filterType', 'selectedFilterOperation'];
        for (const column of gridConfig) {
            const columnPreferences = userPreferenceConfig.find(preferenceColumn => preferenceColumn.columnDef === column.columnDef);
            if (columnPreferences) {
                for (const option of options) {
                    if (option === 'visibleIndex' && columnPreferences.hide) {
                        delete column[option];
                    }
                    else if (columnPreferences.hasOwnProperty(option)) {
                        column[option] = columnPreferences[option];
                    }
                }
            }
        }
        return this.assignVisibleIndexes(gridConfig);
    }
    assignVisibleIndexes(gridConfig) {
        const visibleColumns = gridConfig?.length && gridConfig?.filter(col => !col.hide)?.sort((a, b) => a.visibleIndex - b.visibleIndex) || [];
        const nonVisibleColumns = gridConfig?.length && gridConfig?.filter(col => col.hide || col?.visibleIndex < 0)?.sort((a, b) => a.visibleIndex - b.visibleIndex) || [];
        if (visibleColumns && visibleColumns.length) {
            for (const [index, column] of visibleColumns.entries()) {
                column.visibleIndex = index;
            }
        }
        if (nonVisibleColumns && nonVisibleColumns.length) {
            for (const [index, column] of nonVisibleColumns.entries()) {
                column.visibleIndex = visibleColumns?.length + (index + 1);
            }
        }
        return [...visibleColumns, ...nonVisibleColumns];
    }
    patchMultipleOptions() {
        if (this.tempaConfig && this.tempaConfig.gridConfigFormArray) {
            this.columnHeader = this.tempaConfig.gridConfigFormArray.map(column => column.header);
            this.gridConfig = this.tempaConfig;
            this.columns = this.tempaConfig.gridConfigFormArray;
            this.columns.map(c => {
                c?.selected?.map(s => Object.assign({ col_ref: `${c.columnDef}-${s}` }, c));
            });
            const options = [];
            const arr = [];
            this.tempaConfig.gridConfigFormArray.map(grid => {
                options.push({
                    columnName: grid.header,
                    items: this.gridOptions.map(p => ({
                        id: `${grid.columnDef}-${p.value}`,
                        label: p.label,
                        value: p.value,
                        code: grid.columnDef,
                        active: grid[p.value] !== '' ? true : ''
                    }))
                });
                grid?.selected?.map(r => arr.push(`${grid.columnDef}-${r}`));
            });
            this.columnsFilteration();
            this.onResize();
            this.filterOptions = options;
            this.filterForm.patchValue({ selectedFilter: arr });
        }
    }
    columnsFilteration() {
        this.columns = this.columns.map(x => {
            if (x['concatenate']) {
                const columnName = x.header.toLowerCase();
                const cName = columnName.replace(/ /g, '_');
                x.columnDef = `alias.${cName}`;
                return x;
            }
            else {
                return x;
            }
        });
    }
    customEvent(event) {
        this._formIO.customEvent(event, this.formIO);
    }
    onExporting(e) {
        const pageName = this.storage.getObj(FILE_EXPORT_NAME_KEY);
        const currentDate = moment().format('YYYY-MM-DD');
        let fileName;
        if (pageName) {
            fileName = `${pageName} ${currentDate}`;
        }
        else {
            fileName = `Data-Grid ${currentDate}`;
        }
        e.component.columnOption('Action', 'visible', false);
        if (e.format === 'pdf') {
            const doc = new jsPDF.jsPDF();
            exportDataGrid({
                jsPDFDocument: doc,
                component: e.component,
                customizeCell: grid => {
                    grid.pdfCell.wordWrapEnabled = true;
                }
            }).then(() => {
                doc.save(`${fileName}.pdf`);
                e.component.columnOption('Action', 'visible', true);
            });
        }
        else if (e.format === 'xlsx') {
            e.fileName = fileName;
            setTimeout(() => {
                e.component.columnOption('Action', 'visible', true);
            }, 500);
        }
    }
    ngOnDestroy() {
        this.storage.removeItem(FILE_EXPORT_NAME_KEY);
        if (this.eventSubscription) {
            this.eventSubscription.unsubscribe();
        }
    }
    getTitle(c) {
        return c ? c : false;
    }
    onCellPrepared(e) {
        if (e.rowType == 'data' &&
            e.data.businessRules.length > 0 &&
            e.column.dataField === e.data.businessRules[0].name) {
            const element = e.cellElement;
            const rules = '<em class="RULES" aria-hidden="true"></em>'.replace('RULES', e.data.businessRules[0].style ? e.data.businessRules[0].style : '');
            const livetext = document.createElement('div');
            element.classList.add('business-group');
            livetext.classList.add('business-alert');
            livetext.classList.add('ml-2');
            livetext.innerHTML = rules;
            element.appendChild(livetext);
        }
    }
    toggleShowMore(value, columnDef) {
        const key = this.getToggleKey(value, columnDef);
        // Check if the length of the value exceeds 60
        if (value.length > this.truncateTextValue) {
            // If "Show More" is active, return the full value; otherwise, return the truncated value
            if (this.showMoreText[key]) {
                return value; // Show full value
            }
            else {
                return value.substring(0, this.truncateTextValue).trim() + '...'; // Truncate and add ellipsis
            }
        }
        return value;
    }
    toggleShowMoreState(value, columnDef) {
        const key = this.getToggleKey(value, columnDef);
        this.showMoreText[key] = !this.showMoreText[key];
    }
    getToggleKey(value, columnDef) {
        return `${value}_${columnDef}`;
    }
    onRowPrepared(e) {
        if (e.rowType == 'data' &&
            this.updateGrid?.highlightRow?.columnName &&
            this.updateGrid?.highlightRow?.columnName?.split('.').length &&
            e.data[this.updateGrid?.highlightRow?.columnName.split('.')[0]][this.updateGrid?.highlightRow?.columnName.split('.')[1]] == this.updateGrid?.highlightRow?.columnValue) {
            e.rowElement.style.backgroundColor = this.updateGrid?.highlightRow?.color;
            e.rowElement.className = e.rowElement.className.replace('dx-row-alt', '');
        }
    }
    onCellClick(e) {
        e?.data?.routedata.map(n => {
            if (n?.pfield == e?.column?.dataField) {
                this.paramvalue = e?.value;
                const [tableName] = n?.pfield.split('.');
                this.paramfield = n?.field;
                this.tablefield = tableName;
                this.toTabId = n?.id;
            }
        });
        if (this.toTabId) {
            this.dynamicTabPageService.getDynamicPage(this.toTabId).subscribe((res) => {
                if (res?.data.length > 0) {
                    const pageid = res?.data[0]?.activeVersion.id;
                    const currentURL = this.router.url;
                    const newurl = currentURL.replace(/[^/]*$/, '/' + pageid);
                    if (this.selectedCaption == 'action' || this.selectedCaption == 'Action') {
                        this.router.navigate([newurl]);
                    }
                    else {
                        const horizantalTabFilter = this.localstore.getItem(FILTER_ID_KEY);
                        if (horizantalTabFilter) {
                            this.localstore.removeItem(FILTER_ID_KEY);
                        }
                        this.localstore.setObj('HorizantalPageId', pageid);
                        this.localstore.setObj(FILTER_ID_KEY, {
                            id: this.paramvalue,
                            table: this.tablefield,
                            field: this.paramfield
                        });
                        this.openTab = true;
                    }
                    setTimeout(() => {
                        this.paramvalue = undefined;
                    }, 5000);
                }
            });
        }
    }
    // }
    async targetPage(value, targetValue) {
        const targetURLValue = targetValue?.link;
        if (this.localstore.getObj(LOCAL_STORAGE_KEY)) {
            this.localstore.removeItem(LOCAL_STORAGE_KEY);
        }
        await this.getVersionList(targetURLValue, value, targetValue);
    }
    async getVersionList(value, numericValue, action) {
        this.pageBuilderService.getVersionList(value).subscribe(res => {
            if (res.data && res.data.length) {
                this.localstore.setObj(FILE_EXPORT_NAME_KEY, res.data[0]?.pagename);
                this.pageList = res.data;
                this.totalcount = this.pageList.length ? this.pageList.length : 0;
                const filterTags = action;
                const filterValue = filterTags?.filterBy?.split('.');
                if (filterValue != '' && filterValue) {
                    const rowValue = numericValue[filterValue[1]];
                    this.localstore.setObj(LOCAL_STORAGE_KEY, { id: rowValue, table: filterValue[0], field: filterValue[1] });
                }
                if (this.pageList[0].tabconfig)
                    this.localstore.setObj(STORAGE_KEY_DYNAMIC_TAB_PAGES, this.pageList[0].tabconfig);
                this.localstore.setObj('titletab', numericValue);
                if (filterTags?.action == 'edit') {
                    this.localstore.setObj('editValue', numericValue);
                }
                else {
                    this.localstore.removeItem('editValue');
                }
                if (value) {
                    if (this.pageList[0]?.pageDetails?.pagetype == 'ATPBDM' || this.pageList[0]?.pageDetails?.pagetype == 'FFP') {
                        this.authService.setSharedMessage({ pageId: this.pageList[0].pageid });
                        if (this.selectedComponent && (this.selectedComponent.loadedFromMasterView || this.selectedComponent.loadedFromCompositePage) && this.selectedComponent.settings &&
                            this.selectedComponent.settings.mappingFormId)
                            this.store.dispatch(publishEvent({ eventName: action.action,
                                payload: { mappingFormId: this.selectedComponent.settings.mappingFormId } }));
                        else if (window.location.href.indexOf('master-view') > -1 || window.location.href.indexOf('composite-page') > -1) {
                            if (this.selectedComponent) {
                                this.localstore.setItem('compositeTitle', this.selectedComponent.settings.title);
                            }
                            this.localstore.setItem('setTabAction', action.action);
                            this.sharedService.sendMessage();
                            this.router.navigate(['form/', this.pageList[0].pageid], {
                                relativeTo: this.route
                            });
                        }
                        else {
                            this.localstore.setItem('setTabAction', action.action);
                            this.sharedService.sendMessage();
                            // this.router.navigate(['/pages/dynamicpage/page/modify/', this.pageList[0].pageid], {
                            this.router.navigate(['../../../dynamicpage/page/modify/', this.pageList[0].pageid], {
                                relativeTo: this.route
                            });
                        }
                    }
                    else {
                        this.router.navigate(['../../../dynamicpage/tab/', this.pageList[0].id], { relativeTo: this.route });
                    }
                }
            }
        });
    }
    toggleIconClass() {
        this.iconClass = 'fa fa-eye-slash';
        // }
    }
    uploadDocument(item, files) {
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
                        this.storage.setObj('OCRObj', JSON.stringify(object));
                        this.dataStoreService.setData('uploadFromGrid', true);
                        const navigateState = {
                            externalLink: true,
                            title: item.action[0].toUpperCase() + item.action.slice(1) + ' ' + this.fromTitle,
                            personId: null
                        };
                        const url = PAGE_MODIFY_ROUTE + item.link;
                        this.router.navigate([url], { relativeTo: this.route, state: navigateState });
                    }
                    else {
                        this.alertService.error('Something Went Wrong!');
                    }
                }, error => {
                    if (error.status == 0)
                        this.alertService.error('Something Went Wrong!');
                });
            }
        });
    }
    getDateFormat(value) {
        if (this.registrationInfo) {
            if (value === 'date' && this.registrationInfo?.datetimeformat) {
                return this.registrationInfo['datetimeformat'].split(' ')[0];
            }
            return this.registrationInfo['datetimeformat'];
        }
        return 'MM/dd/yyyy';
    }
    buildCriteria(result) {
        if (!result)
            return;
        const tableschemaconfig = typeof result.tableschemaconfig === 'string' ? JSON.parse(result.tableschemaconfig) : result.tableschemaconfig;
        if (!tableschemaconfig)
            return;
        const fieldMapping = tableschemaconfig.fieldmapping;
        if (!fieldMapping)
            return;
        this.dynamicSearch = fieldMapping.filter(e => e.criteria);
        if (!this.dynamicSearch && !this.dynamicSearch.length)
            return;
        this.tableDropDown = [
            ...new Set(this.dynamicSearch.map(e => ({
                name: e.tablename,
                value: e.tablename
            })))
        ];
        this.tableDropDown = this.removeDupliacteArrayJson(this.tableDropDown);
        this.columnDropDown = this.dynamicSearch.map(e => {
            const value = `${e.tablename}.${e.field}`;
            return {
                name: e.label,
                value,
                dataType: e.datatype,
                tableName: e.tablename
            };
        });
    }
    removeDupliacteArrayJson(values) {
        const concatArray = values.map(eachValue => Object.values(eachValue).join(''));
        return values.filter((value, index) => concatArray.indexOf(concatArray[index]) === index);
    }
    initDynamicSearch() {
        return this.gridDynamicSearchForm.get('dynamicSearchArray');
    }
    addGridDynamicSearch() {
        this.initDynamicSearch().push(this.createDynamicSearch());
        const dynamicSearch = this.gridDynamicSearchForm.controls['dynamicSearchArray'].value;
        if (dynamicSearch.length > 0) {
            this.saveButtonDisable = false;
        }
        else {
            this.saveButtonDisable = true;
        }
    }
    createDynamicSearch() {
        return this.formBuilder.group({
            tableName: ['', Validators.required],
            columnName: ['', Validators.required],
            condition: ['', Validators.required],
            datatype: [''],
            value: ['', Validators.required],
            tableDropDown: [this.tableDropDown],
            columnDropDown: [this.columnDropDown],
            conditionDropdown: []
        });
    }
    buildDynamicSearch(res) {
        return this.formBuilder.group({
            tableName: res.tableName,
            columnName: res.columnName,
            condition: res.condition,
            datatype: res.datatype,
            value: res.value,
            tableDropDown: [res.tableDropDown],
            columnDropDown: [res.columnDropDown],
            conditionDropdown: [res.conditionDropdown]
        });
    }
    removeDynamicSearch(index) {
        this.initDynamicSearch().removeAt(index);
        const dynamicSearch = this.gridDynamicSearchForm.controls['dynamicSearchArray'].value;
        if (dynamicSearch.length > 0) {
            this.saveButtonDisable = false;
        }
        else {
            this.saveButtonDisable = true;
        }
        // dynamicSearch = dynamicSearch.filter(e => e.value && e.value.trim());
        // const saveDynamicSearch = {
        //   pageId: +this.formId,
        //   criteriaId: +this.criteriaId,
        //   dynamicSearchArray: dynamicSearch
        // };
        // this.dynamicSearchService.saveCriteriaByPageId(saveDynamicSearch).subscribe(result => {
        //   const response = result['data'];
        //   this.criteriaId = response.criteriaId;
        //   this.alertService.success('Criteria deleted successfully');
        // });
    }
    resetDynamicSearch() {
        this.initDynamicSearch().clear();
        this.dynamicSearchResult = [];
        this.saveButtonDisable = true;
        this.dataSource = {
            data: [],
            totalCount: 0
        };
        this.showGridPage = false;
        this.youthSearchJson = [];
        // this.searchGrid(this.http, this.storage);
    }
    getColumnList(index, tableValue) {
        const getCurrentRow = this.initDynamicSearch().at(index);
        getCurrentRow.get('columnDropDown').patchValue([]);
        const columnArray = this.dynamicSearch
            .filter(e => e.tablename === tableValue)
            .map(e => {
            const value = `${e.tablename}.${e.field}`;
            return {
                name: e.label,
                value,
                dataType: e.datatype
            };
        });
        getCurrentRow.get('columnDropDown').patchValue(columnArray);
    }
    getConditionList(index, columnValue) {
        const getCurrentRow = this.initDynamicSearch().at(index);
        const columnDropDown = getCurrentRow.get('columnDropDown').value;
        const columnDropDownJson = columnDropDown.find(e => e.value === columnValue);
        const columnDataType = columnDropDownJson.dataType;
        const columnTableName = columnDropDownJson.tableName;
        getCurrentRow.get('conditionDropdown').patchValue([]);
        getCurrentRow.get('datatype').patchValue(columnDataType);
        getCurrentRow.get('tableName').patchValue(columnTableName);
        // getCurrentRow.get('conditionDropdown').patchValue([
        //   {
        //     name: 'Equal To',
        //     value: 'Equal_To'
        //   },
        //   {
        //     name: 'Like',
        //     value: 'Like'
        //   }
        // ]);
        if (columnDataType === 'textfield' || columnDataType === 'textarea') {
            getCurrentRow.get('conditionDropdown').patchValue([
                {
                    name: 'Equal To',
                    value: 'Equal_To'
                },
                {
                    name: 'Like',
                    value: 'Like'
                }
            ]);
        }
        else {
            getCurrentRow.get('conditionDropdown').patchValue([
                {
                    name: 'Equal To',
                    value: 'Equal_To'
                }
            ]);
        }
    }
    resetDynamicSearchValue(index) {
        const getCurrentRow = this.initDynamicSearch().at(index);
        getCurrentRow.get('value').patchValue('');
    }
    trimSpaces(element) {
        const getElement = element.controls['value'];
        const getValue = getElement.value.trim();
        getElement.setValue(getValue);
        if (!getValue.length) {
            getElement.touched = true;
            getElement.errors = true;
            /* Remove this redundant jump */
            // return;
        }
    }
    submitDynamicSearch() {
        if (!this.gridDynamicSearchForm.valid) {
            this.gridDynamicSearchForm.markAllAsTouched();
            return;
        }
        const dynamicSearch = this.gridDynamicSearchForm.controls['dynamicSearchArray'].value;
        for (let index = 0; index < dynamicSearch.length; index++) {
            const dynamicSearchElement = dynamicSearch[index];
            if (!dynamicSearchElement || !dynamicSearchElement.value.trim()) {
                this.gridDynamicSearchForm.markAllAsTouched();
                return;
            }
        }
        this.showGridPage = true;
        this.dynamicSearchResult = dynamicSearch;
        this.searchGrid(this.http, this.storage);
    }
    saveDynamicSearch() {
        if (!this.gridDynamicSearchForm.valid) {
            this.gridDynamicSearchForm.markAllAsTouched();
            return;
        }
        const dynamicSearch = this.gridDynamicSearchForm.controls['dynamicSearchArray'].value;
        if (!dynamicSearch.length) {
            this.alertService.error('Cannot save empty criteria');
            return;
        }
        for (let index = 0; index < dynamicSearch.length; index++) {
            const dynamicSearchElement = dynamicSearch[index];
            if (!dynamicSearchElement || !dynamicSearchElement.value.trim()) {
                this.gridDynamicSearchForm.markAllAsTouched();
                return;
            }
        }
        const saveDynamicSearch = {
            pageId: +this.formId,
            criteriaId: +this.criteriaId,
            dynamicSearchArray: dynamicSearch
        };
        this.dynamicSearchService.saveCriteriaByPageId(saveDynamicSearch).subscribe(result => {
            const response = result['data'];
            this.criteriaId = response.criteriaId;
            this.alertService.success('Criteria save successfully');
        });
    }
    getCriteriaByPageId() {
        return new Promise((resolve, _rejects) => {
            const pageId = this.formId;
            this.dynamicSearchService.getCriteriaByPageId(pageId).subscribe(result => {
                const response = result['data'];
                if (response && response.length > 0) {
                    const lastIndex = response.length - 1;
                    const lastResponse = response[lastIndex];
                    this.criteriaId = lastResponse.id;
                    let lastDynamicSearchArray = [];
                    if (lastResponse.dynamicSearchArray?.length) {
                        this.saveButtonDisable = false;
                        lastDynamicSearchArray = lastResponse.dynamicSearchArray;
                        lastDynamicSearchArray.forEach(element => {
                            this.initDynamicSearch().push(this.buildDynamicSearch(element));
                        });
                    }
                    this.dynamicSearchResult = lastDynamicSearchArray;
                }
                return resolve({});
            });
        });
    }
    removeAllDynamicSearchCondtion() {
        this.criteriaId = 0;
        this.initDynamicSearch().clear();
        this.saveButtonDisable = true;
        this.dynamicSearchResult = [];
        this.dynamicSearch = [];
        this.youthSearchJson = [];
        this.youthSearchBoolean = false;
    }
    checkRulesBeforeActions(data, item) {
        const pageData = {
            pageid: this.pageId,
            action: item.action,
            pageData: data?.pageData,
            currentUser: this.user,
            primary: data?.data?.primaryColumn,
            rowData: data?.data,
            gridaction: item
        };
        return this.dynamicSearchService.checkRulesInWorkflow(pageData).pipe(map((result) => {
            if (result.data) {
                if (result.data.type === 'VALIDATION') {
                    if (result.data.permission === 'ALLOWED') {
                        return true;
                    }
                    else if (result.data.permission === 'CONFIRMATION') {
                        this.businessRuleMessage = result.data?.message;
                        this.gridActionParams = { data, item };
                        $('#confirmGridAction').modal('show');
                        return false;
                    }
                    else if (result.data.permission === 'DENIED') {
                        this.alertService.error(result.data.message);
                        return false;
                    }
                }
                else if (result.data.type === 'REDIRECTION') {
                    if (result.data.route) {
                        this.router.navigateByUrl(result.data.route);
                        return false;
                    }
                }
            }
            return true;
        }));
    }
    confirmGridAction() {
        this.getActionRoutes(this.gridActionParams.data, this.gridActionParams.item);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i0.ChangeDetectorRef }, { token: i2.UntypedFormBuilder }, { token: FormioService }, { token: LocalStorageService }, { token: i2.UntypedFormBuilder }, { token: i3$1.Store }, { token: PlatformDataStoreService }, { token: SharedService }, { token: ConfigService }, { token: MAT_DIALOG_DATA, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicSearchComponent, selector: "app-dynamic-search", inputs: { formId: "formId", pageId: "pageId", componentId: "componentId" }, outputs: { outerRouting: "outerRouting" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "searchcriteriamenutrigger", first: true, predicate: ["searchcriteriamenutrigger"], descendants: true }, { propertyName: "dataGrid", first: true, predicate: DxDataGridComponent, descendants: true }, { propertyName: "callDialogPopup", first: true, predicate: ["callDialogPopup"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }, { propertyName: "filterOptionsDropdown", first: true, predicate: MultiSelect, descendants: true }, { propertyName: "DeleteGridList", first: true, predicate: ["DeleteGridList"], descendants: true }, { propertyName: "DeleteGridListWithoutReason", first: true, predicate: ["DeleteGridListWithoutReason"], descendants: true }, { propertyName: "ApproveDeleteGridList", first: true, predicate: ["ApproveDeleteGridList"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div [class]=\"userAction === 'view' ? 'readOnlyCard' : ''\">\r\n  <div *ngIf=\"header\">\r\n    <table class=\"table table-bordered\" aria-describedby=\"border\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let item of titletab | keyvalue\">{{ item.key }}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td *ngFor=\"let item of titletab | keyvalue\">{{ item.value }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <p-accordion class=\"w-full dynamic-search\" [activeIndex]=\"1\" iconPos=\"endVal\"\r\n    *ngIf=\"dynamicSearch && dynamicSearch.length > 0\">\r\n    <p-accordionTab>\r\n      <ng-template pTemplate=\"header\">\r\n        <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n          <span class=\"font-bold\">Quick Search</span>\r\n        </span>\r\n      </ng-template>\r\n      <div class=\"d-flex my-2 row\">\r\n        <div class=\"col-12 text-md-right\">\r\n          <button type=\"button\" title=\"Add New\" pripple class=\"p-ripple p-element btn btn-primary btn-icon\"\r\n            (click)=\"addGridDynamicSearch()\">\r\n            <em class=\"pi pi-plus font-weight-bold\"></em>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"gridDynamicSearchForm\">\r\n        <ng-container formArrayName=\"dynamicSearchArray\">\r\n          <div *ngFor=\"let dynamicSearchItem of initDynamicSearch().controls; let dynamicSearchIndex = index\"\r\n            [formGroupName]=\"dynamicSearchIndex\">\r\n            <div class=\"row rbac-card\">\r\n              <div class=\"col-md-11 col-12 pr-0\">\r\n                <div class=\"row\">\r\n                  <!-- <div class=\"col-lg-3 col-md-6 col-12 mb-3\"> -->\r\n                  <!--   <label class=\"referral-form-labels\" for=\"tableList\">Table</label> -->\r\n                  <!--   <p-dropdown -->\r\n                  <!--     [options]=\"dynamicSearchItem.get('tableDropDown')?.value\" -->\r\n                  <!--     optionLabel=\"name\" -->\r\n                  <!--     optionValue=\"value\" -->\r\n                  <!--     id=\"tableList_{{ dynamicSearchIndex }}\" -->\r\n                  <!--     placeholder=\"Select Table\" -->\r\n                  <!--     formControlName=\"tableName\" -->\r\n                  <!--     tabindex=\"0\" -->\r\n                  <!--     styleClass=\"w-100\" -->\r\n                  <!--     (onChange)=\"getColumnList(dynamicSearchIndex, dynamicSearchItem.get('tableName')?.value)\"> -->\r\n                  <!--   </p-dropdown> -->\r\n                  <!--   <span -->\r\n                  <!--     class=\"text-danger error-text\" -->\r\n                  <!--     *ngIf=\" -->\r\n                  <!--       dynamicSearchItem.get('tableName')?.hasError('required') && -->\r\n                  <!--       dynamicSearchItem.get('tableName')?.touched -->\r\n                  <!--     \" -->\r\n                  <!--     >Please Select Table Name</span -->\r\n                  <!--   > -->\r\n                  <!-- </div> -->\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"columnList\">Column <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <p-dropdown [options]=\"dynamicSearchItem.get('columnDropDown')?.value\"\r\n                      id=\"columnList_{{ dynamicSearchIndex }}\" optionLabel=\"name\" optionValue=\"value\"\r\n                      placeholder=\"Select Column\" formControlName=\"columnName\" tabindex=\"0\" styleClass=\"w-100\"\r\n                      (onChange)=\"getConditionList(dynamicSearchIndex, dynamicSearchItem.get('columnName')?.value)\">\r\n                    </p-dropdown>\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('columnName')?.hasError('required') &&\r\n                        dynamicSearchItem.get('columnName')?.touched\r\n                      \">Please Select Column Name</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"conditionList\">Condition <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <p-dropdown [options]=\"dynamicSearchItem.get('conditionDropdown')?.value\"\r\n                      id=\"conditionList_{{ dynamicSearchIndex }}\" optionLabel=\"name\" optionValue=\"value\"\r\n                      placeholder=\"Select Condition\" formControlName=\"condition\" tabindex=\"0\" styleClass=\"w-100\"\r\n                      (onChange)=\"resetDynamicSearchValue(dynamicSearchIndex)\">\r\n                    </p-dropdown>\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('condition')?.hasError('required') &&\r\n                        dynamicSearchItem.get('condition')?.touched\r\n                      \">Please Select Condition</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"valueList\">Value <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <input type=\"text\" class=\"p-inputtext w-100\" id=\"valueList\" formControlName=\"value\"\r\n                      placeholder=\"\" />\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('value')?.hasError('required') && dynamicSearchItem.get('value')?.touched\r\n                      \">Please Fill Value</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels d-md-block d-none\" for=\"deleteDynamicSearch\">&#160;</label>\r\n                    <span class=\"material-symbols-outlined text-danger delete-icon\" role=\"button\"\r\n                      id=\"deleteDynamicSearch\" (click)=\"removeDynamicSearch(dynamicSearchIndex)\"\r\n                      title=\"Delete\">delete</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div\r\n                class=\"col-md-1 col-12 mb-3 text-md-center d-md-flex align-items-md-center justify-content-md-center flex-column\">\r\n                <label class=\"referral-form-labels d-md-block d-none\" for=\"deleteDynamicSearch\">&#160;</label>\r\n                <span class=\"material-symbols-outlined text-danger\" role=\"button\" id=\"deleteDynamicSearch\"\r\n                  (click)=\"removeDynamicSearch(dynamicSearchIndex)\" title=\"Delete\">delete</span>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeDynamicSearch()\">Delete</button>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"row d-flex flex-column align-self-end\">\r\n            <div class=\"col-md-12 text-md-right mt-2\">\r\n              <!-- <button\r\n                type=\"button\"\r\n                class=\"btn btn-primary\"\r\n                (click)=\"saveDynamicSearch()\"\r\n                [disabled]=\"saveButtonDisable\">\r\n                Save\r\n              </button> -->\r\n              <button type=\"button\" class=\"btn btn-cancel\" (click)=\"resetDynamicSearch()\">Clear</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitDynamicSearch()\"\r\n                [disabled]=\"saveButtonDisable\">Search</button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n    </p-accordionTab>\r\n  </p-accordion>\r\n  <div class=\"page-wrp mt-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <!-- <div *ngIf=\"true\">\r\n          <div class=\"d-flex\" [formGroup]=\"filterForm\" *ngIf=\"gridType !== 'view'\">\r\n            <div class=\"col-md-12\">\r\n              <p-multiSelect [options]=\"filterOptions\" styleClass=\"filterOptions\" [group]=\"true\"\r\n                selectedItemsLabel=\"{0} items selected\" defaultLabel=\"Select\" optionLabel=\"label\" optionValue=\"id\"\r\n                id=\"filteroptions\" ariaFilterLabel=\"searchbox\" formControlName=\"selectedFilter\"\r\n                (onChange)=\"changeFilterOptions($event)\">\r\n                <ng-template let-group pTemplate=\"group\">\r\n                  <div class=\"flex align-items-center\">\r\n                    <span>{{ group.columnName }}</span>\r\n                  </div>\r\n                </ng-template>\r\n              </p-multiSelect>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <button *ngIf=\"gridType === 'view'\" type=\"button\" class=\"btn btn-cancel mb-3\" (click)=\"goBack()\">Back</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-right\">\r\n        <div class=\"d-flex justify-content-between align-items-center col-12\" *ngIf=\"getTitle(updateGrid?.gridTitle)\">\r\n          <h6 class=\"font-weight-bold mb-0\"></h6>\r\n\r\n          <div class=\"d-flex inmate-btn-align\">\r\n            <button class=\"btn-print my-2\" [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\"\r\n              *ngIf=\"showExport\">\r\n              <img class=\"export\" src=\"../../../assets/images/svg/Export_Icon.svg\" alt=\"export\" />\r\n            </button>\r\n            <mat-menu class=\"d-inline-block my-2\" #menu=\"matMenu\" *ngIf=\"showExport\">\r\n              <button mat-menu-item (click)=\"onClose()\" *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n                <mat-icon>{{ icon }}</mat-icon>{{ openclose }} Slidebar\r\n              </button>\r\n              <button mat-menu-item (click)=\"reset('excel')\"><mat-icon>grid_on</mat-icon> Export to Excel</button>\r\n              <button mat-menu-item (click)=\"reset('pdf')\"><mat-icon>picture_as_pdf</mat-icon> Export to PDF</button>\r\n              <button mat-menu-item (click)=\"reset('print')\"><mat-icon>print</mat-icon> Print</button>\r\n              <button mat-menu-item (click)=\"reset(pageType)\" *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n                <mat-icon>reset_tv</mat-icon> Reset Search Criteria\r\n              </button>\r\n              <button *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\" mat-menu-item\r\n                [matMenuTriggerFor]=\"searchCriteriaList\" #searchcriteriamenutrigger=\"matMenuTrigger\">\r\n                <mat-icon>add_circle_outline</mat-icon> Save Search Criteria\r\n              </button>\r\n            </mat-menu>\r\n            <div [ngClass]=\"updateGrid && updateGrid?.chooser ? 'd-inline-block add-btn-right' : 'd-inline-block'\">\r\n              <!--Add Button, Column chooser button are replacing eachother when its selected-->\r\n              <button class=\"btn-icon-bg d-inline-block pull-right text-right ml-1 my-2\"\r\n                *ngIf=\"showGridPage && item && updateGrid?.isInitialFormLoad\" (click)=\"closeForm()\">\r\n                <em class=\"fa fa-times\"></em>\r\n              </button>\r\n              <div *ngIf=\"\r\n                  updateGrid?.gridActionFormArray !== null &&\r\n                  updateGrid?.gridActionFormArray !== undefined &&\r\n                  updateGrid?.gridActionFormArray &&\r\n                  updateGrid?.gridActionFormArray?.length\r\n                \" class=\"update-grid-action-button-container\">\r\n                <ng-container *ngFor=\"let item of updateGrid?.gridActionFormArray; let i = index\">\r\n                  <ng-container *ngIf=\"!(updateGrid?.isShowOnTop && item?.action?.toLowerCase() === 'add')\">\r\n                    <button *ngIf=\"item?.icon && item.isOutsideGrid && !item.hide\" class=\"btn btn-primary mt-2\"\r\n                      (click)=\"getOutsideGridAction(item)\">\r\n                      <em [class]=\"item.icon\"></em><span class=\"ml-2\" *ngIf=\"!!item.name\">{{ item.name }}</span>\r\n                    </button>\r\n                    <ng-container *ngIf=\"item?.icon && item.isOutsideGrid && item.type === 'Ocr Scan'\">\r\n                      <label for=\"file\" class=\"btn btn-primary mt-2\">\r\n                        <em [class]=\"item.icon\"></em><span class=\"ml-2\" *ngIf=\"!!item.name\">{{ item.name }}</span>\r\n                      </label>\r\n                      <input type=\"file\" (change)=\"uploadDocument(item, $event)\" id=\"file\" aria-hidden=\"true\"\r\n                        style=\"visibility: hidden; display: none\" />\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"updateGrid && updateGrid?.chooser\" class=\"col-custom my-2\">\r\n              <button class=\"btn btn-primary btn-icon ml-1\" (click)=\"columnChooserClick()\">\r\n                <em class=\"fa fa-columns\" aria-hidden=\"true\"></em>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <button *ngIf=\"isAddButton\" type=\"button\" class=\"btn btn-primary my-2\" (click)=\"redirect()\">Add</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-menu #searchCriteriaList=\"matMenu\" class=\"searchlist\">\r\n      <div class=\"row col-sm-12 mt-4\" (click)=\"$event.stopPropagation()\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"searchCriteria\" placeholder=\"Search Criteria\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-2 mt-2\">\r\n          <button class=\"btn btn-pri\" [disabled]=\"!searchCriteria\" (click)=\"saveSearchCriteria()\">Save</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12\">\r\n        <table aria-describedby=\"Search_Criteria\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Search Criteria</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"totalcount\">\r\n            <tr *ngFor=\"let sc of searchCriteriaArr\">\r\n              <td>\r\n                <mat-icon>search</mat-icon>\r\n                <a href=\"javascript:void(0)\" (click)=\"setSearch(sc.data)\">{{ sc.data.searchCriteria }}</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-menu>\r\n    <div class=\"split-page\">\r\n      <as-split unit=\"percent\" useTransition=\"true\" direction=\"{{ layouttype }}\">\r\n        <as-split-area size=\"{{ spliterSize }}\">\r\n          <div *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n                  (customEvent)=\"customEvent($event)\"></formio>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </as-split-area>\r\n        <as-split-area size=\"{{ gridspliterSize }}\">\r\n          <div class=\"row\" *ngIf=\"\r\n              ((updateGrid?.isInitialFormLoad !== undefined &&\r\n                updateGrid?.isInitialFormLoad !== null &&\r\n                updateGrid?.isInitialFormLoad) ||\r\n                (updateGrid?.isShowOnTop !== undefined &&\r\n                  updateGrid?.isShowOnTop !== null &&\r\n                  updateGrid?.isShowOnTop)) &&\r\n              item\r\n            \">\r\n            <div class=\"col-12\">\r\n              <ndc-dynamic class=\"no-drag\" [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item\"\r\n                [ndcDynamicOutputs]=\"item?.outputs\"></ndc-dynamic>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"row\" *ngIf=\"showGridPage\">\r\n              <div class=\"col-lg-12 gridview\">\r\n                <div class=\"card mb-2\">\r\n                  <div class=\"card-body {{ getTitleClass(fromTitle) }}\">\r\n\r\n                    <!-- [remoteOperations]=\"{ filtering: true, sorting: true, paging: true }\"  Removed server filtering-->\r\n                    <dx-data-grid [dataSource]=\"dataSource\" [columnMinWidth]=\"100\" [width]=\"'100%'\" [filterSyncEnabled]=\"true\" #dataGrid\r\n                      [columnResizingMode]=\"'widget'\" [allowColumnReordering]=\"true\" [allowColumnResizing]=\"true\"\r\n                      [columnAutoWidth]=\"true\" (onContentReady)=\"contentReady($event)\"\r\n                      (onCellPrepared)=\"onCellPrepared($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n                      (onCellClick)=\"onCellClick($event)\" (onExporting)=\"onExporting($event)\" [showBorders]=\"true\"\r\n                      [rowAlternationEnabled]=\"true\" [showColumnLines]=\"true\" [showRowLines]=\"true\">\r\n                      <dxo-selection [selectAllMode]=\"allMode\" [showCheckBoxesMode]=\"checkBoxesMode\"\r\n                        [mode]=\"getGridSelection(updateGrid?.gridSelection)\"></dxo-selection>\r\n                      <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n                      <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n                      <dxo-filter-row [visible]=\"showFilterRowPanel\"></dxo-filter-row>\r\n                      <dxo-state-storing [enabled]=\"true\" type=\"custom\" [customSave]=\"customSave\"\r\n                        [customLoad]=\"customLoad\"></dxo-state-storing>\r\n\r\n                      <dxo-column-chooser [enabled]=\"true\" mode=\"select\">\r\n                        <dxo-position my=\"right top\" at=\"right top\" of=\".dx-datagrid-column-chooser-button\">\r\n                        </dxo-position>\r\n                      </dxo-column-chooser>\r\n\r\n                      <!--Grid - Footer filter removed -->\r\n                      <dxo-paging [pageSize]=currentPageSize></dxo-paging>\r\n                      <dxo-pager [visible]=\"true\" [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n                        [displayMode]=\"displayMode\" [showInfo]=\"true\" [showNavigationButtons]=\"true\"></dxo-pager>\r\n                      <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n                      <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n                      <ng-container *ngFor=\"let column of columns; let i = index\">\r\n                        <ng-container *ngIf=\"column?.hide !== true\">\r\n                          <ng-container *ngIf=\"column?.link; else noLink\">\r\n                            <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                              [allowHiding]=\"!column?.Choosable\" [fixed]=\"column?.fixed\" [dataField]=\"column?.columnDef\"\r\n                              [caption]=\"column?.header\" [allowFiltering]=\"column?.filter\" cellTemplate=\"cellTemplate\"\r\n                              [allowSorting]=\"column?.sort\" [width]=\"column?.width\"\r\n                              [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\" [sortOrder]=\"column?.sortOrder\"\r\n                              [sortIndex]=\"column?.sortIndex\">\r\n                            </dxi-column>\r\n                          </ng-container>\r\n                          <ng-template #noLink>\r\n                            <ng-container *ngIf=\"column?.icon; else noShowmore\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"iconTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\"\r\n                                [sortOrder]=\"column?.sortOrder\" [sortIndex]=\"column?.sortIndex\">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noShowmore>\r\n                            <ng-container *ngIf=\"column?.showmore; else noIcon\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"showmoreTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\"\r\n                                [sortOrder]=\"column?.sortOrder\" [sortIndex]=\"column?.sortIndex\">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noIcon>\r\n                            <ng-container *ngIf=\"column?.dateFormat; else noDate\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                *ngIf=\"column?.dateFormat === 'date' || column?.dateFormat === 'datetime'\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" dataType=\"date\"\r\n                                [format]=\"getDateFormat(column?.dateFormat)\" [allowSorting]=\"column?.sort\"\r\n                                [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\" [sortOrder]=\"column?.sortOrder\"\r\n                                [sortIndex]=\"column?.sortIndex\">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noDate>\r\n                            <ng-container *ngIf=\"column?.header.toLowerCase().trim() === 'status'; else noStatus\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"statusTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\"\r\n                                [sortOrder]=\"column?.sortOrder\" [sortIndex]=\"column?.sortIndex\">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noStatus>\r\n                            <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                              [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                              [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                              [allowFiltering]=\"column?.filter\" cellTemplate=\"dataTemplate\"\r\n                              [allowSorting]=\"column?.sort\" [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\"\r\n                              [sortOrder]=\"column?.sortOrder\" [sortIndex]=\"column?.sortIndex\">\r\n                            </dxi-column>\r\n                          </ng-template>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"showGridActions(updateGrid, showActionColumn, gridType)\">\r\n                        <dxi-column [width]=\"120\" [allowFiltering]=\"false\" [showInColumnChooser]=\"false\"\r\n                          [allowSorting]=\"false\" caption=\"Action\" cellTemplate=\"editCellTemplate\">\r\n                        </dxi-column>\r\n                      </ng-container>\r\n                      <div *dxTemplate=\"let d of 'cellTemplate'\" class=\"dashboard-hover\">\r\n                        <a *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d, item)\">{{ d.value !== 'null' ?\r\n                          d.value : '' }}\r\n                          <span *ngIf=\"showIcon(d)\"></span>\r\n                        </a>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n                        <span *ngFor=\"let item of d.data.rbacConditions; let i = index\">\r\n                          <em *ngIf=\"item.action !== 'add'\" [class]=\"item.icon\" (click)=\"popup(d?.key, item)\"></em>\r\n                        </span>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'showmoreTemplate'\" class=\"description-container\">\r\n                          <span>{{ toggleShowMore(d.value, d.column?.dataField) }}</span>\r\n                          <a class=\"toggle-link\" *ngIf=\"d.value.length > truncateTextValue\" (click)=\"toggleShowMoreState(d.value, d.column?.dataField)\">\r\n                            {{ showMoreText[getToggleKey(d.value, d.column?.dataField)] ? 'Show Less' : 'Show More' }}\r\n                          </a>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'editCellTemplate'\">\r\n                        <span *ngFor=\"let item of d.data.rbacConditions; let i = index\">\r\n                          <!-- Tooltip for deleted row -->\r\n                          <a *ngIf=\"\r\n                          item?.action === 'info'\"\r\n                            class=\"no-bg\"\r\n                            [matTooltip]=\"'Delete Status: Pending\\n' + item?.message\"\r\n                            [matTooltipPosition]=\"'left'\"\r\n                            [matTooltipShowDelay]=\"100\"\r\n                            [matTooltipHideDelay]=\"100\"\r\n                            [matTooltipClass]=\"'custom-tooltip-class'\">\r\n                            <em [class]=\"item.icon\"></em>\r\n                          </a>\r\n                          <a *ngIf=\"\r\n                                item?.icon &&\r\n                                item?.action !== 'info' &&\r\n                                !item.isOutsideGrid &&\r\n                                d?.data?.status !== 'Closed' &&\r\n                                item.action !== 'changepathway' &&\r\n                                !item?.hide;\r\n                              else changepathway\r\n                            \" class=\"no-bg\" matTooltip=\"{{ titleCaseToolTip(item?.action) }}\"\r\n                            (click)=\"getInsideGridAction(d, item)\">\r\n                            <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                          </a>\r\n\r\n                          <ng-template #changepathway>\r\n                            <a *ngIf=\"item.action === 'changepathway' && d?.rowIndex === 0\" class=\"no-bg\"\r\n                              matTooltip=\"{{ item?.action }}\" (click)=\"getInsideGridAction(d, item)\">\r\n                              <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                            </a>\r\n                          </ng-template>\r\n                        </span>\r\n                        <a *ngIf=\"updateGrid?.gridActionFormArray?.icon\" class=\"no-bg\" matTooltip=\"Open\"\r\n                          (click)=\"openLink(d)\">\r\n                          <em class=\"fa fa-external-link\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.edit\" class=\"no-bg\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                          <em class=\"fa fa-pencil\" title=\"Edit\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.view\" class=\"no-bg\" matTooltip=\"View\" (click)=\"viewData(d)\">\r\n                          <em class=\"fa fa-eye\" title=\"View\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.delete\" class=\"no-bg text-danger\" matTooltip=\"Delete\"\r\n                          (click)=\"deleteData(d)\">\r\n                          <em class=\"fa fa-trash\"></em>\r\n                        </a>\r\n                        <button *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                          <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\"\r\n                            class=\"fa fa-toggle-on\"></em>\r\n                          <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\"\r\n                            class=\"fa fa-toggle-off\"></em>\r\n                        </button>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'statusTemplate'\" [class]=\"changeStatusColor(d.value)\">\r\n                        <span>{{ d.value }}</span>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'dataTemplate'\"\r\n                        [ngClass]=\"{ 'dashboard-hover-contact': d.column?.dataField === 'servicename' }\">\r\n                        <div class=\"d-inline-block\" *ngIf=\"\r\n                            d.column?.dataField === 'clientaccountno' &&\r\n                            d.data.accountstatus &&\r\n                            d.data.accountstatus === 'INA'\r\n                          \">\r\n                          <em class=\"fa fa-warning red-color\"></em>\r\n                        </div>\r\n                        <div *ngIf=\"d.column?.dataField === 'servicename'\">\r\n                          <div class=\"arrow-right\" *ngIf=\"d.data.narrative\">\r\n                            <div class=\"person-details\">\r\n                              <p><span>Narrative</span><span [innerHtml]=\"splitingData(d, '.')\"></span></p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"d.column?.dataField === 'narrative'; else dataValue\">\r\n                          {{ d.value }}\r\n                        </div>\r\n                        <ng-template #dataValue>{{ d.value }}</ng-template>\r\n                      </div>\r\n                    </dx-data-grid>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </as-split-area>\r\n      </as-split>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #callDialogPopup>\r\n  <h2 matDialogTitle>Narrative</h2>\r\n  <div [innerHTML]=\"popupData\"></div>\r\n  <div class=\"text-right\">\r\n    <button mat-button (click)=\"closeDialogPopup()\" class=\"btn btn-cancel mr-2\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<app-dynamic-details *ngIf=\"openTab\" [key]=\"selectedRowData\"></app-dynamic-details>\r\n\r\n<ng-template #DeleteGridList>\r\n  <div class=\"p-3\">\r\n    <div class=\"clearfix mb-2\">{{ DefaultDeletePopupTextAftThresholdTime }}</div>\r\n    <div class=\"mb-2\">\r\n      <label for=\"reasonfordelete\" class=\"intake-form-labels clearfix mb-2\">Reason for record deletion <span\r\n          class=\"text-danger\">*</span></label>\r\n      <textarea rows=\"3\" id=\"reasonfordelete\" cols=\"30\" pInputTextarea\r\n        placeholder=\"Reason for deletion (4000 character limit)\" maxlength=\"4000\" class=\"form-control no-resize\"\r\n        [(ngModel)]=\"enteredReason\" (input)=\"checkIsDisabled($event.target.value)\"></textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-right pr-3\">\r\n    <button class=\"pull-right btn btn-primary delete mb-3\" (click)=\"deleteRecordWithReason()\"\r\n      [disabled]=\"isDisabled\">Yes</button>\r\n    <button class=\"pull-right mr-2 mb-3 btn bg-white text-primary btncancel\" (click)=\"cancelPopup()\">No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #DeleteGridListWithoutReason>\r\n  <div class=\"p-3\">\r\n    <div class=\"clearfix mb-2\">{{ deletePopupText }}</div>\r\n  </div>\r\n  <div class=\"text-right pr-3\">\r\n    <button class=\"pull-right btn btn-primary delete mb-3\" (click)=\"deleteRecordWithoutReason()\">Yes</button>\r\n    <button class=\"pull-right mr-2 mb-3 btn bg-white text-primary btncancel\" (click)=\"cancelPopup()\">No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #ApproveDeleteGridList>\r\n  <div class=\"p-3\">\r\n    <div class=\"clearfix mb-4\">{{this.deletedReason}}</div>\r\n    <!-- <div class=\"clearfix mb-4\">Do you approve this deletion?</div> -->\r\n  </div>\r\n  <div class=\"text-right pr-3\">\r\n    <button class=\"pull-right mb-2 btn btn-primary delete\" data-dismiss=\"modal\"\r\n      (click)=\"deleteRecordWithoutReason()\">Yes</button>\r\n    <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n      (click)=\"cancelPopup()\">No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"modal\" id=\"confirmGridAction\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p>{{ businessRuleMessage }}</p>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"confirmGridAction()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">No</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".split-page{outline:3px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.card-title{position:absolute;left:15px;font-size:bold}.red-color{color:#ff6252}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding-bottom:2px!important;text-align:center!important;font-family:Roboto,sans-serif!important}.dx-datagrid-rowsview .dx-row{height:40px!important;font-size:var(--base-font-size)}.dx-datagrid-rowsview .dx-row.dx-row-lines>td{vertical-align:middle!important;overflow:unset;padding-left:6px!important;padding-right:6px!important}.card{box-shadow:none!important;border:none!important}.card-header{padding-left:0;background:#eff8ff;height:auto}.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child,.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child>td,.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child>tr>td{overflow:unset!important}.dashboard-hover{position:relative}.dashboard-hover:hover .arrow-right{display:block;z-index:1}.dashboard-hover .person-details{display:inline-block;width:100%}.dashboard-hover .person-details p{margin:0}.dashboard-hover .person-details p span:first-child{width:95px;display:inline-block;vertical-align:top}.dashboard-hover .person-details p span:last-child{width:160px;word-break:break-word;display:inline-flex;overflow:hidden;white-space:normal}.dashboard-hover .person-details p span:last-child:before{content:\":\";padding-right:5px}.dashboard-hover .arrow-right{width:280px;min-height:95px;background-color:var(--bg-light);color:var(--text-dark);padding:10px;position:absolute;float:left;display:none;top:-13px;left:88px;border:1px solid var(--table-border);border-radius:6px}.dashboard-hover .arrow-right:after{content:\" \";position:absolute;margin:auto;top:13px;left:-101%;right:0;background:#fff;width:20px;height:20px;transform:rotate(45deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-right:1px solid var(--table-border);border-bottom:1px solid var(--table-border)}.dashboard-hover-contact{position:relative}.dashboard-hover-contact:hover .arrow-right{display:block;z-index:1}.dashboard-hover-contact .person-details{display:inline-block;width:100%}.dashboard-hover-contact .person-details p{margin:0}.dashboard-hover-contact .person-details p span:first-child{width:95px;display:inline-block;vertical-align:top;word-break:break-word;white-space:normal}.dashboard-hover-contact .person-details p span:last-child{width:135px;word-break:break-word;display:inline-flex;overflow:hidden;white-space:normal;text-align:left}.dashboard-hover-contact .person-details p span:last-child:before{content:\":\";padding-right:5px}.dashboard-hover-contact .arrow-right{width:280px;min-height:50px;background-color:var(--bg-light);color:var(--text-dark);padding:10px;position:absolute;float:left;display:none;top:-13px;left:88px;border:1px solid var(--table-border);border-radius:6px}.dashboard-hover-contact .arrow-right:after{content:\" \";position:absolute;margin:auto;top:13px;left:-101%;right:0;background:#fff;width:20px;height:20px;transform:rotate(45deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-right:1px solid var(--table-border);border-bottom:1px solid var(--table-border)}.open{color:#ff6252;border-radius:6px;font-weight:500;padding:5px!important;vertical-align:middle;min-width:85px;max-width:100%}.draft,.returned{color:red;border-radius:6px;font-weight:500;padding:5px!important;vertical-align:middle;min-width:85px;max-width:100%}.closed,.completed,.approved{color:#2ecd53;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.orange{color:orange;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.blue{color:#2c2863;border-radius:6px;font-weight:700;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.pending{color:#e29866;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.pending-approval{color:orange;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.readOnlyCard{pointer-events:none!important;opacity:.7!important}.page-wrp{background:var(--bg-light)}.page-wrp h6{color:var(--text-dark)}:host ::ng-deep .as-split-gutter{background:var(--table-header)!important}.title{font-weight:700;font-size:17px;text-transform:capitalize;color:#2c2863}.col-custom .btn-icon-bg{padding:5px 8px!important}:host ::ng-deep .split-page .card-body{padding:0 15px!important}:host ::ng-deep .filterOptions{width:250px}:host ::ng-deep .p-multiselect-items{font-size:12px}:host ::ng-deep .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext{padding:.2rem .5rem}:host ::ng-deep .dashboard-hover a{color:var(--interactive-color)!important;cursor:pointer}:host ::ng-deep .dx-datagrid .dx-column-indicators{position:relative;right:1px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-column-chooser{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-checkbox-icon{border:1px solid var(--bg-light)!important}:host ::ng-deep .dx-datagrid .business-group .dx-template-wrapper,:host ::ng-deep .dx-datagrid .business-group .business-alert{display:inline-flex}:host ::ng-deep .dynamic-search .p-component .p-accordion-toggle-icon{margin-top:-8px;position:absolute;right:.5em;top:50%;font-size:var(--font-13);color:var(--primary)}:host ::ng-deep .dynamic-search .p-component .head-text span{color:var(--primary)}:host ::ng-deep .dynamic-search .error-text{font-size:var(--font-12)}:host ::ng-deep .as-vertical .as-split-gutter{display:none!important}.no-resize{resize:none}:host ::ng-deep .custom-mat-tooltip{width:150px;font-size:var(--font-14)}:host ::ng-deep .mdc-tooltip__surface-animation{will-change:auto!important}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }, { kind: "component", type: AlertComponent, selector: "app-alert" }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i2.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i13.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i14.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i8$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i16.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i16.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i16.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "directive", type: i17.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "component", type: i19.DxDataGridComponent, selector: "dx-data-grid", inputs: ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "dataRowTemplate", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "syncLookupFilterValues", "tabIndex", "toolbar", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"], outputs: ["onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExporting", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "accessKeyChange", "activeStateEnabledChange", "allowColumnReorderingChange", "allowColumnResizingChange", "autoNavigateToFocusedRowChange", "cacheEnabledChange", "cellHintEnabledChange", "columnAutoWidthChange", "columnChooserChange", "columnFixingChange", "columnHidingEnabledChange", "columnMinWidthChange", "columnResizingModeChange", "columnsChange", "columnWidthChange", "customizeColumnsChange", "dataRowTemplateChange", "dataSourceChange", "dateSerializationFormatChange", "disabledChange", "editingChange", "elementAttrChange", "errorRowEnabledChange", "exportChange", "filterBuilderChange", "filterBuilderPopupChange", "filterPanelChange", "filterRowChange", "filterSyncEnabledChange", "filterValueChange", "focusedColumnIndexChange", "focusedRowEnabledChange", "focusedRowIndexChange", "focusedRowKeyChange", "groupingChange", "groupPanelChange", "headerFilterChange", "heightChange", "highlightChangesChange", "hintChange", "hoverStateEnabledChange", "keyboardNavigationChange", "keyExprChange", "loadPanelChange", "masterDetailChange", "noDataTextChange", "pagerChange", "pagingChange", "remoteOperationsChange", "renderAsyncChange", "repaintChangesOnlyChange", "rowAlternationEnabledChange", "rowDraggingChange", "rowTemplateChange", "rtlEnabledChange", "scrollingChange", "searchPanelChange", "selectedRowKeysChange", "selectionChange", "selectionFilterChange", "showBordersChange", "showColumnHeadersChange", "showColumnLinesChange", "showRowLinesChange", "sortByGroupSummaryInfoChange", "sortingChange", "stateStoringChange", "summaryChange", "syncLookupFilterValuesChange", "tabIndexChange", "toolbarChange", "twoWayBindingEnabledChange", "visibleChange", "widthChange", "wordWrapEnabledChange"] }, { kind: "component", type: i16$1.DxoColumnChooserComponent, selector: "dxo-column-chooser", inputs: ["allowSearch", "container", "emptyPanelText", "enabled", "height", "mode", "position", "search", "searchTimeout", "selection", "sortOrder", "title", "width"] }, { kind: "component", type: i16$1.DxoPositionComponent, selector: "dxo-position", inputs: ["at", "boundary", "boundaryOffset", "collision", "my", "of", "offset"] }, { kind: "component", type: i16$1.DxoSelectionComponent, selector: "dxo-selection", inputs: ["allowSelectAll", "recursive", "selectByClick", "deferred", "mode", "selectAllMode", "showCheckBoxesMode"] }, { kind: "component", type: i16$1.DxiColumnComponent, selector: "dxi-column", inputs: ["alignment", "allowEditing", "allowExporting", "allowFiltering", "allowFixing", "allowGrouping", "allowHeaderFiltering", "allowHiding", "allowReordering", "allowResizing", "allowSearch", "allowSorting", "autoExpandGroup", "buttons", "calculateCellValue", "calculateDisplayValue", "calculateFilterExpression", "calculateGroupValue", "calculateSortValue", "caption", "cellTemplate", "columns", "cssClass", "customizeText", "dataField", "dataType", "editCellTemplate", "editorOptions", "encodeHtml", "falseText", "filterOperations", "filterType", "filterValue", "filterValues", "fixed", "fixedPosition", "format", "formItem", "groupCellTemplate", "groupIndex", "headerCellTemplate", "headerFilter", "hidingPriority", "isBand", "lookup", "minWidth", "name", "ownerBand", "renderAsync", "selectedFilterOperation", "setCellValue", "showEditorAlways", "showInColumnChooser", "showWhenGrouped", "sortIndex", "sortingMethod", "sortOrder", "trueText", "type", "validationRules", "visible", "visibleIndex", "width"], outputs: ["filterValueChange", "filterValuesChange", "groupIndexChange", "selectedFilterOperationChange", "sortIndexChange", "sortOrderChange", "visibleChange", "visibleIndexChange"] }, { kind: "component", type: i16$1.DxoHeaderFilterComponent, selector: "dxo-header-filter", inputs: ["allowSearch", "allowSelectAll", "dataSource", "groupInterval", "height", "search", "searchMode", "width", "searchTimeout", "texts", "visible", "showRelevantValues"] }, { kind: "component", type: i16$1.DxoExportComponent, selector: "dxo-export", inputs: ["backgroundColor", "enabled", "fileName", "formats", "margin", "printingEnabled", "svgToCanvas", "allowExportSelectedData", "texts"] }, { kind: "component", type: i16$1.DxoFilterBuilderPopupComponent, selector: "dxo-filter-builder-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "enableBodyScroll", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["heightChange", "positionChange", "visibleChange", "widthChange"] }, { kind: "component", type: i16$1.DxoFilterRowComponent, selector: "dxo-filter-row", inputs: ["applyFilter", "applyFilterText", "betweenEndText", "betweenStartText", "operationDescriptions", "resetOperationText", "showAllText", "showOperationChooser", "visible"] }, { kind: "component", type: i16$1.DxoLoadPanelComponent, selector: "dxo-load-panel", inputs: ["enabled", "height", "indicatorSrc", "shading", "shadingColor", "showIndicator", "showPane", "text", "width"] }, { kind: "component", type: i16$1.DxoPagerComponent, selector: "dxo-pager", inputs: ["allowedPageSizes", "displayMode", "infoText", "label", "showInfo", "showNavigationButtons", "showPageSizeSelector", "visible"] }, { kind: "component", type: i16$1.DxoPagingComponent, selector: "dxo-paging", inputs: ["enabled", "pageIndex", "pageSize"], outputs: ["pageIndexChange", "pageSizeChange"] }, { kind: "component", type: i16$1.DxoStateStoringComponent, selector: "dxo-state-storing", inputs: ["customLoad", "customSave", "enabled", "savingTimeout", "storageKey", "type"] }, { kind: "directive", type: i21.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { kind: "directive", type: i22.DynamicIoDirective, selector: "[ndcDynamicInputs],[ndcDynamicOutputs]", inputs: ["ndcDynamicInputs", "ndcDynamicOutputs"], exportAs: ["ndcDynamicIo"] }, { kind: "component", type: i22.DynamicComponent, selector: "ndc-dynamic", inputs: ["ndcDynamicComponent", "ndcDynamicInjector", "ndcDynamicProviders", "ndcDynamicContent", "ndcDynamicNgModuleRef", "ndcDynamicEnvironmentInjector"], outputs: ["ndcDynamicCreated"] }, { kind: "component", type: i23.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex", "selectOnFocus", "headerAriaLevel"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { kind: "component", type: i23.AccordionTab, selector: "p-accordionTab", inputs: ["id", "header", "headerStyle", "tabStyle", "contentStyle", "tabStyleClass", "headerStyleClass", "contentStyleClass", "disabled", "cache", "transitionOptions", "iconPos", "selected", "headerAriaLevel"], outputs: ["selectedChange"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i25.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "directive", type: i26.InputTextarea, selector: "[pInputTextarea]", inputs: ["autoResize"], outputs: ["onResize"] }, { kind: "pipe", type: i4.KeyValuePipe, name: "keyvalue" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-search', template: "<app-alert></app-alert>\r\n<div [class]=\"userAction === 'view' ? 'readOnlyCard' : ''\">\r\n  <div *ngIf=\"header\">\r\n    <table class=\"table table-bordered\" aria-describedby=\"border\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let item of titletab | keyvalue\">{{ item.key }}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td *ngFor=\"let item of titletab | keyvalue\">{{ item.value }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <p-accordion class=\"w-full dynamic-search\" [activeIndex]=\"1\" iconPos=\"endVal\"\r\n    *ngIf=\"dynamicSearch && dynamicSearch.length > 0\">\r\n    <p-accordionTab>\r\n      <ng-template pTemplate=\"header\">\r\n        <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n          <span class=\"font-bold\">Quick Search</span>\r\n        </span>\r\n      </ng-template>\r\n      <div class=\"d-flex my-2 row\">\r\n        <div class=\"col-12 text-md-right\">\r\n          <button type=\"button\" title=\"Add New\" pripple class=\"p-ripple p-element btn btn-primary btn-icon\"\r\n            (click)=\"addGridDynamicSearch()\">\r\n            <em class=\"pi pi-plus font-weight-bold\"></em>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"gridDynamicSearchForm\">\r\n        <ng-container formArrayName=\"dynamicSearchArray\">\r\n          <div *ngFor=\"let dynamicSearchItem of initDynamicSearch().controls; let dynamicSearchIndex = index\"\r\n            [formGroupName]=\"dynamicSearchIndex\">\r\n            <div class=\"row rbac-card\">\r\n              <div class=\"col-md-11 col-12 pr-0\">\r\n                <div class=\"row\">\r\n                  <!-- <div class=\"col-lg-3 col-md-6 col-12 mb-3\"> -->\r\n                  <!--   <label class=\"referral-form-labels\" for=\"tableList\">Table</label> -->\r\n                  <!--   <p-dropdown -->\r\n                  <!--     [options]=\"dynamicSearchItem.get('tableDropDown')?.value\" -->\r\n                  <!--     optionLabel=\"name\" -->\r\n                  <!--     optionValue=\"value\" -->\r\n                  <!--     id=\"tableList_{{ dynamicSearchIndex }}\" -->\r\n                  <!--     placeholder=\"Select Table\" -->\r\n                  <!--     formControlName=\"tableName\" -->\r\n                  <!--     tabindex=\"0\" -->\r\n                  <!--     styleClass=\"w-100\" -->\r\n                  <!--     (onChange)=\"getColumnList(dynamicSearchIndex, dynamicSearchItem.get('tableName')?.value)\"> -->\r\n                  <!--   </p-dropdown> -->\r\n                  <!--   <span -->\r\n                  <!--     class=\"text-danger error-text\" -->\r\n                  <!--     *ngIf=\" -->\r\n                  <!--       dynamicSearchItem.get('tableName')?.hasError('required') && -->\r\n                  <!--       dynamicSearchItem.get('tableName')?.touched -->\r\n                  <!--     \" -->\r\n                  <!--     >Please Select Table Name</span -->\r\n                  <!--   > -->\r\n                  <!-- </div> -->\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"columnList\">Column <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <p-dropdown [options]=\"dynamicSearchItem.get('columnDropDown')?.value\"\r\n                      id=\"columnList_{{ dynamicSearchIndex }}\" optionLabel=\"name\" optionValue=\"value\"\r\n                      placeholder=\"Select Column\" formControlName=\"columnName\" tabindex=\"0\" styleClass=\"w-100\"\r\n                      (onChange)=\"getConditionList(dynamicSearchIndex, dynamicSearchItem.get('columnName')?.value)\">\r\n                    </p-dropdown>\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('columnName')?.hasError('required') &&\r\n                        dynamicSearchItem.get('columnName')?.touched\r\n                      \">Please Select Column Name</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"conditionList\">Condition <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <p-dropdown [options]=\"dynamicSearchItem.get('conditionDropdown')?.value\"\r\n                      id=\"conditionList_{{ dynamicSearchIndex }}\" optionLabel=\"name\" optionValue=\"value\"\r\n                      placeholder=\"Select Condition\" formControlName=\"condition\" tabindex=\"0\" styleClass=\"w-100\"\r\n                      (onChange)=\"resetDynamicSearchValue(dynamicSearchIndex)\">\r\n                    </p-dropdown>\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('condition')?.hasError('required') &&\r\n                        dynamicSearchItem.get('condition')?.touched\r\n                      \">Please Select Condition</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"valueList\">Value <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <input type=\"text\" class=\"p-inputtext w-100\" id=\"valueList\" formControlName=\"value\"\r\n                      placeholder=\"\" />\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('value')?.hasError('required') && dynamicSearchItem.get('value')?.touched\r\n                      \">Please Fill Value</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels d-md-block d-none\" for=\"deleteDynamicSearch\">&#160;</label>\r\n                    <span class=\"material-symbols-outlined text-danger delete-icon\" role=\"button\"\r\n                      id=\"deleteDynamicSearch\" (click)=\"removeDynamicSearch(dynamicSearchIndex)\"\r\n                      title=\"Delete\">delete</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div\r\n                class=\"col-md-1 col-12 mb-3 text-md-center d-md-flex align-items-md-center justify-content-md-center flex-column\">\r\n                <label class=\"referral-form-labels d-md-block d-none\" for=\"deleteDynamicSearch\">&#160;</label>\r\n                <span class=\"material-symbols-outlined text-danger\" role=\"button\" id=\"deleteDynamicSearch\"\r\n                  (click)=\"removeDynamicSearch(dynamicSearchIndex)\" title=\"Delete\">delete</span>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeDynamicSearch()\">Delete</button>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"row d-flex flex-column align-self-end\">\r\n            <div class=\"col-md-12 text-md-right mt-2\">\r\n              <!-- <button\r\n                type=\"button\"\r\n                class=\"btn btn-primary\"\r\n                (click)=\"saveDynamicSearch()\"\r\n                [disabled]=\"saveButtonDisable\">\r\n                Save\r\n              </button> -->\r\n              <button type=\"button\" class=\"btn btn-cancel\" (click)=\"resetDynamicSearch()\">Clear</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitDynamicSearch()\"\r\n                [disabled]=\"saveButtonDisable\">Search</button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n    </p-accordionTab>\r\n  </p-accordion>\r\n  <div class=\"page-wrp mt-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <!-- <div *ngIf=\"true\">\r\n          <div class=\"d-flex\" [formGroup]=\"filterForm\" *ngIf=\"gridType !== 'view'\">\r\n            <div class=\"col-md-12\">\r\n              <p-multiSelect [options]=\"filterOptions\" styleClass=\"filterOptions\" [group]=\"true\"\r\n                selectedItemsLabel=\"{0} items selected\" defaultLabel=\"Select\" optionLabel=\"label\" optionValue=\"id\"\r\n                id=\"filteroptions\" ariaFilterLabel=\"searchbox\" formControlName=\"selectedFilter\"\r\n                (onChange)=\"changeFilterOptions($event)\">\r\n                <ng-template let-group pTemplate=\"group\">\r\n                  <div class=\"flex align-items-center\">\r\n                    <span>{{ group.columnName }}</span>\r\n                  </div>\r\n                </ng-template>\r\n              </p-multiSelect>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <button *ngIf=\"gridType === 'view'\" type=\"button\" class=\"btn btn-cancel mb-3\" (click)=\"goBack()\">Back</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-right\">\r\n        <div class=\"d-flex justify-content-between align-items-center col-12\" *ngIf=\"getTitle(updateGrid?.gridTitle)\">\r\n          <h6 class=\"font-weight-bold mb-0\"></h6>\r\n\r\n          <div class=\"d-flex inmate-btn-align\">\r\n            <button class=\"btn-print my-2\" [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\"\r\n              *ngIf=\"showExport\">\r\n              <img class=\"export\" src=\"../../../assets/images/svg/Export_Icon.svg\" alt=\"export\" />\r\n            </button>\r\n            <mat-menu class=\"d-inline-block my-2\" #menu=\"matMenu\" *ngIf=\"showExport\">\r\n              <button mat-menu-item (click)=\"onClose()\" *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n                <mat-icon>{{ icon }}</mat-icon>{{ openclose }} Slidebar\r\n              </button>\r\n              <button mat-menu-item (click)=\"reset('excel')\"><mat-icon>grid_on</mat-icon> Export to Excel</button>\r\n              <button mat-menu-item (click)=\"reset('pdf')\"><mat-icon>picture_as_pdf</mat-icon> Export to PDF</button>\r\n              <button mat-menu-item (click)=\"reset('print')\"><mat-icon>print</mat-icon> Print</button>\r\n              <button mat-menu-item (click)=\"reset(pageType)\" *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n                <mat-icon>reset_tv</mat-icon> Reset Search Criteria\r\n              </button>\r\n              <button *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\" mat-menu-item\r\n                [matMenuTriggerFor]=\"searchCriteriaList\" #searchcriteriamenutrigger=\"matMenuTrigger\">\r\n                <mat-icon>add_circle_outline</mat-icon> Save Search Criteria\r\n              </button>\r\n            </mat-menu>\r\n            <div [ngClass]=\"updateGrid && updateGrid?.chooser ? 'd-inline-block add-btn-right' : 'd-inline-block'\">\r\n              <!--Add Button, Column chooser button are replacing eachother when its selected-->\r\n              <button class=\"btn-icon-bg d-inline-block pull-right text-right ml-1 my-2\"\r\n                *ngIf=\"showGridPage && item && updateGrid?.isInitialFormLoad\" (click)=\"closeForm()\">\r\n                <em class=\"fa fa-times\"></em>\r\n              </button>\r\n              <div *ngIf=\"\r\n                  updateGrid?.gridActionFormArray !== null &&\r\n                  updateGrid?.gridActionFormArray !== undefined &&\r\n                  updateGrid?.gridActionFormArray &&\r\n                  updateGrid?.gridActionFormArray?.length\r\n                \" class=\"update-grid-action-button-container\">\r\n                <ng-container *ngFor=\"let item of updateGrid?.gridActionFormArray; let i = index\">\r\n                  <ng-container *ngIf=\"!(updateGrid?.isShowOnTop && item?.action?.toLowerCase() === 'add')\">\r\n                    <button *ngIf=\"item?.icon && item.isOutsideGrid && !item.hide\" class=\"btn btn-primary mt-2\"\r\n                      (click)=\"getOutsideGridAction(item)\">\r\n                      <em [class]=\"item.icon\"></em><span class=\"ml-2\" *ngIf=\"!!item.name\">{{ item.name }}</span>\r\n                    </button>\r\n                    <ng-container *ngIf=\"item?.icon && item.isOutsideGrid && item.type === 'Ocr Scan'\">\r\n                      <label for=\"file\" class=\"btn btn-primary mt-2\">\r\n                        <em [class]=\"item.icon\"></em><span class=\"ml-2\" *ngIf=\"!!item.name\">{{ item.name }}</span>\r\n                      </label>\r\n                      <input type=\"file\" (change)=\"uploadDocument(item, $event)\" id=\"file\" aria-hidden=\"true\"\r\n                        style=\"visibility: hidden; display: none\" />\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"updateGrid && updateGrid?.chooser\" class=\"col-custom my-2\">\r\n              <button class=\"btn btn-primary btn-icon ml-1\" (click)=\"columnChooserClick()\">\r\n                <em class=\"fa fa-columns\" aria-hidden=\"true\"></em>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <button *ngIf=\"isAddButton\" type=\"button\" class=\"btn btn-primary my-2\" (click)=\"redirect()\">Add</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-menu #searchCriteriaList=\"matMenu\" class=\"searchlist\">\r\n      <div class=\"row col-sm-12 mt-4\" (click)=\"$event.stopPropagation()\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"searchCriteria\" placeholder=\"Search Criteria\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-2 mt-2\">\r\n          <button class=\"btn btn-pri\" [disabled]=\"!searchCriteria\" (click)=\"saveSearchCriteria()\">Save</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12\">\r\n        <table aria-describedby=\"Search_Criteria\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Search Criteria</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"totalcount\">\r\n            <tr *ngFor=\"let sc of searchCriteriaArr\">\r\n              <td>\r\n                <mat-icon>search</mat-icon>\r\n                <a href=\"javascript:void(0)\" (click)=\"setSearch(sc.data)\">{{ sc.data.searchCriteria }}</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-menu>\r\n    <div class=\"split-page\">\r\n      <as-split unit=\"percent\" useTransition=\"true\" direction=\"{{ layouttype }}\">\r\n        <as-split-area size=\"{{ spliterSize }}\">\r\n          <div *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n                  (customEvent)=\"customEvent($event)\"></formio>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </as-split-area>\r\n        <as-split-area size=\"{{ gridspliterSize }}\">\r\n          <div class=\"row\" *ngIf=\"\r\n              ((updateGrid?.isInitialFormLoad !== undefined &&\r\n                updateGrid?.isInitialFormLoad !== null &&\r\n                updateGrid?.isInitialFormLoad) ||\r\n                (updateGrid?.isShowOnTop !== undefined &&\r\n                  updateGrid?.isShowOnTop !== null &&\r\n                  updateGrid?.isShowOnTop)) &&\r\n              item\r\n            \">\r\n            <div class=\"col-12\">\r\n              <ndc-dynamic class=\"no-drag\" [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item\"\r\n                [ndcDynamicOutputs]=\"item?.outputs\"></ndc-dynamic>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"row\" *ngIf=\"showGridPage\">\r\n              <div class=\"col-lg-12 gridview\">\r\n                <div class=\"card mb-2\">\r\n                  <div class=\"card-body {{ getTitleClass(fromTitle) }}\">\r\n\r\n                    <!-- [remoteOperations]=\"{ filtering: true, sorting: true, paging: true }\"  Removed server filtering-->\r\n                    <dx-data-grid [dataSource]=\"dataSource\" [columnMinWidth]=\"100\" [width]=\"'100%'\" [filterSyncEnabled]=\"true\" #dataGrid\r\n                      [columnResizingMode]=\"'widget'\" [allowColumnReordering]=\"true\" [allowColumnResizing]=\"true\"\r\n                      [columnAutoWidth]=\"true\" (onContentReady)=\"contentReady($event)\"\r\n                      (onCellPrepared)=\"onCellPrepared($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n                      (onCellClick)=\"onCellClick($event)\" (onExporting)=\"onExporting($event)\" [showBorders]=\"true\"\r\n                      [rowAlternationEnabled]=\"true\" [showColumnLines]=\"true\" [showRowLines]=\"true\">\r\n                      <dxo-selection [selectAllMode]=\"allMode\" [showCheckBoxesMode]=\"checkBoxesMode\"\r\n                        [mode]=\"getGridSelection(updateGrid?.gridSelection)\"></dxo-selection>\r\n                      <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n                      <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n                      <dxo-filter-row [visible]=\"showFilterRowPanel\"></dxo-filter-row>\r\n                      <dxo-state-storing [enabled]=\"true\" type=\"custom\" [customSave]=\"customSave\"\r\n                        [customLoad]=\"customLoad\"></dxo-state-storing>\r\n\r\n                      <dxo-column-chooser [enabled]=\"true\" mode=\"select\">\r\n                        <dxo-position my=\"right top\" at=\"right top\" of=\".dx-datagrid-column-chooser-button\">\r\n                        </dxo-position>\r\n                      </dxo-column-chooser>\r\n\r\n                      <!--Grid - Footer filter removed -->\r\n                      <dxo-paging [pageSize]=currentPageSize></dxo-paging>\r\n                      <dxo-pager [visible]=\"true\" [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n                        [displayMode]=\"displayMode\" [showInfo]=\"true\" [showNavigationButtons]=\"true\"></dxo-pager>\r\n                      <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n                      <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n                      <ng-container *ngFor=\"let column of columns; let i = index\">\r\n                        <ng-container *ngIf=\"column?.hide !== true\">\r\n                          <ng-container *ngIf=\"column?.link; else noLink\">\r\n                            <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                              [allowHiding]=\"!column?.Choosable\" [fixed]=\"column?.fixed\" [dataField]=\"column?.columnDef\"\r\n                              [caption]=\"column?.header\" [allowFiltering]=\"column?.filter\" cellTemplate=\"cellTemplate\"\r\n                              [allowSorting]=\"column?.sort\" [width]=\"column?.width\"\r\n                              [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\" [sortOrder]=\"column?.sortOrder\"\r\n                              [sortIndex]=\"column?.sortIndex\">\r\n                            </dxi-column>\r\n                          </ng-container>\r\n                          <ng-template #noLink>\r\n                            <ng-container *ngIf=\"column?.icon; else noShowmore\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"iconTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\"\r\n                                [sortOrder]=\"column?.sortOrder\" [sortIndex]=\"column?.sortIndex\">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noShowmore>\r\n                            <ng-container *ngIf=\"column?.showmore; else noIcon\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"showmoreTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\"\r\n                                [sortOrder]=\"column?.sortOrder\" [sortIndex]=\"column?.sortIndex\">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noIcon>\r\n                            <ng-container *ngIf=\"column?.dateFormat; else noDate\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                *ngIf=\"column?.dateFormat === 'date' || column?.dateFormat === 'datetime'\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" dataType=\"date\"\r\n                                [format]=\"getDateFormat(column?.dateFormat)\" [allowSorting]=\"column?.sort\"\r\n                                [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\" [sortOrder]=\"column?.sortOrder\"\r\n                                [sortIndex]=\"column?.sortIndex\">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noDate>\r\n                            <ng-container *ngIf=\"column?.header.toLowerCase().trim() === 'status'; else noStatus\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"statusTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\"\r\n                                [sortOrder]=\"column?.sortOrder\" [sortIndex]=\"column?.sortIndex\">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noStatus>\r\n                            <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                              [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                              [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                              [allowFiltering]=\"column?.filter\" cellTemplate=\"dataTemplate\"\r\n                              [allowSorting]=\"column?.sort\" [filterValues]=\"column?.filterValues\" [filterValue]=\"column?.filterValue\"\r\n                              [sortOrder]=\"column?.sortOrder\" [sortIndex]=\"column?.sortIndex\">\r\n                            </dxi-column>\r\n                          </ng-template>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"showGridActions(updateGrid, showActionColumn, gridType)\">\r\n                        <dxi-column [width]=\"120\" [allowFiltering]=\"false\" [showInColumnChooser]=\"false\"\r\n                          [allowSorting]=\"false\" caption=\"Action\" cellTemplate=\"editCellTemplate\">\r\n                        </dxi-column>\r\n                      </ng-container>\r\n                      <div *dxTemplate=\"let d of 'cellTemplate'\" class=\"dashboard-hover\">\r\n                        <a *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d, item)\">{{ d.value !== 'null' ?\r\n                          d.value : '' }}\r\n                          <span *ngIf=\"showIcon(d)\"></span>\r\n                        </a>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n                        <span *ngFor=\"let item of d.data.rbacConditions; let i = index\">\r\n                          <em *ngIf=\"item.action !== 'add'\" [class]=\"item.icon\" (click)=\"popup(d?.key, item)\"></em>\r\n                        </span>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'showmoreTemplate'\" class=\"description-container\">\r\n                          <span>{{ toggleShowMore(d.value, d.column?.dataField) }}</span>\r\n                          <a class=\"toggle-link\" *ngIf=\"d.value.length > truncateTextValue\" (click)=\"toggleShowMoreState(d.value, d.column?.dataField)\">\r\n                            {{ showMoreText[getToggleKey(d.value, d.column?.dataField)] ? 'Show Less' : 'Show More' }}\r\n                          </a>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'editCellTemplate'\">\r\n                        <span *ngFor=\"let item of d.data.rbacConditions; let i = index\">\r\n                          <!-- Tooltip for deleted row -->\r\n                          <a *ngIf=\"\r\n                          item?.action === 'info'\"\r\n                            class=\"no-bg\"\r\n                            [matTooltip]=\"'Delete Status: Pending\\n' + item?.message\"\r\n                            [matTooltipPosition]=\"'left'\"\r\n                            [matTooltipShowDelay]=\"100\"\r\n                            [matTooltipHideDelay]=\"100\"\r\n                            [matTooltipClass]=\"'custom-tooltip-class'\">\r\n                            <em [class]=\"item.icon\"></em>\r\n                          </a>\r\n                          <a *ngIf=\"\r\n                                item?.icon &&\r\n                                item?.action !== 'info' &&\r\n                                !item.isOutsideGrid &&\r\n                                d?.data?.status !== 'Closed' &&\r\n                                item.action !== 'changepathway' &&\r\n                                !item?.hide;\r\n                              else changepathway\r\n                            \" class=\"no-bg\" matTooltip=\"{{ titleCaseToolTip(item?.action) }}\"\r\n                            (click)=\"getInsideGridAction(d, item)\">\r\n                            <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                          </a>\r\n\r\n                          <ng-template #changepathway>\r\n                            <a *ngIf=\"item.action === 'changepathway' && d?.rowIndex === 0\" class=\"no-bg\"\r\n                              matTooltip=\"{{ item?.action }}\" (click)=\"getInsideGridAction(d, item)\">\r\n                              <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                            </a>\r\n                          </ng-template>\r\n                        </span>\r\n                        <a *ngIf=\"updateGrid?.gridActionFormArray?.icon\" class=\"no-bg\" matTooltip=\"Open\"\r\n                          (click)=\"openLink(d)\">\r\n                          <em class=\"fa fa-external-link\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.edit\" class=\"no-bg\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                          <em class=\"fa fa-pencil\" title=\"Edit\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.view\" class=\"no-bg\" matTooltip=\"View\" (click)=\"viewData(d)\">\r\n                          <em class=\"fa fa-eye\" title=\"View\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.delete\" class=\"no-bg text-danger\" matTooltip=\"Delete\"\r\n                          (click)=\"deleteData(d)\">\r\n                          <em class=\"fa fa-trash\"></em>\r\n                        </a>\r\n                        <button *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                          <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\"\r\n                            class=\"fa fa-toggle-on\"></em>\r\n                          <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\"\r\n                            class=\"fa fa-toggle-off\"></em>\r\n                        </button>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'statusTemplate'\" [class]=\"changeStatusColor(d.value)\">\r\n                        <span>{{ d.value }}</span>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'dataTemplate'\"\r\n                        [ngClass]=\"{ 'dashboard-hover-contact': d.column?.dataField === 'servicename' }\">\r\n                        <div class=\"d-inline-block\" *ngIf=\"\r\n                            d.column?.dataField === 'clientaccountno' &&\r\n                            d.data.accountstatus &&\r\n                            d.data.accountstatus === 'INA'\r\n                          \">\r\n                          <em class=\"fa fa-warning red-color\"></em>\r\n                        </div>\r\n                        <div *ngIf=\"d.column?.dataField === 'servicename'\">\r\n                          <div class=\"arrow-right\" *ngIf=\"d.data.narrative\">\r\n                            <div class=\"person-details\">\r\n                              <p><span>Narrative</span><span [innerHtml]=\"splitingData(d, '.')\"></span></p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"d.column?.dataField === 'narrative'; else dataValue\">\r\n                          {{ d.value }}\r\n                        </div>\r\n                        <ng-template #dataValue>{{ d.value }}</ng-template>\r\n                      </div>\r\n                    </dx-data-grid>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </as-split-area>\r\n      </as-split>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #callDialogPopup>\r\n  <h2 matDialogTitle>Narrative</h2>\r\n  <div [innerHTML]=\"popupData\"></div>\r\n  <div class=\"text-right\">\r\n    <button mat-button (click)=\"closeDialogPopup()\" class=\"btn btn-cancel mr-2\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<app-dynamic-details *ngIf=\"openTab\" [key]=\"selectedRowData\"></app-dynamic-details>\r\n\r\n<ng-template #DeleteGridList>\r\n  <div class=\"p-3\">\r\n    <div class=\"clearfix mb-2\">{{ DefaultDeletePopupTextAftThresholdTime }}</div>\r\n    <div class=\"mb-2\">\r\n      <label for=\"reasonfordelete\" class=\"intake-form-labels clearfix mb-2\">Reason for record deletion <span\r\n          class=\"text-danger\">*</span></label>\r\n      <textarea rows=\"3\" id=\"reasonfordelete\" cols=\"30\" pInputTextarea\r\n        placeholder=\"Reason for deletion (4000 character limit)\" maxlength=\"4000\" class=\"form-control no-resize\"\r\n        [(ngModel)]=\"enteredReason\" (input)=\"checkIsDisabled($event.target.value)\"></textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-right pr-3\">\r\n    <button class=\"pull-right btn btn-primary delete mb-3\" (click)=\"deleteRecordWithReason()\"\r\n      [disabled]=\"isDisabled\">Yes</button>\r\n    <button class=\"pull-right mr-2 mb-3 btn bg-white text-primary btncancel\" (click)=\"cancelPopup()\">No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #DeleteGridListWithoutReason>\r\n  <div class=\"p-3\">\r\n    <div class=\"clearfix mb-2\">{{ deletePopupText }}</div>\r\n  </div>\r\n  <div class=\"text-right pr-3\">\r\n    <button class=\"pull-right btn btn-primary delete mb-3\" (click)=\"deleteRecordWithoutReason()\">Yes</button>\r\n    <button class=\"pull-right mr-2 mb-3 btn bg-white text-primary btncancel\" (click)=\"cancelPopup()\">No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #ApproveDeleteGridList>\r\n  <div class=\"p-3\">\r\n    <div class=\"clearfix mb-4\">{{this.deletedReason}}</div>\r\n    <!-- <div class=\"clearfix mb-4\">Do you approve this deletion?</div> -->\r\n  </div>\r\n  <div class=\"text-right pr-3\">\r\n    <button class=\"pull-right mb-2 btn btn-primary delete\" data-dismiss=\"modal\"\r\n      (click)=\"deleteRecordWithoutReason()\">Yes</button>\r\n    <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n      (click)=\"cancelPopup()\">No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"modal\" id=\"confirmGridAction\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p>{{ businessRuleMessage }}</p>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"confirmGridAction()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">No</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".split-page{outline:3px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.card-title{position:absolute;left:15px;font-size:bold}.red-color{color:#ff6252}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding-bottom:2px!important;text-align:center!important;font-family:Roboto,sans-serif!important}.dx-datagrid-rowsview .dx-row{height:40px!important;font-size:var(--base-font-size)}.dx-datagrid-rowsview .dx-row.dx-row-lines>td{vertical-align:middle!important;overflow:unset;padding-left:6px!important;padding-right:6px!important}.card{box-shadow:none!important;border:none!important}.card-header{padding-left:0;background:#eff8ff;height:auto}.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child,.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child>td,.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child>tr>td{overflow:unset!important}.dashboard-hover{position:relative}.dashboard-hover:hover .arrow-right{display:block;z-index:1}.dashboard-hover .person-details{display:inline-block;width:100%}.dashboard-hover .person-details p{margin:0}.dashboard-hover .person-details p span:first-child{width:95px;display:inline-block;vertical-align:top}.dashboard-hover .person-details p span:last-child{width:160px;word-break:break-word;display:inline-flex;overflow:hidden;white-space:normal}.dashboard-hover .person-details p span:last-child:before{content:\":\";padding-right:5px}.dashboard-hover .arrow-right{width:280px;min-height:95px;background-color:var(--bg-light);color:var(--text-dark);padding:10px;position:absolute;float:left;display:none;top:-13px;left:88px;border:1px solid var(--table-border);border-radius:6px}.dashboard-hover .arrow-right:after{content:\" \";position:absolute;margin:auto;top:13px;left:-101%;right:0;background:#fff;width:20px;height:20px;transform:rotate(45deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-right:1px solid var(--table-border);border-bottom:1px solid var(--table-border)}.dashboard-hover-contact{position:relative}.dashboard-hover-contact:hover .arrow-right{display:block;z-index:1}.dashboard-hover-contact .person-details{display:inline-block;width:100%}.dashboard-hover-contact .person-details p{margin:0}.dashboard-hover-contact .person-details p span:first-child{width:95px;display:inline-block;vertical-align:top;word-break:break-word;white-space:normal}.dashboard-hover-contact .person-details p span:last-child{width:135px;word-break:break-word;display:inline-flex;overflow:hidden;white-space:normal;text-align:left}.dashboard-hover-contact .person-details p span:last-child:before{content:\":\";padding-right:5px}.dashboard-hover-contact .arrow-right{width:280px;min-height:50px;background-color:var(--bg-light);color:var(--text-dark);padding:10px;position:absolute;float:left;display:none;top:-13px;left:88px;border:1px solid var(--table-border);border-radius:6px}.dashboard-hover-contact .arrow-right:after{content:\" \";position:absolute;margin:auto;top:13px;left:-101%;right:0;background:#fff;width:20px;height:20px;transform:rotate(45deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-right:1px solid var(--table-border);border-bottom:1px solid var(--table-border)}.open{color:#ff6252;border-radius:6px;font-weight:500;padding:5px!important;vertical-align:middle;min-width:85px;max-width:100%}.draft,.returned{color:red;border-radius:6px;font-weight:500;padding:5px!important;vertical-align:middle;min-width:85px;max-width:100%}.closed,.completed,.approved{color:#2ecd53;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.orange{color:orange;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.blue{color:#2c2863;border-radius:6px;font-weight:700;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.pending{color:#e29866;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.pending-approval{color:orange;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.readOnlyCard{pointer-events:none!important;opacity:.7!important}.page-wrp{background:var(--bg-light)}.page-wrp h6{color:var(--text-dark)}:host ::ng-deep .as-split-gutter{background:var(--table-header)!important}.title{font-weight:700;font-size:17px;text-transform:capitalize;color:#2c2863}.col-custom .btn-icon-bg{padding:5px 8px!important}:host ::ng-deep .split-page .card-body{padding:0 15px!important}:host ::ng-deep .filterOptions{width:250px}:host ::ng-deep .p-multiselect-items{font-size:12px}:host ::ng-deep .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext{padding:.2rem .5rem}:host ::ng-deep .dashboard-hover a{color:var(--interactive-color)!important;cursor:pointer}:host ::ng-deep .dx-datagrid .dx-column-indicators{position:relative;right:1px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-column-chooser{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-checkbox-icon{border:1px solid var(--bg-light)!important}:host ::ng-deep .dx-datagrid .business-group .dx-template-wrapper,:host ::ng-deep .dx-datagrid .business-group .business-alert{display:inline-flex}:host ::ng-deep .dynamic-search .p-component .p-accordion-toggle-icon{margin-top:-8px;position:absolute;right:.5em;top:50%;font-size:var(--font-13);color:var(--primary)}:host ::ng-deep .dynamic-search .p-component .head-text span{color:var(--primary)}:host ::ng-deep .dynamic-search .error-text{font-size:var(--font-12)}:host ::ng-deep .as-vertical .as-split-gutter{display:none!important}.no-resize{resize:none}:host ::ng-deep .custom-mat-tooltip{width:150px;font-size:var(--font-14)}:host ::ng-deep .mdc-tooltip__surface-animation{will-change:auto!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: i0.ChangeDetectorRef }, { type: i2.UntypedFormBuilder }, { type: FormioService }, { type: LocalStorageService }, { type: i2.UntypedFormBuilder }, { type: i3$1.Store }, { type: PlatformDataStoreService }, { type: SharedService }, { type: ConfigService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; }, propDecorators: { searchcriteriamenutrigger: [{
                type: ViewChild,
                args: ['searchcriteriamenutrigger']
            }], dataGrid: [{
                type: ViewChild,
                args: [DxDataGridComponent, { static: false }]
            }], formId: [{
                type: Input
            }], pageId: [{
                type: Input
            }], callDialogPopup: [{
                type: ViewChild,
                args: ['callDialogPopup']
            }], outerRouting: [{
                type: Output
            }], formIO: [{
                type: ViewChild,
                args: ['formIO']
            }], filterOptionsDropdown: [{
                type: ViewChild,
                args: [MultiSelect]
            }], componentId: [{
                type: Input
            }], DeleteGridList: [{
                type: ViewChild,
                args: ['DeleteGridList']
            }], DeleteGridListWithoutReason: [{
                type: ViewChild,
                args: ['DeleteGridListWithoutReason']
            }], ApproveDeleteGridList: [{
                type: ViewChild,
                args: ['ApproveDeleteGridList']
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

class MaterialUIModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule], exports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule, CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatIconModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatStepperModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatSortModule,
                        MatTableModule,
                        MatFormFieldModule
                    ],
                    exports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatIconModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatStepperModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatSortModule,
                        MatTableModule,
                        MatFormFieldModule
                    ]
                }]
        }] });

class Order {
    ID;
    OrderNumber;
    OrderDate;
    SaleAmount;
    Terms;
    CustomerInfo;
    Employee;
}
const ORDER_DATE = '2014/04/10';
const STORE_CITY = 'Los Angeles';
const EMPLOYEE_JIM = 'Jim Packard';
const EMPLOYEE_TODD = 'Todd Hoffman';
const EMPLOYEE_CLARK = 'Clark Morgan';
const SALT_LAKE_CITY = 'Salt Lake City';
const orders = [
    {
        ID: 1,
        OrderNumber: 35703,
        OrderDate: ORDER_DATE,
        SaleAmount: 11800,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 4,
        OrderNumber: 35711,
        OrderDate: '2014/01/12',
        SaleAmount: 16050,
        Terms: '15 Days',
        Employee: EMPLOYEE_JIM,
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Jose'
        }
    },
    {
        ID: 5,
        OrderNumber: 35714,
        OrderDate: '2014/01/22',
        SaleAmount: 14750,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 7,
        OrderNumber: 35983,
        OrderDate: '2014/02/07',
        SaleAmount: 3725,
        Terms: '15 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Colorado',
            StoreCity: 'Denver'
        }
    },
    {
        ID: 9,
        OrderNumber: 36987,
        OrderDate: '2014/03/11',
        SaleAmount: 14200,
        Terms: '15 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 11,
        OrderNumber: 38466,
        OrderDate: '2014/03/01',
        SaleAmount: 7800,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 14,
        OrderNumber: 39420,
        OrderDate: '2014/02/15',
        SaleAmount: 20500,
        Terms: '15 Days',
        Employee: EMPLOYEE_JIM,
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Jose'
        }
    },
    {
        ID: 15,
        OrderNumber: 39874,
        OrderDate: '2014/02/04',
        SaleAmount: 9050,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 18,
        OrderNumber: 42847,
        OrderDate: '2014/02/15',
        SaleAmount: 20400,
        Terms: '30 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Wyoming',
            StoreCity: 'Casper'
        }
    },
    {
        ID: 19,
        OrderNumber: 43982,
        OrderDate: '2014/05/29',
        SaleAmount: 6050,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 29,
        OrderNumber: 56272,
        OrderDate: '2014/02/06',
        SaleAmount: 15850,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 30,
        OrderNumber: 57429,
        OrderDate: '2014/05/16',
        SaleAmount: 11050,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Arizona',
            StoreCity: 'Phoenix'
        }
    },
    {
        ID: 32,
        OrderNumber: 58292,
        OrderDate: '2014/05/13',
        SaleAmount: 13500,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 36,
        OrderNumber: 62427,
        OrderDate: '2014/01/27',
        SaleAmount: 23500,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 39,
        OrderNumber: 65977,
        OrderDate: '2014/02/05',
        SaleAmount: 2550,
        Terms: '15 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Wyoming',
            StoreCity: 'Casper'
        }
    },
    {
        ID: 40,
        OrderNumber: 66947,
        OrderDate: '2014/03/23',
        SaleAmount: 3500,
        Terms: '15 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 42,
        OrderNumber: 68428,
        OrderDate: ORDER_DATE,
        SaleAmount: 10500,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 43,
        OrderNumber: 69477,
        OrderDate: '2014/03/09',
        SaleAmount: 14200,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'Anaheim'
        }
    },
    {
        ID: 46,
        OrderNumber: 72947,
        OrderDate: '2014/01/14',
        SaleAmount: 13350,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 47,
        OrderNumber: 73088,
        OrderDate: '2014/03/25',
        SaleAmount: 8600,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Reno'
        }
    },
    {
        ID: 50,
        OrderNumber: 76927,
        OrderDate: '2014/04/27',
        SaleAmount: 9800,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 51,
        OrderNumber: 77297,
        OrderDate: '2014/04/30',
        SaleAmount: 10850,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Arizona',
            StoreCity: 'Phoenix'
        }
    },
    {
        ID: 56,
        OrderNumber: 84744,
        OrderDate: '2014/02/10',
        SaleAmount: 4650,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 57,
        OrderNumber: 85028,
        OrderDate: '2014/05/17',
        SaleAmount: 2575,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Reno'
        }
    },
    {
        ID: 59,
        OrderNumber: 87297,
        OrderDate: '2014/04/21',
        SaleAmount: 14200,
        Terms: '30 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Wyoming',
            StoreCity: 'Casper'
        }
    },
    {
        ID: 60,
        OrderNumber: 88027,
        OrderDate: '2014/02/14',
        SaleAmount: 13650,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 65,
        OrderNumber: 94726,
        OrderDate: '2014/05/22',
        SaleAmount: 20500,
        Terms: '15 Days',
        Employee: EMPLOYEE_JIM,
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Jose'
        }
    },
    {
        ID: 66,
        OrderNumber: 95266,
        OrderDate: '2014/03/10',
        SaleAmount: 9050,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 69,
        OrderNumber: 98477,
        OrderDate: '2014/01/01',
        SaleAmount: 23500,
        Terms: '15 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Wyoming',
            StoreCity: 'Casper'
        }
    },
    {
        ID: 70,
        OrderNumber: 99247,
        OrderDate: '2014/02/08',
        SaleAmount: 2100,
        Terms: '15 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 78,
        OrderNumber: 174884,
        OrderDate: ORDER_DATE,
        SaleAmount: 7200,
        Terms: '30 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Colorado',
            StoreCity: 'Denver'
        }
    },
    {
        ID: 81,
        OrderNumber: 188877,
        OrderDate: '2014/02/11',
        SaleAmount: 8750,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Arizona',
            StoreCity: 'Phoenix'
        }
    },
    {
        ID: 82,
        OrderNumber: 191883,
        OrderDate: '2014/02/05',
        SaleAmount: 9900,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 83,
        OrderNumber: 192474,
        OrderDate: '2014/01/21',
        SaleAmount: 12800,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'Anaheim'
        }
    },
    {
        ID: 84,
        OrderNumber: 193847,
        OrderDate: '2014/03/21',
        SaleAmount: 14100,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Diego'
        }
    },
    {
        ID: 85,
        OrderNumber: 194877,
        OrderDate: '2014/03/06',
        SaleAmount: 4750,
        Terms: '30 Days',
        Employee: EMPLOYEE_JIM,
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Jose'
        }
    },
    {
        ID: 86,
        OrderNumber: 195746,
        OrderDate: '2014/05/26',
        SaleAmount: 9050,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 87,
        OrderNumber: 197474,
        OrderDate: '2014/03/02',
        SaleAmount: 6400,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Reno'
        }
    },
    {
        ID: 88,
        OrderNumber: 198746,
        OrderDate: '2014/05/09',
        SaleAmount: 15700,
        Terms: '30 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Colorado',
            StoreCity: 'Denver'
        }
    },
    {
        ID: 91,
        OrderNumber: 214222,
        OrderDate: '2014/02/08',
        SaleAmount: 11050,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Arizona',
            StoreCity: 'Phoenix'
        }
    }
];
class GridListService {
    getOrders() {
        return orders;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class AppService {
    router;
    currentState = new Subject();
    currentValue = new BehaviorSubject({});
    getValue = this.currentValue.asObservable();
    excludedUrl = ['/login', '/registration/', '/forgot-password', 'change-password'];
    previousUrl;
    constructor(router) {
        this.router = router;
        this.router.events
            .pipe(filter((evt) => evt instanceof RoutesRecognized), pairwise())
            .subscribe((events) => {
            this.previousUrl = events[0].urlAfterRedirects;
        });
    }
    addValue(key, value) {
        this.currentState.next({ key, value });
    }
    setValue(key, value) {
        this.currentValue.next({ key, value });
    }
    canNavigateBack() {
        return this.previousUrl && !this.excludedUrl.some((url) => this.previousUrl.startsWith(url));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

class PermissionDirective {
    renderer;
    elementRef;
    dataStore;
    fieldKey;
    permissions;
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.href = 'javascript:void(0);';
                        r['disabled'] = true;
                        r.className = template.className;
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else if (template.tagName === 'P-MULTISELECT' ||
                    template.tagName === 'P-DROPDOWN' ||
                    template.tagName === 'P-CHECKBOX' ||
                    template.tagName === 'P-TREESELECT' ||
                    template.tagName === 'P-RADIOBUTTON' ||
                    template.tagName === 'P-CALENDAR') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore$1 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore$1 }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class ShowFieldDirective {
    templateRef;
    viewContainer;
    dataStore;
    showField;
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PermissionStore$1 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PermissionStore$1 }]; }, propDecorators: { showField: [{
                type: Input
            }] } });

class SafeHtmlPipe {
    sanitized;
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SafeHtmlPipe, deps: [{ token: i1$3.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SafeHtmlPipe, name: "safeHtml" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SafeHtmlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'safeHtml'
                }]
        }], ctorParameters: function () { return [{ type: i1$3.DomSanitizer }]; } });

const SELECT_ALL = 'Select-ALL';
class GridListComponent {
    router;
    auth;
    localstorage;
    storageService;
    appService;
    _storeservice;
    renderer;
    alertService;
    dataGrid;
    contentWrappers;
    dataList;
    dataSource;
    columns;
    updateGrid;
    totalCount;
    page;
    isShow;
    exportPageName;
    remoteOperations;
    currentPage = new EventEmitter();
    editTableRow = new EventEmitter();
    viewTableRow = new EventEmitter();
    deleteTableRow = new EventEmitter();
    openExternalLink = new EventEmitter();
    openpopupLink = new EventEmitter();
    routeTo = new EventEmitter();
    openPopup = new EventEmitter();
    sortOrder = new EventEmitter();
    filterSearchValue = new EventEmitter();
    filterBuilderPopup = new EventEmitter();
    filterPanel = new EventEmitter();
    multipleFilterValues = new EventEmitter();
    downloadTableRow = new EventEmitter();
    rowSelection = new EventEmitter();
    toggleRow = new EventEmitter();
    duplicateRow = new EventEmitter();
    viewVersions = new EventEmitter();
    activateVersion = new EventEmitter();
    activatePage = new EventEmitter();
    deactivatePage = new EventEmitter();
    duplicatePageVersion = new EventEmitter();
    selectedRowsData = new EventEmitter();
    orgList;
    dataField;
    columnHeader;
    popupPosition;
    filterValue;
    customOperations;
    fields;
    customStore;
    tempColumns;
    Organization;
    dUrl;
    rdUrl;
    rUrl;
    user;
    userId;
    tempList;
    showVersions;
    displayMode;
    registrationInfo;
    activepagename;
    url;
    oldUrl;
    httpService;
    mainNotificationService;
    sharedService;
    constructor(
    // private dialog: MatDialog,
    router, auth, localstorage, storageService, appService, _storeservice, renderer, alertService) {
        this.router = router;
        this.auth = auth;
        this.localstorage = localstorage;
        this.storageService = storageService;
        this.appService = appService;
        this._storeservice = _storeservice;
        this.renderer = renderer;
        this.alertService = alertService;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
                this.mainNotificationService = res['NOTIFICATIONSERVICE'];
                this.sharedService = res['SHAREDSERVICE'];
            }
        });
        this.showVersions = false;
        this.loadGWithParam();
        this.user = this.localstorage.getObj('user');
        this.userId = this.localstorage.getItem('id');
        this.rUrl = this.router.url.split('/');
        if (this.rUrl.includes('versions')) {
            this.showVersions = true;
        }
        this.displayMode = 'compact';
    }
    ngOnInit() {
        if (this.isShow === false) {
            this.isShow = false;
        }
        else {
            this.isShow = true;
        }
        this.tempColumns = this.columns;
        if (this.columns && this.columns.gridConfigFormArray) {
            this.columnHeader = this.columns.gridConfigFormArray.map(column => column.header);
            this.columns = this.columns.gridConfigFormArray;
        }
        else {
            this.columnHeader = this.columns.map(column => column.header);
        }
        this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
        this.filterValue = [];
        this.customOperations = [];
    }
    ngOnChanges() {
        this.loadGWithParam();
    }
    loadGWithParam() {
        this.tempList = this.dataList;
        if (this.tempList) {
            const name = this.tempList.filter((item) => item.isactive == true);
            if (name.length > 0) {
                this.activepagename = name[0].pagename;
            }
        }
        if (!this.auth.isAdmin()) {
            this.loadGrid({ value: !this.Organization ? this.auth.getOrgID() : this.Organization }, false);
        }
        else {
            this.loadGrid({ value: this.Organization ? this.Organization : SELECT_ALL }, false);
        }
    }
    ngAfterViewInit() {
        this.dataGrid.onOptionChanged.subscribe(e => {
            if (e.name === 'columns' && e.fullName.endsWith('filterValues')) {
                const colIndex = Number(e.fullName
                    .match(/\[\d+\]/)[0]
                    .replace('[', '')
                    .replace(']', ''));
                const values = e.component.columnOption(colIndex, 'filterValues');
                console.log(values);
                this.multipleFilterValues.emit(e);
            }
            // Search
            if (e.name === 'columns' && e.fullName.endsWith('filterValue')) {
                console.log(e);
                this.filterSearchValue.emit(e);
            }
            // filter Builder Popup
            if (e.name === 'filterBuilderPopup') {
                console.log('filterBuilderPopup');
                console.log(e);
                this.filterBuilderPopup.emit(e);
            }
            // filter Panel - enable or disable
            if (e.name === 'filterPanel') {
                console.log(e.value);
                this.filterPanel.emit(e);
            }
            // Sorting
            if (e.name === 'columns' && e.fullName.endsWith('sortOrder')) {
                this.sortOrder.emit(e);
            }
            // Paging
            if (e.name === 'paging') {
                this.currentPage.emit(e.value);
            }
        });
        const REGISTRATION = this.storageService.getItem('REGISTRATION');
        if (REGISTRATION) {
            this.registrationInfo = JSON.parse(REGISTRATION);
        }
        this.contentWrappers.changes.subscribe((comps) => {
            comps.forEach(wrapper => {
                this.applyLinkStyles(wrapper);
            });
        });
    }
    applyLinkStyles(wrapper) {
        const anchors = wrapper.nativeElement.querySelectorAll('a');
        anchors.forEach(anchor => {
            this.renderer.setStyle(anchor, 'color', '#0049E5');
            this.renderer.listen(anchor, 'mouseenter', () => {
                this.renderer.setStyle(anchor, 'opacity', '0.5');
            });
            this.renderer.listen(anchor, 'mouseleave', () => {
                this.renderer.setStyle(anchor, 'opacity', '1');
            });
        });
    }
    loadGrid(orgID, load = true) {
        this.Organization = orgID.value;
        if (load) {
            this.currentPage.emit(orgID.value === SELECT_ALL ? 'all' : orgID.value);
        }
        if (this.tempList && this.tempList.length) {
            this.tempGridList(orgID);
        }
        else {
            this.customStore = this.dataSource;
        }
    }
    tempGridList(orgID) {
        if (orgID && orgID.value) {
            this.splitGridList(orgID);
        }
        if (this.dataList.length === 1 && this.rUrl && this.rUrl[2] === 'view-dashboard') {
            this.dUrl = 'view-dashboard/dashboard';
            this.router.navigateByUrl(`pages/${this.dUrl}/${this.dataList[0]['id']}`);
        }
        // Quick change
        this.customStore = new CustomStore({
            load: _opts => Promise.resolve(this.dataList),
            totalCount: _opts => Promise.resolve(this.totalCount)
        });
    }
    splitGridList(orgID) {
        this.dataList = this.tempList.filter(data => data.organizationid);
        this.dataList = this.tempList.filter(data => data.organizationid === orgID.value);
        if (this.tempList && this.tempList.length && this.tempList[0].displayname && this.tempList[0].userworkinfo) {
            this.dataList = this.tempList.filter(data => data.userworkinfo && data.userworkinfo[0] && data.userworkinfo[0].organizationid);
            this.dataList = this.tempList.filter(data => data.userworkinfo && data.userworkinfo[0] && data.userworkinfo[0].organizationid === orgID.value);
        }
        if (SELECT_ALL === orgID.value) {
            this.dataList = this.tempList;
        }
    }
    getRouter(data) {
        this.routeTo.emit(data);
    }
    navigateLink(event, rowData) {
        // const modal = {
        //   selectedRowsData: [rowData.data]
        // };
        // this.onSelectionChanged(modal);
        const target = event.target;
        if (target.tagName === 'A' && target.href) {
            this.updateNotificationView(rowData);
            this.url = this.extractUrl(target.outerHTML);
            this.oldUrl = this.extractUrl(target.outerHTML);
            const activeId = this.extractID(this.url.split('?')[0]);
            const isNumberCheck = Number(activeId);
            const urlParams = new URLSearchParams(this.url.split('?')[1]);
            const pageID = urlParams.get('pageID');
            event.preventDefault();
            if (pageID) {
                this.mainNotificationService.checkPageAccessForUser(pageID).subscribe((res) => {
                    if (res['data']) {
                        this.checkPageId(isNumberCheck, activeId, event);
                    }
                    else {
                        event.preventDefault();
                        this.alertService.error("Page Not Available: You don't have the necessary permissions to view this page.");
                    }
                }, (error) => {
                    event.preventDefault();
                    this.alertService.error("An error occurred while checking page access.");
                });
            }
            else {
                event.preventDefault();
                this.alertService.error("Page Not Available");
            }
        }
    }
    async checkPageId(isNumberCheck, activeId, event) {
        if (isNumberCheck) {
            const menus = this.localstorage.getObj('MENU');
            const findMenu = menus.find(item => item.name === 'Pages');
            let isExists;
            if (findMenu && findMenu.length > 0) {
                isExists = findMenu.submenu.find(item => item.id == isNumberCheck);
            }
            if (isExists) {
                this.url = this.url.replace(activeId, isExists?.activeVersion?.pageid);
                this.url = this.url.split('?')[0];
                this.routeFunction(isNumberCheck, activeId, event, 'mainMenuWithId');
            }
            else {
                this.routeFunction(isNumberCheck, activeId, event, 'Pages');
            }
        }
        else {
            this.routeFunction(isNumberCheck, activeId, event, 'mainMenuWithURL');
        }
    }
    routeFunction(isNumberCheck, activeId, event, menuType) {
        const menus = this.localstorage.getObj('MENU');
        const mainMenu = menus.find(item => item.route === this.url);
        const mainMenuWithUrl = menus.forEach(element => {
            if (this.url.endsWith(element.route)) {
                return element;
            }
        });
        // const mainMenuWithUrl = menus.find(item => this.url.endsWith(item.route) ? item : [])
        // const mainMenus = menus.filter(item => item.submenu.length == 0);
        const submenus = menus.filter(item => item.submenu.length > 0);
        if (mainMenuWithUrl) {
            this.appService.addValue('CurrentPages', mainMenuWithUrl);
            this.auth.getCurrentMenu(menus);
        }
        else if (mainMenu) {
            menus.forEach(element => {
                if (element.name === mainMenu.name) {
                    element.active = true;
                }
                else {
                    element.active = false;
                }
            });
            if (isNumberCheck) {
                this.appService.addValue('dynamicPages', mainMenu);
                this.auth.getCurrentMenu(menus);
            }
            else {
                this.appService.addValue('currentPages', mainMenu);
                this.auth.getCurrentMenu(menus);
            }
        }
        else {
            menus.forEach((element, index) => {
                if (element.submenu.length > 0) {
                    element.submenu.forEach((element1, index1) => {
                        if (element1?.route == this.url) {
                            this.setActive(menus, index, index1, isNumberCheck);
                        }
                        else if (element1?.activeVersion?.pageid == activeId) {
                            this.setActive(menus, index, index1, isNumberCheck);
                        }
                        else if (element1?.activeVersion?.id == activeId) {
                            this.setActive(menus, index, index1, isNumberCheck);
                        }
                    });
                }
                //  else if(element.submenu.length > 0 && element.name == 'Pages'){
                //   element.submenu.forEach((element1, index1) => {
                //     if(element1?.activeVersion?.pageid == activeId){
                //       this.setActive(menus, index, index1, isNumberCheck);
                //     }
                //   });
                // }
            });
        }
        this.router.navigateByUrl(this.oldUrl);
        event.preventDefault();
    }
    setActive(menus, menuIndex, submenuIndex, isNumberCheck) {
        menus.map(item => item.active = false);
        menus.forEach(element => {
            element.submenu.map(item => item.active = false);
        });
        if (menuIndex) {
            menus[menuIndex].active = true;
            if (submenuIndex >= 0) {
                menus[menuIndex].submenu[submenuIndex].active = true;
            }
            else {
                menus[menuIndex].active = true;
            }
        }
        else {
            menus[0].active = true;
        }
        if (isNumberCheck) {
            this.appService.addValue('dynamicPages', menus[menuIndex]);
            this.auth.getCurrentMenu(menus);
        }
        else {
            this.appService.addValue('currentPages', menus[menuIndex]);
            this.auth.getCurrentMenu(menus);
        }
    }
    extractID(url) {
        const parts = url.split("/");
        const lastIndex = parts.length - 1;
        return parts[lastIndex];
    }
    extractUrl(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const link = doc.querySelector('a');
        return link ? link.getAttribute('href') : '';
    }
    popup(data) {
        this.openPopup.emit(data);
    }
    downloadData(evt) {
        this.downloadTableRow.emit(evt);
    }
    onSelectionChanged(evt) {
        this.rowSelection.emit(evt);
    }
    editData(evt) {
        this.editTableRow.emit(evt);
    }
    viewData(evt) {
        this.viewTableRow.emit(evt);
    }
    viewVersion(evt) {
        this.viewVersions.emit(evt);
    }
    activatePageVersion(evt) {
        this.activateVersion.emit(evt);
    }
    activatePages(evt) {
        this.activatePage.emit(evt);
    }
    deactivatePages(evt) {
        this.deactivatePage.emit(evt);
    }
    deleteData(evt) {
        this.deleteTableRow.emit(evt);
    }
    openLink(evt) {
        this.openExternalLink.emit(evt);
    }
    openPopupLink(evt) {
        this.openpopupLink.emit(evt);
    }
    activeUser(evt) {
        this.toggleRow.emit(evt);
    }
    duplicateDate(evt) {
        this.duplicateRow.emit(evt);
    }
    duplicateVersion(evt) {
        this.duplicatePageVersion.emit(evt);
    }
    getOrgList() {
        this.httpService.get('/platform/page-designer/page/organization/all').subscribe((data) => {
            if (data.data && data.data.length) {
                this.orgList = data.data.sort((a, b) => a.organizationname?.localeCompare(b.organizationname));
            }
            else {
                this.orgList = [];
            }
        });
    }
    onRowPrepared(e) {
        if (e.rowType === 'data') {
            e.columns.forEach((column, index) => {
                if (column.caption === 'Date') {
                    e.rowElement.cells[index].classList.add('message-new');
                }
            });
            if (e.data.isnew) {
                const element = e.rowElement;
                element.classList.add('isnew');
                e.columns.forEach((column, index) => {
                    if (column.caption === 'Date') {
                        e.rowElement.cells[index].classList.add('new-icon');
                    }
                });
            }
        }
    }
    onCellPrepared(e) {
        if (e.rowType == 'data' && e.data.isactive) {
            if (e.column.dataField === 'version') {
                const element = e.cellElement;
                const livetext = document.createElement('div');
                element.classList.add('live-td');
                livetext.classList.add('live-group');
                livetext.innerHTML = '<div class="live-text">Live</div>';
                element.appendChild(livetext);
            }
            else if (e.column.dataField === 'templatename') {
                this.exportPageName = e.value.includes('_') ? e.value.split('_')[0] : e.value;
            }
        }
        const maxLength = 60;
        if (e.rowType === 'data') {
            if (e.column.dataField === 'message') {
                const element = e.cellElement;
                element.classList.add('truncateWrapper');
                const cell = document.querySelector('.truncateWrapper');
                let cellWidth;
                if (cell) {
                    cellWidth = cell.offsetWidth;
                }
                // Create a div element for truncation
                const textContent = document.createElement('div');
                textContent.classList.add('text-content');
                textContent.style.maxWidth = `${cellWidth + 15}px`;
                textContent.style.overflow = 'hidden';
                textContent.style.whiteSpace = 'normal';
                // Function to truncate HTML content
                const truncateHtml = (html, length) => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    let truncatedHtml = '';
                    let currentLength = 0;
                    const traverse = (node) => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            const text = node.textContent || '';
                            if (currentLength + text.length > length) {
                                truncatedHtml += text.substring(0, length - currentLength) + '...';
                                currentLength = length;
                                return;
                            }
                            else {
                                truncatedHtml += text;
                                currentLength += text.length;
                            }
                        }
                        else if (node.nodeType === Node.ELEMENT_NODE) {
                            const element = node;
                            truncatedHtml += `<${element.tagName.toLowerCase()}`;
                            Array.from(element.attributes).forEach(attr => {
                                truncatedHtml += ` ${attr.name}="${attr.value}"`;
                            });
                            truncatedHtml += '>';
                            Array.from(element.childNodes).forEach(child => traverse(child));
                            truncatedHtml += `</${element.tagName.toLowerCase()}>`;
                        }
                    };
                    Array.from(tempDiv.childNodes).forEach(node => traverse(node));
                    return truncatedHtml;
                };
                // Set initial truncated HTML
                textContent.innerHTML = truncateHtml(e.text, maxLength);
                // Create the 'Show More' link
                const showMoreLink = document.createElement('a');
                showMoreLink.href = 'javascript:;';
                showMoreLink.classList.add('showtext');
                showMoreLink.innerText = 'Show More';
                // Create a container div for text and link
                const truncateContainer = document.createElement('div');
                truncateContainer.classList.add('text-truncate');
                truncateContainer.appendChild(textContent);
                truncateContainer.appendChild(showMoreLink);
                // Function to extract plain text from HTML
                const extractPlainTextFromHtml = (html) => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    return tempDiv.textContent || '';
                };
                // Append the container to the cell element
                element.appendChild(truncateContainer);
                // Check if plain text length exceeds the maximum length
                const plainText = extractPlainTextFromHtml(e.text);
                if (plainText.length > maxLength) {
                    // Display the 'Show More' link
                    showMoreLink.style.display = 'inline';
                }
                else {
                    // Hide the 'Show More' link if not needed
                    showMoreLink.style.display = 'none';
                }
                // Handle the 'Show More' link click event
                showMoreLink.addEventListener('click', function () {
                    if (textContent.style.maxHeight === 'none') {
                        // Collapse text
                        textContent.style.maxHeight = '50px';
                        textContent.innerHTML = truncateHtml(e.text, maxLength);
                        showMoreLink.innerText = 'Show More';
                    }
                    else {
                        // Expand text
                        textContent.style.maxHeight = 'none';
                        textContent.innerHTML = e.text;
                        showMoreLink.innerText = 'Show Less';
                    }
                });
                // Check if the text contains an <a> tag
                textContent.addEventListener('click', (event) => {
                    const target = event.target;
                    if (target.tagName.toLowerCase() === 'a') {
                        event.preventDefault();
                        this.navigateLink(event, e);
                    }
                });
            }
        }
    }
    onExporting(e) {
        const pageName = this.localstorage.getObj('FILE EXPORT NAME');
        const currentDate = moment().format('YYYY-MM-DD');
        let fileName;
        if (pageName) {
            fileName = `${pageName} Versions ${currentDate}`;
        }
        else if (this.exportPageName) {
            fileName = `${this.exportPageName}-${currentDate}`;
            if (this.exportPageName === 'version')
                fileName = `${this.exportPageName}-${currentDate}`;
        }
        else {
            fileName = `Dynamic-Pages ${currentDate}`;
        }
        e.component.columnOption('Action', 'visible', false);
        if (e.format === 'pdf') {
            const doc = new jsPDF.jsPDF();
            exportDataGrid({
                jsPDFDocument: doc,
                component: e.component,
                customizeCell: grid => {
                    grid.pdfCell.wordWrapEnabled = true;
                }
            }).then(() => {
                doc.save(`${fileName}.pdf`);
                e.component.columnOption('Action', 'visible', true);
            });
        }
        else if (e.format === 'xlsx') {
            e.fileName = fileName;
            setTimeout(() => {
                e.component.columnOption('Action', 'visible', true);
            }, 500);
        }
    }
    islocked(grid, user) {
        if (grid.lock && user.locked) {
            if (Number(user.lockedby) === Number(this.userId)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    getDateFormat(value) {
        if (this.registrationInfo) {
            if (value === 'date') {
                return this.registrationInfo['datetimeformat'].split(' ')[0];
            }
            return this.registrationInfo['datetimeformat'];
        }
        return 'MM/dd/yyyy';
    }
    isEnable(grid, record) {
        if (grid.version && record.isEnable) {
            return true;
        }
        else {
            return false;
        }
    }
    updateNotificationView(rowData) {
        const inputRequest = {
            isnew: false
        };
        const model = rowData?.data;
        this.mainNotificationService.updateNotification(model?.id, inputRequest).subscribe((_res) => {
            this.sharedService.sendMessage();
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListComponent, deps: [{ token: i1.Router }, { token: AuthService }, { token: LocalService }, { token: LocalStorageService }, { token: AppService }, { token: DataStoreService }, { token: i0.Renderer2 }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GridListComponent, selector: "app-grid-list", inputs: { dataList: "dataList", dataSource: "dataSource", columns: "columns", updateGrid: "updateGrid", totalCount: "totalCount", page: "page", isShow: "isShow", exportPageName: "exportPageName", remoteOperations: "remoteOperations" }, outputs: { currentPage: "currentPage", editTableRow: "editTableRow", viewTableRow: "viewTableRow", deleteTableRow: "deleteTableRow", openExternalLink: "openExternalLink", openpopupLink: "openpopupLink", routeTo: "routeTo", openPopup: "openPopup", sortOrder: "sortOrder", filterSearchValue: "filterSearchValue", filterBuilderPopup: "filterBuilderPopup", filterPanel: "filterPanel", multipleFilterValues: "multipleFilterValues", downloadTableRow: "downloadTableRow", rowSelection: "rowSelection", toggleRow: "toggleRow", duplicateRow: "duplicateRow", viewVersions: "viewVersions", activateVersion: "activateVersion", activatePage: "activatePage", deactivatePage: "deactivatePage", duplicatePageVersion: "duplicatePageVersion", selectedRowsData: "selectedRowsData" }, providers: [GridListService], viewQueries: [{ propertyName: "dataGrid", first: true, predicate: DxDataGridComponent, descendants: true }, { propertyName: "contentWrappers", predicate: ["contentWrapper"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <p class=\"org-title\" *ngIf=\"user && user.role && auth.isAdmin() && this.isShow\">Organization Name</p>\r\n    <mat-form-field class=\"w-100\" *ngIf=\"auth.isAdmin() && this.isShow\" appearance=\"outline\">\r\n      <mat-select placeholder=\"Organization\" [(ngModel)]=\"Organization\" (selectionChange)=\"loadGrid($event)\">\r\n        <mat-option value=\"Select-ALL\"> Select-ALL</mat-option>\r\n        <mat-option *ngFor=\"let org of orgList\" value=\"{{ org.id }}\"> {{ org.organizationname }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 px-0\">\r\n    <h4 class=\"landing-title\">{{activepagename}}</h4>\r\n    <div class=\"main-card card\">\r\n      <div class=\"card-body\">\r\n        <dx-data-grid\r\n          id=\"gridContainer\"\r\n          [dataSource]=\"customStore\"\r\n          [allowColumnReordering]=\"true\"\r\n          [allowColumnResizing]=\"true\"\r\n          [columnAutoWidth]=\"true\"\r\n          [columnMinWidth]=\"100\"\r\n          [width]=\"'100%'\"\r\n          [columnResizingMode]=\"'widget'\"\r\n          [showBorders]=\"true\"\r\n          [rowAlternationEnabled]=\"true\"\r\n          [showColumnLines]=\"true\"\r\n          [showRowLines]=\"false\"\r\n          [filterValue]=\"filterValue\"\r\n          (onSelectionChanged)=\"onSelectionChanged($event)\"\r\n          (onRowPrepared)=\"onRowPrepared($event)\"\r\n          (onCellPrepared)=\"onCellPrepared($event)\"\r\n          (onExporting)=\"onExporting($event)\"\r\n          [remoteOperations]=\"remoteOperations == false ? remoteOperations : {filtering: true, sorting: true, paging: true}\"\r\n          #dataGrid>\r\n          <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n          <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n          <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n          <dxo-column-chooser *ngIf=\"updateGrid?.chooser\" [enabled]=\"true\" mode=\"select\">\r\n            <dxo-position my=\"right top\" at=\"right top\" of=\".dx-datagrid-column-chooser-button\">\r\n            </dxo-position>\r\n          </dxo-column-chooser>\r\n          <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n          <dxo-pager\r\n            [visible]=\"true\"\r\n            [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n            [displayMode]=\"displayMode\"\r\n            [showPageSizeSelector]=\"true\"\r\n            [showInfo]=\"true\"\r\n            [showNavigationButtons]=\"true\"></dxo-pager>\r\n          <!--end pagination-->\r\n          <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n          <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n          <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n          <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n          <dxo-selection mode=\"single\" *ngIf=\"updateGrid?.rowSelection\"></dxo-selection>\r\n          <ng-container *ngFor=\"let column of columns; let i = index\">\r\n            <ng-container *ngIf=\"column.hide !== true\">\r\n              <ng-container *ngIf=\"column.link; else noLink\">\r\n                <dxi-column  [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                  cellTemplate=\"cellTemplate\"></dxi-column>\r\n              </ng-container>\r\n              <ng-template #noLink>\r\n                <ng-container *ngIf=\"column.icon; else noIcon\">\r\n                  <dxi-column   [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    cellTemplate=\"iconTemplate\"></dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noIcon>\r\n                <ng-container *ngIf=\"column.dateFormat; else noDate\">\r\n                  <dxi-column *ngIf=\"column.dateFormat === 'date' || column.dateFormat === 'datetime'\"\r\n                    [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    [dataType]=\"column.dateFormat\" [format]=\"getDateFormat(column.dateFormat)\"  >\r\n                  </dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noDate>\r\n                <dxi-column   [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\">\r\n                </dxi-column>\r\n              </ng-template>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"\r\n              updateGrid &&\r\n              (updateGrid?.externalLink ||\r\n                updateGrid?.openPopup ||\r\n                updateGrid?.edit ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.download ||\r\n                updateGrid?.activatePage ||\r\n                updateGrid?.deactivatePage)\">\r\n            <dxi-column   [width]=\"120\" [allowFiltering]=\"false\" [allowSorting]=\"false\" caption=\"Action\"\r\n              cellTemplate=\"editCellTemplate\"></dxi-column>\r\n            <div class=\"action-icons\" *dxTemplate=\"let d of 'editCellTemplate'\">\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.externalLink\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openLink(d)\">\r\n                <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.openPopup\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openPopupLink(d)\">\r\n                <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.download\" class=\"no-bg\" matTooltip=\"Download\"\r\n                (click)=\"downloadData(d)\">\r\n                <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.edit && showVersions && !d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.editRecord\" class=\"no-bg mr-2\" matTooltip=\"Edit\"\r\n                (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && !showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy\" (click)=\"duplicateDate(d)\">\r\n                <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\">\r\n                  <span class=\"sr-only\">Copy</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy Version\" (click)=\"duplicateVersion(d)\">\r\n                <em class=\"fa fa-copy\" *showField=\"'PAG_DES_GRID_LIST_VERSION'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Copy Version</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.ribbonconfig && updateGrid?.view && showVersions\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                fieldKey=\"PAG_DES_GRID_LIST_VERSION\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.viewRecord\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.emailview && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Preview\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" title=\"view\"\r\n                *ngIf=\"updateGrid?.version && !showVersions && islocked(updateGrid, d.data) && isEnable(updateGrid, d.data)\" class=\"no-bg\"\r\n                matTooltip=\"Versions\" (click)=\"viewVersion(d)\">\r\n                <em class=\"fa fa-code-fork\" title=\"View\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.isEnable && updateGrid?.activatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Activate\" (click)=\"activatePages(d)\">\r\n                <span class=\"material-symbols-outlined activate\">check</span>\r\n              </a>\r\n\r\n              <a href=\"javascript:void(0)\" *ngIf=\"d.data.isEnable && updateGrid?.deactivatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Deactivate\" (click)=\"deactivatePages(d)\">\r\n                <span class=\"material-symbols-outlined deactivate\">close</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"showVersions && !d.data.isactive && d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Activate\" (click)=\"activatePageVersion(d)\">\r\n                <em class=\"fa fa-check-circle-o\" *showField=\"'PAG_DES_GRID_LIST_ACTIVATE'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Activate</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <span *ngIf=\"showVersions && !d.data.isactive && !d.data.published\" class=\"no-bg mr-2\"\r\n                matTooltip=\"This version is not published\">\r\n                <em class=\"fa fa-exclamation-triangle text-warning\" aria-hidden=\"true\">\r\n                  <span class=\"sr-only\">This version is not published</span>\r\n                </em>\r\n                <span class=\"sr-only\">View</span>\r\n              </span>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.lock && d.data.locked\" (click)=\"check(updateGrid, d)\"\r\n                class=\"no-bg ml-2\" matTooltip=\"Locked By - {{ d?.data?.lockedbyUser?.firstname }}\">\r\n                <em *ngIf=\"updateGrid?.lock && d.data.locked\" class=\"fa fa-lock\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.delete\" class=\"no-bg\" matTooltip=\"Delete\"\r\n                (click)=\"deleteData(d)\">\r\n                <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.toggle\" class=\"no-bg\"\r\n                [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\" (click)=\"activeUser(d)\">\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n            <span href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" class=\"link-data\" (click)=\"getRouter(d)\">{{\r\n              d.value !== 'null' ? d.value : ''\r\n              }}</span>\r\n          </div>\r\n          <ng-container *ngIf=\"updateGrid.linkVisible\">\r\n            <div *dxTemplate=\"let d of 'cellTemplate'\"(click)=\"navigateLink($event, d)\">\r\n              <span *ngIf=\"d.value && d.value !== 'null'\" #contentWrapper [innerHTML]=\"d.value | safeHtml\">{{\r\n                d.value !== 'null' ? d.value : ''\r\n              }}</span>\r\n            </div>\r\n          </ng-container>\r\n          <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n            <em class=\"fa fa-book\" (click)=\"popup(d.value)\"></em>\r\n          </div>\r\n        </dx-data-grid>\r\n\r\n        <ng-template #callNarrativePopup>\r\n          <h2 matDialogTitle>Narrative</h2>\r\n          <div [innerHTML]=\"narrativeData\"></div>\r\n          <div class=\"text-right\">\r\n            <button mat-button (click)=\"closeNarrativePopup()\" role=\"button\" class=\"btn btn-cancel mr-2\">Close</button>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:12px!important;color:var(--primary)}:host ::ng-deep .card .card-body{padding:0 15px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;color:var(--hover-text);background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}.action-icons .activate,.action-icons .deactivate{font-size:20px;line-height:normal;position:relative;top:5px;border-radius:30px;width:12px;display:inline-flex;align-items:center;justify-content:center;height:12px;font-weight:400}.landing-title{color:var(--header-color);font-weight:700;font-size:var(--font-14);position:absolute;left:15px;z-index:99;top:12px;margin:0}:host ::ng-deep .dx-data-row.isnew td{font-size:15px!important;font-weight:600!important;position:relative}:host ::ng-deep .dx-data-row td.message-new{position:relative;padding-left:20px}:host ::ng-deep .dx-data-row td.new-icon{position:relative}:host ::ng-deep .dx-data-row td.new-icon:before{content:\"\\f111\";font-family:FontAwesome,sans-serif;font-size:16px;color:#c92c1f;position:absolute;top:50%;left:5px;transform:translateY(-50%);line-height:normal}.link-data{color:var(--interactive-color);cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i8$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i11.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i12.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i17.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "component", type: i19.DxDataGridComponent, selector: "dx-data-grid", inputs: ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "dataRowTemplate", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "syncLookupFilterValues", "tabIndex", "toolbar", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"], outputs: ["onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExporting", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "accessKeyChange", "activeStateEnabledChange", "allowColumnReorderingChange", "allowColumnResizingChange", "autoNavigateToFocusedRowChange", "cacheEnabledChange", "cellHintEnabledChange", "columnAutoWidthChange", "columnChooserChange", "columnFixingChange", "columnHidingEnabledChange", "columnMinWidthChange", "columnResizingModeChange", "columnsChange", "columnWidthChange", "customizeColumnsChange", "dataRowTemplateChange", "dataSourceChange", "dateSerializationFormatChange", "disabledChange", "editingChange", "elementAttrChange", "errorRowEnabledChange", "exportChange", "filterBuilderChange", "filterBuilderPopupChange", "filterPanelChange", "filterRowChange", "filterSyncEnabledChange", "filterValueChange", "focusedColumnIndexChange", "focusedRowEnabledChange", "focusedRowIndexChange", "focusedRowKeyChange", "groupingChange", "groupPanelChange", "headerFilterChange", "heightChange", "highlightChangesChange", "hintChange", "hoverStateEnabledChange", "keyboardNavigationChange", "keyExprChange", "loadPanelChange", "masterDetailChange", "noDataTextChange", "pagerChange", "pagingChange", "remoteOperationsChange", "renderAsyncChange", "repaintChangesOnlyChange", "rowAlternationEnabledChange", "rowDraggingChange", "rowTemplateChange", "rtlEnabledChange", "scrollingChange", "searchPanelChange", "selectedRowKeysChange", "selectionChange", "selectionFilterChange", "showBordersChange", "showColumnHeadersChange", "showColumnLinesChange", "showRowLinesChange", "sortByGroupSummaryInfoChange", "sortingChange", "stateStoringChange", "summaryChange", "syncLookupFilterValuesChange", "tabIndexChange", "toolbarChange", "twoWayBindingEnabledChange", "visibleChange", "widthChange", "wordWrapEnabledChange"] }, { kind: "component", type: i16$1.DxoColumnChooserComponent, selector: "dxo-column-chooser", inputs: ["allowSearch", "container", "emptyPanelText", "enabled", "height", "mode", "position", "search", "searchTimeout", "selection", "sortOrder", "title", "width"] }, { kind: "component", type: i16$1.DxoPositionComponent, selector: "dxo-position", inputs: ["at", "boundary", "boundaryOffset", "collision", "my", "of", "offset"] }, { kind: "component", type: i16$1.DxoSelectionComponent, selector: "dxo-selection", inputs: ["allowSelectAll", "recursive", "selectByClick", "deferred", "mode", "selectAllMode", "showCheckBoxesMode"] }, { kind: "component", type: i16$1.DxiColumnComponent, selector: "dxi-column", inputs: ["alignment", "allowEditing", "allowExporting", "allowFiltering", "allowFixing", "allowGrouping", "allowHeaderFiltering", "allowHiding", "allowReordering", "allowResizing", "allowSearch", "allowSorting", "autoExpandGroup", "buttons", "calculateCellValue", "calculateDisplayValue", "calculateFilterExpression", "calculateGroupValue", "calculateSortValue", "caption", "cellTemplate", "columns", "cssClass", "customizeText", "dataField", "dataType", "editCellTemplate", "editorOptions", "encodeHtml", "falseText", "filterOperations", "filterType", "filterValue", "filterValues", "fixed", "fixedPosition", "format", "formItem", "groupCellTemplate", "groupIndex", "headerCellTemplate", "headerFilter", "hidingPriority", "isBand", "lookup", "minWidth", "name", "ownerBand", "renderAsync", "selectedFilterOperation", "setCellValue", "showEditorAlways", "showInColumnChooser", "showWhenGrouped", "sortIndex", "sortingMethod", "sortOrder", "trueText", "type", "validationRules", "visible", "visibleIndex", "width"], outputs: ["filterValueChange", "filterValuesChange", "groupIndexChange", "selectedFilterOperationChange", "sortIndexChange", "sortOrderChange", "visibleChange", "visibleIndexChange"] }, { kind: "component", type: i16$1.DxoHeaderFilterComponent, selector: "dxo-header-filter", inputs: ["allowSearch", "allowSelectAll", "dataSource", "groupInterval", "height", "search", "searchMode", "width", "searchTimeout", "texts", "visible", "showRelevantValues"] }, { kind: "component", type: i16$1.DxoExportComponent, selector: "dxo-export", inputs: ["backgroundColor", "enabled", "fileName", "formats", "margin", "printingEnabled", "svgToCanvas", "allowExportSelectedData", "texts"] }, { kind: "component", type: i16$1.DxoFilterBuilderComponent, selector: "dxo-filter-builder", inputs: ["accessKey", "activeStateEnabled", "allowHierarchicalFields", "customOperations", "disabled", "elementAttr", "fields", "filterOperationDescriptions", "focusStateEnabled", "groupOperationDescriptions", "groupOperations", "height", "hint", "hoverStateEnabled", "maxGroupLevel", "onContentReady", "onDisposing", "onEditorPrepared", "onEditorPreparing", "onInitialized", "onOptionChanged", "onValueChanged", "rtlEnabled", "tabIndex", "value", "visible", "width"], outputs: ["valueChange"] }, { kind: "component", type: i16$1.DxoFilterBuilderPopupComponent, selector: "dxo-filter-builder-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "enableBodyScroll", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["heightChange", "positionChange", "visibleChange", "widthChange"] }, { kind: "component", type: i16$1.DxoFilterPanelComponent, selector: "dxo-filter-panel", inputs: ["customizeText", "filterEnabled", "texts", "visible"], outputs: ["filterEnabledChange"] }, { kind: "component", type: i16$1.DxoFilterRowComponent, selector: "dxo-filter-row", inputs: ["applyFilter", "applyFilterText", "betweenEndText", "betweenStartText", "operationDescriptions", "resetOperationText", "showAllText", "showOperationChooser", "visible"] }, { kind: "component", type: i16$1.DxoLoadPanelComponent, selector: "dxo-load-panel", inputs: ["enabled", "height", "indicatorSrc", "shading", "shadingColor", "showIndicator", "showPane", "text", "width"] }, { kind: "component", type: i16$1.DxoPagerComponent, selector: "dxo-pager", inputs: ["allowedPageSizes", "displayMode", "infoText", "label", "showInfo", "showNavigationButtons", "showPageSizeSelector", "visible"] }, { kind: "component", type: i16$1.DxoPagingComponent, selector: "dxo-paging", inputs: ["enabled", "pageIndex", "pageSize"], outputs: ["pageIndexChange", "pageSizeChange"] }, { kind: "directive", type: i21.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "directive", type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }, { kind: "pipe", type: SafeHtmlPipe, name: "safeHtml" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-grid-list', providers: [GridListService], template: "<app-alert></app-alert>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <p class=\"org-title\" *ngIf=\"user && user.role && auth.isAdmin() && this.isShow\">Organization Name</p>\r\n    <mat-form-field class=\"w-100\" *ngIf=\"auth.isAdmin() && this.isShow\" appearance=\"outline\">\r\n      <mat-select placeholder=\"Organization\" [(ngModel)]=\"Organization\" (selectionChange)=\"loadGrid($event)\">\r\n        <mat-option value=\"Select-ALL\"> Select-ALL</mat-option>\r\n        <mat-option *ngFor=\"let org of orgList\" value=\"{{ org.id }}\"> {{ org.organizationname }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 px-0\">\r\n    <h4 class=\"landing-title\">{{activepagename}}</h4>\r\n    <div class=\"main-card card\">\r\n      <div class=\"card-body\">\r\n        <dx-data-grid\r\n          id=\"gridContainer\"\r\n          [dataSource]=\"customStore\"\r\n          [allowColumnReordering]=\"true\"\r\n          [allowColumnResizing]=\"true\"\r\n          [columnAutoWidth]=\"true\"\r\n          [columnMinWidth]=\"100\"\r\n          [width]=\"'100%'\"\r\n          [columnResizingMode]=\"'widget'\"\r\n          [showBorders]=\"true\"\r\n          [rowAlternationEnabled]=\"true\"\r\n          [showColumnLines]=\"true\"\r\n          [showRowLines]=\"false\"\r\n          [filterValue]=\"filterValue\"\r\n          (onSelectionChanged)=\"onSelectionChanged($event)\"\r\n          (onRowPrepared)=\"onRowPrepared($event)\"\r\n          (onCellPrepared)=\"onCellPrepared($event)\"\r\n          (onExporting)=\"onExporting($event)\"\r\n          [remoteOperations]=\"remoteOperations == false ? remoteOperations : {filtering: true, sorting: true, paging: true}\"\r\n          #dataGrid>\r\n          <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n          <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n          <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n          <dxo-column-chooser *ngIf=\"updateGrid?.chooser\" [enabled]=\"true\" mode=\"select\">\r\n            <dxo-position my=\"right top\" at=\"right top\" of=\".dx-datagrid-column-chooser-button\">\r\n            </dxo-position>\r\n          </dxo-column-chooser>\r\n          <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n          <dxo-pager\r\n            [visible]=\"true\"\r\n            [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n            [displayMode]=\"displayMode\"\r\n            [showPageSizeSelector]=\"true\"\r\n            [showInfo]=\"true\"\r\n            [showNavigationButtons]=\"true\"></dxo-pager>\r\n          <!--end pagination-->\r\n          <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n          <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n          <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n          <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n          <dxo-selection mode=\"single\" *ngIf=\"updateGrid?.rowSelection\"></dxo-selection>\r\n          <ng-container *ngFor=\"let column of columns; let i = index\">\r\n            <ng-container *ngIf=\"column.hide !== true\">\r\n              <ng-container *ngIf=\"column.link; else noLink\">\r\n                <dxi-column  [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                  cellTemplate=\"cellTemplate\"></dxi-column>\r\n              </ng-container>\r\n              <ng-template #noLink>\r\n                <ng-container *ngIf=\"column.icon; else noIcon\">\r\n                  <dxi-column   [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    cellTemplate=\"iconTemplate\"></dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noIcon>\r\n                <ng-container *ngIf=\"column.dateFormat; else noDate\">\r\n                  <dxi-column *ngIf=\"column.dateFormat === 'date' || column.dateFormat === 'datetime'\"\r\n                    [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    [dataType]=\"column.dateFormat\" [format]=\"getDateFormat(column.dateFormat)\"  >\r\n                  </dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noDate>\r\n                <dxi-column   [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\">\r\n                </dxi-column>\r\n              </ng-template>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"\r\n              updateGrid &&\r\n              (updateGrid?.externalLink ||\r\n                updateGrid?.openPopup ||\r\n                updateGrid?.edit ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.download ||\r\n                updateGrid?.activatePage ||\r\n                updateGrid?.deactivatePage)\">\r\n            <dxi-column   [width]=\"120\" [allowFiltering]=\"false\" [allowSorting]=\"false\" caption=\"Action\"\r\n              cellTemplate=\"editCellTemplate\"></dxi-column>\r\n            <div class=\"action-icons\" *dxTemplate=\"let d of 'editCellTemplate'\">\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.externalLink\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openLink(d)\">\r\n                <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.openPopup\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openPopupLink(d)\">\r\n                <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.download\" class=\"no-bg\" matTooltip=\"Download\"\r\n                (click)=\"downloadData(d)\">\r\n                <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.edit && showVersions && !d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.editRecord\" class=\"no-bg mr-2\" matTooltip=\"Edit\"\r\n                (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && !showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy\" (click)=\"duplicateDate(d)\">\r\n                <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\">\r\n                  <span class=\"sr-only\">Copy</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy Version\" (click)=\"duplicateVersion(d)\">\r\n                <em class=\"fa fa-copy\" *showField=\"'PAG_DES_GRID_LIST_VERSION'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Copy Version</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.ribbonconfig && updateGrid?.view && showVersions\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                fieldKey=\"PAG_DES_GRID_LIST_VERSION\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.viewRecord\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.emailview && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Preview\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" title=\"view\"\r\n                *ngIf=\"updateGrid?.version && !showVersions && islocked(updateGrid, d.data) && isEnable(updateGrid, d.data)\" class=\"no-bg\"\r\n                matTooltip=\"Versions\" (click)=\"viewVersion(d)\">\r\n                <em class=\"fa fa-code-fork\" title=\"View\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.isEnable && updateGrid?.activatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Activate\" (click)=\"activatePages(d)\">\r\n                <span class=\"material-symbols-outlined activate\">check</span>\r\n              </a>\r\n\r\n              <a href=\"javascript:void(0)\" *ngIf=\"d.data.isEnable && updateGrid?.deactivatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Deactivate\" (click)=\"deactivatePages(d)\">\r\n                <span class=\"material-symbols-outlined deactivate\">close</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"showVersions && !d.data.isactive && d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Activate\" (click)=\"activatePageVersion(d)\">\r\n                <em class=\"fa fa-check-circle-o\" *showField=\"'PAG_DES_GRID_LIST_ACTIVATE'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Activate</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <span *ngIf=\"showVersions && !d.data.isactive && !d.data.published\" class=\"no-bg mr-2\"\r\n                matTooltip=\"This version is not published\">\r\n                <em class=\"fa fa-exclamation-triangle text-warning\" aria-hidden=\"true\">\r\n                  <span class=\"sr-only\">This version is not published</span>\r\n                </em>\r\n                <span class=\"sr-only\">View</span>\r\n              </span>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.lock && d.data.locked\" (click)=\"check(updateGrid, d)\"\r\n                class=\"no-bg ml-2\" matTooltip=\"Locked By - {{ d?.data?.lockedbyUser?.firstname }}\">\r\n                <em *ngIf=\"updateGrid?.lock && d.data.locked\" class=\"fa fa-lock\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.delete\" class=\"no-bg\" matTooltip=\"Delete\"\r\n                (click)=\"deleteData(d)\">\r\n                <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.toggle\" class=\"no-bg\"\r\n                [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\" (click)=\"activeUser(d)\">\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n            <span href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" class=\"link-data\" (click)=\"getRouter(d)\">{{\r\n              d.value !== 'null' ? d.value : ''\r\n              }}</span>\r\n          </div>\r\n          <ng-container *ngIf=\"updateGrid.linkVisible\">\r\n            <div *dxTemplate=\"let d of 'cellTemplate'\"(click)=\"navigateLink($event, d)\">\r\n              <span *ngIf=\"d.value && d.value !== 'null'\" #contentWrapper [innerHTML]=\"d.value | safeHtml\">{{\r\n                d.value !== 'null' ? d.value : ''\r\n              }}</span>\r\n            </div>\r\n          </ng-container>\r\n          <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n            <em class=\"fa fa-book\" (click)=\"popup(d.value)\"></em>\r\n          </div>\r\n        </dx-data-grid>\r\n\r\n        <ng-template #callNarrativePopup>\r\n          <h2 matDialogTitle>Narrative</h2>\r\n          <div [innerHTML]=\"narrativeData\"></div>\r\n          <div class=\"text-right\">\r\n            <button mat-button (click)=\"closeNarrativePopup()\" role=\"button\" class=\"btn btn-cancel mr-2\">Close</button>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:12px!important;color:var(--primary)}:host ::ng-deep .card .card-body{padding:0 15px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;color:var(--hover-text);background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}.action-icons .activate,.action-icons .deactivate{font-size:20px;line-height:normal;position:relative;top:5px;border-radius:30px;width:12px;display:inline-flex;align-items:center;justify-content:center;height:12px;font-weight:400}.landing-title{color:var(--header-color);font-weight:700;font-size:var(--font-14);position:absolute;left:15px;z-index:99;top:12px;margin:0}:host ::ng-deep .dx-data-row.isnew td{font-size:15px!important;font-weight:600!important;position:relative}:host ::ng-deep .dx-data-row td.message-new{position:relative;padding-left:20px}:host ::ng-deep .dx-data-row td.new-icon{position:relative}:host ::ng-deep .dx-data-row td.new-icon:before{content:\"\\f111\";font-family:FontAwesome,sans-serif;font-size:16px;color:#c92c1f;position:absolute;top:50%;left:5px;transform:translateY(-50%);line-height:normal}.link-data{color:var(--interactive-color);cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: AuthService }, { type: LocalService }, { type: LocalStorageService }, { type: AppService }, { type: DataStoreService }, { type: i0.Renderer2 }, { type: AlertService }]; }, propDecorators: { dataGrid: [{
                type: ViewChild,
                args: [DxDataGridComponent, { static: false }]
            }], contentWrappers: [{
                type: ViewChildren,
                args: ['contentWrapper']
            }], dataList: [{
                type: Input
            }], dataSource: [{
                type: Input
            }], columns: [{
                type: Input
            }], updateGrid: [{
                type: Input
            }], totalCount: [{
                type: Input
            }], page: [{
                type: Input
            }], isShow: [{
                type: Input
            }], exportPageName: [{
                type: Input
            }], remoteOperations: [{
                type: Input
            }], currentPage: [{
                type: Output
            }], editTableRow: [{
                type: Output
            }], viewTableRow: [{
                type: Output
            }], deleteTableRow: [{
                type: Output
            }], openExternalLink: [{
                type: Output
            }], openpopupLink: [{
                type: Output
            }], routeTo: [{
                type: Output
            }], openPopup: [{
                type: Output
            }], sortOrder: [{
                type: Output
            }], filterSearchValue: [{
                type: Output
            }], filterBuilderPopup: [{
                type: Output
            }], filterPanel: [{
                type: Output
            }], multipleFilterValues: [{
                type: Output
            }], downloadTableRow: [{
                type: Output
            }], rowSelection: [{
                type: Output
            }], toggleRow: [{
                type: Output
            }], duplicateRow: [{
                type: Output
            }], viewVersions: [{
                type: Output
            }], activateVersion: [{
                type: Output
            }], activatePage: [{
                type: Output
            }], deactivatePage: [{
                type: Output
            }], duplicatePageVersion: [{
                type: Output
            }], selectedRowsData: [{
                type: Output
            }] } });

class FilterPipe {
    transform(value, input) {
        if (input) {
            return value.filter(val => val.toLowerCase().indexOf(input.toLowerCase()) >= 0);
        }
        else {
            return value;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, name: "FilterPipe" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'FilterPipe'
                }]
        }] });

class MaskPipe {
    transform(value, showSsnMask) {
        if (showSsnMask === true) {
            if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return '***-**-' + String(value).substring(String(value).length - 4);
            }
            else {
                return '';
            }
        }
        else {
            const cleaned = ('' + value).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            else if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return (String(value).substring(0, 3) + '-' + String(value).substring(3, 5) + '-' + String(value).substring(5, 9));
            }
            else {
                return '';
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, name: "ssnMask" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ssnMask' }]
        }] });

class TabFilterPipe {
    transform(tabList, searchTerm, originalTabList) {
        if (!tabList || !searchTerm) {
            return originalTabList;
        }
        else {
            tabList = JSON.parse(JSON.stringify(originalTabList));
        }
        searchTerm = searchTerm.toLowerCase();
        return this.recursiveSearchInMenu(tabList, searchTerm);
    }
    recursiveSearchInMenu(tabList, searchTerm) {
        const matchingTabs = [];
        tabList.forEach((tab) => {
            if (tab.label.toLowerCase().includes(searchTerm)) {
                matchingTabs.push(tab);
            }
            else {
                const matchingChildren = this.recursiveSearchInMenu(tab.items, searchTerm);
                if (matchingChildren.length > 0) {
                    tab.items = matchingChildren;
                    matchingTabs.push(tab);
                }
            }
        });
        return matchingTabs;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TabFilterPipe, name: "tabfilter" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'tabfilter'
                }]
        }] });

class SharedPipesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, declarations: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe], imports: [CommonModule], exports: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, providers: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe], imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe],
                    exports: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe],
                    providers: [MaskPipe, FilterPipe, TabFilterPipe, SafeHtmlPipe]
                }]
        }] });

class DirectivesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective]
                }]
        }] });

class AlertModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class GridListModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, declarations: [GridListComponent], imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            DirectivesModule,
            NgxfUploaderModule,
            AlertModule, i1$4.NgxMaskModule], exports: [GridListComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            DirectivesModule,
            NgxfUploaderModule,
            AlertModule,
            NgxMaskModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GridListComponent],
                    imports: [
                        CommonModule,
                        MaterialUIModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DirectivesModule,
                        NgxfUploaderModule,
                        AlertModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [GridListComponent],
                }]
        }] });

class PrimengModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, imports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule,
            PanelModule,
            DragDropModule,
            AutoCompleteModule], exports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule,
            SidebarModule,
            PanelModule,
            DragDropModule,
            AutoCompleteModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, imports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule,
            PanelModule,
            DragDropModule,
            AutoCompleteModule, CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule,
            SidebarModule,
            PanelModule,
            DragDropModule,
            AutoCompleteModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        AccordionModule,
                        TabMenuModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        DropdownModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        CardModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        AlertModule,
                        ConfirmDialogModule,
                        TreeSelectModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        TabViewModule,
                        SidebarModule,
                        PanelModule,
                        DragDropModule,
                        AutoCompleteModule,
                    ],
                    exports: [
                        CommonModule,
                        AccordionModule,
                        TabMenuModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        DropdownModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        CardModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        AlertModule,
                        ConfirmDialogModule,
                        TreeSelectModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        TabViewModule,
                        SidebarModule,
                        SidebarModule,
                        PanelModule,
                        DragDropModule,
                        AutoCompleteModule,
                    ]
                }]
        }] });

const routes$2 = [
    {
        path: 'search/:pageId',
        component: DynamicSearchComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
    },
    {
        path: 'view/:pageId',
        component: DynamicSearchComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
    },
    {
        path: 'search/:pageId/:pageSaveID',
        component: DynamicSearchComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
    }
];
class DynamicSearchRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, imports: [RouterModule.forChild(routes$2), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$2)],
                    exports: [RouterModule]
                }]
        }] });

class DynamicSearchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, declarations: [DynamicSearchComponent], imports: [CommonModule,
            FormioModule,
            AlertModule,
            FormsModule,
            DynamicSearchRoutingModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            GridListModule,
            DynamicModule,
            PrimengModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, imports: [CommonModule,
            FormioModule,
            AlertModule,
            FormsModule,
            DynamicSearchRoutingModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            GridListModule,
            DynamicModule,
            PrimengModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicSearchComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        AlertModule,
                        FormsModule,
                        DynamicSearchRoutingModule,
                        ReactiveFormsModule,
                        MaterialUIModule,
                        DxDataGridModule,
                        DxSelectBoxModule,
                        DxCheckBoxModule,
                        GridListModule,
                        DynamicModule,
                        PrimengModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    providers: []
                }]
        }] });

var dynamicSearch_module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DynamicSearchModule: DynamicSearchModule
});

class PageBuilderAddURL {
    static EndPoints = {
        page_config: {
            pageVersion: '/platform/page-designer/pageversion/{id}',
            page: '/platform/page-designer/page',
            dbSchema: '/database/',
            page_lock: '/platform/page-designer/page/{id}/lock',
            assetByVersion: '/platform/page-designer/asset/batch/{pageid}/version/{versionid}',
            pageExist: '/platform/page-designer/page/{pagename}/{orgid}',
            pageaudit: '/platform/page-designer/page/audit/pageaudit/{id}/{id2}',
            orgPageList: '/platform/page-designer/page/organization/{orgid}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        rbac: {
            asset: {
                listByPageID: '/asset/getpagebyid',
                batch: '/asset/batch/'
            },
            organization: {
                list: '/platform/page-designer/page/organization/'
            }
        },
        report: {
            report: '/report'
        },
        db: {
            schemaList: '/database/organization/{organizationid}/{dbstring}',
            tableBySchemaName: '/database/{schema}/{dbstring}',
            relatedTableFields: '/database/{table}/{schema}/{dbstring}/related',
            columnsOfRelatedTables: '/database/{table}/related',
            fieldsOfRelatedTable: '/database/related',
            tableFields: '/database/{table}/{schema}/{dbstring}/validColumn'
        },
        attachment: {
            uploadKey: '/common/files/upload-key',
            list: '/solution/formresponse-attachment/{formid}/{responseid}',
            delete: '/solution/formresponse-attachment/{fileid}',
            downloadKey: '/file/download-key'
        }
    };
}
class RBACINFO {
    unsubscribe() {
        throw new Error('Method not implemented.');
    }
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    chatServer;
    environment;
}
class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}

class PageBuilderAddService {
    router;
    localstore;
    _storeservice;
    authorisedTabs = [];
    httpService;
    constructor(router, localstore, _storeservice) {
        this.router = router;
        this.localstore = localstore;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getFormData = new BehaviorSubject('');
    currentFormData = this.getFormData.asObservable();
    setFormData(data) {
        this.getFormData.next(data);
    }
    getBasicData = new BehaviorSubject('');
    currentBasicData = this.getBasicData.asObservable();
    setBasicData(data) {
        this.getBasicData.next(data);
    }
    getPageType = new BehaviorSubject(sessionStorage.getItem('SELECTED_PAGE'));
    currentPageType = this.getPageType.asObservable();
    setPageType(data) {
        this.getPageType.next(data);
    }
    getBasicDetailsbyId(id) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.page_config.pageVersion.replace('{id}', id));
    }
    pageAlertChecking(pagename, orgid, _body) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.page_config.pageExist
            .replace('{pagename}', String(pagename))
            .replace('{orgid}', String(orgid)), _body);
    }
    createPage(data) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.page_config.page + '/', data);
    }
    createAssetByVersion(pageid, versionid, assetData) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.page_config.assetByVersion
            .replace('{pageid}', String(pageid))
            .replace('{versionid}', String(versionid)), assetData);
    }
    getMenuList(data, id) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.rbac.asset.batch + id, data);
    }
    getTableFields(param1, param2) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.page_config.dbSchema + param1 + '/' + param2 + '/true/');
    }
    createReportTable(data) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.report.report + '/', data);
    }
    getAllPage(url) {
        return this.httpService.get(url);
    }
    getSchema() {
        return this.httpService.get(PageBuilderAddURL.EndPoints.page_config.dbSchema);
    }
    getAllOrganisations() {
        return this.httpService.get(PageBuilderAddURL.EndPoints.rbac.organization.list + 'all');
    }
    editPageStatus(data, id) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.page_config.page_lock.replace('{id}', String(id)), data);
    }
    getOrgList(orgid) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.page_config.orgPageList.replace('{orgid}', orgid));
    }
    getUploadKey(data) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.attachment.uploadKey, data);
    }
    getFormResponseAttachment(formid, responseid) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.attachment.list.replace('{formid}', formid).replace('{responseid}', responseid));
    }
    deleteFormResponseAttachment(fileid) {
        return this.httpService.delete(PageBuilderAddURL.EndPoints.attachment.delete.replace('{fileid}', fileid));
    }
    downloadFormResponseAttachment(data) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.attachment.downloadKey, data);
    }
    returnToList() {
        this.router.navigate(['/pages/page-design/list']);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddService, deps: [{ token: i1.Router }, { token: LocalService }, { token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: LocalService }, { type: PlatformDataStoreService }]; } });

class FileUploadWrapperComponent {
    _storeservice;
    alertService;
    authService;
    pageBuilderAddService;
    confirmationService;
    attachmentsService;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    formioEvent = new EventEmitter();
    uploadedFiles = [];
    formStatus;
    sharedInfo = {};
    pageId;
    responseId;
    uploadedFilesTest = [];
    tableColumns;
    updateGrid;
    categoryList = [];
    subCategoryList = [];
    category;
    subCategory;
    lookupList = [];
    categoryid;
    subcategoryid;
    httpService;
    constructor(_storeservice, alertService, authService, pageBuilderAddService, confirmationService, attachmentsService) {
        this._storeservice = _storeservice;
        this.alertService = alertService;
        this.authService = authService;
        this.pageBuilderAddService = pageBuilderAddService;
        this.confirmationService = confirmationService;
        this.attachmentsService = attachmentsService;
        this.formStatus = 'FORM_RESPONSE_ATTACHMENTS_';
        this.sharedInfo = this.authService.getSharedMessage();
        this.pageId = this.sharedInfo?.pageId;
        this.responseId = this.sharedInfo?.id;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        this.setTableColumns();
        this.getCategory();
        if (this.responseId) {
            this.formStatus = `${this.formStatus}UPDATE`;
        }
        else {
            this.formStatus = `${this.formStatus}CREATE`;
        }
        this.uploadedFiles = [];
        if (this.responseId) {
            this.getAllAttachments();
        }
    }
    onUpload(event, upload) {
        let resID = '';
        if (this.responseId) {
            resID = `/${this.responseId}`;
        }
        let data;
        event.files.map(f => {
            data = {
                fileName: `${this.pageId}${resID}/${f.name}`,
                contentType: f.type,
                type: this.formStatus
            };
            this.pageBuilderAddService.getUploadKey(data).subscribe((res) => {
                const url = res.data;
                const uploadDetails = f;
                const type = f.type;
                const fileURL = res.data.split('?')[0];
                this.uploadedFiles.push({
                    name: f.name,
                    path: fileURL,
                    attachmenttype: f.type,
                    category: this.categoryid[0].id,
                    subcategory: this.subcategoryid[0].id,
                    categoryName: this.category,
                    subcategoryName: this.subCategory
                });
                const fileInfo = {
                    type: this.formStatus,
                    formid: Number(this.pageId),
                    attachmentdetails: this.uploadedFiles
                };
                this.httpService.putUpload(url, uploadDetails, type).subscribe(() => {
                    this.alertService.success('Uploaded Successfully!');
                    this.value = fileInfo;
                    this.valueChange.emit(fileInfo);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
                    this.setTableColumns();
                    upload.clear();
                    this.subCategory = '';
                    this.category = '';
                });
                this.authService.setSharedMessage(fileInfo);
            });
        });
    }
    getAllAttachments() {
        this.pageBuilderAddService.getFormResponseAttachment(this.pageId, this.responseId).subscribe(res => {
            const data = res['data'];
            const fileInfo = {
                type: this.formStatus,
                formid: Number(this.pageId),
                attachmentdetails: data
            };
            this.authService.setSharedMessage(fileInfo);
            this.uploadedFiles = data.map(f => {
                return {
                    id: f.id,
                    name: f.name,
                    path: f.path,
                    categoryName: f.categoryDetails.key,
                    subcategoryName: f.subcategoryDetails.key,
                    attachmenttype: f.attachmenttype,
                    category: f.category,
                    subcategory: f.subcategory
                };
            });
        });
    }
    deleteAttachment(e) {
        const file = e?.data;
        if (file?.id) {
            this.pageBuilderAddService.deleteFormResponseAttachment(file.id).subscribe(() => {
                this.alertService.success('Deleted successfully!');
                this.getAllAttachments();
            });
        }
        else {
            this.uploadedFiles.forEach((f, i) => {
                if (f.path === file.path) {
                    this.uploadedFiles.splice(i, 1);
                    this.setTableColumns();
                }
            });
        }
    }
    downloadAttachment(event) {
        const path = event.data.path.split('/');
        const path1 = path.pop();
        const path2 = path.pop();
        const path3 = path.pop();
        const path4 = path.pop();
        const data = {
            fileName: `${path4}/${path3}/${path2}/${path1}`
        };
        this.pageBuilderAddService.downloadFormResponseAttachment(data).subscribe((res) => {
            if (res && res.status == 'success') {
                window.open(res.data, '_blank');
            }
        });
    }
    confirm(event) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this.deleteAttachment(event);
            }
        });
    }
    setTableColumns() {
        this.tableColumns = [
            // {
            //   columnDef: 'id',
            //   header: 'Id',
            //   cell: (element: any) => `${element.id}`,
            //   dateFormat: false,
            //   icon: false,
            //   filter: false,
            //   link: false
            // },
            {
                columnDef: 'name',
                header: 'File Name',
                cell: (element) => console.log(element, 'elementssss'),
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'categoryName',
                header: 'Category',
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'subcategoryName',
                header: 'Sub Category',
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'attachmenttype',
                header: 'Type',
                cell: (element) => `${element.type}`,
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            }
        ];
        this.updateGrid = {
            edit: false,
            view: false,
            lock: false,
            duplicate: false,
            delete: false,
            externalLink: false,
            showDownload: true,
            showDelete: true,
            isNewlyUploaded: this.responseId ? false : true
        };
    }
    getCategory() {
        const categoryname = 'DOCUMENT_LIST';
        this.attachmentsService.getCategoryLookup(categoryname).subscribe((res) => {
            this.lookupList = res.data;
            this.lookupList.map(z => {
                if (!z.parentid) {
                    this.categoryList.push(z);
                }
            });
        });
    }
    getSubCategory() {
        this.subcategoryid = this.subCategoryList.filter(e => e.lookupvalue === this.subCategory);
    }
    getCatogoryItem() {
        const data = this.lookupList.filter(x => x.lookupvalue === this.category);
        this.categoryid = data;
        this.subCategoryList = this.lookupList.filter(y => y.parentid === data[0].id);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadWrapperComponent, deps: [{ token: PlatformDataStoreService }, { token: AlertService }, { token: AuthService }, { token: PageBuilderAddService }, { token: i5.ConfirmationService }, { token: AttachmentsService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FileUploadWrapperComponent, selector: "app-file-upload-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, providers: [ConfirmationService], ngImport: i0, template: "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n<p-fileUpload\r\n  #fileUpload\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\"\r\n  [auto]=\"true\"\r\n  maxFileSize=\"1000000\"\r\n  multiple=\"multiple\"\r\n  [disabled]=\"!subCategory\">\r\n  <ng-template pTemplate=\"toolbar\">\r\n    <span class=\"d-flex fileUpload-category\">\r\n      <p-dropdown\r\n        [options]=\"categoryList\"\r\n        placeholder=\"Select Category\"\r\n        [(ngModel)]=\"category\"\r\n        optionLabel=\"lookupkey\"\r\n        optionValue=\"lookupvalue\"\r\n        (onChange)=\"getCatogoryItem()\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n      <p-dropdown\r\n        [options]=\"subCategoryList\"\r\n        placeholder=\"Select Subcategory\"\r\n        [(ngModel)]=\"subCategory\"\r\n        optionLabel=\"lookupkey\"\r\n        (onChange)=\"getSubCategory()\"\r\n        optionValue=\"lookupvalue\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <p-card styleClass=\"rbac-card gridview w-100\" *ngIf=\"uploadedFiles.length\">\r\n      <app-grid-list\r\n        [dataList]=\"uploadedFiles\"\r\n        [updateGrid]=\"updateGrid\"\r\n        [columns]=\"tableColumns\"\r\n        (downloadFormResponseFiles)=\"downloadAttachment($event)\"\r\n        (deleteFormResponseFiles)=\"confirm($event)\">\r\n      </app-grid-list>\r\n    </p-card>\r\n  </ng-template>\r\n</p-fileUpload>\r\n", styles: [":host ::ng-deep .p-fileupload{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose{padding:5px 10px;font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pi-plus{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pTemplate{padding:5px 10px}:host ::ng-deep .p-fileupload .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}:host ::ng-deep .fileUpload-category .p-dropdown{max-width:180px}:host ::ng-deep .fileUpload-category .p-dropdown .p-dropdown-empty-message{font-size:var(--base-font-size)}:host ::ng-deep .fileUpload-category .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i25.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "component", type: i11$1.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "closeAriaLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }, { kind: "component", type: i12$1.FileUpload, selector: "p-fileUpload", inputs: ["name", "url", "method", "multiple", "accept", "disabled", "auto", "withCredentials", "maxFileSize", "invalidFileSizeMessageSummary", "invalidFileSizeMessageDetail", "invalidFileTypeMessageSummary", "invalidFileTypeMessageDetail", "invalidFileLimitMessageDetail", "invalidFileLimitMessageSummary", "style", "styleClass", "previewWidth", "chooseLabel", "uploadLabel", "cancelLabel", "chooseIcon", "uploadIcon", "cancelIcon", "showUploadButton", "showCancelButton", "mode", "headers", "customUpload", "fileLimit", "uploadStyleClass", "cancelStyleClass", "removeStyleClass", "chooseStyleClass", "files"], outputs: ["onBeforeUpload", "onSend", "onUpload", "onError", "onClear", "onRemove", "onSelect", "onProgress", "uploadHandler", "onImageError"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload-wrapper', providers: [ConfirmationService], template: "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n<p-fileUpload\r\n  #fileUpload\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\"\r\n  [auto]=\"true\"\r\n  maxFileSize=\"1000000\"\r\n  multiple=\"multiple\"\r\n  [disabled]=\"!subCategory\">\r\n  <ng-template pTemplate=\"toolbar\">\r\n    <span class=\"d-flex fileUpload-category\">\r\n      <p-dropdown\r\n        [options]=\"categoryList\"\r\n        placeholder=\"Select Category\"\r\n        [(ngModel)]=\"category\"\r\n        optionLabel=\"lookupkey\"\r\n        optionValue=\"lookupvalue\"\r\n        (onChange)=\"getCatogoryItem()\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n      <p-dropdown\r\n        [options]=\"subCategoryList\"\r\n        placeholder=\"Select Subcategory\"\r\n        [(ngModel)]=\"subCategory\"\r\n        optionLabel=\"lookupkey\"\r\n        (onChange)=\"getSubCategory()\"\r\n        optionValue=\"lookupvalue\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <p-card styleClass=\"rbac-card gridview w-100\" *ngIf=\"uploadedFiles.length\">\r\n      <app-grid-list\r\n        [dataList]=\"uploadedFiles\"\r\n        [updateGrid]=\"updateGrid\"\r\n        [columns]=\"tableColumns\"\r\n        (downloadFormResponseFiles)=\"downloadAttachment($event)\"\r\n        (deleteFormResponseFiles)=\"confirm($event)\">\r\n      </app-grid-list>\r\n    </p-card>\r\n  </ng-template>\r\n</p-fileUpload>\r\n", styles: [":host ::ng-deep .p-fileupload{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose{padding:5px 10px;font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pi-plus{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pTemplate{padding:5px 10px}:host ::ng-deep .p-fileupload .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}:host ::ng-deep .fileUpload-category .p-dropdown{max-width:180px}:host ::ng-deep .fileUpload-category .p-dropdown .p-dropdown-empty-message{font-size:var(--base-font-size)}:host ::ng-deep .fileUpload-category .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}\n"] }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }, { type: AlertService }, { type: AuthService }, { type: PageBuilderAddService }, { type: i5.ConfirmationService }, { type: AttachmentsService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });

// @ts-nocheck
const BaseInputComponent = Components.components.input;
const TextfieldComponent = Components.components.textfield;
function createCustomFormioComponent(customComponentOptions) {
    return class CustomComponent extends BaseInputComponent {
        component;
        static editForm = customComponentOptions.editForm || TextfieldComponent.editForm;
        id = Utils.getRandomComponentId();
        type = customComponentOptions.type;
        _customAngularElement;
        static schema() {
            return BaseInputComponent.schema({
                ...customComponentOptions.schema,
                type: customComponentOptions.type,
            });
        }
        get defaultSchema() {
            return CustomComponent.schema();
        }
        get emptyValue() {
            return customComponentOptions.emptyValue || null;
        }
        static get builderInfo() {
            return {
                title: customComponentOptions.title,
                group: customComponentOptions.group,
                icon: customComponentOptions.icon,
                weight: customComponentOptions.weight,
                documentation: customComponentOptions.documentation,
                schema: CustomComponent.schema(),
            };
        }
        constructor(component, options, data) {
            super(component, {
                ...options,
                sanitizeConfig: {
                    addTags: [customComponentOptions.selector],
                },
            }, data);
            this.component = component;
            if (customComponentOptions.extraValidators) {
                this.validators = this.validators.concat(customComponentOptions.extraValidators);
            }
        }
        elementInfo() {
            const info = super.elementInfo();
            info.type = customComponentOptions.selector;
            info.changeEvent = customComponentOptions.changeEvent || 'valueChange';
            info.attr = {
                ...info.attr,
                class: info.attr.class.replace('form-control', 'form-control-custom-field') // remove the form-control class as the custom angular component may look different
            };
            return info;
        }
        get inputInfo() {
            const info = {
                id: this.key,
                ...this.elementInfo()
            };
            return info;
        }
        renderElement(value, index) {
            const info = this.inputInfo;
            return this.renderTemplate(customComponentOptions.template || 'input', {
                input: info,
                value,
                index
            });
        }
        attach(element) {
            let superAttach = super.attach(element);
            this._customAngularElement = element.querySelector(customComponentOptions.selector);
            // Bind the custom options and the validations to the Angular component's inputs (flattened)
            if (this._customAngularElement) {
                // To make sure we have working input in IE...
                // IE doesn't render it properly if it's not visible on the screen
                // due to the whole structure applied via innerHTML to the parent
                // so we need to use appendChild
                if (!this._customAngularElement.getAttribute('ng-version')) {
                    this._customAngularElement.removeAttribute('ref');
                    const newCustomElement = document.createElement(customComponentOptions.selector);
                    newCustomElement.setAttribute('ref', 'input');
                    Object.keys(this.inputInfo.attr).forEach((attr) => {
                        newCustomElement.setAttribute(attr, this.inputInfo.attr[attr]);
                    });
                    this._customAngularElement.appendChild(newCustomElement);
                    this._customAngularElement = newCustomElement;
                    superAttach = super.attach(element);
                }
                // Bind customOptions
                for (const key in this.component.customOptions) {
                    if (this.component.customOptions.hasOwnProperty(key)) {
                        this._customAngularElement[key] = this.component.customOptions[key];
                    }
                }
                // Bind validate options
                for (const key in this.component.validate) {
                    if (this.component.validate.hasOwnProperty(key)) {
                        this._customAngularElement[key] = this.component.validate[key];
                    }
                }
                // Bind options explicitly set
                const fieldOptions = customComponentOptions.fieldOptions;
                if (isArray(fieldOptions) && fieldOptions.length > 0) {
                    for (const key in fieldOptions) {
                        if (fieldOptions.hasOwnProperty(key)) {
                            this._customAngularElement[fieldOptions[key]] = this.component[fieldOptions[key]];
                        }
                    }
                }
                // Attach event listener for emit event
                this._customAngularElement.addEventListener('formioEvent', (event) => {
                    this.emit(event.detail.eventName, {
                        ...event.detail.data,
                        component: this.component
                    });
                });
                // Ensure we bind the value (if it isn't a multiple-value component with no wrapper)
                if (!this._customAngularElement.value && !this.component.disableMultiValueWrapper) {
                    this.restoreValue();
                }
            }
            return superAttach;
        }
        // Add extra option to support multiple value (e.g. datagrid) with single angular component (disableMultiValueWrapper)
        useWrapper() {
            return this.component.hasOwnProperty('multiple') && this.component.multiple && !this.component.disableMultiValueWrapper;
        }
        get defaultValue() {
            let defaultValue = this.emptyValue;
            // handle falsy default value
            if (!isNil(this.component.defaultValue)) {
                defaultValue = this.component.defaultValue;
            }
            if (this.component.customDefaultValue && !this.options.preview) {
                defaultValue = this.evaluate(this.component.customDefaultValue, { value: '' }, 'value');
            }
            return clone(defaultValue);
        }
    };
}

function registerCustomTag(tag, injector) {
    injector.get(CustomTagsService$1).addCustomTag(tag);
}
function registerCustomTags(tags, injector) {
    tags.forEach(tag => registerCustomTag(tag, injector));
}
function registerCustomFormioComponent(options, angularComponent, injector) {
    registerCustomTag(options.selector, injector);
    const complexCustomComponent = createCustomElement(angularComponent, { injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, createCustomFormioComponent(options));
}
function registerCustomFormioComponentWithClass(options, angularComponent, formioClass, injector) {
    registerCustomTag(options.selector, injector);
    const complexCustomComponent = createCustomElement(angularComponent, { injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, formioClass);
}

const COMPONENT_OPTIONS$6 = {
    type: 'fileupload',
    selector: 'app-fileupload',
    group: 'basic',
    title: 'File Upload',
    icon: 'file'
};
function registerFileUploadComponent(injector) {
    console.log('registerFileUploadComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$6, FileUploadWrapperComponent, injector);
        console.log('File Upload Component Registration Done');
    }
    catch (error) {
        console.log('Error is register File upload component');
    }
}

class FileUploadBasicComponent {
    _storeservice;
    alertService;
    authService;
    pageBuilderAddService;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    formioEvent = new EventEmitter();
    uploadedFiles;
    formStatus;
    sharedInfo = {};
    pageId;
    responseId;
    uploadedFilesTest = [];
    isShow;
    httpService;
    constructor(_storeservice, alertService, authService, pageBuilderAddService) {
        this._storeservice = _storeservice;
        this.alertService = alertService;
        this.authService = authService;
        this.pageBuilderAddService = pageBuilderAddService;
        this.formStatus = 'FORM_RESPONSE_ATTACHMENTS_';
        this.sharedInfo = this.authService.getSharedMessage();
        this.pageId = this.sharedInfo?.pageId;
        this.responseId = this.sharedInfo?.id;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        if (this.responseId) {
            this.formStatus = `${this.formStatus}UPDATE`;
        }
        else {
            this.formStatus = `${this.formStatus}CREATE`;
        }
        this.uploadedFiles = [];
        if (this.sharedInfo?.attachmentdetails) {
            this.uploadedFiles = this.sharedInfo?.attachmentdetails;
        }
        if (this.responseId) {
            this.getAllAttachments();
        }
    }
    onUpload(event, upload) {
        let resID = '';
        if (this.responseId) {
            resID = `/${this.responseId}`;
        }
        let data;
        event.files.map(f => {
            data = {
                fileName: `${this.pageId}${resID}/${f.name}`,
                contentType: f.type,
                type: this.formStatus
            };
            this.pageBuilderAddService.getUploadKey(data).subscribe((res) => {
                const url = res.data;
                const uploadDetails = f;
                const type = f.type;
                const fileURL = res.data;
                this.uploadedFiles = [
                    {
                        name: f.name,
                        path: fileURL,
                        attachmenttype: f.type
                    }
                ];
                const fileInfo = {
                    type: this.formStatus,
                    formid: Number(this.pageId),
                    attachmentdetails: this.uploadedFiles
                };
                this.httpService.putUpload(url, uploadDetails, type).subscribe(() => {
                    this.alertService.success('Uploaded Successfully!');
                    this.isShow = true;
                    console.log(this.uploadedFiles);
                    this.value = fileInfo;
                    this.valueChange.emit(fileInfo);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
                    upload.clear();
                });
                this.authService.setSharedMessage(fileInfo);
            });
        });
    }
    getAllAttachments() {
        this.pageBuilderAddService.getFormResponseAttachment(this.pageId, this.responseId).subscribe(res => {
            const data = res['data'];
            const fileInfo = {
                type: this.formStatus,
                formid: Number(this.pageId),
                attachmentdetails: data
            };
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
            this.authService.setSharedMessage(fileInfo);
            this.uploadedFiles = data.map(f => {
                return {
                    name: f.name,
                    path: f.path,
                    attachmenttype: f.attachmenttype
                };
            });
        });
    }
    deleteAttachment(e) {
        this.isShow = false;
        const file = e;
        if (file?.id) {
            this.pageBuilderAddService.deleteFormResponseAttachment(file.id).subscribe(() => {
                this.alertService.success('Deleted successfully!');
            });
        }
        else {
            this.uploadedFiles = [];
        }
    }
    viewAttachment(file) {
        console.log(file);
        const fileURL = file.path;
        window.open(fileURL, '_blank');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadBasicComponent, deps: [{ token: PlatformDataStoreService }, { token: AlertService }, { token: AuthService }, { token: PageBuilderAddService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FileUploadBasicComponent, selector: "app-file-upload-basic", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, ngImport: i0, template: "<p-fileUpload\r\n  #fileUpload\r\n  mode=\"basic\"\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  chooseLabel=\"Upload\"\r\n  [maxFileSize]=\"1000000\"\r\n  [auto]=\"true\"\r\n  [disabled]=\"isShow\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\">\r\n</p-fileUpload>\r\n\r\n<ng-container *ngIf=\"isShow\">\r\n  <p>{{ uploadedFiles?.name }}</p>\r\n  <p-button (click)=\"deleteAttachment(uploadedFiles)\"><em class=\"pi pi-trash\"></em></p-button>\r\n  <p-button (click)=\"viewAttachment(uploadedFiles)\"><em class=\"fa fa-eye\"></em></p-button>\r\n</ng-container>\r\n", styles: ["li{list-style:none}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i12$1.FileUpload, selector: "p-fileUpload", inputs: ["name", "url", "method", "multiple", "accept", "disabled", "auto", "withCredentials", "maxFileSize", "invalidFileSizeMessageSummary", "invalidFileSizeMessageDetail", "invalidFileTypeMessageSummary", "invalidFileTypeMessageDetail", "invalidFileLimitMessageDetail", "invalidFileLimitMessageSummary", "style", "styleClass", "previewWidth", "chooseLabel", "uploadLabel", "cancelLabel", "chooseIcon", "uploadIcon", "cancelIcon", "showUploadButton", "showCancelButton", "mode", "headers", "customUpload", "fileLimit", "uploadStyleClass", "cancelStyleClass", "removeStyleClass", "chooseStyleClass", "files"], outputs: ["onBeforeUpload", "onSend", "onUpload", "onError", "onClear", "onRemove", "onSelect", "onProgress", "uploadHandler", "onImageError"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadBasicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload-basic', template: "<p-fileUpload\r\n  #fileUpload\r\n  mode=\"basic\"\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  chooseLabel=\"Upload\"\r\n  [maxFileSize]=\"1000000\"\r\n  [auto]=\"true\"\r\n  [disabled]=\"isShow\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\">\r\n</p-fileUpload>\r\n\r\n<ng-container *ngIf=\"isShow\">\r\n  <p>{{ uploadedFiles?.name }}</p>\r\n  <p-button (click)=\"deleteAttachment(uploadedFiles)\"><em class=\"pi pi-trash\"></em></p-button>\r\n  <p-button (click)=\"viewAttachment(uploadedFiles)\"><em class=\"fa fa-eye\"></em></p-button>\r\n</ng-container>\r\n", styles: ["li{list-style:none}\n"] }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }, { type: AlertService }, { type: AuthService }, { type: PageBuilderAddService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });

const COMPONENT_OPTIONS$5 = {
    type: 'basicfileupload',
    selector: 'app-basicfileupload',
    group: 'basic',
    title: 'Basic File Upload',
    icon: 'file'
};
function registerBasicFileUploadComponent(injector) {
    console.log('registerBasicFileUploadComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$5, FileUploadBasicComponent, injector);
        console.log('Basic File Upload Component Registration Done');
    }
    catch (error) {
        console.log('Error is register Basic File upload component');
    }
}

const today$1 = new Date();
const currentDate$1 = today$1.getDate();
const month$1 = today$1.getMonth();
const year$1 = today$1.getFullYear();
const currentDay$1 = new Date(year$1, month$1, currentDate$1);
class DateRangeWrapperComponent {
    dynamicTabPageService;
    route;
    dataStoreService;
    value;
    startDateKey;
    endDateKey;
    valueChange = new EventEmitter();
    disabled;
    minDate = currentDay$1;
    formioEvent = new EventEmitter();
    rangePicker;
    selectRange;
    daysInput;
    dateRangeForm;
    showFutureDateConfirmation = false;
    allowFutureDate = '';
    isResponse;
    isEdited;
    disableInput = false;
    dayRange;
    enableBtn = true;
    dateDifference = 0;
    predefinedRanges = [0, 30, 45, 60, 90, 120];
    constructor(dynamicTabPageService, route, dataStoreService) {
        this.dynamicTabPageService = dynamicTabPageService;
        this.route = route;
        this.dataStoreService = dataStoreService;
        //
    }
    ngOnInit() {
        this.initForm();
        const loc = window.location.pathname.split('/');
        if (loc[5] && loc[6]) {
            this.getResponseById(loc[5], loc[6]);
        }
        else {
            this.isResponse = false;
        }
        const action = this.dataStoreService.getData('gridAction');
        if (action === 'view') {
            this.disableInput = true;
        }
    }
    getResponseById(formid, resid) {
        this.dynamicTabPageService.getResponseByPageId(resid, formid).subscribe((result) => {
            if (result.data) {
                this.isResponse = true;
                this.dateRangeForm.patchValue({
                    start: moment(result.data.start_date).format(),
                    end: moment(result.data.end_date).format()
                });
                const formValue = this.dateRangeForm.getRawValue();
                const dateRange = {
                    startDateKey: this.startDateKey,
                    startDate: moment(formValue.start).format('YYYY-MM-DD'),
                    endDateKey: this.endDateKey,
                    endDate: moment(formValue.end).format('YYYY-MM-DD')
                };
                this.dateDifference = moment(formValue.end).diff(moment(formValue.start), 'days');
                if (this.predefinedRanges.includes(this.dateDifference)) {
                    this.dayRange = '';
                }
                else {
                    this.dayRange = this.dateDifference;
                }
                this.value = dateRange;
                this.valueChange.emit(dateRange);
                this.formioEvent.emit({ eventName: 'customEvent', data: { value: { dateRange }, type: 'dateRange' } });
            }
        });
    }
    initForm() {
        console.log('currentDay', currentDay$1);
        this.dateRangeForm = new UntypedFormGroup({
            start: new UntypedFormControl(),
            end: new UntypedFormControl()
        });
    }
    resetForm() {
        console.log('currentDay', currentDay$1);
        this.dateRangeForm.patchValue({
            start: null,
            end: null
        });
    }
    selectedDateRange() {
        const formValue = this.dateRangeForm.getRawValue();
        if (new Date(formValue.start).getDate() > currentDate$1 && this.isResponse) {
            this.isEdited = true;
            this.allowFutureDate = '';
            this.showFutureDateConfirmation = true;
            const test = null;
            this.value = test;
            this.valueChange.emit(test);
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { test }, type: 'dateRange' } });
            this.dateDifference = moment(formValue.end).diff(moment(formValue.start), 'days');
        }
    }
    ngAfterViewInit() {
        this.dateRangeForm.valueChanges.subscribe(value => {
            console.log('Date form value changes...', value.start, moment(value.start).isAfter(moment()));
            if (value.start && moment(value.start).isAfter(moment(currentDay$1))) {
                this.showFutureDateConfirmation = true;
                this.allowFutureDate = true;
                if (!this.isResponse) {
                    const test = null;
                    this.value = test;
                    this.valueChange.emit(test);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { test }, type: 'dateRange' } });
                }
            }
            if (new Date(value.start).getDate() === currentDate$1 &&
                new Date(value.start).getMonth() + 1 === new Date().getMonth() + 1) {
                this.allowFutureDate = false;
                this.showFutureDateConfirmation = false;
            }
            else if ((new Date(value.start).getDate() > currentDate$1 ||
                new Date(value.start).getMonth() + 1 > new Date().getMonth() + 1) &&
                this.isResponse) {
                this.allowFutureDate = this.isEdited ? '' : true;
                this.showFutureDateConfirmation = true;
            }
            else {
                this.allowFutureDate = '';
            }
        });
    }
    generateRange(eve, check) {
        if (eve?.key === 'Enter' || eve?.type === 'click') {
            this.assignEndDate(this.dayRange, check);
        }
    }
    checkInput() {
        this.enableBtn = false;
    }
    futureDateConfirmationChange($event) {
        console.log($event.source.name, $event.value);
        if ($event.source.value) {
            this.emitDateRange();
        }
        if (!$event.source.value) {
            this.resetForm();
            this.showFutureDateConfirmation = false;
            this.allowFutureDate = '';
            if (this.isResponse) {
                this.allowFutureDate = false;
            }
            this.daysInput.nativeElement.value = '';
            const test = null;
            this.value = test;
            this.valueChange.emit(test);
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { test }, type: 'dateRange' } });
        }
    }
    focusoutAssignRange(value) {
        console.log(value);
    }
    startDateChange($event) {
        console.log('start date change...', $event);
    }
    assignEndDate(value, check) {
        this.selectRange.nativeElement.click();
        if (check) {
            this.daysInput.nativeElement.value = '';
        }
        const formValue = this.dateRangeForm.getRawValue();
        console.log('form values...');
        const startDate = formValue.start;
        if (startDate) {
            console.log(startDate);
            const calculatedEndDate = this.addDays(startDate, value);
            this.dateRangeForm.get('end').setValue(calculatedEndDate);
            this.emitDateRange();
        }
    }
    emitDateRange() {
        const formValue = this.dateRangeForm.getRawValue();
        const startDate = formValue.start;
        const endDate = formValue.end;
        const dateRange = {
            startDateKey: this.startDateKey,
            startDate: moment(startDate).format('YYYY-MM-DD'),
            endDateKey: this.endDateKey,
            endDate: moment(endDate).format('YYYY-MM-DD')
        };
        console.log(dateRange);
        this.value = dateRange;
        if (this.allowFutureDate || this.allowFutureDate === false) {
            this.valueChange.emit(dateRange);
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { dateRange }, type: 'dateRange' } });
        }
        this.enableBtn = true;
        this.dateDifference = moment(formValue.end).diff(moment(formValue.start), 'days');
    }
    addDays(date, days) {
        date = new Date(date);
        date.setDate(date.getDate() + days);
        return date;
    }
    copyStartDate() {
        const formValue = this.dateRangeForm.getRawValue();
        this.copy(formValue.start ? moment(formValue.start).format('MM/DD/YYYY') : 'Start date is empty');
    }
    copyEndDate() {
        const formValue = this.dateRangeForm.getRawValue();
        this.copy(formValue.end ? moment(formValue.end).format('MM/DD/YYYY') : 'End Date is Empty');
    }
    copy(text) {
        navigator.clipboard.writeText(text);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateRangeWrapperComponent, deps: [{ token: DynamicTabPageService }, { token: i1.ActivatedRoute }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DateRangeWrapperComponent, selector: "app-date-range-wrapper", inputs: { value: "value", startDateKey: "startDateKey", endDateKey: "endDateKey", disabled: "disabled", minDate: "minDate" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, viewQueries: [{ propertyName: "rangePicker", first: true, predicate: ["rangePicker"], descendants: true }, { propertyName: "selectRange", first: true, predicate: ["selectRange"], descendants: true }, { propertyName: "daysInput", first: true, predicate: ["daysInput"], descendants: true }], ngImport: i0, template: "<div class=\"w-100\">\r\n  <div class=\"row\">\r\n    <button (click)=\"copyStartDate()\" class=\"btn btn-icon mt-2\" matTooltip=\"Copy Start Date\">\r\n      <em class=\"fa fa-files-o\"></em>\r\n    </button>\r\n    <mat-form-field appearance=\"outline\" class=\"cal-wrp\">\r\n      <mat-date-range-input\r\n        [formGroup]=\"dateRangeForm\"\r\n        [min]=\"minDate\"\r\n        [rangePicker]=\"rangePicker\"\r\n        [disabled]=\"disableInput\"\r\n        (dateInput)=\"startDateChange($event)\">\r\n        <input matStartDate readonly placeholder=\"Start date\" formControlName=\"start\" />\r\n        <input matEndDate readonly placeholder=\"End date\" (dateChange)=\"emitDateRange()\" formControlName=\"end\" />\r\n      </mat-date-range-input>\r\n      <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\r\n      <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n      <mat-date-range-picker #rangePicker>\r\n        <mat-datepicker-actions>\r\n          <div class=\"d-flex flex-column calendar-btn-wrp\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <button class=\"btn-cal\" #selectRange matDateRangePickerApply (click)=\"selectedDateRange()\">\r\n                  Select Range\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-1\" />\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12 date-range\">\r\n                <button (click)=\"assignEndDate(0, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 0\">\r\n                  0 days\r\n                </button>\r\n                <button (click)=\"assignEndDate(30, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 30\">\r\n                  30 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(45, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 45\">\r\n                  45 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(60, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 60\">\r\n                  60 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(90, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 90\">\r\n                  90 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(120, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 120\">\r\n                  120 Days\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-1\" />\r\n            <div class=\"row d-flex justify-content-center\">\r\n              <div class=\"col-12 mt-2 mb-1\">\r\n                <div class=\"text-md-center\">\r\n                  <input\r\n                    min=\"0\"\r\n                    class=\"mr-2\"\r\n                    style=\"width: 60px; height: 17px\"\r\n                    matInput\r\n                    #daysInput\r\n                    type=\"number\"\r\n                    [(ngModel)]=\"dayRange\"\r\n                    (input)=\"checkInput()\"\r\n                    (keyup)=\"generateRange($event, false)\" />\r\n                  <!-- <em class=\"fa fa-check check-btn\" [ngClass]=\"{'disabled': !enableBtn}\"\r\n                  (click)=\"enableBtn && generateRange($event, false)\"></em> -->\r\n                  <button\r\n                    class=\"btn-cal m-md-0\"\r\n                    [ngClass]=\"{ disabled: enableBtn }\"\r\n                    [disabled]=\"enableBtn\"\r\n                    (click)=\"generateRange($event, false)\">\r\n                    Submit\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-datepicker-actions>\r\n      </mat-date-range-picker>\r\n    </mat-form-field>\r\n    <button (click)=\"copyEndDate()\" class=\"btn btn-icon mt-2\" matTooltip=\"Copy End Date\">\r\n      <em class=\"fa fa-files-o\"></em>\r\n    </button>\r\n  </div>\r\n  <div class=\"row pl-4\" *ngIf=\"showFutureDateConfirmation\">\r\n    <label class=\"pr-2\">Do you wish to use a future start date?<span class=\"requiredfield text-danger\">*</span></label>\r\n    <mat-radio-group\r\n      [(ngModel)]=\"allowFutureDate\"\r\n      [disabled]=\"disableInput\"\r\n      (change)=\"futureDateConfirmationChange($event)\">\r\n      <mat-radio-button class=\"pr-2\" [value]=\"true\"> Yes </mat-radio-button>\r\n      <mat-radio-button class=\"pr-2\" [value]=\"false\"> No </mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:70px auto;width:30%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}.btn-cal{background:#f1f3f5;border-radius:4px;color:#4c4f55;border:none;margin:5px;display:inline-block;padding:5px 10px;font-size:12px}.calendar-btn-wrp{width:290px!important;text-align:center}.cal-lb{color:#3f619f;font-size:14px}.cal-wrp{position:relative;transition:0s .85s!important}.cal-wrp .copy-icon{position:absolute;top:0;right:-4px;height:21px;width:20px;outline:none;border:none;background-repeat:no-repeat;background-color:none;background-size:19px 27px;padding:0}.cal-wrp .copy-icon:active{transition:0s!important}.disabled{pointer-events:none;opacity:.5}.cal_active{background-color:var(--sumbmenu-selected)!important}.date-range .btn-cal{background:var(--bg-light)!important;border:1px solid var(--primary)!important;color:var(--primary)!important}.date-range .btn-cal.cal_active{background:var(--btn)!important;color:#fff!important}:host ::ng-deep .mat-form-field-type-mat-date-range-input .mat-form-field-infix{border:none;padding:11px 0}:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:7px}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6$2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i6$2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i6$2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i6$2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i6$2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i6$2.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i6$2.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "directive", type: i14.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i8$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i8$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i8$1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i9.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i9.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "directive", type: i17.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateRangeWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-date-range-wrapper', template: "<div class=\"w-100\">\r\n  <div class=\"row\">\r\n    <button (click)=\"copyStartDate()\" class=\"btn btn-icon mt-2\" matTooltip=\"Copy Start Date\">\r\n      <em class=\"fa fa-files-o\"></em>\r\n    </button>\r\n    <mat-form-field appearance=\"outline\" class=\"cal-wrp\">\r\n      <mat-date-range-input\r\n        [formGroup]=\"dateRangeForm\"\r\n        [min]=\"minDate\"\r\n        [rangePicker]=\"rangePicker\"\r\n        [disabled]=\"disableInput\"\r\n        (dateInput)=\"startDateChange($event)\">\r\n        <input matStartDate readonly placeholder=\"Start date\" formControlName=\"start\" />\r\n        <input matEndDate readonly placeholder=\"End date\" (dateChange)=\"emitDateRange()\" formControlName=\"end\" />\r\n      </mat-date-range-input>\r\n      <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\r\n      <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n      <mat-date-range-picker #rangePicker>\r\n        <mat-datepicker-actions>\r\n          <div class=\"d-flex flex-column calendar-btn-wrp\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <button class=\"btn-cal\" #selectRange matDateRangePickerApply (click)=\"selectedDateRange()\">\r\n                  Select Range\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-1\" />\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12 date-range\">\r\n                <button (click)=\"assignEndDate(0, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 0\">\r\n                  0 days\r\n                </button>\r\n                <button (click)=\"assignEndDate(30, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 30\">\r\n                  30 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(45, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 45\">\r\n                  45 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(60, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 60\">\r\n                  60 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(90, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 90\">\r\n                  90 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(120, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 120\">\r\n                  120 Days\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-1\" />\r\n            <div class=\"row d-flex justify-content-center\">\r\n              <div class=\"col-12 mt-2 mb-1\">\r\n                <div class=\"text-md-center\">\r\n                  <input\r\n                    min=\"0\"\r\n                    class=\"mr-2\"\r\n                    style=\"width: 60px; height: 17px\"\r\n                    matInput\r\n                    #daysInput\r\n                    type=\"number\"\r\n                    [(ngModel)]=\"dayRange\"\r\n                    (input)=\"checkInput()\"\r\n                    (keyup)=\"generateRange($event, false)\" />\r\n                  <!-- <em class=\"fa fa-check check-btn\" [ngClass]=\"{'disabled': !enableBtn}\"\r\n                  (click)=\"enableBtn && generateRange($event, false)\"></em> -->\r\n                  <button\r\n                    class=\"btn-cal m-md-0\"\r\n                    [ngClass]=\"{ disabled: enableBtn }\"\r\n                    [disabled]=\"enableBtn\"\r\n                    (click)=\"generateRange($event, false)\">\r\n                    Submit\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-datepicker-actions>\r\n      </mat-date-range-picker>\r\n    </mat-form-field>\r\n    <button (click)=\"copyEndDate()\" class=\"btn btn-icon mt-2\" matTooltip=\"Copy End Date\">\r\n      <em class=\"fa fa-files-o\"></em>\r\n    </button>\r\n  </div>\r\n  <div class=\"row pl-4\" *ngIf=\"showFutureDateConfirmation\">\r\n    <label class=\"pr-2\">Do you wish to use a future start date?<span class=\"requiredfield text-danger\">*</span></label>\r\n    <mat-radio-group\r\n      [(ngModel)]=\"allowFutureDate\"\r\n      [disabled]=\"disableInput\"\r\n      (change)=\"futureDateConfirmationChange($event)\">\r\n      <mat-radio-button class=\"pr-2\" [value]=\"true\"> Yes </mat-radio-button>\r\n      <mat-radio-button class=\"pr-2\" [value]=\"false\"> No </mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:70px auto;width:30%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}.btn-cal{background:#f1f3f5;border-radius:4px;color:#4c4f55;border:none;margin:5px;display:inline-block;padding:5px 10px;font-size:12px}.calendar-btn-wrp{width:290px!important;text-align:center}.cal-lb{color:#3f619f;font-size:14px}.cal-wrp{position:relative;transition:0s .85s!important}.cal-wrp .copy-icon{position:absolute;top:0;right:-4px;height:21px;width:20px;outline:none;border:none;background-repeat:no-repeat;background-color:none;background-size:19px 27px;padding:0}.cal-wrp .copy-icon:active{transition:0s!important}.disabled{pointer-events:none;opacity:.5}.cal_active{background-color:var(--sumbmenu-selected)!important}.date-range .btn-cal{background:var(--bg-light)!important;border:1px solid var(--primary)!important;color:var(--primary)!important}.date-range .btn-cal.cal_active{background:var(--btn)!important;color:#fff!important}:host ::ng-deep .mat-form-field-type-mat-date-range-input .mat-form-field-infix{border:none;padding:11px 0}:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:7px}\n"] }]
        }], ctorParameters: function () { return [{ type: DynamicTabPageService }, { type: i1.ActivatedRoute }, { type: DataStoreService }]; }, propDecorators: { value: [{
                type: Input
            }], startDateKey: [{
                type: Input
            }], endDateKey: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], minDate: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }], rangePicker: [{
                type: ViewChild,
                args: ['rangePicker']
            }], selectRange: [{
                type: ViewChild,
                args: ['selectRange']
            }], daysInput: [{
                type: ViewChild,
                args: ['daysInput']
            }] } });

const COMPONENT_OPTIONS$4 = {
    type: 'dateWithRange',
    selector: 'date-angular',
    title: 'Date Range Angular',
    group: 'advanced',
    icon: 'calendar',
    editForm: minimalEditForm$1,
    fieldOptions: ['startDateKey', 'endDateKey'],
    schema: {
        validate: {
            required: true
        }
    }
};
function minimalEditForm$1() {
    return {
        components: [
            { key: 'type', type: 'hidden' },
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'API Key',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 20,
                type: 'textfield',
                input: true,
                key: 'startDateKey',
                label: 'Start Date Key',
                placeholder: 'Start Date Key',
                tooltip: 'The code/key/ID/name of the start date.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 30,
                type: 'textfield',
                input: true,
                key: 'endDateKey',
                label: 'End Date Key',
                placeholder: 'End Date Key',
                tooltip: 'The code/key/ID/name of the end date.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 413,
                type: 'checkbox',
                input: true,
                key: 'validate.required',
                label: 'Required'
            }
        ]
    };
}
function registerDateRangeComponent(injector) {
    console.log('registerDateRangeComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$4, DateRangeWrapperComponent, injector);
        console.log('registerDateRangeComponent complete...');
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}

class GlobalSearchWrapperComponent {
    _storeservice;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    schema;
    table;
    columns;
    responseColumns;
    formioEvent = new EventEmitter();
    searchInput;
    searchResults = [];
    columnHeaders = [];
    cols = [];
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        console.log('should not be empty');
    }
    searchElement() {
        this.cols = [];
        const search = {
            schema: this.schema,
            table: this.table,
            columns: this.columns,
            value: this.searchInput,
            responseColumns: this.responseColumns
        };
        this.httpService.post('/commonsearch', search).subscribe((res) => {
            this.searchResults = res.data;
            this.columnHeaders = Object.keys(res.data[0]);
            this.columnHeaders.map(h => {
                this.cols.push({ field: h, header: h });
            });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GlobalSearchWrapperComponent, deps: [{ token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GlobalSearchWrapperComponent, selector: "app-global-search-wrapper", inputs: { value: "value", disabled: "disabled", schema: "schema", table: "table", columns: "columns", responseColumns: "responseColumns" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, ngImport: i0, template: "<div>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\" (change)=\"searchElement()\" />\r\n  <div class=\"card w-100\" *ngIf=\"searchResults.length\">\r\n    <p-table\r\n      responsiveLayout=\"scroll\"\r\n      [value]=\"searchResults\"\r\n      [columns]=\"cols\"\r\n      [reorderableColumns]=\"true\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"5\"\r\n      [showCurrentPageReport]=\"true\"\r\n      currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\">\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th scope=\"col\" *ngFor=\"let col of columns\" class=\"search-header\">\r\n            {{ col.header }}\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td *ngFor=\"let col of columns\">\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n", styles: [".search-header{text-transform:uppercase}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i5$1.Table, selector: "p-table", inputs: ["frozenColumns", "frozenValue", "style", "styleClass", "tableStyle", "tableStyleClass", "paginator", "pageLinks", "rowsPerPageOptions", "alwaysShowPaginator", "paginatorPosition", "paginatorStyleClass", "paginatorDropdownAppendTo", "paginatorDropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showFirstLastIcon", "showPageLinks", "defaultSortOrder", "sortMode", "resetPageOnSort", "selectionMode", "selectionPageOnly", "contextMenuSelection", "contextMenuSelectionMode", "dataKey", "metaKeySelection", "rowSelectable", "rowTrackBy", "lazy", "lazyLoadOnInit", "compareSelectionBy", "csvSeparator", "exportFilename", "filters", "globalFilterFields", "filterDelay", "filterLocale", "expandedRowKeys", "editingRowKeys", "rowExpandMode", "scrollable", "scrollDirection", "rowGroupMode", "scrollHeight", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "virtualScrollDelay", "frozenWidth", "responsive", "contextMenu", "resizableColumns", "columnResizeMode", "reorderableColumns", "loading", "loadingIcon", "showLoader", "rowHover", "customSort", "showInitialSortBadge", "autoLayout", "exportFunction", "exportHeader", "stateKey", "stateStorage", "editMode", "groupRowsBy", "groupRowsByOrder", "responsiveLayout", "breakpoint", "paginatorLocale", "value", "columns", "first", "rows", "totalRecords", "sortField", "sortOrder", "multiSortMeta", "selection", "selectAll", "virtualRowHeight"], outputs: ["contextMenuSelectionChange", "selectAllChange", "selectionChange", "onRowSelect", "onRowUnselect", "onPage", "onSort", "onFilter", "onLazyLoad", "onRowExpand", "onRowCollapse", "onContextMenuSelect", "onColResize", "onColReorder", "onRowReorder", "onEditInit", "onEditComplete", "onEditCancel", "onHeaderCheckboxToggle", "sortFunction", "firstChange", "rowsChange", "onStateSave", "onStateRestore"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GlobalSearchWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-global-search-wrapper', template: "<div>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\" (change)=\"searchElement()\" />\r\n  <div class=\"card w-100\" *ngIf=\"searchResults.length\">\r\n    <p-table\r\n      responsiveLayout=\"scroll\"\r\n      [value]=\"searchResults\"\r\n      [columns]=\"cols\"\r\n      [reorderableColumns]=\"true\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"5\"\r\n      [showCurrentPageReport]=\"true\"\r\n      currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\">\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th scope=\"col\" *ngFor=\"let col of columns\" class=\"search-header\">\r\n            {{ col.header }}\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td *ngFor=\"let col of columns\">\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n", styles: [".search-header{text-transform:uppercase}\n"] }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], schema: [{
                type: Input
            }], table: [{
                type: Input
            }], columns: [{
                type: Input
            }], responseColumns: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });

const COMPONENT_OPTIONS$3 = {
    type: 'globalsearch',
    selector: 'app-globalserach',
    title: 'Global Search',
    group: 'basic',
    icon: 'fa fa-search',
    editForm: globalSearchForm,
    fieldOptions: ['schema', 'table', 'columns', 'responseColumns', 'label']
};
function globalSearchForm() {
    const oid = sessionStorage.getItem('orgid');
    const environment = {};
    console.log(oid);
    return {
        components: [
            {
                key: 'type',
                type: 'hidden'
            },
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                label: 'Schema',
                widget: 'choicesjs',
                tableView: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/schemas/${oid}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                key: 'schema',
                type: 'select',
                input: true,
                selectValues: 'data',
                disableLimit: false,
                placeholder: 'Select Schema',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Tables',
                widget: 'choicesjs',
                tableView: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/tables/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'schema',
                key: 'table',
                type: 'select',
                input: true,
                selectValues: 'data',
                disableLimit: false,
                placeholder: 'Select Table',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Columns',
                widget: 'choicesjs',
                tableView: true,
                multiple: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/columns/{{data[\'table\']}}/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'table',
                key: 'columns',
                type: 'select',
                selectValues: 'data',
                disableLimit: false,
                input: true,
                placeholder: 'Select columns',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Response Columns',
                widget: 'choicesjs',
                tableView: true,
                multiple: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/columns/{{data[\'table\']}}/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'table',
                key: 'responseColumns',
                type: 'select',
                selectValues: 'data',
                disableLimit: false,
                input: true,
                placeholder: 'Select Response Columns',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'API Key',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            }
        ]
    };
}
function registerGlobalSearchComponent(injector) {
    console.log('Register global search component called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$3, GlobalSearchWrapperComponent, injector);
        console.log('Global search component registered');
    }
    catch (error) {
        console.log(error, 'Error in registering Global Search');
    }
}

class RatingWrapperComponent {
    value;
    valueChange = new EventEmitter();
    disabled;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RatingWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RatingWrapperComponent, selector: "app-rating-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<ngb-rating [(rate)]=\"value\" (rateChange)=\"valueChange.emit($event)\" [readonly]=\"disabled\"></ngb-rating>\r\n", styles: ["li{list-style:none}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RatingWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-rating-wrapper', template: "<ngb-rating [(rate)]=\"value\" (rateChange)=\"valueChange.emit($event)\" [readonly]=\"disabled\"></ngb-rating>\r\n", styles: ["li{list-style:none}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }] } });

const COMPONENT_OPTIONS$2 = {
    type: 'myrating',
    selector: 'my-rating',
    title: 'Rating',
    group: 'basic',
    icon: 'fa fa-star'
    // editForm: minimalEditForm,
    // template: 'dateTime'
};
function _minimalEditForm() {
    return {
        components: [
            { key: 'type', type: 'hidden' },
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'Field Code',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 20,
                type: 'textfield',
                input: true,
                key: 'customOptions.myOption',
                label: 'My Custom Option',
                placeholder: 'My Custom Option',
                validate: {
                    required: true
                }
            }
        ]
    };
}
function registerRatingComponent(injector) {
    console.log('registerPopupComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$2, RatingWrapperComponent, injector);
        console.log('registerPopupComponent complete...');
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}

class PopupWrapperComponent {
    value;
    valueChange = new EventEmitter();
    disabled;
    display = false;
    toggleDisplay() {
        console.log('changing display value ', this.display, 'to', !this.display);
        this.display = !this.display;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PopupWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PopupWrapperComponent, selector: "app-popup-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div>\r\n  <div *ngIf=\"display\" class=\"overlay\">\r\n    <div id=\"myModal\" class=\"modal\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"text-right modal-close\">\r\n          <span class=\"close\" (click)=\"toggleDisplay()\">&times;</span>\r\n        </div>\r\n        <p>Confirm changes?</p>\r\n        <div class=\"modal-action-button-container text-right\">\r\n          <button class=\"btn btn-cancel mr-2\" type=\"button\" (click)=\"toggleDisplay()\">No</button>\r\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"toggleDisplay()\">Yes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-pri\" type=\"button\" (click)=\"toggleDisplay()\">Popup</button>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:70px auto;width:30%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PopupWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-popup-wrapper', template: "<div>\r\n  <div *ngIf=\"display\" class=\"overlay\">\r\n    <div id=\"myModal\" class=\"modal\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"text-right modal-close\">\r\n          <span class=\"close\" (click)=\"toggleDisplay()\">&times;</span>\r\n        </div>\r\n        <p>Confirm changes?</p>\r\n        <div class=\"modal-action-button-container text-right\">\r\n          <button class=\"btn btn-cancel mr-2\" type=\"button\" (click)=\"toggleDisplay()\">No</button>\r\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"toggleDisplay()\">Yes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-pri\" type=\"button\" (click)=\"toggleDisplay()\">Popup</button>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:70px auto;width:30%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }] } });

const COMPONENT_OPTIONS$1 = {
    type: 'mypopup',
    selector: 'my-popup',
    title: 'Popup',
    group: 'basic',
    icon: 'calendar'
};
function registerPopupComponent(injector) {
    console.log('registerPopupComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$1, PopupWrapperComponent, injector);
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}

const STRUCTURED_DECISION_MAKING = 'Structured Decision Making';
const SOMETHING_WENT_WRONG = 'Something Went Wrong!';
class DynamicPageComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: FormioService }, { token: i3$1.Store }, { token: MAT_DIALOG_DATA, optional: true }, { token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicPageComponent, selector: "app-dynamic-page", inputs: { editId: "editId", pageId: "pageId", sourceid: "sourceid", externalParameters: "externalParameters", isReadOnly: "isReadOnly", componentId: "componentId" }, outputs: { afterSubmit: "afterSubmit", submissionDone: "submissionDone" }, providers: [SpeechRecognitionService, OCRService], viewQueries: [{ propertyName: "external_scanner", first: true, predicate: ["external_scanner"], descendants: true }, { propertyName: "validationPopup", first: true, predicate: ["validationPopup"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }, { kind: "component", type: AlertComponent, selector: "app-alert" }, { kind: "component", type: i8.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1$1.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-page', providers: [SpeechRecognitionService, OCRService], template: "<app-alert></app-alert>\r\n<div [ngClass]=\"showTitle ? 'card' : 'youthsearch-formio'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\" *ngIf=\"isTitle\">\r\n      <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\" *ngIf=\"showbackbtn\">\r\n        Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n      </button>\r\n      <h6 class=\"font-weight-bold mb-2 mt-3 fromTitle\" *ngIf=\"showTitle\">{{ isTitle }}</h6> -->\r\n\r\n      <div class=\"back-to-main\">\r\n        <div (click)=\"redirect()\" *ngIf=\"showbackbtn\">{{ parentGridPage}}</div>\r\n        <span *ngIf=\"showTitle\"> {{ isTitle }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" [hidden]=\"!isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [submitDone]=\"submissionDone\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOcrForm\">\r\n      <div class=\"col-12 dynamic-page mt-0\">\r\n        <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n          [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>\r\n\r\n\r\n<ng-template #validationPopup>\r\n  <div class=\"p-3 validation-popup\">\r\n    <div class=\"clearfix mb-4\"><div [innerHTML]=\"confirmationmessage\"></div></div>\r\n  </div>\r\n  <div class=\"text-right pr-3 modal-buttons\">\r\n    <button class=\"pull-right mb-2 btn\" [ngClass]=\"button1Style\" *ngIf=\"showButton1\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button1Action, button1Key)\">\r\n      {{button1Text}}\r\n    </button>\r\n    <button class=\"pull-right mb-2 mr-2 btn\" [ngClass]=\"button2Style\" *ngIf=\"showButton2\" data-dismiss=\"modal\"\r\n      (click)=\"onClickConfirmation(button2Action, button2Key)\">{{button2Text}}</button>\r\n  </div>\r\n</ng-template>\r\n", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}:host ::ng-deep .formio-component-submit .has-success span[ref=buttonMessage]{display:none}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices.is-flipped .choices__list--dropdown.is-active{bottom:100%!important}:host ::ng-deep .datagrid-table .formio-component-select .formio-choices .choices__list--dropdown.is-active{top:auto!important;left:initial!important;position:absolute!important;width:100%!important}.modal-buttons{margin-bottom:49px}@media screen and (max-width: 1024px){:host ::ng-deep .formio-component-Aka .formio-component .form-control{min-width:185px!important}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: FormioService }, { type: i3$1.Store }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: PlatformDataStoreService }]; }, propDecorators: { editId: [{
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

class DynamicTabComponent {
    dynamicTabPageService;
    route;
    router;
    items = [];
    pages = [];
    activeItem;
    tabPageId;
    formId;
    currentRouterLink;
    localstorage;
    navigateData;
    parentGridPage;
    destroy$ = new Subject();
    tab;
    showTabs = false;
    constructor(injector, dynamicTabPageService, route, router) {
        this.dynamicTabPageService = dynamicTabPageService;
        this.route = route;
        this.router = router;
        this.tabPageId = this.route.snapshot.paramMap.get('tabId');
        this.localstorage = injector.get(LocalService);
        this.navigateData = this.router?.getCurrentNavigation()?.extras?.state;
        if (this.tabPageId) {
            this.localstorage.setItem('tabpageid', this.tabPageId);
        }
    }
    ngOnInit() {
        this.route.params
            .pipe(filter(params => !isNaN(params['tabId'])), tap(params => (this.tabPageId = params['tabId'])), takeUntil(this.destroy$))
            .subscribe(_ => this.getDynamicTab());
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
            setTimeout(() => {
                const index = this.items.findIndex((t) => t.id === this.activeItem.id);
                [...this.tab?.content.nativeElement.querySelectorAll('ul li')].forEach((e) => e.classList.remove('p-highlight'));
                [...this.tab?.content.nativeElement.querySelectorAll('ul li a')].forEach((e) => e.classList.remove('p-menuitem-link-active'));
                if (index > -1) {
                    this.tab.content.nativeElement.querySelector(`ul li:nth-child(${index + 1})`).classList.add('p-highlight');
                    this.tab.content.nativeElement.querySelector(`ul li:nth-child(${index + 1}) a`).classList.add('p-menuitem-link-active');
                }
            }, 200);
        });
    }
    routeToLandingPage() {
        const tabIndex = this.localstorage.getItem('tabIndex') ? this.localstorage.getItem('tabIndex') : '0';
        //Prevent Navigation failing while access to diffrent tabpages with diffrent tabindex.
        const currentRoute = this.items[Number(tabIndex)] ? this.items[Number(tabIndex)] : this.items[0];
        this.currentRouterLink = currentRoute?.routerLink;
        const backToGridPage = this.localstorage.getItem('backToGridPage');
        if (backToGridPage) {
            this.parentGridPage = JSON.parse(backToGridPage)?.name;
        }
        this.localstorage.setItem('navigationState', JSON.stringify(this.navigateData));
        this.activeItem = currentRoute;
        this.router.navigate([`${currentRoute.routerLink}`], { relativeTo: this.route, state: this.navigateData });
    }
    getDynamicTab() {
        this.dynamicTabPageService
            .getActivePage(this.tabPageId)
            .pipe(filter((response) => !!response.data.tabconfig), map((response) => typeof response.data.tabconfig === 'string' ?
            JSON.parse(response.data.tabconfig) : response.data.tabconfig), tap((tabConfig) => {
            this.pages = tabConfig.map(page => {
                return {
                    id: page.id,
                    label: page.name,
                    routerLink: '',
                    icon: page?.icon ? page?.icon : ''
                };
            });
        }), switchMap((tabConfig) => {
            const observables = tabConfig.map(page => {
                return this.getActiveVersion(page);
            });
            return forkJoin(observables);
        }), takeUntil(this.destroy$))
            .subscribe(_ => {
            this.showTabs = true;
            this.routeToLandingPage();
        });
    }
    getActiveVersion(page) {
        return this.dynamicTabPageService.getDynamicPage(page.id).pipe(tap(response => this.setRoutetoTabs(response['data'], page.id)), takeUntil(this.destroy$));
    }
    setRoutetoTabs(rows, pageId) {
        this.items = this.pages
            .map(a => {
            if (a.id === pageId && a.routerLink === '') {
                if (rows[0].pagetype === 'BGP') {
                    a.routerLink = a.id === rows[0].id ? `dynamic-search/${rows[0].activeVersion.id}` : '';
                }
                else {
                    a.routerLink = a.id === rows[0].id ? `page/${pageId}` : '';
                }
            }
            return a; // Return the modified item
        })
            .filter(x => x.routerLink !== ''); // Filter out items with an empty routerLink
    }
    redirect() {
        const id = this.localstorage.getItem('version-id');
        this.router.navigate([`pages/page-design/versions/${id}`]);
        const parentGridPageInfo = JSON.parse(this.localstorage.getItem('backToGridPage'));
        this.router.navigate([`/pages/dynamic-search/search/${parentGridPageInfo.id}`], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.localstorage.removeItem('YouthID');
        this.localstorage.removeItem('navigationState');
        this.destroy$.next();
        this.destroy$.complete();
    }
    onTabItemClick(tab) {
        this.activeItem = this.items.find((t) => t.id === tab?.activeItem?.id);
        this.router.navigate([`${tab.activeItem.routerLink}`], {
            relativeTo: this.route,
            state: this.navigateData
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabComponent, deps: [{ token: i0.Injector }, { token: DynamicTabPageService }, { token: i1.ActivatedRoute }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicTabComponent, selector: "app-dynamic-tab", viewQueries: [{ propertyName: "tab", first: true, predicate: ["tab"], descendants: true }], ngImport: i0, template: "<div class=\"rbac-tab\" *ngIf=\"showTabs\">\r\n  <p-tabMenu\r\n    [model]=\"items\"\r\n    #tab\r\n    (click)=\"onTabItemClick(tab)\"\r\n    [scrollable]=\"true\"\r\n    [activeItem]=\"activeItem\"></p-tabMenu>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [".rbac-tab .p-tabmenu-nav .p-menuitem-text{line-height:1;font-size:13px}.rbac-tab .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link{background:#fff;border-color:#2c2863;color:#2c2863;font-weight:700}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i4$1.TabMenu, selector: "p-tabMenu", inputs: ["model", "activeItem", "scrollable", "popup", "style", "styleClass", "ariaLabel", "ariaLabelledBy"], outputs: ["activeItemChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-tab', template: "<div class=\"rbac-tab\" *ngIf=\"showTabs\">\r\n  <p-tabMenu\r\n    [model]=\"items\"\r\n    #tab\r\n    (click)=\"onTabItemClick(tab)\"\r\n    [scrollable]=\"true\"\r\n    [activeItem]=\"activeItem\"></p-tabMenu>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [".rbac-tab .p-tabmenu-nav .p-menuitem-text{line-height:1;font-size:13px}.rbac-tab .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link{background:#fff;border-color:#2c2863;color:#2c2863;font-weight:700}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: DynamicTabPageService }, { type: i1.ActivatedRoute }, { type: i1.Router }]; }, propDecorators: { tab: [{
                type: ViewChild,
                args: ['tab']
            }] } });

class PageBuilderViewURL {
    static EndPoint = {
        page_config: {
            pageVersion: '/platform/page-designer/pageversion',
            page: '/platform/page-designer/page'
        },
        provider: {
            facilityDetails: '/facility'
        }
    };
}

class PageBuilderViewService {
    _storeservice;
    port_workflow;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this.port_workflow = 'workflow';
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getPageVersionByid(id) {
        return this.httpService.get(`${PageBuilderViewURL.EndPoint.page_config.pageVersion}/${id}`);
    }
    createPage(data) {
        return this.httpService.post(PageBuilderViewURL.EndPoint.page_config.page, data);
    }
    getFacilityDetails(providerid) {
        return this.httpService.get(PageBuilderViewURL.EndPoint.provider.facilityDetails + '?providerid=' + providerid);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, deps: [{ token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }]; } });

class PageBuilderViewComponent {
    route;
    _formIO;
    pageBuilderViewService;
    location;
    localstore;
    dynamicSearchService;
    formId;
    jsonForm;
    fromTitle;
    id;
    submittedData;
    isformIO = false;
    routingConfig = false;
    appointmentList;
    formIO;
    dynamicTabPageService;
    pageid;
    editValue;
    authService;
    loggedUser;
    facility = [];
    providerData;
    constructor(injector, route, _formIO, pageBuilderViewService, location, localstore, dynamicSearchService) {
        this.route = route;
        this._formIO = _formIO;
        this.pageBuilderViewService = pageBuilderViewService;
        this.location = location;
        this.localstore = localstore;
        this.dynamicSearchService = dynamicSearchService;
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.authService = injector.get(AuthService);
        this.loggedUser = this.localstore.getObj('user');
    }
    ngOnInit() {
        this.loggedUser = this.localstore.getObj('user');
        this.formId = this.route.snapshot.paramMap.get('id');
        this.editValue = this.localstore.getObj('editValue');
        this.pageBuilderViewService.getPageVersionByid(this.formId).subscribe((result) => {
            if (result) {
                this.conditionCheckPageBuilder(result);
                if (this.editValue) {
                    this.submittedData = {
                        data: this.editValue
                    };
                    this.submittedData.data['edit'] = true;
                }
                else {
                    this.submittedData = { data: {} };
                }
                this.pageBuilderViewService.getPageVersionByid(this.formId).subscribe((res) => {
                    if (res) {
                        this.id = res?.data.id;
                        this.pageid = res?.data.pageid;
                        this.submittedData = res?.data.submissiondata ? JSON.parse(res?.data.submissiondata) : this.submittedData;
                        setTimeout(() => {
                            this.modifyVideoContent();
                        }, 300);
                    }
                });
            }
            if (result.data.tabconfig) {
                const routingTab = typeof result.data.tabconfig === "string" ? JSON.parse(result.data.tabconfig) : result.data.tabconfig;
                const routingPage = routingTab.filter(x => x.type === 'ROUTING');
                if (routingPage.length > 0 && routingPage[0].pathname === 'CreateSitevisitComponent') {
                    this.routingConfig = true;
                    this.appointmentList = Promise.resolve(true);
                }
            }
        });
    }
    conditionCheckPageBuilder(result) {
        if (result.data.templatejson) {
            this.isformIO = true;
            this.jsonForm = typeof result.data.templatejson === 'string' ? JSON.parse(result.data.templatejson) : result.data.templatejson;
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.data.pagename;
        }
    }
    modifyVideoContent() {
        const videoElements = document.querySelectorAll('.changetoIframe');
        if (videoElements && videoElements.length) {
            videoElements.forEach((element) => {
                const src = element.src;
                const ifrm = document.createElement('iframe');
                ifrm.setAttribute('src', src);
                ifrm.style.width = element.width ? element.width + 'px' : '';
                ifrm.style.height = element.height ? element.height + 'px' : '';
                element.replaceWith(ifrm);
            });
        }
    }
    onSubmit(submission) {
        const submissionData = JSON.parse(JSON.stringify(submission));
        console.log(submissionData, 'fdfasd');
        if (!submissionData?.data?.provider_id) {
            submissionData.data.provider_id = this.localstore.getObj('providerId');
        }
        this.facilityDetails(submissionData?.data?.provider_id, submissionData);
    }
    addAttachment(info) {
        this.dynamicTabPageService.createFormResponseAttachment(info).subscribe(res => console.log(res));
    }
    goBack() {
        this.localstore.removeItem('titletab');
        this.localstore.removeItem('editValue');
        this.localstore.removeItem('target-tab-filter');
        this.location.back();
    }
    customEvent(event) {
        // this._formIO.customEvent(event, this.formIO);
    }
    facilityDetails(id, submissionData) {
        const fileUploadData = this.authService.getSharedMessage();
        this.pageBuilderViewService.getFacilityDetails(id).subscribe((result) => {
            if (submissionData?.data?.provider_id != undefined && result.data.length == 0) {
                this.facility = result.data[result.data.length - 1];
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                data.provider_id = id;
                if ((this, this.facility?.id)) {
                    data.facility_id = this.facility?.id;
                    data.facilty_id = this.facility?.id;
                }
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id1 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id1, requestData).subscribe(() => {
                        const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
                else {
                    const id2 = null;
                    this.dynamicTabPageService.createFormResponse(id2, requestData).subscribe(res => {
                        const fileUploadInfo = Object.assign({ responseid: Number(res['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
            else if (submissionData?.data?.provider_id != undefined && result.data.length > 0) {
                this.facility = result.data[result.data.length - 1];
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                data.provider_id = id;
                data.facilty_id = this.facility?.id;
                data.facility_id = this.facility?.id;
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id3 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id3, requestData).subscribe(() => {
                        this.goBack();
                    });
                }
                else {
                    const id4 = null;
                    this.dynamicTabPageService.createFormResponse(id4, requestData).subscribe(_res => {
                        const fileUploadInfo = Object.assign({ responseid: Number(_res['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
            else {
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id5 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id5, requestData).subscribe(value => {
                        const fileUploadInfo = Object.assign({ responseid: Number(value['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
                else {
                    const id6 = null;
                    this.dynamicTabPageService.createFormResponse(id6, requestData).subscribe(_value => {
                        const fileUploadInfo = Object.assign({ responseid: Number(_value['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
        }, _error => {
            // this is intentional
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: FormioService }, { token: PageBuilderViewService }, { token: i4.Location }, { token: LocalService }, { token: DynamicsearchService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderViewComponent, selector: "app-page-builder-view", viewQueries: [{ propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\">\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n      <h6 class=\"font-weight-bold mb-0 mt-3 fromTitle\">{{ fromTitle }}</h6>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".container-fluid{background:#fff}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-view', template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\">\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n      <h6 class=\"font-weight-bold mb-0 mt-3 fromTitle\">{{ fromTitle }}</h6>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".container-fluid{background:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: FormioService }, { type: PageBuilderViewService }, { type: i4.Location }, { type: LocalService }, { type: DynamicsearchService }]; }, propDecorators: { formIO: [{
                type: ViewChild,
                args: ['formIO']
            }] } });

const routes$1 = [
    {
        path: 'page',
        component: DynamicPageCleanupComponent
    },
    {
        path: 'page',
        component: DynamicPageComponent
    },
    {
        path: 'page/modify/:pageId/:id',
        component: DynamicPageCleanupComponent
    },
    {
        path: 'page/view/:pageId/:id',
        component: DynamicPageCleanupComponent
    },
    {
        path: 'page/modify/:pageId',
        component: DynamicPageCleanupComponent
    },
    {
        path: 'page/modify/:pageId/:id',
        component: DynamicPageComponent
    },
    {
        path: 'page/view/:pageId/:id',
        component: DynamicPageComponent
    },
    {
        path: 'page/modify/:pageId',
        component: DynamicPageComponent
    },
    {
        path: 'tab/:tabId',
        component: DynamicTabComponent,
        children: [
            {
                path: 'page/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'dynamic-search/:pageId',
                component: DynamicSearchComponent,
                loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            }
        ]
    },
    {
        path: 'tab/:tabId/:id',
        component: DynamicTabComponent,
        children: [
            {
                path: 'page/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'dynamic-search/:pageId',
                component: DynamicSearchComponent,
                loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
    }
];
class DynamicTabPageRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, imports: [RouterModule.forChild(routes$1), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule]
                }]
        }] });

class CustomTagsService {
    tags = [];
    addCustomTag(tag) {
        this.tags.push(tag);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CustomTagsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CustomTagsService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CustomTagsService, decorators: [{
            type: Injectable
        }] });

// const LOADER_SELECTOR = '#loaderAnimation';
class LoaderService {
    loaderContainer = document.getElementById('loaderAnimation2');
    constructor() {
        $('#loaderAnimation').hide();
    }
    show() {
        $('#loaderAnimation').show();
    }
    hide() {
        $('#loaderAnimation').hide();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const today = new Date();
const currentDate = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const currentDay = new Date(year, month, currentDate);
const DATE_FORMAT = 'YYYY-MM-DD';
class YouthFileUploadWrapperComponent {
    localStoreService;
    formBuilder;
    httpService;
    _storeservice;
    value; // Value from the form
    label; // Label for the custom component
    valueChange = new EventEmitter(); // Output to send data back to form
    formioEvent = new EventEmitter();
    fileInput;
    display = false;
    photoTypeList;
    documentUploadForm;
    alertService;
    imageHeight;
    imageWidth;
    fileName = '';
    fileSize = 0;
    isImageUploaded = false;
    fileNamePath;
    imgUrl;
    imgUrl2;
    loaderService;
    fileSizeRaw;
    youthId;
    setDescirptionText = "";
    isViewMode = false;
    sharedInfo = {};
    youthPhotoService;
    authService;
    maxDate;
    constructor(injector, localStoreService, formBuilder, httpService, _storeservice) {
        this.localStoreService = localStoreService;
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.authService = res['AUTHSERVICE'];
                this.youthPhotoService = res['YOUTHPHOTOSERVICE'];
            }
        });
        this.sharedInfo = this.authService.getSharedMessage();
        this.photoTypeList = [
            { value: 'SCR', label: 'Scar, Mark or Tattoo' }
        ];
        this.alertService = injector.get(AlertService);
        this.loaderService = injector.get(LoaderService);
        this.maxDate = new Date();
    }
    disabled;
    ngOnInit() {
        if (sessionStorage.getItem('gridAction') === 'view') {
            this.isViewMode = true;
        }
    }
    ngAfterViewChecked() {
    }
    async showPopup() {
        this.formioEvent.emit({ eventName: 'customEvent', data: { value: {}, type: 'youthfileupload' } });
        const valuecheck = this.authService.getSharedMessage();
        if (valuecheck && valuecheck) {
            const getValue = valuecheck?.dataGridComponent[0];
            this.youthId = valuecheck?.youth_id;
            const lookupMark = await this.youthPhotoService.getPhysicalMarkDescription('MARK').toPromise().then(response => { return response["data"]; });
            const lookupSide = await this.youthPhotoService.getPhysicalMarkDescription('SIDE').toPromise().then(response => { return response["data"]; });
            const lookupPart = await this.youthPhotoService.getPhysicalMarkDescription('PART').toPromise().then(response => { return response["data"]; });
            let markDescription = [];
            let sideDescription = [];
            let partDescription = [];
            if (lookupMark.length || lookupSide.length || lookupPart.length) {
                markDescription = lookupMark.filter(value => value.code === getValue?._data?.physicalmark?.mark_type_code);
                sideDescription = lookupSide.filter(value => value.code === getValue?._data?.physicalmark?.body_side_code);
                partDescription = lookupPart.filter(value => value.code === getValue?._data?.physicalmark?.body_part_code);
            }
            const descriptions = [
                markDescription.length ? markDescription[0].description : "",
                partDescription.length ? partDescription[0].description : "",
                sideDescription.length ? sideDescription[0].description : "",
                getValue?._data?.physicalmark?.design || ""
            ].filter(Boolean); // Filter out empty strings
            this.setDescirptionText = descriptions.join('; ');
        }
        this.display = !this.display;
        console.log("valuecheck", valuecheck);
        this.initializeDocumentUploadForm();
    }
    initializeDocumentUploadForm() {
        const currentDate = new Date();
        const username = JSON.parse(this.localStoreService.getItem('user'));
        const userId = this.localStoreService.getItem('id');
        this.documentUploadForm = this.formBuilder.group({
            entered_date: [{ value: currentDate, disabled: true }, Validators.required],
            type_code: [{ value: 'SCR', disabled: true }, Validators.required],
            photo_date: [currentDate, Validators.required],
            entered_by_worker_name: [{ value: `${username.lastname}, ${username.firstname}${username.middlename ? ' ' + username.middlename : ''}`, disabled: true }],
            entered_by_worker_id: [`${userId}`],
            description: [{ value: this.setDescirptionText, disabled: true }, Validators.required],
            url_pic: ['', Validators.required]
        });
    }
    uploadFile(fileValue) {
        const file = fileValue[0];
        this.validateDocument(file).then(isValid => {
            if (isValid) {
                const imageData = {
                    contentType: fileValue[0].type,
                    fileName: this.fileNamePath
                };
                this.youthPhotoService.uploadKey(imageData).subscribe((res) => {
                    this.documentUploadForm.patchValue({ url_pic: this.fileNamePath });
                    this.httpService.putUpload(res.data, file, file.type).subscribe((resp) => {
                        this.imgUrl2 = res.data;
                        this.isImageUploaded = true;
                    });
                }, (_error) => {
                    this.alertService.error('Something went wrong.');
                });
            }
        });
    }
    validateDocument(file) {
        return new Promise((resolve, reject) => {
            const fileSize = Number(file.size) / 1024;
            const filetype = file.type.split('/')[1];
            const fileNameLength = file.name.length;
            const reader = new FileReader();
            this.loaderService.show();
            reader.onload = (e) => {
                this.loaderService.hide();
                if (filetype !== 'jpg' && filetype !== 'jpeg' && filetype !== 'png' && filetype !== 'jfif') {
                    this.fileInput.nativeElement.value = "";
                    this.alertService.error(`JPG, JPEG, PNG & JFIF are supported.`);
                    this.clearImage();
                    resolve(false);
                    return;
                }
                else if (fileNameLength > 100) {
                    this.alertService.warn('The filename is too long.');
                    resolve(false);
                    return;
                }
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    this.imageWidth = img.width;
                    this.imageHeight = img.height;
                    if (fileSize <= 3072) {
                        this.fileName = file.name;
                        this.fileSizeRaw = parseFloat(fileSize.toFixed(1));
                        this.fileSize = this.getFileSize(parseFloat(fileSize.toFixed(1)));
                        this.fileNamePath = `youth-photo/${this.youthId}/${moment().valueOf()}-${this.fileName.replaceAll(' ', '')}`;
                        resolve(true);
                    }
                    else {
                        this.fileInput.nativeElement.value = "";
                        this.alertService.warn('File size exceeds 3MB limit.');
                        resolve(false);
                    }
                };
            };
            reader.readAsDataURL(file);
        });
    }
    resetData() {
        this.documentUploadForm.reset();
        this.fileSize = 0;
        this.fileSizeRaw = 0;
        this.fileName = '';
        this.isImageUploaded = false;
        this.fileNamePath = '';
    }
    getFileSize(fileSize) {
        if (fileSize > 1024) {
            fileSize = fileSize / 1024;
            return `${fileSize.toFixed(2)} MB`;
        }
        else {
            return `${fileSize.toFixed(2)} KB`;
        }
    }
    clearImage() {
        this.documentUploadForm.patchValue({ url_pic: '' });
        this.fileName = '';
        this.fileSize = 0;
        this.fileSizeRaw = 0;
        this.isImageUploaded = false;
        // this.isEditMode = false;
        this.imgUrl2 = '';
    }
    sendDocument() {
        try {
            const documentUploadForm = this.documentUploadForm.getRawValue();
            this.value = documentUploadForm;
            this.valueChange.emit(documentUploadForm);
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { documentUploadForm }, type: 'setYouthFileUploadData' } });
            this.display = false;
        }
        catch (e) {
            console.log(`Error in send document: ${e}`);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthFileUploadWrapperComponent, deps: [{ token: i0.Injector }, { token: LocalService }, { token: i2.FormBuilder }, { token: HttpService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: YouthFileUploadWrapperComponent, selector: "app-youth-file-upload-wrapper", inputs: { value: "value", label: "label" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, viewQueries: [{ propertyName: "fileInput", first: true, predicate: ["file"], descendants: true }], ngImport: i0, template: "<div>\r\n    <div *ngIf=\"display\" class=\"overlay\">\r\n        <div id=\"myModal\" class=\"modal uploadPopup\">\r\n          <div class=\"modal-dialog modal-xl\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-lg-4 col-xl-4 mb-2\">\r\n                        <div class=\"uploaded-files mb-3\">\r\n                            <div class=\"upload-sec\">\r\n                                <div class=\"block drop-container\" [hidden]=\"isImageUploaded\" #file\r\n                                    (ngxf-drop)=\"uploadFile($event)\" (ngxf-select)=\"uploadFile($event)\"\r\n                                    drop-class=\"drop\" [ngxf-validate]=\"{ size: { min: 5 } }\" multiple>\r\n                                    <i class=\"fa fa-cloud-upload mb-2\" aria-hidden=\"true\"></i>\r\n                                    <p>Drag and Drop or <a href=\"javascript:;\">Browse</a></p>\r\n                                    <p class=\"mt-5\">Max file size 3MB <br> Supported formats: JPG, JPEG, PNG, JFIF</p>\r\n                                </div>\r\n                                <div [hidden]=\"!isImageUploaded\">\r\n                                    <img class=\"upload-image-preview\" [src]=\"imgUrl2\" alt=\"Youth Image\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"progress-wrap\">\r\n                            <div class=\"d-flex justify-content-between mb-1\">\r\n                                <h6>{{fileName}}</h6>\r\n                                <span [hidden]=\"isEditMode\">{{fileSize}}/3MB</span>\r\n                                <a href=\"javascript:;\" class=\"progress-close\" (click)=\"clearImage()\">\r\n                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-info\" role=\"progressbar\"\r\n                                    [style.width.%]=\"fileSizeRaw / 3072 * 100\" [attr.aria-valuenow]=\"fileSizeRaw\"\r\n                                    aria-valuemin=\"0\" aria-valuemax=\"3072\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-8 col-md-6 col-xl-8\">\r\n                        <div class=\"upload-wrap dd-overflow-inherit\" [formGroup]=\"documentUploadForm\">\r\n                            <div class=\"uploaded-form\">\r\n                                <div class=\"p-fluid p-formgrid row\">\r\n                                    <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n                                        <label for=\"fname\" class=\"referral-form-labels\">\r\n                                            Entered Date\r\n                                            <span class=\"requiredfield text-danger\">*</span>\r\n                                        </label>\r\n                                        <p-calendar type=\"date\" formControlName=\"entered_date\"\r\n                                            placeholder=\"[current date]\" [selectOtherMonths]=\"true\" [showIcon]=\"true\"\r\n                                            [showOnFocus]=\"false\"></p-calendar>\r\n                                    </div>\r\n                                    <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n                                        <div>\r\n                                            <label for=\"fname\" class=\"referral-form-labels\">\r\n                                                Photo Date\r\n                                                <span class=\"requiredfield text-danger\">*</span>\r\n                                            </label>\r\n                                            <p-calendar type=\"date\" formControlName=\"photo_date\"\r\n                                                placeholder=\"MM/DD/YYYY\" [selectOtherMonths]=\"true\" [showIcon]=\"true\"\r\n                                                [maxDate]=\"maxDate\" [showOnFocus]=\"false\"></p-calendar>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n                                        <label for=\"fname\" class=\"referral-form-labels\">\r\n                                            Type\r\n                                            <span class=\"requiredfield text-danger\">*</span>\r\n                                        </label>\r\n                                        <p-dropdown [disabled]=\"'true'\" [options]=\"photoTypeList\" inputId=\"role\" placeholder=\"Please Select\"\r\n                                            styleClass=\"w-100\" optionLabel=\"label\" optionValue=\"value\" [filter]=\"true\"\r\n                                            formControlName=\"type_code\"\r\n                                            ariaFilterLabel=\"null\" [showClear]=\"true\">\r\n                                            <ng-template let-item pTemplate=\"selectedItem\">\r\n                                                <div pTooltip=\"{{item?.label}}\" tooltipPosition=\"top\"\r\n                                                    class=\"text-truncate\"> {{ item?.label }}</div>\r\n                                            </ng-template>\r\n                                            <ng-template let-object pTemplate=\"item\">\r\n                                                {{ object.label }}\r\n                                            </ng-template>\r\n                                        </p-dropdown>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"p-fluid p-formgrid row\">\r\n                                    <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\">\r\n                                        <div>\r\n                                            <label for=\"fname\" class=\"referral-form-labels\">\r\n                                                Entered By\r\n                                                <span class=\"requiredfield text-danger\">*</span>\r\n                                            </label>\r\n                                            <input type=\"text\" pInputText placeholder=\"[current user]\"\r\n                                                formControlName=\"entered_by_worker_name\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"p-fluid p-formgrid row\">\r\n                                    <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\">\r\n                                        <label for=\"fname\" class=\"referral-form-labels\">\r\n                                            Description\r\n                                            <span class=\"requiredfield text-danger\">*</span>\r\n                                        </label>\r\n                                        <input type=\"text\" pInputText placeholder=\"Other\"\r\n                                            formControlName=\"description\" />\r\n                                        <div *ngIf=\"description?.errors?.maxlength\">\r\n                                            <div class=\"p-error block mt-1\">Description cannot be more than 100\r\n                                                characters.</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mt-3\">\r\n                                    <button class=\"pull-right btn btn-primary btncommon\"\r\n                                        [disabled]=\"documentUploadForm.invalid\" (click)=\"sendDocument()\">Save</button>\r\n                                    <button (click)=\"showPopup()\"\r\n                                        class=\"pull-right mr-2 btn btn-white border border-1 border-primary text-primary btncancel\">\r\n                                        {{ isButtonShowHide ? 'Cancel Changes' : 'Cancel' }}\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <button class=\"btn btn-primary addImage\" type=\"button\" (click)=\"showPopup()\" [disabled]=\"isViewMode\">+ Add Image</button>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:30px auto;width:90%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}.doc .drop-container{background:var(--white);border-radius:6px;height:150px;width:100%;box-shadow:1px 2px 20px #0a0a0a1a;display:flex;align-items:center;justify-content:center;border:2px dashed #c0c4c7}.doc .drop-container p{font-size:16px;font-weight:400;color:#c0c4c7}.doc .drop-container p .upload-button{display:inline-block;border:none;outline:none;cursor:pointer;color:#5754a3}.doc .drop-container p .upload-button input{display:none}.wizard .nav-tabs>li{width:calc(50% - 5px);padding:10px;background:#585858}.wizard .nav-tabs>li.active{background:#1bbc9b}.wizard .nav-tabs>li:first-child{margin-right:10px}.uploaded-files{overflow:hidden;display:block}.uploaded-form{background:var(--primary-chat-light);padding:0 0 0 5px;margin-bottom:0;border-radius:2px}.uploaded-form .form-control{padding:5px;border:1px solid #ccc;border-radius:3px;margin-bottom:6px;font-size:12px;height:30px}.uploaded-form textarea.form-control{height:115px!important;margin-bottom:0}.uploaded-files h4{margin:15px 0;font-size:15px;text-transform:uppercase;color:#f97054}.uploaded-files .media-body h4{color:var(--black);font-size:12px;margin:4px 0;text-transform:none;font-weight:700}.uploaded-form .progress{height:5px}.uploaded-form a>span{font-size:25px}.uploaded-files .btn-bs-file{position:relative;margin-bottom:0}.uploaded-files .btn-bs-file input[type=file]{position:absolute;top:-9999999;filter:alpha(opacity=0);opacity:0;width:0;height:0;outline:none;cursor:inherit}.uploaded-files .remove-upld{text-align:center;position:relative;min-height:75px}.uploaded-files .remove-upld span{display:inline-block;width:26px;padding:2px 0;border:1px solid #555;border-radius:100%;color:#555;position:absolute;left:28%;cursor:pointer;top:38%}.upload-wrap{max-height:unset;overflow:unset}h6.upldr-name{font-size:11px;margin:0;color:#777;display:inline-block;padding-right:8px}h6.upldr-name:first-child{border-right:1px solid #ccc}.upldr-name span{color:var(--black);font-size:12px;margin-top:3px;display:block}.no-file h6{margin:0;font-size:14px;font-weight:600}.upload-number{text-align:center}:host ::ng-deep .p-component:disabled{opacity:1}.upload-number span{display:inline-block;width:25px;height:25px;padding-top:2px;border:1px solid #777;color:#777;font-size:13px;font-weight:900;border-radius:100%}.block.drop-container{background:#fff;border:2px dashed #585858;padding:15px 0}.block.drop-container p{margin-bottom:0}i.fa.fa-cloud-upload{font-size:30px;cursor:pointer}.btn-bs-file{cursor:pointer}.Persons-Involved h4.modal-header{margin:0 0 5px;padding:0;font-size:15px;border-bottom:0}.uploaded-form .media{margin-top:0}.mh-450{min-height:450px}.required{position:relative}.required:after{color:#d00;content:\"*\";margin-left:5px;top:0;right:3px;position:absolute}.media-heading{display:flex;padding:11px}.media-left{margin:auto}.clsInputDesign{padding:5px;border:1px solid #ccc;border-radius:3px;margin-bottom:6px;font-size:12px;height:30px;white-space:nowrap;background:#fff;overflow:hidden;text-overflow:ellipsis}.photo-upload-title{background:var(--menu-highlight);color:var(--bg-light);padding:10px 15px;text-transform:uppercase;font-weight:500}i.fa.fa-question-circle{color:var(--primary);font-size:11px}.progress-wrap{position:relative}.progress-wrap h6{margin-bottom:0}.progress-wrap span{padding-right:30px;text-align:right}.progress-wrap h6,.progress-wrap span{font-size:14px;font-weight:400;width:60%;word-wrap:break-word}.progress-wrap a.progress-close{position:absolute;right:0;color:red;top:-2px}.progress-wrap .progress{height:5px;background-color:#d9d9d9;border-radius:0}.progress-wrap .progress .bg-info{background-color:#1b7bb7}.upload-image-preview{width:100%;height:285px;max-height:285px;object-fit:contain;object-position:center center;background-color:#f9f9f9}.mtc-2{margin-top:2rem!important}.g-checkbox input[type=checkbox]:disabled:before{display:none}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthFileUploadWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-youth-file-upload-wrapper', template: "<div>\r\n    <div *ngIf=\"display\" class=\"overlay\">\r\n        <div id=\"myModal\" class=\"modal uploadPopup\">\r\n          <div class=\"modal-dialog modal-xl\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-lg-4 col-xl-4 mb-2\">\r\n                        <div class=\"uploaded-files mb-3\">\r\n                            <div class=\"upload-sec\">\r\n                                <div class=\"block drop-container\" [hidden]=\"isImageUploaded\" #file\r\n                                    (ngxf-drop)=\"uploadFile($event)\" (ngxf-select)=\"uploadFile($event)\"\r\n                                    drop-class=\"drop\" [ngxf-validate]=\"{ size: { min: 5 } }\" multiple>\r\n                                    <i class=\"fa fa-cloud-upload mb-2\" aria-hidden=\"true\"></i>\r\n                                    <p>Drag and Drop or <a href=\"javascript:;\">Browse</a></p>\r\n                                    <p class=\"mt-5\">Max file size 3MB <br> Supported formats: JPG, JPEG, PNG, JFIF</p>\r\n                                </div>\r\n                                <div [hidden]=\"!isImageUploaded\">\r\n                                    <img class=\"upload-image-preview\" [src]=\"imgUrl2\" alt=\"Youth Image\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"progress-wrap\">\r\n                            <div class=\"d-flex justify-content-between mb-1\">\r\n                                <h6>{{fileName}}</h6>\r\n                                <span [hidden]=\"isEditMode\">{{fileSize}}/3MB</span>\r\n                                <a href=\"javascript:;\" class=\"progress-close\" (click)=\"clearImage()\">\r\n                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-info\" role=\"progressbar\"\r\n                                    [style.width.%]=\"fileSizeRaw / 3072 * 100\" [attr.aria-valuenow]=\"fileSizeRaw\"\r\n                                    aria-valuemin=\"0\" aria-valuemax=\"3072\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-8 col-md-6 col-xl-8\">\r\n                        <div class=\"upload-wrap dd-overflow-inherit\" [formGroup]=\"documentUploadForm\">\r\n                            <div class=\"uploaded-form\">\r\n                                <div class=\"p-fluid p-formgrid row\">\r\n                                    <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n                                        <label for=\"fname\" class=\"referral-form-labels\">\r\n                                            Entered Date\r\n                                            <span class=\"requiredfield text-danger\">*</span>\r\n                                        </label>\r\n                                        <p-calendar type=\"date\" formControlName=\"entered_date\"\r\n                                            placeholder=\"[current date]\" [selectOtherMonths]=\"true\" [showIcon]=\"true\"\r\n                                            [showOnFocus]=\"false\"></p-calendar>\r\n                                    </div>\r\n                                    <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n                                        <div>\r\n                                            <label for=\"fname\" class=\"referral-form-labels\">\r\n                                                Photo Date\r\n                                                <span class=\"requiredfield text-danger\">*</span>\r\n                                            </label>\r\n                                            <p-calendar type=\"date\" formControlName=\"photo_date\"\r\n                                                placeholder=\"MM/DD/YYYY\" [selectOtherMonths]=\"true\" [showIcon]=\"true\"\r\n                                                [maxDate]=\"maxDate\" [showOnFocus]=\"false\"></p-calendar>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n                                        <label for=\"fname\" class=\"referral-form-labels\">\r\n                                            Type\r\n                                            <span class=\"requiredfield text-danger\">*</span>\r\n                                        </label>\r\n                                        <p-dropdown [disabled]=\"'true'\" [options]=\"photoTypeList\" inputId=\"role\" placeholder=\"Please Select\"\r\n                                            styleClass=\"w-100\" optionLabel=\"label\" optionValue=\"value\" [filter]=\"true\"\r\n                                            formControlName=\"type_code\"\r\n                                            ariaFilterLabel=\"null\" [showClear]=\"true\">\r\n                                            <ng-template let-item pTemplate=\"selectedItem\">\r\n                                                <div pTooltip=\"{{item?.label}}\" tooltipPosition=\"top\"\r\n                                                    class=\"text-truncate\"> {{ item?.label }}</div>\r\n                                            </ng-template>\r\n                                            <ng-template let-object pTemplate=\"item\">\r\n                                                {{ object.label }}\r\n                                            </ng-template>\r\n                                        </p-dropdown>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"p-fluid p-formgrid row\">\r\n                                    <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\">\r\n                                        <div>\r\n                                            <label for=\"fname\" class=\"referral-form-labels\">\r\n                                                Entered By\r\n                                                <span class=\"requiredfield text-danger\">*</span>\r\n                                            </label>\r\n                                            <input type=\"text\" pInputText placeholder=\"[current user]\"\r\n                                                formControlName=\"entered_by_worker_name\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"p-fluid p-formgrid row\">\r\n                                    <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\">\r\n                                        <label for=\"fname\" class=\"referral-form-labels\">\r\n                                            Description\r\n                                            <span class=\"requiredfield text-danger\">*</span>\r\n                                        </label>\r\n                                        <input type=\"text\" pInputText placeholder=\"Other\"\r\n                                            formControlName=\"description\" />\r\n                                        <div *ngIf=\"description?.errors?.maxlength\">\r\n                                            <div class=\"p-error block mt-1\">Description cannot be more than 100\r\n                                                characters.</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mt-3\">\r\n                                    <button class=\"pull-right btn btn-primary btncommon\"\r\n                                        [disabled]=\"documentUploadForm.invalid\" (click)=\"sendDocument()\">Save</button>\r\n                                    <button (click)=\"showPopup()\"\r\n                                        class=\"pull-right mr-2 btn btn-white border border-1 border-primary text-primary btncancel\">\r\n                                        {{ isButtonShowHide ? 'Cancel Changes' : 'Cancel' }}\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <button class=\"btn btn-primary addImage\" type=\"button\" (click)=\"showPopup()\" [disabled]=\"isViewMode\">+ Add Image</button>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:30px auto;width:90%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}.doc .drop-container{background:var(--white);border-radius:6px;height:150px;width:100%;box-shadow:1px 2px 20px #0a0a0a1a;display:flex;align-items:center;justify-content:center;border:2px dashed #c0c4c7}.doc .drop-container p{font-size:16px;font-weight:400;color:#c0c4c7}.doc .drop-container p .upload-button{display:inline-block;border:none;outline:none;cursor:pointer;color:#5754a3}.doc .drop-container p .upload-button input{display:none}.wizard .nav-tabs>li{width:calc(50% - 5px);padding:10px;background:#585858}.wizard .nav-tabs>li.active{background:#1bbc9b}.wizard .nav-tabs>li:first-child{margin-right:10px}.uploaded-files{overflow:hidden;display:block}.uploaded-form{background:var(--primary-chat-light);padding:0 0 0 5px;margin-bottom:0;border-radius:2px}.uploaded-form .form-control{padding:5px;border:1px solid #ccc;border-radius:3px;margin-bottom:6px;font-size:12px;height:30px}.uploaded-form textarea.form-control{height:115px!important;margin-bottom:0}.uploaded-files h4{margin:15px 0;font-size:15px;text-transform:uppercase;color:#f97054}.uploaded-files .media-body h4{color:var(--black);font-size:12px;margin:4px 0;text-transform:none;font-weight:700}.uploaded-form .progress{height:5px}.uploaded-form a>span{font-size:25px}.uploaded-files .btn-bs-file{position:relative;margin-bottom:0}.uploaded-files .btn-bs-file input[type=file]{position:absolute;top:-9999999;filter:alpha(opacity=0);opacity:0;width:0;height:0;outline:none;cursor:inherit}.uploaded-files .remove-upld{text-align:center;position:relative;min-height:75px}.uploaded-files .remove-upld span{display:inline-block;width:26px;padding:2px 0;border:1px solid #555;border-radius:100%;color:#555;position:absolute;left:28%;cursor:pointer;top:38%}.upload-wrap{max-height:unset;overflow:unset}h6.upldr-name{font-size:11px;margin:0;color:#777;display:inline-block;padding-right:8px}h6.upldr-name:first-child{border-right:1px solid #ccc}.upldr-name span{color:var(--black);font-size:12px;margin-top:3px;display:block}.no-file h6{margin:0;font-size:14px;font-weight:600}.upload-number{text-align:center}:host ::ng-deep .p-component:disabled{opacity:1}.upload-number span{display:inline-block;width:25px;height:25px;padding-top:2px;border:1px solid #777;color:#777;font-size:13px;font-weight:900;border-radius:100%}.block.drop-container{background:#fff;border:2px dashed #585858;padding:15px 0}.block.drop-container p{margin-bottom:0}i.fa.fa-cloud-upload{font-size:30px;cursor:pointer}.btn-bs-file{cursor:pointer}.Persons-Involved h4.modal-header{margin:0 0 5px;padding:0;font-size:15px;border-bottom:0}.uploaded-form .media{margin-top:0}.mh-450{min-height:450px}.required{position:relative}.required:after{color:#d00;content:\"*\";margin-left:5px;top:0;right:3px;position:absolute}.media-heading{display:flex;padding:11px}.media-left{margin:auto}.clsInputDesign{padding:5px;border:1px solid #ccc;border-radius:3px;margin-bottom:6px;font-size:12px;height:30px;white-space:nowrap;background:#fff;overflow:hidden;text-overflow:ellipsis}.photo-upload-title{background:var(--menu-highlight);color:var(--bg-light);padding:10px 15px;text-transform:uppercase;font-weight:500}i.fa.fa-question-circle{color:var(--primary);font-size:11px}.progress-wrap{position:relative}.progress-wrap h6{margin-bottom:0}.progress-wrap span{padding-right:30px;text-align:right}.progress-wrap h6,.progress-wrap span{font-size:14px;font-weight:400;width:60%;word-wrap:break-word}.progress-wrap a.progress-close{position:absolute;right:0;color:red;top:-2px}.progress-wrap .progress{height:5px;background-color:#d9d9d9;border-radius:0}.progress-wrap .progress .bg-info{background-color:#1b7bb7}.upload-image-preview{width:100%;height:285px;max-height:285px;object-fit:contain;object-position:center center;background-color:#f9f9f9}.mtc-2{margin-top:2rem!important}.g-checkbox input[type=checkbox]:disabled:before{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: LocalService }, { type: i2.FormBuilder }, { type: HttpService }, { type: DataStoreService }]; }, propDecorators: { value: [{
                type: Input
            }], label: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], formioEvent: [{
                type: Output
            }], fileInput: [{
                type: ViewChild,
                args: ['file']
            }] } });

// Constants for validation pattern and message
const PATTERN = '[A-Za-z]\\w*';
const PATTERN_MESSAGE = 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.';
// Component options for the custom file upload component
const COMPONENT_OPTIONS = {
    type: 'youthFileUpload',
    selector: 'youth-file-upload',
    title: 'Youth File Upload',
    group: 'basic',
    icon: 'file',
    editForm: minimalEditForm,
    fieldOptions: [],
    schema: {
        validate: {}
    }
};
// Minimal edit form schema configuration
function minimalEditForm() {
    return {
        components: [
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'API Key',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128
                }
            }
        ]
    };
}
// Function to register the YouthFileUpload component with Angular
function registerYouthFileUploadComponent(injector) {
    // Initialization logic, simulating a constructor
    console.log('Initializing registration of YouthFileUploadComponent...');
    // Dependencies initialization if needed
    const appRef = injector.get(ApplicationRef);
    // Log the application reference to ensure it's correctly retrieved
    console.log('ApplicationRef initialized:', appRef);
    // Perform registration
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, YouthFileUploadWrapperComponent, injector);
        console.log('registerYouthFileUploadComponent complete...');
    }
    catch (err) {
        console.error('Error occurred in registerYouthFileUploadComponent:', err);
    }
}

class DynmicTabPageModule {
    constructor(injector) {
        registerPopupComponent(injector);
        registerDateRangeComponent(injector);
        registerRatingComponent(injector);
        registerFileUploadComponent(injector);
        registerGlobalSearchComponent(injector);
        registerBasicFileUploadComponent(injector);
        registerYouthFileUploadComponent(injector);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, declarations: [DynamicPageCleanupComponent,
            DynamicPageComponent,
            DynamicTabComponent,
            PageBuilderViewComponent,
            PopupWrapperComponent,
            RatingWrapperComponent,
            FileUploadWrapperComponent,
            GlobalSearchWrapperComponent,
            FileUploadBasicComponent,
            DateRangeWrapperComponent], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            DynamicTabPageRoutingModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            CommonModule,
            PrimengModule,
            AlertModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule, i1$4.NgxMaskModule, 
            // OcrValidationModule,
            DynamicModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            SpeechRecognitionService,
            OCRService,
            CustomTagsService
        ], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            DynamicTabPageRoutingModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            CommonModule,
            PrimengModule,
            AlertModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot(),
            // OcrValidationModule,
            DynamicModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DynamicPageCleanupComponent,
                        DynamicPageComponent,
                        DynamicTabComponent,
                        PageBuilderViewComponent,
                        PopupWrapperComponent,
                        RatingWrapperComponent,
                        FileUploadWrapperComponent,
                        GlobalSearchWrapperComponent,
                        FileUploadBasicComponent,
                        DateRangeWrapperComponent
                    ],
                    imports: [
                        CommonModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DynamicTabPageRoutingModule,
                        DxDataGridModule,
                        DxSelectBoxModule,
                        DxCheckBoxModule,
                        CommonModule,
                        PrimengModule,
                        AlertModule,
                        MaterialUIModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot(),
                        // OcrValidationModule,
                        DynamicModule,
                    ],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        SpeechRecognitionService,
                        OCRService,
                        CustomTagsService
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

var dynmicTabPage_module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DynmicTabPageModule: DynmicTabPageModule
});

class DataService {
    pageIdSource = new BehaviorSubject('');
    currentPageId = this.pageIdSource.asObservable();
    constructor() { }
    changePageId(message) {
        this.pageIdSource.next(message);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DynamicRibbonPageComponent {
    dynamicTabPageService;
    router;
    route;
    data;
    appService;
    tabOrientation;
    dynamicRibbonData;
    ribbonData;
    selectedTabName;
    selectedSubTabIndex;
    settingInfo;
    ribbonConfig;
    headerValues;
    contentValues;
    customValues;
    youthId;
    alertCount = 0;
    riskValue;
    status;
    age;
    youth_pic;
    showJcp;
    oyaWorker;
    constructor(dynamicTabPageService, injector, router, route, data, appService) {
        this.dynamicTabPageService = dynamicTabPageService;
        this.router = router;
        this.route = route;
        this.data = data;
        this.appService = appService;
        this.appService.getValue.subscribe((res) => {
            this.youth_pic = '';
            if (res.key === 'youth_pic') {
                this.youth_pic = res.value;
            }
        });
    }
    ngOnChanges() {
        this.headerValues = [];
        const contentValues = [];
        if (this.ribbonConfig && this.ribbonConfig.length) {
            this.ribbonConfig?.forEach(rb => {
                if (rb.place.indexOf('Header') !== -1) {
                    this.headerValues.push(rb);
                }
                else {
                    if (rb.columnDef.indexOf('_pic') !== -1) {
                        this.headerValues.push(rb);
                    }
                    else {
                        contentValues.push(rb);
                    }
                }
            });
        }
        this.contentValues = [...contentValues];
        const dateOfBirth = this.getRibbonData(this.dynamicRibbonData, { columnDef: 'youth.date_of_birth' });
        if (Array.isArray(this.dynamicRibbonData)) {
            this.dynamicRibbonData?.push({ name: 'age', value: this.calculateAge(dateOfBirth) }, { name: 'active_warrent', value: this.getActiveWarrent(this.dynamicRibbonData['active_warrent']) }, { name: 'alert', value: '' }, { name: 'age', value: '' }, { name: 'status', value: '' });
        }
        else {
            this.dynamicRibbonData = [{ name: 'age', value: this.calculateAge(dateOfBirth) },
                { name: 'active_warrent', value: this.getActiveWarrent(this.dynamicRibbonData['active_warrent']) },
                { name: 'alert', value: '' },
                { name: 'age', value: '' },
                { name: 'status', value: '' }
            ];
        }
    }
    ngOnInit() {
        this.youthId = +window.location.pathname.split('/')[7];
        this.initilizeValue();
    }
    initilizeValue() {
        const youthSummaryJson = {
            "sourcevalue": this.youthId,
            "sourcekey": "youth.youth_id",
            "customMappingFields": [
                "disposition",
                "primary_worker",
                "location",
                "active_victim_indicator",
                "temporary_location",
                "active_warrant_indicator",
                "age",
                "alert",
                "jcp_rna",
                "youth_pic",
                "rna_summary"
            ]
        };
        this.dynamicTabPageService.getYouthSummaryDetails(youthSummaryJson).subscribe((result) => {
            const userRoles = JSON.parse(sessionStorage.getItem('user')).userroles;
            if (result) {
                this.customValues = result?.data;
                const riskLabel = `${result['data']['JCP/RNA_label']}`;
                const riskScore = result['data']['JCP/RNA_score'] ? result['data']['JCP/RNA_score'] : 0;
                this.alertCount = result['data'].alertCount ? result['data'].alertCount : 0;
                this.age = result['data'].age ? result['data'].age : null;
                this.status = result['data'].status ? this.capitalizeFirstLetter(result['data'].status) : null;
                this.youth_pic = result['data'].youth_pic ? result['data'].youth_pic : '';
                this.riskValue = `${riskLabel} Score: ${riskScore}`;
                this.showJcp = result['data'].jcpRolesList.includes(userRoles[0].name);
                this.oyaWorker = result['data'].oyaworker;
                console.log('this.status', this.status);
            }
        });
        // this.dynamicTabPageService.getAlertCount(this.youthId).subscribe(result => {
        //   if (result) {
        //     this.alertCount = result['data'][0].count ? result['data'][0].count : 0;
        //   }
        // });
        // this.dynamicTabPageService.getRiskValue(this.youthId).subscribe(result => {
        //   if (result) {
        //     const riskLabel = `${ result['data'].riskLabel}`;
        //     const riskScore =result['data'].riskScore ? result['data'].riskScore : 0;
        //     this.riskValue = `${riskLabel} Score: ${riskScore}`;
        //   }
        // });
    }
    calculateAge(dateOfBirth) {
        if (!dateOfBirth)
            return '';
        const ageDifMs = Date.now() - new Date(dateOfBirth).getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getActiveWarrent(activeWarrent) {
        if (!activeWarrent)
            return false;
        return true;
    }
    getDateFormat(value, data) {
        if (this.settingInfo) {
            if (value === 'date') {
                return this.settingInfo['datetimeformat'].split(' ')[0];
            }
            else if (data.header.trim().toLowerCase().includes('dob') || data.header.trim().toLowerCase().includes('birth')) {
                return this.settingInfo['datetimeformat'].split(' ')[0];
            }
            return this.settingInfo['datetimeformat'];
        }
        return 'MM/dd/yyyy';
    }
    routePages(data) {
        if (data.link) {
            this.dynamicTabPageService.getDynamicPage(data.link).subscribe(result => {
                if (result) {
                    const pageid = result['data'][0].activeversionid;
                    this.dynamicTabPageService.getActivePage(pageid).subscribe((resu) => {
                        if (resu && resu.data) {
                            const navigateState = {
                                externalLink: true,
                                title: resu.data.pagename
                            };
                            // if (resu.data.pageDetails.pagetype === 'ATPBDM') {
                            //   const dynamicTab = '/pages/dynamicpage/page/modify/' + data.link + '/' + _youthId;
                            //   this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigateState });
                            // }
                            if (resu.data.pageDetails.pagetype === 'ATPBDM') {
                                // const dynamicTab = 'dynamicpage/page/modify/' + data.link + '/' + _youthId;
                                const dynamicTab = 'page/' + data.link;
                                this.data.changePageId(dynamicTab);
                                this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigateState });
                            }
                            // else if (resu.data.pageDetails.pagetype === 'BGP') {
                            //   const dynamicTab = 'dynamic-search/search/' + data.link;
                            //   this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigateState });
                            // }
                        }
                    });
                }
            });
        }
    }
    viewImage(event) {
        event.stopPropagation();
        $('#Deleteuser').modal('show');
    }
    getRibbonData(dynamicRibbonData, column) {
        if (Array.isArray(dynamicRibbonData)) {
            for (const field of dynamicRibbonData) {
                if (column?.businessrules && column.businessrules.colDef === field.name || column.columnDef === field.name) {
                    if (field?.value?.toLowerCase() === 'clsd')
                        return 'Closed';
                    if (field?.value?.toLowerCase() === 'op')
                        return 'Open';
                    if (field?.value?.toLowerCase() === 'open')
                        return 'Open';
                    return field.value;
                }
            }
        }
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonPageComponent, deps: [{ token: DynamicTabPageService }, { token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: DataService }, { token: AppService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicRibbonPageComponent, selector: "app-dynamic-ribbon-page", inputs: { tabOrientation: "tabOrientation", dynamicRibbonData: "dynamicRibbonData", ribbonData: "ribbonData", selectedTabName: "selectedTabName", selectedSubTabIndex: "selectedSubTabIndex", settingInfo: "settingInfo", ribbonConfig: "ribbonConfig" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"accordion youth-summary-header\" id=\"accordionExample\" *ngIf=\"tabOrientation === 'V'\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header px-0 pb-0\">\r\n            <div class=\"youth-summary-header-group d-flex justify-content-between align-items-end\">\r\n                <div class=\"d-flex align-items-end\">\r\n                    <!-- <ng-container *ngFor=\"let field of ribbonData?.fieldmapping\"> -->\r\n                    <!-- <span class=\"youth-image\" *ngIf=\"field.field.indexOf('_pic') !== -1\">\r\n                            <img [src]=\"getRibbonData( dynamicRibbonData , field) || 'assets/images/user-empty.png'\"\r\n                                alt=\"youth\" id=\"youthImage\" />\r\n                            <em role=\"button\" class=\"fa fa-search-plus\" aria-hidden=\"true\" title=\"Zoom Image\"\r\n                                id=\"zoomImage\" (click)=\"viewImage($event)\"></em>\r\n                        </span> -->\r\n                    <!-- <span class=\"youthImageZoomed\" *ngIf=\"field.field.indexOf('_pic') !== -1\">\r\n                            <img [src]=\"dynamicRibbonData && dynamicRibbonData[field.field] || 'assets/images/user-empty.png'\"\r\n                                alt=\"youth\" />\r\n                        </span> -->\r\n                    <!-- </ng-container> -->\r\n                    <ng-container *ngFor=\"let field of ribbonConfig\">\r\n                        <span class=\"youth-name ml-4 mb-2 font-weight-bold\"\r\n                            *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('_name') !== -1\">\r\n                            <!-- {{ dynamicRibbonData && dynamicRibbonData[field.columnDef] }} dd -->\r\n                            {{ getRibbonData( dynamicRibbonData , field)}}\r\n                        </span>\r\n                        <span class=\"youth-image\" *ngIf=\"field.columnDef.indexOf('_pic') !== -1\">\r\n                            <img [src]=\"youth_pic || 'assets/images/no-photo.png'\"\r\n                                alt=\"youth\" id=\"youthImage\" style=\"height: 55px;\" />\r\n                            <em role=\"button\" class=\"fa fa-search-plus\" aria-hidden=\"true\" title=\"Zoom Image\"\r\n                                id=\"zoomImage\" (click)=\"viewImage($event)\"></em>\r\n                            <div class=\"modal imageZoom\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n                                <div class=\"modal-dialog\" role=\"document\">\r\n                                    <div class=\"modal-content\">\r\n                                        <div class=\"modal-header\">\r\n                                            <h5 class=\"modal-title\">Youth Image</h5>\r\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                                <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <img  [src]=\"youth_pic || 'assets/images/user-empty.png'\" alt=\"youth\"\r\n                                                id=\"youthImage\" />\r\n                                            <div class=\"clearfix\"></div>\r\n                                            <div class=\"mt-2\">\r\n                                                <button class=\"pull-right btn bg-white text-primary btncancel\"\r\n                                                    data-dismiss=\"modal\">\r\n                                                    Close\r\n                                                </button>\r\n                                            </div>\r\n\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </span>\r\n                    </ng-container>\r\n                </div>\r\n                <div>\r\n                    <ul class=\"pl-0 d-flex mb-0\">\r\n                        <li class=\"mr-4 mb-2 youthSummaryInfo\" *ngFor=\"let field of headerValues\">\r\n                            <ng-container\r\n                                *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('_pic') === -1 && field.columnDef.indexOf('_name') === -1\">\r\n                                <label class=\"mr-1 mb-md-0 font-weight-normal\"\r\n                                    *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('_pic') === -1 && field.columnDef.indexOf('_name') === -1\">{{\r\n                                    field.header }}</label>\r\n                                <span\r\n                                    *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('alert') === -1 && field.columnDef.indexOf('_name') === -1 && field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') \">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{ getRibbonData(\r\n                                        dynamicRibbonData , field) }}</a>\r\n                                </span>\r\n                                <span\r\n                                    *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('_pic') === -1 && field.columnDef.indexOf('_name') === -1 && (field.datatype === 'date' || field.datatype === 'datetime')\">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{ getRibbonData(\r\n                                        dynamicRibbonData , field) | date : getDateFormat(field.datatype, field) }}</a>\r\n                                </span>\r\n                                <span class=\"youth-alert\"\r\n                                    *ngIf=\"field.columnDef.indexOf('alert') !== -1 && field.columnDef.indexOf('_name') === -1 && field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') && customValues\">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{customValues['alert']}}</a>\r\n                                </span>\r\n                                <span\r\n                                    *ngIf=\"field.columnDef.indexOf('age') !== -1 && field.columnDef.indexOf('_name') === -1 && field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') \">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{age}}</a>\r\n                                </span>\r\n                                <span class=\"text-transform\"\r\n                                    *ngIf=\"field.columnDef.indexOf('status') !== -1 && field.columnDef.indexOf('_name') === -1 && field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') \">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{status}}</a>\r\n                                </span>\r\n                            </ng-container>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <span class=\"accicon\" role=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                aria-expanded=\"false\"><i class=\"fas fa-angle-down rotate-icon\"></i></span>\r\n        </div>\r\n        <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body p-2\">\r\n                <div class=\"row mb-0\">\r\n                    <ng-container *ngFor=\"let field of contentValues\">\r\n                        <div class=\"mb-1 cell-data youthSummaryInfo\"  [ngClass]=\"field?.styleclass ? field.styleclass : 'col-md-3'\" \r\n                        *ngIf=\"field.place !== 'Hide' \r\n                        && (field.header !== 'JCP Risk Level' && field.header !== 'RNA Summary Document' || ((field.header === 'JCP Risk Level' && !oyaWorker) \r\n                        || (field.header === 'RNA Summary Document' && oyaWorker)))\r\n                        && (field.header !== 'OYA Requested Rights' && field.header !== 'County Requested Rights' || ((field.header === 'OYA Requested Rights' && oyaWorker) \r\n                        || (field.header === 'County Requested Rights' && !oyaWorker)))\">\r\n                            <div class=\"group-values py-2 pl-2\" *ngIf=\"field.columnDef.indexOf('_pic') === -1 \">\r\n                                <label class=\"mr-1 mb-md-0 d-block text-transform\"\r\n                                    *ngIf=\"field.columnDef.indexOf('_pic') === -1\">{{ field.header }}</label>\r\n                                <span role=\"button\"\r\n                                    *ngIf=\"field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') && !field.isCustom \">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{ getRibbonData(\r\n                                        dynamicRibbonData , field) }}</a>\r\n                                </span>\r\n                                <span role=\"button\"\r\n                                    *ngIf=\"field.columnDef.indexOf('_pic') === -1 && (field.datatype === 'date' || field.datatype === 'datetime') && !field.isCustom\">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{getRibbonData(\r\n                                        dynamicRibbonData , field) | date : getDateFormat('date', field) }}</a>\r\n                                </span>\r\n                                <span class=\"yn-infor-details text-transform\"  title=\"{{ customValues[field?.columnDef]}}\" data-original-title=\"{{customValues[field?.columnDef]}}\" role=\"button\" *ngIf=\"field.columnDef.indexOf('_pic') === -1 && field.isCustom && customValues\">\r\n                                    {{customValues[field?.columnDef]}}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".nav-item button{width:100%}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background:var(--primary)}.left-menu-card ul{background:var(--bg-light)}.youth-submenu{border-radius:3px}.youth-submenu li:first-child button{border-top-left-radius:3px;border-top-right-radius:3px}.youth-submenu li:last-child button{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.youth-submenu li button{border-radius:0}.youth-submenu li button span.material-icons{width:0;padding-right:30px}.ribbon{background-color:var(--btn);display:inline-block;margin-bottom:5px;margin-top:0;padding:.5rem 15px;position:relative;right:15px;text-align:center;min-width:200px;color:#fff;box-shadow:4px 4px 15px #1a237e33;height:36px}.ribbon:before{background-color:var(--btn);content:\"\";display:block;height:100%;position:absolute;top:7.5px;width:15px}.ribbon:before{left:0;transform:skewy(45deg)}.ribbon:after{content:\"\";position:absolute;top:5px;width:35px;clip-path:polygon(0 0,100% 12px,100% 100%,50% calc(100% - 6px),0 calc(100% - 12px));right:-18px;background-color:#0084d1;height:25px;transform:rotate(-90deg);box-shadow:4px 4px 15px #1a237e33}:host ::ng-deep .p-tabmenu-nav li a .material-icons{padding-right:10px}:host ::ng-deep .p-tabmenu-nav li a .lable-name{font-size:var(--font-14)}.ribbon-img{display:flex;align-items:center;justify-content:center;height:100%}.bg-white{background-color:#fff}.ribbon-info{padding:12px}.ribbon-info table{width:100%}.ribbon-info table th{font-weight:400!important}.ribbon-info table td{padding:5px 0 0}#sidebar{background-color:var(--bg-light);z-index:3}#sidebar .sidebar-search input{padding-right:40px}#sidebar .sidebar-search .close-btn{position:absolute;top:6px;right:5px;opacity:.5;font-size:21px}#sidebar .list-group .list-group-item[aria-expanded=false]:after{font-family:Material Icons,monospace;content:\"\\e5cf\";display:block;position:absolute;left:auto;right:15px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:var(--font-17)}#sidebar .list-group .list-group-item[aria-expanded=true]:after{font-family:Material Icons,monospace;content:\"\\e5ce\";display:block;position:absolute;left:auto;right:15px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:var(--font-17)}#sidebar .list-group .list-group-item.level1{font-weight:600}#sidebar .list-group .list-group-item.level1.active{background:transparent;color:#0d3178}#sidebar .list-group .list-group-item .menu-name,#sidebar .list-group .list-group-item .submenu-name{width:calc(100% - 15px)}#sidebar .list-group .list-group-item .youth-icon{width:24px}#sidebar .list-group .list-group-item.active{background:var(--menu-highlight);border-radius:0}#sidebar .list-group .collapse{transition:transform .2s ease-out;padding-left:20px}#sidebar .list-group .collapse .list-group-item{padding-left:20px}#sidebar .list-group .collapse .list-group-item.active{font-weight:600;color:#0d3178}#sidebar .list-group .collapse .collapse{transition:transform .2s ease-out;padding-left:20px}#sidebar .list-group .collapse .collapse .list-group-item{padding-left:20px}#sidebar .list-group .collapse .collapse .list-group-item.active{font-weight:600;color:#0d3178}#sidebar .list-group .collapse.show{transition:transform .2s ease-out}#sidebar .list-group .collapse.show .list-group-item:before{content:\"\";display:inline-block;border-left:2px solid #e3e3e3;border-radius:5px;position:absolute;width:2px;height:100%;left:0;top:0}#sidebar .list-group .collapse.show .list-group-item.active:before,#sidebar .list-group .collapse.show .list-group-item:hover:before{border-left:3.5px solid var(--menu-highlight);border-radius:5px}#sidebar .list-group .collapse.show .list-group-item.active{background:transparent;color:#0d3178}@media screen and (min-width: 991px){#sidebar{overflow:hidden;height:calc(100vh - 120px)}#sidebar .sidebar-menu{overflow:auto;max-height:calc(100% - 50px)}}@media screen and (min-width: 768px) and (max-width: 990px){#sidebar{overflow:hidden;height:calc(100vh - 145px)}#sidebar .sidebar-menu{overflow:auto;max-height:100%}}@media screen and (max-width: 767px){#sidebar .sidebar-menu{overflow:auto;max-height:425px}}.youth-summary-header{margin-bottom:15px}.youth-summary-header .card{border:none;overflow:visible}.youth-summary-header .card-header{position:relative;background:#fff;border-bottom:4px solid #54bae0;margin-bottom:0}.youth-summary-header .card-header .accicon{cursor:pointer;position:absolute;bottom:-12px;right:32px;background:#fff;padding:0 5px;border:1px solid;border-radius:100%;line-height:normal}.accicon[aria-expanded=true]{transform:rotate(180deg)}.youth-summary-header .card-header .youth-summary-header-group{width:calc(100% - 40px)}@media screen and (max-width: 860px){.youth-summary-header .card-header .youth-summary-header-group{width:100%;display:block!important}}.youth-summary-header .card-header .youth-summary-header-group .youth-image{width:55px;height:55px;position:relative}.youth-summary-header .card-header .youth-summary-header-group .youthImageZoomed{display:none}.youth-summary-header .card-header .youth-summary-header-group .youthImageZoomed.show{display:block;position:absolute;left:0;top:0}.youth-summary-header .card-header .youth-summary-header-group .youth-image img{max-width:100%}.youth-summary-header .card-header .youth-summary-header-group .youth-image em{position:absolute;bottom:0;left:40px;color:var(--primary)}.youth-summary-header .card .card-header .youth-summary-header-group .youth-name{font-size:15px}.youth-summary-header .collapse .card-body .cell-data .group-values{border-left:3px solid #54bae0;background:#f7fcff;border-radius:3px;min-height:50px}@media screen and (max-width: 520px){ul{display:block!important}}ul li{list-style:none}ul li:empty{display:none}@media screen and (max-width: 520px){ul li{padding:5px;margin:0!important}}.youth-alert{display:inline-flex}.youth-alert a{background-color:#c64b07;color:#fff;width:20px;height:20px;display:flex;align-items:center;justify-content:center;border-radius:20px;font-weight:400}.youthSummaryInfo{padding-left:10px;padding-right:5px}.youthSummaryInfo label{font-weight:400!important;color:#1e2126;font-size:14px;line-height:normal}@media screen and (max-width: 520px){.youthSummaryInfo label{margin-bottom:0}}.youthSummaryInfo span a{color:var(--text-dark);font-weight:600;font-size:14px}.yn-infor-details{font-weight:600;font-size:14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:94%;display:block;color:var(--text-dark)}.text-transform{text-transform:capitalize}@media (min-width: 768px) and (max-width: 860px){.youthSummaryInfo.col-md-2{flex:0 0 50%;max-width:50%}}@media (min-width: 768px) and (max-width: 1024px){.dynamic-page .col-md-3,.dynamic-page .col-md-4{flex:0 0 50%;max-width:50%}}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i4.DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-ribbon-page', template: "<div class=\"accordion youth-summary-header\" id=\"accordionExample\" *ngIf=\"tabOrientation === 'V'\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header px-0 pb-0\">\r\n            <div class=\"youth-summary-header-group d-flex justify-content-between align-items-end\">\r\n                <div class=\"d-flex align-items-end\">\r\n                    <!-- <ng-container *ngFor=\"let field of ribbonData?.fieldmapping\"> -->\r\n                    <!-- <span class=\"youth-image\" *ngIf=\"field.field.indexOf('_pic') !== -1\">\r\n                            <img [src]=\"getRibbonData( dynamicRibbonData , field) || 'assets/images/user-empty.png'\"\r\n                                alt=\"youth\" id=\"youthImage\" />\r\n                            <em role=\"button\" class=\"fa fa-search-plus\" aria-hidden=\"true\" title=\"Zoom Image\"\r\n                                id=\"zoomImage\" (click)=\"viewImage($event)\"></em>\r\n                        </span> -->\r\n                    <!-- <span class=\"youthImageZoomed\" *ngIf=\"field.field.indexOf('_pic') !== -1\">\r\n                            <img [src]=\"dynamicRibbonData && dynamicRibbonData[field.field] || 'assets/images/user-empty.png'\"\r\n                                alt=\"youth\" />\r\n                        </span> -->\r\n                    <!-- </ng-container> -->\r\n                    <ng-container *ngFor=\"let field of ribbonConfig\">\r\n                        <span class=\"youth-name ml-4 mb-2 font-weight-bold\"\r\n                            *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('_name') !== -1\">\r\n                            <!-- {{ dynamicRibbonData && dynamicRibbonData[field.columnDef] }} dd -->\r\n                            {{ getRibbonData( dynamicRibbonData , field)}}\r\n                        </span>\r\n                        <span class=\"youth-image\" *ngIf=\"field.columnDef.indexOf('_pic') !== -1\">\r\n                            <img [src]=\"youth_pic || 'assets/images/no-photo.png'\"\r\n                                alt=\"youth\" id=\"youthImage\" style=\"height: 55px;\" />\r\n                            <em role=\"button\" class=\"fa fa-search-plus\" aria-hidden=\"true\" title=\"Zoom Image\"\r\n                                id=\"zoomImage\" (click)=\"viewImage($event)\"></em>\r\n                            <div class=\"modal imageZoom\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n                                <div class=\"modal-dialog\" role=\"document\">\r\n                                    <div class=\"modal-content\">\r\n                                        <div class=\"modal-header\">\r\n                                            <h5 class=\"modal-title\">Youth Image</h5>\r\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                                <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                            <img  [src]=\"youth_pic || 'assets/images/user-empty.png'\" alt=\"youth\"\r\n                                                id=\"youthImage\" />\r\n                                            <div class=\"clearfix\"></div>\r\n                                            <div class=\"mt-2\">\r\n                                                <button class=\"pull-right btn bg-white text-primary btncancel\"\r\n                                                    data-dismiss=\"modal\">\r\n                                                    Close\r\n                                                </button>\r\n                                            </div>\r\n\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </span>\r\n                    </ng-container>\r\n                </div>\r\n                <div>\r\n                    <ul class=\"pl-0 d-flex mb-0\">\r\n                        <li class=\"mr-4 mb-2 youthSummaryInfo\" *ngFor=\"let field of headerValues\">\r\n                            <ng-container\r\n                                *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('_pic') === -1 && field.columnDef.indexOf('_name') === -1\">\r\n                                <label class=\"mr-1 mb-md-0 font-weight-normal\"\r\n                                    *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('_pic') === -1 && field.columnDef.indexOf('_name') === -1\">{{\r\n                                    field.header }}</label>\r\n                                <span\r\n                                    *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('alert') === -1 && field.columnDef.indexOf('_name') === -1 && field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') \">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{ getRibbonData(\r\n                                        dynamicRibbonData , field) }}</a>\r\n                                </span>\r\n                                <span\r\n                                    *ngIf=\"field.place !== 'Hide' && field.columnDef.indexOf('_pic') === -1 && field.columnDef.indexOf('_name') === -1 && (field.datatype === 'date' || field.datatype === 'datetime')\">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{ getRibbonData(\r\n                                        dynamicRibbonData , field) | date : getDateFormat(field.datatype, field) }}</a>\r\n                                </span>\r\n                                <span class=\"youth-alert\"\r\n                                    *ngIf=\"field.columnDef.indexOf('alert') !== -1 && field.columnDef.indexOf('_name') === -1 && field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') && customValues\">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{customValues['alert']}}</a>\r\n                                </span>\r\n                                <span\r\n                                    *ngIf=\"field.columnDef.indexOf('age') !== -1 && field.columnDef.indexOf('_name') === -1 && field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') \">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{age}}</a>\r\n                                </span>\r\n                                <span class=\"text-transform\"\r\n                                    *ngIf=\"field.columnDef.indexOf('status') !== -1 && field.columnDef.indexOf('_name') === -1 && field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') \">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{status}}</a>\r\n                                </span>\r\n                            </ng-container>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <span class=\"accicon\" role=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                aria-expanded=\"false\"><i class=\"fas fa-angle-down rotate-icon\"></i></span>\r\n        </div>\r\n        <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body p-2\">\r\n                <div class=\"row mb-0\">\r\n                    <ng-container *ngFor=\"let field of contentValues\">\r\n                        <div class=\"mb-1 cell-data youthSummaryInfo\"  [ngClass]=\"field?.styleclass ? field.styleclass : 'col-md-3'\" \r\n                        *ngIf=\"field.place !== 'Hide' \r\n                        && (field.header !== 'JCP Risk Level' && field.header !== 'RNA Summary Document' || ((field.header === 'JCP Risk Level' && !oyaWorker) \r\n                        || (field.header === 'RNA Summary Document' && oyaWorker)))\r\n                        && (field.header !== 'OYA Requested Rights' && field.header !== 'County Requested Rights' || ((field.header === 'OYA Requested Rights' && oyaWorker) \r\n                        || (field.header === 'County Requested Rights' && !oyaWorker)))\">\r\n                            <div class=\"group-values py-2 pl-2\" *ngIf=\"field.columnDef.indexOf('_pic') === -1 \">\r\n                                <label class=\"mr-1 mb-md-0 d-block text-transform\"\r\n                                    *ngIf=\"field.columnDef.indexOf('_pic') === -1\">{{ field.header }}</label>\r\n                                <span role=\"button\"\r\n                                    *ngIf=\"field.columnDef.indexOf('_pic') === -1 && (field.datatype !== 'date' && field.datatype !== 'datetime') && !field.isCustom \">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{ getRibbonData(\r\n                                        dynamicRibbonData , field) }}</a>\r\n                                </span>\r\n                                <span role=\"button\"\r\n                                    *ngIf=\"field.columnDef.indexOf('_pic') === -1 && (field.datatype === 'date' || field.datatype === 'datetime') && !field.isCustom\">\r\n                                    <a href=\"javascript:void(0)\" (click)=\"routePages(field)\">{{getRibbonData(\r\n                                        dynamicRibbonData , field) | date : getDateFormat('date', field) }}</a>\r\n                                </span>\r\n                                <span class=\"yn-infor-details text-transform\"  title=\"{{ customValues[field?.columnDef]}}\" data-original-title=\"{{customValues[field?.columnDef]}}\" role=\"button\" *ngIf=\"field.columnDef.indexOf('_pic') === -1 && field.isCustom && customValues\">\r\n                                    {{customValues[field?.columnDef]}}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".nav-item button{width:100%}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background:var(--primary)}.left-menu-card ul{background:var(--bg-light)}.youth-submenu{border-radius:3px}.youth-submenu li:first-child button{border-top-left-radius:3px;border-top-right-radius:3px}.youth-submenu li:last-child button{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.youth-submenu li button{border-radius:0}.youth-submenu li button span.material-icons{width:0;padding-right:30px}.ribbon{background-color:var(--btn);display:inline-block;margin-bottom:5px;margin-top:0;padding:.5rem 15px;position:relative;right:15px;text-align:center;min-width:200px;color:#fff;box-shadow:4px 4px 15px #1a237e33;height:36px}.ribbon:before{background-color:var(--btn);content:\"\";display:block;height:100%;position:absolute;top:7.5px;width:15px}.ribbon:before{left:0;transform:skewy(45deg)}.ribbon:after{content:\"\";position:absolute;top:5px;width:35px;clip-path:polygon(0 0,100% 12px,100% 100%,50% calc(100% - 6px),0 calc(100% - 12px));right:-18px;background-color:#0084d1;height:25px;transform:rotate(-90deg);box-shadow:4px 4px 15px #1a237e33}:host ::ng-deep .p-tabmenu-nav li a .material-icons{padding-right:10px}:host ::ng-deep .p-tabmenu-nav li a .lable-name{font-size:var(--font-14)}.ribbon-img{display:flex;align-items:center;justify-content:center;height:100%}.bg-white{background-color:#fff}.ribbon-info{padding:12px}.ribbon-info table{width:100%}.ribbon-info table th{font-weight:400!important}.ribbon-info table td{padding:5px 0 0}#sidebar{background-color:var(--bg-light);z-index:3}#sidebar .sidebar-search input{padding-right:40px}#sidebar .sidebar-search .close-btn{position:absolute;top:6px;right:5px;opacity:.5;font-size:21px}#sidebar .list-group .list-group-item[aria-expanded=false]:after{font-family:Material Icons,monospace;content:\"\\e5cf\";display:block;position:absolute;left:auto;right:15px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:var(--font-17)}#sidebar .list-group .list-group-item[aria-expanded=true]:after{font-family:Material Icons,monospace;content:\"\\e5ce\";display:block;position:absolute;left:auto;right:15px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:var(--font-17)}#sidebar .list-group .list-group-item.level1{font-weight:600}#sidebar .list-group .list-group-item.level1.active{background:transparent;color:#0d3178}#sidebar .list-group .list-group-item .menu-name,#sidebar .list-group .list-group-item .submenu-name{width:calc(100% - 15px)}#sidebar .list-group .list-group-item .youth-icon{width:24px}#sidebar .list-group .list-group-item.active{background:var(--menu-highlight);border-radius:0}#sidebar .list-group .collapse{transition:transform .2s ease-out;padding-left:20px}#sidebar .list-group .collapse .list-group-item{padding-left:20px}#sidebar .list-group .collapse .list-group-item.active{font-weight:600;color:#0d3178}#sidebar .list-group .collapse .collapse{transition:transform .2s ease-out;padding-left:20px}#sidebar .list-group .collapse .collapse .list-group-item{padding-left:20px}#sidebar .list-group .collapse .collapse .list-group-item.active{font-weight:600;color:#0d3178}#sidebar .list-group .collapse.show{transition:transform .2s ease-out}#sidebar .list-group .collapse.show .list-group-item:before{content:\"\";display:inline-block;border-left:2px solid #e3e3e3;border-radius:5px;position:absolute;width:2px;height:100%;left:0;top:0}#sidebar .list-group .collapse.show .list-group-item.active:before,#sidebar .list-group .collapse.show .list-group-item:hover:before{border-left:3.5px solid var(--menu-highlight);border-radius:5px}#sidebar .list-group .collapse.show .list-group-item.active{background:transparent;color:#0d3178}@media screen and (min-width: 991px){#sidebar{overflow:hidden;height:calc(100vh - 120px)}#sidebar .sidebar-menu{overflow:auto;max-height:calc(100% - 50px)}}@media screen and (min-width: 768px) and (max-width: 990px){#sidebar{overflow:hidden;height:calc(100vh - 145px)}#sidebar .sidebar-menu{overflow:auto;max-height:100%}}@media screen and (max-width: 767px){#sidebar .sidebar-menu{overflow:auto;max-height:425px}}.youth-summary-header{margin-bottom:15px}.youth-summary-header .card{border:none;overflow:visible}.youth-summary-header .card-header{position:relative;background:#fff;border-bottom:4px solid #54bae0;margin-bottom:0}.youth-summary-header .card-header .accicon{cursor:pointer;position:absolute;bottom:-12px;right:32px;background:#fff;padding:0 5px;border:1px solid;border-radius:100%;line-height:normal}.accicon[aria-expanded=true]{transform:rotate(180deg)}.youth-summary-header .card-header .youth-summary-header-group{width:calc(100% - 40px)}@media screen and (max-width: 860px){.youth-summary-header .card-header .youth-summary-header-group{width:100%;display:block!important}}.youth-summary-header .card-header .youth-summary-header-group .youth-image{width:55px;height:55px;position:relative}.youth-summary-header .card-header .youth-summary-header-group .youthImageZoomed{display:none}.youth-summary-header .card-header .youth-summary-header-group .youthImageZoomed.show{display:block;position:absolute;left:0;top:0}.youth-summary-header .card-header .youth-summary-header-group .youth-image img{max-width:100%}.youth-summary-header .card-header .youth-summary-header-group .youth-image em{position:absolute;bottom:0;left:40px;color:var(--primary)}.youth-summary-header .card .card-header .youth-summary-header-group .youth-name{font-size:15px}.youth-summary-header .collapse .card-body .cell-data .group-values{border-left:3px solid #54bae0;background:#f7fcff;border-radius:3px;min-height:50px}@media screen and (max-width: 520px){ul{display:block!important}}ul li{list-style:none}ul li:empty{display:none}@media screen and (max-width: 520px){ul li{padding:5px;margin:0!important}}.youth-alert{display:inline-flex}.youth-alert a{background-color:#c64b07;color:#fff;width:20px;height:20px;display:flex;align-items:center;justify-content:center;border-radius:20px;font-weight:400}.youthSummaryInfo{padding-left:10px;padding-right:5px}.youthSummaryInfo label{font-weight:400!important;color:#1e2126;font-size:14px;line-height:normal}@media screen and (max-width: 520px){.youthSummaryInfo label{margin-bottom:0}}.youthSummaryInfo span a{color:var(--text-dark);font-weight:600;font-size:14px}.yn-infor-details{font-weight:600;font-size:14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:94%;display:block;color:var(--text-dark)}.text-transform{text-transform:capitalize}@media (min-width: 768px) and (max-width: 860px){.youthSummaryInfo.col-md-2{flex:0 0 50%;max-width:50%}}@media (min-width: 768px) and (max-width: 1024px){.dynamic-page .col-md-3,.dynamic-page .col-md-4{flex:0 0 50%;max-width:50%}}\n"] }]
        }], ctorParameters: function () { return [{ type: DynamicTabPageService }, { type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: DataService }, { type: AppService }]; }, propDecorators: { tabOrientation: [{
                type: Input
            }], dynamicRibbonData: [{
                type: Input
            }], ribbonData: [{
                type: Input
            }], selectedTabName: [{
                type: Input
            }], selectedSubTabIndex: [{
                type: Input
            }], settingInfo: [{
                type: Input
            }], ribbonConfig: [{
                type: Input
            }] } });

class DynamicRibbonComponent {
    route;
    router;
    dynamicTabPageService;
    storageService;
    data;
    _storeservice;
    sharedService;
    item;
    tabPageId;
    tabList = [];
    originalTabList = [];
    navigateData;
    currentRouterLink;
    toggleMobileSidebar;
    selectedIndex = 0;
    parentGridPage;
    localstorage;
    tabpageData;
    dynamicSearchService;
    dynamicRibbonData = {};
    ribbonPageData;
    activeItem;
    settingInfo;
    dataStoreService;
    searchTerm = '';
    selectedSubTabIndex = -1;
    selectedTabName = '';
    selectedSubTabName = '';
    ribbonConfig;
    sourceKey;
    sourceValue;
    sourceType;
    selectedPageId;
    pageIdSubscription;
    tabIndexCounter = 0;
    tabSubIndexCounter = 0;
    lastPageID = null;
    tabactionName = '';
    selectedTab;
    selectedSubTab;
    constructor(injector, route, router, dynamicTabPageService, storageService, data, _storeservice, sharedService) {
        this.route = route;
        this.router = router;
        this.dynamicTabPageService = dynamicTabPageService;
        this.storageService = storageService;
        this.data = data;
        this._storeservice = _storeservice;
        this.sharedService = sharedService;
        this.tabPageId = this.route.snapshot.paramMap.get('tabId');
        this.sourceKey = this.route.snapshot.paramMap.get('sourceKey');
        this.sourceValue = this.route.snapshot.paramMap.get('sourceValue');
        this.sourceType = this.route.snapshot.paramMap.get('sourceType');
        this.localstorage = injector.get(LocalService);
        this.navigateData = this.router?.getCurrentNavigation()?.extras?.state;
        this.dynamicSearchService = injector.get(DynamicsearchService);
        this.dataStoreService = injector.get(DataStoreService);
        this.sharedService.currentMessage.subscribe((_message) => {
            if (this.localstorage.getItem('compositeTitle')) {
                this.tabactionName = `<small class="pipe-style">|</small> ${this.localstorage.getItem('setTabAction')} ${this.localstorage.getItem('compositeTitle')}`;
            }
            else if (this.localstorage.getItem('setTabAction')) {
                this.tabactionName = `<small class="pipe-style">|</small> ${this.localstorage.getItem('setTabAction')} ${this.selectedSubTabName}`;
            }
            else {
                this.tabactionName = '';
            }
        });
    }
    ngOnInit() {
        this.getDynamicTab();
        // this._storeservice.currentStore.subscribe((res: any) => {
        //   if (res) {
        //     this.sharedService = res['SHAREDSERVICE']
        //   }
        // })
        const REGISTRATION = this.storageService.getItem('REGISTRATION');
        if (REGISTRATION) {
            this.settingInfo = JSON.parse(REGISTRATION);
        }
        this.pageIdSubscription = this.data.currentPageId.subscribe(pageId => {
            if (pageId) {
                this.dynamicRibbonActive(pageId);
                return this.selectedPageId = pageId;
            }
        });
    }
    ngDoCheck() {
        const pageID = this.route.snapshot.queryParams['pageID'];
        if (pageID && pageID !== this.lastPageID) {
            this.lastPageID = pageID;
            this.activateTabByPageID(pageID);
        }
        else if (this.tabList &&
            this.tabList.length &&
            this.tabList[0]?.routerLink &&
            this.tabList[0]?.routerLink !== '' &&
            this.currentRouterLink !== this.tabList[0]?.routerLink) {
            const currentpage = this.localstorage.getItem('pagename');
            this.parentGridPage = currentpage ? currentpage : '';
            this.localstorage.setItem('navigationState', JSON.stringify(this.navigateData));
            this.activeItem = this.tabList[0];
            //this.selectedTabName = this.tabList[0].label;
            if (this.tabList[0].items.length > 0 && this.tabList[0].items[0].routerLink !== ''
                && this.currentRouterLink !== this.tabList[0].items[0].routerLink
                && this.tabpageData.taborientation === 'V') {
                this.onTabItemClick(this.tabList[0], this.tabList[0].items[0]);
                this.currentRouterLink = this.tabList[0].items[0].routerLink;
            }
            else if (this.tabList[0].items.length === 0) {
                this.onTabItemClick(this.tabList[0], 0);
                this.currentRouterLink = this.tabList[0]?.routerLink;
            }
        }
    }
    activateTabByPageID(pageID) {
        for (let tab of this.tabList) {
            if (tab.id == pageID) {
                this.currentRouterLink = tab.routerLink;
                this.activeItem = tab;
                this.selectedIndex = tab.tabindex;
                this.selectedTabName = tab.label;
                return;
            }
            if (tab.items && tab.items.length) {
                for (let subTab of tab.items) {
                    if (subTab.id == pageID) {
                        this.currentRouterLink = subTab.routerLink;
                        this.activeItem = tab;
                        this.selectedIndex = tab.tabindex;
                        this.selectedSubTabIndex = subTab.tabindex;
                        this.selectedTabName = tab.label;
                        this.selectedSubTabName = subTab.label;
                        return;
                    }
                }
            }
        }
    }
    async getDynamicTab() {
        this.dynamicTabPageService.getActivePage(this.tabPageId, true).subscribe(value => {
            this.tabpageData = value['data'];
            const tabConfig = this.checkParams(value['data']['tabconfig']);
            if (tabConfig[0].type === 'ATPBDM') {
                this.dataStoreService.setData('gridAction', 'edit');
            }
            this.getRibbonPage(this.tabpageData.ribbonid);
            // Map tab configurations and set router links
            this.tabList = tabConfig.map(page => this.mapTab(page));
            this.originalTabList = this.tabList;
            const pageID = this.route.snapshot.queryParams['pageID'];
            if (pageID) {
                this.activateTabByPageID(pageID);
            }
            else {
                if (this.tabList[0].items.length > 0 && this.tabpageData.taborientation === 'V') {
                    this.onTabItemClick(this.tabList[0], this.tabList[0].items[0]);
                }
                else if (this.tabList[0].items.length === 0) {
                    this.onTabItemClick(this.tabList[0], 0);
                }
            }
        });
    }
    mapTab(page) {
        // Process childTabs if available
        const childTabs = this.mapChildTabs(page.tabs);
        return {
            id: page.id,
            label: page.name,
            /* Add routerLink if needed */
            routerLink: '',
            icon: page?.icon ? page.icon : '',
            items: childTabs,
            tabindex: `${this.tabIndexCounter++}`
        };
    }
    mapChildTabs(childTabs) {
        if (!childTabs || !Array.isArray(childTabs)) {
            return [];
        }
        return childTabs.map(childTab => {
            return {
                id: childTab.id,
                label: childTab.name,
                // Add routerLink if needed
                routerLink: '',
                icon: childTab?.icon ? childTab.icon : '',
                items: childTab.tabs ? childTab.tabs : [],
                tabindex: `${this.tabSubIndexCounter++}`
            };
        });
    }
    checkParams(element) {
        return typeof element === 'string' ? JSON.parse(element) : element;
    }
    getRibbonPage(ribbonid) {
        this.dynamicTabPageService.getDynamicPage(ribbonid).subscribe(result => {
            if (result) {
                const page = result['data'][0].activeVersion;
                this.ribbonPageData = this.checkParams(page.tableschemaconfig);
                this.ribbonConfig = this.checkParams(page.ribbonconfig);
                let queryData;
                if (this.sourceKey && this.sourceValue && this.sourceType) {
                    queryData = { data: {} };
                    queryData.data[this.sourceKey] = (this.sourceType === 'number') ? Number(this.sourceValue) : this.sourceValue;
                }
                const data = {
                    queryData: queryData,
                    pagedata: [page],
                    requireTotalCount: true,
                    roleId: sessionStorage.getItem('role_id')
                };
                data.pagedata[0].filterId = null;
                const gridUrl = '/solution/dynamicsearch/searchinput/';
                this.dynamicSearchService.exportData(data, gridUrl).subscribe(value => {
                    this.dynamicRibbonData = value['data']['result'][0].row;
                });
            }
        });
    }
    setActiveVersionsAndRoutes(page, level) {
        return this.dynamicTabPageService.getDynamicPage(page.id).toPromise()
            .then((response) => {
            const rows = response['data'];
            // Set routing based on page type
            let routerLink;
            if (rows[0].pagetype === 'BGP') {
                routerLink = `dynamic-search/search/${rows[0].activeVersion.id}`;
            }
            else if (rows[0].pagetype === 'MV') {
                routerLink = `master-view/${page.id}`;
            }
            else if (rows[0].pagetype === 'COMP') {
                routerLink = `composite-page/${page.id}`;
            }
            else if (rows[0].pagetype === 'CP') {
                const config = this.checkParams(rows[0].activeVersion.tabconfig);
                routerLink = `${config[0].pathname}/${rows[0].activeVersion.id}`;
            }
            else {
                routerLink = `page/${page.id}`;
            }
            const items = this.getItemsAtLevel(level);
            this.setRouterLink(items, page.id, routerLink);
            // Process childTabs if available
            if (page.tabs && Array.isArray(page.tabs)) {
                const promises = page.tabs.map(childTab => this.setActiveVersionsAndRoutes(childTab, level + 1));
                return Promise.all(promises).then(responses => {
                    responses.forEach((response, index) => {
                        if (Array.isArray(response)) {
                            // Handle array response
                            console.log(`Response for childTab at index ${index}:`, response);
                        }
                        else {
                            // Handle void response
                            console.log(`No response for childTab at index ${index}`);
                        }
                    });
                }).catch(error => {
                    // Handle errors if any of the promises fail
                    console.error('Error:', error);
                    /* Resolve promises and return void */
                });
            }
            else {
                return Promise.resolve();
            }
        });
    }
    getItemsAtLevel(level) {
        let items = this.tabList;
        for (let i = 0; i < level; i++) {
            items = items.reduce((acc, item) => acc.concat(item.items || []), []);
        }
        return items;
    }
    setRouterLink(items, pageId, routerLink) {
        items.forEach(item => {
            if (item.routerLink === '') {
                item.routerLink = item.id === pageId ? routerLink : '';
            }
        });
    }
    onTabItemClick(tab, subTab = null) {
        this.selectedIndex = tab.tabindex;
        this.selectedSubTabIndex = subTab ? subTab.tabindex : -1;
        this.selectedTabName = tab.label;
        this.selectedSubTabName = subTab ? subTab.label : '';
        this.localstorage.removeItem('setTabAction');
        this.localstorage.removeItem('compositeTitle');
        this.tabactionName = '';
        this.selectedTab = tab;
        this.selectedSubTab = subTab;
        const targetPage = subTab ? subTab : tab;
        this.setActiveVersionsAndRoutes(targetPage, subTab ? 1 : 0).then(() => {
            this.tabRoutingLink(targetPage);
        }).catch(error => {
            console.error('Error setting active versions and routes:', error);
        });
    }
    tabRoutingLink(tab) {
        if (!tab.routerLink.includes('dynamic-search')) {
            this.dataStoreService.setData('gridAction', 'edit');
            this.localstorage.setItem('parentGridPage', '');
            this.localstorage.setItem('AddAction', false);
        }
        this.router.navigate([`${tab.routerLink}`], { relativeTo: this.route, state: this.navigateData });
    }
    onVerticalTabItemClick(tab, index) {
        this.selectedIndex = index;
        this.activeItem = this.tabList[index];
        this.selectedTabName = tab.activeItem.label;
        this.router.navigate([`${tab.activeItem.routerLink}`], { relativeTo: this.route, state: this.navigateData });
    }
    redirect() {
        const id = this.localstorage.getItem('version-id');
        this.router.navigate([`pages/page-design/versions/${id}`]);
        const parentGridPageInfo = JSON.parse(this.localstorage.getItem('backToGridPage'));
        if (parentGridPageInfo && parentGridPageInfo.id) {
            this.router.navigate([`/pages/dynamic-search/search/${parentGridPageInfo.id}`], { relativeTo: this.route });
        }
        else {
            this.router.navigate([`/pages/${parentGridPageInfo.name}`], { relativeTo: this.route });
        }
    }
    backToMain() {
        if (this.tabactionName) {
            this.onTabItemClick(this.selectedTab, this.selectedSubTab);
        }
    }
    ngOnDestroy() {
        this.localstorage.removeItem('navigationState');
        this.pageIdSubscription.unsubscribe();
    }
    getDateFormat(value) {
        if (this.settingInfo) {
            if (value === 'date') {
                return this.settingInfo['datetimeformat'].split(' ')[0];
            }
            return this.settingInfo['datetimeformat'];
        }
        return 'MM/dd/yyyy';
    }
    clearSearch() {
        this.searchTerm = '';
    }
    dynamicRibbonActive(pageId) {
        const tabList = this.tabList;
        let i = 0;
        for (const tabListElement of tabList) {
            if (tabListElement.routerLink === pageId) {
                this.selectedIndex = i;
                this.selectedSubTabIndex = -1;
                this.selectedTabName = tabListElement.label;
                this.selectedSubTabName = '';
                break;
            }
            else {
                const subTabList = tabListElement.items;
                let j = 0;
                for (const subTabListElement of subTabList) {
                    if (subTabListElement.routerLink === pageId) {
                        this.selectedIndex = i;
                        this.selectedSubTabIndex = j;
                        this.selectedTabName = tabListElement.label;
                        this.selectedSubTabName = subTabListElement.label;
                        break;
                    }
                    j += 1;
                }
            }
            i += 1;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: i1.Router }, { token: DynamicTabPageService }, { token: LocalStorageService }, { token: DataService }, { token: DataStoreService }, { token: SharedService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicRibbonComponent, selector: "app-dynamic-ribbon", inputs: { tabPageId: "tabPageId" }, ngImport: i0, template: "<div class=\"dynamic-ribbon-tabs\">\r\n  <div class=\"col-sm-12 mb-2\">\r\n    <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\">\r\n      Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n    </button> -->\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"left-menu-card\">\r\n      <div class=\"p-3\" id=\"sidebar\" *ngIf=\"tabpageData?.taborientation === 'V'\">\r\n        <div class=\"sidebar-search position-relative mb-3\">\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Search Tab\" aria-label=\"compose\"\r\n            [(ngModel)]=\"searchTerm\" />\r\n            <span role=\"button\" class=\"close-btn material-symbols-outlined mr-2\" *ngIf=\"!searchTerm\">search</span>\r\n\r\n          <span role=\"button\" class=\"close-btn material-symbols-outlined mr-2\" *ngIf=\"searchTerm\"\r\n            (click)=\"clearSearch()\">close</span>\r\n        </div>\r\n        <div class=\"sidebar-menu\">\r\n          <div class=\"unstyled list-group border-0 text-center text-md-left\" [ngClass]=\"tab.icon? 'icon-enabled':''\"\r\n            *ngFor=\"let tab of tabList | tabfilter: searchTerm: originalTabList\">\r\n            <a *ngIf=\"tab.items.length === 0\" href=\"javascript:void(0)\"\r\n              class=\"list-group-item border-0 d-flex align-items-center text-left\"\r\n              [class.active]=\"selectedTabIndex === tab.tabindex\" (click)=\"onTabItemClick(tab)\">\r\n              <!-- <span class=\"material-symbols-outlined youth-icon mr-2\">{{ tab.icon }}</span> -->\r\n              <span class=\"submenu-name\">{{ tab.label }}</span>\r\n            </a>\r\n            <a *ngIf=\"tab.items.length > 0\" href=\"#tab{{tab.tabindex}}\" data-toggle=\"collapse\"\r\n              class=\"list-group-item border-0 d-flex align-items-center text-left level1\"\r\n              [class.collapsed]=\"selectedIndex !== tab.tabindex\"\r\n              [class.active]=\"selectedIndex === tab.tabindex\"\r\n              [attr.aria-expanded]=\"selectedIndex === tab.tabindex ? 'true' : 'false'\">\r\n              <!-- <span class=\"material-symbols-outlined youth-icon mr-2\">{{ tab.icon }}</span> -->\r\n              <span class=\"menu-name\">{{ tab.label}}</span>\r\n            </a>\r\n            <div class=\"collapse position-relative\" id=\"tab{{tab.tabindex}}\" [class.show]=\"selectedIndex === tab.tabindex\"\r\n              data-parent=\"#sidebar\">\r\n              <div *ngFor=\"let subItem of tab.items\">\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item border-0 d-flex align-items-center text-left\"\r\n                  [class.active]=\"selectedSubTabIndex === subItem.tabindex\"\r\n                  (click)=\"onTabItemClick(tab, subItem)\">\r\n                  <!-- <span class=\"material-symbols-outlined youth-icon mr-2\">{{ subItem.icon }}</span> -->\r\n                  <span class=\"submenu-name\">{{ subItem.label }}</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ul class=\"nav nav-pills flex-column border shadow\" id=\"myTab\" role=\"tablist\"\r\n        *ngIf=\"tabpageData?.taborientation === 'H'\">\r\n        <ng-container *ngFor=\"let field of ribbonPageData?.fieldmapping\">\r\n          <li class=\"nav-item-btn nav-item border-bottom p-3 youth-image text-center\"\r\n            *ngIf=\"field.field.indexOf('_pic') !== -1\">\r\n            <img [src]=\"dynamicRibbonData && dynamicRibbonData[field.field] || 'assets/images/user-empty.png'\"\r\n              width=\"64\" alt=\"youth image\" />\r\n          </li>\r\n        </ng-container>\r\n        <ng-container *ngFor=\"let field of ribbonPageData?.fieldmapping\">\r\n          <li class=\"nav-item-btn nav-item border-bottom p-3 youth-image text-center\"\r\n            *ngIf=\"field.field.indexOf('_pic') === -1\">\r\n            <p class=\"mb-0\">{{ field.label }}</p>\r\n            <p class=\"mb-0 font-weight-bold\" *ngIf=\"field.datatype === 'date' || field.datatype === 'datetime'\">{{\r\n              dynamicRibbonData && dynamicRibbonData[field.columnDef] | date : getDateFormat(field.datatype) }}</p>\r\n            <p class=\"mb-0 font-weight-bold\" *ngIf=\"field.datatype !== 'date' && field.datatype !== 'datetime'\">{{\r\n              dynamicRibbonData && dynamicRibbonData[field.columnDef] }}</p>\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n    <div class=\"right-section mb-3 pl-3\">\r\n      <app-dynamic-ribbon-page [tabOrientation]=\"tabpageData?.taborientation\" [ribbonData]=\"ribbonPageData\"\r\n        [dynamicRibbonData]=\"dynamicRibbonData\" [selectedTabName]=\"selectedTabName\" [ribbonConfig]=\"ribbonConfig\"\r\n        [selectedSubTabIndex]=\"selectedSubTabIndex\" [settingInfo]=\"settingInfo\"></app-dynamic-ribbon-page>\r\n      <div class=\"tab-content\">\r\n        <div *ngIf=\"tabpageData?.taborientation === 'H'\">\r\n          <p-tabMenu [model]=\"tabList\" #tab [activeItem]=\"activeItem\" [scrollable]=\"true\">\r\n            <ng-template pTemplate=\"item\" let-item let-i=\"index\">\r\n              <div class=\"d-flex align-items-center\" (click)=\"onVerticalTabItemClick(tab, i)\">\r\n                <span class=\"material-symbols-outlined mr-2\">{{ item.icon }}</span>\r\n                <span class=\"lable-name\">{{ item.label }}</span>\r\n              </div>\r\n            </ng-template>\r\n          </p-tabMenu>\r\n        </div>\r\n        <header *ngIf=\"selectedSubTabName || selectedTabName\" class=\"ribbon\" title=\"{{ selectedTabName }}\">\r\n          <button (click)=\"backToMain()\" [ngClass]=\"{'active-tab': tabactionName}\">\r\n            {{ selectedSubTabName ? selectedSubTabName : selectedTabName }}\r\n          </button>\r\n          <span [innerHTML]=\"tabactionName\" class=\"subPages\">{{tabactionName}}</span>\r\n        </header>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>", styles: [".nav-item button{width:100%}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background:var(--primary)}.left-menu-card ul{background:var(--bg-light)}.youth-submenu{border-radius:3px}.youth-submenu li:first-child button{border-top-left-radius:3px;border-top-right-radius:3px}.youth-submenu li:last-child button{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.youth-submenu li button{border-radius:0}.youth-submenu li button span.material-icons{width:0;padding-right:30px}.ribbon{background-color:#afd462;display:inline-block;margin-top:0;position:relative;color:#1f1f1f;height:35px;text-transform:capitalize;padding-left:15px;padding-right:15px;line-height:35px;margin-bottom:20px}.ribbon:after{content:\"\";position:absolute;top:0;right:-34px;border-bottom:35px solid #afd462;border-right:35px solid transparent}.ribbon button{background:transparent;border:none;cursor:default;font-weight:600}.ribbon button.active-tab{cursor:pointer;font-weight:400}.ribbon button.active-tab:hover{text-decoration:underline;font-weight:600}.ribbon .subPages{color:var(--text-dark);font-weight:600;padding-left:5px}.ribbon .subPages .pipe-style{font-weight:400}:host ::ng-deep .p-tabmenu-nav li a .material-icons{padding-right:10px}:host ::ng-deep .p-tabmenu-nav li a .lable-name{font-size:var(--font-14)}.ribbon-img{display:flex;align-items:center;justify-content:center;height:100%}.bg-white{background-color:#fff}.ribbon-info{padding:12px}.ribbon-info table{width:100%}.ribbon-info table th{font-weight:400!important}.ribbon-info table td{padding:5px 0 0}#sidebar{background-color:#f4fcff;z-index:3}#sidebar .sidebar-search input{padding-right:40px}#sidebar .sidebar-search .close-btn{position:absolute;top:6px;right:5px;opacity:.5;font-size:21px}#sidebar .list-group .list-group-item{padding-left:10px;color:var(--text-dark);font-size:var(--font-14)}#sidebar .list-group .list-group-item[aria-expanded=false]:after{font-family:Material Icons,monospace;content:\"\\e5cf\";display:block;position:absolute;left:auto;right:15px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:24px;margin-top:-5px}#sidebar .list-group .list-group-item[aria-expanded=true]:after{font-family:Material Icons,monospace;content:\"\\e5ce\";display:block;position:absolute;left:auto;right:15px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:24px;margin-top:-5px}#sidebar .list-group .list-group-item.level1{font-weight:400}#sidebar .list-group .list-group-item.level1.active{background:#e5f6fe!important;color:#081319;border-left:3px solid #1258a7!important;box-shadow:0 0 10px #c7c8c9;font-size:14px}#sidebar .list-group .list-group-item .menu-name,#sidebar .list-group .list-group-item .submenu-name{width:calc(100% - 15px)}#sidebar .list-group .list-group-item .youth-icon{width:24px}#sidebar .list-group .list-group-item.active{background:var(--menu-highlight);border-radius:0}#sidebar .list-group .collapse{transition:transform .2s ease-out;padding-left:10px;background:var(--bg-light)}#sidebar .list-group .collapse .list-group-item{padding-left:10px}#sidebar .list-group .collapse .list-group-item.active{font-weight:600;color:#0d3178}#sidebar .list-group .collapse .collapse{transition:transform .2s ease-out;padding-left:10px;background:var(--bg-light)}#sidebar .list-group .collapse .collapse .list-group-item{padding-left:20px}#sidebar .list-group .collapse .collapse .list-group-item.active{font-weight:600;color:#0d3178}#sidebar .list-group .collapse.show{transition:transform .2s ease-out}#sidebar .list-group .collapse.show .list-group-item:before{content:\"\";display:inline-block;border-left:1px solid #e5f6ff;position:absolute;width:2px;height:100%;left:0;top:0}#sidebar .list-group .collapse.show .list-group-item.active:before,#sidebar .list-group .collapse.show .list-group-item:hover:before{border-left:2px solid #0084d1}#sidebar .list-group .collapse.show .list-group-item.active{background:var(--bg-light);color:#0d3178}@media screen and (min-width: 991px){#sidebar{overflow:hidden;height:calc(100vh - 120px)}#sidebar .sidebar-menu{overflow:auto;max-height:calc(100% - 50px)}}@media screen and (min-width: 768px){.left-menu-card{width:240px}.right-section{width:calc(100% - 255px)}}@media screen and (min-width: 768px) and (max-width: 990px){#sidebar{overflow:hidden;height:calc(100vh - 145px)}#sidebar .sidebar-menu{overflow:auto;max-height:100%}}@media screen and (max-width: 767px){#sidebar .sidebar-menu{overflow:auto;max-height:425px}.left-menu-card,.right-section{width:100%}}@media screen and (max-width: 520px){.pl-ys{padding:0 15px!important}}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i4$1.TabMenu, selector: "p-tabMenu", inputs: ["model", "activeItem", "scrollable", "popup", "style", "styleClass", "ariaLabel", "ariaLabelledBy"], outputs: ["activeItemChange"] }, { kind: "directive", type: i1.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: DynamicRibbonPageComponent, selector: "app-dynamic-ribbon-page", inputs: ["tabOrientation", "dynamicRibbonData", "ribbonData", "selectedTabName", "selectedSubTabIndex", "settingInfo", "ribbonConfig"] }, { kind: "pipe", type: i4.DatePipe, name: "date" }, { kind: "pipe", type: TabFilterPipe, name: "tabfilter" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-ribbon', template: "<div class=\"dynamic-ribbon-tabs\">\r\n  <div class=\"col-sm-12 mb-2\">\r\n    <!-- <button type=\"button\" class=\"btn btn-cancel\" (click)=\"redirect()\">\r\n      Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n    </button> -->\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"left-menu-card\">\r\n      <div class=\"p-3\" id=\"sidebar\" *ngIf=\"tabpageData?.taborientation === 'V'\">\r\n        <div class=\"sidebar-search position-relative mb-3\">\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Search Tab\" aria-label=\"compose\"\r\n            [(ngModel)]=\"searchTerm\" />\r\n            <span role=\"button\" class=\"close-btn material-symbols-outlined mr-2\" *ngIf=\"!searchTerm\">search</span>\r\n\r\n          <span role=\"button\" class=\"close-btn material-symbols-outlined mr-2\" *ngIf=\"searchTerm\"\r\n            (click)=\"clearSearch()\">close</span>\r\n        </div>\r\n        <div class=\"sidebar-menu\">\r\n          <div class=\"unstyled list-group border-0 text-center text-md-left\" [ngClass]=\"tab.icon? 'icon-enabled':''\"\r\n            *ngFor=\"let tab of tabList | tabfilter: searchTerm: originalTabList\">\r\n            <a *ngIf=\"tab.items.length === 0\" href=\"javascript:void(0)\"\r\n              class=\"list-group-item border-0 d-flex align-items-center text-left\"\r\n              [class.active]=\"selectedTabIndex === tab.tabindex\" (click)=\"onTabItemClick(tab)\">\r\n              <!-- <span class=\"material-symbols-outlined youth-icon mr-2\">{{ tab.icon }}</span> -->\r\n              <span class=\"submenu-name\">{{ tab.label }}</span>\r\n            </a>\r\n            <a *ngIf=\"tab.items.length > 0\" href=\"#tab{{tab.tabindex}}\" data-toggle=\"collapse\"\r\n              class=\"list-group-item border-0 d-flex align-items-center text-left level1\"\r\n              [class.collapsed]=\"selectedIndex !== tab.tabindex\"\r\n              [class.active]=\"selectedIndex === tab.tabindex\"\r\n              [attr.aria-expanded]=\"selectedIndex === tab.tabindex ? 'true' : 'false'\">\r\n              <!-- <span class=\"material-symbols-outlined youth-icon mr-2\">{{ tab.icon }}</span> -->\r\n              <span class=\"menu-name\">{{ tab.label}}</span>\r\n            </a>\r\n            <div class=\"collapse position-relative\" id=\"tab{{tab.tabindex}}\" [class.show]=\"selectedIndex === tab.tabindex\"\r\n              data-parent=\"#sidebar\">\r\n              <div *ngFor=\"let subItem of tab.items\">\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item border-0 d-flex align-items-center text-left\"\r\n                  [class.active]=\"selectedSubTabIndex === subItem.tabindex\"\r\n                  (click)=\"onTabItemClick(tab, subItem)\">\r\n                  <!-- <span class=\"material-symbols-outlined youth-icon mr-2\">{{ subItem.icon }}</span> -->\r\n                  <span class=\"submenu-name\">{{ subItem.label }}</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ul class=\"nav nav-pills flex-column border shadow\" id=\"myTab\" role=\"tablist\"\r\n        *ngIf=\"tabpageData?.taborientation === 'H'\">\r\n        <ng-container *ngFor=\"let field of ribbonPageData?.fieldmapping\">\r\n          <li class=\"nav-item-btn nav-item border-bottom p-3 youth-image text-center\"\r\n            *ngIf=\"field.field.indexOf('_pic') !== -1\">\r\n            <img [src]=\"dynamicRibbonData && dynamicRibbonData[field.field] || 'assets/images/user-empty.png'\"\r\n              width=\"64\" alt=\"youth image\" />\r\n          </li>\r\n        </ng-container>\r\n        <ng-container *ngFor=\"let field of ribbonPageData?.fieldmapping\">\r\n          <li class=\"nav-item-btn nav-item border-bottom p-3 youth-image text-center\"\r\n            *ngIf=\"field.field.indexOf('_pic') === -1\">\r\n            <p class=\"mb-0\">{{ field.label }}</p>\r\n            <p class=\"mb-0 font-weight-bold\" *ngIf=\"field.datatype === 'date' || field.datatype === 'datetime'\">{{\r\n              dynamicRibbonData && dynamicRibbonData[field.columnDef] | date : getDateFormat(field.datatype) }}</p>\r\n            <p class=\"mb-0 font-weight-bold\" *ngIf=\"field.datatype !== 'date' && field.datatype !== 'datetime'\">{{\r\n              dynamicRibbonData && dynamicRibbonData[field.columnDef] }}</p>\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n    <div class=\"right-section mb-3 pl-3\">\r\n      <app-dynamic-ribbon-page [tabOrientation]=\"tabpageData?.taborientation\" [ribbonData]=\"ribbonPageData\"\r\n        [dynamicRibbonData]=\"dynamicRibbonData\" [selectedTabName]=\"selectedTabName\" [ribbonConfig]=\"ribbonConfig\"\r\n        [selectedSubTabIndex]=\"selectedSubTabIndex\" [settingInfo]=\"settingInfo\"></app-dynamic-ribbon-page>\r\n      <div class=\"tab-content\">\r\n        <div *ngIf=\"tabpageData?.taborientation === 'H'\">\r\n          <p-tabMenu [model]=\"tabList\" #tab [activeItem]=\"activeItem\" [scrollable]=\"true\">\r\n            <ng-template pTemplate=\"item\" let-item let-i=\"index\">\r\n              <div class=\"d-flex align-items-center\" (click)=\"onVerticalTabItemClick(tab, i)\">\r\n                <span class=\"material-symbols-outlined mr-2\">{{ item.icon }}</span>\r\n                <span class=\"lable-name\">{{ item.label }}</span>\r\n              </div>\r\n            </ng-template>\r\n          </p-tabMenu>\r\n        </div>\r\n        <header *ngIf=\"selectedSubTabName || selectedTabName\" class=\"ribbon\" title=\"{{ selectedTabName }}\">\r\n          <button (click)=\"backToMain()\" [ngClass]=\"{'active-tab': tabactionName}\">\r\n            {{ selectedSubTabName ? selectedSubTabName : selectedTabName }}\r\n          </button>\r\n          <span [innerHTML]=\"tabactionName\" class=\"subPages\">{{tabactionName}}</span>\r\n        </header>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>", styles: [".nav-item button{width:100%}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background:var(--primary)}.left-menu-card ul{background:var(--bg-light)}.youth-submenu{border-radius:3px}.youth-submenu li:first-child button{border-top-left-radius:3px;border-top-right-radius:3px}.youth-submenu li:last-child button{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.youth-submenu li button{border-radius:0}.youth-submenu li button span.material-icons{width:0;padding-right:30px}.ribbon{background-color:#afd462;display:inline-block;margin-top:0;position:relative;color:#1f1f1f;height:35px;text-transform:capitalize;padding-left:15px;padding-right:15px;line-height:35px;margin-bottom:20px}.ribbon:after{content:\"\";position:absolute;top:0;right:-34px;border-bottom:35px solid #afd462;border-right:35px solid transparent}.ribbon button{background:transparent;border:none;cursor:default;font-weight:600}.ribbon button.active-tab{cursor:pointer;font-weight:400}.ribbon button.active-tab:hover{text-decoration:underline;font-weight:600}.ribbon .subPages{color:var(--text-dark);font-weight:600;padding-left:5px}.ribbon .subPages .pipe-style{font-weight:400}:host ::ng-deep .p-tabmenu-nav li a .material-icons{padding-right:10px}:host ::ng-deep .p-tabmenu-nav li a .lable-name{font-size:var(--font-14)}.ribbon-img{display:flex;align-items:center;justify-content:center;height:100%}.bg-white{background-color:#fff}.ribbon-info{padding:12px}.ribbon-info table{width:100%}.ribbon-info table th{font-weight:400!important}.ribbon-info table td{padding:5px 0 0}#sidebar{background-color:#f4fcff;z-index:3}#sidebar .sidebar-search input{padding-right:40px}#sidebar .sidebar-search .close-btn{position:absolute;top:6px;right:5px;opacity:.5;font-size:21px}#sidebar .list-group .list-group-item{padding-left:10px;color:var(--text-dark);font-size:var(--font-14)}#sidebar .list-group .list-group-item[aria-expanded=false]:after{font-family:Material Icons,monospace;content:\"\\e5cf\";display:block;position:absolute;left:auto;right:15px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:24px;margin-top:-5px}#sidebar .list-group .list-group-item[aria-expanded=true]:after{font-family:Material Icons,monospace;content:\"\\e5ce\";display:block;position:absolute;left:auto;right:15px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:24px;margin-top:-5px}#sidebar .list-group .list-group-item.level1{font-weight:400}#sidebar .list-group .list-group-item.level1.active{background:#e5f6fe!important;color:#081319;border-left:3px solid #1258a7!important;box-shadow:0 0 10px #c7c8c9;font-size:14px}#sidebar .list-group .list-group-item .menu-name,#sidebar .list-group .list-group-item .submenu-name{width:calc(100% - 15px)}#sidebar .list-group .list-group-item .youth-icon{width:24px}#sidebar .list-group .list-group-item.active{background:var(--menu-highlight);border-radius:0}#sidebar .list-group .collapse{transition:transform .2s ease-out;padding-left:10px;background:var(--bg-light)}#sidebar .list-group .collapse .list-group-item{padding-left:10px}#sidebar .list-group .collapse .list-group-item.active{font-weight:600;color:#0d3178}#sidebar .list-group .collapse .collapse{transition:transform .2s ease-out;padding-left:10px;background:var(--bg-light)}#sidebar .list-group .collapse .collapse .list-group-item{padding-left:20px}#sidebar .list-group .collapse .collapse .list-group-item.active{font-weight:600;color:#0d3178}#sidebar .list-group .collapse.show{transition:transform .2s ease-out}#sidebar .list-group .collapse.show .list-group-item:before{content:\"\";display:inline-block;border-left:1px solid #e5f6ff;position:absolute;width:2px;height:100%;left:0;top:0}#sidebar .list-group .collapse.show .list-group-item.active:before,#sidebar .list-group .collapse.show .list-group-item:hover:before{border-left:2px solid #0084d1}#sidebar .list-group .collapse.show .list-group-item.active{background:var(--bg-light);color:#0d3178}@media screen and (min-width: 991px){#sidebar{overflow:hidden;height:calc(100vh - 120px)}#sidebar .sidebar-menu{overflow:auto;max-height:calc(100% - 50px)}}@media screen and (min-width: 768px){.left-menu-card{width:240px}.right-section{width:calc(100% - 255px)}}@media screen and (min-width: 768px) and (max-width: 990px){#sidebar{overflow:hidden;height:calc(100vh - 145px)}#sidebar .sidebar-menu{overflow:auto;max-height:100%}}@media screen and (max-width: 767px){#sidebar .sidebar-menu{overflow:auto;max-height:425px}.left-menu-card,.right-section{width:100%}}@media screen and (max-width: 520px){.pl-ys{padding:0 15px!important}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: i1.Router }, { type: DynamicTabPageService }, { type: LocalStorageService }, { type: DataService }, { type: DataStoreService }, { type: SharedService }]; }, propDecorators: { tabPageId: [{
                type: Input
            }] } });

const options = {
    gridType: GridType.VerticalFixed,
    compactType: CompactType.CompactUpAndLeft,
    margin: 10,
    outerMargin: true,
    outerMarginTop: null,
    outerMarginRight: null,
    outerMarginBottom: null,
    outerMarginLeft: null,
    mobileBreakpoint: 640,
    minCols: 1,
    maxCols: 2,
    minRows: 1,
    maxRows: 100,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,
    minItemRows: 1,
    maxItemArea: 1000,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1,
    fixedColWidth: 400,
    fixedRowHeight: 480,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    ignoreMarginInRow: false,
    draggable: {
        delayStart: 0,
        enabled: false,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler'
    },
    resizable: {
        delayStart: 0,
        enabled: false,
        handles: {
            s: false,
            e: false,
            n: false,
            w: false,
            se: false,
            ne: false,
            sw: false,
            nw: false
        }
    },
    swap: false,
    pushItems: false,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: {
        north: false,
        east: false,
        south: false,
        west: false
    },
    pushResizeItems: false,
    displayGrid: DisplayGrid.None,
    disableWindowResize: false,
    disableWarnings: false,
    scrollToNewItems: false
};

class MasterViewComponent {
    route;
    dynamicTabPageService;
    store;
    options;
    masterViewWidget$;
    masterPageId;
    alertService;
    editMode = true;
    constructor(injector, route, dynamicTabPageService, store) {
        this.route = route;
        this.dynamicTabPageService = dynamicTabPageService;
        this.store = store;
        this.options = options;
        this.alertService = injector.get(AlertService);
        this.masterViewWidget$ = this.store.select(selectAllGridsterItems);
    }
    ngOnInit() {
        this.masterPageId = this.route.snapshot.paramMap.get('masterPageId');
        if (window.location.pathname.includes('master-view/view')) {
            this.editMode = false;
        }
        this.getDynamicPage(this.masterPageId);
    }
    getDynamicPage(masterPageId) {
        this.dynamicTabPageService.getDynamicPage(masterPageId).subscribe(value => {
            const activeversionid = value['data'][0].activeversionid;
            this.dynamicTabPageService.getActivePage(activeversionid, this.editMode).subscribe(result => {
                if (result) {
                    const masterviewconfig = typeof result['data'].masterviewconfig === 'string'
                        ? JSON.parse(result['data'].masterviewconfig)
                        : result['data'].masterviewconfig;
                    if (masterviewconfig) {
                        masterviewconfig.forEach(x => {
                            x.loadedFromMasterView = true;
                            x.input = { ...x.input, componentId: x.id };
                            if (x.componentName === 'dynamicpage-common') {
                                x.component = DynamicPageCleanupComponent;
                            }
                            else if (x.componentName === 'dynamicpage-sea') {
                                x.component = DynamicSearchComponent;
                            }
                        });
                        this.store.dispatch(setComponents({ components: masterviewconfig }));
                    }
                }
            });
        }, error => {
            this.alertService.error('Something went wrong');
            console.error(error);
        });
    }
    ngAfterViewInit() {
        this.route.paramMap.subscribe(() => {
            this.masterPageId = this.route.snapshot.paramMap.get('masterPageId');
            this.getDynamicPage(this.masterPageId);
        });
    }
    ngOnDestroy() {
        this.store.dispatch(clearComponents());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: DynamicTabPageService }, { token: i3$1.Store }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: MasterViewComponent, selector: "app-master-view", inputs: { masterPageId: "masterPageId" }, ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"float-container\">\r\n  <div class=\"float-child-right\">\r\n    <div class=\"dashboard-inner mt-0\">\r\n      <div class=\"float-child-right\">\r\n        <gridster class=\"gridster\" [options]=\"options\">\r\n          <gridster-item class=\"gridster-item\" [item]=\"item\"\r\n            *ngFor=\"let item of masterViewWidget$ | async; let i = index\">\r\n            <div class=\"clearfix gridster-item-group\">\r\n              <div class=\"gridster-item-content\">\r\n                <!-- <div class=\"drag-handler widget-header p-2 mb-2\">\r\n                  <div class=\"item-buttons widget-header-buttons w-100\">\r\n                    <h6 class=\"mb-0\">{{ item.name }}</h6>\r\n                  </div>\r\n                </div>-->\r\n                <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"> </ndc-dynamic>\r\n              </div>\r\n            </div>\r\n          </gridster-item>\r\n        </gridster>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".float-container .float-child-right{max-height:calc(100vh - 280px);overflow-y:auto}.float-container .float-child-right .close-button{position:absolute;top:2px;right:5px;cursor:pointer;color:#007cc3}.float-container .float-child-right .overallSec{padding-left:0}.float-container .gridster{display:inline-table;background:transparent;padding:0!important}.float-container .gridster-item{margin:0 0 15px!important;padding:0 12px 12px;overflow-y:auto}.float-container .gridster-item-content{position:relative}.pull-right{padding:5px}.gridster{height:120vh;margin:0;padding:0;background-color:#b3b1b1}.gridster-container{margin-top:10px;margin-left:10px}.top-btn-left{width:150px;margin:5px}.top-btn-right{width:350px;margin:5px}.widget-header{background-color:#eee;cursor:default}.widget-header-btn{cursor:pointer}.header-margin-left{margin-left:5px}.header-margin-right{margin-right:5px}app-nomination-widget{height:100%}.widget-header-buttons{display:flex;align-items:center;justify-content:space-between}.widget-header-buttons h6{font-size:12px;text-transform:uppercase;font-weight:600;color:#2c2863}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i5$2.GridsterComponent, selector: "gridster", inputs: ["options"] }, { kind: "component", type: i5$2.GridsterItemComponent, selector: "gridster-item", inputs: ["item"], outputs: ["itemInit", "itemChange", "itemResize"] }, { kind: "directive", type: i22.DynamicIoDirective, selector: "[ndcDynamicInputs],[ndcDynamicOutputs]", inputs: ["ndcDynamicInputs", "ndcDynamicOutputs"], exportAs: ["ndcDynamicIo"] }, { kind: "component", type: i22.DynamicComponent, selector: "ndc-dynamic", inputs: ["ndcDynamicComponent", "ndcDynamicInjector", "ndcDynamicProviders", "ndcDynamicContent", "ndcDynamicNgModuleRef", "ndcDynamicEnvironmentInjector"], outputs: ["ndcDynamicCreated"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-master-view', template: "<app-alert></app-alert>\r\n<div class=\"float-container\">\r\n  <div class=\"float-child-right\">\r\n    <div class=\"dashboard-inner mt-0\">\r\n      <div class=\"float-child-right\">\r\n        <gridster class=\"gridster\" [options]=\"options\">\r\n          <gridster-item class=\"gridster-item\" [item]=\"item\"\r\n            *ngFor=\"let item of masterViewWidget$ | async; let i = index\">\r\n            <div class=\"clearfix gridster-item-group\">\r\n              <div class=\"gridster-item-content\">\r\n                <!-- <div class=\"drag-handler widget-header p-2 mb-2\">\r\n                  <div class=\"item-buttons widget-header-buttons w-100\">\r\n                    <h6 class=\"mb-0\">{{ item.name }}</h6>\r\n                  </div>\r\n                </div>-->\r\n                <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"> </ndc-dynamic>\r\n              </div>\r\n            </div>\r\n          </gridster-item>\r\n        </gridster>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".float-container .float-child-right{max-height:calc(100vh - 280px);overflow-y:auto}.float-container .float-child-right .close-button{position:absolute;top:2px;right:5px;cursor:pointer;color:#007cc3}.float-container .float-child-right .overallSec{padding-left:0}.float-container .gridster{display:inline-table;background:transparent;padding:0!important}.float-container .gridster-item{margin:0 0 15px!important;padding:0 12px 12px;overflow-y:auto}.float-container .gridster-item-content{position:relative}.pull-right{padding:5px}.gridster{height:120vh;margin:0;padding:0;background-color:#b3b1b1}.gridster-container{margin-top:10px;margin-left:10px}.top-btn-left{width:150px;margin:5px}.top-btn-right{width:350px;margin:5px}.widget-header{background-color:#eee;cursor:default}.widget-header-btn{cursor:pointer}.header-margin-left{margin-left:5px}.header-margin-right{margin-right:5px}app-nomination-widget{height:100%}.widget-header-buttons{display:flex;align-items:center;justify-content:space-between}.widget-header-buttons h6{font-size:12px;text-transform:uppercase;font-weight:600;color:#2c2863}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: DynamicTabPageService }, { type: i3$1.Store }]; }, propDecorators: { masterPageId: [{
                type: Input
            }] } });

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data, type = 'P') {
        const permissionMap = {};
        if (type === 'P') {
            const flatData = [...this.flat(data)];
            flatData.forEach((permission) => {
                permissionMap[permission.name] = permission.allowed;
            });
            this.setState({ ...this.state, ...permissionMap });
        }
        else {
            data.forEach((permission) => {
                permissionMap['GALKP_' + permission.key] = permission.lookuprolepermissions;
            });
            this.setState({ ...this.state, ...permissionMap });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state.permissions);
        else
            return of(this.state.lookupPermissions);
    }
    flat(array) {
        let result = [];
        array.forEach(item => {
            result.push(item);
            if (item.permissions && Array.isArray(item.permissions)) {
                result = result.concat(this.flat(item.permissions));
            }
        });
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PermissionService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getPermissionRoleById(id) {
        return this.httpService.get(AuthURL.EndPoints.auth.permission.permissionRoleById.replace('{id}', id));
    }
    getPagePermission(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.permission.pagePermission, data);
    }
    getPageLookupPermission() {
        return this.httpService.get(AuthURL.EndPoints.auth.permission.pageLookupPermission);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionService, deps: [{ token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }]; } });

class RoutePermissionResolver {
    permissionStore;
    permissionService;
    constructor(permissionStore, permissionService) {
        this.permissionStore = permissionStore;
        this.permissionService = permissionService;
        // This is intentional
    }
    resolve(route, _state) {
        const pagePermissions = this.permissionService.getPagePermission(route.data).pipe(tap(res => {
            this.permissionStore.setStore(res['data']);
        }), catchError(_error => of([])));
        const lookupPermissions = this.permissionService.getPageLookupPermission().pipe(tap(res => {
            this.permissionStore.setStore(res['data'], 'LP');
        }), catchError(_error => of([])));
        return forkJoin([pagePermissions, lookupPermissions]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutePermissionResolver, deps: [{ token: PermissionStore }, { token: PermissionService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutePermissionResolver, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutePermissionResolver, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: PermissionService }]; } });

// import { DynamicPageModifyBypageidComponent } from '../dynamic-tab-page/dynamic-page-modify-bypageid/dynamic-page-modify-bypageid.component';
class CompositePageComponent {
    route;
    dynamicTabPageService;
    store;
    CompositePageWidget$;
    compositePageId;
    id;
    alertService;
    storage;
    editMode = true;
    activeIndexes = [];
    constructor(injector, route, dynamicTabPageService, store) {
        this.route = route;
        this.dynamicTabPageService = dynamicTabPageService;
        this.store = store;
        this.alertService = injector.get(AlertService);
        this.storage = injector.get(LocalService);
        this.CompositePageWidget$ = this.store.select(selectAllGridsterItems);
    }
    ngOnInit() {
        this.compositePageId = this.route.snapshot.paramMap.get('compositePageId');
        this.id = this.route.snapshot.paramMap.get('id');
        if (window.location.pathname.includes('composite-page/view')) {
            this.editMode = false;
        }
        this.getDynamicPage(this.compositePageId);
    }
    ngAfterViewInit() {
        this.route.paramMap.subscribe(() => {
            this.compositePageId = this.route.snapshot.paramMap.get('compositePageId');
            this.id = this.route.snapshot.paramMap.get('id');
            this.getDynamicPage(this.compositePageId);
        });
    }
    getDynamicPage(compositePageId) {
        this.dynamicTabPageService.getDynamicPage(compositePageId).subscribe(value => {
            const activeversionid = value['data'][0].activeversionid;
            this.dynamicTabPageService.getActivePage(activeversionid, this.editMode).subscribe(resu => {
                if (resu) {
                    const compositePageconfig = typeof resu['data'].masterviewconfig === 'string'
                        ? JSON.parse(resu['data'].masterviewconfig)
                        : resu['data'].masterviewconfig;
                    if (compositePageconfig) {
                        compositePageconfig.forEach((x, index) => {
                            x.loadedFromCompositePage = true;
                            x.input = { ...x.input, componentId: x.id, id: this.id };
                            if (x.componentName === 'dynamicpage-common') {
                                x.component = DynamicPageCleanupComponent;
                            }
                            else if (x.componentName === 'dynamicpage-sea') {
                                x.component = DynamicSearchComponent;
                            }
                            if (x?.settings?.defaultState == 'EXP') {
                                this.activeIndexes.push(index);
                            }
                        });
                        this.store.dispatch(setComponents({ components: compositePageconfig }));
                    }
                }
            });
        }, error => {
            this.alertService.error('Something went wrong');
            console.error(error);
        });
    }
    ngOnDestroy() {
        this.store.dispatch(clearComponents());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: DynamicTabPageService }, { token: i3$1.Store }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CompositePageComponent, selector: "app-composite-page", inputs: { compositePageId: "compositePageId" }, ngImport: i0, template: "\r\n<div class=\"float-container\">\r\n  <div class=\"float-child-right\">\r\n    <div class=\"dashboard-inner mt-0\">\r\n      <div class=\"float-child-right\">\r\n        <ng-container *ngFor=\"let item of CompositePageWidget$ | async; let i = index\">\r\n          <div [ngSwitch]=\"item?.settings?.defaultState\">\r\n            <p-accordion [multiple]=\"true\" *ngSwitchCase=\"'EXP'\" [activeIndex]=\"[0]\">\r\n              <p-accordionTab header=\"{{item.settings?.title || item.name}}\">\r\n                <div class=\"clearfix gridster-item-group card\">\r\n                  <div class=\"gridster-item-content card-body\">\r\n                    <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"></ndc-dynamic>\r\n                  </div>\r\n                </div>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n    \r\n            <div *ngSwitchCase=\"'DIV'\" class=\"clearfix gridster-item-group card mt-6\">\r\n              <h6 class=\"card-header\">{{ item.settings?.title || item.name }}</h6>\r\n              <div class=\"gridster-item-content card-body\">\r\n                <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"></ndc-dynamic>\r\n              </div>\r\n            </div>\r\n    \r\n            <p-accordion [multiple]=\"true\" *ngSwitchDefault>\r\n              <p-accordionTab header=\"{{item.settings?.title || item.name}}\">\r\n                <div class=\"clearfix gridster-item-group card\">\r\n                  <div class=\"gridster-item-content card-body\">\r\n                    <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"></ndc-dynamic>\r\n                  </div>\r\n                </div>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".float-container .float-child-right{max-height:calc(100vh - 280px);overflow-y:auto;overflow-x:hidden}.float-container .float-child-right .close-button{position:absolute;top:2px;right:5px;cursor:pointer;color:#007cc3}.float-container .float-child-right .overallSec{padding-left:0}.float-container .gridster{display:inline-table;background:transparent;padding:0!important}.float-container .gridster-item{margin:0 0 15px!important;padding:0 12px 12px;overflow-y:auto}.float-container .gridster-item-content{position:relative;padding:0}.pull-right{padding:5px}.gridster{height:120vh;margin:0;padding:0;background-color:#b3b1b1}.gridster-container{margin-top:10px;margin-left:10px}.top-btn-left{width:150px;margin:5px}.top-btn-right{width:350px;margin:5px}.widget-header{background-color:#eee;cursor:default}.widget-header-btn{cursor:pointer}.header-margin-left{margin-left:5px}.header-margin-right{margin-right:5px}app-nomination-widget{height:100%}.widget-header-buttons{display:flex;align-items:center;justify-content:space-between}.widget-header-buttons h6{font-size:12px;text-transform:uppercase;font-weight:600;color:#2c2863}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i4.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i4.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i22.DynamicIoDirective, selector: "[ndcDynamicInputs],[ndcDynamicOutputs]", inputs: ["ndcDynamicInputs", "ndcDynamicOutputs"], exportAs: ["ndcDynamicIo"] }, { kind: "component", type: i22.DynamicComponent, selector: "ndc-dynamic", inputs: ["ndcDynamicComponent", "ndcDynamicInjector", "ndcDynamicProviders", "ndcDynamicContent", "ndcDynamicNgModuleRef", "ndcDynamicEnvironmentInjector"], outputs: ["ndcDynamicCreated"] }, { kind: "component", type: i23.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex", "selectOnFocus", "headerAriaLevel"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { kind: "component", type: i23.AccordionTab, selector: "p-accordionTab", inputs: ["id", "header", "headerStyle", "tabStyle", "contentStyle", "tabStyleClass", "headerStyleClass", "contentStyleClass", "disabled", "cache", "transitionOptions", "iconPos", "selected", "headerAriaLevel"], outputs: ["selectedChange"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositePageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-composite-page', template: "\r\n<div class=\"float-container\">\r\n  <div class=\"float-child-right\">\r\n    <div class=\"dashboard-inner mt-0\">\r\n      <div class=\"float-child-right\">\r\n        <ng-container *ngFor=\"let item of CompositePageWidget$ | async; let i = index\">\r\n          <div [ngSwitch]=\"item?.settings?.defaultState\">\r\n            <p-accordion [multiple]=\"true\" *ngSwitchCase=\"'EXP'\" [activeIndex]=\"[0]\">\r\n              <p-accordionTab header=\"{{item.settings?.title || item.name}}\">\r\n                <div class=\"clearfix gridster-item-group card\">\r\n                  <div class=\"gridster-item-content card-body\">\r\n                    <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"></ndc-dynamic>\r\n                  </div>\r\n                </div>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n    \r\n            <div *ngSwitchCase=\"'DIV'\" class=\"clearfix gridster-item-group card mt-6\">\r\n              <h6 class=\"card-header\">{{ item.settings?.title || item.name }}</h6>\r\n              <div class=\"gridster-item-content card-body\">\r\n                <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"></ndc-dynamic>\r\n              </div>\r\n            </div>\r\n    \r\n            <p-accordion [multiple]=\"true\" *ngSwitchDefault>\r\n              <p-accordionTab header=\"{{item.settings?.title || item.name}}\">\r\n                <div class=\"clearfix gridster-item-group card\">\r\n                  <div class=\"gridster-item-content card-body\">\r\n                    <ndc-dynamic [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item.input\"></ndc-dynamic>\r\n                  </div>\r\n                </div>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".float-container .float-child-right{max-height:calc(100vh - 280px);overflow-y:auto;overflow-x:hidden}.float-container .float-child-right .close-button{position:absolute;top:2px;right:5px;cursor:pointer;color:#007cc3}.float-container .float-child-right .overallSec{padding-left:0}.float-container .gridster{display:inline-table;background:transparent;padding:0!important}.float-container .gridster-item{margin:0 0 15px!important;padding:0 12px 12px;overflow-y:auto}.float-container .gridster-item-content{position:relative;padding:0}.pull-right{padding:5px}.gridster{height:120vh;margin:0;padding:0;background-color:#b3b1b1}.gridster-container{margin-top:10px;margin-left:10px}.top-btn-left{width:150px;margin:5px}.top-btn-right{width:350px;margin:5px}.widget-header{background-color:#eee;cursor:default}.widget-header-btn{cursor:pointer}.header-margin-left{margin-left:5px}.header-margin-right{margin-right:5px}app-nomination-widget{height:100%}.widget-header-buttons{display:flex;align-items:center;justify-content:space-between}.widget-header-buttons h6{font-size:12px;text-transform:uppercase;font-weight:600;color:#2c2863}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: DynamicTabPageService }, { type: i3$1.Store }]; }, propDecorators: { compositePageId: [{
                type: Input
            }] } });

const PAGE_PATH = 'page/:pageId';
const DYNAMIC_PAGE_PATH = 'page/:pageId/:id';
const DYNAMIC_SEARCH = 'dynamic-search/search/:pageId';
const routes = [
    {
        path: 'tab/:tabId',
        component: DynamicRibbonComponent,
        children: [
            {
                path: PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchComponent,
                loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            },
            {
                path: 'master-view/:masterPageId',
                component: MasterViewComponent
            },
            {
                path: 'composite-page/:compositePageId',
                component: CompositePageComponent
            },
            {
                path: 'composite-page/:compositePageId/:id',
                component: CompositePageComponent
            }
        ]
    },
    {
        path: 'tab/:tabId/:id',
        component: DynamicRibbonComponent,
        children: [
            {
                path: PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchComponent,
                loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            },
            {
                path: 'master-view/:masterPageId',
                component: MasterViewComponent
            },
            {
                path: 'composite-page/:compositePageId',
                component: CompositePageComponent
            },
            {
                path: 'composite-page/:compositePageId/:id',
                component: CompositePageComponent
            }
        ]
    },
    {
        path: 'tab/:tabId/:id/:sourceKey/:sourceValue/:sourceType',
        component: DynamicRibbonComponent,
        children: [
            {
                path: PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_PAGE_PATH,
                component: DynamicPageComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'dynamicpage/page/modify/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: DYNAMIC_SEARCH,
                component: DynamicSearchComponent,
                loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            },
            {
                path: 'master-view/:masterPageId',
                component: MasterViewComponent,
                loadChildren: () => import('./pics-core-dynamic-master-view.module-a35b5be4.mjs').then(m => m.MasterViewModule)
            },
            {
                path: 'master-view/:masterPageId/form/:pageId',
                component: DynamicPageCleanupComponent,
            },
            {
                path: 'master-view/:masterPageId/form/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'master-view/:masterPageId/form/:pageId',
                component: DynamicPageComponent,
            },
            {
                path: 'master-view/:masterPageId/form/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'youth-photo/:pageId',
                loadChildren: () => import('./pics-core-dynamic-youth-photo.module-bba8c402.mjs').then(y => y.YouthPhotoModule),
                data: {
                    rootmodulenames: ['YTH'],
                    route: '/youth-photo'
                },
                resolve: { permissions: RoutePermissionResolver }
            },
            {
                path: 'composite-page',
                loadChildren: () => import('./pics-core-dynamic-composite-page.module-d196c84c.mjs').then(m => m.CompositePageModule)
            },
            {
                path: 'composite-page/:compositePageId',
                component: CompositePageComponent
            },
            {
                path: 'composite-page/:compositePageId/:id',
                component: CompositePageComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId/:id',
                component: DynamicPageCleanupComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'composite-page/:compositePageId/:personId/form/:pageId/:id',
                component: DynamicPageComponent
            },
        ]
    }
];
class DynamicRibbonRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class DynamicRibbonModule {
    constructor() {
        console.log("DYNAMIC RIBBON MODULE CALLED");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonModule, declarations: [DynamicRibbonComponent, DynamicRibbonPageComponent], imports: [CommonModule,
            FormioModule,
            PrimengModule,
            DynamicRibbonRoutingModule,
            SharedPipesModule,
            FormsModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonModule, imports: [CommonModule,
            FormioModule,
            PrimengModule,
            DynamicRibbonRoutingModule,
            SharedPipesModule,
            FormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRibbonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicRibbonComponent, DynamicRibbonPageComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        PrimengModule,
                        DynamicRibbonRoutingModule,
                        SharedPipesModule,
                        FormsModule
                    ]
                }]
        }], ctorParameters: function () { return []; } });

var dynamicRibbon_module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DynamicRibbonModule: DynamicRibbonModule
});

class YouthPhotoConfig {
    static EndPoint = {
        UploadKey: '/common/files/upload-key',
        addYouthPhoto: '/jjis/youth-photo/addYouthPhoto',
        getYouthPhoto: '/jjis/youth-photo/getYouthPhoto/{youthid}',
        removeYouthPhoto: '/jjis/youth-photo/removeYouthphoto/{youthid}',
        getbyPhotoId: '/jjis/youth-photo/getYouthPhotoById/{photoid}',
        updateYouthPhoto: '/jjis/youth-photo/updateYouthPhoto',
        getPhysicalDescription: '/jjis/youth-photo/getPhysicalDescription/{youthid}',
        getPhysicalLookUp: '/platform/master/lookup/services/jjisMaster',
        getActivePage: '/platform/page-designer/pageversion/{id}',
    };
}

class YouthPhotoService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    uploadKey(objparams) {
        return this.httpService.post(YouthPhotoConfig.EndPoint.UploadKey, objparams);
    }
    addPhoto(data) {
        return this.httpService.post(YouthPhotoConfig.EndPoint.addYouthPhoto, data);
    }
    getYouthPhoto(youthid) {
        return this.httpService.get(YouthPhotoConfig.EndPoint.getYouthPhoto.replace('{youthid}', youthid));
    }
    deleteYouthPhoto(youthid) {
        return this.httpService.patch(YouthPhotoConfig.EndPoint.removeYouthPhoto.replace('{youthid}', youthid));
    }
    getByPhotoId(photoid) {
        return this.httpService.get(YouthPhotoConfig.EndPoint.getbyPhotoId.replace('{photoid}', photoid));
    }
    updateYouthPhoto(data) {
        return this.httpService.put(YouthPhotoConfig.EndPoint.updateYouthPhoto, data);
    }
    getPhysicalDescription(youthid) {
        return this.httpService.get(YouthPhotoConfig.EndPoint.getPhysicalDescription.replace('{youthid}', youthid));
    }
    getPhysicalMarkDescription(code) {
        return this.httpService.get(YouthPhotoConfig.EndPoint.getPhysicalLookUp + '?type=' + code);
    }
    getActivePage(tabPageId, permission, action) {
        return this.httpService.get(`${YouthPhotoConfig.EndPoint.getActivePage.replace('{id}', tabPageId)}${permission
            ? '?applyPermissions=true' : ''}${permission && action === 'add'
            ? '&action=add' : ''}${permission && action === 'edit'
            ? '&action=edit' : ''}${permission && action === 'view'
            ? '&action=view' : ''}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoService, deps: [{ token: PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: PlatformDataStoreService }]; } });

class ViewYouthPhotoComponent {
    router;
    youthPhotoService;
    alertService;
    route;
    localStorage;
    _storeservice;
    sharedService;
    appService;
    showPrimary = false;
    youthPhotoList = [];
    imageUrl;
    youthPhotoId;
    sourceKey;
    sourceValue;
    youthId;
    scarPhotoList = [];
    youthPhotoListDefault = [];
    scarPhotoListDefault = [];
    primaryFlag;
    pageId;
    permissionStore;
    pageAccess;
    constructor(router, youthPhotoService, alertService, route, localStorage, _storeservice, sharedService, appService) {
        this.router = router;
        this.youthPhotoService = youthPhotoService;
        this.alertService = alertService;
        this.route = route;
        this.localStorage = localStorage;
        this._storeservice = _storeservice;
        this.sharedService = sharedService;
        this.appService = appService;
        this.sourceKey = this.route.parent.parent.snapshot.paramMap.get('sourceKey');
        this.sourceValue = this.route.parent.parent.snapshot.paramMap.get('sourceValue');
        if (this.sourceKey && this.sourceKey.includes('youth_id')) {
            this.youthId = this.sourceValue;
        }
    }
    ngOnInit() {
        this._storeservice.currentStore.subscribe((res) => {
            this.permissionStore = res['PERMISSION'];
            // if (res['SHAREDSERVICE'] && res['SHAREDSERVICE'] !== '') {
            //   this.sharedService = res['SHAREDSERVICE'];
            //   this.permissionStore = res['PERMISSION'];
            // }
        });
        this.route.parent?.params.subscribe(params => {
            this.pageId = params['pageId'];
            console.log('Page ID:', this.pageId);
        });
        // Fetch permissions here
        this.localStorage.setItem('gridAction', 'add');
        this.youthPhotoService.getActivePage(this.pageId, true, 'add').subscribe(res => {
            if (res && 'data' in res) {
                const pageResponse = res;
                this.pageAccess = pageResponse.data.pagePermission;
                const assetAccess = pageResponse.data.assetPermissions;
                this.permissionStore['pageAccess'] = this.pageAccess;
                this.permissionStore['assetAccess'] = assetAccess;
            }
            else {
                console.error('Unexpected response format:', res);
            }
        });
        this.getYouthPhotoList();
    }
    showPrimayIcon(item) {
        if (item?.primary_flag) {
            return;
        }
        const flag = !item.primary_flag;
        const obj = {
            youth_id: Number(item?.youth_id),
            youth_photo_id: Number(item?.youth_photo_id),
            photo_date: item?.photo_date,
            type_code: item?.type_code,
            primary_flag: flag ? 'Y' : 'N',
            description: item.description,
            url_pic: item.file_name,
            entered_by_worker_id: Number(item.entered_by_worker_id),
            entered_date: item.entered_date
        };
        this.youthPhotoService.updateYouthPhoto(obj).subscribe((res) => {
            console.log(res, 'updateddd');
            this.appService.setValue('youth_pic', item.url_pic);
            this.youthPhotoList = [];
            this.scarPhotoList = [];
            this.getYouthPhotoList();
        });
    }
    closePopup(item) {
        this.imageUrl = item.url_pic;
        this.youthPhotoId = item.youth_photo_id;
        this.primaryFlag = item.primary_flag;
        $("#deletephoto").modal('show');
    }
    showPreviewPhoto(item) {
        this.imageUrl = item.url_pic;
        $("#photoPreview").modal('show');
    }
    addPhoto() {
        this.localStorage.setItem('setTabAction', 'add');
        this.sharedService.sendMessage();
        this.localStorage.setItem('gridAction', 'add');
        this.router.navigate(['../upload-image'], { relativeTo: this.route });
    }
    getYouthPhotoList() {
        this.youthPhotoService.getYouthPhoto(this.youthId).subscribe((res) => {
            console.log(res, 'youthphotot list');
            if (res && res.data) {
                const youthPhotoData = res.data;
                youthPhotoData.forEach(ele => {
                    if (ele.primary_flag === 'Y') {
                        ele['primary_flag'] = true;
                        this.appService.setValue('youth_pic', ele.url_pic);
                    }
                    else if (ele.primary_flag === 'N') {
                        ele['primary_flag'] = false;
                    }
                });
                youthPhotoData.forEach(typ => {
                    if (typ.type_code === 'YTH') {
                        this.youthPhotoList.push(typ);
                    }
                    else {
                        this.scarPhotoList.push(typ);
                    }
                });
                const hasPrimaryFlag = this.youthPhotoList?.some(item => item.primary_flag === true);
                if (!hasPrimaryFlag && this.youthPhotoList.length) {
                    this.showPrimayIcon(this.youthPhotoList[0]);
                }
                else if (!this.youthPhotoList.length) {
                    this.appService.setValue('youth_pic', '');
                }
                this.youthPhotoListDefault = this.youthPhotoList;
                this.scarPhotoListDefault = this.scarPhotoList;
                console.log(this.youthPhotoList, this.scarPhotoList, "photot list");
            }
        });
    }
    deletePhoto() {
        this.youthPhotoService.deleteYouthPhoto(this.youthPhotoId).subscribe((res) => {
            if (res?.data?.warn) {
                this.alertService.warn(res.data.warn);
                this.youthPhotoId = '';
                $("#deletephoto").modal('hide');
                this.getYouthPhotoList();
                this.youthPhotoList = [];
                this.scarPhotoList = [];
            }
            else if (res?.data?.message) {
                this.alertService.success(res.data.message);
                this.youthPhotoId = '';
                $("#deletephoto").modal('hide');
                this.getYouthPhotoList();
                this.youthPhotoList = [];
                this.scarPhotoList = [];
            }
        }, (error) => {
            this.alertService.error(error.error.message);
            $("#deletephoto").modal('hide');
        });
    }
    editPhoto(item) {
        this.router.navigate([`../upload-image/${item.youth_photo_id}`], { relativeTo: this.route });
    }
    getWorkerName(item) {
        if (item.first_name || item.last_name) {
            return `${item.last_name} ${item.first_name}, `;
        }
        else {
            return;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewYouthPhotoComponent, deps: [{ token: i1.Router }, { token: YouthPhotoService }, { token: AlertService }, { token: i1.ActivatedRoute }, { token: LocalService }, { token: PlatformDataStoreService }, { token: SharedService }, { token: AppService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ViewYouthPhotoComponent, selector: "app-view-youth-photo", ngImport: i0, template: "<section class=\"bg-white p-4\">\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <button class=\"pull-right btn btn-primary\" (click)=\"addPhoto()\" [hidden]=\"!pageAccess?.c\">\r\n        <i class=\"fa fa-plus mr-2\" aria-hidden=\"true\"></i>Add Photo\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"photo-upload-title\">Youth Photos</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-xl-12\">\r\n      <div class=\"row\" *ngIf=\"youthPhotoList.length; else noYouthPhoto\" >\r\n        <div class=\"col-lg-4 mb-4 d-flex align-items-stretch\" *ngFor=\"let item of youthPhotoListDefault\">\r\n          <div class=\"card viewPhoto\">\r\n            <div class=\"viewPhotoInner\">\r\n              <div class=\"photo-action\">\r\n                <a href=\"javascript:;\" (click)=\"showPreviewPhoto(item)\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"javascript:;\" (click)=\"closePopup(item)\"\r\n                [ngClass]=\"{'disabled-link': !pageAccess?.d}\"\r\n                [style.pointer-events]=\"!pageAccess?.d ? 'none' : 'auto'\"\r\n                [attr.aria-hide]=\"!pageAccess?.d ? 'true' : null\">\r\n                <i class=\"fa fa-trash-o\" *ngIf=\"item.isOwner && item.isDeletable\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"javascript:;\" (click)=\"showPrimayIcon(item)\"\r\n                  [ngClass]=\"{'disabled-link': !pageAccess?.u}\"\r\n                  [style.pointer-events]=\"!pageAccess?.u ? 'none' : 'auto'\"\r\n                  [attr.aria-hide]=\"!pageAccess?.u ? 'true' : null\">\r\n                  <i [ngClass]=\"item.primary_flag ? 'fa fa-star-o active' : 'fa fa-star-o'\" aria-hidden=\"true\" [hidden]=\"!pageAccess?.u\"></i></a>\r\n              </div>\r\n              <img [src]=\"item.url_pic\" class=\"card-img-top\" alt=\"Youth Photo\">\r\n              <div class=\"set-primary\" [hidden]=\"!item.primary_flag\">\r\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"  [hidden]=\"!pageAccess?.u\"></i>\r\n                Primary\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <dl>\r\n                <dt>Photo Date:</dt>\r\n                <dd>{{item.photo_date | date: 'MM/dd/yyyy'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Description:</dt>\r\n                <dd>{{item.description}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Entered By:</dt>\r\n                <dd>{{item.lastname}},&nbsp;{{item.firstname}}\r\n                  <span *ngIf=\"item.middlename\">{{item.middlename}}</span></dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Entered Date:</dt>\r\n                <dd>{{item.entered_date | date: 'MM/dd/yyyy'}}</dd>\r\n              </dl>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ng-template #noYouthPhoto>\r\n        <p class=\"no-data-found\" >No Data</p>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4 mb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"photo-upload-title\">SCAR, MARK, OR TATTOO</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"scarPhotoList.length; else noScarData\">\r\n    <div class=\"col-lg-12 col-xl-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 mb-4 d-flex align-items-stretch\"  *ngFor=\"let item of scarPhotoListDefault\">\r\n          <div class=\"card viewPhoto\">\r\n            <div class=\"viewPhotoInner\">\r\n              <div class=\"photo-action\">\r\n                <a href=\"javascript:;\" (click)=\"showPreviewPhoto(item)\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"javascript:;\" (click)=\"closePopup(item)\" [disabled]=\"!pageAccess?.d\" [attr.aria-hide]=\"!pageAccess?.d ? 'true' : null\"><i class=\"fa fa-trash-o\" *ngIf=\"item.isOwner && item.isDeletable\" aria-hidden=\"true\" [hidden]=\"!pageAccess?.d\"></i></a>\r\n              </div>\r\n              <img [src]=\"item.url_pic\" class=\"card-img-top\" alt=\"Scar Photo\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <dl>\r\n                <dt>Photo Date:</dt>\r\n                <dd>{{item.photo_date | date: 'MM/dd/yyyy'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Description:</dt>\r\n                <dd>{{item.description}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Entered By:</dt>\r\n                <dd>{{item.lastname}},&nbsp;{{item.firstname}}\r\n                  <span *ngIf=\"item.middlename\">{{item.middlename}}</span>\r\n                  </dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Entered Date:</dt>\r\n                <dd>{{item.entered_date | date: 'MM/dd/yyyy'}}</dd>\r\n              </dl>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #noScarData >\r\n    <p class=\"no-data-found\" >No Data</p>\r\n  </ng-template>\r\n</section>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade popupnew\" id=\"deletephoto\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"deletephoto\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p *ngIf=\"!primaryFlag\">Are you sure you want to remove this photo?</p>\r\n        <p *ngIf=\"primaryFlag\">You are deleting the only photo. Are you sure you want to remove this Youth Photo?</p>\r\n        <!-- <span>This cannot be undone</span> -->\r\n        <div class=\"clearfix mt-2\">\r\n          <button class=\"pull-right btn btn-primary btncommon delete\" (click)=\"deletePhoto()\">\r\n            Yes\r\n          </button>\r\n          <button data-dismiss=\"modal\" class=\"pull-right mr-2 btn bg-white text-primary btncancel\">No</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal Photo Preview-->\r\n<div class=\"modal fade popupnew\" id=\"photoPreview\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"deletephoto\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n          <h5>Youth Image</h5>\r\n          <a class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">&times;</a>\r\n          <img [src]=\"imageUrl\" class=\"img-fluid previewPhoto\" alt=\"Youth Photo\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".photo-upload-title{background:#032361;padding:10px 15px;text-transform:uppercase;font-weight:500;color:var(--bg-light)}.viewPhoto{box-shadow:0 0 5px #e1e5e8;border:1px solid rgba(0,0,0,.125);border-radius:0;width:100%}.viewPhoto .viewPhotoInner{position:relative;cursor:pointer}.viewPhoto .viewPhotoInner .set-primary{position:absolute;bottom:0;text-align:center;color:#fff;background:#73a504;width:100%;text-transform:uppercase;font-size:14px;padding:4px 0}.viewPhoto .viewPhotoInner .card-img-top{height:275px;border-radius:0;object-fit:cover}.viewPhoto .viewPhotoInner .photo-action{position:absolute;left:10px;top:10px}.viewPhoto .viewPhotoInner .photo-action a i{background:#fff;width:40px;height:40px;text-align:center;line-height:40px;display:block;border-radius:100%;margin-bottom:7px}.viewPhoto .viewPhotoInner .photo-action a i.active{color:#73a504}.viewPhoto .card-body{background:#f7fcff}.viewPhoto .card-body .card-title{margin-bottom:1.25rem}.viewPhoto .card-body dl{margin-bottom:.5rem}.viewPhoto .card-body dl:last-child{margin-bottom:0}.viewPhoto .card-body dl dt{font-size:12px;text-transform:uppercase;font-weight:600;display:inline-block;width:40%;vertical-align:top;color:var(--input-label)}.viewPhoto .card-body dl dd{font-size:14px;display:inline-block;width:60%;vertical-align:top;position:relative;top:-1px;line-height:normal}.popupnew .modal-body{padding:25px;text-align:left}.popupnew .modal-body p{font-weight:400;margin-bottom:1.5rem!important}.popupnew .modal-body span{font-size:var(--base-font-size);margin-bottom:1rem;display:block}.popupnew .modal-content{border-radius:1;width:100%;max-width:480px;margin:0 auto}.popupnew .modal-dialog{margin:10vh auto}.popupnew img.previewPhoto{max-width:100%;height:auto;display:block;margin:0 auto}.popupnew .clearfix{margin-top:10px}.popupnew h5{text-align:left;color:var(--input-label);margin-bottom:1.5rem!important;font-family:Inter,sans-serif!important;font-size:var(--base-font-size);font-weight:400;letter-spacing:.1px}.popupnew a.close{cursor:pointer;opacity:1;position:absolute;right:7px;top:3px;font-weight:400;line-height:normal}@media (max-width: 768px){.popupnew .modal-content{padding:15px;max-width:90%}.popupnew .modal-dialog{margin:6vh auto}.popupnew .modal-body p,.popupnew .modal-body span,.popupnew h5{font-size:var(--base-font-size)}.popupnew img.previewPhoto{max-width:100%;height:auto;display:block;margin:0 auto}}.previewPhoto{height:665px;width:100%;object-fit:contain;object-position:center center}@media screen and (max-width: 700px){.previewPhoto{height:auto}}.no-data-found{color:#999;font-size:16px;text-align:center;padding-top:1rem}.disabled-link{color:gray;cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i4.DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewYouthPhotoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-view-youth-photo', template: "<section class=\"bg-white p-4\">\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <button class=\"pull-right btn btn-primary\" (click)=\"addPhoto()\" [hidden]=\"!pageAccess?.c\">\r\n        <i class=\"fa fa-plus mr-2\" aria-hidden=\"true\"></i>Add Photo\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"photo-upload-title\">Youth Photos</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-xl-12\">\r\n      <div class=\"row\" *ngIf=\"youthPhotoList.length; else noYouthPhoto\" >\r\n        <div class=\"col-lg-4 mb-4 d-flex align-items-stretch\" *ngFor=\"let item of youthPhotoListDefault\">\r\n          <div class=\"card viewPhoto\">\r\n            <div class=\"viewPhotoInner\">\r\n              <div class=\"photo-action\">\r\n                <a href=\"javascript:;\" (click)=\"showPreviewPhoto(item)\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"javascript:;\" (click)=\"closePopup(item)\"\r\n                [ngClass]=\"{'disabled-link': !pageAccess?.d}\"\r\n                [style.pointer-events]=\"!pageAccess?.d ? 'none' : 'auto'\"\r\n                [attr.aria-hide]=\"!pageAccess?.d ? 'true' : null\">\r\n                <i class=\"fa fa-trash-o\" *ngIf=\"item.isOwner && item.isDeletable\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"javascript:;\" (click)=\"showPrimayIcon(item)\"\r\n                  [ngClass]=\"{'disabled-link': !pageAccess?.u}\"\r\n                  [style.pointer-events]=\"!pageAccess?.u ? 'none' : 'auto'\"\r\n                  [attr.aria-hide]=\"!pageAccess?.u ? 'true' : null\">\r\n                  <i [ngClass]=\"item.primary_flag ? 'fa fa-star-o active' : 'fa fa-star-o'\" aria-hidden=\"true\" [hidden]=\"!pageAccess?.u\"></i></a>\r\n              </div>\r\n              <img [src]=\"item.url_pic\" class=\"card-img-top\" alt=\"Youth Photo\">\r\n              <div class=\"set-primary\" [hidden]=\"!item.primary_flag\">\r\n                <i class=\"fa fa-star-o\" aria-hidden=\"true\"  [hidden]=\"!pageAccess?.u\"></i>\r\n                Primary\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <dl>\r\n                <dt>Photo Date:</dt>\r\n                <dd>{{item.photo_date | date: 'MM/dd/yyyy'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Description:</dt>\r\n                <dd>{{item.description}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Entered By:</dt>\r\n                <dd>{{item.lastname}},&nbsp;{{item.firstname}}\r\n                  <span *ngIf=\"item.middlename\">{{item.middlename}}</span></dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Entered Date:</dt>\r\n                <dd>{{item.entered_date | date: 'MM/dd/yyyy'}}</dd>\r\n              </dl>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ng-template #noYouthPhoto>\r\n        <p class=\"no-data-found\" >No Data</p>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4 mb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"photo-upload-title\">SCAR, MARK, OR TATTOO</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"scarPhotoList.length; else noScarData\">\r\n    <div class=\"col-lg-12 col-xl-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 mb-4 d-flex align-items-stretch\"  *ngFor=\"let item of scarPhotoListDefault\">\r\n          <div class=\"card viewPhoto\">\r\n            <div class=\"viewPhotoInner\">\r\n              <div class=\"photo-action\">\r\n                <a href=\"javascript:;\" (click)=\"showPreviewPhoto(item)\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"javascript:;\" (click)=\"closePopup(item)\" [disabled]=\"!pageAccess?.d\" [attr.aria-hide]=\"!pageAccess?.d ? 'true' : null\"><i class=\"fa fa-trash-o\" *ngIf=\"item.isOwner && item.isDeletable\" aria-hidden=\"true\" [hidden]=\"!pageAccess?.d\"></i></a>\r\n              </div>\r\n              <img [src]=\"item.url_pic\" class=\"card-img-top\" alt=\"Scar Photo\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <dl>\r\n                <dt>Photo Date:</dt>\r\n                <dd>{{item.photo_date | date: 'MM/dd/yyyy'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Description:</dt>\r\n                <dd>{{item.description}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Entered By:</dt>\r\n                <dd>{{item.lastname}},&nbsp;{{item.firstname}}\r\n                  <span *ngIf=\"item.middlename\">{{item.middlename}}</span>\r\n                  </dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Entered Date:</dt>\r\n                <dd>{{item.entered_date | date: 'MM/dd/yyyy'}}</dd>\r\n              </dl>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #noScarData >\r\n    <p class=\"no-data-found\" >No Data</p>\r\n  </ng-template>\r\n</section>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade popupnew\" id=\"deletephoto\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"deletephoto\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p *ngIf=\"!primaryFlag\">Are you sure you want to remove this photo?</p>\r\n        <p *ngIf=\"primaryFlag\">You are deleting the only photo. Are you sure you want to remove this Youth Photo?</p>\r\n        <!-- <span>This cannot be undone</span> -->\r\n        <div class=\"clearfix mt-2\">\r\n          <button class=\"pull-right btn btn-primary btncommon delete\" (click)=\"deletePhoto()\">\r\n            Yes\r\n          </button>\r\n          <button data-dismiss=\"modal\" class=\"pull-right mr-2 btn bg-white text-primary btncancel\">No</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal Photo Preview-->\r\n<div class=\"modal fade popupnew\" id=\"photoPreview\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"deletephoto\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n          <h5>Youth Image</h5>\r\n          <a class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">&times;</a>\r\n          <img [src]=\"imageUrl\" class=\"img-fluid previewPhoto\" alt=\"Youth Photo\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".photo-upload-title{background:#032361;padding:10px 15px;text-transform:uppercase;font-weight:500;color:var(--bg-light)}.viewPhoto{box-shadow:0 0 5px #e1e5e8;border:1px solid rgba(0,0,0,.125);border-radius:0;width:100%}.viewPhoto .viewPhotoInner{position:relative;cursor:pointer}.viewPhoto .viewPhotoInner .set-primary{position:absolute;bottom:0;text-align:center;color:#fff;background:#73a504;width:100%;text-transform:uppercase;font-size:14px;padding:4px 0}.viewPhoto .viewPhotoInner .card-img-top{height:275px;border-radius:0;object-fit:cover}.viewPhoto .viewPhotoInner .photo-action{position:absolute;left:10px;top:10px}.viewPhoto .viewPhotoInner .photo-action a i{background:#fff;width:40px;height:40px;text-align:center;line-height:40px;display:block;border-radius:100%;margin-bottom:7px}.viewPhoto .viewPhotoInner .photo-action a i.active{color:#73a504}.viewPhoto .card-body{background:#f7fcff}.viewPhoto .card-body .card-title{margin-bottom:1.25rem}.viewPhoto .card-body dl{margin-bottom:.5rem}.viewPhoto .card-body dl:last-child{margin-bottom:0}.viewPhoto .card-body dl dt{font-size:12px;text-transform:uppercase;font-weight:600;display:inline-block;width:40%;vertical-align:top;color:var(--input-label)}.viewPhoto .card-body dl dd{font-size:14px;display:inline-block;width:60%;vertical-align:top;position:relative;top:-1px;line-height:normal}.popupnew .modal-body{padding:25px;text-align:left}.popupnew .modal-body p{font-weight:400;margin-bottom:1.5rem!important}.popupnew .modal-body span{font-size:var(--base-font-size);margin-bottom:1rem;display:block}.popupnew .modal-content{border-radius:1;width:100%;max-width:480px;margin:0 auto}.popupnew .modal-dialog{margin:10vh auto}.popupnew img.previewPhoto{max-width:100%;height:auto;display:block;margin:0 auto}.popupnew .clearfix{margin-top:10px}.popupnew h5{text-align:left;color:var(--input-label);margin-bottom:1.5rem!important;font-family:Inter,sans-serif!important;font-size:var(--base-font-size);font-weight:400;letter-spacing:.1px}.popupnew a.close{cursor:pointer;opacity:1;position:absolute;right:7px;top:3px;font-weight:400;line-height:normal}@media (max-width: 768px){.popupnew .modal-content{padding:15px;max-width:90%}.popupnew .modal-dialog{margin:6vh auto}.popupnew .modal-body p,.popupnew .modal-body span,.popupnew h5{font-size:var(--base-font-size)}.popupnew img.previewPhoto{max-width:100%;height:auto;display:block;margin:0 auto}}.previewPhoto{height:665px;width:100%;object-fit:contain;object-position:center center}@media screen and (max-width: 700px){.previewPhoto{height:auto}}.no-data-found{color:#999;font-size:16px;text-align:center;padding-top:1rem}.disabled-link{color:gray;cursor:not-allowed}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: YouthPhotoService }, { type: AlertService }, { type: i1.ActivatedRoute }, { type: LocalService }, { type: PlatformDataStoreService }, { type: SharedService }, { type: AppService }]; } });

class PicsDynamicModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, declarations: [ViewYouthPhotoComponent], imports: [CommonModule,
            DynamicSearchModule,
            DynmicTabPageModule,
            DynamicRibbonModule,
            FormioModule,
            SharedPipesModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, providers: [
            HttpClient,
            AuthStore
        ], imports: [CommonModule,
            DynamicSearchModule,
            DynmicTabPageModule,
            DynamicRibbonModule,
            FormioModule,
            SharedPipesModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ViewYouthPhotoComponent],
                    imports: [
                        CommonModule,
                        DynamicSearchModule,
                        DynmicTabPageModule,
                        DynamicRibbonModule,
                        FormioModule,
                        SharedPipesModule
                    ],
                    providers: [
                        HttpClient,
                        AuthStore
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

const pageBuilderRoutes = [
    {
        path: '',
        component: DynamicComponent,
        children: [
            {
                path: 'dynamicpage',
                loadChildren: () => Promise.resolve().then(function () { return dynmicTabPage_module; }).then(m => m.DynmicTabPageModule)
            },
            {
                path: 'dynamic-search',
                loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
            },
            {
                path: 'dynamic-routing',
                loadChildren: () => Promise.resolve().then(function () { return dynamicRibbon_module; }).then(m => m.DynamicRibbonModule)
            },
            {
                path: 'master-view',
                loadChildren: () => import('./pics-core-dynamic-master-view.module-a35b5be4.mjs').then(m => m.MasterViewModule)
            },
            {
                path: 'composite-page',
                loadChildren: () => import('./pics-core-dynamic-composite-page.module-d196c84c.mjs').then(m => m.CompositePageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
class DynamicRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRoutingModule, imports: [RouterModule.forChild(pageBuilderRoutes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(pageBuilderRoutes)],
                    exports: [RouterModule]
                }]
        }] });

class CardiDynamicModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiDynamicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardiDynamicModule, declarations: [DynamicComponent], imports: [DynamicRoutingModule,
            PicsDynamicModule], exports: [DynamicComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiDynamicModule, providers: [
            HttpClient,
            AuthStore
        ], imports: [DynamicRoutingModule,
            PicsDynamicModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiDynamicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DynamicComponent
                    ],
                    imports: [
                        DynamicRoutingModule,
                        PicsDynamicModule
                    ],
                    exports: [
                        DynamicComponent
                    ],
                    providers: [
                        HttpClient,
                        AuthStore
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

/*
 * Public API Surface of dynamic
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertModule as A, CompositePageComponent as C, DynamicPageCleanupComponent as D, HttpService as H, LoaderService as L, MasterViewComponent as M, PrimengModule as P, SharedService as S, ViewYouthPhotoComponent as V, YouthPhotoService as Y, DynamicPageComponent as a, AlertService as b, LocalService as c, LocalStorageService as d, PermissionStore as e, AppService as f, DirectivesModule as g, DynamicSearchModule as h, DynamicSearchComponent as i, DynmicTabPageModule as j, DynamicTabPageService as k, DynamicsearchService as l, DynamicService as m, DynamicComponent as n, CardiDynamicModule as o };
//# sourceMappingURL=pics-core-dynamic-pics-core-dynamic-d92f93bd.mjs.map
