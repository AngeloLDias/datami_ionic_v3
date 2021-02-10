var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var SmiSdkCordova = /** @class */ (function (_super) {
    __extends(SmiSdkCordova, _super);
    function SmiSdkCordova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmiSdkCordova.prototype.getSDState = function (options) { return cordova(this, "getSDState", {}, arguments); };
    SmiSdkCordova.prototype.sdStateObserver = function (options) { return cordova(this, "sdStateObserver", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SmiSdkCordova.prototype.getAnalytics = function (options) { return cordova(this, "getAnalytics", {}, arguments); };
    SmiSdkCordova.prototype.updateUserId = function (userId) { return cordova(this, "updateUserId", {}, arguments); };
    SmiSdkCordova.prototype.updateUserTag = function (userTags) { return cordova(this, "updateUserTag", {}, arguments); };
    SmiSdkCordova.prototype.getSDAuth = function (url) { return cordova(this, "getSDAuth", {}, arguments); };
    SmiSdkCordova.prototype.startSponsoredData = function (options) { return cordova(this, "startSponsoredData", {}, arguments); };
    SmiSdkCordova.prototype.stopSponsoredData = function (options) { return cordova(this, "stopSponsoredData", {}, arguments); };
    SmiSdkCordova.pluginName = "SmiSdkCordova";
    SmiSdkCordova.plugin = "cordova-ionic-smisdk-plugin";
    SmiSdkCordova.pluginRef = "cordova.plugins.SmiSdkPluginCordova";
    SmiSdkCordova.repo = "https://bitbucket.org/datami/cordova-ionic-smisdk-plugin";
    SmiSdkCordova.install = "";
    SmiSdkCordova.installVariables = [];
    SmiSdkCordova.platforms = ["Android"];
    return SmiSdkCordova;
}(IonicNativePlugin));
export { SmiSdkCordova };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NtaS1zZGstY29yZG92YS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtDQyxpQ0FBaUI7Ozs7SUFPbEQsa0NBQVUsYUFBQyxPQUFXO0lBYXRCLHVDQUFlLGFBQUMsT0FBVztJQVMzQixvQ0FBWSxhQUFDLE9BQVc7SUFVeEIsb0NBQVksYUFBQyxNQUFjO0lBVTNCLHFDQUFhLGFBQUMsUUFBZ0I7SUFVOUIsaUNBQVMsYUFBQyxHQUFXO0lBU3JCLDBDQUFrQixhQUFDLE9BQVc7SUFTOUIseUNBQWlCLGFBQUMsT0FBVzs7Ozs7Ozs7d0JBakgvQjtFQW9DbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgU21pIFNkayBDb3Jkb3ZhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHVzZWQgZm9yIHNtaXNkayBjb3Jkb3ZhLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU21pU2RrQ29yZG92YSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc21pLXNkay1jb3Jkb3ZhJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzbWlTZGtDb3Jkb3ZhOiBTbWlTZGtDb3Jkb3ZhKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zbWlTZGtDb3Jkb3ZhLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU21pU2RrQ29yZG92YScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtaW9uaWMtc21pc2RrLXBsdWdpbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5TbWlTZGtQbHVnaW5Db3Jkb3ZhJyxcbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy9kYXRhbWkvY29yZG92YS1pb25pYy1zbWlzZGstcGx1Z2luJyxcbiAgaW5zdGFsbDogJycsIFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCdpb3MnXVxufSlcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNtaVNka0NvcmRvdmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBjdXJyZW50IFNEIFN0YXRlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTRFN0YXRlKG9wdGlvbnM6IHt9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzZXQgdGhlIFNEIFN0YXRlIGxpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYSBvYnNlcnZhYmxlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleCA6IDEsXG4gICAgZXJyb3JJbmRleCA6IDIsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBzZFN0YXRlT2JzZXJ2ZXIob3B0aW9uczoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgU3BvbnNvcmVkIGRhdGEgYW5hbHlzaXMuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFuYWx5dGljcyhvcHRpb25zOiB7fSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB1c2VyIGlkLlxuICAgKiBAcGFyYW0gdXNlcklkIHtzdHJpbmd9IFVzZXIgaWQgdG8gdXBkYXRlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgdXNlciB0YWdzLlxuICAgKiBAcGFyYW0gdXNlclRhZ3Mge3N0cmluZz4gVXNlclRhZ3MgdG8gdXBkYXRlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGRhdGVVc2VyVGFnKHVzZXJUYWdzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgc3BvbnNvcmVkIHVybCB0byBiZSB1c2VkLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFN0YW5kYXJkIFVybCB0byBiZSBzcG9uc29yZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U0RBdXRoKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdGFydCBzcG9uc29yZWQgZGF0YSBpZiBzdG9wcGVkIHVzaW5nIHN0b3BTcG9uc29yZWREYXRhIEFQSS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRTcG9uc29yZWREYXRhKG9wdGlvbnM6IHt9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9wcyBzcG9uc29yZWQgZGF0YS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFNwb25zb3JlZERhdGEob3B0aW9uczoge30pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=