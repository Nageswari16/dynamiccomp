import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
export class SpeechRecognitionService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXJlY29nbml0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS9zZXJ2aWNlL3NwZWVjaC1yZWNvZ25pdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7QUFRNUIsTUFBTSxPQUFPLHdCQUF3QjtJQUdmO0lBRnBCLGlCQUFpQixDQUFNO0lBRXZCLFlBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzdCLHNCQUFzQjtJQUN6QixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxVQUFVLENBQVMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxFQUFFLHVCQUF1QixFQUFFLEdBQWtCLE1BQU8sQ0FBQztZQUMzRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBRTNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNsRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO29CQUN4QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7d0JBQ2xCLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksR0FBRyxzQ0FBc0MsQ0FBQyxDQUFDO3FCQUNsRjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7b0JBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDbEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7d0dBL0NVLHdCQUF3Qjs0R0FBeEIsd0JBQXdCOzs0RkFBeEIsd0JBQXdCO2tCQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIElXaW5kb3cge1xyXG4gIHdlYmtpdFNwZWVjaFJlY29nbml0aW9uOiBhbnk7XHJcbiAgU3BlZWNoUmVjb2duaXRpb246IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlIHtcclxuICBzcGVlY2hSZWNvZ25pdGlvbjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xyXG4gICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICB9XHJcblxyXG4gIHJlY29yZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHN0cmluZz4ob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICBjb25zdCB7IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uIH0gPSA8SVdpbmRvdz4oPGFueT53aW5kb3cpO1xyXG4gICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uID0gbmV3IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uKCk7XHJcbiAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uY29udGludW91cyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24ubGFuZyA9ICdlbi11cyc7XHJcbiAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24ubWF4QWx0ZXJuYXRpdmVzID0gMTtcclxuXHJcbiAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24ub25yZXN1bHQgPSBzcGVlY2ggPT4ge1xyXG4gICAgICAgIGxldCB0ZXJtID0gJyc7XHJcbiAgICAgICAgaWYgKHNwZWVjaC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBzcGVlY2gucmVzdWx0c1tzcGVlY2gucmVzdWx0SW5kZXhdO1xyXG4gICAgICAgICAgY29uc3QgdHJhbnNjcmlwdCA9IHJlc3VsdFswXS50cmFuc2NyaXB0O1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5pc0ZpbmFsKSB7XHJcbiAgICAgICAgICAgIHRlcm0gPSBfLnRyaW0odHJhbnNjcmlwdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWQgeW91IHNhaWQ/IC0+ICcgKyB0ZXJtICsgJyAsIElmIG5vdCB0aGVuIHNheSBzb21ldGhpbmcgZWxzZS4uLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIG9ic2VydmVyLm5leHQodGVybSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLm9uZXJyb3IgPSBlcnJvciA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5vbmVuZCA9ICgpID0+IHtcclxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdGFydCgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnU2F5IHNvbWV0aGluZyAtIFdlIGFyZSBsaXN0ZW5pbmcgISEhJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lTcGVlY2hPYmplY3QoKSB7XHJcbiAgICBpZiAodGhpcy5zcGVlY2hSZWNvZ25pdGlvbikge1xyXG4gICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19