import { Image, Text, View } from "react-native";
import { Container } from "../core";
import { useHeader } from "./hook";

export const Header: React.FC = () => {
  const {
    name,
    avatar
  } = useHeader();

  return (
    <Container className="bg-default-gray flex-1">
      <View className="w-full flex-row justify-between items-center mt-5 bg-transparent">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-default-dark">Bem-vinda, {name}!</Text>
        </View>
        <Image
          source={avatar}
          width={40}
          height={40}
          className="rounded-full w-[48px] h-[48px]"
          />
      </View>
    </Container>
  )
}
