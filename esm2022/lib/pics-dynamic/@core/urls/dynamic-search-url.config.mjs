export class DynamicSearchURL {
    static EndPoints = {
        userConfig: {
            getUserConfig: '/org/user/getUserPreference/PAGE/',
            saveUserConfig: '/org/user/saveUserPreference',
            getStaticGridConfig: '/org/user/getUserPreference/STATIC_GRID/{id}'
        },
        documents: {
            generateExcel: '/document/exportExcel',
            generatePDF: '/document/exportPdf'
        },
        notification: {
            sendMail: 'communication/sendmail'
        },
        report: {
            schedulertrigger: '/schedulerreport/trigger/'
        },
        pageConfig: {
            pageVersion: '/platform/page-designer/pageversion',
            page: '/platform/page-designer/page',
            postApiurl: '/api/pagedata/'
        },
        formResponse: {
            get: '/solution/formresponse/getByPageId/{pageid}',
            delete: '/solution/formresponse/{id}/pageid',
            update: '/solution/formresponse/{id}/pageid',
            deleteRevoke: '/solution/formresponse/{id}/revokeDeleteByAdmin',
            updateByIdAndPageIdWithReason: '/solution/formresponse/{id}/updateByIdAndPageIdWithReason',
            checkDeleteStatus: '/solution/formresponse/checkDeleteStatus/{pageid}/{id}?name={primaryobject}',
            checkEditStatus: '/solution/formresponse/checkEditStatus/{pageid}/{id}'
        },
        provider: {
            providerData: '/provider'
        },
        criteria: {
            save: '/solution/dynamicsearchcriteria/save',
            getByPageId: '/solution/dynamicsearchcriteria/list/{pageId}'
        },
        rowversion: {
            copy: '/solution/dynamicsearch/rowversion'
        },
        checkRules: {
            rules: '/solution/dynamicsearch/checkRules'
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWFyY2gtdXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3VybHMvZHluYW1pYy1zZWFyY2gtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sZ0JBQWdCO0lBQ3BCLE1BQU0sQ0FBQyxTQUFTLEdBQUc7UUFDeEIsVUFBVSxFQUFFO1lBQ1YsYUFBYSxFQUFFLG1DQUFtQztZQUNsRCxjQUFjLEVBQUUsOEJBQThCO1lBQzlDLG1CQUFtQixFQUFFLDhDQUE4QztTQUNwRTtRQUNELFNBQVMsRUFBRTtZQUNULGFBQWEsRUFBRSx1QkFBdUI7WUFDdEMsV0FBVyxFQUFFLHFCQUFxQjtTQUNuQztRQUNELFlBQVksRUFBRTtZQUNaLFFBQVEsRUFBRSx3QkFBd0I7U0FDbkM7UUFDRCxNQUFNLEVBQUU7WUFDTixnQkFBZ0IsRUFBRSwyQkFBMkI7U0FDOUM7UUFDRCxVQUFVLEVBQUU7WUFDVixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELElBQUksRUFBRSw4QkFBOEI7WUFDcEMsVUFBVSxFQUFFLGdCQUFnQjtTQUM3QjtRQUNELFlBQVksRUFBRTtZQUNaLEdBQUcsRUFBRSw2Q0FBNkM7WUFDbEQsTUFBTSxFQUFFLG9DQUFvQztZQUM1QyxNQUFNLEVBQUUsb0NBQW9DO1lBQzVDLFlBQVksRUFBRSxpREFBaUQ7WUFDL0QsNkJBQTZCLEVBQUUsMkRBQTJEO1lBQzFGLGlCQUFpQixFQUFFLDZFQUE2RTtZQUNoRyxlQUFlLEVBQUUsc0RBQXNEO1NBQ3hFO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsWUFBWSxFQUFFLFdBQVc7U0FDMUI7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsc0NBQXNDO1lBQzVDLFdBQVcsRUFBRSwrQ0FBK0M7U0FDN0Q7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsb0NBQW9DO1NBQzNDO1FBQ0QsVUFBVSxFQUFDO1lBQ1QsS0FBSyxFQUFFLG9DQUFvQztTQUM1QztLQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHluYW1pY1NlYXJjaFVSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICB1c2VyQ29uZmlnOiB7XHJcbiAgICAgIGdldFVzZXJDb25maWc6ICcvb3JnL3VzZXIvZ2V0VXNlclByZWZlcmVuY2UvUEFHRS8nLFxyXG4gICAgICBzYXZlVXNlckNvbmZpZzogJy9vcmcvdXNlci9zYXZlVXNlclByZWZlcmVuY2UnLFxyXG4gICAgICBnZXRTdGF0aWNHcmlkQ29uZmlnOiAnL29yZy91c2VyL2dldFVzZXJQcmVmZXJlbmNlL1NUQVRJQ19HUklEL3tpZH0nXHJcbiAgICB9LFxyXG4gICAgZG9jdW1lbnRzOiB7XHJcbiAgICAgIGdlbmVyYXRlRXhjZWw6ICcvZG9jdW1lbnQvZXhwb3J0RXhjZWwnLFxyXG4gICAgICBnZW5lcmF0ZVBERjogJy9kb2N1bWVudC9leHBvcnRQZGYnXHJcbiAgICB9LFxyXG4gICAgbm90aWZpY2F0aW9uOiB7XHJcbiAgICAgIHNlbmRNYWlsOiAnY29tbXVuaWNhdGlvbi9zZW5kbWFpbCdcclxuICAgIH0sXHJcbiAgICByZXBvcnQ6IHtcclxuICAgICAgc2NoZWR1bGVydHJpZ2dlcjogJy9zY2hlZHVsZXJyZXBvcnQvdHJpZ2dlci8nXHJcbiAgICB9LFxyXG4gICAgcGFnZUNvbmZpZzoge1xyXG4gICAgICBwYWdlVmVyc2lvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2V2ZXJzaW9uJyxcclxuICAgICAgcGFnZTogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2UnLFxyXG4gICAgICBwb3N0QXBpdXJsOiAnL2FwaS9wYWdlZGF0YS8nXHJcbiAgICB9LFxyXG4gICAgZm9ybVJlc3BvbnNlOiB7XHJcbiAgICAgIGdldDogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2UvZ2V0QnlQYWdlSWQve3BhZ2VpZH0nLFxyXG4gICAgICBkZWxldGU6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL3tpZH0vcGFnZWlkJyxcclxuICAgICAgdXBkYXRlOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS97aWR9L3BhZ2VpZCcsXHJcbiAgICAgIGRlbGV0ZVJldm9rZTogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2Uve2lkfS9yZXZva2VEZWxldGVCeUFkbWluJyxcclxuICAgICAgdXBkYXRlQnlJZEFuZFBhZ2VJZFdpdGhSZWFzb246ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL3tpZH0vdXBkYXRlQnlJZEFuZFBhZ2VJZFdpdGhSZWFzb24nLFxyXG4gICAgICBjaGVja0RlbGV0ZVN0YXR1czogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2UvY2hlY2tEZWxldGVTdGF0dXMve3BhZ2VpZH0ve2lkfT9uYW1lPXtwcmltYXJ5b2JqZWN0fScsXHJcbiAgICAgIGNoZWNrRWRpdFN0YXR1czogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2UvY2hlY2tFZGl0U3RhdHVzL3twYWdlaWR9L3tpZH0nXHJcbiAgICB9LFxyXG4gICAgcHJvdmlkZXI6IHtcclxuICAgICAgcHJvdmlkZXJEYXRhOiAnL3Byb3ZpZGVyJ1xyXG4gICAgfSxcclxuICAgIGNyaXRlcmlhOiB7XHJcbiAgICAgIHNhdmU6ICcvc29sdXRpb24vZHluYW1pY3NlYXJjaGNyaXRlcmlhL3NhdmUnLFxyXG4gICAgICBnZXRCeVBhZ2VJZDogJy9zb2x1dGlvbi9keW5hbWljc2VhcmNoY3JpdGVyaWEvbGlzdC97cGFnZUlkfSdcclxuICAgIH0sXHJcbiAgICByb3d2ZXJzaW9uOiB7XHJcbiAgICAgIGNvcHk6ICcvc29sdXRpb24vZHluYW1pY3NlYXJjaC9yb3d2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIGNoZWNrUnVsZXM6e1xyXG4gICAgICBydWxlczogJy9zb2x1dGlvbi9keW5hbWljc2VhcmNoL2NoZWNrUnVsZXMnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=