import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, View } from "react-native";
import { InputTextIconProps } from "./props";


export const InputTextIcon: React.FC<InputTextIconProps> = ({ className, ...rest }) => {
  return (
    <View className={`flex-row items-center bg-off-white rounded-xl px-3 w-full h-[40px] gap-3 ${className}`}>
      <Ionicons name="search-sharp" size={20} color="#999" />
      <TextInput
        className="flex-1 text-dark text-lg font-light leading-[18px]"
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
}
