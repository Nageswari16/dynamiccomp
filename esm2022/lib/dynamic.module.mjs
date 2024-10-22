import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DynamicComponent } from './dynamic.component';
import { PicsDynamicModule } from './pics-dynamic/pics-dynamic.module';
import { DynamicRoutingModule } from './dynamic-routing.component';
import { AuthStore } from './pics-dynamic/@core/auth/auth.store';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export class CardiDynamicModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiDynamicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardiDynamicModule, declarations: [DynamicComponent], imports: [DynamicRoutingModule,
            PicsDynamicModule], exports: [DynamicComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiDynamicModule, providers: [
            HttpClient,
            AuthStore
        ], imports: [DynamicRoutingModule,
            PicsDynamicModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiDynamicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DynamicComponent
                    ],
                    imports: [
                        DynamicRoutingModule,
                        PicsDynamicModule
                    ],
                    exports: [
                        DynamicComponent
                    ],
                    providers: [
                        HttpClient,
                        AuthStore
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL2R5bmFtaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFtQmxELE1BQU0sT0FBTyxrQkFBa0I7d0dBQWxCLGtCQUFrQjt5R0FBbEIsa0JBQWtCLGlCQWYzQixnQkFBZ0IsYUFHaEIsb0JBQW9CO1lBQ3BCLGlCQUFpQixhQUdqQixnQkFBZ0I7eUdBUVAsa0JBQWtCLGFBTmxCO1lBQ1QsVUFBVTtZQUNWLFNBQVM7U0FDVixZQVRDLG9CQUFvQjtZQUNwQixpQkFBaUI7OzRGQVdSLGtCQUFrQjtrQkFqQjlCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsVUFBVTt3QkFDVixTQUFTO3FCQUNWO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO2lCQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljc0R5bmFtaWNNb2R1bGUgfSBmcm9tICcuL3BpY3MtZHluYW1pYy9waWNzLWR5bmFtaWMubW9kdWxlJztcclxuaW1wb3J0IHsgRHluYW1pY1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtcm91dGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoU3RvcmUgfSBmcm9tICcuL3BpY3MtZHluYW1pYy9AY29yZS9hdXRoL2F1dGguc3RvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIER5bmFtaWNDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIER5bmFtaWNSb3V0aW5nTW9kdWxlLFxyXG4gICAgUGljc0R5bmFtaWNNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIER5bmFtaWNDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogWyBcclxuICAgIEh0dHBDbGllbnQsIFxyXG4gICAgQXV0aFN0b3JlXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkaUR5bmFtaWNNb2R1bGUgeyB9XHJcbiJdfQ==