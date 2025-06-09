import { Container, DoctorCard, GoBackLink } from '@/src/components';
import { InputTextIcon } from '@/src/components/core/form';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useDoctors } from './hook';

export const Doctors: React.FC = () => {
  const {
    doctors,
    loading,
    loadMore,
    filtered,
    handleSearchChange
  } = useDoctors()

  return (
    <Container outsideClassName='bg-white'>
      <View className='pb-5'>
        <View className='flex-row gap-2'>
          <GoBackLink />
          <Text className="text-xl text-default-dark font-bold">Doutores</Text>
        </View>
        <InputTextIcon
          placeholder="Buscar"
          className="w-full mt-8"
          onChangeText={handleSearchChange}
          />
        <Text className="w-full text-left text-xs text-default-grey mt-5 font-medium">
          Você possui {filtered.length} médicos cadastrados
        </Text>
      </View>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <View className='mt-3'>
            <DoctorCard doctor={item} />
          </View>
        )}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator className="mb-4" size="small" color="#000" /> : null
        }
      />
    </Container>
  );
};
