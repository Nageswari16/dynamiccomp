import * as i0 from "@angular/core";
export declare class Order {
    ID: number;
    OrderNumber: number;
    OrderDate: string;
    SaleAmount: number;
    Terms: string;
    CustomerInfo: {
        StoreState: string;
        StoreCity: string;
    };
    Employee: string;
}
export declare class GridListService {
    getOrders(): Order[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GridListService>;
}
