import { TextInput } from "react-native"
import { useInputCpf } from "./hook"
import { InputCpfProps } from "./props"

export const InputCpf: React.FC<InputCpfProps> = ({ className, ...rest }) => {
  const {
    handleChange,
    value
  } = useInputCpf({ onChangeText: rest.onChangeText });

  return (
    <TextInput
      value={value}
      onChangeText={handleChange}
      maxLength={14}
      keyboardType="numeric"
      className={`bg-off-white rounded-xl p-3 w-full h-[40px] ${className}`}
      placeholderClassName="text-dark text-lg font-light opacity-50"
      {...rest}
    />
  )
}
