import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

export type BaseButtonProps = ComponentProps<typeof TouchableOpacity> & {
  text: string;
}