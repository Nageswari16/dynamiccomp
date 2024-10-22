export declare class PageBuilderAddURL {
    static EndPoints: {
        page_config: {
            pageVersion: string;
            page: string;
            dbSchema: string;
            page_lock: string;
            assetByVersion: string;
            pageExist: string;
            pageaudit: string;
            orgPageList: string;
        };
        rbac: {
            asset: {
                listByPageID: string;
                batch: string;
            };
            organization: {
                list: string;
            };
        };
        report: {
            report: string;
        };
        db: {
            schemaList: string;
            tableBySchemaName: string;
            relatedTableFields: string;
            columnsOfRelatedTables: string;
            fieldsOfRelatedTable: string;
            tableFields: string;
        };
        attachment: {
            uploadKey: string;
            list: string;
            delete: string;
            downloadKey: string;
        };
    };
}
export declare class RBACINFO {
    unsubscribe(): void;
    apiHost: string;
    tokenKey: string;
    others?: any;
    orgID?: any;
    chatServer?: string;
    environment?: Environment;
}
export declare class Environment {
    mstrUsername?: string;
    mstrPassword?: string;
    mstrURL?: string;
    mstrProjectID?: string;
    applicationid?: string;
    priority?: string;
}
