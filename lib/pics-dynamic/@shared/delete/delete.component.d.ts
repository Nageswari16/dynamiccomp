import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../@core/service/http.service';
import { AlertService } from '../../@core/service/alert.service';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DeleteComponent {
    private httpService;
    private alert;
    dialogRef: MatDialogRef<DeleteComponent>;
    deleteId: string;
    message: string;
    url: string;
    portConfig: string;
    successMsg: string;
    action: string;
    data: any;
    value: any;
    reasonStatus: boolean;
    enteredReason: string;
    isDisabled: boolean;
    reasonFormControl: FormControl;
    rowData: any;
    constructor(httpService: HttpService, alert: AlertService, dialogRef: MatDialogRef<DeleteComponent>, data: any);
    ngOnInit(): void;
    deleteRecord(): void;
    deactivatePage(): void;
    updateRecord(): void;
    closePopup(deleteData?: any): void;
    completeRecord(): void;
    updateActivation(): void;
    checkIsDisabled(text: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeleteComponent, "app-delete", never, {}, {}, never, never, false, never>;
}
