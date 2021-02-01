//
//  SmiSdkPluginCordova.h
//  GAIntegration
//
//  Created by Damandeep Singh on 09/10/17.
//

#import <Cordova/CDV.h>
#import <Cordova/CDVPlugin.h>

@interface SmiSdkPluginCordova : CDVPlugin {
    
    NSString* sdStatus;
    NSString* prevSdStatus;
    NSString* _callbackId;

}

- (void)startSponsoredVpn:(CDVInvokedUrlCommand*)command;
- (void)stopSponsoredVpn:(CDVInvokedUrlCommand*)command;
- (void)getVpnSdState:(CDVInvokedUrlCommand*)command;

@end
