import { Container } from '@/src/components';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { actions } from './mocks';

const {
  requestMedicine,
  seeMedicalRecord,
  scheduleAppointment,
  talkWithProfessional
} = actions

export const Actions: React.FC = () => {
  return (
    <View className="flex-1 w-full bg-white mt-2">
      <Container className="flex-1 flex-row flex-wrap gap-1" outsideClassName="py-[10px]">
        <TouchableOpacity
          className='bg-default-green-100 flex-row gap-2 items-center justify-center w-[49%] rounded p-2 py-2'
          activeOpacity={0.8}
          onPress={() => {}}
        >
          {scheduleAppointment.icon}
          <Text className='text-white text-sm font-semibold'>{scheduleAppointment.text}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          className='bg-default-blue-400 flex-row gap-2 items-center justify-center w-[49%] rounded p-2 py-2'
          activeOpacity={0.8}
          onPress={() => {}}
        >
          {talkWithProfessional.icon}
          <Text className='text-white text-sm font-semibold'>{talkWithProfessional.text}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          className='bg-default-green-600 flex-row gap-2 items-center justify-center w-[49%] rounded p-2 py-2'
          activeOpacity={0.8}
          onPress={() => {}}
        >
          {requestMedicine.icon}
          <Text className='text-white text-sm font-semibold'>{requestMedicine.text}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          className='bg-default-green-500 flex-row gap-2 items-center justify-center w-[49%] rounded p-2 py-2'
          activeOpacity={0.8}
          onPress={() => {}}
        >
          {seeMedicalRecord.icon}
          <Text className='text-white text-sm font-semibold'>{seeMedicalRecord.text}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </Container>
    </View>
  )
}
