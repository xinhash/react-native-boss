# react-native-boss

# Platform Support
  - Android
  - IOS (coming soon)

# New Features!
  - React v 16.4.1 (Also bumped "babel-preset-react-native" : "5.0.2")
  - React Native v 0.56.0
  - React Native Navigation v2

### How to integrate/debug v2 Navigation

  - Follow official [guide](https://wix.github.io/react-native-navigation/v2/#/docs/Installing) 
  - Don't miss to add the command below in package.json
    ```
    "scripts": {
        ...,
        "run-android": "cd ./android && ./gradlew app:assembleDebug && ./gradlew installDebug"
    }
    ```