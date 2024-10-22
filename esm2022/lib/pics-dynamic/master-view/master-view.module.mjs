import { NgModule } from '@angular/core';
import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { GridsterModule } from 'angular-gridster2';
import { CommonModule } from '@angular/common';
import { DynamicModule } from 'ng-dynamic-component';
import { AlertModule } from '../@shared/alert/alert.module';
import * as i0 from "@angular/core";
export class MasterViewModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MasterViewModule, declarations: [MasterViewComponent], imports: [CommonModule, MasterViewRoutingModule, GridsterModule, DynamicModule, AlertModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewModule, imports: [CommonModule, MasterViewRoutingModule, GridsterModule, DynamicModule, AlertModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterViewModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MasterViewComponent],
                    imports: [CommonModule, MasterViewRoutingModule, GridsterModule, DynamicModule, AlertModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvbWFzdGVyLXZpZXcvbWFzdGVyLXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQU01RCxNQUFNLE9BQU8sZ0JBQWdCO3dHQUFoQixnQkFBZ0I7eUdBQWhCLGdCQUFnQixpQkFIWixtQkFBbUIsYUFDeEIsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUMsV0FBVzt5R0FFL0UsZ0JBQWdCLFlBRmpCLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFDLFdBQVc7OzRGQUUvRSxnQkFBZ0I7a0JBSjVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFDLFdBQVcsQ0FBQztpQkFDNUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXN0ZXJWaWV3Um91dGluZ01vZHVsZSB9IGZyb20gJy4vbWFzdGVyLXZpZXctcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXN0ZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tYXN0ZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcmlkc3Rlck1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZ3JpZHN0ZXIyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHluYW1pY01vZHVsZSB9IGZyb20gJ25nLWR5bmFtaWMtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICcuLi9Ac2hhcmVkL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW01hc3RlclZpZXdDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hc3RlclZpZXdSb3V0aW5nTW9kdWxlLCBHcmlkc3Rlck1vZHVsZSwgRHluYW1pY01vZHVsZSxBbGVydE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc3RlclZpZXdNb2R1bGUgeyB9XHJcbiJdfQ==