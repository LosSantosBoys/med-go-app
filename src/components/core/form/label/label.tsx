import { Text } from "react-native"
import { LabelProps } from "./props"

export const Label: React.FC<LabelProps> = ({ className, children, ...rest }) => {
  return (
    <Text className={`text-default-dark text-lg font-semibold ${className}`} {...rest}>
      {children}
    </Text>
  )
}
