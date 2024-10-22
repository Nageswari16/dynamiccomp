import { Injector } from '@angular/core';
export declare function minimalEditForm(): {
    components: ({
        weight: number;
        type: string;
        input: boolean;
        key: string;
        label: string;
        placeholder: string;
        validate: {
            required: boolean;
            maxLength?: undefined;
        };
        tooltip?: undefined;
    } | {
        weight: number;
        type: string;
        input: boolean;
        key: string;
        label: string;
        placeholder: string;
        tooltip: string;
        validate: {
            required: boolean;
            maxLength: number;
        };
    })[];
};
export declare function registerYouthFileUploadComponent(injector: Injector): void;
