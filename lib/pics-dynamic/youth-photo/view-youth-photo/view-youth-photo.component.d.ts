import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../@core/service/alert.service';
import { AppService } from '../../@core/service/app.service';
import { LocalService } from '../../@core/service/local.service';
import { YouthPhotoService } from '../@core/youth-photo.service';
import { PlatformDataStoreService } from '../../@core/service/platform-data-store.service';
import { SharedService } from '../../@core/service/shared.service';
import * as i0 from "@angular/core";
export declare class ViewYouthPhotoComponent implements OnInit {
    private router;
    private youthPhotoService;
    private alertService;
    private route;
    private localStorage;
    private _storeservice;
    private sharedService;
    private appService;
    showPrimary: boolean;
    youthPhotoList: any[];
    imageUrl: any;
    youthPhotoId: any;
    sourceKey: string;
    sourceValue: string;
    youthId: string;
    scarPhotoList: any[];
    youthPhotoListDefault: any[];
    scarPhotoListDefault: any[];
    primaryFlag: boolean;
    pageId: string;
    permissionStore: any;
    pageAccess: any;
    constructor(router: Router, youthPhotoService: YouthPhotoService, alertService: AlertService, route: ActivatedRoute, localStorage: LocalService, _storeservice: PlatformDataStoreService, sharedService: SharedService, appService: AppService);
    ngOnInit(): void;
    showPrimayIcon(item: any): void;
    closePopup(item: any): void;
    showPreviewPhoto(item: any): void;
    addPhoto(): void;
    getYouthPhotoList(): void;
    deletePhoto(): void;
    editPhoto(item: any): void;
    getWorkerName(item: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewYouthPhotoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewYouthPhotoComponent, "app-view-youth-photo", never, {}, {}, never, never, false, never>;
}
