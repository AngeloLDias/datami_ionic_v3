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
    [self setSDStateAsString:app.smiResult];
    [self sendPluginResult];
}

- (void)getVpnSDState:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - getVpnSDState");
    _callbackId = command.callbackId;
    AppDelegate *app = [[UIApplication sharedApplication] delegate];
    if(NULL != app.smiResult){
        [self setSDStateAsString:app.smiResult];
        [self sendPluginResult];
    }
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
    [self setSDStateAsString:sr];
    [self sendPluginResult];
}

-(void)setSDStateAsString:(SmiResult* ) sr {
    NSMutableDictionary *sdResult = [[NSMutableDictionary alloc] init];
    [sdResult setObject:[SmiSdk getSdStateString:sr.sdState] forKey:@"sdState"];
    if(SD_WIFI != sr.sdState){
        if(NULL != sr.carrierName){
            [sdResult setObject:sr.carrierName forKey:@"carrierName"];
        }
        if(NULL != sr.clientIp){
            [sdResult setObject:sr.clientIp forKey:@"clientIp"];
        }
        [sdResult setObject:[SmiSdk getReasonString:(int)sr.sdReason] forKey:@"sdReason"];
    }else{
        [sdResult setObject:@"SD_REASON_NONE" forKey:@"sdReason"];
    }
    NSError *err = nil;

    NSData* result = [NSJSONSerialization dataWithJSONObject:sdResult options:0 error:&err];
    sdStatus = [[NSString alloc] initWithData:result encoding:NSUTF8StringEncoding];

}
@end
