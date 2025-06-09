import { Text, TouchableOpacity } from "react-native"
import { LinkProps } from "./props"

export const Link: React.FC<LinkProps> = ({ children, text, className, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={'flex-row items-center justify-center bg-transparent' + className}
      {...rest}
    >
      {text && <Text className='text-center text-default-dark text-md font-normal'>{text}</Text>}
      {children}
    </TouchableOpacity>
  )
}