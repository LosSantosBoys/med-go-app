import { Container } from '@/src/components';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { RecentActivitieItem } from '../recent-activitie-item/recent-activitie-item';
import { activityData } from './mocks';

export const RecentActivities: React.FC = () => {
  return (
    <View className="flex-1 w-full bg-white mt-2">
      <Container className="flex-1 gap-1" outsideClassName="py-[15px]">
        <Text className="text-base self-start text-left mb-1 text-default-dark font-semibold">
          Atividade recente
        </Text>
        <View className='flex-row mt-1 w-full rounded overflow-hidden'>
          <TouchableOpacity
            className='bg-default-green-200 p-1 justify-center items-center w-[25%]'
            activeOpacity={0.8}
          >
            <Text className='text-white text-sm font-medium'>Exames</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className='bg-default-gray p-1 justify-center items-center w-[25%]'
            activeOpacity={0.8}
          >
            <Text className='text-default-grey-400 text-sm font-medium'>Wearables</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className='bg-default-gray p-1 justify-center items-center w-[25%]'
            activeOpacity={0.8}
          >
            <Text className='text-default-grey-400 text-sm font-medium'>Doutores</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className='bg-default-gray p-1 justify-center items-center w-[25%]'
            activeOpacity={0.8}
          >
            <Text className='text-default-grey-400 text-sm font-medium'>Outro</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={activityData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecentActivitieItem
              icon={item.icon}
              title={item.title}
              timeAgo={item.timeAgo}
            />
          )}
          className="mt-2 w-full"
        />
      </Container>
    </View>
  )
}
