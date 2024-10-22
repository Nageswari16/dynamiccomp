import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../permissions/permission.store";
export class ShowFieldDirective {
    templateRef;
    viewContainer;
    dataStore;
    showField;
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1maWVsZC5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvZGlyZWN0aXZlcy9zaG93LWZpZWxkLmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlDLE1BQU0sZUFBZSxDQUFDOzs7QUFNeEYsTUFBTSxPQUFPLGtCQUFrQjtJQUluQjtJQUNBO0lBQ0E7SUFMRCxTQUFTLENBQVU7SUFFNUIsWUFDVSxXQUE2QixFQUM3QixhQUErQixFQUMvQixTQUEwQjtRQUYxQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWlCO0lBQ2pDLENBQUM7SUFFSixRQUFRO1FBQ04sTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEQsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RCxJQUFJLFNBQVMsRUFBRTtnQkFDYixNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztxQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDNUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtvQkFDeEIsS0FBSyxNQUFNLE1BQU0sSUFBUSxLQUFLLEVBQUU7d0JBQzlCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN2QyxJQUNFLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUzs0QkFDdkIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQ2xELE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQ3hCOzRCQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQzVCO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ047U0FDRjtJQUNILENBQUM7d0dBbENVLGtCQUFrQjs0RkFBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4QjsrSkFFVSxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuLi9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3Nob3dGaWVsZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG93RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNob3dGaWVsZCE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBkYXRhU3RvcmU6IFBlcm1pc3Npb25TdG9yZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMuZGF0YVN0b3JlLnN0YXRlO1xyXG4gICAgaWYgKCFwZXJtaXNzaW9ucyB8fCAhcGVybWlzc2lvbnNbdGhpcy5zaG93RmllbGRdKSB7XHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcclxuICAgICAgY29uc3QgbG9va3VwSWRzID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnTE9PS1VQX0lEUycpO1xyXG4gICAgICBpZiAobG9va3VwSWRzKSB7XHJcbiAgICAgICAgY29uc3QgbG9va3VwSWRBcnJheSA9IGxvb2t1cElkcy5zcGxpdCgnLCcpO1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHBlcm1pc3Npb25zKVxyXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW1bMF0uc3RhcnRzV2l0aCgnR0FMS1BfJykpXHJcbiAgICAgICAgICAuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgX3ZhbHVlIG9mIDxbXT52YWx1ZSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IF9rZXkgPSBrZXkucmVwbGFjZSgnR0FMS1BfJywgJycpO1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIF9rZXkgPT09IHRoaXMuc2hvd0ZpZWxkICYmXHJcbiAgICAgICAgICAgICAgICBsb29rdXBJZEFycmF5LmluY2x1ZGVzKFN0cmluZyhfdmFsdWVbJ2xvb2t1cGlkJ10pKSAmJlxyXG4gICAgICAgICAgICAgICAgX3ZhbHVlWydhY3Rpb24nXSA9PT0gJ0gnXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==