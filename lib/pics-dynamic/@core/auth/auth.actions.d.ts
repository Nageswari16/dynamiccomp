export declare const authLogout: import("@ngrx/store").ActionCreator<"[Auth] Logout", () => import("@ngrx/store/src/models").TypedAction<"[Auth] Logout">>;
export declare const authLogin: import("@ngrx/store").ActionCreator<"[Auth] Login", (props: {
    username: string;
    password: string;
}) => {
    username: string;
    password: string;
} & import("@ngrx/store/src/models").TypedAction<"[Auth] Login">>;
export declare const authLoginSuccess: import("@ngrx/store").ActionCreator<"[Auth] Login Success", (props: {
    isAuthenticated: boolean;
}) => {
    isAuthenticated: boolean;
} & import("@ngrx/store/src/models").TypedAction<"[Auth] Login Success">>;
export declare const authLoginFailure: import("@ngrx/store").ActionCreator<"[Auth] Login Failure", (props: {
    isAuthenticated: boolean;
    error: any;
}) => {
    isAuthenticated: boolean;
    error: any;
} & import("@ngrx/store/src/models").TypedAction<"[Auth] Login Failure">>;
