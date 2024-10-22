import { LocalStorageService } from '../local-storage/local-storage.service';
import { INIT, UPDATE } from '@ngrx/store';
export function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
            return { ...newState, ...LocalStorageService.loadInitialState() };
        }
        return newState;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1zdGF0ZS1mcm9tLWxvY2FsLXN0b3JhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL21ldGEtcmVkdWNlcnMvaW5pdC1zdGF0ZS1mcm9tLWxvY2FsLXN0b3JhZ2UucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUQsTUFBTSxVQUFVLHlCQUF5QixDQUFDLE9BQWdDO0lBQ3hFLE9BQU8sVUFBVSxLQUFLLEVBQUUsTUFBTTtRQUM1QixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5RCxPQUFPLEVBQUUsR0FBRyxRQUFRLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7U0FDbkU7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9jb3JlLnN0YXRlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgSU5JVCwgVVBEQVRFIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdGF0ZUZyb21Mb2NhbFN0b3JhZ2UocmVkdWNlcjogQWN0aW9uUmVkdWNlcjxBcHBTdGF0ZT4pOiBBY3Rpb25SZWR1Y2VyPEFwcFN0YXRlPiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICBpZiAoW0lOSVQudG9TdHJpbmcoKSwgVVBEQVRFLnRvU3RyaW5nKCldLmluY2x1ZGVzKGFjdGlvbi50eXBlKSkge1xyXG4gICAgICByZXR1cm4geyAuLi5uZXdTdGF0ZSwgLi4uTG9jYWxTdG9yYWdlU2VydmljZS5sb2FkSW5pdGlhbFN0YXRlKCkgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICB9O1xyXG59XHJcbiJdfQ==