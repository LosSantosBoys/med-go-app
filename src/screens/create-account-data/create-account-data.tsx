import { BaseButton, Container, GoBackLink } from "@/src/components";
import { InputCpf, InputDatepicker, InputPhoneNumber, InputText, Label } from "@/src/components/core/form";
import { router } from "expo-router";
import { Text, View } from "react-native";

export const CreateAccountData: React.FC = () => {
  return (
    <Container>
      <View className="flex-1 w-full">
        <GoBackLink />
        <Text className="text-2xl font-bold text-default-dark mt-5">Agora seus dados pessoais!</Text>
        <View className="mt-14">
          <Label>Nome</Label>
          <InputText placeholder="Nome" className="mt-3" />
        </View>
        <View className="mt-6">
          <Label>Número</Label>
          <InputPhoneNumber placeholder="Número" className="mt-3"  />
        </View>
        <View className="mt-6">
          <Label>CPF</Label>
          <InputCpf placeholder="CPF" className="mt-3"  />
        </View>
        <View className="mt-6">
          <Label>Data de nascimento</Label>
          <InputDatepicker className="mt-3"  />
        </View>
      </View>
      <View className="py-3 w-full">
        <BaseButton text="Continuar" onPress={() => router.push('/(tabs)')} />
      </View>
    </Container>
  )
}