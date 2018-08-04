import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {registerScreens} from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

function start() {
  registerScreens(store, Provider); 

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [{
            stack: {
              children: [{
                component: {
                  name: 'example.FirstTabScreen',
                  passProps: {
                    text: 'This is tab 1'
                  }
                }
              }],
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  icon: require('./assets/images/one.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON'
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'example.SecondTabScreen',
                  passProps: {
                    text: 'This is tab 2'
                  },
                  options: {
                    bottomTab: {
                      text: 'Tab 2',
                      icon: require('./assets/images/two.png'),
                      testID: 'SECOND_TAB_BAR_BUTTON'
                    }
                  }
                }
              }]
            }
          }]
        }
      }
    });
  })
}

export default start;
