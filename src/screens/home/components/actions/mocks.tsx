import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export const actions = {
  scheduleAppointment: {
    icon: <AntDesign name="calendar" size={20} color="white" />,
    text: 'Agendar \n Consulta',
  },
  talkWithProfessional: {
    icon: <MaterialCommunityIcons name="message-text-outline" size={20} color="white" />,
    text: 'Falar com \n Profissional',
  },
  requestMedicine: {
    icon: <MaterialCommunityIcons name="pill" size={20} color="white" />,
    text: 'Solicitar \n Receitas',
  },
  seeMedicalRecord: {
    icon: <FontAwesome name="folder-open" size={20} color="white" />,
    text: 'Ver \n Prontuario',
  },
}