import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../@core/directives/directives.module';
import { YouthPhotoRoutingModule } from './youth-photo-routing.module';
import * as i0 from "@angular/core";
export class YouthPhotoModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoModule, imports: [CommonModule,
            YouthPhotoRoutingModule,
            DirectivesModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoModule, imports: [CommonModule,
            YouthPhotoRoutingModule,
            DirectivesModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        YouthPhotoRoutingModule,
                        DirectivesModule
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dGgtcGhvdG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMveW91dGgtcGhvdG8veW91dGgtcGhvdG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQWF2RSxNQUFNLE9BQU8sZ0JBQWdCO3dHQUFoQixnQkFBZ0I7eUdBQWhCLGdCQUFnQixZQU56QixZQUFZO1lBQ1osdUJBQXVCO1lBQ3ZCLGdCQUFnQjt5R0FJUCxnQkFBZ0IsWUFOekIsWUFBWTtZQUNaLHVCQUF1QjtZQUN2QixnQkFBZ0I7OzRGQUlQLGdCQUFnQjtrQkFUNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osdUJBQXVCO3dCQUN2QixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO2lCQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcclxuaW1wb3J0IHsgRGlyZWN0aXZlc01vZHVsZSB9IGZyb20gJy4uL0Bjb3JlL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBZb3V0aFBob3RvUm91dGluZ01vZHVsZSB9IGZyb20gJy4veW91dGgtcGhvdG8tcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEb2N1bWVudFVwbG9hZE1vZHVsZSB9IGZyb20gJy4vZG9jdW1lbnQtdXBsb2FkL2RvY3VtZW50LXVwbG9hZC5tb2R1bGUnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBZb3V0aFBob3RvUm91dGluZ01vZHVsZSxcclxuICAgIERpcmVjdGl2ZXNNb2R1bGVcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXRoUGhvdG9Nb2R1bGUgeyB9XHJcbiJdfQ==