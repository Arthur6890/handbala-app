import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Teste } from "../screens/teste";
// import { SignIn } from "../screens/signIn";

const Stack = createNativeStackNavigator();

export type RootStackParamsList = {
  Home: undefined;
  Teste: undefined;
};

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Teste" component={Teste} />
    </Stack.Navigator>
  );
}
