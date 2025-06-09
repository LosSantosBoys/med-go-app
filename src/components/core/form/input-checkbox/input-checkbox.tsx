import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { InputCheckboxProps } from './props';

export const InputCheckbox: React.FC<InputCheckboxProps> = ({ checked, children, onChange, label }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='w-fit flex-row gap-2 justify-center items-center'
      onPress={() => onChange(!checked)}
    >
      <View
        className={`justify-center items-center rounded-md border w-[20px] h-[20px] ${checked ? 'bg-blue-primary border-blue-primary' : 'bg-transparent border-gray-900'}`}
      >
        {checked && <Feather name="check" size={15} color="white" />}
      </View>
      {label && <Text className='text-sm font-light text-default-dark'>{label}</Text>}
      {children}
    </TouchableOpacity>
  )
}
