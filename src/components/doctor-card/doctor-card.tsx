import { View } from "react-native";
import { DoctorCardAvaliations } from './doctor-card-avaliations/doctor-card-avaliations';
import { DoctorCardFooter } from './doctor-card-footer/doctor-card-footer';
import { DoctorCardHeader } from "./doctor-card-header/doctor-card-header";
import { DoctorCardProps } from "./props";

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor: {
  avatar,
  name,
  specialization,
  rating,
  expirencieYears,
  averageSatisfaction
} }) => {
  return (
    <View className="w-full p-4 bg-off-white-300 rounded-xl">
      <DoctorCardHeader
        avatar={avatar}
        name={name}
        specialization={specialization}
      />
      <DoctorCardAvaliations
        averageSatisfaction={averageSatisfaction}
        expirencieYears={expirencieYears}
        rating={rating}
      />
      <DoctorCardFooter />
    </View>
  )
}
