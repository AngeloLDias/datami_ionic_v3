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
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class SmiSdkPluginCordova extends CordovaPlugin {

    private static String TAG = "[dmi]SmisdkPluginCordova";
    private static CallbackContext connectionCallbackContext;

    public static void onChange() {
        JSONObject jsonResult = getResultJson();
        if (connectionCallbackContext != null) {
            Log.d(TAG, "Sending Result");
            PluginResult result = new PluginResult(PluginResult.Status.OK, jsonResult);
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
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, getResultJson());
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
        }
        return sdState;
    }

    private static JSONObject getResultJson(){
        JSONObject jsonResult = new JSONObject();
        try{
            jsonResult.put("sdState",DatamiInit.smiResult.getSdState().name());
            jsonResult.put("sdReason",DatamiInit.smiResult.getSdReason().name());
            if(DatamiInit.smiResult.getSdState()!= SdState.WIFI){
                if(!TextUtils.isEmpty(DatamiInit.smiResult.getCarrierName())) {
                    jsonResult.put("carrierName",DatamiInit.smiResult.getCarrierName());
                }
                if(!TextUtils.isEmpty(DatamiInit.smiResult.getClientIp())) {
                    jsonResult.put("clientIp",DatamiInit.smiResult.getClientIp());
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return jsonResult;
    }
}
