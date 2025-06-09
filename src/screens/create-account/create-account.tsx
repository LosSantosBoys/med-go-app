import { BaseButton, Container, GoBackLink, Link } from "@/src/components";
import { InputCheckbox, InputPassword, InputText, Label } from "@/src/components/core/form";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { useCreateaccount } from "./hook";

export const CreateAccount: React.FC = () => {
  const {
    agreePolitics,
    agreeTerms,
    handleChangeAgreePolitics,
    handleChangeAgreeTerms,
    handleClickSumit
  } = useCreateaccount();

  return (
    <Container>
      <View className="flex-1 w-full">
        <GoBackLink />
        <Text className="text-2xl font-bold text-default-dark mt-5">Crie uma conta</Text>
        <Text className="text-md font-light text-default-dark mt-2">O MedGo é único ecossistema brasileiro de saúde!</Text>
        <View className="mt-14">
          <Label>E-mail</Label>
          <InputText placeholder="E-mail" className="mt-3" />
        </View>
        <View className="mt-6">
          <Label>Senha</Label>
          <InputPassword placeholder="Senha" className="mt-3"  />
        </View>
        <View className="mt-7 px-1 justify-center items-start gap-6">
          <InputCheckbox
            checked={agreePolitics}
            onChange={handleChangeAgreePolitics}
          >
            <View className="flex-row items-center justify-center">
              <Text className='text-sm font-light text-default-dark'>Concordo com a </Text>
              <Text className='text-sm font-light text-blue-500 underline'>política de privacidade</Text>
            </View>
          </InputCheckbox>
          <InputCheckbox
            checked={agreeTerms}
            onChange={handleChangeAgreeTerms}
          >
            <View className="flex-row items-center justify-center">
              <Text className='text-sm font-light text-default-dark'>Concordo com a </Text>
              <Text className='text-sm font-light text-blue-500 underline'>termos e condições</Text>
            </View>
          </InputCheckbox>
        </View>
        <View className="w-[264px] mt-10 mb-7 h-[1px] bg-default-dark opacity-20 self-center"></View>
        <Link className="flex-row items-center justify-center gap-1 p-3" onPress={() => router.push('/login')}>
          <Text className="text-center text-default-dark text-md font-normal">
            Já tem uma conta? 
          </Text>
          <Text className="text-center text-default-dark text-md font-semibold">
            Faça login.
          </Text>
        </Link>
      </View>
      <View className="py-3 w-full">
        <BaseButton text="Criar conta" onPress={handleClickSumit} />
      </View>
    </Container>
  )
}