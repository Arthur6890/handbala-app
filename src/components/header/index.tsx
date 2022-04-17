import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type props = {
  subtitle?: boolean;
  title: string;
  onPress?(): void;
};
const Header = ({ subtitle, title, onPress }: props) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerText}>{title} </Text>
      <TouchableOpacity onPress={onPress}>
        {subtitle && <MaterialIcons name="subtitles" size={24} color="white" />}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
