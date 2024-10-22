import { Injectable } from '@angular/core';
import moment from 'moment/moment';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class OCRService {
    listener = new Subject();
    FormIncrementer = 0;
    ocrIncrementer = 0;
    textractInput;
    // cloud_service_base_url = environment.cloud_service_base_url;
    constructor() {
        // This is intentional
    }
    sendResponse(message) {
        this.listener.next(message);
    }
    clearResponse() {
        this.listener.next();
    }
    getResponse() {
        return this.listener.asObservable();
    }
    sendForDoucumentAnalysis(_s3_bucket_path) {
        // This is intentional
    }
    prepare_form_data(ocrResponse, formioInputs) {
        const formData = {};
        if (ocrResponse && ocrResponse.forms) {
            const ocrforms = ocrResponse.forms;
            const formLength = formioInputs.length;
            let loopContinue = true;
            while (loopContinue) {
                const selectedInput = formioInputs[this.FormIncrementer];
                this.textractInput = ocrforms[this.ocrIncrementer];
                this.conditionSelectedInput(selectedInput, formData, ocrforms);
                if (formLength <= this.FormIncrementer) {
                    loopContinue = false;
                }
            }
        }
        return formData;
    }
    conditionSelectedInput(selectedInput, formData, ocrforms) {
        if (selectedInput.label.trim() == this.textractInput.label.trim()) {
            formData[selectedInput.key] = this.textractInput.value;
            this.FormIncrementer++;
            this.ocrIncrementer++;
        }
        else if ((selectedInput.type == 'radio' || selectedInput.type == 'selectboxes') &&
            (this.textractInput.value == 'SELECTED' || this.textractInput.value == 'NOT_SELECTED')) {
            const formValues = selectedInput.values;
            const selectionValue = {};
            console.log('****');
            this.conditionFormValues(formValues, ocrforms, selectedInput, selectionValue, formData);
            this.FormIncrementer++;
        }
        else {
            console.log('skipping input', selectedInput.label);
            console.log('ta', this.textractInput);
            if (selectedInput.type != 'radio' && selectedInput.type != 'selectboxes') {
                this.FormIncrementer++;
            }
            this.ocrIncrementer++;
        }
    }
    conditionFormValues(formValues, ocrforms, selectedInput, selectionValue, formData) {
        formValues.every(selecetionElement => {
            this.textractInput = ocrforms[this.ocrIncrementer];
            console.log(this.textractInput.label);
            if (selecetionElement.label == this.textractInput.label) {
                if (this.textractInput.value == 'SELECTED') {
                    if (selectedInput.type == 'radio') {
                        selectionValue = selecetionElement.value;
                    }
                    else {
                        selectionValue[selecetionElement.value] = true;
                    }
                }
                else {
                    if (selectedInput.type == 'selectboxes') {
                        selectionValue[selecetionElement.value] = false;
                    }
                }
                console.log('sv', selectionValue);
                formData[selectedInput.key] = selectionValue;
                this.ocrIncrementer++;
            }
            return true;
        });
    }
    prepare_from_data_v1(ocr_response, formioInputs) {
        let formData;
        if (ocr_response && ocr_response.forms) {
            ocr_response.forms.forEach(item => {
                if (item.value !== 'SELECTED' && item.value !== 'NOT_SELECTED') {
                    const selectedInput = formioInputs.find(input => input.label == item.label);
                    formData = this.getSelectedDate(item, selectedInput);
                }
            });
        }
        return formData;
    }
    getSelectedDate(item, selectedInput) {
        const formData = {};
        if (selectedInput && selectedInput.type === 'datetime') {
            const mdate = moment(item.value);
            if (mdate.isValid()) {
                item.value = mdate.format('YYYY-MM-DD');
            }
            else {
                item.value = null;
            }
            formData[selectedInput.key] = item.value;
        }
        return formData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS9zZXJ2aWNlL29jci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxNQUFNLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBUTNDLE1BQU0sT0FBTyxVQUFVO0lBQ2IsUUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQy9DLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDcEIsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUNuQixhQUFhLENBQU07SUFDbkIsK0RBQStEO0lBQy9EO1FBQ0Usc0JBQXNCO0lBQ3hCLENBQUM7SUFDRCxZQUFZLENBQUMsT0FBWTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELHdCQUF3QixDQUFDLGVBQWU7UUFDdEMsc0JBQXNCO0lBQ3hCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsWUFBWTtRQUN6QyxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNwQyxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRW5DLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FB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TSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1lBQ0QsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzt3R0FwSFUsVUFBVTs0R0FBVixVQUFVOzs0RkFBVixVQUFVO2tCQUR0QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC9tb21lbnQnOyBcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pbnRlcmZhY2UgX0lXaW5kb3cge1xyXG4gIHdlYmtpdFNwZWVjaFJlY29nbml0aW9uOiBhbnk7XHJcbiAgU3BlZWNoUmVjb2duaXRpb246IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT0NSU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsaXN0ZW5lcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBGb3JtSW5jcmVtZW50ZXIgPSAwO1xyXG4gIG9jckluY3JlbWVudGVyID0gMDtcclxuICB0ZXh0cmFjdElucHV0OiBhbnk7XHJcbiAgLy8gY2xvdWRfc2VydmljZV9iYXNlX3VybCA9IGVudmlyb25tZW50LmNsb3VkX3NlcnZpY2VfYmFzZV91cmw7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgfVxyXG4gIHNlbmRSZXNwb25zZShtZXNzYWdlOiBhbnkpIHtcclxuICAgIHRoaXMubGlzdGVuZXIubmV4dChtZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGNsZWFyUmVzcG9uc2UoKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGdldFJlc3BvbnNlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNlbmRGb3JEb3VjdW1lbnRBbmFseXNpcyhfczNfYnVja2V0X3BhdGgpIHtcclxuICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICB9XHJcblxyXG4gIHByZXBhcmVfZm9ybV9kYXRhKG9jclJlc3BvbnNlLCBmb3JtaW9JbnB1dHMpIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XHJcbiAgICBpZiAob2NyUmVzcG9uc2UgJiYgb2NyUmVzcG9uc2UuZm9ybXMpIHtcclxuICAgICAgY29uc3Qgb2NyZm9ybXMgPSBvY3JSZXNwb25zZS5mb3JtcztcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1MZW5ndGggPSBmb3JtaW9JbnB1dHMubGVuZ3RoO1xyXG4gICAgICBsZXQgbG9vcENvbnRpbnVlID0gdHJ1ZTtcclxuICAgICAgd2hpbGUgKGxvb3BDb250aW51ZSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5wdXQgPSBmb3JtaW9JbnB1dHNbdGhpcy5Gb3JtSW5jcmVtZW50ZXJdO1xyXG4gICAgICAgIHRoaXMudGV4dHJhY3RJbnB1dCA9IG9jcmZvcm1zW3RoaXMub2NySW5jcmVtZW50ZXJdO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uU2VsZWN0ZWRJbnB1dChzZWxlY3RlZElucHV0LCBmb3JtRGF0YSwgb2NyZm9ybXMpO1xyXG4gICAgICAgIGlmIChmb3JtTGVuZ3RoIDw9IHRoaXMuRm9ybUluY3JlbWVudGVyKSB7XHJcbiAgICAgICAgICBsb29wQ29udGludWUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtRGF0YTtcclxuICB9XHJcbiAgY29uZGl0aW9uU2VsZWN0ZWRJbnB1dChzZWxlY3RlZElucHV0LCBmb3JtRGF0YSwgb2NyZm9ybXMpIHtcclxuICAgIGlmIChzZWxlY3RlZElucHV0LmxhYmVsLnRyaW0oKSA9PSB0aGlzLnRleHRyYWN0SW5wdXQubGFiZWwudHJpbSgpKSB7XHJcbiAgICAgIGZvcm1EYXRhW3NlbGVjdGVkSW5wdXQua2V5XSA9IHRoaXMudGV4dHJhY3RJbnB1dC52YWx1ZTtcclxuICAgICAgdGhpcy5Gb3JtSW5jcmVtZW50ZXIrKztcclxuICAgICAgdGhpcy5vY3JJbmNyZW1lbnRlcisrO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKHNlbGVjdGVkSW5wdXQudHlwZSA9PSAncmFkaW8nIHx8IHNlbGVjdGVkSW5wdXQudHlwZSA9PSAnc2VsZWN0Ym94ZXMnKSAmJlxyXG4gICAgICAodGhpcy50ZXh0cmFjdElucHV0LnZhbHVlID09ICdTRUxFQ1RFRCcgfHwgdGhpcy50ZXh0cmFjdElucHV0LnZhbHVlID09ICdOT1RfU0VMRUNURUQnKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBzZWxlY3RlZElucHV0LnZhbHVlcztcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uVmFsdWUgPSB7fTtcclxuICAgICAgY29uc29sZS5sb2coJyoqKionKTtcclxuICAgICAgdGhpcy5jb25kaXRpb25Gb3JtVmFsdWVzKGZvcm1WYWx1ZXMsIG9jcmZvcm1zLCBzZWxlY3RlZElucHV0LCBzZWxlY3Rpb25WYWx1ZSwgZm9ybURhdGEpO1xyXG4gICAgICB0aGlzLkZvcm1JbmNyZW1lbnRlcisrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3NraXBwaW5nIGlucHV0Jywgc2VsZWN0ZWRJbnB1dC5sYWJlbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0YScsIHRoaXMudGV4dHJhY3RJbnB1dCk7XHJcbiAgICAgIGlmIChzZWxlY3RlZElucHV0LnR5cGUgIT0gJ3JhZGlvJyAmJiBzZWxlY3RlZElucHV0LnR5cGUgIT0gJ3NlbGVjdGJveGVzJykge1xyXG4gICAgICAgIHRoaXMuRm9ybUluY3JlbWVudGVyKys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMub2NySW5jcmVtZW50ZXIrKztcclxuICAgIH1cclxuICB9XHJcbiAgY29uZGl0aW9uRm9ybVZhbHVlcyhmb3JtVmFsdWVzLCBvY3Jmb3Jtcywgc2VsZWN0ZWRJbnB1dCwgc2VsZWN0aW9uVmFsdWUsIGZvcm1EYXRhKSB7XHJcbiAgICBmb3JtVmFsdWVzLmV2ZXJ5KHNlbGVjZXRpb25FbGVtZW50ID0+IHtcclxuICAgICAgdGhpcy50ZXh0cmFjdElucHV0ID0gb2NyZm9ybXNbdGhpcy5vY3JJbmNyZW1lbnRlcl07XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dHJhY3RJbnB1dC5sYWJlbCk7XHJcbiAgICAgIGlmIChzZWxlY2V0aW9uRWxlbWVudC5sYWJlbCA9PSB0aGlzLnRleHRyYWN0SW5wdXQubGFiZWwpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0cmFjdElucHV0LnZhbHVlID09ICdTRUxFQ1RFRCcpIHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZElucHV0LnR5cGUgPT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25WYWx1ZSA9IHNlbGVjZXRpb25FbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9uVmFsdWVbc2VsZWNldGlvbkVsZW1lbnQudmFsdWVdID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkSW5wdXQudHlwZSA9PSAnc2VsZWN0Ym94ZXMnKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvblZhbHVlW3NlbGVjZXRpb25FbGVtZW50LnZhbHVlXSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnc3YnLCBzZWxlY3Rpb25WYWx1ZSk7XHJcbiAgICAgICAgZm9ybURhdGFbc2VsZWN0ZWRJbnB1dC5rZXldID0gc2VsZWN0aW9uVmFsdWU7XHJcbiAgICAgICAgdGhpcy5vY3JJbmNyZW1lbnRlcisrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlX2Zyb21fZGF0YV92MShvY3JfcmVzcG9uc2UsIGZvcm1pb0lucHV0cykge1xyXG4gICAgbGV0IGZvcm1EYXRhOiBhbnk7XHJcbiAgICBpZiAob2NyX3Jlc3BvbnNlICYmIG9jcl9yZXNwb25zZS5mb3Jtcykge1xyXG4gICAgICBvY3JfcmVzcG9uc2UuZm9ybXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS52YWx1ZSAhPT0gJ1NFTEVDVEVEJyAmJiBpdGVtLnZhbHVlICE9PSAnTk9UX1NFTEVDVEVEJykge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbnB1dCA9IGZvcm1pb0lucHV0cy5maW5kKGlucHV0ID0+IGlucHV0LmxhYmVsID09IGl0ZW0ubGFiZWwpO1xyXG4gICAgICAgICAgZm9ybURhdGEgPSB0aGlzLmdldFNlbGVjdGVkRGF0ZShpdGVtLCBzZWxlY3RlZElucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWREYXRlKGl0ZW0sIHNlbGVjdGVkSW5wdXQpIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XHJcbiAgICBpZiAoc2VsZWN0ZWRJbnB1dCAmJiBzZWxlY3RlZElucHV0LnR5cGUgPT09ICdkYXRldGltZScpIHtcclxuICAgICAgY29uc3QgbWRhdGUgPSBtb21lbnQoaXRlbS52YWx1ZSk7XHJcbiAgICAgIGlmIChtZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICBpdGVtLnZhbHVlID0gbWRhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS52YWx1ZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybURhdGFbc2VsZWN0ZWRJbnB1dC5rZXldID0gaXRlbS52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtRGF0YTtcclxuICB9XHJcbn1cclxuIl19