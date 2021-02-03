//
//  SmiSdkPluginCordova.m
//  GAIntegration
//
//  Created by Damandeep Singh on 09/10/17.
//

#import "SmiSdkPluginCordova.h"
#import "SmiSdk.h"
#import "SmiAnalytics.h"
#import "AppDelegate+datami.h"

@implementation SmiSdkPluginCordova


- (void)pluginInitialize {
    NSLog(@"SmiSdkPluginCordova Initialised");
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(receivedStateChage:)
                                                 name:SDSTATE_CHANGE_NOTIF object:nil];
}

- (void)sdStateObserver:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - sdStateObserver");
    _callbackId = command.callbackId;
    AppDelegate *app = [[UIApplication sharedApplication] delegate];
    [self getSDStateAsString:app.smiResult];    
    [self sendPluginResult];
}

- (void)getVpnSDState:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - getVpnSDState");
    _callbackId = command.callbackId;
    AppDelegate *app = [[UIApplication sharedApplication] delegate];
    [self getSDStateAsString:app.smiResult];
    [self sendPluginResult];
}


- (void)stopSponsoredVpn:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - stopSponsoredVpn Invoked");
    // _callbackId = command.callbackId;
    [SmiSdk stopSponsorVpn];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [result setKeepCallbackAsBool:NO];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];

}

- (void)startSponsoredVpn:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - startSponsoredVpn Invoked");
    // _callbackId = command.callbackId;
    [SmiSdk startSponsorVpn];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [result setKeepCallbackAsBool:NO];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)sendPluginResult
{
    // if(![sdStatus isEqualToString:prevSdStatus]) {
        NSLog(@"SmiSdkPluginCordova - sendPluginResult");
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString: sdStatus];
        [result setKeepCallbackAsBool:YES];
        [self.commandDelegate sendPluginResult:result callbackId:_callbackId];
        prevSdStatus = sdStatus;
    // }
    // else {
    //     NSLog(@"SD Status is same as Previous SD Status");
    // }
}

-(void)receivedStateChage:(NSNotification*)notif {
    SmiResult* sr =  notif.object;
    NSLog(@"SmiSdkPluginCordova - sdState: %ld", (long)sr.sdState);
    [self getSDStateAsString:sr];
    [self sendPluginResult];
}

-(NSString *)getSDStateAsString:(SmiResult* ) sr {
    if (sr.sdState == SD_AVAILABLE) {
        sdStatus = @"SD_AVAILABLE";
    }
    else if (sr.sdState == SD_WIFI) {
        sdStatus = @"SD_WIFI";
    }
    else {
        sdStatus = [NSString stringWithFormat:@"SD_NOT_AVAILABLE, Reason: %@", [SmiSdk getReasonString:(int)sr.sdReason]];
    }
}


@end
