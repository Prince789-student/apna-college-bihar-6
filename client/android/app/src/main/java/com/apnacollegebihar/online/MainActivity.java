package com.apnacollegebihar.online;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.apnacollegebihar.online.AppBlockerPlugin;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AppBlockerPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
