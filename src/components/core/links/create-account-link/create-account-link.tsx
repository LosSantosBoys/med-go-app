import { router } from "expo-router"
import { Text } from "react-native"
import { Link } from "../link/link"

export const CreateAccountLink: React.FC = () => {
  return (
    <Link className="flex-row items-center justify-center gap-1 p-3" onPress={() => router.push('/create-account')}>
      <Text className="text-center text-default-dark text-md font-normal">
        Não tem conta?
      </Text>
      <Text className="text-center text-default-dark text-md font-semibold">
        Crie
      </Text>
      <Text className="text-center text-default-dark text-md font-normal">
        uma.
      </Text>
    </Link>
  )
}
