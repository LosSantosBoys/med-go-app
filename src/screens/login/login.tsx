import { BaseButton, Container, CreateAccountLink, GoBackLink, Link } from "@/src/components";
import { InputCheckbox, InputPassword, InputText, Label } from "@/src/components/core/form";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { useLogin } from "./hook";

export const Login: React.FC = () => {
  const {
    handleChangeRemindMe,
    remindMe
  } = useLogin();

  return (
    <Container>
      <View className="flex-1 w-full">
        <GoBackLink />
        <Text className="text-2xl font-bold text-default-dark mt-5">Bem-vindo novamente!</Text>
        <Text className="text-md font-light text-default-dark mt-2">Por favor, insira seu e-mail e senha para entrar.</Text>
        <View className="mt-14">
          <Label>E-mail pu CPF</Label>
          <InputText placeholder="E-mail pu CPF" className="mt-3" />
        </View>
        <View className="mt-6">
          <Label>Senha</Label>
          <InputPassword placeholder="Senha" className="mt-3"  />
        </View>
        <View className="mt-7 px-1 flex-row justify-between items-center">
          <InputCheckbox
            label="Lembre-se de mim"
            checked={remindMe}
            onChange={handleChangeRemindMe}
          />
          <Link onPress={() => router.push('/forgot-password')}>
            <Text className='text-center text-default-dark text-md font-bold'>Esqueceu a senha?</Text>
          </Link>
        </View>
        <View className="w-[264px] mt-10 mb-7 h-[1px] bg-default-dark opacity-20 self-center"></View>
        <CreateAccountLink />
      </View>
      <View className="py-3 w-full">
        <BaseButton text="Login" onPress={() => router.push('/(tabs)')} />
      </View>
    </Container>
  )
}