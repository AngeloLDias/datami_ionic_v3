package com.datami;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.XmlResourceParser;
import android.util.Log;

import com.datami.smi.SmiResult;
import com.datami.smi.SmiSdk;

import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by pawanbawankar on 10/12/20.
 */
public class DatamiInit {

    private static String TAG = "[dmi]DatamiInit";
    public static String API_KEY;
    public static SmiResult smiResult;

    private static List<String> supportedKeys = new ArrayList(Arrays.asList("api_key", "sdk_messaging", "sdk_notficiation_messaging", "icon_folder", "icon_name"));


    public static void initSdk(Context context){

        int id = context.getResources().getIdentifier("config", "xml", context.getPackageName());
        Map<String,String> preferences = loadConfigsFromXml(context.getResources(), id);

        String apiKey = preferences.get("api_key");
        if(apiKey == null){
            apiKey = "noapikeyspecified";
        }
        API_KEY = apiKey;

        String useSdkMessaging = preferences.get("sdk_messaging");

        if(useSdkMessaging == null) {
            useSdkMessaging = "false";
        }

        String useSdkNotifMessaging = preferences.get("sdk_notficiation_messaging");

        if(useSdkNotifMessaging == null) {
            useSdkNotifMessaging = "false";
        }
        String iconFolder = preferences.get("icon_folder");
        String iconName = preferences.get("icon_name");

        if(iconFolder == null) {
            iconFolder = "mipmap";
        }

        if(iconName == null) {
            iconName = "ic_launcher";
        }

        Log.d(TAG, "useSdkMessaging: " + useSdkMessaging + ", useSdkNotifMessaging: " + useSdkNotifMessaging + ", iconFolder: " + iconFolder + ", iconName: " + iconName);

        boolean sdkMessaging = Boolean.parseBoolean(useSdkMessaging);
        boolean sdkNotifMessaging = Boolean.parseBoolean(useSdkNotifMessaging);

        Log.d(TAG, "sdkMessaging: " + sdkMessaging + ", sdkNotifMessaging: " + sdkNotifMessaging);

        if(sdkNotifMessaging) {
            int iconId = context.getResources().getIdentifier(iconName, iconFolder, context.getPackageName());
            Log.d(TAG, "iconId: " + iconId);
            SmiSdk.initSponsoredData(apiKey, context, "", iconId, sdkMessaging);
        }else{
            SmiSdk.initSponsoredData(apiKey, context, "", -1, sdkMessaging);
        }
    }

    private static Map loadConfigsFromXml(Resources res, int configXmlResourceId){
        //
        // Resources is the same thing from above that can be obtained
        // by context.getResources()
        // configXmlResourceId is the resource id integer obtained in step 1
        XmlResourceParser xrp = res.getXml(configXmlResourceId);

        Map<String,String> configs = new HashMap();

        //
        // walk the config.xml tree and save all <preference> tags we want
        //
        String preferenceTag = "preference";
        try{
            xrp.next();
            while(xrp.getEventType() != XmlResourceParser.END_DOCUMENT){
                if(preferenceTag.equals(xrp.getName())){
                    String key = matchSupportedKeyName(xrp.getAttributeValue(null, "name"));
                    if(key != null){
                        configs.put(key, xrp.getAttributeValue(null, "value"));
                    }
                }
                xrp.next();
            }
        } catch(XmlPullParserException ex){
            Log.e(TAG, ex.toString());
        }  catch(IOException ex){
            Log.e(TAG, ex.toString());
        }

        return configs;
    }

    private static String matchSupportedKeyName(String testKey){
        //
        // If key matches, return the version with correct casing.
        // If not, return null.
        // O(n) here is okay because this is a short list of just a few items
        for(String realKey : supportedKeys){
            if( realKey.equalsIgnoreCase(testKey)){
                return realKey;
            }
        }
        return null;
    }
}
