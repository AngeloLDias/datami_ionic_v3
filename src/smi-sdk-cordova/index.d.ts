import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Smi Sdk Cordova
 * @description
 * This plugin used for smisdk cordova.
 *
 * @usage
 * ```typescript
 * import { SmiSdkCordova } from '@ionic-native/smi-sdk-cordova';
 *
 *
 * constructor(private smiSdkCordova: SmiSdkCordova) { }
 *
 * ...
 *
 *
 * this.smiSdkCordova.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class SmiSdkCordova extends IonicNativePlugin {
    /**
     * This function returns current SD State.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getVpnSDState(options: {}): Promise<any>;
    /**
     * This function set the SD State listener.
     * @return {Observable<any>} Returns a observable that resolves when something happens
     */
    sdStateObserver(options: {}): Observable<any>;
    /**
     * This function start sponsored data using VPN.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    startSponsoredVpn(options: {}): Promise<any>;
    /**
     * This function stops sponsored data.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    stopSponsoredVpn(options: {}): Promise<any>;
}
