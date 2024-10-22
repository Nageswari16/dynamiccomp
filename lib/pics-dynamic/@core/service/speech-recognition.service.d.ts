import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SpeechRecognitionService {
    private zone;
    speechRecognition: any;
    constructor(zone: NgZone);
    record(): Observable<string>;
    destroySpeechObject(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpeechRecognitionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SpeechRecognitionService>;
}
