export class AuthURL {
    static EndPoints = {
        auth: {
            user: {
                conformMail: '/org/auth/forgot-password',
                changePassword: '/org/auth/forgot-password-verification',
                login: '/org/auth/login',
                refreshToken: '/org/auth/refresh-token',
                logout: '/org/auth/logout',
                userInfo: '/org/user/page/list',
                userRole: '/org/user/{id}',
                routeToDynamicPage: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
                authMe: '/org/auth/me',
                resetPassword: '/org/user/reset-password',
                orgList: '/org/management-group/organization/tree',
                notification: '/worker/notification',
                workerAvailability: '/worker/updateAvailablity',
                getWorkerAvailability: '/worker/getByCurrentUser'
            },
            permission: {
                permissionRoleById: '/access-control/permission/role/{id}',
                pagePermission: '/access-control/permission/page',
                pageLookupPermission: '/access-control/permission/page/lookup'
            },
            microstrategy: {
                login: '/platform/microstrategy/login',
                getLibrary: '/platform/microstrategy/library'
            }
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvY29uZmlnL2F1dGgtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sT0FBTztJQUNYLE1BQU0sQ0FBQyxTQUFTLEdBQUc7UUFDeEIsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLGNBQWMsRUFBRSx3Q0FBd0M7Z0JBQ3hELEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFlBQVksRUFBRSx5QkFBeUI7Z0JBQ3ZDLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGtCQUFrQixFQUNoQix3R0FBd0c7Z0JBQzFHLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixhQUFhLEVBQUUsMEJBQTBCO2dCQUN6QyxPQUFPLEVBQUUseUNBQXlDO2dCQUNsRCxZQUFZLEVBQUUsc0JBQXNCO2dCQUNwQyxrQkFBa0IsRUFBRSwyQkFBMkI7Z0JBQy9DLHFCQUFxQixFQUFFLDBCQUEwQjthQUNsRDtZQUNELFVBQVUsRUFBRTtnQkFDVixrQkFBa0IsRUFBRSxzQ0FBc0M7Z0JBQzFELGNBQWMsRUFBRSxpQ0FBaUM7Z0JBQ2pELG9CQUFvQixFQUFFLHdDQUF3QzthQUMvRDtZQUNELGFBQWEsRUFBRTtnQkFDYixLQUFLLEVBQUUsK0JBQStCO2dCQUN0QyxVQUFVLEVBQUUsaUNBQWlDO2FBQzlDO1NBQ0Y7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgY29uZm9ybU1haWw6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkJyxcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZDogJy9vcmcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtdmVyaWZpY2F0aW9uJyxcclxuICAgICAgICBsb2dpbjogJy9vcmcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiAnL29yZy9hdXRoL3JlZnJlc2gtdG9rZW4nLFxyXG4gICAgICAgIGxvZ291dDogJy9vcmcvYXV0aC9sb2dvdXQnLFxyXG4gICAgICAgIHVzZXJJbmZvOiAnL29yZy91c2VyL3BhZ2UvbGlzdCcsXHJcbiAgICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIve2lkfScsXHJcbiAgICAgICAgcm91dGVUb0R5bmFtaWNQYWdlOlxyXG4gICAgICAgICAgJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdpZH0/cmV0dXJuVXNlclBhZ2U9dHJ1ZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZScsXHJcbiAgICAgICAgYXV0aE1lOiAnL29yZy9hdXRoL21lJyxcclxuICAgICAgICByZXNldFBhc3N3b3JkOiAnL29yZy91c2VyL3Jlc2V0LXBhc3N3b3JkJyxcclxuICAgICAgICBvcmdMaXN0OiAnL29yZy9tYW5hZ2VtZW50LWdyb3VwL29yZ2FuaXphdGlvbi90cmVlJyxcclxuICAgICAgICBub3RpZmljYXRpb246ICcvd29ya2VyL25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgd29ya2VyQXZhaWxhYmlsaXR5OiAnL3dvcmtlci91cGRhdGVBdmFpbGFibGl0eScsXHJcbiAgICAgICAgZ2V0V29ya2VyQXZhaWxhYmlsaXR5OiAnL3dvcmtlci9nZXRCeUN1cnJlbnRVc2VyJ1xyXG4gICAgICB9LFxyXG4gICAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgICAgcGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICAgIHBhZ2VMb29rdXBQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZS9sb29rdXAnXHJcbiAgICAgIH0sXHJcbiAgICAgIG1pY3Jvc3RyYXRlZ3k6IHtcclxuICAgICAgICBsb2dpbjogJy9wbGF0Zm9ybS9taWNyb3N0cmF0ZWd5L2xvZ2luJyxcclxuICAgICAgICBnZXRMaWJyYXJ5OiAnL3BsYXRmb3JtL21pY3Jvc3RyYXRlZ3kvbGlicmFyeSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19