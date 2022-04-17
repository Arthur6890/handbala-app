import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Infos from "../screens/Infos";
import Subtitle from "../screens/subtitle";

export type RootStackParamList = {
  Home: undefined;
  Infos: undefined;
  Subtitle: undefined;
};

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Infos" component={Infos} />
          <Stack.Screen name="Subtitle" component={Subtitle} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
