import { Image, Text, View } from "react-native"
import { DoctorCardHeaderProps } from "./props"

export const DoctorCardHeader: React.FC<DoctorCardHeaderProps> = ({ avatar, name, specialization }) => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row gap-3 items-center justify-center">
        <Image source={avatar} height={36} width={36} className="w-[36px] h-[36px] rounded-full" />
        <Text className="text-md text-default-dark font-semibold">{name}</Text>
      </View>
      <Text className="text-default-grey-400 text-sm font-medium">{specialization}</Text>
    </View>
  )
}
