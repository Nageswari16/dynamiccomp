export class RoleConfig {
    static EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
}
export class UserConfig {
    static EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
}
export class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
}
export class PolicyGroupConfig {
    static EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
}
export class PermissionsURL {
    static EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
}
// export class AccessManagementConfig {
//   public static EndPoint = {
//     Organization: {
//       getOrganizationList: '/org/organization/all',
//       getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
//     }
//   };
// }
export class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/platform/page-designer/page/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        Page: {
            getPage: '/page'
        },
        Asset: {
            getAsset: 'asset',
            getPageAsset: '/platform/page-designer/asset/getpagebyid',
            getUserAsset: '/platform/page-designer/asset/getUserAssets',
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets/',
            getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
        },
        User: {
            getUser: '/org/user/',
            getUserList: '/org/user/all',
            getUserorgList: '/org/user/organization/'
        },
        PolicyGroup: {
            getPolicyGroup: '/platform/page-designer/policyGroup/',
            getPolicyGroupList: '/platform/page-designer/policyGroup/organization/{organizationid}'
        },
        Role: {
            getRole: '/access-control/role/',
            getRoleList: '/access-control/role/organization/{orgid}'
        }
    };
}
export class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFVBQVU7SUFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxjQUFjLEVBQUUsNEJBQTRCO1lBQzVDLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsYUFBYSxFQUFFLDJDQUEyQztZQUMxRCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7O0FBR0osTUFBTSxPQUFPLFVBQVU7SUFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxXQUFXO1lBQzNCLHdCQUF3QixFQUFFLHFDQUFxQztZQUMvRCxZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixlQUFlLEVBQUUsMkJBQTJCO1lBQzVDLGlCQUFpQixFQUFFLHlCQUF5QjtTQUM3QztRQUNELFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGtCQUFrQixFQUFFLHNCQUFzQjtZQUMxQyxlQUFlLEVBQUUsOEJBQThCO1NBQ2hEO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sZ0JBQWdCO0lBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsV0FBVyxFQUFFO1lBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1lBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztZQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsY0FBYyxFQUFFLHdCQUF3QjtZQUN4QyxhQUFhLEVBQUUsaUJBQWlCO1NBQ2pDO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8saUJBQWlCO0lBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsV0FBVyxFQUFFO1lBQ1gsa0JBQWtCLEVBQUUscUNBQXFDO1lBQ3pELHFCQUFxQixFQUFFLHlDQUF5QztZQUNoRSxpQkFBaUIsRUFBRSxxQ0FBcUM7WUFDeEQsa0JBQWtCLEVBQUUsbUVBQW1FO1NBQ3hGO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sY0FBYztJQUNsQixNQUFNLENBQUMsU0FBUyxHQUFHO1FBQ3hCLFVBQVUsRUFBRTtZQUNWLGtCQUFrQixFQUFFLHNDQUFzQztZQUMxRCxjQUFjLEVBQUUsaUNBQWlDO1lBQ2pELGFBQWEsRUFBRSxpQ0FBaUM7WUFDaEQsZ0JBQWdCLEVBQUUsbUNBQW1DO1lBQ3JELHNCQUFzQixFQUFFLDJDQUEyQztZQUNuRSxpQkFBaUIsRUFBRSxxREFBcUQ7WUFDeEUsa0JBQWtCLEVBQUUsaURBQWlEO1lBQ3JFLDBCQUEwQixFQUFFLHdEQUF3RDtTQUNyRjtRQUNELElBQUksRUFBRTtZQUNKLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsZ0JBQWdCLEVBQUUseUJBQXlCO1lBQzNDLFdBQVcsRUFBRSxxQ0FBcUM7U0FDbkQ7S0FDRixDQUFDOztBQUVKLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0Isc0JBQXNCO0FBQ3RCLHNEQUFzRDtBQUN0RCxtSUFBbUk7QUFDbkksUUFBUTtBQUNSLE9BQU87QUFDUCxJQUFJO0FBRUosTUFBTSxPQUFPLHNCQUFzQjtJQUMxQixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLFlBQVksRUFBRTtZQUNaLG1CQUFtQixFQUFFLCtDQUErQztZQUNwRSxlQUFlLEVBQ2IseUdBQXlHO1NBQzVHO1FBQ0QsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUUsT0FBTztZQUNqQixZQUFZLEVBQUUsMkNBQTJDO1lBQ3pELFlBQVksRUFBRSw2Q0FBNkM7WUFDM0QsWUFBWSxFQUFFLDhDQUE4QztZQUM1RCxtQkFBbUIsRUFBRSxvREFBb0Q7U0FDMUU7UUFDRCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsWUFBWTtZQUNyQixXQUFXLEVBQUUsZUFBZTtZQUM1QixjQUFjLEVBQUUseUJBQXlCO1NBQzFDO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsY0FBYyxFQUFFLHNDQUFzQztZQUN0RCxrQkFBa0IsRUFBRSxtRUFBbUU7U0FDeEY7UUFDRCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLFdBQVcsRUFBRSwyQ0FBMkM7U0FDekQ7S0FDRixDQUFDOztBQUVKLE1BQU0sT0FBTyxRQUFRO0lBQ25CLE9BQU8sR0FBRSxFQUFFLENBQUM7SUFDWixRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsTUFBTSxDQUFPO0lBQ2IsS0FBSyxDQUFPO0lBQ1osV0FBVyxDQUFlO0NBQzNCO0FBQ0QsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBWSxDQUFVO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixPQUFPLENBQVU7SUFDakIsYUFBYSxDQUFVO0lBQ3ZCLGFBQWEsQ0FBVTtJQUN2QixRQUFRLENBQVM7Q0FDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUm9sZUNvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIHJvbGU6IHtcclxuICAgICAgZ2V0QWxsVXNlclJvbGU6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZScsXHJcbiAgICAgIGNyZWF0ZVJvbGU6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS9jcmVhdGUnLFxyXG4gICAgICBnZXRMYW5kaW5nUGFnZTogJy9wbGF0Zm9ybS9tZW51L2FwcGxpY2F0aW9uJyxcclxuICAgICAgYWRkUG9saWN5R3JvdXA6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZScsXHJcbiAgICAgIGdldEFsbE9yZ1JvbGU6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS9vcmdhbml6YXRpb24ve29yZ2lkfScsXHJcbiAgICAgIGRvc3NpZXI6ICcvZG9zc2llcidcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckNvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIFVzZXI6IHtcclxuICAgICAgZ2V0QWxsVXNlckxpc3Q6ICcvb3JnL3VzZXInLFxyXG4gICAgICBnZXRBbGxVc2VyQWN0aXZlSW5hY3RpdmU6ICcvb3JnL3VzZXI/aW5jbHVkZUluYWN0aXZlVXNlcnM9dHJ1ZScsXHJcbiAgICAgIGFjdGl2YXRlVXNlcjogJy9vcmcvdXNlci9hY3RpdmF0ZScsXHJcbiAgICAgIGNyZWF0ZVVzZXI6ICcvb3JnL3VzZXIvY3JlYXRlJyxcclxuICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIvcm9sZScsXHJcbiAgICAgIG1hbmFnZW1lbnRncm91cDogJy9vcmcvdGVhbS9tYW5hZ2VtZW50Z3JvdXAnLFxyXG4gICAgICBnZXRBbGxVc2VyT3JnTGlzdDogJy9vcmcvdXNlci9vcmdhbml6YXRpb24vJ1xyXG4gICAgfSxcclxuICAgIFByb3ZpZGVyOiB7XHJcbiAgICAgIGdldFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXInLFxyXG4gICAgICBzZWFyY2hQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyL3NlYXJjaCcsXHJcbiAgICAgIGFkZFByb3ZpZGVyVXNlcjogJy9yZWYvcHJvdmlkZXIvY3JlYXRlL2FjY291bnQnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIEdldEF0dGFjaG1lbnRSZWZlcnJhbDogJy9yZWYvYXR0YWNobWVudC9yZWZlcnJhbCcsXHJcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvbG9va3VwYnljYXRlZ29yeW5hbWUnLFxyXG4gICAgICBVcGxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL3VwbG9hZC1rZXknLFxyXG4gICAgICBEb3dubG9hZEtleTogJy9jb21tb24vZmlsZXMvZG93bmxvYWQta2V5JyxcclxuICAgICAgUG9zdEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQvY3JlYXRlJyxcclxuICAgICAgUHV0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQb2xpY3lHcm91cENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIHBvbGljeUdyb3VwOiB7XHJcbiAgICAgIGdldFBvbGljeUdyb3VwTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwJyxcclxuICAgICAgZ2V0QWxsUG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvYWxsJyxcclxuICAgICAgY3JlYXRlUG9saWN5R3JvdXA6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cCcsXHJcbiAgICAgIGdldE9yZ1BvbGljeUdyb3VwczogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwL29yZ2FuaXphdGlvbi97b3JnYW5pemF0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25zVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgcGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgcGFnZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlJyxcclxuICAgICAgZ2V0UGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3tpZH0nLFxyXG4gICAgICBjcmVhdGVQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vY3JlYXRlJyxcclxuICAgICAgdXBkYXRlRGVsZXRlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3twZXJtaXNzaW9uaWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvblRyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlL3twYWdlaWR9L3twYXJlbnRpZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uVHlwZXM6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi90eXBlL3thcHBsaWNhdGlvbmlkfScsXHJcbiAgICAgIGFwcGxpY2F0aW9uUGVybWlzc2lvbnNUcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vYXBwbGljYXRpb24ve2FwcGxpY2F0aW9uaWR9J1xyXG4gICAgfSxcclxuICAgIHBhZ2U6IHtcclxuICAgICAgY3JlYXRlUGFnZTogJy9wbGF0Zm9ybS9tZW51L2NyZWF0ZScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZVBhZ2U6ICcvcGxhdGZvcm0vbWVudS97cGFnZWlkfScsXHJcbiAgICAgIEFsbFBhZ2VUcmVlOiAnL3BsYXRmb3JtL21lbnUvdHJlZS97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4vLyBleHBvcnQgY2xhc3MgQWNjZXNzTWFuYWdlbWVudENvbmZpZyB7XHJcbi8vICAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuLy8gICAgIE9yZ2FuaXphdGlvbjoge1xyXG4vLyAgICAgICBnZXRPcmdhbml6YXRpb25MaXN0OiAnL29yZy9vcmdhbml6YXRpb24vYWxsJyxcclxuLy8gICAgICAgZ2V0T3JnYW5pemF0aW9uOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ0lkfT9yZXR1cm5Vc2VyUGFnZT1mYWxzZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZSdcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgY2xhc3MgQWNjZXNzTWFuYWdlbWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIE9yZ2FuaXphdGlvbjoge1xyXG4gICAgICBnZXRPcmdhbml6YXRpb25MaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24vYWxsJyxcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uOlxyXG4gICAgICAgICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgfSxcclxuICAgIFBhZ2U6IHtcclxuICAgICAgZ2V0UGFnZTogJy9wYWdlJ1xyXG4gICAgfSxcclxuICAgIEFzc2V0OiB7XHJcbiAgICAgIGdldEFzc2V0OiAnYXNzZXQnLFxyXG4gICAgICBnZXRQYWdlQXNzZXQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9hc3NldC9nZXRwYWdlYnlpZCcsXHJcbiAgICAgIGdldFVzZXJBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFVzZXJBc3NldHMnLFxyXG4gICAgICBnZXRSb2xlQXNzZXQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9hc3NldC9nZXRSb2xlQXNzZXRzLycsXHJcbiAgICAgIGdldFBvbGljeUdyb3VwQXNzZXQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9hc3NldC9nZXRQb2xpY3lHcm91cEFzc2V0cydcclxuICAgIH0sXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGdldFVzZXI6ICcvb3JnL3VzZXIvJyxcclxuICAgICAgZ2V0VXNlckxpc3Q6ICcvb3JnL3VzZXIvYWxsJyxcclxuICAgICAgZ2V0VXNlcm9yZ0xpc3Q6ICcvb3JnL3VzZXIvb3JnYW5pemF0aW9uLydcclxuICAgIH0sXHJcbiAgICBQb2xpY3lHcm91cDoge1xyXG4gICAgICBnZXRQb2xpY3lHcm91cDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwLycsXHJcbiAgICAgIGdldFBvbGljeUdyb3VwTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwL29yZ2FuaXphdGlvbi97b3JnYW5pemF0aW9uaWR9J1xyXG4gICAgfSxcclxuICAgIFJvbGU6IHtcclxuICAgICAgZ2V0Um9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlLycsXHJcbiAgICAgIGdldFJvbGVMaXN0OiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvb3JnYW5pemF0aW9uL3tvcmdpZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUkJBQ0lORk8ge1xyXG4gIGFwaUhvc3QgPScnO1xyXG4gIHRva2VuS2V5ID0gJyc7XHJcbiAgb3RoZXJzPzogYW55O1xyXG4gIG9yZ0lEPzogYW55O1xyXG4gIGVudmlyb25tZW50PzogRW52aXJvbm1lbnQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBtc3RyVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgbXN0clBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIG1zdHJVUkw/OiBzdHJpbmc7XHJcbiAgbXN0clByb2plY3RJRD86IHN0cmluZztcclxuICBhcHBsaWNhdGlvbmlkPzogc3RyaW5nO1xyXG4gIHByaW9yaXR5Pzogc3RyaW5nXHJcbn1cclxuXHJcbiJdfQ==