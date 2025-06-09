import { View } from "react-native"
import { SafeContainer } from "../safe-container/safe-container"
import { ContainerProps } from "./props"

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  outsideClassName,
  ...rest
}) => {
  return (
    <SafeContainer>
      <View className={`flex-1 items-center justify-center py-5 px-7 bg-transparent ${outsideClassName}`}>
        <View className={`max-w-[500px] w-full flex-1 justify-center items-center ${className}`} {...rest}>
          {children}
        </View>
      </View>
    </SafeContainer>
  )
}
