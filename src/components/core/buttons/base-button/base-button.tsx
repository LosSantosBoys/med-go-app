import { Text, TouchableOpacity } from "react-native"
import { BaseButtonProps } from "./props"

export const BaseButton: React.FC<BaseButtonProps> = ({ children, text, className, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={
        'flex-row items-center justify-center bg-blue-primary rounded-xl p-3 w-full h-[44px] border-none' +
        className
      }
      {...rest}
    >
      <Text className="text-center text-white text-lg font-semibold">{text}</Text>
      {children}
    </TouchableOpacity>
  )
}
