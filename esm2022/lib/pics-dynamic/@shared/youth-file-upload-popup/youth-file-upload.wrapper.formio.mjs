import { ApplicationRef } from '@angular/core';
import { registerCustomFormioComponent } from '../../@shared/custom-component/register-custom-component';
import { YouthFileUploadWrapperComponent } from './youth-file-upload.component';
// Constants for validation pattern and message
const PATTERN = '[A-Za-z]\\w*';
const PATTERN_MESSAGE = 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.';
// Component options for the custom file upload component
const COMPONENT_OPTIONS = {
    type: 'youthFileUpload',
    selector: 'youth-file-upload',
    title: 'Youth File Upload',
    group: 'basic',
    icon: 'file',
    editForm: minimalEditForm,
    fieldOptions: [],
    schema: {
        validate: {}
    }
};
// Minimal edit form schema configuration
export function minimalEditForm() {
    return {
        components: [
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'API Key',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128
                }
            }
        ]
    };
}
// Function to register the YouthFileUpload component with Angular
export function registerYouthFileUploadComponent(injector) {
    // Initialization logic, simulating a constructor
    console.log('Initializing registration of YouthFileUploadComponent...');
    // Dependencies initialization if needed
    const appRef = injector.get(ApplicationRef);
    // Log the application reference to ensure it's correctly retrieved
    console.log('ApplicationRef initialized:', appRef);
    // Perform registration
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, YouthFileUploadWrapperComponent, injector);
        console.log('registerYouthFileUploadComponent complete...');
    }
    catch (err) {
        console.error('Error occurred in registerYouthFileUploadComponent:', err);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dGgtZmlsZS11cGxvYWQud3JhcHBlci5mb3JtaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL3lvdXRoLWZpbGUtdXBsb2FkLXBvcHVwL3lvdXRoLWZpbGUtdXBsb2FkLndyYXBwZXIuZm9ybWlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBWSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDekcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFaEYsK0NBQStDO0FBQy9DLE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQztBQUMvQixNQUFNLGVBQWUsR0FBRyw4SEFBOEgsQ0FBQztBQUV2Six5REFBeUQ7QUFDekQsTUFBTSxpQkFBaUIsR0FBOEI7SUFDbkQsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixRQUFRLEVBQUUsbUJBQW1CO0lBQzdCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxFQUFFO0tBQ2I7Q0FDRixDQUFDO0FBRUYseUNBQXlDO0FBQ3pDLE1BQU0sVUFBVSxlQUFlO0lBQzdCLE9BQU87UUFDTCxVQUFVLEVBQUU7WUFDVjtnQkFDRSxNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsR0FBRyxFQUFFLE9BQU87Z0JBQ1osS0FBSyxFQUFFLE9BQU87Z0JBQ2QsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsSUFBSTtpQkFDZjthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEtBQUssRUFBRSxTQUFTO2dCQUNoQixXQUFXLEVBQUUsWUFBWTtnQkFDekIsT0FBTyxFQUFFLG9DQUFvQztnQkFDN0MsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxHQUFHO2lCQUNmO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsa0VBQWtFO0FBQ2xFLE1BQU0sVUFBVSxnQ0FBZ0MsQ0FBQyxRQUFrQjtJQUNqRSxpREFBaUQ7SUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0lBRXhFLHdDQUF3QztJQUN4QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTVDLG1FQUFtRTtJQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRW5ELHVCQUF1QjtJQUN2QixJQUFJO1FBQ0YsNkJBQTZCLENBQUMsaUJBQWlCLEVBQUUsK0JBQStCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0tBQzdEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzNFO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBBcHBsaWNhdGlvblJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvIH0gZnJvbSAnLi4vLi4vQHNoYXJlZC9jdXN0b20tY29tcG9uZW50L2VsZW1lbnRzLmNvbW1vbic7XHJcbmltcG9ydCB7IHJlZ2lzdGVyQ3VzdG9tRm9ybWlvQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQHNoYXJlZC9jdXN0b20tY29tcG9uZW50L3JlZ2lzdGVyLWN1c3RvbS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBZb3V0aEZpbGVVcGxvYWRXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi95b3V0aC1maWxlLXVwbG9hZC5jb21wb25lbnQnO1xyXG5cclxuLy8gQ29uc3RhbnRzIGZvciB2YWxpZGF0aW9uIHBhdHRlcm4gYW5kIG1lc3NhZ2VcclxuY29uc3QgUEFUVEVSTiA9ICdbQS1aYS16XVxcXFx3Kic7XHJcbmNvbnN0IFBBVFRFUk5fTUVTU0FHRSA9ICdUaGUgcHJvcGVydHkgbmFtZSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycywgdW5kZXJzY29yZXMgYW5kIHNob3VsZCBvbmx5IGJlIHN0YXJ0ZWQgYnkgYW55IGxldHRlciBjaGFyYWN0ZXIuJztcclxuXHJcbi8vIENvbXBvbmVudCBvcHRpb25zIGZvciB0aGUgY3VzdG9tIGZpbGUgdXBsb2FkIGNvbXBvbmVudFxyXG5jb25zdCBDT01QT05FTlRfT1BUSU9OUzogRm9ybWlvQ3VzdG9tQ29tcG9uZW50SW5mbyA9IHtcclxuICB0eXBlOiAneW91dGhGaWxlVXBsb2FkJyxcclxuICBzZWxlY3RvcjogJ3lvdXRoLWZpbGUtdXBsb2FkJyxcclxuICB0aXRsZTogJ1lvdXRoIEZpbGUgVXBsb2FkJyxcclxuICBncm91cDogJ2Jhc2ljJyxcclxuICBpY29uOiAnZmlsZScsXHJcbiAgZWRpdEZvcm06IG1pbmltYWxFZGl0Rm9ybSxcclxuICBmaWVsZE9wdGlvbnM6IFtdLFxyXG4gIHNjaGVtYToge1xyXG4gICAgdmFsaWRhdGU6IHt9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gTWluaW1hbCBlZGl0IGZvcm0gc2NoZW1hIGNvbmZpZ3VyYXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbmltYWxFZGl0Rm9ybSgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgd2VpZ2h0OiAwLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ2xhYmVsJyxcclxuICAgICAgICBsYWJlbDogJ0xhYmVsJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0xhYmVsJyxcclxuICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWlnaHQ6IDEwLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ2tleScsXHJcbiAgICAgICAgbGFiZWw6ICdBUEkgS2V5JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0ZpZWxkIENvZGUnLFxyXG4gICAgICAgIHRvb2x0aXA6ICdUaGUgY29kZS9rZXkvSUQvbmFtZSBvZiB0aGUgZmllbGQuJyxcclxuICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtYXhMZW5ndGg6IDEyOFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHJlZ2lzdGVyIHRoZSBZb3V0aEZpbGVVcGxvYWQgY29tcG9uZW50IHdpdGggQW5ndWxhclxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJZb3V0aEZpbGVVcGxvYWRDb21wb25lbnQoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgLy8gSW5pdGlhbGl6YXRpb24gbG9naWMsIHNpbXVsYXRpbmcgYSBjb25zdHJ1Y3RvclxyXG4gIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcgcmVnaXN0cmF0aW9uIG9mIFlvdXRoRmlsZVVwbG9hZENvbXBvbmVudC4uLicpO1xyXG5cclxuICAvLyBEZXBlbmRlbmNpZXMgaW5pdGlhbGl6YXRpb24gaWYgbmVlZGVkXHJcbiAgY29uc3QgYXBwUmVmID0gaW5qZWN0b3IuZ2V0KEFwcGxpY2F0aW9uUmVmKTtcclxuXHJcbiAgLy8gTG9nIHRoZSBhcHBsaWNhdGlvbiByZWZlcmVuY2UgdG8gZW5zdXJlIGl0J3MgY29ycmVjdGx5IHJldHJpZXZlZFxyXG4gIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvblJlZiBpbml0aWFsaXplZDonLCBhcHBSZWYpO1xyXG5cclxuICAvLyBQZXJmb3JtIHJlZ2lzdHJhdGlvblxyXG4gIHRyeSB7XHJcbiAgICByZWdpc3RlckN1c3RvbUZvcm1pb0NvbXBvbmVudChDT01QT05FTlRfT1BUSU9OUywgWW91dGhGaWxlVXBsb2FkV3JhcHBlckNvbXBvbmVudCwgaW5qZWN0b3IpO1xyXG4gICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyWW91dGhGaWxlVXBsb2FkQ29tcG9uZW50IGNvbXBsZXRlLi4uJyk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBpbiByZWdpc3RlcllvdXRoRmlsZVVwbG9hZENvbXBvbmVudDonLCBlcnIpO1xyXG4gIH1cclxufVxyXG4iXX0=