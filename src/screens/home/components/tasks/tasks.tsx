import { Container, TaskNotification } from '@/src/components';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export const Tasks: React.FC = () => {
  return (
    <View className="flex-1 w-full bg-white mt-2">
      <Container className="flex-1 flex-row flex-wrap gap-1" outsideClassName="py-[10px]">
        <TaskNotification
          icon={<MaterialCommunityIcons name="hospital-box-outline" size={18} color="white" />}
          text='Remédios: 2 hoje'
        />
        <TaskNotification
          icon={<MaterialCommunityIcons name="message-text-outline" size={18} color="white" />}
          text='Mensagens: 1'
        />
        <TaskNotification
          icon={<FontAwesome5 name="hospital" size={18} color="white" />}
          text='Consultas: 1'
        />
        <TaskNotification
          icon={<MaterialCommunityIcons name="pill" size={18} color="white" />}
          text='Receitas: 3'
        />
      </Container>
    </View>
  )
}
