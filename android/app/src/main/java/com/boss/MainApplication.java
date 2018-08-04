package com.boss;

import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
      @Override
      public boolean isDebug() {
          return BuildConfig.DEBUG;
      }

      protected List<ReactPackage> getPackages() {
          // Add additional packages you require here
          // No need to add RnnPackage and MainReactPackage
          return Arrays.<ReactPackage>asList(
          );
      }

      @Override
      public List<ReactPackage> createAdditionalReactPackages() {
          return getPackages();
      }
}
