import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/header";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

type subTitleScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Subtitle"
>;

const Subtitle = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header title="Legenda" />
      <View style={styles.container}>
        <Text>Subtitle</Text>
      </View>
    </SafeAreaView>
  );
};

export default Subtitle;
