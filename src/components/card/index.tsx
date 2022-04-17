import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

type props = {
  defense?: boolean;
  onPress?: () => void;
};

const Card = ({ defense, onPress }: props) => {
  return (
    <>
      {!defense && (
        <TouchableOpacity
          style={[styles.button, styles.buttonLeft]}
          onPress={onPress}
        >
          <MaterialCommunityIcons
            name="sword-cross"
            size={150}
            color="#AF3336"
          />
          <Text style={styles.text}>Ataque </Text>
        </TouchableOpacity>
      )}
      {defense && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <FontAwesome5 name="shield-alt" size={150} color="#AF3336" />
          <Text style={styles.text}>Defesa</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Card;
