import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import ProductionConfig from "./src/Helpers/ProductionConfig";
import Home from "./src/Screens/Home";
import StoreProvider from "./src/Context/StoreProvider";
import SingleImage from "./src/Screens/SingleImage";
import Loading from "./src/Common/Loading";
import toTitleCase from "./src/Helpers/toTitleCase";

export type RootStackParamList = {
  Home: undefined;
  SingleImage: {
    id: string;
    title: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const prod = new ProductionConfig();

prod.clearLogs();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <StoreProvider>
      <NavigationContainer>
        {/* @ts-ignore */}
        <RootStack.Navigator initialRouteName="Home">
          {/* @ts-ignore */}
          <RootStack.Group
            screenOptions={{
              headerStyle: {
                backgroundColor: "#0984e3",
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "Poppins_600SemiBold",
                color: "#fff",
              },
              headerBackButtonMenuEnabled: false,
            }}
          >
            <RootStack.Screen
              name="Home"
              options={{ title: "Image Search" }}
              component={Home}
            />
            <RootStack.Screen
              name="SingleImage"
              options={({ route }) => {
                let title = route.params.title;
                if (!title) {
                  title = "No Title";
                }
                const improvedTitle = toTitleCase(title);
                return {
                  title:
                    improvedTitle.length <= 15
                      ? improvedTitle
                      : improvedTitle.slice(0, 15) + " ...",
                };
              }}
              component={SingleImage}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </StoreProvider>
  );
};

export default App;
