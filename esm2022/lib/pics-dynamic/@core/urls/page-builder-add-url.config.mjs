export class PageBuilderAddURL {
    static EndPoints = {
        page_config: {
            pageVersion: '/platform/page-designer/pageversion/{id}',
            page: '/platform/page-designer/page',
            dbSchema: '/database/',
            page_lock: '/platform/page-designer/page/{id}/lock',
            assetByVersion: '/platform/page-designer/asset/batch/{pageid}/version/{versionid}',
            pageExist: '/platform/page-designer/page/{pagename}/{orgid}',
            pageaudit: '/platform/page-designer/page/audit/pageaudit/{id}/{id2}',
            orgPageList: '/platform/page-designer/page/organization/{orgid}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        rbac: {
            asset: {
                listByPageID: '/asset/getpagebyid',
                batch: '/asset/batch/'
            },
            organization: {
                list: '/platform/page-designer/page/organization/'
            }
        },
        report: {
            report: '/report'
        },
        db: {
            schemaList: '/database/organization/{organizationid}/{dbstring}',
            tableBySchemaName: '/database/{schema}/{dbstring}',
            relatedTableFields: '/database/{table}/{schema}/{dbstring}/related',
            columnsOfRelatedTables: '/database/{table}/related',
            fieldsOfRelatedTable: '/database/related',
            tableFields: '/database/{table}/{schema}/{dbstring}/validColumn'
        },
        attachment: {
            uploadKey: '/common/files/upload-key',
            list: '/solution/formresponse-attachment/{formid}/{responseid}',
            delete: '/solution/formresponse-attachment/{fileid}',
            downloadKey: '/file/download-key'
        }
    };
}
export class RBACINFO {
    unsubscribe() {
        throw new Error('Method not implemented.');
    }
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    chatServer;
    environment;
}
export class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLWFkZC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvdXJscy9wYWdlLWJ1aWxkZXItYWRkLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGlCQUFpQjtJQUNyQixNQUFNLENBQUMsU0FBUyxHQUFHO1FBQ3hCLFdBQVcsRUFBRTtZQUNYLFdBQVcsRUFBRSwwQ0FBMEM7WUFDdkQsSUFBSSxFQUFFLDhCQUE4QjtZQUNwQyxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsd0NBQXdDO1lBQ25ELGNBQWMsRUFBRSxrRUFBa0U7WUFDbEYsU0FBUyxFQUFFLGlEQUFpRDtZQUM1RCxTQUFTLEVBQUUseURBQXlEO1lBQ3BFLFdBQVcsRUFBRSx5R0FBeUc7U0FDdkg7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUU7Z0JBQ0wsWUFBWSxFQUFFLG9CQUFvQjtnQkFDbEMsS0FBSyxFQUFFLGVBQWU7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLDRDQUE0QzthQUNuRDtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFLFNBQVM7U0FDbEI7UUFDRCxFQUFFLEVBQUU7WUFDRixVQUFVLEVBQUUsb0RBQW9EO1lBQ2hFLGlCQUFpQixFQUFFLCtCQUErQjtZQUNsRCxrQkFBa0IsRUFBRSwrQ0FBK0M7WUFDbkUsc0JBQXNCLEVBQUUsMkJBQTJCO1lBQ25ELG9CQUFvQixFQUFFLG1CQUFtQjtZQUN6QyxXQUFXLEVBQUUsbURBQW1EO1NBQ2pFO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxJQUFJLEVBQUUseURBQXlEO1lBQy9ELE1BQU0sRUFBRSw0Q0FBNEM7WUFDcEQsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQztLQUNGLENBQUM7O0FBRUosTUFBTSxPQUFPLFFBQVE7SUFDbkIsV0FBVztRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsT0FBTyxHQUFFLEVBQUUsQ0FBQztJQUNaLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxNQUFNLENBQU87SUFDYixLQUFLLENBQU87SUFDWixVQUFVLENBQVU7SUFDcEIsV0FBVyxDQUFlO0NBQzNCO0FBQ0QsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBWSxDQUFVO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixPQUFPLENBQVU7SUFDakIsYUFBYSxDQUFVO0lBQ3ZCLGFBQWEsQ0FBVTtJQUN2QixRQUFRLENBQVM7Q0FDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZUJ1aWxkZXJBZGRVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgcGFnZV9jb25maWc6IHtcclxuICAgICAgcGFnZVZlcnNpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdldmVyc2lvbi97aWR9JyxcclxuICAgICAgcGFnZTogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2UnLFxyXG4gICAgICBkYlNjaGVtYTogJy9kYXRhYmFzZS8nLFxyXG4gICAgICBwYWdlX2xvY2s6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL3tpZH0vbG9jaycsXHJcbiAgICAgIGFzc2V0QnlWZXJzaW9uOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvYmF0Y2gve3BhZ2VpZH0vdmVyc2lvbi97dmVyc2lvbmlkfScsXHJcbiAgICAgIHBhZ2VFeGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uve3BhZ2VuYW1lfS97b3JnaWR9JyxcclxuICAgICAgcGFnZWF1ZGl0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9hdWRpdC9wYWdlYXVkaXQve2lkfS97aWQyfScsXHJcbiAgICAgIG9yZ1BhZ2VMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ2lkfT9yZXR1cm5Vc2VyUGFnZT1mYWxzZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZSdcclxuICAgIH0sXHJcbiAgICByYmFjOiB7XHJcbiAgICAgIGFzc2V0OiB7XHJcbiAgICAgICAgbGlzdEJ5UGFnZUlEOiAnL2Fzc2V0L2dldHBhZ2VieWlkJyxcclxuICAgICAgICBiYXRjaDogJy9hc3NldC9iYXRjaC8nXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZ2FuaXphdGlvbjoge1xyXG4gICAgICAgIGxpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi8nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXBvcnQ6IHtcclxuICAgICAgcmVwb3J0OiAnL3JlcG9ydCdcclxuICAgIH0sXHJcbiAgICBkYjoge1xyXG4gICAgICBzY2hlbWFMaXN0OiAnL2RhdGFiYXNlL29yZ2FuaXphdGlvbi97b3JnYW5pemF0aW9uaWR9L3tkYnN0cmluZ30nLFxyXG4gICAgICB0YWJsZUJ5U2NoZW1hTmFtZTogJy9kYXRhYmFzZS97c2NoZW1hfS97ZGJzdHJpbmd9JyxcclxuICAgICAgcmVsYXRlZFRhYmxlRmllbGRzOiAnL2RhdGFiYXNlL3t0YWJsZX0ve3NjaGVtYX0ve2Ric3RyaW5nfS9yZWxhdGVkJyxcclxuICAgICAgY29sdW1uc09mUmVsYXRlZFRhYmxlczogJy9kYXRhYmFzZS97dGFibGV9L3JlbGF0ZWQnLFxyXG4gICAgICBmaWVsZHNPZlJlbGF0ZWRUYWJsZTogJy9kYXRhYmFzZS9yZWxhdGVkJyxcclxuICAgICAgdGFibGVGaWVsZHM6ICcvZGF0YWJhc2Uve3RhYmxlfS97c2NoZW1hfS97ZGJzdHJpbmd9L3ZhbGlkQ29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGF0dGFjaG1lbnQ6IHtcclxuICAgICAgdXBsb2FkS2V5OiAnL2NvbW1vbi9maWxlcy91cGxvYWQta2V5JyxcclxuICAgICAgbGlzdDogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2UtYXR0YWNobWVudC97Zm9ybWlkfS97cmVzcG9uc2VpZH0nLFxyXG4gICAgICBkZWxldGU6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlLWF0dGFjaG1lbnQve2ZpbGVpZH0nLFxyXG4gICAgICBkb3dubG9hZEtleTogJy9maWxlL2Rvd25sb2FkLWtleSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSQkFDSU5GTyB7XHJcbiAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG4gIGFwaUhvc3QgPScnO1xyXG4gIHRva2VuS2V5ID0gJyc7XHJcbiAgb3RoZXJzPzogYW55O1xyXG4gIG9yZ0lEPzogYW55O1xyXG4gIGNoYXRTZXJ2ZXI/OiBzdHJpbmc7XHJcbiAgZW52aXJvbm1lbnQ/OiBFbnZpcm9ubWVudDtcclxufVxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIG1zdHJVc2VybmFtZT86IHN0cmluZztcclxuICBtc3RyUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgbXN0clVSTD86IHN0cmluZztcclxuICBtc3RyUHJvamVjdElEPzogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uaWQ/OiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiBzdHJpbmdcclxufVxyXG5cclxuIl19