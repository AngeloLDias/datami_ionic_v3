package com.datami;

import android.content.Context;
import android.util.Log;

import com.datami.smi.SdState;
import com.datami.smi.SdStateChangeListener;
import com.datami.smi.SmiResult;
import com.datami.smi.SmiSdk;

/**
 * Created by pawanbawankar on 10/12/20.
 */
public class DatamiInit {

    private static String TAG = "[dmi]DatamiInit";
    public static String API_KEY;
    public static SmiResult smiResult;

    public static void initSdk(Context context){

        int resApiKey = context.getResources().getIdentifier("api_key", "string", context.getPackageName());
        int resSdkMess = context.getResources().getIdentifier("sdk_messaging", "string", context.getPackageName());
        int resSdkNotif = context.getResources().getIdentifier("sdk_notficiation_messaging", "string", context.getPackageName());
        int resIcFolder = context.getResources().getIdentifier("icon_folder", "string", context.getPackageName());
        int resIcName = context.getResources().getIdentifier("icon_name", "string", context.getPackageName());

        String apiKey = context.getResources().getString(resApiKey);

        if(apiKey == null){
            apiKey = "noapikeyspecified";
        }
        API_KEY = apiKey;

        String useSdkMessaging = context.getResources().getString(resSdkMess);

        if(useSdkMessaging == null) {
            useSdkMessaging = "false";
        }

        String useSdkNotifMessaging = context.getResources().getString(resSdkNotif);

        if(useSdkNotifMessaging == null) {
            useSdkNotifMessaging = "false";
        }
        String iconFolder = null;
        String iconName = null;

        if(resIcFolder != 0 && resIcName !=  0) {
            iconFolder = context.getResources().getString(resIcFolder);
            iconName = context.getResources().getString(resIcName);
        }

        if(iconFolder == null) {
            iconFolder = "mipmap";
        }

        if(iconName == null) {
            iconName = "icon";
        }

        Log.d(TAG, "apiKey " + apiKey + " useSdkMessaging " + useSdkMessaging + " useSdkNotifMessaging " + useSdkNotifMessaging + " iconFolder " + iconFolder + " iconName " + iconName);

        boolean sdkMessaging = Boolean.parseBoolean(useSdkMessaging);
        boolean sdkNotifMessaging = Boolean.parseBoolean(useSdkNotifMessaging);

        Log.d(TAG, "sdkMessaging " + sdkMessaging + " sdkNotifMessaging " + sdkNotifMessaging);

        if(sdkNotifMessaging) {
            int iconId = context.getResources().getIdentifier(iconName, iconFolder, context.getPackageName());
            Log.d(TAG, "iconId " + iconId);
            SmiSdk.initSponsoredData(apiKey, context, "", iconId, sdkMessaging);
        }else{
            SmiSdk.initSponsoredData(apiKey, context, "", -1, sdkMessaging);
        }
    }
}
