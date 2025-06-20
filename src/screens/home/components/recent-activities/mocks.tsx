import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const activityData = [
  {
    id: '1',
    icon: <MaterialCommunityIcons name="ambulance" size={24} color="#000" />,
    title: 'Emergência - UPA Jardim Peri',
    timeAgo: 'Ontem',
  },
  {
    id: '2',
    icon: <MaterialIcons name="bloodtype" size={24} color="#D22B2B" />,
    title: 'Exame de sangue - SMH Policlínica',
    timeAgo: '2 dias atrás',
  },
  {
    id: '3',
    icon: <FontAwesome5 name="user-md" size={24} color="#008080" />,
    title: 'Clínico Geral - Dr. Roberto Leal',
    timeAgo: '1 semana atrás',
  },
];
