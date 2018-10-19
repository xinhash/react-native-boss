import { Navigation } from "react-native-navigation";
import FirstTabScreen from "./FirstTabScreen";
import SecondTabScreen from "./SecondTabScreen";
import PushedScreen from "./PushedScreen";
import TobTabScreen1 from "./TobTabScreen1";
import TobTabScreen2 from "./TobTabScreen2";

// register all screens of the app (including internal ones)
export function registerScreens(store?: any, Provider?: any) {
  Navigation.registerComponent("example.FirstTabScreen", () => FirstTabScreen);
  Navigation.registerComponent(
    "example.SecondTabScreen",
    () => SecondTabScreen
  );
  Navigation.registerComponent(
    "example.FirstTabScreen.tab1",
    () => TobTabScreen1
  );
  Navigation.registerComponent(
    "example.FirstTabScreen.tab2",
    () => TobTabScreen2
  );
  Navigation.registerComponent("example.PushedScreen", () => PushedScreen);
}
