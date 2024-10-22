export class PageBuilderURL {
    static EndPoints = {
        workflow: {
            pageByOrganization: '/platform/page-designer/page/organization/{id}',
            LockPageDesigner: '/platform/page-designer/page/{id}/duplicate',
            activatePage: '/platform/page-designer/page/{pageId}/activate',
            deactivatePage: '/platform/page-designer/page/{pageId}/deactivate'
        },
        page_config: {
            pageVersion: '/platform/page-designer/pageversion/',
            activateVersion: '/platform/page-designer/pageversion/{id}/activate',
            versionList: '/platform/page-designer/pageversion/page/{id}',
            updateVersion: '/platform/page-designer/pageversion/{id}/update',
            copyVersion: '/platform/page-designer/pageversion/{id}/create'
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXVybC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS91cmxzL3BhZ2UtYnVpbGRlci11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxjQUFjO0lBQ2xCLE1BQU0sQ0FBQyxTQUFTLEdBQUc7UUFDeEIsUUFBUSxFQUFFO1lBQ1Isa0JBQWtCLEVBQUUsZ0RBQWdEO1lBQ3BFLGdCQUFnQixFQUFFLDZDQUE2QztZQUMvRCxZQUFZLEVBQUUsZ0RBQWdEO1lBQzlELGNBQWMsRUFBRSxrREFBa0Q7U0FDbkU7UUFDRCxXQUFXLEVBQUU7WUFDWCxXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELGVBQWUsRUFBRSxtREFBbUQ7WUFDcEUsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxhQUFhLEVBQUUsaURBQWlEO1lBQ2hFLFdBQVcsRUFBRSxpREFBaUQ7U0FDL0Q7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2VCdWlsZGVyVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIHdvcmtmbG93OiB7XHJcbiAgICAgIHBhZ2VCeU9yZ2FuaXphdGlvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tpZH0nLFxyXG4gICAgICBMb2NrUGFnZURlc2lnbmVyOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS97aWR9L2R1cGxpY2F0ZScsXHJcbiAgICAgIGFjdGl2YXRlUGFnZTogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uve3BhZ2VJZH0vYWN0aXZhdGUnLFxyXG4gICAgICBkZWFjdGl2YXRlUGFnZTogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uve3BhZ2VJZH0vZGVhY3RpdmF0ZSdcclxuICAgIH0sXHJcbiAgICBwYWdlX2NvbmZpZzoge1xyXG4gICAgICBwYWdlVmVyc2lvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2V2ZXJzaW9uLycsXHJcbiAgICAgIGFjdGl2YXRlVmVyc2lvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2V2ZXJzaW9uL3tpZH0vYWN0aXZhdGUnLFxyXG4gICAgICB2ZXJzaW9uTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2V2ZXJzaW9uL3BhZ2Uve2lkfScsXHJcbiAgICAgIHVwZGF0ZVZlcnNpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdldmVyc2lvbi97aWR9L3VwZGF0ZScsXHJcbiAgICAgIGNvcHlWZXJzaW9uOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZXZlcnNpb24ve2lkfS9jcmVhdGUnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuIl19