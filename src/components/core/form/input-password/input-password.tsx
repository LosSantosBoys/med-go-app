import { Feather } from '@expo/vector-icons';
import { TextInput, View } from "react-native";
import { useInputPassword } from './hook';
import { InputPasswordProps } from "./props";

export const InputPassword: React.FC<InputPasswordProps> = ({ className, ...rest }) => {
  const {
    handleChangeVisibility,
    visibilite
  } = useInputPassword();

  return (
    <View className={`bg-off-white rounded-xl p-3 pr-5 w-full h-[40px] ${className} flex-row gap-1 items-center justify-between`}>
      <TextInput
        secureTextEntry={!visibilite}
        placeholderClassName="text-dark text-lg font-light opacity-50"
        {...rest}
      />
      <Feather size={17} name={visibilite ? 'eye' : 'eye-off'} color="gray" onPress={() => handleChangeVisibility()} />
    </View>
  )
}
