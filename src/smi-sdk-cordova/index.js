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
    SmiSdkCordova.prototype.getVpnSDState = function (options) { return cordova(this, "getVpnSDState", {}, arguments); };
    SmiSdkCordova.prototype.sdStateObserver = function (options) { return cordova(this, "sdStateObserver", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SmiSdkCordova.prototype.startSponsoredVpn = function (options) { return cordova(this, "startSponsoredVpn", {}, arguments); };
    SmiSdkCordova.prototype.stopSponsoredVpn = function (options) { return cordova(this, "stopSponsoredVpn", {}, arguments); };
    SmiSdkCordova.pluginName = "SmiSdkCordova";
    SmiSdkCordova.plugin = "cordova-ionic-smisdk-plugin";
    SmiSdkCordova.pluginRef = "cordova.plugins.SmiSdkPluginCordova";
    SmiSdkCordova.repo = "https://bitbucket.org/datami/cordova-ionic-smisdk-plugin";
    SmiSdkCordova.install = "";
    SmiSdkCordova.installVariables = [];
    SmiSdkCordova.platforms = ["Android", "ios"];
    return SmiSdkCordova;
}(IonicNativePlugin));
export { SmiSdkCordova };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NtaS1zZGstY29yZG92YS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtDQyxpQ0FBaUI7Ozs7SUFPbEQscUNBQWEsYUFBQyxPQUFXO0lBYXpCLHVDQUFlLGFBQUMsT0FBVztJQVMzQix5Q0FBaUIsYUFBQyxPQUFXO0lBUzdCLHdDQUFnQixhQUFDLE9BQVc7Ozs7Ozs7O3dCQTFFOUI7RUFvQ21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIFNtaSBTZGsgQ29yZG92YVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB1c2VkIGZvciBzbWlzZGsgY29yZG92YS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNtaVNka0NvcmRvdmEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NtaS1zZGstY29yZG92YSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc21pU2RrQ29yZG92YTogU21pU2RrQ29yZG92YSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc21pU2RrQ29yZG92YS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NtaVNka0NvcmRvdmEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWlvbmljLXNtaXNkay1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuU21pU2RrUGx1Z2luQ29yZG92YScsXG4gIHJlcG86ICdodHRwczovL2JpdGJ1Y2tldC5vcmcvZGF0YW1pL2NvcmRvdmEtaW9uaWMtc21pc2RrLXBsdWdpbicsXG4gIGluc3RhbGw6ICcnLCBcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywnaW9zJ11cbn0pXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTbWlTZGtDb3Jkb3ZhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgY3VycmVudCBTRCBTdGF0ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VnBuU0RTdGF0ZShvcHRpb25zOiB7fSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc2V0IHRoZSBTRCBTdGF0ZSBsaXN0ZW5lci5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGEgb2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXggOiAxLFxuICAgIGVycm9ySW5kZXggOiAyLFxuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc2RTdGF0ZU9ic2VydmVyKG9wdGlvbnM6IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdGFydCBzcG9uc29yZWQgZGF0YSB1c2luZyBWUE4uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0U3BvbnNvcmVkVnBuKG9wdGlvbnM6IHt9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9wcyBzcG9uc29yZWQgZGF0YS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFNwb25zb3JlZFZwbihvcHRpb25zOiB7fSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==