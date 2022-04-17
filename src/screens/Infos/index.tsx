import React, { useEffect, useState } from "react";
import { Text, Image, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header";
import Gol from "../../../assets/images/gol.png";

type infoScreenProp = NativeStackNavigationProp<RootStackParamList, "Infos">;

const Infos = () => {
  const navigation = useNavigation<infoScreenProp>();

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#AF3336"
        translucent
      />
      <Header
        title="Estatísticas"
        subtitle
        onPress={() => navigation.navigate("Subtitle")}
      />
      <View style={styles.container}>
        <Image source={Gol} resizeMode="contain" style={styles.goalImage} />
        {/* <Text>teste</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default Infos;
