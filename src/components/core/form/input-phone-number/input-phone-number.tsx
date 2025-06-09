import { Text, TextInput, View } from "react-native";
import { useInputPhoneNumber } from "./hook";
import { InputPhoneNumberProps } from "./props";

export const InputPhoneNumber: React.FC<InputPhoneNumberProps> = ({ className, ...rest }) => {
  const {
    handleChange,
    value
  } = useInputPhoneNumber();

  return (
    <View className={`flex-row items-center bg-off-white rounded-xl px-3 w-full h-[40px] ${className}`}>
      <Text className="text-dark text-lg font-light mr-2">+55</Text>
      <TextInput
        className="flex-1 text-dark text-lg font-light leading-[18px]"
        keyboardType="number-pad"
        value={value}
        onChangeText={handleChange}
        placeholder="(11) 99999-9999"
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
}
