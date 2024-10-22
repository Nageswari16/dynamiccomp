import { Component } from '@angular/core';
import { AlertType } from '../../@core/common/common.entity';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/alert.service";
import * as i2 from "@angular/common";
const DISPLAY_IN_SECONDS = 20;
export class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
        // This is intentional
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: i1.AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AlertService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQHNoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFTLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7O0FBRXBFLE1BQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0FBTzlCLE1BQU0sT0FBTyxjQUFjO0lBR0w7SUFGcEIsTUFBTSxHQUFZLEVBQUUsQ0FBQztJQUVyQixZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMzQyxzQkFBc0I7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsK0NBQStDO2dCQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDakIsT0FBTzthQUNSO1lBRUQscUJBQXFCO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLCtCQUErQjtZQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBWTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsdUNBQXVDO1FBQ3ZDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLHFCQUFxQixDQUFDO1lBQy9CLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sb0JBQW9CLENBQUM7WUFDOUIsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsT0FBTyxrQkFBa0IsQ0FBQztZQUM1QixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLHFCQUFxQixDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzt3R0ExQ1UsY0FBYzs0RkFBZCxjQUFjLGlEQ1YzQixnTkFJQTs7NEZETWEsY0FBYztrQkFOMUIsU0FBUzsrQkFFRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnQsIEFsZXJ0VHlwZSB9IGZyb20gJy4uLy4uL0Bjb3JlL2NvbW1vbi9jb21tb24uZW50aXR5JztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuY29uc3QgRElTUExBWV9JTl9TRUNPTkRTID0gMjA7XHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBhbGVydHM6IEFsZXJ0W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkge1xyXG4gICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hbGVydFNlcnZpY2UuZ2V0QWxlcnQoKS5zdWJzY3JpYmUoKGFsZXJ0OiBBbGVydCkgPT4ge1xyXG4gICAgICBpZiAoIWFsZXJ0KSB7XHJcbiAgICAgICAgLy8gY2xlYXIgYWxlcnRzIHdoZW4gYW4gZW1wdHkgYWxlcnQgaXMgcmVjZWl2ZWRcclxuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYWRkIGFsZXJ0IHRvIGFycmF5XHJcbiAgICAgIHRoaXMuYWxlcnRzLnB1c2goYWxlcnQpO1xyXG4gICAgICAvLyByZW1vdmUgYWxlcnQgYWZ0ZXIgNSBzZWNvbmRzXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmVBbGVydChhbGVydCksIERJU1BMQVlfSU5fU0VDT05EUyAqIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBbGVydChhbGVydDogQWxlcnQpIHtcclxuICAgIHRoaXMuYWxlcnRzID0gdGhpcy5hbGVydHMuZmlsdGVyKHggPT4geCAhPT0gYWxlcnQpO1xyXG4gIH1cclxuXHJcbiAgY3NzQ2xhc3MoYWxlcnQ6IEFsZXJ0KSB7XHJcbiAgICBpZiAoIWFsZXJ0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gY3NzIGNsYXNzIGJhc2VkIG9uIGFsZXJ0IHR5cGVcclxuICAgIHN3aXRjaCAoYWxlcnQudHlwZSkge1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtc3VjY2Vzcyc7XHJcbiAgICAgIGNhc2UgQWxlcnRUeXBlLkVycm9yOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtZGFuZ2VyJztcclxuICAgICAgY2FzZSBBbGVydFR5cGUuSW5mbzpcclxuICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LWluZm8nO1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtd2FybmluZyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nRm9yPVwibGV0IGFsZXJ0IG9mIGFsZXJ0c1wiIGNsYXNzPVwiYWxlcnQtYW5pbWF0ZSB7eyBjc3NDbGFzcyhhbGVydCkgfX0gYWxlcnQtZGlzbWlzc2FibGVcIj5cclxuICB7eyBhbGVydC5tZXNzYWdlIH19XHJcbiAgPGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJyZW1vdmVBbGVydChhbGVydClcIj4mdGltZXM7PC9hPlxyXG48L2Rpdj5cclxuIl19