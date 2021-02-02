package com.datami;

import android.text.TextUtils;
import android.util.Log;

import com.datami.smi.SdState;
import com.datami.smi.SmiVpnSdk;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * This class echoes a string called from JavaScript.
 */
public class SmiSdkPluginCordova extends CordovaPlugin {

    private static String TAG = "[dmi]SmisdkPluginCordova";
    private static CallbackContext connectionCallbackContext;

    public static void onChange() {
        String sdState = "";
        sdState = DatamiInit.smiResult.getSdState().name();
        if (DatamiInit.smiResult.getSdState() == SdState.SD_NOT_AVAILABLE) {
            sdState = sdState + ", Reason: "+DatamiInit.smiResult.getSdReason().name();
        }
        if (connectionCallbackContext != null) {
            Log.d(TAG, "Sending Result");
            PluginResult result = new PluginResult(PluginResult.Status.OK, sdState);
            result.setKeepCallback(true);
            connectionCallbackContext.sendPluginResult(result);
        }
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        Log.d(TAG, "Action: "+action);
        if(args!=null){
            for(int i = 0; i < args.length(); i++) {
                Log.d(TAG, "Arg-" +i+": "+args.get(i).toString());
            }
        }

        if (action.equals("getVpnSDState")) {
            Log.d(TAG, "getVpnSDState");
            SdState state = SmiVpnSdk.getCurrentSdState();
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, state.name());
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);
            return true;
        }
        else if (action.equals("sdStateObserver")){
            Log.d(TAG, "sdStateObserver");
            this.connectionCallbackContext = callbackContext;

            if(!TextUtils.isEmpty(getCurrentSdState())){
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, getCurrentSdState());
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
            }
            return true;
        }
        else if (action.equals("startSponsoredVpn")) {
            try{
                Log.d(TAG, "startSponsoredVpn");
                SmiVpnSdk.startSponsoredData();
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
            }
            catch(Exception e) {
                PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
                e.printStackTrace();
            }
            return true;
        }
        else if (action.equals("stopSponsoredVpn")) {
            Log.d(TAG, "stopSponsoredVpn");
            SmiVpnSdk.stopSponsoredData();
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
            pluginResult.setKeepCallback(false);
            callbackContext.sendPluginResult(pluginResult);
            return true;
        }
        return false;
    }

    private String getCurrentSdState(){
        String sdState = "";

        if (DatamiInit.smiResult != null) {
            sdState = DatamiInit.smiResult.getSdState().name();
            if (DatamiInit.smiResult.getSdState() == SdState.SD_NOT_AVAILABLE) {
                sdState = sdState + ", Reason: "+DatamiInit.smiResult.getSdReason().name();
            }
        }
        return sdState;
    }
}
