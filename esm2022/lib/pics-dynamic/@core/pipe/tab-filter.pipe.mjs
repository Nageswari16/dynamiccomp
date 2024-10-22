import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TabFilterPipe {
    transform(tabList, searchTerm, originalTabList) {
        if (!tabList || !searchTerm) {
            return originalTabList;
        }
        else {
            tabList = JSON.parse(JSON.stringify(originalTabList));
        }
        searchTerm = searchTerm.toLowerCase();
        return this.recursiveSearchInMenu(tabList, searchTerm);
    }
    recursiveSearchInMenu(tabList, searchTerm) {
        const matchingTabs = [];
        tabList.forEach((tab) => {
            if (tab.label.toLowerCase().includes(searchTerm)) {
                matchingTabs.push(tab);
            }
            else {
                const matchingChildren = this.recursiveSearchInMenu(tab.items, searchTerm);
                if (matchingChildren.length > 0) {
                    tab.items = matchingChildren;
                    matchingTabs.push(tab);
                }
            }
        });
        return matchingTabs;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TabFilterPipe, name: "tabfilter" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'tabfilter'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZpbHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvcGlwZS90YWItZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBTXBELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFNBQVMsQ0FBQyxPQUFtQixFQUFFLFVBQWtCLEVBQUUsZUFBMkI7UUFDNUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQixPQUFPLGVBQWUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsT0FBTyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV0QyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLHFCQUFxQixDQUFDLE9BQW1CLEVBQUUsVUFBa0I7UUFDbkUsTUFBTSxZQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXBDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNoRCxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRTNFLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDL0IsR0FBRyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztvQkFDN0IsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzt3R0E5QlUsYUFBYTtzR0FBYixhQUFhOzs0RkFBYixhQUFhO2tCQUh6QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxXQUFXO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RhYmZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odGFiTGlzdDogTWVudUl0ZW1bXSwgc2VhcmNoVGVybTogc3RyaW5nLCBvcmlnaW5hbFRhYkxpc3Q6IE1lbnVJdGVtW10pOiBhbnlbXSB7XHJcbiAgICBpZiAoIXRhYkxpc3QgfHwgIXNlYXJjaFRlcm0pIHtcclxuICAgICAgcmV0dXJuIG9yaWdpbmFsVGFiTGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhYkxpc3Q9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxUYWJMaXN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoVGVybSA9IHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVTZWFyY2hJbk1lbnUodGFiTGlzdCwgc2VhcmNoVGVybSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY3Vyc2l2ZVNlYXJjaEluTWVudSh0YWJMaXN0OiBNZW51SXRlbVtdLCBzZWFyY2hUZXJtOiBzdHJpbmcpOiBNZW51SXRlbVtdIHtcclxuICAgIGNvbnN0IG1hdGNoaW5nVGFiczogTWVudUl0ZW1bXSA9IFtdO1xyXG5cclxuICAgIHRhYkxpc3QuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICAgIGlmICh0YWIubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtKSkge1xyXG4gICAgICAgIG1hdGNoaW5nVGFicy5wdXNoKHRhYik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDaGlsZHJlbiA9IHRoaXMucmVjdXJzaXZlU2VhcmNoSW5NZW51KHRhYi5pdGVtcywgc2VhcmNoVGVybSk7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaGluZ0NoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRhYi5pdGVtcyA9IG1hdGNoaW5nQ2hpbGRyZW47XHJcbiAgICAgICAgICBtYXRjaGluZ1RhYnMucHVzaCh0YWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoaW5nVGFicztcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=