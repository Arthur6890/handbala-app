import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar, View } from "react-native";
import { RootStackParamList } from "../../../src/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../components/header/index";
import Card from "../../components/card";

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#AF3336"
        translucent
      />
      <Header title="teste" />
      <View style={styles.cardsView}>
        <Card onPress={() => navigation.navigate("Infos")} />
        <Card defense onPress={() => navigation.navigate("Infos")} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
