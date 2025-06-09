import { TextInput } from "react-native"
import { InputTextProps } from "./props"

export const InputText: React.FC<InputTextProps> = ({ className, ...rest }) => {
  return (
    <TextInput
      className={`bg-off-white rounded-xl p-3 w-full h-[40px] ${className}`}
      placeholderClassName="text-dark text-lg font-light opacity-50"
      {...rest}
    />
  )
}
