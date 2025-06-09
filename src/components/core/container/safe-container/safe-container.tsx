import { SafeAreaView } from "react-native"
import { SafeContainerProps } from "./props"

export const SafeContainer: React.FC<SafeContainerProps> = ({ children, className, ...rest }) => {
  return (
    <SafeAreaView
      className={`flex-1 ${className}`}
      {...rest}
    >
      {children}
    </SafeAreaView>
  )
}
