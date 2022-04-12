import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamsList } from "../../routes/auth.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, "Home">;

export const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={styles.container}>
      <Text>testenego</Text>
      <Button title="Teste Tela" onPress={() => navigation.navigate("Teste")} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
  },
});
