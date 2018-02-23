package com.books;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

/**
 * Created by flowing on 2/8/18.
 */

public class ActivityStarterModule extends ReactContextBaseJavaModule {

    public ActivityStarterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ActivityStarter";
    }

    @ReactMethod
    void navigateToExample(){
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context,Quiz.class);
        context.startActivity(intent);


    }
}
