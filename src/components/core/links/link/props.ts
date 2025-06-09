import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

export type LinkProps = ComponentProps<typeof TouchableOpacity> & {
  text?: string;
}