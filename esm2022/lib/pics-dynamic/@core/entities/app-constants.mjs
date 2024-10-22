const CONFIGURATOR_TITLE = 'Low Code Configurator';
export class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static multiView = 'MV';
    static multiViewRoute = 'master-view';
    static regexSsn = '^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$';
    static regexSsnDigits = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;
    static regexForPhone = '/^[()s-]*(d{8,12}|d{3}[)s-]*d{3}[s-]*d{4}|d{10})[()s-]*$/';
    static formatDate = 'MM/DD/YYYY';
    static camalize = '/[^a-zA-Z0-9]+(.)/g';
    static checSchemaExistQuery = '/(?<=(as|AS)s)("*[a-zA-Zs#~_]*"*)(?=,|(from|FROM))/g';
    static URLVALIDATE = '/(ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/';
    static EventURLValidate;
    static RegexUrlConstant = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    static statusComments = '/<[^>]*>/g';
    static regexEmailType2 = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$';
    static errorMessage = 'Something went wrong!';
    static accessDeniedMessage = 'Access Denied';
    static sessionExpired = 'Your session is expired.';
    static providerError = 'Unable to Process the Request Contact support';
    static verificationSuccess = 'Verification code sent successfully';
    static emailVerificationSuccess = 'Link sent successfully. Please check your inbox for further instructions';
    static passwordNotMatch = 'Password does not match';
    static vaildEmail = 'Please enter a valid email';
    static requiredFields = 'Please fill all required fields!';
    static pages = [
        { page: 'admin', title: 'User Management' },
        { page: 'intake-worker', title: 'Dashboard' },
        { page: 'microstrategy', title: 'Analytics' },
        { page: 'form-builder', title: 'Low Code Configurator' },
        { page: 'tab-order', title: 'Low Code Configurator' },
        { page: 'workflow', title: 'Low Code Configurator' },
        { page: 'document-packetization', title: 'Document Packetization' },
        { page: 'email-template', title: 'Email Template' },
        { page: 'chat', title: 'Chat' },
        { page: 'help-desk', title: 'Help' },
        { page: 'ocr-validation', title: 'Referrals' },
        { page: 'event-scheduler', title: 'Event Scheduler' },
        { page: 'config-dashboard', title: 'Config Dashboard' },
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' },
        { page: 'profile', title: 'Profile' }
    ];
    static errorList = [
        'Include at least one number',
        'Include at least one special character',
        'Include at least one upper case letter',
        'Include at least one lower case letter',
        'Be at least 8 characters in length',
        'Should not exceed sixteen (16) characters',
        'Space characters are invalid'
    ];
    static referralSource = [
        { value: 'law enforcement', label: 'Law Enforcement' },
        { value: 'citizen complaint', label: 'Citizen Complaint' }
    ];
    static generateNumber() {
        const crypto = window.crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    }
    static iconList = [
        { label: 'Apps', value: 'apps' },
        { label: 'Admin Settings', value: 'admin_panel_settings' },
        { label: 'Description', value: 'description' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Settings', value: 'settings' },
        { label: 'Library', value: 'library_books' },
        { label: 'Long Receipt', value: 'receipt_long' },
        { label: 'List', value: 'list' },
        { label: 'Layers', value: 'layers' },
        { label: 'Summarize', value: 'summarize' },
        { label: 'Featured List', value: 'featured_play_list' },
        { label: 'Contract', value: 'contract' },
        { label: 'List Add', value: 'list_alt_add' },
        { label: 'Inactive Order', value: 'inactive_order' },
        { label: 'Receipt', value: 'receipt' },
        { label: 'Dataset', value: 'dataset' },
        { label: 'Density', value: 'density_medium' },
        { label: 'Data Thresholding', value: 'data_thresholding' },
        { label: 'View Comfy', value: 'view_comfy_alt' },
        { label: 'View Compact', value: 'view_compact_alt' },
        { label: 'Rebase', value: 'rebase' },
        { label: 'Data Check', value: 'data_check' },
        { label: 'Check', value: 'check' },
        { label: 'Right Panel Close', value: 'right_panel_close' },
        { label: 'Toolbar', value: 'toolbar' },
        { label: 'User List', value: 'patient_list' },
        { label: 'Tabs', value: 'tabs' },
        { label: 'Single Tab', value: 'tab' },
        { label: 'Shelf Position', value: 'shelf_position' },
        { label: 'Call', value: 'call' },
        { label: 'Bookmark', value: 'bookmark' },
        { label: 'Map', value: 'map' },
        { label: 'Book', value: 'book' },
        { label: 'Box', value: 'box' },
        { label: 'Lock', value: 'lock' },
        { label: 'Star', value: 'star' },
        { label: 'Menu', value: 'menu' },
        { label: 'School', value: 'school' },
        { label: 'Calendar', value: 'calendar_month' },
        { label: 'Circle', value: 'circle' },
        { label: 'Home', value: 'home' },
        { label: 'Bulleted List', value: 'format_list_bulleted' },
        { label: 'Database', value: 'database' },
        { label: 'View Timeline', value: 'view_timeline' },
        { label: 'Settings Account Box', value: 'settings_account_box' },
        { label: 'Iframe', value: 'iframe' },
        { label: 'Bottom Panel Close', value: 'bottom_panel_close' },
        { label: 'Bubbles', value: 'bubbles' },
        { label: 'Task', value: 'task' },
        { label: 'Quiz', value: 'quiz' },
        { label: 'Contact Mail', value: 'contact_mail' },
        { label: 'File Copy', value: 'file_copy' },
        { label: 'Post Add', value: 'post_add' },
        { label: 'Import Contacts', value: 'import_contacts' },
        { label: 'Pending Actions', value: 'pending_actions' },
        { label: 'History Edu', value: 'history_edu' },
        { label: 'Space Dashboard', value: 'space_dashboard' },
        { label: 'Dashboard', value: 'dashboard' },
        { label: 'Table Chart', value: 'table_chart' },
        { label: 'Edit Document', value: 'edit_document' },
    ];
    static defaultVariables = [
        { name: 'User_Name' },
        { name: 'Email_Id' },
        { name: 'Referral_Id' },
        { name: 'Attachment_Details' },
    ];
    static onInput(event, fieldtype, label, required) {
        const validationConfig = [
            {
                type: 'username',
                pattern: {
                    regex: /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ' -]*$/,
                    errormessage: 'Allowed input - Alphabetic, accented letters, apostrophe, and hyphens.',
                    errormessage2: 'First character should be Alphabetic or accented letters.'
                },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'description',
                length: { maxlength: '500', errormessage: 'Input limit - 500 characters.' }
            },
            {
                type: 'name',
                pattern: { regex: /^[a-zA-Z0-9-_ ]+$/, errormessage: 'Allowed input - Alpha numeric, hyphen, underscore and space.' },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'email',
                pattern: { regex: /^[a-zA-Z0-9_]+(?:[.+][a-zA-Z0-9_]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errormessage: 'Valid Email ID is Required' },
                length: { maxlength: '200', errormessage: 'Input limit - 200 characters.' }
            }
        ];
        const config = validationConfig.find(item => item.type === fieldtype);
        const value = event.target.value;
        if (value) {
            if (config) {
                if (config.pattern) {
                    const pattern = new RegExp(config.pattern.regex);
                    if (fieldtype == 'username') {
                        const firstLetterValid = /^[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(value.charAt(0));
                        if (!firstLetterValid) {
                            return config.pattern.errormessage2;
                        }
                    }
                    const patternValid = pattern.test(value);
                    if (!patternValid) {
                        return config.pattern.errormessage;
                    }
                }
                const maxLength = parseInt(config.length.maxlength, 10);
                if (value.length > maxLength) {
                    return `${label} ${config.length.errormessage}`;
                }
            }
        }
        else {
            if (required) {
                return `${label} is Required`;
            }
        }
        /* No error */
        return null;
    }
    static userTimeOut = 31;
    static userPing = 120;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL2VudGl0aWVzL2FwcC1jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxrQkFBa0IsR0FBRyx1QkFBdUIsQ0FBQztBQUNuRCxNQUFNLE9BQU8sWUFBWTtJQUNoQixNQUFNLENBQUMsWUFBWSxHQUFHLHNCQUFzQixDQUFDO0lBQzdDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7SUFDbkMsTUFBTSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQztJQUMzQyxNQUFNLENBQUMsVUFBVSxHQUFHLHFEQUFxRCxDQUFDO0lBQzFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsd0NBQXdDLENBQUM7SUFDN0QsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNwQyxNQUFNLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQztJQUN0QyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixNQUFNLENBQUMsY0FBYyxHQUFFLGFBQWEsQ0FBQztJQUNyQyxNQUFNLENBQUMsUUFBUSxHQUFHLHlEQUF5RCxDQUFDO0lBQzVFLE1BQU0sQ0FBQyxjQUFjLEdBQUcscUNBQXFDLENBQUM7SUFDOUQsTUFBTSxDQUFDLGFBQWEsR0FBRywyREFBMkQsQ0FBQztJQUNuRixNQUFNLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztJQUNqQyxNQUFNLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxzREFBc0QsQ0FBQztJQUNyRixNQUFNLENBQUMsV0FBVyxHQUFHLDJFQUEyRSxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBMEQ7SUFDakYsTUFBTSxDQUFDLGdC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M0IsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7NEJBQ3JCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7eUJBQ3JDO3FCQUNGO29CQUVELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQ2pCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7cUJBQ3BDO2lCQUNGO2dCQUVELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtvQkFDNUIsT0FBTyxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNqRDthQUNGO1NBRUY7YUFBTTtZQUNMLElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sR0FBRyxLQUFLLGNBQWMsQ0FBQzthQUMvQjtTQUNGO1FBQ0QsY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09ORklHVVJBVE9SX1RJVExFID0gJ0xvdyBDb2RlIENvbmZpZ3VyYXRvcic7XHJcbmV4cG9ydCBjbGFzcyBBcHBDb25zdGFudHMge1xyXG4gIHB1YmxpYyBzdGF0aWMgY2F0ZWdvcnluYW1lID0gJ1JFRkVSUkFMX0FUVEFDSE1FTlRTJztcclxuICBwdWJsaWMgc3RhdGljIGNoYW5nZVBhc3N3b3JkVGV4dCA9ICd0ZXh0JztcclxuICBwdWJsaWMgc3RhdGljIGNoYW5nZVBhc3N3b3JkUGFzc3dvcmQgPSAncGFzc3dvcmQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhFbWFpbCA9ICdeWzAtOWEtekEtWi4tXStbQF1bMC05YS16QS1aLi1dK1suXVswLTlhLXpBLVpdezIsfSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhQaG9uZSA9ICdeWzItOV1bMC05XXsyfS1bMi05XVswLTldezJ9LVswLTldezR9JCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleE5hbWUgPSAnXlthLXpBLVpdezIsfSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhaaXBjb2RlID0gJ15bM11bMC05XXs0fSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgbXVsdGlWaWV3ID0gJ01WJztcclxuICBwdWJsaWMgc3RhdGljIG11bHRpVmlld1JvdXRlID0nbWFzdGVyLXZpZXcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhTc24gPSAnXig/ITY2NnwwMDB8OVxcXFxkezJ9KVxcXFxkezN9LSg/ITAwKVxcXFxkezJ9LSg/ITB7NH0pXFxcXGR7NH0kJztcclxuICBwdWJsaWMgc3RhdGljIHJlZ2V4U3NuRGlnaXRzID0gL14oXFxkezN9LT9cXGR7Mn0tP1xcZHs0fXxYWFgtWFgtWFhYWCkkLztcclxuICBwdWJsaWMgc3RhdGljIHJlZ2V4Rm9yUGhvbmUgPSAnL15bKClzLV0qKGR7OCwxMn18ZHszfVspcy1dKmR7M31bcy1dKmR7NH18ZHsxMH0pWygpcy1dKiQvJztcclxuICBwdWJsaWMgc3RhdGljIGZvcm1hdERhdGUgPSAnTU0vREQvWVlZWSc7XHJcbiAgcHVibGljIHN0YXRpYyBjYW1hbGl6ZSA9ICcvW15hLXpBLVowLTldKyguKS9nJztcclxuICBwdWJsaWMgc3RhdGljIGNoZWNTY2hlbWFFeGlzdFF1ZXJ5ID0gJy8oPzw9KGFzfEFTKXMpKFwiKlthLXpBLVpzI35fXSpcIiopKD89LHwoZnJvbXxGUk9NKSkvZyc7XHJcbiAgcHVibGljIHN0YXRpYyBVUkxWQUxJREFURSA9ICcvKGZ0cHxodHRwfGh0dHBzKTovLyh3Kzp7MCwxfXcqQCk/KFMrKSg6WzAtOV0rKT8oL3wvKFt3IyE6Lj8rPSYlQCEtL10pKT8vJztcclxuICBwdWJsaWMgc3RhdGljIEV2ZW50VVJMVmFsaWRhdGU6ICcoaHR0cHM/Oi8vKT8oW1xcXFxkYS16Li1dKylcXFxcLihbYS16Ll17Miw2fSlbL1xcXFx3IC4tXSovPyc7XHJcbiAgcHVibGljIHN0YXRpYyBSZWdleFVybENvbnN0YW50ID1cclxuICAgICcvXigoW148PigpW11cXFxcLiw7OnNAXCJdKyguW148PigpW11cXFxcLiw7OnNAXCJdKykqKXwoXCIuK1wiKSlAKChbWzAtOV17MSwzfS5bMC05XXsxLDN9LlswLTldezEsM30uWzAtOV17MSwzfV0pfCgoW2EtekEtWi0wLTldKy4pK1thLXpBLVpdezIsfSkpJC8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgc3RhdHVzQ29tbWVudHMgPSAnLzxbXj5dKj4vZyc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleEVtYWlsVHlwZTIgPSAnXlteXFxcXHNAXStAW15cXFxcc0BdK1xcXFwuW15cXFxcc0BdezIsfSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgZXJyb3JNZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nISc7XHJcbiAgcHVibGljIHN0YXRpYyBhY2Nlc3NEZW5pZWRNZXNzYWdlID0gJ0FjY2VzcyBEZW5pZWQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgc2Vzc2lvbkV4cGlyZWQgPSAnWW91ciBzZXNzaW9uIGlzIGV4cGlyZWQuJztcclxuICBwdWJsaWMgc3RhdGljIHByb3ZpZGVyRXJyb3IgPSAnVW5hYmxlIHRvIFByb2Nlc3MgdGhlIFJlcXVlc3QgQ29udGFjdCBzdXBwb3J0JztcclxuICBwdWJsaWMgc3RhdGljIHZlcmlmaWNhdGlvblN1Y2Nlc3MgPSAnVmVyaWZpY2F0aW9uIGNvZGUgc2VudCBzdWNjZXNzZnVsbHknO1xyXG4gIHB1YmxpYyBzdGF0aWMgZW1haWxWZXJpZmljYXRpb25TdWNjZXNzID0gJ0xpbmsgc2VudCBzdWNjZXNzZnVsbHkuIFBsZWFzZSBjaGVjayB5b3VyIGluYm94IGZvciBmdXJ0aGVyIGluc3RydWN0aW9ucyc7XHJcbiAgcHVibGljIHN0YXRpYyBwYXNzd29yZE5vdE1hdGNoID0gJ1Bhc3N3b3JkIGRvZXMgbm90IG1hdGNoJztcclxuICBwdWJsaWMgc3RhdGljIHZhaWxkRW1haWwgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVxdWlyZWRGaWVsZHMgPSAnUGxlYXNlIGZpbGwgYWxsIHJlcXVpcmVkIGZpZWxkcyEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcGFnZXMgPSBbXHJcbiAgICB7IHBhZ2U6ICdhZG1pbicsIHRpdGxlOiAnVXNlciBNYW5hZ2VtZW50JyB9LFxyXG4gICAgeyBwYWdlOiAnaW50YWtlLXdvcmtlcicsIHRpdGxlOiAnRGFzaGJvYXJkJyB9LFxyXG4gICAgeyBwYWdlOiAnbWljcm9zdHJhdGVneScsIHRpdGxlOiAnQW5hbHl0aWNzJyB9LFxyXG4gICAgeyBwYWdlOiAnZm9ybS1idWlsZGVyJywgdGl0bGU6ICdMb3cgQ29kZSBDb25maWd1cmF0b3InIH0sXHJcbiAgICB7IHBhZ2U6ICd0YWItb3JkZXInLCB0aXRsZTogJ0xvdyBDb2RlIENvbmZpZ3VyYXRvcicgfSxcclxuICAgIHsgcGFnZTogJ3dvcmtmbG93JywgdGl0bGU6ICdMb3cgQ29kZSBDb25maWd1cmF0b3InIH0sXHJcbiAgICB7IHBhZ2U6ICdkb2N1bWVudC1wYWNrZXRpemF0aW9uJywgdGl0bGU6ICdEb2N1bWVudCBQYWNrZXRpemF0aW9uJyB9LFxyXG4gICAgeyBwYWdlOiAnZW1haWwtdGVtcGxhdGUnLCB0aXRsZTogJ0VtYWlsIFRlbXBsYXRlJyB9LFxyXG4gICAgeyBwYWdlOiAnY2hhdCcsIHRpdGxlOiAnQ2hhdCcgfSxcclxuICAgIHsgcGFnZTogJ2hlbHAtZGVzaycsIHRpdGxlOiAnSGVscCcgfSxcclxuICAgIHsgcGFnZTogJ29jci12YWxpZGF0aW9uJywgdGl0bGU6ICdSZWZlcnJhbHMnIH0sXHJcbiAgICB7IHBhZ2U6ICdldmVudC1zY2hlZHVsZXInLCB0aXRsZTogJ0V2ZW50IFNjaGVkdWxlcicgfSxcclxuICAgIHsgcGFnZTogJ2NvbmZpZy1kYXNoYm9hcmQnLCB0aXRsZTogJ0NvbmZpZyBEYXNoYm9hcmQnIH0sXHJcbiAgICB7IHBhZ2U6ICdmb3JtcycsIHRpdGxlOiAnRm9ybXMgJyB9LFxyXG4gICAgeyBwYWdlOiAncGFnZS1kZXNpZ24nLCB0aXRsZTogJ1BhZ2UgRGVzaWduJyB9LFxyXG4gICAgeyBwYWdlOiAnZGFzaGJvYXJkLWRlc2lnbicsIHRpdGxlOiAnRGFzaGJvYXJkIERlc2lnbicgfSxcclxuICAgIHsgcGFnZTogJ21haW4tbm90aWZpY2F0aW9uJywgdGl0bGU6ICdOb3RpZmljYXRpb24nIH0sXHJcbiAgICB7IHBhZ2U6ICdkeW5hbWljUGFnZXMnLCB0aXRsZTogJycgfSxcclxuICAgIHsgcGFnZTogJ3Byb2ZpbGUnLCB0aXRsZTogJ1Byb2ZpbGUnIH1cclxuICBdO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGVycm9yTGlzdCA9IFtcclxuICAgICdJbmNsdWRlIGF0IGxlYXN0IG9uZSBudW1iZXInLFxyXG4gICAgJ0luY2x1ZGUgYXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyJyxcclxuICAgICdJbmNsdWRlIGF0IGxlYXN0IG9uZSB1cHBlciBjYXNlIGxldHRlcicsXHJcbiAgICAnSW5jbHVkZSBhdCBsZWFzdCBvbmUgbG93ZXIgY2FzZSBsZXR0ZXInLFxyXG4gICAgJ0JlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBpbiBsZW5ndGgnLFxyXG4gICAgJ1Nob3VsZCBub3QgZXhjZWVkIHNpeHRlZW4gKDE2KSBjaGFyYWN0ZXJzJyxcclxuICAgICdTcGFjZSBjaGFyYWN0ZXJzIGFyZSBpbnZhbGlkJ1xyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVmZXJyYWxTb3VyY2UgPSBbXHJcbiAgICB7IHZhbHVlOiAnbGF3IGVuZm9yY2VtZW50JywgbGFiZWw6ICdMYXcgRW5mb3JjZW1lbnQnIH0sXHJcbiAgICB7IHZhbHVlOiAnY2l0aXplbiBjb21wbGFpbnQnLCBsYWJlbDogJ0NpdGl6ZW4gQ29tcGxhaW50JyB9XHJcbiAgXTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZU51bWJlcigpOiBhbnkge1xyXG4gICAgY29uc3QgY3J5cHRvID0gd2luZG93LmNyeXB0bztcclxuICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQzMkFycmF5KDEpO1xyXG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnJheSk7XHJcbiAgICByZXR1cm4gYXJyYXlbMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGljb25MaXN0ID0gW1xyXG4gICAgeyBsYWJlbDogJ0FwcHMnLCB2YWx1ZTogJ2FwcHMnIH0sXHJcbiAgICB7IGxhYmVsOiAnQWRtaW4gU2V0dGluZ3MnLCB2YWx1ZTogJ2FkbWluX3BhbmVsX3NldHRpbmdzJyB9LFxyXG4gICAgeyBsYWJlbDogJ0Rlc2NyaXB0aW9uJywgdmFsdWU6ICdkZXNjcmlwdGlvbicgfSxcclxuICAgIHsgbGFiZWw6ICdBbmFseXRpY3MnLCB2YWx1ZTogJ2FuYWx5dGljcycgfSxcclxuICAgIHsgbGFiZWw6ICdTZXR0aW5ncycsIHZhbHVlOiAnc2V0dGluZ3MnIH0sXHJcbiAgICB7IGxhYmVsOiAnTGlicmFyeScsIHZhbHVlOiAnbGlicmFyeV9ib29rcycgfSxcclxuICAgIHsgbGFiZWw6ICdMb25nIFJlY2VpcHQnLCB2YWx1ZTogJ3JlY2VpcHRfbG9uZycgfSxcclxuICAgIHsgbGFiZWw6ICdMaXN0JywgdmFsdWU6ICdsaXN0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0xheWVycycsIHZhbHVlOiAnbGF5ZXJzJyB9LFxyXG4gICAgeyBsYWJlbDogJ1N1bW1hcml6ZScsIHZhbHVlOiAnc3VtbWFyaXplJyB9LFxyXG4gICAgeyBsYWJlbDogJ0ZlYXR1cmVkIExpc3QnLCB2YWx1ZTogJ2ZlYXR1cmVkX3BsYXlfbGlzdCcgfSxcclxuICAgIHsgbGFiZWw6ICdDb250cmFjdCcsIHZhbHVlOiAnY29udHJhY3QnIH0sXHJcbiAgICB7IGxhYmVsOiAnTGlzdCBBZGQnLCB2YWx1ZTogJ2xpc3RfYWx0X2FkZCcgfSxcclxuICAgIHsgbGFiZWw6ICdJbmFjdGl2ZSBPcmRlcicsIHZhbHVlOiAnaW5hY3RpdmVfb3JkZXInIH0sXHJcbiAgICB7IGxhYmVsOiAnUmVjZWlwdCcsIHZhbHVlOiAncmVjZWlwdCcgfSxcclxuICAgIHsgbGFiZWw6ICdEYXRhc2V0JywgdmFsdWU6ICdkYXRhc2V0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0RlbnNpdHknLCB2YWx1ZTogJ2RlbnNpdHlfbWVkaXVtJyB9LFxyXG4gICAgeyBsYWJlbDogJ0RhdGEgVGhyZXNob2xkaW5nJywgdmFsdWU6ICdkYXRhX3RocmVzaG9sZGluZycgfSxcclxuICAgIHsgbGFiZWw6ICdWaWV3IENvbWZ5JywgdmFsdWU6ICd2aWV3X2NvbWZ5X2FsdCcgfSxcclxuICAgIHsgbGFiZWw6ICdWaWV3IENvbXBhY3QnLCB2YWx1ZTogJ3ZpZXdfY29tcGFjdF9hbHQnIH0sXHJcbiAgICB7IGxhYmVsOiAnUmViYXNlJywgdmFsdWU6ICdyZWJhc2UnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGF0YSBDaGVjaycsIHZhbHVlOiAnZGF0YV9jaGVjaycgfSxcclxuICAgIHsgbGFiZWw6ICdDaGVjaycsIHZhbHVlOiAnY2hlY2snIH0sXHJcbiAgICB7IGxhYmVsOiAnUmlnaHQgUGFuZWwgQ2xvc2UnLCB2YWx1ZTogJ3JpZ2h0X3BhbmVsX2Nsb3NlJyB9LFxyXG4gICAgeyBsYWJlbDogJ1Rvb2xiYXInLCB2YWx1ZTogJ3Rvb2xiYXInIH0sXHJcbiAgICB7IGxhYmVsOiAnVXNlciBMaXN0JywgdmFsdWU6ICdwYXRpZW50X2xpc3QnIH0sXHJcbiAgICB7IGxhYmVsOiAnVGFicycsIHZhbHVlOiAndGFicycgfSxcclxuICAgIHsgbGFiZWw6ICdTaW5nbGUgVGFiJywgdmFsdWU6ICd0YWInIH0sXHJcbiAgICB7IGxhYmVsOiAnU2hlbGYgUG9zaXRpb24nLCB2YWx1ZTogJ3NoZWxmX3Bvc2l0aW9uJyB9LFxyXG4gICAgeyBsYWJlbDogJ0NhbGwnLCB2YWx1ZTogJ2NhbGwnIH0sXHJcbiAgICB7IGxhYmVsOiAnQm9va21hcmsnLCB2YWx1ZTogJ2Jvb2ttYXJrJyB9LFxyXG4gICAgeyBsYWJlbDogJ01hcCcsIHZhbHVlOiAnbWFwJyB9LFxyXG4gICAgeyBsYWJlbDogJ0Jvb2snLCB2YWx1ZTogJ2Jvb2snIH0sXHJcbiAgICB7IGxhYmVsOiAnQm94JywgdmFsdWU6ICdib3gnIH0sXHJcbiAgICB7IGxhYmVsOiAnTG9jaycsIHZhbHVlOiAnbG9jaycgfSxcclxuICAgIHsgbGFiZWw6ICdTdGFyJywgdmFsdWU6ICdzdGFyJyB9LFxyXG4gICAgeyBsYWJlbDogJ01lbnUnLCB2YWx1ZTogJ21lbnUnIH0sXHJcbiAgICB7IGxhYmVsOiAnU2Nob29sJywgdmFsdWU6ICdzY2hvb2wnIH0sXHJcbiAgICB7IGxhYmVsOiAnQ2FsZW5kYXInLCB2YWx1ZTogJ2NhbGVuZGFyX21vbnRoJyB9LFxyXG4gICAgeyBsYWJlbDogJ0NpcmNsZScsIHZhbHVlOiAnY2lyY2xlJyB9LFxyXG4gICAgeyBsYWJlbDogJ0hvbWUnLCB2YWx1ZTogJ2hvbWUnIH0sXHJcbiAgICB7IGxhYmVsOiAnQnVsbGV0ZWQgTGlzdCcsIHZhbHVlOiAnZm9ybWF0X2xpc3RfYnVsbGV0ZWQnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGF0YWJhc2UnLCB2YWx1ZTogJ2RhdGFiYXNlJyB9LFxyXG4gICAgeyBsYWJlbDogJ1ZpZXcgVGltZWxpbmUnLCB2YWx1ZTogJ3ZpZXdfdGltZWxpbmUnIH0sXHJcbiAgICB7IGxhYmVsOiAnU2V0dGluZ3MgQWNjb3VudCBCb3gnLCB2YWx1ZTogJ3NldHRpbmdzX2FjY291bnRfYm94JyB9LFxyXG4gICAgeyBsYWJlbDogJ0lmcmFtZScsIHZhbHVlOiAnaWZyYW1lJyB9LFxyXG4gICAgeyBsYWJlbDogJ0JvdHRvbSBQYW5lbCBDbG9zZScsIHZhbHVlOiAnYm90dG9tX3BhbmVsX2Nsb3NlJyB9LFxyXG4gICAgeyBsYWJlbDogJ0J1YmJsZXMnLCB2YWx1ZTogJ2J1YmJsZXMnIH0sXHJcbiAgICB7IGxhYmVsOiAnVGFzaycsIHZhbHVlOiAndGFzaycgfSxcclxuICAgIHsgbGFiZWw6ICdRdWl6JywgdmFsdWU6ICdxdWl6JyB9LFxyXG4gICAgeyBsYWJlbDogJ0NvbnRhY3QgTWFpbCcsIHZhbHVlOiAnY29udGFjdF9tYWlsJyB9LFxyXG4gICAgeyBsYWJlbDogJ0ZpbGUgQ29weScsIHZhbHVlOiAnZmlsZV9jb3B5JyB9LFxyXG4gICAgeyBsYWJlbDogJ1Bvc3QgQWRkJywgdmFsdWU6ICdwb3N0X2FkZCcgfSxcclxuICAgIHsgbGFiZWw6ICdJbXBvcnQgQ29udGFjdHMnLCB2YWx1ZTogJ2ltcG9ydF9jb250YWN0cycgfSxcclxuICAgIHsgbGFiZWw6ICdQZW5kaW5nIEFjdGlvbnMnLCB2YWx1ZTogJ3BlbmRpbmdfYWN0aW9ucycgfSxcclxuICAgIHsgbGFiZWw6ICdIaXN0b3J5IEVkdScsIHZhbHVlOiAnaGlzdG9yeV9lZHUnIH0sXHJcbiAgICB7IGxhYmVsOiAnU3BhY2UgRGFzaGJvYXJkJywgdmFsdWU6ICdzcGFjZV9kYXNoYm9hcmQnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGFzaGJvYXJkJywgdmFsdWU6ICdkYXNoYm9hcmQnIH0sXHJcbiAgICB7IGxhYmVsOiAnVGFibGUgQ2hhcnQnLCB2YWx1ZTogJ3RhYmxlX2NoYXJ0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0VkaXQgRG9jdW1lbnQnLCB2YWx1ZTogJ2VkaXRfZG9jdW1lbnQnIH0sXHJcbiAgXVxyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFZhcmlhYmxlcyA9IFtcclxuICAgIHsgbmFtZTogJ1VzZXJfTmFtZScgfSxcclxuICAgIHsgbmFtZTogJ0VtYWlsX0lkJyB9LFxyXG4gICAgeyBuYW1lOiAnUmVmZXJyYWxfSWQnIH0sXHJcbiAgICB7IG5hbWU6ICdBdHRhY2htZW50X0RldGFpbHMnIH0sXHJcbiAgXVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uSW5wdXQoZXZlbnQ6IGFueSwgZmllbGR0eXBlOiBhbnksIGxhYmVsOiBhbnksIHJlcXVpcmVkOiBib29sZWFuKSB7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGlvbkNvbmZpZyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3VzZXJuYW1lJyxcclxuICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICByZWdleDogL15bYS16QS1aw4Atw5bDmC3DtsO4LcO/XVthLXpBLVrDgC3DlsOYLcO2w7gtw78nIC1dKiQvLFxyXG4gICAgICAgICAgICAgIGVycm9ybWVzc2FnZTogJ0FsbG93ZWQgaW5wdXQgLSBBbHBoYWJldGljLCBhY2NlbnRlZCBsZXR0ZXJzLCBhcG9zdHJvcGhlLCBhbmQgaHlwaGVucy4nLFxyXG4gICAgICAgICAgICAgIGVycm9ybWVzc2FnZTI6ICdGaXJzdCBjaGFyYWN0ZXIgc2hvdWxkIGJlIEFscGhhYmV0aWMgb3IgYWNjZW50ZWQgbGV0dGVycy4nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGVuZ3RoOiB7IG1heGxlbmd0aDogJzEwMCcsIGVycm9ybWVzc2FnZTogJ0lucHV0IGxpbWl0IC0gMTAwIGNoYXJhY3RlcnMuJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICBsZW5ndGg6IHsgbWF4bGVuZ3RoOiAnNTAwJywgZXJyb3JtZXNzYWdlOiAnSW5wdXQgbGltaXQgLSA1MDAgY2hhcmFjdGVycy4nIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ25hbWUnLFxyXG4gICAgICAgICAgcGF0dGVybjogeyByZWdleDogL15bYS16QS1aMC05LV8gXSskLywgZXJyb3JtZXNzYWdlOiAnQWxsb3dlZCBpbnB1dCAtIEFscGhhIG51bWVyaWMsIGh5cGhlbiwgdW5kZXJzY29yZSBhbmQgc3BhY2UuJyB9LFxyXG4gICAgICAgICAgbGVuZ3RoOiB7IG1heGxlbmd0aDogJzEwMCcsIGVycm9ybWVzc2FnZTogJ0lucHV0IGxpbWl0IC0gMTAwIGNoYXJhY3RlcnMuJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgICAgICBwYXR0ZXJuOiB7IHJlZ2V4OiAvXlthLXpBLVowLTlfXSsoPzpbLitdW2EtekEtWjAtOV9dKykqQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC8sIGVycm9ybWVzc2FnZTogJ1ZhbGlkIEVtYWlsIElEIGlzIFJlcXVpcmVkJyB9LFxyXG4gICAgICAgICAgbGVuZ3RoOiB7IG1heGxlbmd0aDogJzIwMCcsIGVycm9ybWVzc2FnZTogJ0lucHV0IGxpbWl0IC0gMjAwIGNoYXJhY3RlcnMuJyB9XHJcbiAgICAgIH1cclxuICBdO1xyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRpb25Db25maWcuZmluZChpdGVtID0+IGl0ZW0udHlwZSA9PT0gZmllbGR0eXBlKTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcblxyXG4gICAgICBpZiAoY29uZmlnKSB7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcucGF0dGVybikge1xyXG4gICAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoY29uZmlnLnBhdHRlcm4ucmVnZXgpO1xyXG5cclxuICAgICAgICAgIGlmIChmaWVsZHR5cGUgPT0gJ3VzZXJuYW1lJykge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdExldHRlclZhbGlkID0gL15bYS16QS1aw4Atw5bDmC3DtsO4LcO/XS8udGVzdCh2YWx1ZS5jaGFyQXQoMCkpO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0TGV0dGVyVmFsaWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLnBhdHRlcm4uZXJyb3JtZXNzYWdlMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHBhdHRlcm5WYWxpZCA9IHBhdHRlcm4udGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgICBpZiAoIXBhdHRlcm5WYWxpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLnBhdHRlcm4uZXJyb3JtZXNzYWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gcGFyc2VJbnQoY29uZmlnLmxlbmd0aC5tYXhsZW5ndGgsMTApO1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBgJHtsYWJlbH0gJHtjb25maWcubGVuZ3RoLmVycm9ybWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgIHJldHVybiBgJHtsYWJlbH0gaXMgUmVxdWlyZWRgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBObyBlcnJvciAqL1xyXG4gICAgcmV0dXJuIG51bGw7IFxyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHVzZXJUaW1lT3V0ID0gMzE7XHJcbiAgcHVibGljIHN0YXRpYyB1c2VyUGluZyA9IDEyMDtcclxufVxyXG4iXX0=