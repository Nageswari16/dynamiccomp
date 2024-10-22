import { Injector } from '@angular/core';
export declare function minimalEditForm(): {
    components: ({
        key: string;
        type: string;
        weight?: undefined;
        input?: undefined;
        label?: undefined;
        placeholder?: undefined;
        validate?: undefined;
        tooltip?: undefined;
    } | {
        weight: number;
        type: string;
        input: boolean;
        key: string;
        label: string;
        placeholder: string;
        validate: {
            required: boolean;
            maxLength?: undefined;
            pattern?: undefined;
            patternMessage?: undefined;
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
            pattern: string;
            patternMessage: string;
        };
    } | {
        weight: number;
        type: string;
        input: boolean;
        key: string;
        label: string;
        placeholder?: undefined;
        validate?: undefined;
        tooltip?: undefined;
    })[];
};
export declare function registerDateRangeComponent(injector: Injector): void;
