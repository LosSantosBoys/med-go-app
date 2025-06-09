import { ImageSourcePropType } from "react-native";

export type DoctorCardProps = {
  doctor: Doctor
};

type Doctor = {
  name: string;
  avatar: ImageSourcePropType;
  specialization: string;
  rating: {
    total: number;
    average: number;
  }
  expirencieYears: string;
  averageSatisfaction: number;
};