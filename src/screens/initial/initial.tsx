import { logo } from "@/src/assets"
import { AuthGoogleButton, BaseButton, Container, CreateAccountLink } from "@/src/components"
import { router } from "expo-router"
import { Image, Text, View } from "react-native"

export const Initial: React.FC = () => {
  return (
    <Container className="bg-white" outsideClassName="bg-white">
      <View className="flex-1 items-center justify-center">
        <Image source={logo} width={312} height={77} />
        <Text className="text-center text-md font-light mt-4">Vamos entrar na sua conta!</Text>
      </View>
      <View className="p-x-5 pb-1 gap-6">
        <View className="gap-3">
          <AuthGoogleButton />
          <BaseButton text="Login" onPress={() => router.push('/login')} />
        </View>
        <CreateAccountLink />
      </View>
    </Container>
  )
}