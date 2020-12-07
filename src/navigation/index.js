import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from '@containers/App';
import Search from '@containers/Search';
import Result from '@containers/Result';

const RootStack = createStackNavigator({
  App,
  Search,
  Result,
});

function Navigator() {
  return (
    <NavigationContainer>
      <StackActions.Navigator>
        <RootStack />
      </StackActions.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
