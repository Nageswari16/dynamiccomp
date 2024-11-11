import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class VideoSpeechContentService {
    speechRecogninitionOn;
    constructor() {
        this.speechRecogninitionOn = false;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VideoSpeechContentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VideoSpeechContentService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VideoSpeechContentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tc3BlZWNoLWNvbnRlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL2R5bmFtaWMtdGFiLXBhZ2UvZm9ybS1wYWdlL3ZpZGVvLXNwZWVjaC1jb250ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxxQkFBcUIsQ0FBVTtJQUM3QjtRQUVFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELGtCQUFrQjtRQUNkLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO2dCQUNyQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUN4QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JB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R0EzR00seUJBQXlCOzRHQUF6Qix5QkFBeUIsY0FGeEIsTUFBTTs7NEZBRVAseUJBQXlCO2tCQUhyQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWRlb1NwZWVjaENvbnRlbnRTZXJ2aWNlIHtcclxuICBzcGVlY2hSZWNvZ25pbml0aW9uT246IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZGlmeVZpZGVvQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZXRvSWZyYW1lJyk7XHJcbiAgICAgICAgaWYgKHZpZGVvRWxlbWVudHMgJiYgdmlkZW9FbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgIHZpZGVvRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gICAgICAgICAgICBjb25zdCBpZnJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAgICAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xyXG4gICAgICAgICAgICBpZnJtLnN0eWxlLndpZHRoID0gZWxlbWVudC53aWR0aCA/IGVsZW1lbnQud2lkdGggOiBudWxsO1xyXG4gICAgICAgICAgICBpZnJtLnN0eWxlLmhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0ID8gZWxlbWVudC5oZWlnaHQgOiBudWxsO1xyXG4gICAgICAgICAgICBpZnJtLndpZHRoID0gZWxlbWVudC53aWR0aCA/IGVsZW1lbnQud2lkdGggOiBudWxsO1xyXG4gICAgICAgICAgICBpZnJtLmhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0ID8gZWxlbWVudC5oZWlnaHQgOiBudWxsO1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGlmcm0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGVlY2hUb1RleHRDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNwZWVjaEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWVjaFRvVGV4dCcpO1xyXG4gICAgICAgIGlmIChzcGVlY2hFbGVtZW50cyAmJiBzcGVlY2hFbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgIHNwZWVjaEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlY2hidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc3BlZWNoYnRuLmNsYXNzTmFtZSA9ICduYXJyYXRpdmUtc3BlZWNoLWJ0bic7XHJcbiAgICAgICAgICAgIHNwZWVjaGJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1taWNyb3Bob25lLXNsYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3BlZWNoYnRuKTtcclxuICAgICAgICAgICAgc3BlZWNoYnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgICBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVNwZWVjaFRvVGV4dCh0aGlzLCBldnQsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGFjdGl2YXRlU3BlZWNoVG9UZXh0KGN0cmwsIGV2dCwgaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IG5hcnJhdGl2ZUVsZW1lbnQgPSBldnQ/LmN1cnJlbnRUYXJnZXQ/LmNoaWxkcmVuPy5sZW5ndGhcclxuICAgICAgICAgID8gZXZ0Py5jdXJyZW50VGFyZ2V0Py5jaGlsZHJlblswXVxyXG4gICAgICAgICAgOiBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pbml0aW9uT24gPSAhdGhpcy5zcGVlY2hSZWNvZ25pbml0aW9uT247XHJcbiAgICAgICAgaWYgKHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uKSB7XHJcbiAgICAgICAgICBjb25zdCBzcGVlY2hUZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgaWYgKG5hcnJhdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbmFycmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnZmEgZmEtbWljcm9waG9uZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjdHJsLnNwZWVjaFJlY29nbml0aW9uU2VydmljZS5yZWNvcmQoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIC8vIGxpc3RlbmVyXHJcbiAgICAgICAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICBsZXQgdGVtcE5hcnJhdGl2ZSA9IHNwZWVjaFRleHQudmFsdWU7XHJcbiAgICAgICAgICAgICAgdGVtcE5hcnJhdGl2ZSA9IHRlbXBOYXJyYXRpdmUudHJpbSgpLmNvbmNhdCgnICcgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYgKHNwZWVjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHNwZWVjaFRleHQudmFsdWUgPSB0ZW1wTmFycmF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gZXJycm9yXHJcbiAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25DaGVja0Vycm9yKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG5hcnJhdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbmFycmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnZmEgZmEtbWljcm9waG9uZS1zbGFzaCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjdHJsLmRlQWN0aXZhdGVTcGVlY2hSZWNvZ25pdGlvbihjdHJsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uZGl0aW9uQ2hlY2tFcnJvcihuYXJyYXRpdmVFbGVtZW50LCBjdHJsLCBldnQsIGl0ZW0sIGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB0aGlzLmVycm9yRXhlY3V0aW9uKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGVycm9yRXhlY3V0aW9uKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKSB7XHJcbiAgICAgICAgaWYgKG5hcnJhdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgIG5hcnJhdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZhIGZhLW1pY3JvcGhvbmUtc2xhc2gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyLmVycm9yID09PSAnbm8tc3BlZWNoJykge1xyXG4gICAgICAgICAgY3RybC5ub3RpZmljYXRpb24gPSB0aGlzLm5vU3BlZWNoQWxlcnQoKTtcclxuICAgICAgICAgIGN0cmwuYWN0aXZhdGVTcGVlY2hUb1RleHQoY3RybCwgZXZ0LCBpdGVtKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVyci5lcnJvciA9PT0gJ25vdC1hbGxvd2VkJykge1xyXG4gICAgICAgICAgY3RybC5ub3RpZmljYXRpb24gPSB0aGlzLm1pY1VuYXV0aG9yaXNlZEFsZXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlcnIuZXJyb3IgPT09ICdub3QtbWljcm9waG9uZScpIHtcclxuICAgICAgICAgIGN0cmwubm90aWZpY2F0aW9uID0gdGhpcy5taWNOb3RBdmFpbGFibGVBbGVydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbWljTm90QXZhaWxhYmxlQWxlcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdNaWNyb3Bob25lIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSB2ZXJpZnkgdGhlIGNvbm5lY3Rpb24gb2YgeW91ciBtaWNyb3Bob25lIGFuZCB0cnkgYWdhaW4uJztcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIG1pY1VuYXV0aG9yaXNlZEFsZXJ0KCkge1xyXG4gICAgICAgIHJldHVybiAnWW91ciBicm93c2VyIGlzIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB5b3VyIG1pY3JvcGhvbmUuIFZlcmlmeSB0aGF0IHlvdXIgYnJvd3NlciBoYXMgYWNjZXNzIHRvIHlvdXIgbWljcm9waG9uZSBhbmQgdHJ5IGFnYWluLic7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBub1NwZWVjaEFsZXJ0KCkge1xyXG4gICAgICAgIHJldHVybiAnTm8gc3BlZWNoIGhhcyBiZWVuIGRldGVjdGVkLiBQbGVhc2UgdHJ5IGFnYWluLic7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBkZUFjdGl2YXRlU3BlZWNoUmVjb2duaXRpb24oY3RybCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWNoUmVjb2duaW5pdGlvbk9uID0gZmFsc2U7XHJcbiAgICAgICAgY3RybC5zcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UuZGVzdHJveVNwZWVjaE9iamVjdCgpO1xyXG4gICAgICB9XHJcbn1cclxuIl19