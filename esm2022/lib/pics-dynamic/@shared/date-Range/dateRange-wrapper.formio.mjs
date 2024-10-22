import { DateRangeWrapperComponent } from './dateRange-wrapper.component';
import { registerCustomFormioComponent } from '../custom-component/register-custom-component';
const COMPONENT_OPTIONS = {
    type: 'dateWithRange',
    selector: 'date-angular',
    title: 'Date Range Angular',
    group: 'advanced',
    icon: 'calendar',
    editForm: minimalEditForm,
    fieldOptions: ['startDateKey', 'endDateKey'],
    schema: {
        validate: {
            required: true
        }
    }
};
export function minimalEditForm() {
    return {
        components: [
            { key: 'type', type: 'hidden' },
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
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 20,
                type: 'textfield',
                input: true,
                key: 'startDateKey',
                label: 'Start Date Key',
                placeholder: 'Start Date Key',
                tooltip: 'The code/key/ID/name of the start date.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 30,
                type: 'textfield',
                input: true,
                key: 'endDateKey',
                label: 'End Date Key',
                placeholder: 'End Date Key',
                tooltip: 'The code/key/ID/name of the end date.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 413,
                type: 'checkbox',
                input: true,
                key: 'validate.required',
                label: 'Required'
            }
        ]
    };
}
export function registerDateRangeComponent(injector) {
    console.log('registerDateRangeComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, DateRangeWrapperComponent, injector);
        console.log('registerDateRangeComponent complete...');
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVJhbmdlLXdyYXBwZXIuZm9ybWlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQHNoYXJlZC9kYXRlLVJhbmdlL2RhdGVSYW5nZS13cmFwcGVyLmZvcm1pby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RixNQUFNLGlCQUFpQixHQUE4QjtJQUNuRCxJQUFJLEVBQUUsZUFBZTtJQUNyQixRQUFRLEVBQUUsY0FBYztJQUN4QixLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLEtBQUssRUFBRSxVQUFVO0lBQ2pCLElBQUksRUFBRSxVQUFVO0lBQ2hCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUM7SUFDNUMsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLElBQUk7U0FDZjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0sVUFBVSxlQUFlO0lBQzdCLE9BQU87UUFDTCxVQUFVLEVBQUU7WUFDVixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUMvQjtnQkFDRSxNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsR0FBRyxFQUFFLE9BQU87Z0JBQ1osS0FBSyxFQUFFLE9BQU87Z0JBQ2QsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsSUFBSTtpQkFDZjthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEtBQUssRUFBRSxTQUFTO2dCQUNoQixXQUFXLEVBQUUsWUFBWTtnQkFDekIsT0FBTyxFQUFFLG9DQUFvQztnQkFDN0MsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxHQUFHO29CQUNkLE9BQU8sRUFBRSxjQUFjO29CQUN2QixjQUFjLEVBQ1osOEhBQThIO2lCQUNqSTthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxjQUFjO2dCQUNuQixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixXQUFXLEVBQUUsZ0JBQWdCO2dCQUM3QixPQUFPLEVBQUUseUNBQXlDO2dCQUNsRCxRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLElBQUk7b0JBQ2QsU0FBUyxFQUFFLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLGNBQWMsRUFDWiw4SEFBOEg7aUJBQ2pJO2FBQ0Y7WUFDRDtnQkFDRSxNQUFNLEVBQUUsRUFBRTtnQkFDVixJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsR0FBRyxFQUFFLFlBQVk7Z0JBQ2pCLEtBQUssRUFBRSxjQUFjO2dCQUNyQixXQUFXLEVBQUUsY0FBYztnQkFDM0IsT0FBTyxFQUFFLHVDQUF1QztnQkFDaEQsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxHQUFHO29CQUNkLE9BQU8sRUFBRSxjQUFjO29CQUN2QixjQUFjLEVBQ1osOEhBQThIO2lCQUNqSTthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxtQkFBbUI7Z0JBQ3hCLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUFrQjtJQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDcEQsSUFBSTtRQUNGLDZCQUE2QixDQUFDLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztLQUN2RDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlUmFuZ2Utd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvIH0gZnJvbSAnLi4vY3VzdG9tLWNvbXBvbmVudC9lbGVtZW50cy5jb21tb24nO1xyXG5pbXBvcnQgeyByZWdpc3RlckN1c3RvbUZvcm1pb0NvbXBvbmVudCB9IGZyb20gJy4uL2N1c3RvbS1jb21wb25lbnQvcmVnaXN0ZXItY3VzdG9tLWNvbXBvbmVudCc7XHJcbmNvbnN0IENPTVBPTkVOVF9PUFRJT05TOiBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvID0ge1xyXG4gIHR5cGU6ICdkYXRlV2l0aFJhbmdlJyxcclxuICBzZWxlY3RvcjogJ2RhdGUtYW5ndWxhcicsXHJcbiAgdGl0bGU6ICdEYXRlIFJhbmdlIEFuZ3VsYXInLFxyXG4gIGdyb3VwOiAnYWR2YW5jZWQnLFxyXG4gIGljb246ICdjYWxlbmRhcicsXHJcbiAgZWRpdEZvcm06IG1pbmltYWxFZGl0Rm9ybSxcclxuICBmaWVsZE9wdGlvbnM6IFsnc3RhcnREYXRlS2V5JywgJ2VuZERhdGVLZXknXSxcclxuICBzY2hlbWE6IHtcclxuICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbmltYWxFZGl0Rm9ybSgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAgICB7IGtleTogJ3R5cGUnLCB0eXBlOiAnaGlkZGVuJyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgd2VpZ2h0OiAwLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ2xhYmVsJyxcclxuICAgICAgICBsYWJlbDogJ0xhYmVsJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0xhYmVsJyxcclxuICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWlnaHQ6IDEwLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ2tleScsXHJcbiAgICAgICAgbGFiZWw6ICdBUEkgS2V5JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0ZpZWxkIENvZGUnLFxyXG4gICAgICAgIHRvb2x0aXA6ICdUaGUgY29kZS9rZXkvSUQvbmFtZSBvZiB0aGUgZmllbGQuJyxcclxuICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtYXhMZW5ndGg6IDEyOCxcclxuICAgICAgICAgIHBhdHRlcm46ICdbQS1aYS16XVxcXFx3KicsXHJcbiAgICAgICAgICBwYXR0ZXJuTWVzc2FnZTpcclxuICAgICAgICAgICAgJ1RoZSBwcm9wZXJ0eSBuYW1lIG11c3Qgb25seSBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLCB1bmRlcnNjb3JlcyBhbmQgc2hvdWxkIG9ubHkgYmUgc3RhcnRlZCBieSBhbnkgbGV0dGVyIGNoYXJhY3Rlci4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgd2VpZ2h0OiAyMCxcclxuICAgICAgICB0eXBlOiAndGV4dGZpZWxkJyxcclxuICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICBrZXk6ICdzdGFydERhdGVLZXknLFxyXG4gICAgICAgIGxhYmVsOiAnU3RhcnQgRGF0ZSBLZXknLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU3RhcnQgRGF0ZSBLZXknLFxyXG4gICAgICAgIHRvb2x0aXA6ICdUaGUgY29kZS9rZXkvSUQvbmFtZSBvZiB0aGUgc3RhcnQgZGF0ZS4nLFxyXG4gICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIG1heExlbmd0aDogMTI4LFxyXG4gICAgICAgICAgcGF0dGVybjogJ1tBLVphLXpdXFxcXHcqJyxcclxuICAgICAgICAgIHBhdHRlcm5NZXNzYWdlOlxyXG4gICAgICAgICAgICAnVGhlIHByb3BlcnR5IG5hbWUgbXVzdCBvbmx5IGNvbnRhaW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcnMsIHVuZGVyc2NvcmVzIGFuZCBzaG91bGQgb25seSBiZSBzdGFydGVkIGJ5IGFueSBsZXR0ZXIgY2hhcmFjdGVyLidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWlnaHQ6IDMwLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ2VuZERhdGVLZXknLFxyXG4gICAgICAgIGxhYmVsOiAnRW5kIERhdGUgS2V5JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0VuZCBEYXRlIEtleScsXHJcbiAgICAgICAgdG9vbHRpcDogJ1RoZSBjb2RlL2tleS9JRC9uYW1lIG9mIHRoZSBlbmQgZGF0ZS4nLFxyXG4gICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIG1heExlbmd0aDogMTI4LFxyXG4gICAgICAgICAgcGF0dGVybjogJ1tBLVphLXpdXFxcXHcqJyxcclxuICAgICAgICAgIHBhdHRlcm5NZXNzYWdlOlxyXG4gICAgICAgICAgICAnVGhlIHByb3BlcnR5IG5hbWUgbXVzdCBvbmx5IGNvbnRhaW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcnMsIHVuZGVyc2NvcmVzIGFuZCBzaG91bGQgb25seSBiZSBzdGFydGVkIGJ5IGFueSBsZXR0ZXIgY2hhcmFjdGVyLidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWlnaHQ6IDQxMyxcclxuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ3ZhbGlkYXRlLnJlcXVpcmVkJyxcclxuICAgICAgICBsYWJlbDogJ1JlcXVpcmVkJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGF0ZVJhbmdlQ29tcG9uZW50KGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gIGNvbnNvbGUubG9nKCdyZWdpc3RlckRhdGVSYW5nZUNvbXBvbmVudCBjYWxsZWQuLi4nKTtcclxuICB0cnkge1xyXG4gICAgcmVnaXN0ZXJDdXN0b21Gb3JtaW9Db21wb25lbnQoQ09NUE9ORU5UX09QVElPTlMsIERhdGVSYW5nZVdyYXBwZXJDb21wb25lbnQsIGluamVjdG9yKTtcclxuICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlckRhdGVSYW5nZUNvbXBvbmVudCBjb21wbGV0ZS4uLicpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcignZXJyb3Igb2NjIGluIHJlZ2lzdGVyY29tcCcsIGVycik7XHJcbiAgfVxyXG59XHJcbiJdfQ==