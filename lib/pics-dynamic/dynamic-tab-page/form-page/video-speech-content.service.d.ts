import * as i0 from "@angular/core";
export declare class VideoSpeechContentService {
    speechRecogninitionOn: boolean;
    constructor();
    modifyVideoContent(): void;
    speechToTextContent(): void;
    activateSpeechToText(ctrl: any, evt: any, item: any): void;
    conditionCheckError(narrativeElement: any, ctrl: any, evt: any, item: any, err: any): void;
    errorExecution(narrativeElement: any, ctrl: any, evt: any, item: any, err: any): void;
    micNotAvailableAlert(): string;
    micUnauthorisedAlert(): string;
    noSpeechAlert(): string;
    deActivateSpeechRecognition(ctrl: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VideoSpeechContentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VideoSpeechContentService>;
}
