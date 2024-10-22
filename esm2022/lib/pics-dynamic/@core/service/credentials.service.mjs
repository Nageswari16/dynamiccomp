import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
export class CredentialsService {
    token = null;
    constructor() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
        return this.token;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials) {
        this.token = credentials || null;
        if (credentials) {
            sessionStorage.setItem(credentialsKey, credentials);
        }
        else {
            sessionStorage.clear();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvY3JlZGVudGlhbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVEzQyxNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUM7QUFFbkM7OztHQUdHO0FBSUgsTUFBTSxPQUFPLGtCQUFrQjtJQUNyQixLQUFLLEdBQWtCLElBQUksQ0FBQztJQUVwQztRQUNFLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRSxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksV0FBVztRQUNiLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRSxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FBQyxXQUFvQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDakMsSUFBSSxXQUFXLEVBQUU7WUFDZixjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzt3R0E1Q1Usa0JBQWtCOzRHQUFsQixrQkFBa0IsY0FGakIsTUFBTTs7NEZBRVAsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlZGVudGlhbHMge1xyXG4gIC8vIEN1c3RvbWl6ZSByZWNlaXZlZCBjcmVkZW50aWFscyBoZXJlXHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICB0b2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBjcmVkZW50aWFsc0tleSA9ICdqd3QtdG9rZW4nO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIHN0b3JhZ2UgZm9yIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzLlxyXG4gKiBUaGUgQ3JlZGVudGlhbHMgaW50ZXJmYWNlIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIHByb3BlciBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWRlbnRpYWxzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3Qgc2F2ZWRDcmVkZW50aWFscyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oY3JlZGVudGlhbHNLZXkpO1xyXG4gICAgaWYgKHNhdmVkQ3JlZGVudGlhbHMpIHtcclxuICAgICAgdGhpcy50b2tlbiA9IHNhdmVkQ3JlZGVudGlhbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaXMgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZC5cclxuICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZC5cclxuICAgKi9cclxuICBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmNyZWRlbnRpYWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgdXNlciBjcmVkZW50aWFscy5cclxuICAgKiBAcmV0dXJuIFRoZSB1c2VyIGNyZWRlbnRpYWxzIG9yIG51bGwgaWYgdGhlIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQuXHJcbiAgICovXHJcbiAgZ2V0IGNyZWRlbnRpYWxzKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgY29uc3Qgc2F2ZWRDcmVkZW50aWFscyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oY3JlZGVudGlhbHNLZXkpO1xyXG4gICAgaWYgKHNhdmVkQ3JlZGVudGlhbHMpIHtcclxuICAgICAgdGhpcy50b2tlbiA9IHNhdmVkQ3JlZGVudGlhbHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHVzZXIgY3JlZGVudGlhbHMuXHJcbiAgICogVGhlIGNyZWRlbnRpYWxzIG1heSBiZSBwZXJzaXN0ZWQgYWNyb3NzIHNlc3Npb25zIGJ5IHNldHRpbmcgdGhlIGByZW1lbWJlcmAgcGFyYW1ldGVyIHRvIHRydWUuXHJcbiAgICogT3RoZXJ3aXNlLCB0aGUgY3JlZGVudGlhbHMgYXJlIG9ubHkgcGVyc2lzdGVkIGZvciB0aGUgY3VycmVudCBzZXNzaW9uLlxyXG4gICAqIEBwYXJhbSBjcmVkZW50aWFscyBUaGUgdXNlciBjcmVkZW50aWFscy5cclxuICAgKiBAcGFyYW0gcmVtZW1iZXIgVHJ1ZSB0byByZW1lbWJlciBjcmVkZW50aWFscyBhY3Jvc3Mgc2Vzc2lvbnMuXHJcbiAgICovXHJcbiAgc2V0Q3JlZGVudGlhbHMoY3JlZGVudGlhbHM/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMudG9rZW4gPSBjcmVkZW50aWFscyB8fCBudWxsO1xyXG4gICAgaWYgKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oY3JlZGVudGlhbHNLZXksIGNyZWRlbnRpYWxzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==