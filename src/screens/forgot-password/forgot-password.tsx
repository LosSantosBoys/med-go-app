import { BaseButton, Container, GoBackLink, InputText, Label } from "@/src/components";
import { Text, View } from "react-native";

export const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <View className="flex-1 w-full">
        <GoBackLink />
        <Text className="text-2xl font-bold text-default-dark mt-5">Esqueceu a senha?</Text>
        <Text className="text-md font-light text-default-dark mt-2">Por favor, insira seu e-mail ou seu CPF.</Text>
        <View className="mt-14">
          <Label>E-mail pu CPF</Label>
          <InputText placeholder="E-mail pu CPF" className="mt-3" />
        </View>
      </View>
      <View className="py-3 w-full">
        <BaseButton text="Login" />
      </View>
    </Container>
  )
}