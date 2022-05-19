import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import ProductionConfig from "./src/Helpers/ProductionConfig";
import Home from "./src/Screens/Home";
import StoreProvider from "./src/Context/StoreProvider";

const RootStack = createNativeStackNavigator();
const prod = new ProductionConfig();

prod.clearLogs();

const App: React.FC = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen
            name="Home"
            options={{ title: "Image Search" }}
            component={Home}
          />
        </RootStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </StoreProvider>
  );
};

export default App;
