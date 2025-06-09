import { Container, Header } from "@/src/components";
import { ScrollView, Text, View } from "react-native";

export const Home: React.FC = () => {
  return (
    <ScrollView className="bg-default-gray">
      <Container className="bg-default-gray flex-1">
        <View className="flex-1 justify-start items-start w-full flex-row">
          <Header />
        </View>
        <View className="flex-1 w-full py-5">
          <Text className="text-xl text-default-dark">Dashborad</Text>
        </View>
      </Container>
    </ScrollView>
  )
}