import { Text, View } from "react-native"
import { DoctorAvaliationItemProps } from "./props"

export const DoctorAvaliationItem: React.FC<DoctorAvaliationItemProps> = ({ icon, text }) => {
  return (
    <View className="flex-row gap-2 items-center justify-center">
      {icon}
      <Text className="text-default-grey text-xs font-medium">{text}</Text>
    </View>
  )
}
