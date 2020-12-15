package com.datami;

import android.content.Context;
import android.util.Log;
import android.app.Application;

import com.datami.smi.SdState;
import com.datami.smi.SdStateChangeListener;
import com.datami.smi.SmiResult;
import com.datami.smi.SmiSdk;
import com.datami.DatamiInit;

/**
 * Created by pawanbawankar on 10/12/20.
 */
public class DatamiApplication extends Application implements SdStateChangeListener {

    private static String TAG = "[dmi]DatamiApplication";

    @Override
    public void onCreate() {
        super.onCreate();
        Context context = getApplicationContext();
        DatamiInit.initSdk(context);
    }

    @Override
    public void onChange(SmiResult currentSmiResult) {
        DatamiInit.smiResult = currentSmiResult;
        SdState sdState = currentSmiResult.getSdState();
        Log.d(TAG, "sponsored data state : "+sdState);
        SmiSdkPluginCordova.onChange();
    }
}
