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

- (void)getSDState:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - getSDState");
    _callbackId = command.callbackId;
    AppDelegate *app = [[UIApplication sharedApplication] delegate];
    [self setSDStateAsString:app.smiResult];
    [self sendPluginResult];
}

- (void)getAnalytics:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - getAnalytics Invoked");
    // _callbackId = command.callbackId;
    SmiAnalytics *analytics = [SmiSdk getAnalytics];
    NSMutableDictionary *dict = [[NSMutableDictionary alloc]initWithCapacity:3];
    NSNumber *tempNumber = [[NSNumber alloc] initWithDouble:analytics.fgCellularSessionTime];
    [dict setValue:tempNumber forKey:@"CellularSessionTime"];
    NSNumber *tempNumber1 = [[NSNumber alloc] initWithDouble:analytics.fgWifiSessionTime];
    [dict setValue:tempNumber1 forKey:@"WifiSessionTime"];
    NSNumber *tempNumber2 = [[NSNumber alloc] initWithDouble:analytics.sdDataUsage];
    [dict setValue:tempNumber2 forKey:@"SdDataUsage"];
    NSDictionary *dictFinal = [[NSDictionary alloc] initWithDictionary:dict];
    NSLog(@"SmiSdkPluginCordova - getAnalyticsSending");
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary: dictFinal];
    [result setKeepCallbackAsBool:NO];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];

}

- (void)stopSponsoredData:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - stopSponsoredData Invoked");
    // _callbackId = command.callbackId;
    [SmiSdk stopSponsorData];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [result setKeepCallbackAsBool:NO];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];

}

- (void)startSponsoredData:(CDVInvokedUrlCommand*)command
{
    NSLog(@"SmiSdkPluginCordova - startSponsoredData Invoked");
    // _callbackId = command.callbackId;
    [SmiSdk startSponsorData];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [result setKeepCallbackAsBool:NO];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)updateUserId:(CDVInvokedUrlCommand *)command
{
    NSLog(@"SmiSdkPluginCordova - updateUserId Invoked");
    // _callbackId = command.callbackId;
    NSString *userid = [command.arguments objectAtIndex:0];
    if(userid != nil  && userid.length > 0) {
        [SmiSdk updateUserId:userid];
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [result setKeepCallbackAsBool:NO];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    }
    else {
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        [result setKeepCallbackAsBool:NO];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    }
}

- (void)updateUserTag:(CDVInvokedUrlCommand *)command
{
    NSLog(@"SmiSdkPluginCordova - updateUserTag Invoked");
    // _callbackId = command.callbackId;
    NSArray *tags = [command.arguments objectAtIndex:0];
    NSLog(@"NSARRAY %@",tags);
    if(tags != nil  && tags.count > 0) {
        [SmiSdk updateTag:tags];
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [result setKeepCallbackAsBool:NO];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    }
    else {
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        [result setKeepCallbackAsBool:NO];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    }
}

- (void)getSDAuth:(CDVInvokedUrlCommand *)command
{
    NSLog(@"SmiSdkPluginCordova - getSDAuth Invoked");
    // _callbackId = command.callbackId;
    NSString *url = [command.arguments objectAtIndex:0];
    NSMutableDictionary *dict = [[NSMutableDictionary alloc]initWithCapacity:4];
    if(url != nil  && url.length > 0) {
        AppDelegate *app = [[UIApplication sharedApplication]delegate];
        SmiResult *resu = [SmiSdk getSDAuth:app.apiKey url:url userId:@""];
        [dict setObject:[self getSDStateAsString:resu.sdState] forKey:@"SdState"];
        [dict setObject:resu.url forKey:@"Url"];
        if(resu.carrierName != nil) {
            [dict setObject:resu.carrierName forKey:@"CarrierName"];
        }
        if(resu.clientIp != nil) {
            [dict setObject:resu.clientIp forKey:@"ClientIp"];
        }
        
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:dict];
        [result setKeepCallbackAsBool:NO];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    }
    else {
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        [result setKeepCallbackAsBool:NO];
        [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    }
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

-(NSString *)getSDStateAsString:(SdState) state {
    switch (state) {
        case SD_WIFI:
            return @"WIFI";
        case SD_AVAILABLE:
            return @"SD_AVAILABLE";
        case SD_NOT_AVAILABLE:
            return @"SD_NOT_AVAILABLE";
        default:
            return @"";
    }
}

@end
