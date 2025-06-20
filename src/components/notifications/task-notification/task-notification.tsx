import { Text, View } from 'react-native';
import { TaskNotificationProps } from './props';

export const TaskNotification: React.FC<TaskNotificationProps> = ({ text, icon }) => {
  return (
    <View className='bg-default-blue-400 flex-row gap-2 items-center justify-center w-[49%] rounded p-2'>
      {icon}
      <Text className='text-white text-sm font-semibold'>{text}</Text>
    </View>
  )
}
