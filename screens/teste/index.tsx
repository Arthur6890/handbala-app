import { View, Text, Button } from "react-native";
import React from "react";
import { RootStackParamsList } from "../../routes/auth.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type testeScreenProp = NativeStackNavigationProp<RootStackParamsList, "Teste">;

export const Teste = () => {
  const navigation = useNavigation<testeScreenProp>();

  return (
    <View>
      <Button title="Home Tela" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
