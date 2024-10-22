export class MailTemplatePopConfig {
    static EndPoint = {
        Email: {
            PacketListing: '/solution/packetization/packet',
            ValidateReferral1: '/ref/referral/',
            ValidateReferral2: '/validate',
            Mailattachments: '/solution/packetization/packet/mailattachments',
            GetAllEmailTemplateCategories: '/solution/emailtemplate/getAllEmailTemplateCategories',
            GetEmailTemplateList: '/solution/emailtemplate/category/',
            getReferralSuggestions: '/ref/referral/getReferralSuggestions/',
            mailattachmentsValidation: '/solution/packetization/packet/mailattachments/validate',
            emailtemplateList: '/solution/emailtemplate/channel/EMAIL'
        },
        pages: {
            getAllPages: '/platform/page-designer/page/organization/{orgid}/pageTypes',
            responseSuggestions: '/solution/formresponse/suggestions'
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbC10ZW1wbGF0ZS11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQHNoYXJlZC9tYWlsLXRlbXBsYXRlL3NlcnZpY2VzL21haWwtdGVtcGxhdGUtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8scUJBQXFCO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsS0FBSyxFQUFFO1lBQ0wsYUFBYSxFQUFFLGdDQUFnQztZQUMvQyxpQkFBaUIsRUFBRSxnQkFBZ0I7WUFDbkMsaUJBQWlCLEVBQUUsV0FBVztZQUM5QixlQUFlLEVBQUUsZ0RBQWdEO1lBQ2pFLDZCQUE2QixFQUFFLHVEQUF1RDtZQUN0RixvQkFBb0IsRUFBRSxtQ0FBbUM7WUFDekQsc0JBQXNCLEVBQUUsdUNBQXVDO1lBQy9ELHlCQUF5QixFQUFFLHlEQUF5RDtZQUNwRixpQkFBaUIsRUFBRSx1Q0FBdUM7U0FDM0Q7UUFDRCxLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUUsNkRBQTZEO1lBQzFFLG1CQUFtQixFQUFFLG9DQUFvQztTQUMxRDtLQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWFpbFRlbXBsYXRlUG9wQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgRW1haWw6IHtcclxuICAgICAgUGFja2V0TGlzdGluZzogJy9zb2x1dGlvbi9wYWNrZXRpemF0aW9uL3BhY2tldCcsXHJcbiAgICAgIFZhbGlkYXRlUmVmZXJyYWwxOiAnL3JlZi9yZWZlcnJhbC8nLFxyXG4gICAgICBWYWxpZGF0ZVJlZmVycmFsMjogJy92YWxpZGF0ZScsXHJcbiAgICAgIE1haWxhdHRhY2htZW50czogJy9zb2x1dGlvbi9wYWNrZXRpemF0aW9uL3BhY2tldC9tYWlsYXR0YWNobWVudHMnLFxyXG4gICAgICBHZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllczogJy9zb2x1dGlvbi9lbWFpbHRlbXBsYXRlL2dldEFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzJyxcclxuICAgICAgR2V0RW1haWxUZW1wbGF0ZUxpc3Q6ICcvc29sdXRpb24vZW1haWx0ZW1wbGF0ZS9jYXRlZ29yeS8nLFxyXG4gICAgICBnZXRSZWZlcnJhbFN1Z2dlc3Rpb25zOiAnL3JlZi9yZWZlcnJhbC9nZXRSZWZlcnJhbFN1Z2dlc3Rpb25zLycsXHJcbiAgICAgIG1haWxhdHRhY2htZW50c1ZhbGlkYXRpb246ICcvc29sdXRpb24vcGFja2V0aXphdGlvbi9wYWNrZXQvbWFpbGF0dGFjaG1lbnRzL3ZhbGlkYXRlJyxcclxuICAgICAgZW1haWx0ZW1wbGF0ZUxpc3Q6ICcvc29sdXRpb24vZW1haWx0ZW1wbGF0ZS9jaGFubmVsL0VNQUlMJ1xyXG4gICAgfSxcclxuICAgIHBhZ2VzOiB7XHJcbiAgICAgIGdldEFsbFBhZ2VzOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ2lkfS9wYWdlVHlwZXMnLFxyXG4gICAgICByZXNwb25zZVN1Z2dlc3Rpb25zOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS9zdWdnZXN0aW9ucydcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==