import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

export const DoctorCardFooter: React.FC = () => {
  return (
    <View className="w-full p-3 bg-default-gray rounded-xl mt-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-default-dark text-sm font-medium">Disponível Agora</Text>
        <View className="flex-row gap-2 justify-center items-center">
          <FontAwesome6 name="video" size={15} color="#33A885" />
          <Text className="text-default-green-200 text-sm">Vídeo</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        className='w-full flex-row rounded-md mt-3 p-2 bg-default-blue-400 justify-between items-center h-[36px]'
      >
        <View></View>
        <Text className='text-white text-sm font-medium'>Marcar Consulta</Text>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  )
}
