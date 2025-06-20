import { Text, View } from "react-native"

export const AppoimentNotification: React.FC = () => {
  return (
    <View className="flex-row gap-3 w-full items-center">
      <View className="w-[48px] h-[48px] rounded bg-default-green-100 justify-center items-center">
        <Text className="text-sm text-white font-semibold">
          Hoje
        </Text>
        <Text className="text-sm text-white font-semibold">
          19:00
        </Text>
      </View>
      <View className="w-full justify-center">
        <Text className="text-base self-start mb-1 text-default-dark font-semibold">
          Exame oftalmológico
        </Text>
        <Text className="text-md text-default-dark font-medium">
          Dr. Leonardo Freitas
        </Text>
        <Text className="text-md text-default-dark font-medium">
          Hospital Albert Einstein
        </Text>
      </View>
    </View>
  )
}
