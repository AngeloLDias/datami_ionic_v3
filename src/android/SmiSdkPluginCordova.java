package com.datami;

import android.text.TextUtils;
import android.util.Log;

import com.datami.smi.Analytics;
import com.datami.smi.SdState;
import com.datami.smi.SmiResult;
import com.datami.smi.SmiSdk;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

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

        if (action.equals("getSDState")) {
            Log.d(TAG, "getSDState");
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, getCurrentSdState());
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
        else if (action.equals("getAnalytics")) {
            Analytics abc = SmiSdk.getAnalytics();
            JSONObject dataObject = new JSONObject();

            try {
                dataObject.put("CellularSessionTime",abc.getCellularSessionTime());
                dataObject.put("SdDataUsage",abc.getSdDataUsage());
                dataObject.put("WifiSessionTime",abc.getWifiSessionTime());
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, dataObject);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
                return true;
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        else if (action.equals("updateUserId")) {
            String userid = args.getString(0);
            if (userid != null && userid.length() > 0) {
                SmiSdk.updateUserId(userid);
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
            } else {
                PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
            }
            return true;
        }
        else if (action.equals("updateUserTag")) {
            List<String> tags = new ArrayList<String>();
            String userTags = args.getString(0);
            String[] array = userTags.split(",");
            Collections.addAll(tags, array);
            if (tags.size() > 0) {
                SmiSdk.updateUserTag(tags);
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
            } else {
                PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
            }
            return true;
        }
        else if (action.equals("getSDAuth")) {
            String url = args.getString(0);
            JSONObject dataObject = new JSONObject();
            try {
                SmiResult result = SmiSdk.getSDAuth(DatamiInit.API_KEY,cordova.getActivity().getApplicationContext(),url);
                dataObject.put("SdState",result.getSdState().name());
                dataObject.put("Url",result.getUrl());
                dataObject.put("CarrierName",result.getCarrierName());
                dataObject.put("ClientIp",result.getClientIp());
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, dataObject);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
            } catch (Exception e) {
                PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR);
                pluginResult.setKeepCallback(false);
                callbackContext.sendPluginResult(pluginResult);
                e.printStackTrace();
            }
            return true;
        }
        else if (action.equals("startSponsoredData")) {
            try{
                SmiSdk.startSponsoredData();
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
        else if (action.equals("stopSponsoredData")) {
            SmiSdk.stopSponsoredData();
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
