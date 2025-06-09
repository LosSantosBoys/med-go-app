import { AntDesign, FontAwesome, Fontisto } from "@expo/vector-icons"
import { View } from "react-native"
import { DoctorAvaliationItem } from "../doctor-avaliation-item/doctor-avaliation-item"
import { DoctorCardAvaliationsProps } from "./props"

export const DoctorCardAvaliations: React.FC<DoctorCardAvaliationsProps> = ({
  averageSatisfaction,
  expirencieYears,
  rating
}) => {
  return (
    <View className="flex-row justify-between items-center mt-2">
      <DoctorAvaliationItem
        icon={<AntDesign name="star" size={14} color="#FFC31D" />}
        text={`${rating.average.toFixed(1)} (${rating.total})`}
      />
      <DoctorAvaliationItem
        icon={<Fontisto name="person" size={14} color="#00C49A" />}
        text={expirencieYears}
      />
      <DoctorAvaliationItem
        icon={<FontAwesome name="comment" size={14} color="#2E8BFF" />}
        text={`${averageSatisfaction}% satisfação`}
      />
    </View>
  )
}
