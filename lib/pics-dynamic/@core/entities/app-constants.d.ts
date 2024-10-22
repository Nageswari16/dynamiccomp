export declare class AppConstants {
    static categoryname: string;
    static changePasswordText: string;
    static changePasswordPassword: string;
    static regexEmail: string;
    static regexPhone: string;
    static regexName: string;
    static regexZipcode: string;
    static multiView: string;
    static multiViewRoute: string;
    static regexSsn: string;
    static regexSsnDigits: RegExp;
    static regexForPhone: string;
    static formatDate: string;
    static camalize: string;
    static checSchemaExistQuery: string;
    static URLVALIDATE: string;
    static EventURLValidate: '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    static RegexUrlConstant: string;
    static statusComments: string;
    static regexEmailType2: string;
    static errorMessage: string;
    static accessDeniedMessage: string;
    static sessionExpired: string;
    static providerError: string;
    static verificationSuccess: string;
    static emailVerificationSuccess: string;
    static passwordNotMatch: string;
    static vaildEmail: string;
    static requiredFields: string;
    static pages: {
        page: string;
        title: string;
    }[];
    static errorList: string[];
    static referralSource: {
        value: string;
        label: string;
    }[];
    static generateNumber(): any;
    static iconList: {
        label: string;
        value: string;
    }[];
    static defaultVariables: {
        name: string;
    }[];
    static onInput(event: any, fieldtype: any, label: any, required: boolean): string;
    static userTimeOut: number;
    static userPing: number;
}
