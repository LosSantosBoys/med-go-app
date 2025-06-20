import { Text, View } from 'react-native';
import { RecentActivityItemProps } from './props';

export const RecentActivitieItem: React.FC<RecentActivityItemProps> = ({ icon, title, timeAgo }) => (
  <View className="flex-row items-center gap-3 py-3 w-full">
    <View className="w-14 h-14 rounded-full border border-gray-300 justify-center items-center">
      {icon}
    </View>
    <View className="flex-1">
      <Text className="text-sm text-black">{title}</Text>
      <Text className="text-xs text-gray-500">{timeAgo}</Text>
    </View>
  </View>
);