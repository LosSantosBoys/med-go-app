import { googleIcon } from "@/src/assets"
import { Image, Text, TouchableOpacity } from "react-native"
import { AuthGoogleButtonProps } from "./props"

export const AuthGoogleButton: React.FC<AuthGoogleButtonProps> = ({ className, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={
        'flex-row items-center justify-center border-[1px] border-gray-400 rounded-xl bg-white p-3 w-full h-[44px]' +
        className
      }
      {...rest}
    >
      <Image width={10} height={10} source={googleIcon} />
      <Text className="text-center text-lg font-light w-[90%]">Login com Google</Text>
    </TouchableOpacity>
  )
}
