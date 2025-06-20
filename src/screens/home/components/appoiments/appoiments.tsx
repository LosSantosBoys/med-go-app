import { AppoimentNotification, Container } from '@/src/components';
import { Text, View } from 'react-native';

export const Appoiments: React.FC = () => {
  return (
    <View className="flex-1 w-full bg-white">
      <Container className="flex-1" outsideClassName="py-[10px]">
        <Text className="text-base self-start mb-2 text-default-dark font-semibold">
          Próxima consulta:
        </Text>
        <AppoimentNotification />
      </Container>
    </View>
  )
}
