import { RatingWrapperComponent } from './rating-wrapper.component';
import { registerCustomFormioComponent } from '../custom-component/register-custom-component';
const COMPONENT_OPTIONS = {
    type: 'myrating',
    selector: 'my-rating',
    title: 'Rating',
    group: 'basic',
    icon: 'fa fa-star'
    // editForm: minimalEditForm,
    // template: 'dateTime'
};
function _minimalEditForm() {
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
                label: 'Field Code',
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
                key: 'customOptions.myOption',
                label: 'My Custom Option',
                placeholder: 'My Custom Option',
                validate: {
                    required: true
                }
            }
        ]
    };
}
export function registerRatingComponent(injector) {
    console.log('registerPopupComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, RatingWrapperComponent, injector);
        console.log('registerPopupComponent complete...');
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLXdyYXBwZXIuZm9ybWlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQHNoYXJlZC9yYXRpbmctd3JhcHBlci9yYXRpbmctd3JhcHBlci5mb3JtaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFOUYsTUFBTSxpQkFBaUIsR0FBOEI7SUFDbkQsSUFBSSxFQUFFLFVBQVU7SUFDaEIsUUFBUSxFQUFFLFdBQVc7SUFDckIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxZQUFZO0lBQ2xCLDZCQUE2QjtJQUM3Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGLFNBQVMsZ0JBQWdCO0lBQ3ZCLE9BQU87UUFDTCxVQUFVLEVBQUU7WUFDVixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUMvQjtnQkFDRSxNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsR0FBRyxFQUFFLE9BQU87Z0JBQ1osS0FBSyxFQUFFLE9BQU87Z0JBQ2QsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsSUFBSTtpQkFDZjthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEtBQUssRUFBRSxZQUFZO2dCQUNuQixXQUFXLEVBQUUsWUFBWTtnQkFDekIsT0FBTyxFQUFFLG9DQUFvQztnQkFDN0MsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxHQUFHO29CQUNkLE9BQU8sRUFBRSxjQUFjO29CQUN2QixjQUFjLEVBQ1osOEhBQThIO2lCQUNqSTthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSx3QkFBd0I7Z0JBQzdCLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLFdBQVcsRUFBRSxrQkFBa0I7Z0JBQy9CLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsSUFBSTtpQkFDZjthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxRQUFrQjtJQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDaEQsSUFBSTtRQUNGLDZCQUE2QixDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztLQUNuRDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYXRpbmdXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYXRpbmctd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvIH0gZnJvbSAnLi4vY3VzdG9tLWNvbXBvbmVudC9lbGVtZW50cy5jb21tb24nO1xyXG5pbXBvcnQgeyByZWdpc3RlckN1c3RvbUZvcm1pb0NvbXBvbmVudCB9IGZyb20gJy4uL2N1c3RvbS1jb21wb25lbnQvcmVnaXN0ZXItY3VzdG9tLWNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRfT1BUSU9OUzogRm9ybWlvQ3VzdG9tQ29tcG9uZW50SW5mbyA9IHtcclxuICB0eXBlOiAnbXlyYXRpbmcnLFxyXG4gIHNlbGVjdG9yOiAnbXktcmF0aW5nJyxcclxuICB0aXRsZTogJ1JhdGluZycsXHJcbiAgZ3JvdXA6ICdiYXNpYycsXHJcbiAgaWNvbjogJ2ZhIGZhLXN0YXInXHJcbiAgLy8gZWRpdEZvcm06IG1pbmltYWxFZGl0Rm9ybSxcclxuICAvLyB0ZW1wbGF0ZTogJ2RhdGVUaW1lJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX21pbmltYWxFZGl0Rm9ybSgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAgICB7IGtleTogJ3R5cGUnLCB0eXBlOiAnaGlkZGVuJyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgd2VpZ2h0OiAwLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ2xhYmVsJyxcclxuICAgICAgICBsYWJlbDogJ0xhYmVsJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0xhYmVsJyxcclxuICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWlnaHQ6IDEwLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ2tleScsXHJcbiAgICAgICAgbGFiZWw6ICdGaWVsZCBDb2RlJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0ZpZWxkIENvZGUnLFxyXG4gICAgICAgIHRvb2x0aXA6ICdUaGUgY29kZS9rZXkvSUQvbmFtZSBvZiB0aGUgZmllbGQuJyxcclxuICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtYXhMZW5ndGg6IDEyOCxcclxuICAgICAgICAgIHBhdHRlcm46ICdbQS1aYS16XVxcXFx3KicsXHJcbiAgICAgICAgICBwYXR0ZXJuTWVzc2FnZTpcclxuICAgICAgICAgICAgJ1RoZSBwcm9wZXJ0eSBuYW1lIG11c3Qgb25seSBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLCB1bmRlcnNjb3JlcyBhbmQgc2hvdWxkIG9ubHkgYmUgc3RhcnRlZCBieSBhbnkgbGV0dGVyIGNoYXJhY3Rlci4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgd2VpZ2h0OiAyMCxcclxuICAgICAgICB0eXBlOiAndGV4dGZpZWxkJyxcclxuICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICBrZXk6ICdjdXN0b21PcHRpb25zLm15T3B0aW9uJyxcclxuICAgICAgICBsYWJlbDogJ015IEN1c3RvbSBPcHRpb24nLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnTXkgQ3VzdG9tIE9wdGlvbicsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUmF0aW5nQ29tcG9uZW50KGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gIGNvbnNvbGUubG9nKCdyZWdpc3RlclBvcHVwQ29tcG9uZW50IGNhbGxlZC4uLicpO1xyXG4gIHRyeSB7XHJcbiAgICByZWdpc3RlckN1c3RvbUZvcm1pb0NvbXBvbmVudChDT01QT05FTlRfT1BUSU9OUywgUmF0aW5nV3JhcHBlckNvbXBvbmVudCwgaW5qZWN0b3IpO1xyXG4gICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyUG9wdXBDb21wb25lbnQgY29tcGxldGUuLi4nKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIG9jYyBpbiByZWdpc3RlcmNvbXAnLCBlcnIpO1xyXG4gIH1cclxufVxyXG4iXX0=