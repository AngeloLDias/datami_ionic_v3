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
    getSDState(options: {}): Promise<any>;
    /**
     * This function set the SD State listener.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    sdStateObserver(options: {}): Observable<any>;
    /**
     * This function returns Sponsored data analysis.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getAnalytics(options: {}): Promise<any>;
    /**
     * This function updates user id.
     * @param userId {string} User id to update.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    updateUserId(userId: string): Promise<any>;
    /**
     * This function updates user tags.
     * @param userTags {string> UserTags to update.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    updateUserTag(userTags: string): Promise<any>;
    /**
     * This function returns sponsored url to be used.
     * @param url {string} Standard Url to be sponsore.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getSDAuth(url: string): Promise<any>;
    /**
     * This function start sponsored data if stopped using stopSponsoredData API.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    startSponsoredData(options: {}): Promise<any>;
    /**
     * This function stops sponsored data.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    stopSponsoredData(options: {}): Promise<any>;
}
