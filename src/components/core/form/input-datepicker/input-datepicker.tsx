import { Feather } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { useInputDatepicker } from "./hook";
import { InputDatePickerProps } from "./props";

export const InputDatepicker: React.FC<InputDatePickerProps> = ({ className }) => {
  const {
    showPicker,
    handleChange,
    value,
    date,
    handleEnable
  } = useInputDatepicker();

  return (
    <View className={`w-full ${className}`}>
      <TouchableOpacity
        onPress={handleEnable}
        className="flex-row gap-3 w-full"
      >
        <View className='bg-off-white flex-1 rounded-xl p-3 h-[40px] justify-center gap-2'>
          <Text className={`text-lg flex-1 font-light leading-[19px] ${value ? "text-dark" : "text-dark/50"}`}>
            {value || "Data de nascimento"}
          </Text>
        </View>
        <View className="bg-off-white items-center justify-center rounded-xl p-1 w-[40px] h-[40px]">
          <Feather name="calendar" size={22} color="#1F2024" />
        </View>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={handleChange}
        />
      )}
    </View>
  );
}
