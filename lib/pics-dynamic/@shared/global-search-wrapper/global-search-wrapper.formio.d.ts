import { Injector } from '@angular/core';
export declare function globalSearchForm(): {
    components: ({
        key: string;
        type: string;
        weight?: undefined;
        input?: undefined;
        label?: undefined;
        placeholder?: undefined;
        validate?: undefined;
        widget?: undefined;
        tableView?: undefined;
        dataSrc?: undefined;
        data?: undefined;
        valueProperty?: undefined;
        template?: undefined;
        selectValues?: undefined;
        disableLimit?: undefined;
        refreshOn?: undefined;
        multiple?: undefined;
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
        widget?: undefined;
        tableView?: undefined;
        dataSrc?: undefined;
        data?: undefined;
        valueProperty?: undefined;
        template?: undefined;
        selectValues?: undefined;
        disableLimit?: undefined;
        refreshOn?: undefined;
        multiple?: undefined;
        tooltip?: undefined;
    } | {
        weight: number;
        label: string;
        widget: string;
        tableView: boolean;
        dataSrc: string;
        data: {
            url: string;
            headers: {
                key: string;
                value: string;
            }[];
        };
        valueProperty: string;
        template: string;
        key: string;
        type: string;
        input: boolean;
        selectValues: string;
        disableLimit: boolean;
        placeholder: string;
        validate: {
            required: boolean;
            maxLength?: undefined;
            pattern?: undefined;
            patternMessage?: undefined;
        };
        refreshOn?: undefined;
        multiple?: undefined;
        tooltip?: undefined;
    } | {
        weight: number;
        label: string;
        widget: string;
        tableView: boolean;
        dataSrc: string;
        data: {
            url: string;
            headers: {
                key: string;
                value: string;
            }[];
        };
        valueProperty: string;
        template: string;
        refreshOn: string;
        key: string;
        type: string;
        input: boolean;
        selectValues: string;
        disableLimit: boolean;
        placeholder: string;
        validate: {
            required: boolean;
            maxLength?: undefined;
            pattern?: undefined;
            patternMessage?: undefined;
        };
        multiple?: undefined;
        tooltip?: undefined;
    } | {
        weight: number;
        label: string;
        widget: string;
        tableView: boolean;
        multiple: boolean;
        dataSrc: string;
        data: {
            url: string;
            headers: {
                key: string;
                value: string;
            }[];
        };
        valueProperty: string;
        template: string;
        refreshOn: string;
        key: string;
        type: string;
        selectValues: string;
        disableLimit: boolean;
        input: boolean;
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
        widget?: undefined;
        tableView?: undefined;
        dataSrc?: undefined;
        data?: undefined;
        valueProperty?: undefined;
        template?: undefined;
        selectValues?: undefined;
        disableLimit?: undefined;
        refreshOn?: undefined;
        multiple?: undefined;
    })[];
};
export declare function registerGlobalSearchComponent(injector: Injector): void;
