import { createReducer, on } from '@ngrx/store';
import { addComponent, clearComponents, publishEvent, removeComponent, selectComponentById, setComponents, updateComponent } from './master-view.actions';
export const initialState = {
    comps: [],
    compsevent: null
};
const _gridsterReducer = createReducer(initialState, on(setComponents, (state, { components }) => ({
    ...state,
    comps: components
})), on(addComponent, (state, { item }) => ({
    ...state,
    comps: [...state.comps, item]
})), on(removeComponent, (state, { id }) => ({
    ...state,
    comps: state.comps.filter(item => item.id !== id)
})), on(updateComponent, (state, { item }) => ({
    ...state,
    comps: state.comps.map(i => i.id === item.id ? { ...i, ...item } : i)
})), on(clearComponents, state => ({
    ...state,
    comps: []
})), on(selectComponentById, (state, { id }) => {
    const selectedComponent = state.comps.find(comp => comp.id === id);
    return {
        ...state,
        selectedComponent
    };
}), on(publishEvent, (state, { eventName, payload }) => ({
    ...state,
    compsevent: { eventName: eventName, payload: payload }
})));
export function gridsterReducer(state, action) {
    return _gridsterReducer(state, action);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXcucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0BzaGFyZWQvbWFzdGVyLXZpZXctc3RhdGUvbWFzdGVyLXZpZXcucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxSixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQW9CO0lBQzNDLEtBQUssRUFBRSxFQUFFO0lBQ1QsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUNwQyxZQUFZLEVBQ1osRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLEdBQUcsS0FBSztJQUNSLEtBQUssRUFBRSxVQUFVO0NBQ2xCLENBQUMsQ0FBQyxFQUNILEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxHQUFHLEtBQUs7SUFDUixLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO0NBQzlCLENBQUMsQ0FBQyxFQUNILEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxHQUFHLEtBQUs7SUFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNsRCxDQUFDLENBQUMsRUFDSCxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsR0FBRyxLQUFLO0lBQ1IsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN0RSxDQUFDLENBQUMsRUFDSCxFQUFFLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixHQUFHLEtBQUs7SUFDUixLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUMsQ0FBQyxFQUNILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDeEMsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkUsT0FBTztRQUNMLEdBQUcsS0FBSztRQUNSLGlCQUFpQjtLQUNsQixDQUFDO0FBQ0osQ0FBQyxDQUFDLEVBQ0YsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRCxHQUFHLEtBQUs7SUFDUixVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7Q0FDdkQsQ0FBQyxDQUFDLENBQ0osQ0FBQztBQUVGLE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU07SUFDM0MsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJlZHVjZXIsIG9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBhZGRDb21wb25lbnQsIGNsZWFyQ29tcG9uZW50cywgcHVibGlzaEV2ZW50LCByZW1vdmVDb21wb25lbnQsIHNlbGVjdENvbXBvbmVudEJ5SWQsIHNldENvbXBvbmVudHMsIHVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vbWFzdGVyLXZpZXcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IE1hc3RlclZpZXdTdGF0ZSB9IGZyb20gJy4vbWFzdGVyLXZpZXcuc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogTWFzdGVyVmlld1N0YXRlID0ge1xyXG4gIGNvbXBzOiBbXSxcclxuICBjb21wc2V2ZW50OiBudWxsXHJcbn07XHJcblxyXG5jb25zdCBfZ3JpZHN0ZXJSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgb24oc2V0Q29tcG9uZW50cywgKHN0YXRlLCB7IGNvbXBvbmVudHMgfSkgPT4gKHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgY29tcHM6IGNvbXBvbmVudHNcclxuICB9KSksXHJcbiAgb24oYWRkQ29tcG9uZW50LCAoc3RhdGUsIHsgaXRlbSB9KSA9PiAoe1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBjb21wczogWy4uLnN0YXRlLmNvbXBzLCBpdGVtXVxyXG4gIH0pKSxcclxuICBvbihyZW1vdmVDb21wb25lbnQsIChzdGF0ZSwgeyBpZCB9KSA9PiAoe1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBjb21wczogc3RhdGUuY29tcHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpXHJcbiAgfSkpLFxyXG4gIG9uKHVwZGF0ZUNvbXBvbmVudCwgKHN0YXRlLCB7IGl0ZW0gfSkgPT4gKHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgY29tcHM6IHN0YXRlLmNvbXBzLm1hcChpID0+IGkuaWQgPT09IGl0ZW0uaWQgPyB7IC4uLmksIC4uLml0ZW0gfSA6IGkpXHJcbiAgfSkpLFxyXG4gIG9uKGNsZWFyQ29tcG9uZW50cywgc3RhdGUgPT4gKHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgY29tcHM6IFtdXHJcbiAgfSkpLFxyXG4gIG9uKHNlbGVjdENvbXBvbmVudEJ5SWQsIChzdGF0ZSwgeyBpZCB9KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZENvbXBvbmVudCA9IHN0YXRlLmNvbXBzLmZpbmQoY29tcCA9PiBjb21wLmlkID09PSBpZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgc2VsZWN0ZWRDb21wb25lbnRcclxuICAgIH07XHJcbiAgfSksXHJcbiAgb24ocHVibGlzaEV2ZW50LCAoc3RhdGUsIHsgZXZlbnROYW1lLCBwYXlsb2FkIH0pID0+ICh7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGNvbXBzZXZlbnQ6IHsgZXZlbnROYW1lOiBldmVudE5hbWUsIHBheWxvYWQ6IHBheWxvYWQgfVxyXG4gIH0pKVxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyaWRzdGVyUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgcmV0dXJuIF9ncmlkc3RlclJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbn1cclxuIl19