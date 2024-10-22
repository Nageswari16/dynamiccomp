import { createAction, props } from '@ngrx/store';
export const addComponent = createAction('[Master View] Add Component', props());
export const removeComponent = createAction('[Master View] Remove Component', props());
export const updateComponent = createAction('[Master View] Update Component', props());
export const setComponents = createAction('[Master View] Set Components', props());
export const clearComponents = createAction('[Master View] Clear Components');
export const selectComponentById = createAction('[Master View] Select Component By Id', props());
export const publishEvent = createAction('[Master View] Publish Event', props());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXcuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdsRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLDZCQUE2QixFQUFFLEtBQUssRUFBNEIsQ0FBQyxDQUFDO0FBRTNHLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxFQUFrQixDQUFDLENBQUM7QUFFdkcsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLEVBQTRCLENBQUMsQ0FBQztBQUVqSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLDhCQUE4QixFQUFFLEtBQUssRUFBb0MsQ0FBQyxDQUFDO0FBRXJILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUU5RSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxZQUFZLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxFQUFnQixDQUFDLENBQUM7QUFFL0csTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLEVBQXFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgcHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFN0YXRlIH0gZnJvbSAnLi9tYXN0ZXItdmlldy5zdGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tcG9uZW50ID0gY3JlYXRlQWN0aW9uKCdbTWFzdGVyIFZpZXddIEFkZCBDb21wb25lbnQnLCBwcm9wczx7IGl0ZW06IENvbXBvbmVudFN0YXRlIH0+KCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvbXBvbmVudCA9IGNyZWF0ZUFjdGlvbignW01hc3RlciBWaWV3XSBSZW1vdmUgQ29tcG9uZW50JywgcHJvcHM8eyBpZDogc3RyaW5nIH0+KCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbXBvbmVudCA9IGNyZWF0ZUFjdGlvbignW01hc3RlciBWaWV3XSBVcGRhdGUgQ29tcG9uZW50JywgcHJvcHM8eyBpdGVtOiBDb21wb25lbnRTdGF0ZSB9PigpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb21wb25lbnRzID0gY3JlYXRlQWN0aW9uKCdbTWFzdGVyIFZpZXddIFNldCBDb21wb25lbnRzJywgcHJvcHM8eyBjb21wb25lbnRzOiBDb21wb25lbnRTdGF0ZVtdIH0+KCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyQ29tcG9uZW50cyA9IGNyZWF0ZUFjdGlvbignW01hc3RlciBWaWV3XSBDbGVhciBDb21wb25lbnRzJyk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0Q29tcG9uZW50QnlJZCA9IGNyZWF0ZUFjdGlvbignW01hc3RlciBWaWV3XSBTZWxlY3QgQ29tcG9uZW50IEJ5IElkJywgcHJvcHM8e2lkOiBzdHJpbmd9PigpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwdWJsaXNoRXZlbnQgPSBjcmVhdGVBY3Rpb24oJ1tNYXN0ZXIgVmlld10gUHVibGlzaCBFdmVudCcsIHByb3BzPHtldmVudE5hbWU6IHN0cmluZywgcGF5bG9hZDogYW55fT4oKSk7Il19