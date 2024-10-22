import { PipeTransform } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as i0 from "@angular/core";
export declare class TabFilterPipe implements PipeTransform {
    transform(tabList: MenuItem[], searchTerm: string, originalTabList: MenuItem[]): any[];
    private recursiveSearchInMenu;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabFilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TabFilterPipe, "tabfilter", false>;
}
